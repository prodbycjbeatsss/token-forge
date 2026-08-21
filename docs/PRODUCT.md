TokenForge — Product Specification

Project: TokenForge
Document: Product Specification
Status: Active
Version: 1.2
Last Updated: 21 August 2026
Purpose: Define the product purpose, V1 scope, core workflow, capabilities and boundaries of TokenForge.

---

1. Product Overview

TokenForge is a design-system tool for creating, refining, validating and exporting production-ready design tokens.

It sits between visual design and implementation.

Instead of requiring users to manually construct a complete design-token system, TokenForge provides a structured workflow for establishing visual foundations, generating a token architecture, refining the resulting system, validating the result and exporting it for use in a real project.

The Component Lab provides a separate visual feedback and design-system stress-testing surface that allows users to see how their current token system behaves when applied to realistic interface components.

Core principle:

«Design the system before you build the interface.»

---

2. Product Goal

TokenForge exists to make the creation of a coherent design-token system accessible without requiring the user to manually understand every aspect of token architecture, colour systems and implementation formats.

The product should help users move from:

Brand / Design Intent
        ↓
Token System
        ↓
Validated System
        ↓
Production Export

The Component Lab provides visual feedback on the current token system alongside this process.

The result should be a usable design-token system rather than a visual prototype or collection of disconnected values.

---

3. V1 Definition

TokenForge V1 is complete when a user can create a coherent design-token system, refine it, validate it and export it into practical development formats.

The V1 Component Lab provides 12 reference components that allow users to see how their current token system behaves in realistic interface contexts.

The Component Lab is a supporting product surface rather than a mandatory stage in the linear token-generation and export workflow.

V1 therefore focuses on the core design-token workflow.

V1 does not attempt to become a complete design collaboration platform, design tool or component-library marketplace.

---

4. Core V1 Workflow

The primary workflow is linear:

Create
  ↓
Generate
  ↓
Edit
  ↓
System Validation
  ↓
Export Selection
  ↓
Export Readiness
  ↓
Export
  ↓
Usable Token System

System Validation evaluates whether the token system itself is structurally and semantically valid.

After the user selects an export format, TokenForge performs a format-specific export-readiness check before allowing the export to proceed.

The Component Lab does not form an additional stage in this workflow.

Instead, it provides visual feedback on the current token system while the user creates and edits it.

Conceptually:

Current Token System
        ↓
Component Lab
        ↓
Visual Feedback

The Component Lab may surface relevant validation results, but it does not perform validation itself.

---

5. V1 Capabilities

TokenForge V1 provides the following core capabilities.

5.1 Project Creation

Users can create a TokenForge project and establish the foundations from which the token system is generated.

5.2 Brand Colour Input

Users can provide their brand or foundational colours.

These values are processed by the Colour Engine to generate the colour system.

5.3 Archetype Selection

Users can select an archetype that determines the organisation, scales and semantic vocabulary used to construct the system.

Archetypes use the common Token Model rather than creating independent token architectures.

5.4 Token Generation

TokenForge generates the token system from the user's inputs and selected configuration.

The generated system can then be inspected and modified by the user.

5.5 Token Editing

Users can refine generated token values and supported naming conventions.

Naming customisation is controlled so that users cannot create inconsistent naming conventions within a token category.

5.6 Component Testing

The Component Lab allows the token system to be applied to the V1 component set to demonstrate how the system behaves in realistic interface contexts.

Components provide practical usage and visual feedback rather than functioning as a full component library.

Component Testing is not a required step in the linear export workflow.

5.7 Validation

TokenForge evaluates the token system for structural, relational, naming, accessibility and other applicable system rules.

Validation can provide warnings, errors, manual corrections and safe deterministic automatic remediation.

5.8 Export

Users can export the resulting token system into the four supported V1 formats:

- DTCG-compatible JSON
- CSS
- Tailwind CSS
- JavaScript / TypeScript

Users can export the complete system.

Each selected export format receives its own readiness check.

---

6. V1 Token System

TokenForge V1 provides a structured token system rather than a collection of arbitrary values.

The system uses the common Token Model defined in "TOKEN-MODEL.md".

Archetypes determine how the available token capabilities are organised and named.

Different archetypes may therefore produce different design philosophies while remaining compatible with the same underlying Token Model.

The product does not require every archetype to use identical scales or semantic vocabulary.

---

7. V1 Components

TokenForge V1 provides a defined set of 12 reference components.

These components exist to:

- Demonstrate token usage
- Exercise the token system
- Reveal inconsistencies
- Provide realistic interface context
- Surface relevant validation results

They are not intended to constitute a complete production component library.

The Component Lab operates as a visualisation and stress-testing surface alongside the core workflow.

Additional components can be introduced after V1 based on demonstrated product value.

---

8. Validation

Validation is a core part of the V1 workflow.

It evaluates the token system independently of a selected export format.

The general validation stage determines whether the system itself is valid and coherent.

After an export format is selected, a separate readiness evaluation determines whether the current system can be represented safely in that format.

Changing the export format or relevant project data causes the applicable readiness state to be re-evaluated.

The Component Lab may display relevant validation results, but validation remains the responsibility of the Validation Engine.

---

9. Export Formats

V1 supports exactly four export targets:

Format| Primary Use
JSON| DTCG-compatible JSON
CSS| Web applications using CSS custom properties
Tailwind CSS| Tailwind v4 applications using CSS @theme variables
JavaScript / TypeScript| Application code and programmatic token consumption

The export system is intentionally limited to these formats for V1.

Additional platform-specific formats are outside the V1 scope.

---

10. AI Positioning

AI is not a foundational dependency of TokenForge V1.

The core product should work through deterministic systems wherever deterministic behaviour is sufficient.

This includes:

- Token generation rules
- Colour calculations
- Token relationships
- Validation rules
- Naming rules
- Export transformations

AI may be introduced where it provides a demonstrable advantage that cannot be achieved as reliably through deterministic logic.

AI should therefore be treated as an optional product capability rather than something that must be inserted into the core workflow.

---

11. Product Principles

Simple on the surface. Intelligent underneath.

The complexity of design-system architecture should be handled by the product rather than unnecessarily exposed to the user.

System before interface.

TokenForge creates the underlying system before focusing on individual interface implementation.

User control without architectural chaos.

Users should be able to customise their system while the product protects important structural relationships and naming consistency.

Deterministic where possible.

If a result can be generated, validated or transformed reliably through explicit rules, TokenForge should prefer that approach over unnecessary AI dependence.

Practical output.

The final result must be usable outside TokenForge.

Export is therefore a core product capability rather than an optional convenience.

---

12. V1 Boundaries

The following are outside the V1 product scope:

- Social features
- User-to-user sharing
- Community features
- Public design-system publishing
- Collaboration workflows
- Comments
- Full design-tool functionality
- Full component-library authoring
- Component marketplace functionality
- Android XML export
- Swift-specific export
- Figma file generation
- Repository publishing
- Package publishing
- Continuous export pipelines
- AI-dependent core functionality

These features may be considered after V1 if there is evidence that they provide meaningful product value.

---

13. What "V1 Complete" Means

V1 is considered complete when the core workflow works end-to-end:

User Input
    ↓
Archetype
    ↓
Token Generation
    ↓
Token Editing
    ↓
System Validation
    ↓
Export Selection
    ↓
Export Readiness
    ↓
Export
    ↓
Usable External Token System

The Component Lab is available as a supporting V1 capability throughout the relevant design and editing process.

It allows users to visually inspect how their current token system affects the 12 reference components and to view relevant validation results.

It is not a required gate between token editing and validation or between validation and export.

A feature is not required for V1 simply because it could be useful in a mature design-system platform.

The V1 standard is whether the feature is necessary to create, validate and use a functioning TokenForge design-token system.

---

14. Relationship to Technical Documents

"PRODUCT.md" defines what TokenForge is intended to provide.

It does not redefine the technical implementation of those capabilities.

The detailed responsibilities are defined by the relevant documents:

Area| Document
Token architecture| "TOKEN-MODEL.md"
Design-system archetypes| "ARCHETYPES.md"
Colour generation| "COLOUR-ENGINE.md"
Components| "COMPONENTS.md"
Validation| "VALIDATION.md"
Export| "EXPORT-SYSTEM.md"
Application architecture| "ARCHITECTURE.md"
Overall specification| "MASTER-SPECIFICATION.md"

Where technical detail conflicts with this document, the documents defining that specific system should provide the detailed implementation rules, while "PRODUCT.md" remains the source for product scope and intent.

---

15. V1 Product Principle

TokenForge V1 should not be judged by how many features it contains.

It should be judged by whether it can reliably take a user's design intent and produce a coherent, validated and usable design-token system.

«Create the system. Test the system. Validate the system. Export the system.»