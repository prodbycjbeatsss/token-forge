// src/colour-engine/__tests__/colour-engine.test.ts
import { parseColour, generateOklchScale, calculateContrast, checkTextAccessibility } from '../index';

describe('Colour Engine (Deterministic Core)', () => {
  it('correctly parses valid hex colours', () => {
    const col = parseColour('#3b82f6');
    expect(col).toBeDefined();
    expect(col.toString({ format: 'hex' })).toBe('#3b82f6');
  });

  it('throws an error on invalid colour input', () => {
    expect(() => parseColour('not-a-colour')).toThrow('Invalid colour input');
  });

  it('generates an OKLCH perceptual scale with the correct number of steps', () => {
    const scale = generateOklchScale({ baseHex: '#3b82f6', steps: 9 });
    expect(scale).toHaveLength(9);
    // Ensure all items are valid hex strings
    scale.forEach(hex => {
      expect(hex).toMatch(/^#[0-9a-fA-F]{6}$/);
    });
  });

  it('calculates WCAG contrast ratios accurately', () => {
    // Black on white should have maximum contrast (~21)
    const contrastBlackWhite = calculateContrast('#000000', '#ffffff');
    expect(contrastBlackWhite).toBeGreaterThan(20);

    // Identical colours should have a contrast of 1
    const contrastSame = calculateContrast('#3b82f6', '#3b82f6');
    expect(contrastSame).toBeCloseTo(1, 1);
  });

  it('evaluates text accessibility correctly against WCAG 2.2 thresholds', () => {
    // White text on dark blue background should pass normal text (4.5:1)
    const isAccessible = checkTextAccessibility('#ffffff', '#1e3a8a', false);
    expect(isAccessible).toBe(true);

    // Light grey on white should fail normal text criteria
    const isFailing = checkTextAccessibility('#d1d5db', '#ffffff', false);
    expect(isFailing).toBe(false);
  });
});
