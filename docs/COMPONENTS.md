# TokenForge — Components

**Project:** TokenForge  
**Document:** Components  
**Status:** Active  
**Version:** 1.0  
**Purpose:** Define the V1 component model, reference components, token consumption, states, validation relationships, and Component Lab responsibilities.

---

# 1. Purpose

The Component system provides the layer between TokenForge's token system and realistic interface usage.

Its purpose is to demonstrate, exercise and validate how a user's design tokens behave when applied to reusable interface components.

Components are therefore not simply collections of tokens.

A component combines:

- Purpose
- Anatomy
- Properties
- Variants
- States
- Behaviour
- Token consumption
- Accessibility considerations
- Validation relationships

The core relationship is:

    Primitive Tokens
          ↓
    Semantic Tokens
          ↓
    Component Usage
          ↓
    Component Preview
          ↓
    Validation

The Component Lab allows users to see how their token system behaves in realistic interface contexts before exporting it.

---

# 2. Product Role

The Component Lab exists to answer a practical question:

> **Does this token system actually work when applied to interface components?**

A token system can be mathematically valid and structurally correct while still producing poor interface results.

For example:

- A colour palette may pass primitive-level checks but create poor button contrast.
- Spacing values may be individually valid but create inconsistent component proportions.
- Typography may work independently but create poor hierarchy when combined.
- State colours may be distinguishable individually but fail accessibility requirements in context.

Components therefore act as a practical stress test for the design system.

---

# 3. Component Philosophy

TokenForge should not attempt to become a complete UI component library in V1.

The V1 Component Lab provides a curated set of reference components designed to exercise the token system.

These components are:

- Reference implementations
- Visualisation tools
- Validation targets
- Design-system stress tests

They are not intended to replace production component libraries.

The user should ultimately be able to export their design system and use it with their preferred implementation framework.

---

# 4. Component Architecture

A component is conceptually structured as:

    Component
    ├── Purpose
    ├── Anatomy
    ├── Properties
    ├── Variants
    ├── States
    ├── Token Usage
    ├── Accessibility
    └── Validation

Not every component requires every property.

For example, a Card may have:

    Card
    ├── Anatomy
    ├── Variants
    ├── Token Usage
    └── Accessibility

while a Button may have:

    Button
    ├── Anatomy
    ├── Properties
    ├── Variants
    ├── States
    ├── Token Usage
    ├── Accessibility
    └── Validation

The model must support component-specific differences without requiring every component to use an identical structure.

---

# 5. Relationship to Tokens

Components consume the token system.

The preferred hierarchy is:

    Primitive
       ↓
    Semantic
       ↓
    Component

For example:

    color.blue.600
          ↓
    action.primary
          ↓
    Button.background

The component should normally consume semantic tokens rather than directly referencing primitives.

This preserves the separation between foundational values and their intended interface meaning.

---

# 6. Component-Specific Tokens

TokenForge should support component-specific tokens where they are genuinely useful.

For example:

    button.focus-ring
    button.icon-gap
    button.minimum-height

However, component-specific tokens should not be generated simply because a component contains a property.

The preferred approach is:

    Existing semantic token
            ↓
    Reuse where appropriate

Only when a component requires a distinct semantic role should a component-specific token be introduced.

This prevents unnecessary token proliferation.

---

# 7. Component Anatomy

Each component should define its relevant visual anatomy.

For example:

    Button
    ├── Container
    ├── Leading Icon
    ├── Label
    └── Trailing Icon

Or:

    Text Field
    ├── Label
    ├── Field Container
    ├── Input
    ├── Leading Icon
    ├── Trailing Icon
    ├── Helper Text
    └── Error Message

Anatomy allows TokenForge to associate token usage and validation requirements with meaningful component parts.

---

# 8. Component Properties

Properties describe configurable characteristics of a component.

Examples include:

    Button
    ├── Variant
    ├── Size
    ├── Icon
    └── Width

Properties should be modelled independently from states.

For example:

    Variant = Primary
    State = Hover

is different from:

    Variant = Secondary
    State = Hover

This allows the Component Lab to test combinations systematically.

---

# 9. Variants

Variants represent deliberate design variations within a component.

Examples:

### Button

    Primary
    Secondary
    Tertiary
    Destructive

### Card

    Default
    Elevated
    Outlined

### Badge

    Neutral
    Informative
    Positive
    Warning
    Negative

The exact variants should be defined by the TokenForge reference component rather than inherited automatically from any external design system.

Established systems provide architectural inspiration, not a requirement to reproduce their component catalogues.

---

# 10. States

States represent changes in component condition or interaction.

Common states include:

    Default
    Hover
    Pressed
    Focused
    Disabled
    Selected
    Error

Not every component uses every state.

For example:

    Button
    ├── Default
    ├── Hover
    ├── Pressed
    ├── Focused
    └── Disabled

while:

    Checkbox
    ├── Unselected
    ├── Selected
    ├── Hover
    ├── Focused
    ├── Disabled
    └── Error

The component model must allow state sets to differ between components.

---

# 11. V1 Reference Components

TokenForge V1 provides 12 reference components.

They are selected to provide broad coverage of token relationships without attempting to create a complete component library.

## Foundation

1. Button
2. Icon Button
3. Badge

## Input

4. Text Field
5. Select
6. Checkbox
7. Radio
8. Switch

## Navigation

9. Tabs

## Containment

10. Card
11. Dialog

## Feedback

12. Tooltip

---

# 12. Button

The Button is one of the primary TokenForge stress-test components.

### Anatomy

    Button
    ├── Leading Icon
    ├── Label
    └── Trailing Icon

### V1 variants

    Primary
    Secondary
    Tertiary
    Destructive

### V1 states

    Default
    Hover
    Pressed
    Focused
    Disabled

### Token categories exercised

- Colour
- Typography
- Spacing
- Sizing
- Radius
- Border
- Focus
- Iconography

The Button should be capable of exposing failures in colour contrast, state differentiation, typography, spacing and focus treatment.

---

# 13. Icon Button

Icon Button represents a compact interactive control.

### Anatomy

    Icon Button
    └── Icon

### V1 variants

    Primary
    Secondary
    Ghost

### V1 states

    Default
    Hover
    Pressed
    Focused
    Disabled

### Token categories exercised

- Colour
- Sizing
- Radius
- Spacing
- Focus
- Iconography

Icon Button should also test whether an icon-only control can communicate its interactive state without relying solely on colour.

---

# 14. Badge

Badge represents compact semantic information.

### Anatomy

    Badge
    ├── Optional Icon
    └── Label

### V1 variants

    Neutral
    Informative
    Positive
    Warning
    Negative

### V1 states

Badge does not require interactive states in V1.

### Token categories exercised

- Colour
- Typography
- Spacing
- Radius
- Iconography

Badge is particularly useful for testing semantic colour roles.

---

# 15. Text Field

Text Field is a major input validation target.

### Anatomy

    Text Field
    ├── Label
    ├── Field Container
    ├── Input
    ├── Leading Icon
    ├── Trailing Icon
    ├── Helper Text
    └── Error Message

### V1 states

    Default
    Hover
    Focused
    Disabled
    Error

### Token categories exercised

- Colour
- Typography
- Spacing
- Sizing
- Radius
- Border
- Focus
- Error semantics

Text Field should test whether the token system can represent clear state changes without relying on colour alone.

---

# 16. Select

Select represents a field that exposes a selection interface.

### Anatomy

    Select
    ├── Label
    ├── Field Container
    ├── Selected Value
    ├── Trigger Icon
    └── Helper / Error Text

### V1 states

    Default
    Hover
    Focused
    Disabled
    Error
    Open

### Token categories exercised

- Colour
- Typography
- Spacing
- Sizing
- Radius
- Border
- Focus
- Overlay
- State tokens

The Select should visually demonstrate the relationship between the field and its open selection state.

---

# 17. Checkbox

Checkbox represents binary or multi-selection.

### Anatomy

    Checkbox
    ├── Control
    └── Label

### V1 states

    Unselected
    Selected
    Hover
    Focused
    Disabled
    Error

### Token categories exercised

- Colour
- Border
- Sizing
- Spacing
- Typography
- Focus
- Selection
- Error

Validation should ensure selected and unselected states remain distinguishable.

---

# 18. Radio

Radio represents mutually exclusive selection.

### Anatomy

    Radio
    ├── Control
    └── Label

### V1 states

    Unselected
    Selected
    Hover
    Focused
    Disabled
    Error

### Token categories exercised

- Colour
- Border
- Sizing
- Spacing
- Typography
- Focus
- Selection
- Error

The Component Lab should demonstrate a radio group's relationship between selected and unselected options.

---

# 19. Switch

Switch represents a binary setting.

### Anatomy

    Switch
    ├── Track
    └── Thumb

### V1 states

    Off
    On
    Hover
    Focused
    Disabled

### Token categories exercised

- Colour
- Sizing
- Radius
- Motion-related properties where supported
- Focus
- State

The V1 visualisation does not require a production implementation of switch behaviour.

---

# 20. Tabs

Tabs represent navigation between related views.

### Anatomy

    Tabs
    ├── Tab List
    ├── Tab
    ├── Active Indicator
    └── Tab Panel

### V1 states

    Default
    Hover
    Focused
    Selected
    Disabled

### Token categories exercised

- Typography
- Colour
- Spacing
- Sizing
- Border
- Focus
- Selection

Tabs are useful for testing hierarchy and active-state semantics.

---

# 21. Card

Card represents a contained surface.

### Anatomy

    Card
    ├── Header
    ├── Content
    └── Footer

Optional:

    Card
    ├── Media
    ├── Header
    ├── Content
    └── Footer

### V1 variants

    Default
    Elevated
    Outlined

### Token categories exercised

- Surface
- Colour
- Typography
- Spacing
- Radius
- Border
- Elevation

Card provides an important test for surface hierarchy.

---

# 22. Dialog

Dialog represents a temporary surface above the main interface.

### Anatomy

    Dialog
    ├── Overlay
    ├── Header
    ├── Title
    ├── Content
    └── Actions

### V1 states

    Open
    Closed

### Token categories exercised

- Surface
- Overlay
- Typography
- Spacing
- Radius
- Border
- Elevation
- Focus
- Actions

Dialog is particularly useful for testing layered surfaces and focus relationships.

---

# 23. Tooltip

Tooltip provides contextual information associated with another control.

### Anatomy

    Tooltip
    ├── Surface
    ├── Content
    └── Pointer

### V1 states

    Hidden
    Visible

### Token categories exercised

- Surface
- Typography
- Spacing
- Radius
- Colour
- Elevation

Tooltip should remain deliberately simple in V1.

---

# 24. Component Token Consumption

Components should consume semantic tokens whenever possible.

Example:

    Button.background
            ↓
    action.primary
            ↓
    color.brand.primary.600

The component should not normally reference:

    color.brand.primary.600

directly.

This preserves the semantic abstraction layer.

---

# 25. Component-Specific Token Usage

Component-specific tokens may be introduced where semantic reuse is insufficient.

Example:

    button.focus-ring-width
    button.icon-gap
    button.minimum-height

However:

    button.background

should not automatically exist simply because the Button has a background.

If the correct semantic token is:

    action.primary

then the Button should consume:

    action.primary

Component-specific tokens should exist because a component requires a distinct semantic role, not because the component has a property.

---

# 26. Component Token Naming

Component-specific tokens should use the component namespace.

Example:

    button.focus-ring
    button.icon-gap
    text-field.error-border
    dialog.overlay

The naming convention must remain compatible with the canonical token naming rules established by `TOKEN-MODEL.md`.

---

# 27. Components and Archetypes

Archetypes provide the initial design-system direction.

They may influence:

- Component defaults
- Variants
- Token assignments
- Surface treatment
- Typography
- Spacing
- Radius
- Interaction styling

However, the Component model remains consistent across archetypes.

For example:

    Material Inspired
        ↓
    Button

and:

    Apple Inspired
        ↓
    Button

represent the same conceptual component.

The visual implementation may differ.

---

# 28. Archetype Independence

Components must not become hard-coded copies of external design systems.

For example:

    Material Inspired
        ↓
    TokenForge Button

does not mean:

    TokenForge Button
        =
    Material 3 Button

The external system is an inspiration and source of architectural reference.

TokenForge maintains its own component definitions.

This allows users to modify the archetype-generated system and create their own design language.

---

# 29. Component Preview

The Component Lab should render components using the user's current token system.

Example:

    User Token System
          ↓
    Button
          ↓
    Rendered Preview

When the user changes a relevant token:

    Token change
         ↓
    Dependency update
         ↓
    Component preview updates
         ↓
    Validation re-runs

This creates a direct relationship between token editing and practical UI outcomes.

---

# 30. Component Stress Testing

The Component Lab should intentionally expose the token system to representative scenarios.

For example:

### Colour

    Primary Button
    Secondary Button
    Disabled Button
    Text Field
    Card
    Dialog

### Typography

    Button
    Badge
    Text Field
    Tabs
    Dialog

### Spacing

    Button
    Text Field
    Card
    Dialog

### Surface hierarchy

    Card
    Dialog
    Tooltip

### Interaction

    Button
    Icon Button
    Checkbox
    Radio
    Switch
    Tabs
    Text Field

This makes the Component Lab a practical design-system testing environment.

---

# 31. Component Validation

Components should expose relevant validation results.

Examples:

    Button
    ├── ✓ Primary text contrast
    ├── ✓ Focus indicator
    └── ⚠ Disabled state differentiation

Or:

    Text Field
    ├── ✓ Default contrast
    ├── ✕ Error border contrast
    └── ✓ Focus indicator

The Component Lab should provide access to the relevant validation result.

The authoritative validation logic remains in the Validation system.

---

# 32. Accessibility

Components should be evaluated against applicable accessibility requirements.

Validation should consider:

- Text contrast
- Non-text contrast
- Focus visibility where measurable
- State differentiation
- Semantic relationships where representable
- Touch-target or sizing requirements where the relevant component model provides sufficient information

TokenForge should not claim complete accessibility conformance for a production application based solely on component previews.

The Component Lab validates the design-system aspects that TokenForge can actually measure.

---

# 33. State Coverage

The Component Lab should ensure that each V1 component exposes its defined states.

For example:

    Button
    ├── Default
    ├── Hover
    ├── Pressed
    ├── Focused
    └── Disabled

A component should not silently omit a required state from its reference definition.

State definitions remain component-specific.

---

# 34. State Differentiation

Component states should not rely solely on colour where a meaningful non-colour distinction is required.

For example:

    Selected
        +
    Unselected

may require differences in:

- Indicator
- Shape
- Border
- Position
- Typography
- Iconography
- Colour

The exact treatment depends on the component.

TokenForge should identify obvious accessibility issues but should not attempt to infer every possible usability concern automatically.

---

# 35. Component Variants and Validation

Each supported variant should be validated independently where the variant changes relevant token relationships.

For example:

    Button / Primary
    Button / Secondary
    Button / Destructive

may each have different colour relationships.

A passing Primary Button does not imply that the Destructive Button also passes.

---

# 36. Component State and Validation

Likewise, validation must operate at the state level where the state changes relevant values.

For example:

    Button / Primary / Default

may pass while:

    Button / Primary / Disabled

requires separate evaluation.

Validation results should therefore be associated with the relevant:

    Component
    Variant
    State
    Token relationship

where applicable.

---

# 37. Component Lab UI

The V1 Component Lab should provide:

- Component navigation
- Component preview
- Variant controls
- State controls
- Relevant token information
- Validation status
- Access to validation details

A conceptual layout is:

    Components

    [Button]
    [Icon Button]
    [Badge]
    [Text Field]
    ...

    ───────────────────

    Button

    Variant
    [Primary]

    State
    [Hover]

    ───────────────────

    [Live component preview]

    ───────────────────

    Token usage
    action.primary
    text.on-action
    radius.md
    spacing.3

    ───────────────────

    Validation
    ✓ 5 Passed
    ⚠ 1 Warning
    ✕ 0 Errors

---

# 38. Token Inspection

V1 should allow users to understand which tokens a component consumes.

For example:

    Button / Primary / Default

    Background
    → action.primary

    Label
    → text.on-action

    Radius
    → radius.md

    Horizontal Padding
    → spacing.4

The user should be able to navigate from the component usage to the relevant token.

---

# 39. Token Editing From Components

Where practical, the Component Lab may provide a shortcut to edit the relevant token.

For example:

    Button background
        ↓
    action.primary
        ↓
    Edit token

The actual token remains part of the central token system.

The Component Lab must not create an independent copy.

---

# 40. Component-to-Token Dependency

The dependency relationship should be represented explicitly.

Example:

    Button
      ↓
    action.primary
      ↓
    color.brand.primary.600

This allows TokenForge to determine the impact of a token change.

For example:

    color.brand.primary.600 changes
              ↓
    action.primary changes
              ↓
    Button changes
              ↓
    Button validation re-runs

---

# 41. Component-to-Validation Dependency

The Component Lab should consume Validation results rather than implement a second validation engine.

    Token System
          ↓
    Validation Engine
          ↓
    Validation Results
          ↓
    Component Lab

This avoids inconsistent validation behaviour between the main Validation screen and the Component Lab.

---

# 42. Component Library Extensibility

The V1 component list is a starting catalogue.

The architecture must support additional components without changing the underlying token model.

Future components may include:

- Menus
- Navigation
- Breadcrumbs
- Pagination
- Accordion
- Slider
- Date Picker
- Data Table
- Progress
- Toast
- Snackbar
- Avatar
- List
- Calendar
- Carousel

These are outside the V1 component scope.

---

# 43. V1 Component Scope

The V1 reference catalogue is:

### Foundation

- Button
- Icon Button
- Badge

### Input

- Text Field
- Select
- Checkbox
- Radio
- Switch

### Navigation

- Tabs

### Containment

- Card
- Dialog

### Feedback

- Tooltip

Total:

**12 reference components**

---

# 44. V1 Non-Goals

The following are outside the V1 Component Lab:

- Full production component library
- Framework-specific component code generation
- React component package generation
- SwiftUI component generation
- Android Compose component generation
- Full interaction implementation
- Complete WCAG auditing
- Arbitrary user-created component builder
- Full component documentation generator
- Full responsive layout testing
- Production application testing

These may be considered in future versions.

---

# 45. Relationship to Export

Components should inform the exported design system but should not force every export target to contain a component implementation.

The token system remains the primary exportable asset.

A future version may support:

    Token System
        +
    Component Definitions
        ↓
    Framework-specific output

V1 should primarily export the token system as defined by `EXPORT-SYSTEM.md`.

---

# 46. External Design-System References

The TokenForge component model is informed by established design systems including:

- Material Design / Material 3
- Apple Human Interface Guidelines
- Microsoft Fluent 2
- Adobe Spectrum
- IBM Carbon

These systems are references for established design-system architecture and component practices.

TokenForge does not attempt to reproduce any external design system in its entirety.

Archetypes may be inspired by established systems while remaining independent TokenForge configurations.

---

# 47. Design-System Principles Applied

The V1 component architecture follows several established principles:

### Components are systems

A component includes structure, properties, states and behaviour rather than being merely a visual object.

### Tokens provide reusable design decisions

Tokens provide values and semantic roles that components consume.

### Semantic abstraction is preferred

Components should consume semantic roles wherever possible.

### Component-specific tokens are selective

Specialised component tokens should exist only where they provide meaningful separation.

### States are explicit

Interactive and contextual states should be modelled rather than treated as incidental visual changes.

### Accessibility is contextual

Accessibility should be evaluated against actual component usage rather than isolated primitive values.

---

# 48. Component Source of Truth

The central token system remains the source of truth for design values.

The Component Lab defines how those values are consumed.

    Token System
        ↓
    Component Definition
        ↓
    Preview

The Component Lab must not maintain separate duplicated token values.

---

# 49. Future Component Authoring

The architecture should leave room for a future Component Authoring system.

A future version could allow users to:

- Create custom components
- Define anatomy
- Define properties
- Define states
- Map tokens
- Create component-specific tokens
- Define validation requirements
- Add components to their design system

This is not required for V1.

V1 provides the reference component catalogue and the architecture necessary to extend it later.

---

# 50. Summary

The TokenForge Component system provides a practical bridge between abstract tokens and real interface design.

Its purpose is to:

- Demonstrate token usage
- Stress-test the design system
- Expose token relationships
- Demonstrate component states
- Preview archetype-generated systems
- Identify contextual validation problems
- Help users understand the practical consequences of token changes

The V1 component catalogue contains 12 reference components:

    Button
    Icon Button
    Badge
    Text Field
    Select
    Checkbox
    Radio
    Switch
    Tabs
    Card
    Dialog
    Tooltip

The central relationship is:

    Primitive
        ↓
    Semantic
        ↓
    Component
        ↓
    State / Variant
        ↓
    Preview
        ↓
    Validation

The Component Lab should remain a **design-system stress-testing and visualisation environment**, not a full production component library.

The architecture must remain extensible so additional components and eventual component authoring can be introduced without redesigning the Token Model.