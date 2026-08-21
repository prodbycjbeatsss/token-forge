TokenForge — Architecture

Project: TokenForge
Document: Architecture
Status: Active
Version: 1.2
Last Updated: 21 August 2026
Purpose: Define the high-level technical architecture, system boundaries, dependencies and data flow required to implement TokenForge V1.

---

1. Architectural Purpose

TokenForge is structured as a deterministic design-token authoring, evaluation and export system.

The architecture separates:

- Product state
- Token modelling
- Archetype configuration
- Colour generation
- Component consumption
- Validation
- Export
- Persistence

Each system has a defined responsibility and should not duplicate the responsibilities of another system.

---

2. Core Architecture

The high-level architecture is:

User
  ↓
Application UI
  ↓
Project State
  ↓
Token Model
  ↓
┌───────────────┬────────────────┬─────────────────┐
↓               ↓                ↓                 ↓

Archetypes    Colour Engine    Components       Validation
│               │                │                 │
│               │                │                 │
└───────────────┴────────────────┴─────────────────┘
↓
Validated Token System
↓
Export System
↓
JSON / CSS / Tailwind / JS-TS

The Token Model is the central representation used by the other systems.

Components and Validation are not sequential workflow stages.

Components consume the current token system to provide realistic visual usage.

Validation evaluates the current token system and, where applicable, uses component-context information to evaluate token relationships in realistic usage.

---

3. Canonical Token Model

The Token Model provides the canonical internal representation of the design-token system.

Other systems consume or evaluate this representation rather than maintaining independent token definitions.

The Token Model is responsible for:

- Token identity
- Token type
- Token value
- Token relationships
- Primitive and semantic distinction
- Naming structure
- Composite token representation
- Token metadata required by the application

The complete token architecture is defined in "TOKEN-MODEL.md".

---

4. Archetypes

Archetypes configure how the common Token Model is used.

An archetype may define:

- Token organisation
- Scales
- Semantic vocabulary
- Naming conventions
- Recommended relationships
- Generation strategy

Archetypes must remain compatible with the common Token Model.

An archetype must not create an incompatible private token architecture.

---

5. Colour Engine

The Colour Engine is responsible for colour generation and colour calculations.

It receives the appropriate project inputs and produces colour values and relationships for the token system.

It is responsible for:

- Colour-space calculations
- Palette generation
- Colour transformations
- Gamut handling
- Colour relationships

It does not determine whether a generated colour system satisfies TokenForge validation rules.

That responsibility belongs to Validation.

---

6. Components

Components consume the token system in realistic interface contexts.

They provide a practical environment for testing how tokens behave when applied to interface elements.

The V1 component set contains 12 reference components.

Components should consume semantic tokens rather than bypassing the token architecture with arbitrary values.

The component system is not a full component-library authoring platform in V1.

Components are a consumer of the token system, not a processing stage in the core token-generation and export workflow.

---

7. Validation

Validation evaluates the current token system.

It is divided conceptually into:

System Validation

Evaluates whether the token system itself is valid and coherent.

Export Readiness Validation

Evaluates whether the current system can be represented by the selected export format.

The relationship is:

Token System
     ↓
System Validation
     ↓
Export Selection
     ↓
Export Readiness
     ↓
Export

Validation does not generate tokens or perform colour calculations.

Where contextual component usage is relevant to a validation rule, Validation may evaluate the token relationships used by the Component Lab.

The Component Lab does not implement a separate validation engine.

---

8. Export System

The Export System converts the canonical token model into supported target representations.

V1 supports:

- JSON
- CSS
- Tailwind CSS
- JavaScript / TypeScript

Each format has an export adapter.

Export adapters are responsible for target-specific representation and syntax.

They do not redefine the Token Model or perform general system validation.

---

9. Data Flow

The primary token and export workflow is:

Project Configuration
        ↓
   Archetype
        ↓
Generation Systems
        ↓
   Token Model
        ↓
   User Editing
        ↓
System Validation
        ↓
Export Selection
        ↓
Export Readiness
        ↓
   Export Adapter
        ↓
  Target Output

The Component Lab operates alongside this workflow:

Token Model
     ↓
Component Definitions
     ↓
Component Preview
     ↓
Visual Feedback

Where relevant, component usage can provide contextual information to Validation:

Token Model
     ↓
Component Usage
     ↓
Validation Context
     ↓
Validation Result

The Component Lab therefore does not sit between User Editing and System Validation.

The Token Model remains the canonical state throughout the process.

---

10. State and Recalculation

Derived information must not become an independent source of truth.

When relevant source data changes, dependent systems must be recalculated or invalidated.

Examples:

Primitive token changes
        ↓
Dependent semantic tokens
        ↓
Component results
        ↓
Validation results
        ↓
Export readiness

Similarly:

CSS selected
     ↓
CSS readiness
     ↓
User selects JavaScript / TypeScript
     ↓
JavaScript / TypeScript readiness

The previous readiness result must not be reused.

Component previews and validation results are derived from the current token system and must update when relevant token values or relationships change.

---

11. Naming Architecture

Token naming is part of the token-system architecture rather than an arbitrary UI preference.

Users may customise supported naming conventions at the category level.

A naming convention change must remain internally consistent.

For example, changing the naming convention for spacing should update the relevant spacing naming scheme consistently rather than allowing isolated token renames that create a mixed convention.

The detailed naming architecture belongs to "TOKEN-MODEL.md".

---

12. Deterministic Core

TokenForge should use deterministic logic wherever the required result can be defined reliably through explicit rules.

The deterministic core includes:

- Token generation
- Colour calculations
- Token relationships
- Naming rules
- Validation
- Export transformation

This makes results reproducible and testable.

---

13. AI Boundary

AI is not required for the core TokenForge architecture.

The application must be able to perform its core workflow without an AI service.

AI may be introduced later where it provides a clear advantage over deterministic logic.

Possible future uses could include assisted explanation, interpretation or optional recommendations.

Such functionality must remain outside the core token-model and validation architecture unless there is a demonstrated reason to make it foundational.

---

14. Source of Truth

The current project state and canonical Token Model are the source of truth.

The following must not become competing sources of truth:

- Generated previews
- Component previews
- Validation results
- Export files
- Cached calculations
- AI suggestions

These are derived from the current project state.

---

15. System Boundaries

System| Responsibility
Project State| Current user/project configuration
Token Model| Canonical token representation
Archetypes| Token-system configuration and generation strategy
Colour Engine| Colour calculation and generation
Components| Realistic token consumption
Validation| System and export-readiness evaluation
Export System| Target-format transformation
Persistence| Saving and restoring project state

A system should not absorb responsibilities belonging to another system simply because the implementation is convenient.

---

16. V1 Architectural Boundary

V1 should contain only the systems necessary to create and use a functioning design-token system.

The architecture does not require:

- Social infrastructure
- Collaboration infrastructure
- Public publishing
- Marketplace infrastructure
- Full design-tool infrastructure
- AI infrastructure
- Continuous export infrastructure

These may be introduced later without changing the fundamental Token Model.

---

17. Architectural Principle

The architecture should preserve one central principle:

«One canonical token system, multiple consumers and representations.»

Components consume it.

Validation evaluates it.

Export represents it.

The Colour Engine generates relevant values.

Archetypes configure its organisation.

No secondary system should silently replace the canonical model.

---

18. Related Documents

Detailed implementation rules are defined in:

- "PRODUCT.md"
- "TOKEN-MODEL.md"
- "ARCHETYPES.md"
- "COLOUR-ENGINE.md"
- "COMPONENTS.md"
- "VALIDATION.md"
- "EXPORT-SYSTEM.md"

This document provides the architectural relationship between those systems rather than redefining their individual specifications.