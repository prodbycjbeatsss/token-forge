TokenForge — Components
Project: TokenForge 
Document: Components 
Status: Active 
Version: 1.3 
Last Updated: 21 August 2026 
Purpose: Define the V1 component model, reference components, token consumption, states, validation relationships, and Component Lab responsibilities.

--------------------------------------------------------------------------------

1. Purpose
The Component system provides the layer between TokenForge's token system and realistic interface usage.
Its purpose is to demonstrate, exercise and visually stress-test how a user's design tokens behave when applied to reusable interface components.
Components are therefore not simply collections of tokens.
A component combines:
*  Purpose
*  Anatomy
*  Properties
*  Variants
*  States
*  Behaviour
*  Token consumption
*  Accessibility considerations
*  Validation relationships
The Component Lab is a visualisation and design-system stress-testing surface. It is not a mandatory stage in the TokenForge workflow and does not perform validation itself.
The core relationships are:
And independently:
The Component Lab allows users to see how their token system behaves in realistic interface contexts while editing their system.

--------------------------------------------------------------------------------

2. Product Role
The Component Lab exists to answer a practical question:
**Does this token system actually work when applied to interface components?**
A token system can be mathematically valid and structurally correct while still producing poor interface results.
For example:
*  A colour palette may pass primitive-level checks but create poor button contrast.
*  Spacing values may be individually valid but create inconsistent component proportions.
*  Typography may work independently but create poor hierarchy when combined.
*  State colours may be distinguishable individually but fail accessibility requirements in context.
Components therefore act as a practical stress test for the design system.
The Component Lab does not replace the Validation Engine.
Validation remains responsible for evaluating rules and producing validation results. The Component Lab presents relevant results alongside the visual preview so users can understand the practical impact of those results.

--------------------------------------------------------------------------------

3. Component Philosophy
TokenForge should not attempt to become a complete UI component library in V1.
The V1 Component Lab provides a curated set of reference components designed to exercise the token system.
These components are:
*  Reference implementations
*  Visualisation tools
*  Validation targets
*  Design-system stress tests
They are not intended to replace production component libraries.
The user should ultimately be able to export their design system and use it with their preferred implementation framework.
V1 does not provide framework-specific component code generation or component code export.

--------------------------------------------------------------------------------

4. Component Architecture
A component is conceptually structured as:
Not every component requires every property.
For example, a Card may have:
while a Button may have:
The model must support component-specific differences without requiring every component to use an identical structure.
The Component Lab consumes the component definition and current token system to produce a visual preview.
Validation remains an independent system that evaluates the applicable token relationships and component usage.

--------------------------------------------------------------------------------

5. Relationship to Tokens
Components consume the token system.
The preferred hierarchy is:
For example:
The component should normally consume semantic tokens rather than directly referencing primitives.
This preserves the separation between foundational values and their intended interface meaning.
The Component Lab must consume the canonical token system and must not maintain a separate copy of token values.

--------------------------------------------------------------------------------

6. Component-Specific Tokens
TokenForge should support component-specific tokens where they are genuinely useful.
For example:
However, component-specific tokens should not be generated simply because a component contains a property.
The preferred approach is:
Only when a component requires a distinct semantic role should a component-specific token be introduced.
This prevents unnecessary token proliferation.

--------------------------------------------------------------------------------

7. Component Anatomy
Each component should define its relevant visual anatomy.
Anatomy allows TokenForge to associate token usage and validation relationships with meaningful component parts.
Each anatomical part should reference the specific token IDs it consumes where applicable.
This allows the system to determine which component usage is affected when a token changes.
For example:
Or:
The Component Lab does not need to implement a separate validation system for each anatomical part.

--------------------------------------------------------------------------------

8. Component Properties
Properties describe configurable characteristics of a component.
Examples include:
Properties should be modelled independently from states.
For example:
is different from:
This allows the Component Lab to test combinations systematically.

--------------------------------------------------------------------------------

9. Variants
Variants represent deliberate design variations within a component.
Examples:
##### Button
##### Card
##### Badge
The exact variants should be defined by the TokenForge reference component rather than inherited automatically from any external design system.
Established systems provide architectural inspiration, not a requirement to reproduce their component catalogues.

--------------------------------------------------------------------------------

10. States
States represent changes in component condition or interaction.
Common states include:
Not every component uses every state.
For example:
while:
The component model must allow state sets to differ between components.

--------------------------------------------------------------------------------

11. V1 Reference Components
TokenForge V1 provides 12 reference components.
They are selected to provide broad coverage of token relationships without attempting to create a complete component library.
#### Foundation
1. Button
2. Icon Button
3. Badge
#### Input
4. Text Field
5. Select
6. Checkbox
7. Radio
8. Switch
#### Navigation
9. Tabs
#### Containment
10. Card
11. Dialog
#### Feedback
12. Tooltip

--------------------------------------------------------------------------------

12. Button
The Button is one of the primary TokenForge stress-test components.
##### Anatomy
##### V1 variants
##### V1 states
##### Design-system capabilities exercised
*  Colour
*  Typography
*  Spacing
*  Sizing
*  Radius
*  Border
*  Focus
*  Iconography
The Button should be capable of exposing failures in colour contrast, state differentiation, typography, spacing and focus treatment.

--------------------------------------------------------------------------------

13. Icon Button
Icon Button represents a compact interactive control.
##### Anatomy
##### V1 variants
##### V1 states
##### Design-system capabilities exercised
*  Colour
*  Sizing
*  Radius
*  Spacing
*  Focus
*  Iconography
Icon Button should also test whether an icon-only control can communicate its interactive state without relying solely on colour.

--------------------------------------------------------------------------------

14. Badge
Badge represents compact semantic information.
##### Anatomy
##### V1 variants
##### V1 states
Badge does not require interactive states in V1.
##### Design-system capabilities exercised
*  Colour
*  Typography
*  Spacing
*  Radius
*  Iconography
Badge is particularly useful for testing semantic colour roles.

--------------------------------------------------------------------------------

15. Text Field
Text Field is a major input validation target.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Colour
*  Typography
*  Spacing
*  Sizing
*  Radius
*  Border
*  Focus
*  Error semantics
Text Field should test whether the token system can represent clear state changes without relying on colour alone.

--------------------------------------------------------------------------------

16. Select
Select represents a field that exposes a selection interface.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Colour
*  Typography
*  Spacing
*  Sizing
*  Radius
*  Border
*  Focus
*  Overlay
*  State
The Select should visually demonstrate the relationship between the field and its open selection state.

--------------------------------------------------------------------------------

17. Checkbox
Checkbox represents binary or multi-selection.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Colour
*  Border
*  Sizing
*  Spacing
*  Typography
*  Focus
*  Selection
*  Error
Validation should ensure selected and unselected states remain distinguishable.

--------------------------------------------------------------------------------

18. Radio
Radio represents mutually exclusive selection.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Colour
*  Border
*  Sizing
*  Spacing
*  Typography
*  Focus
*  Selection
*  Error
The Component Lab should demonstrate a radio group's relationship between selected and unselected options.

--------------------------------------------------------------------------------

19. Switch
Switch represents a binary setting.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Colour
*  Sizing
*  Radius
*  Motion-related properties where supported
*  Focus
*  State
The V1 visualisation does not require a production implementation of switch behaviour.

--------------------------------------------------------------------------------

20. Tabs
Tabs represent navigation between related views.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Typography
*  Colour
*  Spacing
*  Sizing
*  Border
*  Focus
*  Selection
Tabs are useful for testing hierarchy and active-state semantics.

--------------------------------------------------------------------------------

21. Card
Card represents a contained surface.
##### Anatomy
Optional:
##### V1 variants
##### Design-system capabilities exercised
*  Surface
*  Colour
*  Typography
*  Spacing
*  Radius
*  Border
*  Elevation
Card provides an important test for surface hierarchy.

--------------------------------------------------------------------------------

22. Dialog
Dialog represents a temporary surface above the main interface.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Surface
*  Overlay
*  Typography
*  Spacing
*  Radius
*  Border
*  Elevation
*  Focus
*  Actions
Dialog is particularly useful for testing layered surfaces and focus relationships.

--------------------------------------------------------------------------------

23. Tooltip
Tooltip provides contextual information associated with another control.
##### Anatomy
##### V1 states
##### Design-system capabilities exercised
*  Surface
*  Typography
*  Spacing
*  Radius
*  Colour
*  Elevation
Tooltip should remain deliberately simple in V1.

--------------------------------------------------------------------------------

24. Component Token Consumption
Components should consume semantic tokens whenever possible.
Example:
The component should not normally reference:
directly.
This preserves the semantic abstraction layer.

--------------------------------------------------------------------------------

25. Component-Specific Token Usage
Component-specific tokens may be introduced where semantic reuse is insufficient.
Example:
However:
should not automatically exist simply because the Button has a background.
If the correct semantic token is:
then the Button should consume:
Component-specific tokens should exist because a component requires a distinct semantic role, not because the component has a property.

--------------------------------------------------------------------------------

26. Component Token Naming
Component-specific tokens should use the component namespace.
Example:
The naming convention must remain compatible with the canonical token naming rules established by TOKEN-MODEL.md.

--------------------------------------------------------------------------------

27. Components and Archetypes
Archetypes provide the initial design-system direction.
They may influence:
*  Component defaults
*  Variants
*  Token assignments
*  Surface treatment
*  Typography
*  Spacing
*  Radius
*  Interaction styling
However, the Component model remains consistent across archetypes.
For example:
and:
represent the same conceptual component.
The visual implementation may differ.

--------------------------------------------------------------------------------

28. Archetype Independence
Components must not become hard-coded copies of external design systems.
For example:
does not mean:
The external system is an inspiration and source of architectural reference.
TokenForge maintains its own component definitions.
This allows users to modify the archetype-generated system and create their own design language.

--------------------------------------------------------------------------------

29. Component Preview
The Component Lab should render components using the user's current token system.
The relationship is:
The Component Lab is not a mandatory workflow stage.
It provides visual feedback while the user is creating and refining their token system.
When a relevant token changes:
Validation is handled independently:
The Component Lab does not initiate or perform validation mathematics.

--------------------------------------------------------------------------------

30. Component Stress Testing
The Component Lab should intentionally expose the token system to representative scenarios.
For example:
##### Colour
##### Typography
##### Spacing
##### Surface hierarchy
##### Interaction
This makes the Component Lab a practical design-system testing environment.

--------------------------------------------------------------------------------

31. Component Validation UI
Components must expose relevant validation results visually.
Because components do not perform validation mathematics themselves, they rely on a strict data contract with the Validation Engine.
When the Validation Engine flags an issue, the Component Lab UI renders the appropriate warning or error indicator on the affected component.
Examples:
Or:
The Component Lab should provide access to the relevant validation result detail directly from the UI preview.

--------------------------------------------------------------------------------

32. Accessibility
Components should be evaluated against applicable accessibility requirements.
Validation should consider:
*  Text contrast
*  Non-text contrast
*  Focus visibility where measurable
*  State differentiation
*  Semantic relationships where representable
*  Touch-target or sizing requirements where the relevant component model provides sufficient information
TokenForge should not claim complete accessibility conformance for a production application based solely on component previews.
The Component Lab validates the design-system aspects that TokenForge can actually measure.

--------------------------------------------------------------------------------

33. State Coverage
The Component Lab should ensure that each V1 component exposes its defined states.
For example:
A component should not silently omit a required state from its reference definition.
State definitions remain component-specific.

--------------------------------------------------------------------------------

34. State Differentiation
Component states should not rely solely on colour where a meaningful non-colour distinction is required.
For example:
may require differences in:
*  Indicator
*  Shape
*  Border
*  Position
*  Typography
*  Iconography
*  Colour
The exact treatment depends on the component.
TokenForge should identify obvious accessibility issues but should not attempt to infer every possible usability concern automatically.

--------------------------------------------------------------------------------

35. Component Variants and Validation
Each supported variant should be validated independently where the variant changes relevant token relationships.
For example:
may each have different colour relationships.
A passing Primary Button does not imply that the Destructive Button also passes.

--------------------------------------------------------------------------------

36. Component State and Validation
Likewise, validation must operate at the state level where the state changes relevant values.
For example:
may pass while:
requires separate evaluation.
Validation results should therefore be associated with the relevant:
where applicable.

--------------------------------------------------------------------------------

37. Component Lab UI
The V1 Component Lab should provide:
*  Component navigation
*  Component preview
*  Variant controls
*  State controls
*  Relevant token information
*  Validation status
*  Access to validation details

A conceptual layout integrates a side navigation panel for component selection, a central canvas for live interactive previews, and a contextual side panel for token inspection and validation results.

--------------------------------------------------------------------------------

38. Token Inspection
V1 should allow users to understand which tokens a component consumes.
For example:
The user should be able to navigate from the component usage to the relevant token.

--------------------------------------------------------------------------------

39. Token Editing From Components
Where practical, the Component Lab may provide a shortcut to edit the relevant token.
For example:
The actual token remains part of the central token system.
The Component Lab must not create an independent copy.

--------------------------------------------------------------------------------

40. Component-to-Token Dependency
The dependency relationship should be represented explicitly.
Example:
This allows TokenForge to determine the impact of a token change.
For example:
The Validation Engine separately determines which validation results are affected and re-evaluates them according to its own dependency rules.

--------------------------------------------------------------------------------

41. Component-to-Validation Data Contract
The Component Lab must consume Validation results rather than implement a second validation engine.
To avoid unnecessary architectural complexity, TokenForge V1 uses a simplified component-level data contract:
1.  **Validation Output:**  When the Validation Engine evaluates a rule, it outputs a machine-readable result that includes an array of affectedTokenIds.
2.  **Component Token List:**  The Component Lab maintains a flat list of all token IDs actively consumed by the currently selected component, variant and state.
3.  **Intersection & Warning:**  The Component Lab performs a simple array intersection. If the component consumes any token present in the active error list, the UI flags the component globally, for example by displaying a warning badge next to the component title and listing the errors in the validation panel.
4.  **Visual Verification:**  The UI does not need to draw bounding boxes around specific DOM nodes. The user relies on the live visual preview to see the practical failure and uses the validation panel to identify the relevant validation result and affected tokens.
This ensures the Component Lab remains a lightweight visualiser and does not duplicate validation logic.
The Component Lab may display validation results at component, variant or state level where the Validation Engine provides sufficient context.

--------------------------------------------------------------------------------

42. Component Library Extensibility
The V1 component list is a starting catalogue.
The architecture must support additional components without changing the underlying token model.
Future components may include:
*  Menus
*  Navigation
*  Breadcrumbs
*  Pagination
*  Accordion
*  Slider
*  Date Picker
*  Data Table
*  Progress
*  Toast
*  Snackbar
*  Avatar
*  List
*  Calendar
*  Carousel
These are outside the V1 component scope.

--------------------------------------------------------------------------------

43. V1 Component Scope
The V1 reference catalogue is:
##### Foundation
*  Button
*  Icon Button
*  Badge
##### Input
*  Text Field
*  Select
*  Checkbox
*  Radio
*  Switch
##### Navigation
*  Tabs
##### Containment
*  Card
*  Dialog
##### Feedback
*  Tooltip
Total:
**12 reference components**

--------------------------------------------------------------------------------

44. V1 Non-Goals
The following are outside the V1 Component Lab:
*  Full production component library
*  Framework-specific component code generation
*  React component package generation
*  SwiftUI component generation
*  Android Compose component generation
*  Full interaction implementation
*  Complete WCAG auditing
*  Arbitrary user-created component builder
*  Full component documentation generator
*  Full responsive layout testing
*  Production application testing
These may be considered in future versions.

--------------------------------------------------------------------------------

45. Relationship to Export
Components should inform the exported design system but should not force every export target to contain a component implementation.
The token system remains the primary exportable asset.
A future version may support:
V1 should primarily export the token system as defined by EXPORT-SYSTEM.md.

--------------------------------------------------------------------------------

46. External Design-System References
The TokenForge component model is informed by established design systems including:
*  Material Design / Material 3
*  Apple Human Interface Guidelines
*  Microsoft Fluent 2
*  Adobe Spectrum
*  IBM Carbon
These systems are references for established design-system architecture and component practices.
TokenForge does not attempt to reproduce any external design system in its entirety.
Archetypes may be inspired by established systems while remaining independent TokenForge configurations.

--------------------------------------------------------------------------------

47. Design-System Principles Applied
The V1 component architecture follows several established principles:
##### Components are systems
A component includes structure, properties, states and behaviour rather than being merely a visual object.
##### Tokens provide reusable design decisions
Tokens provide values and semantic roles that components consume.
##### Semantic abstraction is preferred
Components should consume semantic roles wherever possible.
##### Component-specific tokens are selective
Specialised component tokens should exist only where they provide meaningful separation.
##### States are explicit
Interactive and contextual states should be modelled rather than treated as incidental visual changes.
##### Accessibility is contextual
Accessibility should be evaluated against actual component usage rather than isolated primitive values.

--------------------------------------------------------------------------------

48. Component Source of Truth
The central token system remains the source of truth for design values.
The Component Lab defines how those values are consumed.
The Component Lab must not maintain separate duplicated token values.

--------------------------------------------------------------------------------

49. Future Component Authoring
The architecture should leave room for a future Component Authoring system.
A future version could allow users to:
*  Create custom components
*  Define anatomy
*  Define properties
*  Define states
*  Map tokens
*  Create component-specific tokens
*  Define validation requirements
*  Add components to their design system
This is not required for V1.
V1 provides the reference component catalogue and the architecture necessary to extend it later.

--------------------------------------------------------------------------------

50. Summary
The TokenForge Component system provides a practical bridge between abstract tokens and real interface design.
Its purpose is to:
*  Demonstrate token usage
*  Stress-test the design system
*  Expose token relationships
*  Demonstrate component states
*  Preview archetype-generated systems
*  Surface contextual validation results
*  Help users understand the practical consequences of token changes
The V1 component catalogue contains 12 reference components:
The central relationships are:
And independently:
The Component Lab should remain a  **design-system stress-testing and visualisation environment** , not a full production component library.
The architecture must remain extensible so additional components and eventual component authoring can be introduced without redesigning the Token Model.
V1 does not include component code generation or component code export.
