# TokenForge — Archetypes

**Project:** TokenForge  
**Document:** Archetypes  
**Status:** Active  
**Version:** 1.1  
**Last Updated:** 21 August 2026  
**Purpose:** Define how TokenForge uses established design-system references and TokenForge-native design philosophies as blueprints for generating project-specific token systems.

---

## 1. Purpose

Archetypes are the starting blueprints used by TokenForge to generate a project's design-token system.

An archetype defines how the common Token Model is organised and configured for a particular design-system philosophy.

It can define:

- Token groups
- Scales
- Semantic roles
- Naming conventions
- Recommended relationships
- Generation rules
- Recommended states
- Other system-level configuration

An archetype does **not** define a separate token model.

All archetypes use the common Token Model defined in `TOKEN-MODEL.md`.

The core relationship is:

    Token Model
         ↓
    Archetype
         ↓
    Generated Token System
         ↓
    User Refinement
         ↓
    Approved Token System

The archetype is therefore a starting architecture rather than the finished design system.

---

## 2. Core Principle

> **An archetype provides a coherent starting structure; the user owns the resulting system.**

TokenForge should avoid forcing users to construct a token architecture from an empty canvas.

Instead, the user selects an archetype that provides a considered starting structure.

The user can then modify the generated system to suit their brand, product and requirements.

Archetypes should therefore optimise for:

- Coherent starting points
- Consistent architecture
- Established design principles where applicable
- Clear semantic relationships
- Appropriate defaults
- Customisability
- Reproducibility
- Extensibility

The archetype should reduce unnecessary decisions without preventing meaningful user control.

---

## 3. Archetype Categories

TokenForge V1 contains two categories of archetype.

### 3.1 Established-System Archetypes

Established-system archetypes are informed by publicly documented and established design systems.

V1 includes:

- Material Inspired
- Apple Inspired
- Fluent Inspired

These archetypes use recognised design-system principles as references while generating a system specifically for the TokenForge user.

They must not be presented as official implementations of the referenced systems.

---

### 3.2 TokenForge-Native Archetypes

TokenForge-native archetypes are created by TokenForge around broader design philosophies rather than being directly based on one external design system.

V1 includes:

- Minimal
- Editorial

Future native archetypes may be introduced when there is a clear product or user need.

Potential future directions include:

- Expressive
- Utility
- Soft
- Bold

These are possibilities rather than V1 commitments.

---

## 4. Common Token Model

Every archetype uses the same underlying Token Model.

The Token Model defines what TokenForge can represent.

The archetype defines how those capabilities are configured.

    Common Token Model
            ↓
        Archetype
            ↓
    Specific configuration
            ↓
    Generated Token System

The archetype therefore does not create its own token types.

For example, an archetype can decide to use:

- Colour
- Dimension
- Typography
- Shadow
- Border
- Motion

in different ways, but it cannot invent an incompatible token type outside the Token Model without changing the Token Model itself.

The common model allows different design philosophies to produce substantially different systems while remaining compatible with TokenForge's Components, Validation and Export systems.

---

## 5. Archetype Configuration

An archetype may configure the following aspects of the Token Model:

- Token groups
- Primitive token structure
- Semantic token structure
- Naming conventions
- Scale definitions
- Semantic roles
- Recommended references
- State requirements
- Mode expectations
- Generation rules
- Recommended defaults
- Component usage expectations
- Validation expectations

An archetype should configure the common model rather than redefine it.

For example:

    Token Model
         ↓
    Dimension
         ↓
    Archetype
         ↓
    Spacing scale
         ↓
    Project spacing tokens

The Token Model provides the capability.

The archetype determines how that capability is used.

---

## 6. Token Types Across Archetypes

Different archetypes do not need to use every available token type in exactly the same way.

For example, one archetype may place greater emphasis on:

- Typography
- Spacing
- Surface relationships

while another may place greater emphasis on:

- Tonal colour relationships
- Elevation
- Interaction states

Both can still use the same underlying Token Model.

This distinction is important because established design systems do not necessarily organise their design languages identically.

Material, Apple and Fluent may all use concepts such as colour, typography, spacing, shape and elevation, but their structures, naming conventions, relationships and intended usage can differ.

TokenForge therefore models the **common capabilities**, while archetypes model the **design-system-specific organisation**.

---

## 7. Established-System References

Established-system archetypes may draw from publicly available documentation, specifications and guidance published by the organisations responsible for those systems.

Primary references include:

- Google Material Design / Material 3
- Apple Human Interface Guidelines
- Microsoft Fluent

Other systems may be considered for future archetypes.

The relevant authoritative sources must be recorded in `SOURCES.md`.

TokenForge should favour primary sources wherever possible.

Research and references inform the archetype but do not turn TokenForge into an implementation of the external system.

---

## 8. Reference vs Reproduction

An established-system archetype is informed by its reference system.

It is not intended to reproduce the external design system in its entirety.

For example:

    Material Design principles
             +
        User's brand
             +
      TokenForge Model
             +
      Archetype configuration
             ↓
    Material Inspired TokenForge system

The resulting system belongs to the user.

TokenForge should use established systems to inform appropriate areas such as:

- Design philosophy
- Token architecture
- Semantic concepts
- Colour relationships
- Component concepts
- State concepts
- Naming patterns where appropriate
- Other documented system principles

TokenForge should not imply that a generated system is an official implementation of the referenced system.

---

## 9. Attribution

Established-system archetypes should clearly identify their reference system.

Attribution should be visible during archetype selection.

For example:

    Material Inspired

    A token architecture influenced by Google's
    Material Design principles.

    Reference: Google Material 3

The relevant authoritative reference should also be recorded in `SOURCES.md`.

Attribution, trademark and licensing requirements must be reviewed against the current terms applicable to each referenced system before implementation.

TokenForge should not make legal claims about third-party systems without verifying the relevant current source.

---

## 10. Archetype Generation

When a user selects an archetype, TokenForge uses it as the blueprint for generating the initial token system.

Generation combines:

1. The selected archetype
2. User-provided foundations
3. Token Model rules
4. Generation logic
5. Applicable validation rules

Example:

    User foundations
           +
    Material Inspired
           +
      Token Model
           ↓
    Generated token system

The generated result is a starting point rather than an immutable prescription.

The user must be able to inspect and refine the generated system.

---

## 11. Foundations and Archetypes

Foundations provide the project-specific inputs from which the archetype generates the initial system.

Examples include:

- Brand colours
- Neutral colours
- Typography preferences
- Spacing preferences
- Shape preferences
- Other supported foundational values

The same foundation can therefore produce different results depending on the selected archetype.

For example:

    Same brand colour
          │
          ├── Material Inspired
          │        ↓
          │   Material-inspired relationships
          │
          ├── Apple Inspired
          │        ↓
          │   Apple-inspired relationships
          │
          └── Minimal
                   ↓
              Minimal relationships

The foundation is the input.

The archetype determines how that input is organised into the token system.

---

## 12. Naming Conventions

Naming is part of an archetype's architecture.

An archetype may define recommended naming conventions for categories such as:

- Spacing
- Colour scales
- Typography scales
- Radius
- Motion
- Other primitive categories

Naming conventions must operate consistently at the category level.

The user should not be able to create arbitrary mixtures of naming conventions within a category.

For example, a spacing category should not become:

    xs
    spacing.2
    medium
    lg
    whatever

Instead, if the user changes the spacing naming convention, TokenForge should transform the complete category consistently.

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

while preserving the underlying scale relationships.

---

## 13. Primitive Naming

Primitive naming can provide greater customisation than semantic naming.

An archetype may provide supported conventions for its primitive categories.

The user can select or customise a supported convention where permitted.

However, the underlying token relationships must remain unchanged.

Changing:

    spacing.1
    spacing.2
    spacing.3

to:

    xs
    sm
    md

changes the names.

It does not change which value is smaller, larger or related to another token.

TokenForge should favour controlled naming transformations rather than unrestricted individual renaming.

---

## 14. Semantic Naming

Semantic naming requires stronger architectural constraints.

Semantic names communicate design intent.

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

The exact semantic vocabulary is determined by the archetype.

A user may customise semantic naming where TokenForge provides a supported convention, but arbitrary changes that make the architecture ambiguous or contradictory should not be permitted.

The goal is to allow personalisation without allowing the semantic vocabulary to lose coherence.

---

## 15. Component Naming and Structure

Component-level naming and structure are more tightly controlled than primitive naming.

An archetype may establish recommended component roles and states, but the component system itself is defined in `COMPONENTS.md`.

The relationship is:

    Archetype
         ↓
    Recommended roles/states
         ↓
    Component System
         ↓
    Token consumption

The archetype must not create a separate component-token architecture outside the common Token Model.

---

## 16. Archetype Integrity

User customisation should not automatically be treated as a violation of the archetype.

For example, a user selecting Material Inspired may substantially alter:

- Colours
- Typography
- Spacing
- Radius
- Semantic values
- Supported naming conventions

The project can still retain the Material Inspired archetype as its original blueprint.

TokenForge should distinguish between:

    Original Archetype Configuration

and:

    Current User-Approved Token System

This distinction allows users to customise the system without implying that every deviation is an error.

---

## 17. Archetype Drift

TokenForge should distinguish between ordinary user customisation and structural changes that substantially alter the original archetype.

Normal customisation may include:

- Changing colours
- Changing values
- Adjusting scales
- Changing supported naming conventions
- Changing references
- Modifying semantic assignments

These should not automatically remove the archetype association.

A future auditing system may identify significant divergence from an archetype, but V1 does not need to score or police archetype fidelity.

The user's goal is to create a useful system, not to remain perfectly faithful to a reference system.

---

## 18. User Ownership and Customisation

Users are expected to modify the generated system.

The archetype establishes the initial structure.

The user determines the final system.

    Archetype
         ↓
    Recommendation
         ↓
    User decisions
         ↓
    Final system

Depending on the category and architecture, users may be able to modify:

- Token values
- References
- Naming conventions
- Scales
- Semantic assignments
- Supported groups
- Other supported properties

TokenForge should protect structural relationships where changing them would create an invalid or contradictory system.

---

## 19. Archetype Selection

An archetype should be selected when creating a project.

The selection experience should communicate:

- Archetype name
- Category
- Design philosophy
- Reference system where applicable
- Short description
- Major characteristics
- Appropriate use cases where useful
- Version

The user should understand the consequences of the selection without needing to understand the underlying token architecture.

---

## 20. Archetype Switching

V1 does not support switching an existing project from one archetype to another.

Once a project has been generated from an archetype, that archetype remains the project's original blueprint.

This prevents potentially destructive changes to an already customised system.

For example:

    Project
         ↓
    Material Inspired v1.0
         ↓
    User customisation

The project does not automatically become:

    Apple Inspired

or another archetype.

Future versions may introduce explicit archetype migration, but this should be treated as a significant transformation rather than a simple setting change.

---

## 21. Archetype Versioning

Archetypes are independently versioned.

For example:

    Material Inspired v1.0
    Material Inspired v2.0

A project records the archetype version from which its initial system was generated.

This ensures reproducibility.

If TokenForge releases a new version of an archetype, existing projects should not silently change.

For example:

    Existing Project
         ↓
    Material Inspired v1.0
         ↓
    Remains unchanged

A new project may instead select:

    Material Inspired v2.0

---

## 22. Why Versioning Matters

An archetype update could potentially change:

- Token structure
- Token names
- Semantic roles
- Scales
- Component states
- Generation rules
- Validation expectations
- Export structure

Automatically applying these changes to existing projects could alter a user's established design system without their consent.

Therefore:

> **Archetype updates must not silently modify existing projects.**

Future migration functionality may allow users to deliberately move between versions.

---

## 23. Established-System Archetype Principles

Established-system archetypes should prioritise the underlying principles of the reference system rather than superficial visual copying.

For example, a Material Inspired archetype may reflect relevant Material principles around:

- Semantic colour roles
- Tonal colour relationships
- Component states
- Interaction patterns
- Design-token organisation

while still generating values and structures appropriate to the user's project.

The same principle applies to Apple Inspired and Fluent Inspired.

The purpose is to provide a useful design-system starting point, not to recreate an external product.

---

## 24. Material Inspired

**Category:** Established-system  
**Reference:** Google Material Design / Material 3

The Material Inspired archetype should use publicly documented Material principles as its primary reference.

It should provide a structured starting point influenced by Material's approach to:

- Colour roles
- Tonal colour relationships
- Semantic usage
- Component states
- Interaction states
- Design-system structure

The resulting system should remain customisable and should not imply that it is an official Material implementation.

---

## 25. Apple Inspired

**Category:** Established-system  
**Reference:** Apple Human Interface Guidelines

The Apple Inspired archetype should use Apple's publicly available Human Interface Guidelines as its primary design reference.

It should focus on principles relevant to:

- Clarity
- Hierarchy
- Platform-aware interface design
- Interaction states
- Typography
- Spacing
- Surface treatment
- System consistency

The archetype should translate relevant principles into TokenForge's token architecture rather than attempting to reproduce Apple's complete design language.

---

## 26. Fluent Inspired

**Category:** Established-system  
**Reference:** Microsoft Fluent

The Fluent Inspired archetype should use Microsoft's publicly available Fluent design guidance as its primary reference.

It should provide a starting architecture informed by relevant Fluent principles around:

- Design tokens
- Colour
- Typography
- Spacing
- Elevation
- Interaction states
- Component behaviour

As with the other established-system archetypes, the resulting system remains a TokenForge-generated, user-owned system.

---

## 27. Minimal

**Category:** TokenForge-native

Minimal is a TokenForge-native archetype focused on restrained visual systems and clear hierarchy.

Potential characteristics include:

- Limited colour complexity
- Strong semantic hierarchy
- Restrained surface treatment
- Simple spacing relationships
- Minimal decorative variation
- Clear component states
- Strong emphasis on usability

Minimal should not simply remove tokens.

It should provide a coherent system in which fewer visual decisions produce a deliberate and consistent result.

---

## 28. Editorial

**Category:** TokenForge-native

Editorial is a TokenForge-native archetype focused on typography, hierarchy and content presentation.

Potential characteristics include:

- Strong typographic hierarchy
- Deliberate spacing
- Content-focused surfaces
- Controlled colour usage
- Clear distinction between primary and supporting information
- Flexible content layouts

Editorial should provide a foundation suitable for interfaces where typography and content structure are central to the visual experience.

---

## 29. Archetype and Components

Archetypes may influence the components and states used to demonstrate the resulting token system.

For example:

    Archetype
         ↓
    Recommended semantic roles
         ↓
    Component requirements
         ↓
    Component preview

However, the component system remains separate from the archetype.

Components consume the resulting token system according to the principles established in `TOKEN-MODEL.md`.

The V1 component catalogue and behaviour are defined in `COMPONENTS.md`.

---

## 30. Archetype and Validation

Archetypes may establish recommended validation expectations.

For example, an archetype may define:

- Required semantic roles
- Required interaction states
- Expected component states
- Accessibility expectations
- Other structural requirements

However, validation itself belongs to the Validation system defined in `VALIDATION.md`.

The archetype provides context.

The Validation system performs the evaluation.

This prevents archetypes from becoming independent validation engines.

---

## 31. Archetype and Export

The selected archetype does not determine the export format.

Export represents the final user-approved token system.

The relationship is:

    Archetype
         ↓
    Generated system
         ↓
    User customisation
         ↓
    Validation
         ↓
    Export

The exported result should therefore represent what the user actually created rather than simply exporting the original archetype configuration.

Export behaviour is defined in `EXPORT-SYSTEM.md`.

---

## 32. Adding New Archetypes

TokenForge should support adding new archetypes without changing the fundamental Token Model.

A new archetype should provide:

- Archetype identity
- Category
- Version
- Design philosophy
- Reference sources where applicable
- Token configuration
- Semantic structure
- Naming conventions
- Generation rules
- Component/state expectations
- Validation expectations
- Attribution requirements where applicable

New established-system archetypes should be evaluated against authoritative sources recorded in `SOURCES.md`.

New TokenForge-native archetypes should have a clearly documented design philosophy and rationale.

---

## 33. Archetype Quality Requirements

Before an archetype becomes available to users, it should be evaluated for:

### Coherence

The generated token system should form a consistent design language.

### Usability

The resulting system should support realistic interface construction.

### Accessibility

Relevant colour and interaction relationships should satisfy applicable accessibility requirements.

### Customisability

Users should be able to adapt the generated system without immediately breaking its architecture.

### Reproducibility

The same archetype version and equivalent inputs should produce predictable results.

### Interoperability

The resulting token system should remain compatible with TokenForge's export architecture.

### Documentation

The principles and sources behind an archetype should be documented.

---

## 34. V1 Archetype Set

TokenForge V1 provides five archetypes.

| Archetype | Category | Primary Reference |
|---|---|---|
| Material Inspired | Established-system | Google Material Design / Material 3 |
| Apple Inspired | Established-system | Apple Human Interface Guidelines |
| Fluent Inspired | Established-system | Microsoft Fluent |
| Minimal | TokenForge-native | TokenForge design philosophy |
| Editorial | TokenForge-native | TokenForge design philosophy |

This set provides a balance between recognised design-system approaches and TokenForge's own design philosophies.

The V1 set should remain intentionally small.

Additional archetypes should be introduced based on product requirements rather than attempting to provide an exhaustive catalogue.

---

## 35. Relationship to Other Documents

| Concern | Primary Document |
|---|---|
| Product purpose and scope | `PRODUCT.md` |
| Authoritative references | `SOURCES.md` |
| Underlying token structure | `TOKEN-MODEL.md` |
| Archetype definitions | `ARCHETYPES.md` |
| Colour generation | `COLOUR-ENGINE.md` |
| Validation | `VALIDATION.md` |
| Components | `COMPONENTS.md` |
| Export | `EXPORT-SYSTEM.md` |
| Application architecture | `ARCHITECTURE.md` |
| AI functionality and boundaries | `AI-SYSTEM.md` |
| Product development sequence | `ROADMAP.md` |

This separation prevents archetypes from becoming a second product specification or an alternative token engine.

---

## 36. Summary

Archetypes are the mechanism through which TokenForge turns its common Token Model into useful project-specific starting points.

The architecture is:

    Authoritative Sources
            ↓
        Archetype
            ↓
       Token Model
            ↓
    Generated Token System
            ↓
      User Refinement
            ↓
        Validation
            ↓
        Components
            ↓
          Export

Established-system archetypes allow TokenForge to build upon recognised public design-system principles.

TokenForge-native archetypes allow the product to develop its own design philosophies.

All archetypes share the same underlying Token Model.

The archetype determines how that model is organised, named and configured.

Neither category dictates the user's final system.

The user's generated and refined token system becomes the project's source of truth.

> **Choose a considered starting point. Make it yours. Build the system.**