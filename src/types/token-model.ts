// src/types/token-model.ts

export type PrimitiveTokenType =
  | 'color'
  | 'dimension'
  | 'number'
  | 'fontFamily'
  | 'fontWeight'
  | 'duration'
  | 'cubicBezier';

export type CompositeTokenType =
  | 'strokeStyle'
  | 'border'
  | 'shadow'
  | 'gradient'
  | 'typography';

export type TokenType = PrimitiveTokenType | CompositeTokenType;

export type InteractiveState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focused'
  | 'disabled'
  | 'selected'
  | 'error';

export interface TokenReference {
  targetId: string;
  path?: string;
}

export interface BaseToken {
  id: string;
  name: string;
  type: TokenType;
  description?: string;
  group: string;
  state?: InteractiveState;
}

export interface PrimitiveToken<T = string | number> extends BaseToken {
  layer: 'primitive';
  value: T;
}

export interface SemanticToken<T = string | number> extends BaseToken {
  layer: 'semantic';
  value?: T;
  reference: TokenReference;
}

export type TokenNode = PrimitiveToken | SemanticToken;

export interface TokenSystem {
  version: string;
  archetypeId: string;
  archetypeVersion: string;
  tokens: Record<string, TokenNode>;
  scales: {
    spacing: string[];
    radius: string[];
    fontSize: string[];
  };
}

export type ArchetypeId =
  | 'material-inspired'
  | 'apple-inspired'
  | 'fluent-inspired'
  | 'minimal'
  | 'editorial';

export interface ArchetypeDefinition {
  id: ArchetypeId;
  name: string;
  category: 'established' | 'native';
  version: string;
  referenceSource?: string;
  supportedNamingConventions: {
    spacing: ('numeric' | 'tshirt')[];
    radius: ('numeric' | 'tshirt')[];
  };
}
