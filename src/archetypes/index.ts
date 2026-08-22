// src/archetypes/index.ts
import { ArchetypeDefinition } from '../types/token-model';

export const V1_ARCHETYPES: Record<string, ArchetypeDefinition> = {
  'material-inspired': {
    id: 'material-inspired',
    name: 'Material Inspired',
    category: 'established',
    version: '1.0',
    referenceSource: 'Google Material 3',
    supportedNamingConventions: {
      spacing: ['numeric', 'tshirt'],
      radius: ['numeric', 'tshirt'],
    },
  },
  'apple-inspired': {
    id: 'apple-inspired',
    name: 'Apple Inspired',
    category: 'established',
    version: '1.0',
    referenceSource: 'Apple Human Interface Guidelines',
    supportedNamingConventions: {
      spacing: ['tshirt', 'numeric'],
      radius: ['tshirt', 'numeric'],
    },
  },
  'fluent-inspired': {
    id: 'fluent-inspired',
    name: 'Fluent Inspired',
    category: 'established',
    version: '1.0',
    referenceSource: 'Microsoft Fluent',
    supportedNamingConventions: {
      spacing: ['numeric', 'tshirt'],
      radius: ['numeric', 'tshirt'],
    },
  },
  'minimal': {
    id: 'minimal',
    name: 'Minimal',
    category: 'native',
    version: '1.0',
    supportedNamingConventions: {
      spacing: ['numeric', 'tshirt'],
      radius: ['numeric', 'tshirt'],
    },
  },
  'editorial': {
    id: 'editorial',
    name: 'Editorial',
    category: 'native',
    version: '1.0',
    supportedNamingConventions: {
      spacing: ['tshirt', 'numeric'],
      radius: ['tshirt', 'numeric'],
    },
  },
};

export function getArchetype(id: string): ArchetypeDefinition {
  const archetype = V1_ARCHETYPES[id];
  if (!archetype) {
    throw new Error(`Unknown archetype ID: "${id}"`);
  }
  return archetype;
}
