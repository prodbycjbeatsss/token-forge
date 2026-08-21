# TokenForge — Master Specification

**Project:** TokenForge  
**Document:** Master Specification  
**Status:** Active  
**Version:** 1.1  
**Last Updated:** 21 August 2026  
**Purpose:** Provide the authoritative high-level specification for TokenForge V1 and establish how the product, token model, generation, validation, components and export systems fit together.

---

## 1. Product Definition

TokenForge is a design-token authoring, validation and export tool.

It enables a user to establish design foundations, generate a structured token system, refine it, test it against realistic components, validate it and export it for use in an external project.

The product principle is:

> **Design the system before you build the interface.**

---

## 2. V1 Objective

TokenForge V1 must provide a complete working path from design intent to usable exported tokens.

The minimum complete workflow is:

    User Input
        ↓
    Archetype
        ↓
    Token Generation
        ↓
    Token Editing
        ↓
    Component Testing
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

V1 is complete when this workflow works reliably.

---

## 3. Core Systems

TokenForge V1 consists of the following primary systems:

1. Product/Application Layer
2. Token Model
3. Archetypes
4. Colour Engine
5. Components
6. Validation
7. Export System
8. Persistence

These systems have distinct responsibilities.

---

## 4. Token Model

The Token Model is the canonical representation of the design-token system.

It defines the supported token capabilities, relationships, naming architecture and structural rules.

The model supports the distinction between foundational primitives and semantic tokens and provides the common structure used by all archetypes.

The detailed specification is defined in `TOKEN-MODEL.md`.

---

## 5. Archetypes

Archetypes provide controlled design-system blueprints.

They determine how the common Token Model is organised and may define:

- Scales
- Semantic vocabulary
- Naming conventions
- Relationships
- Generation strategy

Archetypes do not create incompatible token types or independent token models.

The detailed specification is defined in `ARCHETYPES.md`.

---

## 6. Colour Engine

The Colour Engine transforms user colour foundations into generated colour values and relationships.

It performs the required colour calculations and generation.

Validation subsequently determines whether those results satisfy the applicable rules.

The Colour Engine therefore generates.

Validation evaluates.

The detailed specification is defined in `COLOUR-ENGINE.md`.

---

## 7. Components

Components provide realistic consumers of the token system.

V1 includes 12 reference components.

They exist to demonstrate token behaviour, expose inconsistencies and provide realistic contexts for evaluation.

They are not intended to form a complete component-library product.

The detailed specification is defined in `COMPONENTS.md`.

---

## 8. Validation

Validation is a required stage of the V1 workflow.

It has two distinct responsibilities:

### System Validation

Determines whether the token system itself is valid and coherent.

### Export Readiness Validation

Determines whether the current system can be represented in the selected export format.

The sequence is:

    System Validation
          ↓
    Select Export Format
          ↓
    Export Readiness
          ↓
    Export

Changing the export format, selected categories or relevant project data invalidates the affected readiness state.

The detailed specification is defined in `VALIDATION.md`.

---

## 9. Export

V1 provides four export formats:

- JSON
- CSS
- Tailwind CSS
- JavaScript / TypeScript

Users can export the complete system

Each export format has an independent readiness check.

The Export System converts the canonical Token Model into the selected representation without modifying the source system.

The detailed specification is defined in `EXPORT-SYSTEM.md`.

---

## 10. Naming

TokenForge provides controlled naming customisation.

Users may change supported naming conventions, but category-level conventions must remain internally consistent.

Arbitrary isolated token renaming is not the intended V1 model.

This provides user control without allowing the system to become structurally incoherent.

The detailed naming rules are defined in `TOKEN-MODEL.md`.

---

## 11. Validation and Export Relationship

The two validation stages must remain separate.

### Before Export Selection

TokenForge asks:

> Is the token system valid?

### After Export Selection

TokenForge asks:

> Can this token system be represented correctly in this format?

This prevents target-format limitations from unnecessarily affecting the general design-system validation process.

---

## 12. Deterministic Architecture

The core TokenForge workflow should be deterministic.

Where a result can be defined reliably through explicit rules, TokenForge should use those rules.

This includes:

- Token generation
- Colour calculations
- Naming consistency
- Validation
- Export transformation

Determinism provides reproducibility, testability and predictable behaviour.

---

## 13. AI

AI is not a required dependency of TokenForge V1.

The core product must function without AI services.

AI may be introduced later where it provides a demonstrable benefit that cannot be achieved adequately through deterministic systems.

AI must not be used simply to replace deterministic logic that can be implemented reliably.

---

## 14. V1 Scope

V1 includes:

- Project creation
- Brand-colour input
- Archetype selection
- Token generation
- Token editing
- Controlled naming customisation
- 12 reference components
- Component-based system testing
- System validation
- Automatic remediation where safe
- Manual correction
- Export readiness validation
- Complete-system export
- JSON export
- CSS export
- Tailwind CSS (V4) export
- JavaScript / TypeScript export

---

## 15. V1 Exclusions

V1 does not require:

- Social features
- Collaboration
- Public publishing
- Community functionality
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

These are post-V1 considerations rather than requirements for a functioning V1.

---

## 16. System Relationships

The systems interact as follows:

    Product/Application
            ↓
       Project State
            ↓
        Archetype
            ↓
       Token Model
         ↙   ↓   ↘
    Colour  Components  Editing
    Engine      ↓
         ↘     ↓
          Validation
               ↓
        Export Selection
               ↓
      Export Readiness
               ↓
        Export Adapter
          ↙    ↓    ↘
       JSON   CSS   Tailwind
               +
        JavaScript / TypeScript

The Token Model remains the central representation.

---

## 17. Source of Truth

The canonical project state and Token Model are the source of truth.

Derived representations must not replace them.

This includes:

- Component previews
- Validation results
- Export files
- Cached calculations
- Generated previews
- Future AI suggestions

Any derived state must be recalculated or invalidated when its source changes.

---

## 18. Implementation Principle

The implementation should favour clear system boundaries over unnecessary abstraction.

Each major capability should have one authoritative owner.

For example:

| Decision | Owner |
|---|---|
| Token structure | Token Model |
| Archetype behaviour | Archetypes |
| Colour mathematics | Colour Engine |
| Component definitions | Components |
| System evaluation | Validation |
| Target representation | Export System |
| Product scope | Product Specification |
| High-level system relationships | Architecture |

This prevents contradictory implementations where multiple systems attempt to control the same behaviour.

---

## 19. V1 Success Criterion

TokenForge V1 succeeds when a user can:

1. Establish their design foundations.
2. Select a suitable archetype.
3. Generate a structured token system.
4. Refine the system.
5. Test the system against the V1 components.
6. Resolve validation issues.
7. Select an export format.
8. Resolve any format-specific readiness issues.
9. Export the resulting token system.
10. Use that exported system in a real project.

The exported result must be more than a visual demonstration.

It must represent a usable design-token system.

---

## 20. Specification Authority

This document provides the high-level product and architectural contract.

Detailed rules belong to their dedicated documents.

Where implementation detail is required, the relevant specialised document is authoritative for that subsystem.

The master specification should summarise those decisions rather than introduce alternative definitions.

---

## 21. Final Architectural Principle

TokenForge V1 is built around one canonical system:

> **Create one coherent token system, validate it once as a system, validate its representation for the chosen target, and export it without changing the source.**

That principle governs the relationship between generation, editing, components, validation and export.