TokenForge — Archetypes

Project: TokenForge
Document: Archetypes
Status: Active
Version: 1.0
Purpose: Define how TokenForge uses established design-system references and TokenForge-native design philosophies as blueprints for generating project-specific token systems.

---

1. Purpose

Archetypes are the starting blueprints used by TokenForge to generate a project's design-token system.

An archetype defines a particular design philosophy, token architecture and set of recommended relationships.

It provides structure and direction without preventing the user from creating their own system.

The archetype is therefore not the finished design system.

Archetype
    ↓
Generated Token System
    ↓
User Refinement
    ↓
User's Design System

This document builds on the principles established in:

- "PRODUCT.md"
- "TOKEN-MODEL.md"
- "SOURCES.md"

"PRODUCT.md" defines the product's purpose and scope.

"TOKEN-MODEL.md" defines the underlying structure that TokenForge uses to represent tokens.

"SOURCES.md" defines the authoritative references used to inform TokenForge's design-system knowledge.

---

2. Core Principle

«An archetype provides a proven starting structure; the user owns the resulting system.»

TokenForge should avoid forcing every user to construct a token architecture from an empty canvas.

Instead, the user selects an archetype that provides a coherent starting point.

The user can then modify the generated system to suit their brand, product and preferences.

Archetypes should therefore optimise for:

- Strong starting points
- Consistent architecture
- Proven design principles
- Clear semantic relationships
- Customisability
- Reproducibility
- Extensibility

---

3. Archetype Categories

TokenForge has two categories of archetype.

3.1 Established-System Archetypes

Established-system archetypes are informed by publicly documented and established design systems.

V1 includes:

- Material Inspired
- Apple Inspired
- Fluent Inspired

These archetypes use recognised design-system principles as references while generating a system specifically for the TokenForge user.

They should not be presented as official versions of the referenced systems.

---

3.2 TokenForge-Native Archetypes

TokenForge-native archetypes are created by TokenForge around broader design philosophies rather than being directly based on one external design system.

V1 includes:

- Minimal
- Editorial

Future native archetypes may be introduced when there is a clear product or user need.

Potential future directions may include:

- Expressive
- Utility
- Soft
- Bold

These are possibilities rather than V1 commitments.

---

4. Established-System References

Established-system archetypes may draw from publicly available documentation, specifications and guidance published by the organisations responsible for those systems.

Examples include:

- Google Material Design
- Apple Human Interface Guidelines
- Microsoft Fluent
- IBM Carbon
- Other suitably documented public systems considered for future archetypes

The relevant authoritative sources must be recorded in "SOURCES.md".

TokenForge should favour primary sources wherever possible.

---

5. Reference vs Reproduction

An established-system archetype is informed by its reference system.

It is not intended to reproduce the external design system in its entirety.

For example:

Material Design principles
        +
User's brand
        +
TokenForge generation
        ↓
Material Inspired TokenForge system

The resulting system belongs to the user.

TokenForge should therefore use established systems to inform:

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

6. Attribution

Established-system archetypes should clearly identify their reference system.

Attribution should be visible during archetype selection.

For example:

Material Inspired

A token architecture influenced by Google's Material Design
principles.

Reference: Google Material 3

The archetype selection card is the primary location for this attribution within the product.

The relevant authoritative reference should also be recorded in "SOURCES.md".

Attribution, trademark and licensing requirements must be reviewed against the current terms applicable to each referenced system before implementation.

TokenForge should not make legal claims about third-party systems without verifying the relevant current source.

---

7. Archetype Blueprint

Each archetype acts as a configuration layer over the Token Model defined in "TOKEN-MODEL.md".

An archetype may define:

- Token groups
- Primitive token structure
- Semantic token roles
- Naming conventions
- Scales
- Recommended references
- Interaction states
- Component requirements
- Theme/mode expectations
- Generation rules
- Validation expectations
- Recommended defaults

The archetype should not redefine the underlying token model.

TOKEN-MODEL
    ↓
Common token capabilities
    ↓
ARCHETYPE
    ↓
Specific configuration
    ↓
PROJECT TOKEN SYSTEM

---

8. Archetype Generation

When a user selects an archetype, TokenForge uses it as the blueprint for generating the initial token system.

The generation process should combine:

1. The selected archetype
2. User-provided foundations
3. Token Model rules
4. Generation logic
5. Applicable validation rules

Example:

User Brand Colour
        +
Material Inspired Archetype
        +
Token Model
        ↓
Generated Material-inspired token system

The generated result should be treated as a starting point rather than an immutable prescription.

---

9. User Ownership and Customisation

Users are expected to modify the generated system.

TokenForge should support meaningful customisation without requiring the user to abandon the selected archetype.

Users may be able to change:

- Token values
- Token names
- Scales
- Semantic assignments
- References
- Supported token groups
- Supported states
- Other properties permitted by the system

The archetype establishes the initial structure.

The user determines the final system.

Archetype
    ↓
Recommendation
    ↓
User decisions
    ↓
Final system

TokenForge should not treat divergence from the original archetype as an error.

---

10. Archetype Integrity

User customisation should not automatically be treated as a violation of the archetype.

For example, a user selecting Material Inspired may substantially alter:

- Colours
- Typography
- Spacing
- Radius
- Semantic naming
- Component states

The system can still remain based on the Material Inspired starting architecture.

TokenForge should distinguish between:

Archetype configuration

and

User customisation.

This distinction may become useful for future auditing, migration and documentation features.

---

11. Archetype Selection

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

The user should be able to understand the consequences of their selection without needing to understand the underlying token architecture.

---

12. Archetype Switching

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

13. Archetype Versioning

Archetypes are independently versioned.

Example:

Material Inspired v1.0
Material Inspired v2.0

A project records the archetype version from which its system was generated.

This ensures reproducibility.

If TokenForge releases a new version of an archetype, existing projects should not silently change.

Existing Project
    ↓
Material Inspired v1.0
    ↓
Remains unchanged

A new project may instead select:

Material Inspired v2.0

---

13.1 Why Versioning Matters

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

«Archetype updates must not silently modify existing projects.»

Future migration functionality may allow users to deliberately move between versions.

---

14. Established-System Archetype Principles

Established-system archetypes should prioritise the underlying principles of the reference system rather than superficial visual copying.

For example, a Material Inspired archetype may reflect relevant Material principles around:

- Semantic colour roles
- Tonal relationships
- Component states
- Interaction patterns
- Design-token organisation

while still generating values and structures appropriate to the user's project.

The same principle applies to Apple Inspired and Fluent Inspired.

---

15. Material Inspired

Category: Established-system
Reference: Google Material Design / Material 3

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

16. Apple Inspired

Category: Established-system
Reference: Apple Human Interface Guidelines

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

17. Fluent Inspired

Category: Established-system
Reference: Microsoft Fluent

The Fluent Inspired archetype should use Microsoft's publicly available Fluent design guidance as its primary reference.

It should provide a starting architecture informed by relevant Fluent principles around:

- Design tokens
- Colour
- Typography
- Spacing
- Elevation
- Interaction states
- Component behaviour

As with the other established-system archetypes, the resulting system remains a TokenForge-generated user-owned system.

---

18. Minimal

Category: TokenForge-native

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

19. Editorial

Category: TokenForge-native

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

20. Archetype and Components

Archetypes may influence the components and states used to demonstrate the resulting token system.

For example:

Archetype
    ↓
Recommended semantic roles
    ↓
Component requirements
    ↓
Component preview

However, the component system remains separate from the token model.

Components consume the resulting token system according to the principles established in "TOKEN-MODEL.md".

The Components system is defined separately in "COMPONENTS.md".

---

21. Archetype and Validation

Archetypes may establish recommended validation expectations.

For example, an archetype may define:

- Required semantic roles
- Required interaction states
- Expected component states
- Accessibility expectations
- Other structural requirements

However, validation itself belongs to the validation system defined in "VALIDATION.md".

The archetype provides context.

The validation engine performs the evaluation.

---

22. Archetype and Export

The selected archetype should not determine the export format.

Export should represent the final user-approved token system.

Archetype
    ↓
Generated system
    ↓
User customisation
    ↓
Validated system
    ↓
Export

The exported result should therefore represent what the user actually created rather than simply exporting the original archetype configuration.

Export behaviour is defined in "EXPORT-SYSTEM.md".

---

23. Adding New Archetypes

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

New archetypes should be evaluated against the authoritative sources recorded in "SOURCES.md".

---

24. Archetype Quality Requirements

Before an archetype becomes available to users, it should be evaluated for:

Coherence

The generated token system should form a consistent design language.

Usability

The resulting system should support realistic interface construction.

Accessibility

Relevant colour and interaction relationships should satisfy applicable accessibility requirements.

Customisability

Users should be able to adapt the generated system without immediately breaking its architecture.

Reproducibility

The same archetype version and equivalent inputs should produce predictable results.

Interoperability

The resulting token system should remain compatible with TokenForge's export architecture.

Documentation

The principles and sources behind an archetype should be documented.

---

25. V1 Archetype Set

TokenForge V1 will provide five archetypes.

Archetype| Category| Primary Reference
Material Inspired| Established-system| Google Material Design / Material 3
Apple Inspired| Established-system| Apple Human Interface Guidelines
Fluent Inspired| Established-system| Microsoft Fluent
Minimal| TokenForge-native| TokenForge design philosophy
Editorial| TokenForge-native| TokenForge design philosophy

This set provides a balance between recognised design-system approaches and TokenForge's own design philosophies.

The V1 set should remain intentionally small.

Additional archetypes should be introduced based on product requirements rather than attempting to provide an exhaustive catalogue.

---

26. Relationship to Other Documents

Concern| Primary Document
Product purpose and scope| "PRODUCT.md"
Authoritative references| "SOURCES.md"
Underlying token structure| "TOKEN-MODEL.md"
Archetype definitions| "ARCHETYPES.md"
Colour generation| "COLOUR-ENGINE.md"
Validation| "VALIDATION.md"
Components| "COMPONENTS.md"
Export| "EXPORT-SYSTEM.md"
Application architecture| "ARCHITECTURE.md"
AI functionality| "AI-SYSTEM.md"
Product development sequence| "ROADMAP.md"

---

27. Summary

Archetypes are the mechanism through which TokenForge turns a general token model into a useful project-specific starting point.

The system is intentionally layered:

Authoritative Sources
        ↓
Archetype
        ↓
Token Model
        ↓
Generated Token System
        ↓
User Customisation
        ↓
Validation
        ↓
Components
        ↓
Export

Established-system archetypes allow TokenForge to build upon recognised public design-system principles.

TokenForge-native archetypes allow the product to develop its own design philosophies.

Neither category dictates the user's final system.

The user's generated and refined token system is the final source of truth.

«Choose a proven starting point. Make it yours. Build the system.»