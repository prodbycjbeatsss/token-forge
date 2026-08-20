TokenForge — Token Model

Project: TokenForge
Document: Token Model
Status: Active
Version: 1.0
Purpose: Define the canonical structure and behaviour of tokens within TokenForge.

---

1. Purpose

The Token Model defines the underlying structure that TokenForge uses to represent, relate, validate and export design tokens.

It does not define the exact token names, scales or semantic roles that every project must use.

Those decisions are determined by the selected archetype.

The Token Model instead provides the common framework that allows different archetypes to generate different token systems while remaining compatible with the rest of TokenForge.

---

2. Core Principle

TokenForge separates the token model from the token system generated for a project.

Token Model
    ↓
Archetype
    ↓
Generated Token System
    ↓
Components
    ↓
Validation
    ↓
Export

The Token Model defines what TokenForge understands.

The archetype defines how those capabilities are configured for a particular design-system approach.

The generated token system is the actual collection of tokens belonging to the user's project.

---

3. Token Layers

TokenForge supports a layered token architecture.

Foundations
     ↓
Primitive Tokens
     ↓
Semantic Tokens
     ↓
Component Consumption

Foundations

Foundations are the underlying design inputs from which the system can be generated.

Examples include:

- Brand colours
- Neutral colours
- Typography preferences
- Spacing preferences
- Shape preferences
- Other project-level design inputs

Foundations are not necessarily tokens themselves.

They provide the source material from which an archetype can generate the token system.

---

4. Primitive Tokens

Primitive tokens represent foundational values without assigning a specific interface role.

Examples:

color.blue.500
color.neutral.100
spacing.4
radius.medium

Primitive tokens should represent reusable values rather than individual component decisions.

A primitive may be referenced by one or more semantic tokens.

Example:

color.blue.600
        ↓
#41727C

Primitive token names and structures are determined by the selected archetype.

---

5. Semantic Tokens

Semantic tokens represent design intent or usage rather than simply representing a raw value.

Examples:

color.text.primary
color.text.secondary
color.surface.default
color.border.default
color.action.primary

A semantic token may reference a primitive token.

For example:

color.action.primary
        ↓
color.blue.600
        ↓
#41727C

This allows the underlying visual value to change without requiring every consuming interface element to be changed individually.

Semantic roles are determined by the selected archetype.

---

6. Component Consumption

Components consume semantic tokens rather than defining their own independent visual system.

The intended relationship is:

Primitive
    ↓
Semantic
    ↓
Component

For example:

color.blue.600
      ↓
color.action.primary
      ↓
Button

Components should therefore act as consumers and demonstrators of the token system.

They should not create a competing token hierarchy.

---

7. Token References

TokenForge supports relationships between tokens.

A token reference allows one token to derive its value from another token rather than duplicating the value.

Example:

color.action.primary
    → color.blue.600

References are important for:

- Consistency
- Maintainability
- Theming
- Global changes
- Semantic abstraction
- Export

TokenForge should preserve these relationships throughout editing and export where the target format supports them.

---

8. Token Types

A token has a defined type describing the kind of value it represents.

The underlying model should be capable of representing standard design-token value categories without requiring every category to be supported by every V1 archetype.

Potential categories include:

- Color
- Dimension
- Number
- Font family
- Font weight
- Duration
- Cubic Bézier
- Shadow
- Border
- Gradient
- Typography

The exact set supported by TokenForge V1 should be determined by product requirements and the capabilities of the selected archetypes.

TokenForge should not expose unsupported token types merely because they exist in an external standard.

---

9. Token Identity

Every token must have a stable identity within a project.

A token's identity should not depend solely on its displayed value.

For example:

color.action.primary

should remain the same logical token even if its referenced primitive changes from:

color.blue.600

to:

color.blue.700

This distinction allows users to modify the visual system without unintentionally changing the semantic structure.

---

10. Token Metadata

Where required, tokens may contain metadata describing their purpose and origin.

Potential metadata includes:

- Token name
- Token type
- Token value
- Reference
- Description
- Group
- Source
- Status
- Mode
- Validation state

Metadata should support the product's editing, validation and export workflows without unnecessarily increasing complexity for the user.

---

11. Archetype Relationship

The Token Model does not prescribe a single universal token naming system.

Instead, archetypes configure the token model.

Token Model
    │
    ├── defines available structure
    │
    ↓
Archetype
    │
    ├── defines naming
    ├── defines token groups
    ├── defines semantic roles
    ├── defines scales
    ├── defines relevant states
    └── defines recommended relationships
    │
    ↓
Project Token System

This allows TokenForge to support different design-system philosophies without creating separate underlying token engines.

The archetype therefore acts as the system blueprint, while the Token Model acts as the common underlying language.

---

12. User Modification

Generated tokens are recommendations and starting structures rather than immutable output.

Users should be able to modify supported token properties after generation.

Depending on the archetype and token type, this may include:

- Values
- Names
- References
- Scales
- Semantic assignments
- Token groups
- Supported metadata

However, TokenForge should protect structural relationships where changing them would create invalid or contradictory systems.

The interface should make consequential changes clear to the user.

---

13. Modes and Themes

The token model should be capable of supporting multiple modes or themes where the selected archetype supports them.

Examples:

Light
Dark
High Contrast
Brand A
Brand B

Modes should allow the same semantic role to resolve to different underlying values.

Example:

color.surface.default
       ├── Light → color.neutral.0
       └── Dark  → color.neutral.950

Support for modes should not require every V1 archetype to implement multiple themes.

The underlying model should simply avoid preventing future support.

---

14. Token Validation State

TokenForge may associate validation information with tokens and token relationships.

A token may therefore be:

- Valid
- Invalid
- Warning
- Unresolved
- Unused
- Incomplete

Validation state is derived from the validation system rather than becoming part of the token's design value.

The token model should therefore allow validation information to be associated with tokens without treating validation status as part of the token itself.

---

15. Token Dependencies

Tokens may depend on other tokens through references.

TokenForge should maintain awareness of these relationships.

For example:

color.action.primary
        ↓
color.blue.600
        ↓
#41727C

This dependency graph can be used for:

- Change propagation
- Validation
- Impact analysis
- Preview updates
- Export
- Future tooling

Circular dependencies should be detected and treated as invalid.

---

16. Standards Compatibility

TokenForge should remain compatible with recognised design-token standards where practical.

The Design Tokens Community Group (DTCG) format should be treated as an important external interoperability target.

However, the internal TokenForge model should not be unnecessarily constrained by the exact structure of an external interchange format.

The distinction is:

TokenForge internal model
        ↓
Transformation
        ↓
DTCG / other export format

This allows TokenForge to optimise its internal representation for the application while still producing standards-compatible output.

---

17. Source of Truth

Within a TokenForge project, the generated and subsequently modified token system becomes the project's source of truth.

The archetype provides the initial configuration.

The user-approved token system becomes the actual project system.

Archetype
    ↓
Initial generation
    ↓
User refinement
    ↓
Approved token system
    ↓
Source of truth

Exported files are representations of that source of truth rather than independent versions of it.

---

18. V1 Requirements

V1 requires the token model to support:

- Primitive tokens
- Semantic tokens
- Token references
- Token types required by V1
- Stable token identity
- Token metadata required by the product
- Archetype-generated structures
- User modification
- Validation relationships
- Component consumption
- Exportable representation

V1 does not require every possible design-token type or advanced token capability.

The model should be extensible without unnecessarily increasing V1 complexity.

---

19. V1 Boundary

The Token Model defines the underlying system, not the complete behaviour of each archetype.

The following therefore belong elsewhere:

Concern| Document
Product requirements| "PRODUCT.md"
Archetype definitions| "ARCHETYPES.md"
Colour generation| "COLOUR-ENGINE.md"
Validation rules| "VALIDATION.md"
Component catalogue| "COMPONENTS.md"
Export implementation| "EXPORT-SYSTEM.md"
Application architecture| "ARCHITECTURE.md"

This separation prevents the token model from becoming an uncontrolled collection of product requirements.

---

20. Summary

The Token Model provides the common foundation that allows TokenForge to support different design-system archetypes while maintaining a consistent internal architecture.

Its core relationship is:

Foundations
     ↓
Archetype
     ↓
Primitive Tokens
     ↓
Semantic Tokens
     ↓
Components
     ↓
Validation
     ↓
Export

The key principle is:

«The token model defines what TokenForge can represent. The archetype defines how a particular project uses that model.»