# TokenForge — Master Specification

**Project:** TokenForge
**Document:** Master Specification
**Status:** Active
**Version:** 1.0
**Last Updated:** 20 August 2026

---

## 1. Purpose

This document is the consolidated specification for TokenForge V1.

It defines what TokenForge is, what V1 must provide, how its major systems fit together, and the constraints that govern implementation.

It does not replace the detailed system specifications.

The specialised documents remain authoritative for their individual areas.

---

## 2. Product Definition

TokenForge is a mobile-first design-token authoring, validation and export tool.

It sits between visual design and implementation, helping users create a structured design-token system before building a product around it.

The core product principle is:

> Design the system before you build the interface.

TokenForge is not intended to be:

- A general-purpose design tool
- A Figma replacement
- A website builder
- A complete component-code generator
- A project-management system
- A token marketplace
- A generic colour-picker

Its primary purpose is to help users create, understand, test, refine and export a usable design-token system.

---

## 3. V1 Product Goal

TokenForge V1 should make it possible to move from:

    Brand
      ↓
    Foundations
      ↓
    Archetype
      ↓
    Tokens
      ↓
    Components
      ↓
    Validation
      ↓
    Export

without requiring users to manually construct the underlying token architecture from scratch.

The product should be approachable to beginners while maintaining sufficient technical rigour for experienced designers and developers.

---

## 4. Target Users

TokenForge V1 is intended for:

### Beginners

Users with basic design or development knowledge who have little experience creating formal design systems.

### Designers

Designers who want to establish a structured token system before designing or handing work to development.

### Developers

Developers who want a consistent token system that can be exported into a real project.

### Design-System Practitioners

Experienced users who want to create, audit and test token systems more efficiently.

---

## 5. Core Workflow

The primary workflow is:

    1. Define
         ↓
    2. Generate
         ↓
    3. Refine
         ↓
    4. Validate
         ↓
    5. Preview
         ↓
    6. Export

### Define

The user establishes project foundations such as brand colours and supported design preferences.

### Generate

TokenForge combines the selected archetype, foundations and Token Model to create an initial system.

### Refine

The user reviews and modifies the generated system.

### Validate

TokenForge evaluates the current system for structural, relationship, accessibility and other applicable problems.

### Preview

The system is demonstrated through realistic reference components and states.

### Export

The user selects an export format and TokenForge performs the required format-specific readiness checks before generating the output.

---

## 6. Core Architecture

The high-level architecture is:

    Project
       ↓
    Foundations
       ↓
    Archetype
       ↓
    Token Model
       ↓
    Generation
       ↓
    User Refinement
       ↓
    Project Token System
       ↓
    Components + Validation
       ↓
    Export Readiness
       ↓
    Export

The architecture is modular.

Each subsystem owns a defined responsibility and should not duplicate the responsibility of another subsystem.

---

## 7. Source of Truth

The user's approved token system is the project's source of truth.

The relationship is:

    Archetype
        ↓
    Generated System
        ↓
    User Refinement
        ↓
    User-Approved Token System
        ↓
    Components / Validation / Export

Components should consume the token system.

Validation should evaluate the token system.

Export should transform the token system.

None of these should maintain competing copies of the project's design decisions.

---

## 8. Archetypes

Archetypes provide the starting blueprint for a project.

V1 includes five archetypes:

| Archetype | Category | Reference |
|---|---|---|
| Material Inspired | Established-system | Google Material Design / Material 3 |
| Apple Inspired | Established-system | Apple Human Interface Guidelines |
| Fluent Inspired | Established-system | Microsoft Fluent |
| Minimal | TokenForge-native | TokenForge design philosophy |
| Editorial | TokenForge-native | TokenForge design philosophy |

Established-system archetypes are inspired by documented external systems.

They must not be presented as official implementations of those systems.

TokenForge-native archetypes represent TokenForge's own design philosophies.

Archetypes are independently versioned.

A project must retain the archetype version from which it was generated.

V1 does not support switching an existing project to another archetype.

Detailed archetype behaviour is defined in `ARCHETYPES.md`.

---

## 9. Foundations

Foundations provide the initial design direction for a project.

V1 should prioritise foundations required to create a useful and coherent system rather than attempting to support every possible design-system primitive.

Potential foundations include:

- Brand colours
- Colour scales
- Neutral colours
- Typography
- Spacing
- Radius
- Other supported foundational values

Foundations are inputs to generation.

They are not automatically equivalent to the final token structure.

---

## 10. Token Architecture

TokenForge uses a layered token architecture:

    Foundations
        ↓
    Primitive Tokens
        ↓
    Semantic Tokens
        ↓
    Components

### Primitive Tokens

Primitive tokens represent reusable foundational values.

Examples:

    color.blue.600
    spacing.4
    radius.md

### Semantic Tokens

Semantic tokens represent intended usage.

Examples:

    color.text.primary
    color.surface.default
    color.action.primary

The preferred relationship is:

    Primitive
        ↓
    Semantic
        ↓
    Component

This allows foundational values to change without requiring every consuming component to be manually rewritten.

The detailed token structure is defined in `TOKEN-MODEL.md`.

---

## 11. Design-System Model

A TokenForge design system is more than a collection of values.

It consists of connected design decisions and relationships that allow the resulting tokens to be used consistently.

A sufficiently complete system should be:

- Coherent
- Reusable
- Understandable
- Editable
- Testable
- Validatable
- Exportable
- Maintainable

The complete design-system model is defined in `DESIGN-SYSTEM.md`.

---

## 12. Colour System

Colour is a primary V1 capability.

The Colour Engine converts user colour foundations into primitive and semantic colour structures according to the selected archetype.

The V1 colour architecture is colour-space aware and uses:

- OKLCH for perceptual manipulation
- OKLab where appropriate for supporting perceptual operations
- sRGB as the default broad-compatibility output target
- Explicit gamut handling
- WCAG-based accessibility calculations

OKLCH lightness must not be treated as a substitute for WCAG relative luminance.

Colour generation must be deterministic and reproducible.

AI must not be authoritative for colour mathematics, gamut handling or accessibility.

Detailed colour behaviour is defined in `COLOUR-ENGINE.md`.

---

## 13. Components

Components provide realistic contexts in which the generated token system can be inspected and tested.

V1 should provide a focused set of reference components rather than attempting to become a complete component library.

The component system should demonstrate:

- Token consumption
- Semantic relationships
- Interaction states
- Accessibility relationships
- Visual consistency

Components are consumers and testing environments for the token system.

They do not create an independent token architecture.

Detailed component scope is defined in `COMPONENTS.md`.

---

## 14. Validation

Validation is a core TokenForge capability.

It evaluates the current user-approved token system rather than simply checking whether it matches the original archetype.

V1 validation should cover applicable areas including:

- Structural validity
- Token references
- Token types
- Semantic relationships
- Colour validity
- Accessibility
- Component relationships
- System consistency
- Export readiness

Validation results use three user-facing states:

| State | Meaning |
|---|---|
| Pass | Requirement satisfied |
| Warning | Potential issue that does not necessarily invalidate the system |
| Error | Required condition has failed |

The validation interface should allow users to:

- View all results
- Filter by Pass, Warning or Error
- Open an individual result
- Manually correct the underlying issue
- Fix all errors automatically where safe
- Fix all warnings and errors automatically where safe

Automatic remediation must be deterministic where a safe fix exists.

After changes are made, validation must run again.

Detailed validation behaviour is defined in `VALIDATION.md`.

---

## 15. Validation vs Export Readiness

General validation and export readiness are related but distinct.

### General Validation

Determines whether the token system itself is valid.

It occurs independently of the user's chosen export format.

### Export Readiness

Occurs after the user selects an export format.

It checks whether the current token system can be represented correctly in that specific format.

The workflow is:

    Token System
        ↓
    General Validation
        ↓
    User selects format
        ↓
    Format-specific readiness check
        ↓
    Export

Changing the export format requires the readiness check to run again.

For example:

    CSS selected
        ↓
    CSS readiness check
        ↓
    User fixes errors
        ↓
    CSS ready
        ↓
    User switches to TypeScript
        ↓
    TypeScript readiness check
        ↓
    TypeScript result

Passing one export target does not imply readiness for another.

---

## 16. Export

V1 should prioritise a deliberately small export surface.

The initial export targets are:

- DTCG-compatible JSON
- CSS Custom Properties
- Tailwind CSS
- JavaScript / TypeScript theme representation

The exact representation and transformation rules belong to `EXPORT-SYSTEM.md`.

The underlying design system remains platform-independent.

Export transforms the user's approved system into the selected platform representation.

The exported result is not a second source of truth.

---

## 17. Standards Compatibility

TokenForge should support recognised standards where they provide meaningful interoperability.

The Design Tokens Community Group 2025.10 specification is an important interoperability target for the canonical token representation.

The stable 2025.10 specification defines a JSON-based format for exchanging design tokens, including token types, groups and references.

It is a W3C Community Group specification and is not a W3C Standard.

TokenForge should therefore describe DTCG accurately and should not claim W3C Standard status.

Standards compatibility should be implemented through the relevant export and validation systems rather than making the internal product model a direct copy of an external interchange specification.

---

## 18. User Control

Generation is assistance, not authority.

The user remains the final authority over legitimate design decisions.

The system should distinguish between:

- Generated recommendations
- User modifications
- Validation requirements
- Actual errors

Divergence from an archetype is not automatically an error.

TokenForge must not silently revert deliberate user changes.

---

## 19. Deterministic Core

The following are part of the deterministic core:

- Token structure
- Token relationships
- Archetype configuration
- Colour calculations
- Gamut handling
- Accessibility calculations
- Validation
- Dependency resolution
- Export transformation
- Export-readiness checks

Equivalent inputs and configuration should produce reproducible results where deterministic behaviour is expected.

---

## 20. AI Boundary

AI is not required for TokenForge V1.

The core product must function without generative AI.

AI must not control:

- Token generation
- Colour mathematics
- Accessibility decisions
- Validation
- Dependency resolution
- Export correctness
- Structural integrity

Future AI may assist with:

- Explanations
- Natural-language interaction
- Exploration
- Educational guidance
- Suggestions

AI output must be treated as untrusted input and evaluated by the relevant deterministic TokenForge system before it can affect the project.

The detailed AI boundary is defined in `AI-SYSTEM.md`.

---

## 21. V1 Scope

TokenForge V1 includes:

### Project

- Project creation
- Project persistence
- Archetype selection
- Project-level token system

### Foundations

- Brand colour definition
- Core supported foundations
- Generated foundation structures

### Token System

- Primitive tokens
- Semantic tokens
- Token references
- Supported token types
- User editing
- Token relationships

### Colour

- Colour generation
- Colour scales
- Semantic colour mapping
- Gamut handling
- Contrast evaluation
- User refinement

### Components

- Reference components
- Token consumption
- Relevant interaction states
- Visual system testing

### Validation

- Pass / Warning / Error results
- Filtering
- Individual result inspection
- Manual correction
- Automatic safe fixes
- Revalidation
- Export readiness

### Export

- DTCG-compatible JSON
- CSS Custom Properties
- Tailwind CSS
- JavaScript / TypeScript representation
- Format-specific readiness checks

---

## 22. V1 Exclusions

The following are outside the required V1 scope:

- Full visual design editor
- Figma replacement functionality
- Full website builder
- Complete code-generation platform
- Component marketplace
- Individual component-token extraction marketplace
- Advanced collaboration
- Team permissions
- Complex project management
- AI-generated complete interfaces
- AI-dependent token generation
- Automatic archetype switching
- Large third-party integration ecosystem
- Exhaustive platform-specific export catalogue
- Full design-system documentation generation

Future capabilities should only be added where there is a clear product requirement.

---

## 23. Architectural Constraints

The implementation must preserve the following constraints:

### Separation of responsibilities

Individual systems must not duplicate one another's authority.

### Deterministic core

Correctness-critical operations must not depend on generative AI.

### User ownership

Generated output must remain editable and user-controlled.

### Single source of truth

The project token system must remain authoritative.

### Contextual validation

Where validity depends on usage, validation must evaluate the relevant context rather than isolated values.

### Format-specific export readiness

Every supported export target must have its own readiness evaluation.

### Revalidation after change

Changes that affect validation must trigger the relevant validation process again.

### Reproducibility

Archetype and generation versions must be identifiable so that generated systems can be reproduced and understood.

---

## 24. V1 Acceptance Criteria

TokenForge V1 should allow a user to:

1. Create a project.
2. Select an archetype.
3. Define their initial foundations.
4. Generate a token system.
5. Inspect the generated system.
6. Modify supported token values and relationships.
7. Preview the system through reference components.
8. Test relevant component states.
9. View complete validation results.
10. Filter validation results by Pass, Warning and Error.
11. Open individual validation results.
12. Apply safe automatic fixes.
13. Correct problems manually.
14. Re-run validation after changes.
15. Select an export format.
16. Run the corresponding export-readiness check.
17. Resolve export-specific problems.
18. Change the selected export format and receive a new readiness evaluation.
19. Export the resulting token system.
20. Use the exported representation in an external project.

---

## 25. Document Authority

The Master Specification consolidates V1 requirements but does not replace specialised system documents.

| Area | Detailed Authority |
|---|---|
| Product | `PRODUCT.md` |
| Application architecture | `ARCHITECTURE.md` |
| Design-system model | `DESIGN-SYSTEM.md` |
| Archetypes | `ARCHETYPES.md` |
| Token structure | `TOKEN-MODEL.md` |
| Colour system | `COLOUR-ENGINE.md` |
| Components | `COMPONENTS.md` |
| Validation | `VALIDATION.md` |
| Export | `EXPORT-SYSTEM.md` |
| AI | `AI-SYSTEM.md` |
| Sources | `SOURCES.md` |
| Development sequence | `ROADMAP.md` |

If a detailed subsystem requirement changes, its specialised document should be updated and the Master Specification should subsequently be reviewed for consistency.

---

## 26. Core Product Model

TokenForge can be reduced to five fundamental stages:

    CREATE
       ↓
    TEST
       ↓
    REFINE
       ↓
    PROVE
       ↓
    EXPORT

### Create

Generate a structured starting system from foundations and an archetype.

### Test

Use components and validation to expose weaknesses.

### Refine

Allow the user to make deliberate changes.

### Prove

Establish that the resulting system satisfies applicable validation and export requirements.

### Export

Transform the approved system into a usable external representation.

---

## 27. Product North Star

TokenForge exists to help users build design systems that work before they build products that depend on them.

The core value proposition is therefore:

> **Token architecture + visual context + objective validation + practical export.**

TokenForge should not attempt to win by having the largest number of tokens, components, integrations or AI features.

It should win by making the process of creating a coherent, usable and exportable design system substantially easier.