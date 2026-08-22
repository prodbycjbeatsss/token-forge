// src/token-model/__tests__/generator.test.ts
import { generateTokenSystem } from '../generator';

describe('Token Generation Pipeline', () => {
  it('generates a valid canonical token system from brand colour and archetype', () => {
    const system = generateTokenSystem({
      archetypeId: 'material-inspired',
      brandHex: '#3b82f6',
    });

    expect(system).toBeDefined();
    expect(system.archetypeId).toBe('material-inspired');
    
    // Check that primitive colour scale was generated
    expect(system.tokens['color.primary.600']).toBeDefined();
    expect(system.tokens['color.primary.600'].value).toBeDefined();

    // Check that semantic tokens reference primitives correctly
    const semanticAction = system.tokens['color.action.primary'] as any;
    expect(semanticAction).toBeDefined();
    expect(semanticAction.layer).toBe('semantic');
    expect(semanticAction.reference.targetId).toBe('color.primary.600');
  });

  it('throws an error for invalid archetypes', () => {
    expect(() => generateTokenSystem({
      archetypeId: 'non-existent-archetype',
      brandHex: '#3b82f6',
    })).toThrow('Unknown archetype ID');
  });
});
