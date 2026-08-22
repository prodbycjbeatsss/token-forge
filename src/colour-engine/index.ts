// src/colour-engine/index.ts
import Color from 'colorjs.io';

export interface ColourScaleOptions {
  baseHex: string;
  steps?: number;
  targetGamut?: 'srgb' | 'p3';
}

/**
 * Parses and validates an input colour string, ensuring it is treated 
 * as an encoded sRGB or colour-space-aware value[span_5](start_span)[span_5](end_span).
 */
export function parseColour(input: string): Color {
  try {
    const color = new Color(input);
    return color;
  } catch (error) {
    throw new Error(`Invalid colour input: "${input}"`);
  }
}

/**
 * Generates an OKLCH perceptual colour scale from a base brand colour 
 * while maintaining controlled lightness progression[span_6](start_span)[span_6](end_span).
 */
export function generateOklchScale(options: ColourScaleOptions): string[] {
  const base = parseColour(options.baseHex);
  const steps = options.steps || 9;
  
  // Convert base to OKLCH coordinates
  const oklch = base.to('oklch');
  const h = oklch.h || 0;
  const c = Math.min(oklch.c, 0.37); // Bound chroma to prevent out-of-gamut clipping spikes

  const scale: string[] = [];
  
  // Generate lightness steps from 0.95 (lightest) down to 0.15 (darkest)
  for (let i = 0; i < steps; i++) {
    // Distribute lightness evenly across a perceptual scale range
    const l = 0.95 - (i / (steps - 1)) * 0.80;
    
    // Construct OKLCH colour
    const stepColor = new Color('oklch', [l, c * (l > 0.5 ? 0.9 : 1.1), h]);
    
    // Map to target gamut (default sRGB) with explicit gamut handling[span_7](start_span)[span_7](end_span)
    if (!stepColor.inGamut('srgb')) {
      stepColor.to('srgb', { method: 'css' }); // Standard gamut mapping
    }

    scale.push(stepColor.toString({ format: 'hex' }));
  }

  return scale;
}

/**
 * Calculates the WCAG 2.2 contrast ratio between two colours using relative luminance[span_8](start_span)[span_8](end_span).
 */
export function calculateContrast(colourA: string, colourB: string): number {
  const c1 = parseColour(colourA);
  const c2 = parseColour(colourB);
  
  return c1.contrast(c2, 'wcag21');
}

/**
 * Evaluates whether a foreground and background pair satisfies WCAG 2.2 text contrast (4.5:1)[span_9](start_span)[span_9](end_span).
 */
export function checkTextAccessibility(foreground: string, background: string, isLargeText = false): boolean {
  const ratio = calculateContrast(foreground, background);
  const minimumRequired = isLargeText ? 3.0 : 4.5;
  return ratio >= minimumRequired;
}
