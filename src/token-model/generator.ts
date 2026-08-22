// src/token-model/generator.ts
import { TokenSystem, TokenNode, PrimitiveToken, SemanticToken } from '../types/token-model';
import { generateOklchScale } from '../colour-engine';
import { getArchetype } from '../archetypes';

export interface GenerateSystemOptions {
  archetypeId: string;
  brandHex: string;
  projectName?: string;
}

/**
 * Deterministically generates a complete canonical token system 
 * from foundations and a selected archetype.
 */
export function generateTokenSystem(options: GenerateSystemOptions): TokenSystem {
  const archetype = getArchetype(options.archetypeId);
  const tokens: Record<string, TokenNode> = {};

  // 1. Generate primitive colour scale using the colour engine
  const primaryScale = generateOklchScale({ baseHex: options.brandHex, steps: 9 });
  
  primaryScale.forEach((hex, index) => {
    const stepNumber = (index + 1) * 100; // e.g., 100, 200 ... 900
    const id = `color.primary.${stepNumber}`;
    tokens[id] = {
      id,
      name: `primary-${stepNumber}`,
      type: 'color',
      layer: 'primitive',
      group: 'color',
      value: hex,
    };
  });

  // 2. Generate standard primitive spacing scale
  const spacingValues = [0, 4, 8, 16, 24, 32, 48, 64];
  const spacingScale: string[] = [];

  spacingValues.forEach((val, index) => {
    const id = `spacing.${index + 1}`;
    const name = `${index + 1}`;
    spacingScale.push(id);
    tokens[id] = {
      id,
      name,
      type: 'dimension',
      layer: 'primitive',
      group: 'spacing',
      value: `${val}px`,
    };
  });

  // 3. Generate baseline semantic tokens mapping to primitives
  const semanticPrimaryId = 'color.action.primary';
  tokens[semanticPrimaryId] = {
    id: semanticPrimaryId,
    name: 'action-primary',
    type: 'color',
    layer: 'semantic',
    group: 'color',
    reference: {
      targetId: 'color.primary.600', // Reference middle scale step
    },
  };

  return {
    version: '1.0.0',
    archetypeId: archetype.id,
    archetypeVersion: archetype.version,
    tokens,
    scales: {
      spacing: spacingScale,
      radius: ['radius.sm', 'radius.md', 'radius.lg'],
      fontSize: ['font.size.sm', 'font.size.md', 'font.size.lg'],
    },
  };
}
