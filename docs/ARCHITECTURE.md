# TokenForge — Architecture

**Project:** TokenForge
**Document:** Architecture
**Status:** Active
**Version:** 1.0
**Last Updated:** 20 August 2026

---

## 1. Purpose

The Architecture document defines how the major TokenForge systems relate to one another.

It provides the high-level structure of the product without defining the detailed behaviour of individual systems.

The architecture should establish clear responsibilities, data flow and boundaries so that each system can evolve without duplicating the responsibilities of another.

TokenForge is built around the principle:

«Create the system → Test the system → Refine the system → Prove the system → Export the system.»

---

## 2. Architectural Principles

### 2.1 Separation of Responsibilities

Each major TokenForge system should have a clear responsibility.

A system should not take ownership of logic that belongs to another system.

For example:

- The Colour Engine performs colour calculations.
- Validation evaluates the resulting system.
- Components demonstrate token usage.
- Export transforms the approved system into an external representation.

This separation reduces duplication and makes the system easier to maintain.

### 2.2 Deterministic Core

Core TokenForge functionality should be deterministic wherever the problem can be solved through defined rules, calculations or standards.

The following should not depend on generative AI:

- Token structure
- Token references
- Colour calculations
- Accessibility calculations
- Validation
- Dependency resolution
- Export transformation
- Export-readiness decisions

AI, if introduced in the future, remains an optional assistance layer rather than a core dependency.

### 2.3 User Ownership

TokenForge generates recommendations and structures, but the resulting project belongs to the user.

The general relationship is:

    Archetype
        ↓
    Initial system
        ↓
    User refinement
        ↓
    User-approved system
        ↓
    Source of truth

Divergence from the original archetype is not automatically an error.

### 2.4 Single Source of Truth

Within a project, the user-approved token system is the authoritative representation of the design system.

Components, validation and exports should consume or transform that system rather than maintain competing copies of its values.

---

## 3. High-Level Architecture

The primary TokenForge workflow is:

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
    Components
        ↓
    Validation
        ↓
    Export Readiness
        ↓
    Export

This represents the product workflow rather than requiring every internal operation to occur as a single linear transaction.

Some systems may be invoked repeatedly during editing.

For example, changing a colour should update affected previews and may require validation to be recalculated.

---

## 4. Major Systems

TokenForge consists of the following major logical systems.

### 4.1 Project System

Responsible for the project-level context.

It maintains information such as:

- Project identity
- Selected archetype
- Archetype version
- User configuration
- Token system
- Project state
- Persistence information

The Project System provides the context in which the other systems operate.

---

### 4.2 Foundations

Foundations represent the user's initial design inputs.

Examples include:

- Brand colours
- Neutral colours
- Typography preferences
- Spacing preferences
- Shape preferences
- Other supported foundational values

Foundations provide input to generation but are not necessarily identical to the resulting tokens.

---

### 4.3 Archetype System

The Archetype System provides the blueprint used to generate the initial token system.

An archetype defines configuration such as:

- Token groups
- Naming conventions
- Semantic roles
- Scales
- Recommended relationships
- Relevant states
- Generation rules
- Validation expectations

The archetype does not become the user's final system.

An archetype is effectively configuration applied to the common Token Model.

---

### 4.4 Token Model

The Token Model provides the common structure that TokenForge uses to represent tokens.

It defines capabilities such as:

- Primitive tokens
- Semantic tokens
- Token references
- Token types
- Token identity
- Token metadata
- Dependencies
- Modes where supported

The Token Model does not define the exact token architecture of every project.

That configuration comes from the selected archetype.

---

### 4.5 Generation System

The Generation System combines:

- User foundations
- Selected archetype
- Token Model capabilities
- Generation rules

to create the initial project token system.

The result is a generated starting point that the user can inspect and modify.

Generation should be reproducible for equivalent inputs and configuration.

---

### 4.6 Colour Engine

The Colour Engine is the specialised system responsible for colour generation and colour-related calculations.

It operates within the token architecture established by the selected archetype and Token Model.

Its responsibilities include applicable colour:

- Conversion
- Scale generation
- Interpolation
- Gamut handling
- Colour relationships
- Accessibility calculations

The Colour Engine does not own the complete token architecture.

---

### 4.7 User Refinement

After generation, users can modify supported parts of the system.

Changes may include:

- Token values
- Names
- References
- Scales
- Semantic assignments
- Supported token groups
- Other permitted properties

The architecture must treat these changes as modifications to the user's system rather than modifications to the original archetype.

When a modification affects dependent systems, the relevant previews and validation state must be updated.

---

### 4.8 Component System

The Component System consumes the user's token system and demonstrates how it behaves in realistic interface components.

Components should primarily consume semantic tokens.

The intended relationship is:

    Primitive
        ↓
    Semantic
        ↓
    Component

Components do not create a competing token architecture.

The Component System provides visual context for evaluating the system and testing supported states.

---

### 4.9 Validation System

Validation evaluates the current project token system.

It is responsible for determining whether the system contains detectable problems such as:

- Invalid references
- Broken dependencies
- Structural problems
- Accessibility failures
- Inconsistent relationships
- Missing requirements
- Other defined validation conditions

Validation results belong to the Validation System rather than becoming part of the token's underlying design value.

Validation may be run repeatedly throughout the editing process.

---

### 4.10 Export System

The Export System transforms the user-approved token system into the selected external format.

The export relationship is:

    User-approved token system
            ↓
       Export selection
            ↓
     Export readiness check
            ↓
       Format transformation
            ↓
       Exported output

The exported representation is derived from the project's source of truth.

It does not become an independent TokenForge system.

---

## 5. System Relationship

The major responsibilities can be represented as:

    FOUNDATIONS
          │
          ▼
    ARCHETYPE ──────────────┐
          │                 │
          ▼                 │
    TOKEN MODEL             │
          │                 │
          ▼                 │
      GENERATION ◄──────────┘
          │
          ▼
    PROJECT TOKEN SYSTEM
          │
          ├───────────────┐
          │               │
          ▼               ▼
     COMPONENTS       VALIDATION
          │               │
          └───────┬───────┘
                  │
                  ▼
          EXPORT READINESS
                  │
                  ▼
               EXPORT

The AI System does not sit inside this core pipeline.

Future AI assistance may interact with the user and propose changes or explanations, but those suggestions must enter the normal TokenForge systems before affecting the project.

---

## 6. Source of Truth and Ownership

Each major concern has a primary authority.

| Concern | Primary Authority |
|---|---|
| Product requirements | Product Specification |
| External design-system knowledge | Sources |
| Archetype configuration | Archetype System |
| Token structure | Token Model |
| Colour mathematics | Colour Engine |
| User-approved values | Project Token System |
| Component behaviour | Component System |
| Validation results | Validation System |
| Export transformation | Export System |
| AI assistance | AI System |

This does not mean systems operate independently.

It means each system has a clearly defined owner for the information or operation it controls.

---

## 7. Dependency Direction

TokenForge should favour a clear dependency direction.

The general relationship is:

    Foundations
        ↓
    Archetype
        ↓
    Token Model
        ↓
    Generated Token System
        ↓
    Components / Validation
        ↓
    Export

Components and validation should consume the token system rather than redefine it.

Export should consume the approved token system rather than become another source of token values.

The architecture should avoid unnecessary circular dependencies.

---

## 8. Editing and State Changes

TokenForge is not a purely linear workflow.

Users may repeatedly move between editing, previewing and validation.

For example:

    Edit Token
        ↓
    Update Token System
        ↓
    Update Component Preview
        ↓
    Recalculate Relevant Validation
        ↓
    Update Validation State

A change to one token may therefore affect multiple dependent components, validation results and export-readiness status.

The system should maintain awareness of these dependencies rather than treating each screen as an isolated state.

---

## 9. Validation and Export Relationship

General system validation and export readiness are related but distinct.

### System Validation

Determines whether the TokenForge token system itself is valid.

This can occur before the user chooses an export format.

### Export Readiness

Occurs after the user selects an export format.

It checks whether the current token system can be represented correctly in that specific format.

The relationship is:

    Token System
        ↓
    General Validation
        ↓
    User selects export format
        ↓
    Format-specific readiness check
        ↓
    Export

If the user changes the selected export format, the relevant readiness check must be performed again.

For example:

    CSS selected
        ↓
    CSS readiness: 2 errors
        ↓
    User fixes errors
        ↓
    CSS readiness: ready
        ↓
    User selects TypeScript
        ↓
    TypeScript readiness check
        ↓
    TypeScript result

A system must never assume that passing one export format's readiness check automatically means it is ready for every other format.

---

## 10. Change Propagation

TokenForge should maintain relationships between dependent values.

For example:

    Primitive
        ↓
    Semantic Token
        ↓
    Component
        ↓
    Validation

If the primitive changes, affected semantic tokens and component previews should reflect the new value.

Relevant validation results should also be recalculated.

The same principle applies to changes in:

- Token references
- Semantic assignments
- Scales
- Component states
- Other dependent properties

The exact implementation of dependency tracking belongs to the technical implementation rather than this document.

---

## 11. AI Boundary

AI is intentionally outside the deterministic core.

The preferred relationship is:

    User
        ↓
    Optional AI Assistance
        ↓
    Suggestion / Explanation
        ↓
    User Decision
        ↓
    TokenForge Core Systems

AI must not become the authority for:

- Token validity
- Colour mathematics
- Accessibility
- Validation
- Export correctness
- Structural integrity

If AI becomes unavailable, the core TokenForge workflow must remain functional.

---

## 12. V1 Architectural Boundaries

V1 should maintain a deliberately limited architecture.

The core architecture requires:

- Project management
- Foundations
- Archetypes
- Token Model
- Generation
- Colour Engine
- User refinement
- Components
- Validation
- Export readiness
- Export

The following should not become architectural dependencies in V1 without a demonstrated product requirement:

- Generative AI
- Collaboration infrastructure
- Figma integration
- GitHub integration
- Full code-generation systems
- Component marketplaces
- Complex version-control workflows
- Large third-party integration systems

Future capabilities should be added around the existing architecture rather than weakening the separation of responsibilities established here.

---

## 13. Relationship to Other Documents

| Concern | Primary Document |
|---|---|
| Product purpose and scope | `PRODUCT.md` |
| Authoritative sources | `SOURCES.md` |
| Archetype definitions | `ARCHETYPES.md` |
| Token structure | `TOKEN-MODEL.md` |
| Colour generation | `COLOUR-ENGINE.md` |
| Component system | `COMPONENTS.md` |
| Validation | `VALIDATION.md` |
| Export | `EXPORT-SYSTEM.md` |
| AI boundaries | `AI-SYSTEM.md` |
| Application architecture | `ARCHITECTURE.md` |
| Product development sequence | `ROADMAP.md` |

The individual system documents remain authoritative for their own detailed behaviour.

`ARCHITECTURE.md` defines how those systems fit together.

---

## 14. Summary

TokenForge is structured around a shared token system rather than a collection of independent design tools.

The architecture is:

    User Foundations
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
      ┌───┴────┐
      ▼        ▼
 Components  Validation
      │        │
      └───┬────┘
          ▼
   Export Readiness
          ↓
       Export

The core architectural principles are:

- The archetype provides the starting blueprint.
- The Token Model provides the common token structure.
- The user-approved token system becomes the project's source of truth.
- The Colour Engine performs colour-specific calculations.
- Components consume and demonstrate the token system.
- Validation evaluates the system independently of presentation.
- Export transforms the approved system into a selected external representation.
- Export readiness is format-specific and must be rechecked when the export selection changes.
- AI is optional assistance and is not part of the deterministic core.

TokenForge's architecture should remain modular, deterministic and user-controlled while allowing future capabilities to be added without compromising those principles.