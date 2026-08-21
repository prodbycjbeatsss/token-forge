# TokenForge — Validation

**Project:** TokenForge  
**Document:** Validation  
**Status:** Active  
**Version:** 1.2  
**Last Updated:** 21 August 2026  
**Purpose:** Define how TokenForge evaluates design-token systems, reports validation results, provides safe automatic remediation, supports manual correction, and determines export readiness.

---

## 1. Purpose

Validation is the evaluation layer of TokenForge.

It determines whether the current token system is structurally valid, internally coherent, accessible where applicable, and suitable for the next stage of the workflow.

Validation does not generate tokens or perform colour calculations.

The Colour Engine calculates and generates colour values.

Validation evaluates the resulting values against the rules that apply to the project.

Validation has two distinct stages:

    Token System
         ↓
    System Validation
         ↓
    User selects export format
         ↓
    Export Readiness Validation
         ↓
    Export

System validation evaluates the token system itself.

Export readiness validation evaluates whether that same system can be safely represented by the selected export format.

---

## 2. Validation in the Product Workflow

Validation is part of the normal linear TokenForge workflow.

The intended workflow is:

    Create
      ↓
    Generate
      ↓
    Edit
      ↓
    Validate
      ↓
    Export
      ↓
    Select Format
      ↓
    Final Export Readiness Check
      ↓
    Export

The user should be able to reach Validation before choosing an export format.

This prevents format-specific technical constraints from unnecessarily influencing the design-system creation process.

---

## 3. System Validation

System Validation evaluates the token system independently of any export format.

It checks whether the system itself is valid and coherent.

Examples include:

- Required token structure
- Invalid token values
- Invalid token types
- Broken references
- Circular references
- Missing required relationships
- Naming inconsistencies
- Invalid category structures
- Semantic role problems
- Accessibility failures where applicable
- Incomplete required states
- Other rules defined by the product and selected archetype

System Validation does not ask whether the system can be exported to CSS, JSON, Tailwind CSS or JavaScript/TypeScript.

Those checks belong to Export Readiness Validation.

---

## 4. Colour Engine and Validation

The Colour Engine and Validation have separate responsibilities.

### Colour Engine

The Colour Engine is responsible for:

- Colour-space calculations
- Palette generation
- Colour transformations
- Gamut handling
- Colour relationship calculations
- Colour output generation

### Validation

Validation is responsible for determining whether the resulting colour system satisfies applicable rules.

For example:

    User colour
         ↓
    Colour Engine
         ↓
    Generated colour
         ↓
    Validation
         ↓
    Pass / Warning / Error

The Colour Engine should not become a second validation system.

Validation should not become a second colour-generation engine.

This separation keeps both systems deterministic and easier to reason about.

---

## 5. Validation Results

Every validation rule produces a result.

A result contains enough information for the user to understand and act upon the problem, as well as machine-readable data for the UI to bind to.

A result should identify:

- Status
- Rule
- Machine-readable `affectedTokenIds` array (Strict Data Contract for UI/Component binding)
- Affected token or relationship (Human-readable)
- Explanation
- Why the result matters
- Recommended action
- Whether automatic remediation is available

The primary result states are:

### Pass

The relevant rule has been satisfied.

### Warning

The system is valid enough to continue, but the result identifies a potential issue or recommended improvement.

### Error

The system does not satisfy a required rule and requires correction before the relevant workflow stage can continue.

---

## 6. Validation Screen

The Validation screen presents the complete set of current validation results.

The user should be able to:

- View all results
- Filter by Pass
- Filter by Warning
- Filter by Error
- Open an individual result
- Inspect the affected token or relationship
- Correct the problem manually
- Apply an available automatic fix
- Automatically fix all applicable warnings
- Automatically fix all applicable errors

The validation screen should make the overall state of the token system immediately understandable without requiring the user to inspect every token individually.

---

## 7. Filtering

Validation results can be filtered by status:

    All
    Pass
    Warning
    Error

Filtering changes what is displayed.

It does not change the underlying validation state.

Selecting an individual result should take the user to the relevant token, relationship or configuration so they can understand and modify it.

---

## 8. Automatic Remediation

TokenForge may provide automatic remediation when the correct change can be determined safely and deterministically.

A fix should only be offered when TokenForge can establish:

- What is wrong
- What the correct correction is
- That applying the correction will not create a new known problem
- That the change is within the rules of the current token system

Examples may include:

- Repairing a broken deterministic reference
- Normalising a naming inconsistency where the intended convention is unambiguous
- Correcting a mechanically invalid token value
- Applying a known safe structural correction

TokenForge should not automatically make subjective design decisions.

If there are multiple reasonable solutions, the user should make the decision.

---

## 9. Fix All

The Validation screen may provide:

**Fix All Errors**

and:

**Fix All Warnings**

These actions should only apply fixes for results that have deterministic, safe remediation available.

A result without a safe automatic fix remains available for manual correction.

Fix All must not silently make subjective design decisions.

---

## 10. Manual Correction

Every validation result that cannot or should not be automatically fixed must remain actionable manually.

Selecting a result should provide a route to the relevant editing context.

The user should be able to:

1. Select the validation result.
2. Inspect the affected token or relationship.
3. Modify the relevant value or configuration.
4. Return to validation.
5. Re-run validation.

Validation should update after meaningful system changes rather than relying on stale results.

---

## 11. Revalidation

Validation results describe the state of the token system at a particular point in time.

When the underlying system changes, affected validation results must be considered stale.

TokenForge should re-evaluate the system after changes that could affect validation.

Examples include:

- Token value changes
- Token type changes
- Reference changes
- Naming changes
- Scale changes
- Semantic changes
- Component-related token changes
- Archetype configuration changes

The goal is to ensure the Validation screen always represents the current token system.

---

## 12. Dependency-Aware Validation

Validation should account for relationships between tokens.

For example:

    Primitive
       ↓
    Semantic
       ↓
    Component

A change to a primitive token may therefore affect:

- Semantic tokens
- Component states
- Accessibility results
- Other dependent validations

TokenForge should re-evaluate affected dependencies rather than assuming that a previously passing result remains valid.

---

## 13. Naming Validation

Naming validation checks the token system against its configured naming architecture.

This includes:

- Category-level naming consistency
- Duplicate or conflicting names
- Invalid names
- Broken naming relationships
- Semantic naming problems
- Naming rules required by the selected archetype

TokenForge should distinguish between a user intentionally changing a supported naming convention and a system becoming internally inconsistent.

A complete category-level naming change can be valid.

An inconsistent mixture of naming conventions within that category is not.

---

## 14. DTCG-Related Naming Validation

Where the TokenForge internal model is intended for DTCG export, export readiness must check the restrictions of the selected DTCG representation.

The latest available Design Tokens Community Group (DTCG) Candidate Recommendation prohibits token and group names from beginning with `$` and prohibits `.`, `{` and `}` within token or group names because of the syntax used for references.

These restrictions must not unnecessarily become global TokenForge naming restrictions.

Instead:

    Internal Token System
            ↓
    General System Validation
            ↓
    DTCG selected
            ↓
    DTCG Readiness Validation
            ↓
    DTCG-specific naming checks & Deterministic Syntax Translation

This allows TokenForge's internal model to remain useful independently of a specific export format, relying on Export Adapters to safely translate invalid characters for the target compiler without mutating the core database.

---

## 15. Accessibility Validation

Where applicable, Validation evaluates accessibility-related requirements.

For colour systems this may include:

- Text contrast
- Relevant UI contrast
- State contrast
- Other applicable accessibility relationships

The Colour Engine calculates the colour values and relevant colour relationships.

Validation determines whether those results satisfy the applicable accessibility rules.

A failed accessibility requirement is therefore a validation result, not a Colour Engine error.

---

## 16. Archetype Validation

The selected archetype may define required or recommended characteristics.

Validation can use those requirements when evaluating the generated system.

Examples include:

- Required semantic roles
- Required states
- Required token categories
- Expected relationships
- Other archetype-specific structural requirements

The archetype provides the rules or expectations.

The Validation system performs the evaluation.

This prevents each archetype from becoming its own independent validation engine.

---

## 17. Validation Severity

Validation severity should reflect the practical consequence of the issue.

### Error

The system violates a requirement that must be resolved before the relevant workflow stage can proceed.

### Warning

The system remains usable, but the result identifies a potential problem, inconsistency or recommendation.

### Pass

The system satisfies the relevant rule.

Validation should avoid generating warnings merely to make the system appear more thorough.

Every warning should have a meaningful reason to exist.

---

## 18. System Readiness

System Validation should provide an overall state for the token system.

For example:

    Ready
    Warnings
    Errors

A system containing warnings may remain usable.

A system containing unresolved errors is not considered fully valid.

The exact presentation belongs to the application UI, but the underlying validation state should remain deterministic.

---

## 19. Export Readiness

Export Readiness Validation is separate from System Validation.

It is performed only when an export format has been selected.

For example:

    System Validation
         ↓
    0 errors
         ↓
    Select CSS
         ↓
    CSS Readiness Validation
         ↓
    Ready for CSS export

The same token system may produce different readiness results for different formats.

---

## 20. Format-Specific Readiness

Each V1 export format has its own readiness rules.

V1 formats are:

- JSON
- CSS
- Tailwind CSS
- JavaScript / TypeScript

A system can therefore be valid in general while failing readiness for a particular export format.

For example:

    System
      ↓
    Valid

    CSS
      ↓
    Ready

    Tailwind CSS
      ↓
    Ready

    JavaScript / TypeScript
      ↓
    Error

The error belongs to the selected export representation rather than the underlying design-token system.

---

## 21. Readiness Invalidation

Export readiness is not permanent.

Changing the selected export format requires a new readiness check.

For example:

    CSS selected
        ↓
    CSS readiness check
        ↓
    2 errors
        ↓
    User fixes both
        ↓
    CSS ready
        ↓
    User changes selection to JavaScript / TypeScript
        ↓
    JavaScript / TypeScript readiness check
        ↓
    New result

The previous CSS readiness result must not be reused for JavaScript / TypeScript.

---

## 22. System Changes After Readiness

Changing the token system after an export readiness check may invalidate that readiness result.

For example:

    CSS
      ↓
    Ready
      ↓
    User changes token name
      ↓
    CSS readiness becomes stale
      ↓
    CSS readiness re-runs

The system should determine whether the change can affect the selected export.

If it can, the relevant readiness validation must be re-run.

This prevents users from exporting a system using a readiness result based on an older version of the token system.

---

## 23. Export Readiness Does Not Replace System Validation

Export readiness does not replace normal Validation.

The relationship is:

    System Validation
          ↓
    Is the design-token system valid?
          ↓
    Export Readiness
          ↓
    Can this valid system be represented in format X?

This distinction is important.

A format-specific exporter should not become responsible for determining whether the underlying design system is fundamentally valid.

---

## 24. Validation and Export Blocking

System errors should prevent the project from being considered fully valid.

Export readiness errors should prevent export for the selected format.

A warning does not automatically block export unless the relevant rule explicitly defines it as blocking.

The user should always be able to understand why an export cannot proceed.

---

## 25. Validation Rules

Validation rules should be deterministic and independently identifiable.

A rule should define:

- Unique rule identifier
- Description
- Scope
- Severity
- Evaluation logic
- Applicable token types or structures
- Automatic remediation capability where available

Rules should be reusable across the application rather than implemented separately inside individual screens.

---

## 26. Validation Scope

Validation should evaluate the appropriate layer.

### Token-level

Examples:

- Invalid value
- Invalid type
- Missing required property

### Relationship-level

Examples:

- Broken reference
- Circular reference
- Invalid dependency

### Category-level

Examples:

- Inconsistent naming convention
- Invalid scale
- Missing required token

### System-level

Examples:

- Missing semantic roles
- Incoherent structure
- Required system rule failure

### Export-level

Examples:

- Target-format naming restriction
- Unsupported token representation
- Invalid target syntax
- Format-specific compatibility problem

This separation prevents unrelated validation concerns from becoming mixed together.

---

## 27. Validation and Components

Components provide realistic consumers of the token system.

Validation can therefore use component relationships to identify problems that may not be apparent from isolated token values.

Examples include:

- Missing component state tokens
- Invalid state relationships
- Insufficient contrast in a component state
- Missing required semantic role

To facilitate this without duplicating logic, the Validation Engine operates on a strict data contract: every validation result includes an array of `affectedTokenIds`. The Component Lab subscribes to this array, allowing the UI to visually flag the exact anatomical part of a component that caused the validation failure, directly within the component preview.

---

## 28. Validation and Export Adapters

Export adapters are responsible for translating the internal token system into the selected target representation.

They should expose the requirements needed for Export Readiness Validation.

The relationship is:

    Internal Token Model
            ↓
    Export Adapter requirements
            ↓
    Readiness Validation
            ↓
    Export

Validation should detect known incompatibilities before the export operation begins.

The exporter should still perform final defensive checks before writing output.

---

## 29. No Hidden Corrections

Validation and export should not silently change the user's token system.

A readiness check may identify that a target format cannot represent something.

It should not silently modify the source token system to make the export succeed.

Where a deterministic transformation is part of the export format itself, that transformation belongs to the export adapter and must not alter the project's source of truth.

---

## 30. Validation Source of Truth

Validation evaluates the current approved token-system state.

It does not maintain an independent copy of the token system.

The relationship is:

    Token System
         ↓
    Validation
         ↓
    Results

Validation results can be cached for performance, but they must always be invalidated when relevant source data changes.

---

## 31. V1 Requirements

TokenForge V1 Validation must support:

- System Validation
- Pass / Warning / Error results
- Result filtering
- Individual result inspection
- Manual correction workflows
- Automatic remediation where safe
- Fix All applicable errors
- Fix All applicable warnings
- Token dependency evaluation
- Naming validation
- Accessibility validation
- Archetype-aware validation
- Export Readiness Validation
- Format-specific readiness checks
- Readiness invalidation after relevant changes
- Readiness checks for all four V1 export formats
- Final defensive validation before export

---

## 32. V1 Boundary

Validation does not:

- Generate token values
- Generate colour palettes
- Define archetypes
- Define the token model
- Define component architecture
- Perform arbitrary design decisions
- Silently rewrite the source token system
- Replace export adapters
- Validate an export format before that format has been selected

The relevant responsibilities remain:

| Concern | Primary System |
|---|---|
| Token structure | `TOKEN-MODEL.md` |
| Archetype configuration | `ARCHETYPES.md` |
| Colour calculations | `COLOUR-ENGINE.md` |
| System evaluation | `VALIDATION.md` |
| Components | `COMPONENTS.md` |
| Export translation | `EXPORT-SYSTEM.md` |

---

## 33. Summary

TokenForge uses two related but distinct validation stages.

    Token System
         ↓
    System Validation
         ↓
    Valid / Warnings / Errors
         ↓
    User selects export format
         ↓
    Format-specific Readiness Validation
         ↓
    Ready / Warnings / Errors
         ↓
    Export

System Validation asks:

> **Is the design-token system itself valid and coherent?**

Export Readiness Validation asks:

> **Can this particular token system be safely represented in the selected export format?**

The selected export format therefore matters only at the export-readiness stage.

Changing the token system or changing the selected export format can invalidate previous readiness results and require revalidation.

The core principle is:

> **Validate the system first. Validate the representation second.**
