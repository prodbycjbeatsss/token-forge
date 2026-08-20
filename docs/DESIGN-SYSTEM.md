# TokenForge — Design System

**Project:** TokenForge
**Document:** Design System
**Status:** Active
**Version:** 1.0
**Last Updated:** 20 August 2026

---

## 1. Purpose

This document defines what constitutes a design system created within TokenForge.

A TokenForge design system is the complete, user-owned system produced from:

- User foundations
- A selected archetype
- The Token Model
- Generation rules
- User refinement
- Supported component relationships
- Validation requirements

The design system is more than a collection of token values.

It is the connected set of design decisions, relationships and semantic roles that allows those values to be used consistently across an interface.

---

## 2. Core Principle

«A design system is a connected system of decisions, not a list of values.»

TokenForge should therefore evaluate the system as a whole.

A generated system should provide:

- Consistent foundations
- Clear token relationships
- Meaningful semantic roles
- Reusable values
- Predictable component behaviour
- Valid relationships
- Exportable structure

The goal is not to maximise the number of tokens.

The goal is to create a coherent system that can be understood, used and maintained.

---

## 3. Design-System Layers

TokenForge uses a layered architecture:

    Foundations
         ↓
    Primitive Tokens
         ↓
    Semantic Tokens
         ↓
    Component Consumption
         ↓
    Validation
         ↓
    Export

Each layer has a different purpose.

### Foundations

The user's underlying design inputs.

Examples include:

- Brand colours
- Neutral colours
- Typography preferences
- Spacing preferences
- Radius preferences
- Other supported foundational values

### Primitive Tokens

Reusable foundational values without a specific interface role.

Examples:

    color.blue.600
    spacing.4
    radius.md

### Semantic Tokens

Tokens representing design intent or interface meaning.

Examples:

    color.text.primary
    color.surface.default
    color.action.primary

### Component Consumption

The point at which semantic tokens are applied to interface components.

### Validation

The system evaluates whether the resulting relationships and usage are valid.

### Export

The complete user-approved system is transformed into the selected external representation.

---

## 4. Foundations Are Not the Design System

Foundations provide the raw design direction from which TokenForge can generate a system.

For example:

    Brand Colour
        ↓
    Colour Engine
        ↓
    Primitive Colour Scale
        ↓
    Semantic Colour Roles

A foundation may therefore influence many tokens without becoming an individual token itself.

This distinction prevents the design system from becoming a direct collection of user inputs.

---

## 5. Primitive Layer

Primitive tokens represent reusable values.

They should generally avoid describing a specific interface role.

For example:

    color.blue.600

is a primitive value.

Whereas:

    color.action.primary

is a semantic role.

Primitive tokens may be referenced by multiple semantic tokens.

This creates a reusable foundation for the rest of the system.

---

## 6. Semantic Layer

Semantic tokens express intended usage.

Examples include:

    color.text.primary
    color.text.secondary
    color.surface.default
    color.border.default
    color.action.primary

Semantic tokens should provide the abstraction layer between foundational values and component usage.

For example:

    color.blue.600
          ↓
    color.action.primary
          ↓
    Button

Changing the primitive can therefore alter the appearance of the interface without requiring every consuming component to be manually rewritten.

---

## 7. Component Layer

Components demonstrate how the design system behaves when used in an interface.

The preferred relationship is:

    Primitive
        ↓
    Semantic
        ↓
    Component

Components should normally consume semantic tokens rather than arbitrary primitive values.

TokenForge V1 provides reference components to exercise the design system.

These components are:

- Demonstration tools
- Stress tests
- Validation targets
- Visualisation tools

They are not intended to become a complete production component library.

---

## 8. Token Relationships

A useful design system depends on relationships between values rather than isolated values.

TokenForge should preserve relationships such as:

    Semantic Token
         ↓
    Primitive Token
         ↓
    Raw Value

These relationships support:

- Consistency
- Maintainability
- Change propagation
- Theming where supported
- Validation
- Impact analysis
- Export

Breaking an important relationship may therefore be more significant than changing an individual value.

---

## 9. Naming and Architecture

Token names and groups are determined by the selected archetype within the capabilities of the Token Model.

TokenForge should not impose one universal naming architecture across every archetype.

For example, two archetypes may use different naming conventions while remaining compatible with the same underlying Token Model.

The distinction is:

    Token Model
        ↓
    Common capabilities

    Archetype
        ↓
    Specific architecture

    Project
        ↓
    User-approved system

The generated naming system therefore belongs to the project and its selected archetype rather than being hard-coded globally.

---

## 10. Design-System Coherence

A design system should be internally coherent.

Coherence may involve:

- Consistent scales
- Consistent semantic roles
- Meaningful token relationships
- Predictable component usage
- Consistent states
- Appropriate reuse
- Avoidance of unnecessary duplication

TokenForge should not treat every difference as an error.

A user may intentionally choose different values or structures.

Validation should distinguish between objectively invalid conditions and recommendations or warnings.

---

## 11. Component-Specific Tokens

Component-specific tokens may exist where a distinct semantic role is genuinely required.

For example:

    button.focus-ring
    button.icon-gap

However, TokenForge should avoid generating component-specific tokens merely because a component has a property.

The preferred order is:

    Existing semantic role
          ↓
    Reuse where appropriate

Only when a distinct component-level semantic requirement exists should a component-specific token be introduced.

This reduces unnecessary token proliferation.

---

## 12. States

A complete design system must be capable of representing relevant interface states for the components it supports.

Examples include:

- Default
- Hover
- Pressed
- Focused
- Disabled
- Selected
- Error

Not every component requires every state.

The relevant states depend on the component and archetype.

State representation should allow TokenForge to test whether the system remains understandable and usable when interface conditions change.

---

## 13. Modes and Themes

The underlying Token Model is capable of supporting modes or themes where the selected architecture provides them.

Examples may include:

- Light
- Dark
- High Contrast
- Brand variants

Modes allow the same semantic role to resolve to different values.

For example:

    color.surface.default

    Light → light surface value
    Dark  → dark surface value

Modes are not required for every V1 archetype.

TokenForge should therefore support the underlying capability without forcing every generated system to implement multiple modes.

---

## 14. Accessibility

Accessibility is a property of the system in use, not simply a property of individual colour tokens.

For example, a colour may be valid as an isolated value but become problematic when used as:

- Text
- A border
- A button background
- A disabled state
- A selected state
- A layered surface

TokenForge therefore evaluates relevant accessibility relationships through the Validation and Component systems.

The Design System document defines the expectation.

The Validation system performs the actual evaluation.

---

## 15. Design-System Quality

A TokenForge design system should be evaluated against several qualities.

### Coherence

The system should form a consistent visual and semantic language.

### Reusability

Values and semantic roles should be reusable where appropriate.

### Clarity

The relationship between foundational values and their intended usage should be understandable.

### Flexibility

Users should be able to modify the system without unnecessarily destroying its structure.

### Testability

The system should be capable of being exercised through the Component Lab.

### Validity

The system should satisfy the applicable validation rules.

### Interoperability

The system should be representable through supported export formats.

### Maintainability

Relationships should be preserved rather than replaced with unnecessary duplicated values.

---

## 16. User Ownership

The generated design system is a starting point.

The user owns the resulting system.

The lifecycle is:

    Archetype
        ↓
    Generated System
        ↓
    User Refinement
        ↓
    User-Approved System
        ↓
    Source of Truth

Divergence from the selected archetype is not automatically an error.

The archetype provides the initial architecture.

The user's approved system becomes the actual design system.

---

## 17. Archetype Relationship

An archetype determines the initial design-system architecture.

It may define:

- Token groups
- Naming conventions
- Semantic roles
- Scales
- Recommended relationships
- States
- Component expectations
- Generation rules

The archetype does not become part of the user's exported system as an immutable authority.

Instead:

    Archetype
        ↓
    Configuration
        ↓
    Generated System
        ↓
    User Changes
        ↓
    Final System

This allows established-system archetypes to provide useful starting points without preventing users from creating their own design language.

---

## 18. Established-System Influence

Established-system archetypes may be informed by documented systems such as:

- Material Design
- Apple Human Interface Guidelines
- Microsoft Fluent

These references provide design principles and architectural inspiration.

They do not define the user's final design system.

TokenForge should distinguish between:

    Reference System
        ↓
    Archetype
        ↓
    TokenForge Generation
        ↓
    User's Design System

A generated system should not be represented as an official implementation of the external system.

Relevant attribution and source information belongs in `ARCHETYPES.md` and `SOURCES.md`.

---

## 19. Design-System Generation

Generation combines:

1. User foundations
2. Selected archetype
3. Token Model capabilities
4. Generation rules
5. Applicable validation requirements

The resulting system should be:

- Inspectable
- Editable
- Reproducible
- Validatable
- Previewable
- Exportable

Generation creates a starting system rather than a final answer.

---

## 20. User Modification

Users should be able to modify supported aspects of the generated system.

Depending on the selected archetype and token type, this may include:

- Values
- Names
- References
- Scales
- Semantic assignments
- Supported token groups
- Supported states

Changes should propagate through dependent components and validation where relevant.

The system should make consequential changes understandable to the user.

---

## 21. Validation Relationship

Validation evaluates the current design system rather than the original archetype alone.

The relationship is:

    Design System
         ↓
    Validation
         ↓
    Results
         ↓
    User Correction
         ↓
    Updated Design System

Validation may identify:

- Broken references
- Structural problems
- Accessibility failures
- Inconsistent relationships
- Missing requirements
- Other defined system problems

Validation results do not become part of the design-system values themselves.

---

## 22. Export Relationship

The design system is the source from which exports are generated.

The workflow is:

    User-Approved Design System
            ↓
       Export Selection
            ↓
     Format Readiness Check
            ↓
        Transformation
            ↓
           Export

The exported representation is not a second source of truth.

If the user changes the design system after an export, the export should be treated as an older representation until regenerated.

---

## 23. Standards Compatibility

TokenForge should remain compatible with recognised design-token standards where practical.

The Design Tokens Community Group specification is an important interoperability target.

However, the internal TokenForge design-system model should not simply become a copy of an external interchange format.

The distinction is:

    TokenForge Design System
            ↓
       Export Adapter
            ↓
      DTCG / CSS / JSON /
      Tailwind / TypeScript
            ↓
       External Project

This allows TokenForge to maintain a useful internal model while producing standards-compatible representations.

---

## 24. Platform Independence

The design system should remain conceptually platform-independent.

A colour, spacing value or semantic role should represent a design decision rather than a particular programming language.

Platform-specific concerns belong primarily to the export layer.

For example:

    Semantic Token
          ↓
    CSS Representation

or:

    Semantic Token
          ↓
    TypeScript Representation

The underlying design decision remains the same.

---

## 25. V1 Design-System Scope

V1 should focus on the core architecture required to create useful design systems.

V1 requires:

- Foundations
- Primitive tokens
- Semantic tokens
- Token references
- Relevant token types
- Stable token identity
- Supported component consumption
- Relevant component states
- Validation relationships
- Exportable structure

V1 does not require every possible design-token capability.

Advanced capabilities should only be introduced when they provide clear product value.

---

## 26. What Makes a System Complete?

A TokenForge design system should be considered complete enough for export when it has:

1. A defined project foundation.
2. A selected archetype.
3. A generated and user-reviewed token structure.
4. Valid token relationships.
5. The required semantic roles for its supported system.
6. Relevant component usage.
7. No blocking validation problems.
8. Passed the required export-readiness checks for the selected format.

"Complete" does not mean that every possible design token exists.

It means the system is coherent, usable and sufficiently validated for its intended purpose.

---

## 27. Boundaries

This document defines the overall structure of a TokenForge-generated design system.

The following belong elsewhere:

| Concern | Primary Document |
|---|---|
| Product purpose and scope | `PRODUCT.md` |
| Application architecture | `ARCHITECTURE.md` |
| Archetype definitions | `ARCHETYPES.md` |
| Token representation | `TOKEN-MODEL.md` |
| Colour generation | `COLOUR-ENGINE.md` |
| Component catalogue and behaviour | `COMPONENTS.md` |
| Validation rules | `VALIDATION.md` |
| Export behaviour | `EXPORT-SYSTEM.md` |
| AI boundaries | `AI-SYSTEM.md` |
| External references | `SOURCES.md` |

`DESIGN-SYSTEM.md` connects these systems conceptually without replacing their individual specifications.

---

## 28. Summary

A TokenForge design system is the user's complete, connected set of design decisions produced through the TokenForge workflow.

Its core structure is:

    Foundations
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

The selected archetype determines the initial architecture.

The Token Model provides the common underlying structure.

The user owns and refines the resulting system.

Components demonstrate how the system behaves.

Validation determines whether the system contains detectable problems.

Export transforms the approved system into an external representation.

The central principle is:

«TokenForge does not simply generate tokens. It helps the user create a coherent system in which those tokens work together.»