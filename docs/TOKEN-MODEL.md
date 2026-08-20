# TokenForge — Token Model

**Project:** TokenForge  
**Document:** Token Model  
**Status:** Active  
**Version:** 1.1  
**Last Updated:** 21 August 2026  
**Purpose:** Define the canonical token structure, types, relationships, naming architecture, and behaviour used throughout TokenForge.

---

## 1. Purpose

The Token Model defines the common underlying language that TokenForge uses to represent, relate, validate and export design tokens.

It establishes what TokenForge can represent without prescribing how every project must organise or name those tokens.

The Token Model is shared across archetypes.

An archetype configures the common model into a particular design-system architecture by defining its token groups, scales, semantic roles, naming conventions and recommended relationships.

The core distinction is:

> **The Token Model defines what TokenForge can represent. The archetype defines how a particular project uses that model.**

---

## 2. Core Architecture

TokenForge separates the underlying token model from the generated token system.

    Token Model
         ↓
    Archetype
         ↓
    Generated Token System
         ↓
    User Refinement
         ↓
    Approved Token System
         ↓
    Components / Validation / Export

The Token Model is the common foundation.

The archetype provides the initial system architecture.

The generated token system becomes the user's actual project system after refinement and approval.

Components, Validation and Export consume or evaluate that system rather than creating competing sources of truth.

---

## 3. Token Layers

TokenForge uses a layered token architecture:

    Foundations
         ↓
    Primitive Tokens
         ↓
    Semantic Tokens
         ↓
    Component Consumption

### Foundations

Foundations are underlying project inputs used to generate the token system.

Examples include:

- Brand colours
- Neutral colours
- Typography preferences
- Spacing preferences
- Shape preferences
- Other project-level design inputs

Foundations are not necessarily tokens themselves.

They provide source material from which the archetype generates the project's token system.

### Primitive Tokens

Primitive tokens represent reusable foundational values without assigning a specific interface role.

Examples include:

- A colour value
- A spacing dimension
- A font family
- A font weight
- A duration
- A shadow definition

Primitive tokens provide the underlying values from which semantic tokens can derive their meaning.

### Semantic Tokens

Semantic tokens represent design intent or usage rather than merely representing a raw value.

Examples include:

- Text colour
- Surface colour
- Border colour
- Primary action colour
- Content spacing
- Interactive state values

A semantic token can reference a primitive token.

### Component Consumption

Components consume tokens from the system rather than defining an independent visual system.

The intended relationship is:

    Primitive
         ↓
    Semantic
         ↓
    Component

Components therefore act as consumers and demonstrations of the token system.

---

## 4. Token Types

A token has a defined type describing the kind of value it represents.

TokenForge V1 uses a common token-type model across archetypes.

Archetypes do not create separate incompatible token type systems. They configure and organise the supported capabilities according to their design-system architecture.

### V1 Primitive Types

TokenForge V1 supports:

- Color
- Dimension
- Number
- Font Family
- Font Weight
- Duration
- Cubic Bézier

### V1 Composite Types

TokenForge V1 supports:

- Stroke Style
- Border
- Shadow
- Gradient
- Typography

These types align with the kinds of values required to represent the design systems targeted by TokenForge while remaining compatible with the DTCG interoperability model where practical.

TokenForge should not expose additional token types merely because an external standard supports them. A type must have a clear product requirement before being added to V1.

---

## 5. Dimension as a General Measurement Type

TokenForge uses `Dimension` for values that represent a measurement.

This can include:

- Spacing
- Size
- Width
- Height
- Radius
- Border thickness
- Other dimensional values

TokenForge does not require separate primitive token types for each of these concepts.

Their meaning is established through token category, semantic role or component usage.

For example:

    Spacing
        ↓
    Dimension

    Radius
        ↓
    Dimension

    Border width
        ↓
    Dimension

This avoids unnecessary duplication in the underlying token model.

---

## 6. Shape and Radius

Radius is represented using the `Dimension` type.

For example:

    shape
        radius
            small
            medium
            large

The archetype determines the available scale, naming convention and recommended usage.

TokenForge does not require a separate `Radius` primitive type.

---

## 7. Elevation and Shadow

TokenForge does not require a separate primitive `Elevation` type.

Visual elevation can be represented through `Shadow` tokens and semantic relationships.

For example:

    Elevation
         ↓
    Semantic elevation role
         ↓
    Shadow token

This allows different archetypes to express elevation differently while maintaining a consistent underlying representation.

An archetype may choose to expose elevation as a user-facing category even though the underlying token value is represented by a shadow.

---

## 8. Primitive Token Structure

Primitive tokens represent reusable values without assigning interface meaning.

Their exact naming and grouping are determined by the archetype's naming architecture.

The underlying representation should retain structured information such as:

- Stable identity
- Category
- Name segments
- Type
- Value
- Description where applicable
- Group
- Mode where applicable
- Source information where applicable

The internal model should not depend on a single export syntax.

For example, a spacing token may internally be represented as a structured token within a `spacing` group rather than relying on a flat string such as:

    spacing.4

This is important because some export standards, including DTCG, use periods as alias syntax and therefore do not permit periods in token or group names.

TokenForge should preserve hierarchy structurally and allow each export adapter to produce the appropriate target representation.

---

## 9. Semantic Tokens

Semantic tokens represent design intent.

Examples include:

    text
        primary
        secondary

    surface
        default
        raised

    action
        primary
        secondary

    border
        default

The exact semantic vocabulary is determined by the selected archetype.

Semantic tokens should communicate meaningful design roles rather than arbitrary project-specific labels.

For example:

    Semantic role
          ↓
    Primitive reference
          ↓
    Resolved value

This allows the underlying visual value to change without requiring every consuming component to be modified independently.

---

## 10. Token Identity

Every token must have a stable internal identity within a project.

A token's identity must not depend solely on its displayed or exported name.

For example, a semantic token representing the primary action colour should remain the same logical token even if its primitive reference changes.

    Primary action
          ↓
    Before: blue scale value
          ↓
    After: darker blue scale value

The semantic token remains the same logical entity.

Stable identity is required for:

- References
- Dependency tracking
- Validation
- Impact analysis
- Component consumption
- Renaming
- Export
- Change propagation

---

## 11. Token Naming Architecture

Token names are part of the design-system architecture.

TokenForge therefore does not treat token naming as unrestricted free-form text editing.

The user can customise supported naming conventions, but the system must preserve consistency within each token category.

### Category-level naming

A naming convention applies to a category rather than to individual tokens.

For example, a spacing scale may use:

    Numeric

    1
    2
    3
    4
    5
    6

or:

    T-shirt

    xs
    sm
    md
    lg
    xl
    2xl

If the user changes the spacing naming convention, the entire spacing category must be updated consistently.

TokenForge must not allow a category to become a mixture of unrelated naming conventions.

For example, this should not be permitted:

    xs
    spacing.2
    medium
    lg
    whatever

### Naming conventions preserve relationships

Changing a naming convention must not change the underlying ordering, scale or relationships of the tokens.

For example:

    Numeric

    1
    2
    3
    4
    5
    6

may become:

    T-shirt

    xs
    sm
    md
    lg
    xl
    2xl

while preserving the original scale relationships.

---

## 12. Primitive Naming

Primitive token naming can provide greater customisation than semantic naming.

Archetypes may provide supported naming conventions for categories such as:

- Spacing
- Colour scales
- Typography scales
- Radius
- Elevation
- Motion
- Other appropriate primitive categories

The user can select from or customise supported conventions where the archetype permits it.

However, naming changes must remain internally coherent.

TokenForge should favour category-level transformations over individual token renaming.

---

## 13. Semantic Naming

Semantic names require stronger architectural protection than primitive names.

A semantic token name communicates intent.

For example:

    text.primary
    surface.default
    action.primary
    border.default

These names describe what the token is for rather than merely what value it contains.

Archetypes therefore establish the semantic vocabulary used by their generated systems.

Users may be allowed to customise supported semantic naming conventions in the future, but TokenForge must prevent changes that make the semantic architecture contradictory, ambiguous or incoherent.

Semantic naming should therefore be treated as a controlled part of the system architecture rather than unrestricted text.

---

## 14. Component Token Naming

Component-level token names require the strongest structural constraints.

A component token describes a value in the context of a specific component or component state.

Examples include:

    Button
        primary
        hover
        disabled

    Text Field
        border
        focus
        error

Component token naming must remain consistent with:

- The component model
- Component states
- Semantic roles
- Token relationships
- The selected archetype

Users should not be able to arbitrarily rename component tokens in a way that breaks these relationships.

---

## 15. Token References

TokenForge supports references between tokens.

A reference allows a token to derive its value from another token rather than duplicating the value.

For example:

    Semantic token
          ↓
    Primitive token
          ↓
    Resolved value

References are important for:

- Consistency
- Maintainability
- Theming
- Global changes
- Semantic abstraction
- Validation
- Export

TokenForge should preserve references throughout editing and export where the selected target format supports an equivalent representation.

If a target format cannot preserve a reference directly, the export adapter must resolve it safely without changing the resulting design meaning.

---

## 16. Token Dependencies

TokenForge maintains awareness of relationships between tokens.

For example:

    text.primary
          ↓
    neutral.900
          ↓
    Resolved colour

The dependency graph supports:

- Change propagation
- Validation
- Impact analysis
- Preview updates
- Component updates
- Export

Circular dependencies must be detected and treated as invalid.

Unresolved references must also be detected by Validation.

---

## 17. Token Metadata

Where required, tokens may contain metadata describing their purpose, structure or origin.

Potential metadata includes:

- Stable identity
- Token type
- Token value
- Reference
- Description
- Group
- Source
- Mode
- Validation information

Metadata should support editing, validation and export without unnecessarily increasing the complexity presented to users.

---

## 18. Modes and Themes

The Token Model must be capable of supporting multiple modes or themes.

Examples include:

    Light
    Dark
    High Contrast
    Brand A
    Brand B

Modes allow the same semantic role to resolve to different underlying values.

For example:

    surface.default
            │
            ├── Light → light surface value
            │
            └── Dark  → dark surface value

Support for multiple modes does not require every V1 archetype to expose multiple themes.

The underlying model must simply avoid preventing future support.

---

## 19. Validation State

TokenForge may associate validation information with tokens and their relationships.

A token or relationship may be associated with states such as:

- Pass
- Warning
- Error
- Unresolved
- Unused
- Incomplete

These states are produced by the Validation system.

They are not part of the token's design value or identity.

The Token Model therefore provides the relationships and structure required for Validation without owning the validation rules themselves.

---

## 20. Archetype Relationship

The Token Model provides the common capabilities shared across TokenForge archetypes.

The archetype configures those capabilities into a particular design-system architecture.

    Token Model
         │
         ├── Token types
         ├── Token relationships
         ├── Identity
         ├── Structural rules
         └── Common capabilities
                 │
                 ↓
             Archetype
                 │
                 ├── Token groups
                 ├── Naming conventions
                 ├── Scales
                 ├── Semantic roles
                 ├── Recommended relationships
                 └── Component usage
                         │
                         ↓
                 Generated Token System

Different archetypes may organise the same underlying capabilities differently.

The archetype therefore acts as the system blueprint while the Token Model acts as the common underlying language.

---

## 21. User Modification

Generated tokens are recommendations and starting structures rather than immutable output.

Users should be able to modify supported properties after generation.

Depending on the token category and archetype, this may include:

- Values
- References
- Naming conventions
- Scales
- Semantic assignments
- Supported groups
- Supported metadata
- Modes where available

Token names should not be treated as unrestricted individual text fields.

Changes to naming conventions must preserve category-level consistency.

TokenForge should protect structural relationships where changing them would create invalid or contradictory systems.

Consequential changes should be made clear to the user.

---

## 22. Source of Truth

Within a TokenForge project, the generated and subsequently modified token system becomes the project's source of truth.

The archetype provides the initial architecture.

The user refines that architecture.

The approved token system becomes the authoritative project representation.

    Archetype
         ↓
    Initial generation
         ↓
    User refinement
         ↓
    Validation
         ↓
    Approved token system
         ↓
    Source of truth

Components, Validation and exports consume or evaluate this source of truth.

Exported files are representations of the source of truth rather than independent versions of it.

---

## 23. Standards Compatibility

TokenForge should remain compatible with recognised design-token standards where practical.

The Design Tokens Community Group (DTCG) format is an important interoperability target.

However, the internal TokenForge model should not be unnecessarily constrained by the exact structure of an external interchange format.

The intended relationship is:

    TokenForge Internal Model
              ↓
          Export Adapter
              ↓
    DTCG / CSS / Tailwind / JavaScript-TypeScript

The internal model must therefore remain structurally robust enough to represent the design system independently of a particular export syntax.

Export adapters are responsible for translating the internal model into the conventions and limitations of the selected target format.

---

## 24. V1 Requirements

TokenForge V1 requires the Token Model to support:

- Primitive tokens
- Semantic tokens
- Component consumption
- Token references
- Token dependencies
- Stable token identity
- V1 primitive token types
- V1 composite token types
- Structured token hierarchy
- Category-level naming conventions
- Semantic naming constraints
- Token metadata required by the product
- Archetype-generated structures
- User refinement
- Validation relationships
- Modes where required by an archetype
- Exportable representation

V1 does not require every possible design-token capability or external standard feature.

The model should remain extensible without unnecessarily increasing V1 complexity.

---

## 25. V1 Boundary

The Token Model defines the underlying token system rather than the complete behaviour of every TokenForge subsystem.

| Concern | Document |
|---|---|
| Product requirements | `PRODUCT.md` |
| Archetype definitions | `ARCHETYPES.md` |
| Colour generation and colour mathematics | `COLOUR-ENGINE.md` |
| Validation rules and evaluation | `VALIDATION.md` |
| Component catalogue and behaviour | `COMPONENTS.md` |
| Export implementation | `EXPORT-SYSTEM.md` |
| Application architecture | `ARCHITECTURE.md` |
| AI capabilities and boundaries | `AI-SYSTEM.md` |

This separation prevents the Token Model from becoming an uncontrolled collection of product requirements.

---

## 26. Summary

The Token Model provides the common foundation that allows TokenForge to represent different design-system architectures while maintaining a consistent internal model.

Its core relationship is:

    Common Token Model
           ↓
        Archetype
           ↓
    Generated Token System
           ↓
    User Refinement
           ↓
    Approved Token System
           ↓
    Components / Validation / Export

The key principles are:

> **The Token Model defines what TokenForge can represent.**

> **The archetype defines how a particular project organises and uses that model.**

> **Naming can be customised through controlled category-level conventions, not unrestricted individual renaming.**

> **The approved token system is the project's source of truth.**