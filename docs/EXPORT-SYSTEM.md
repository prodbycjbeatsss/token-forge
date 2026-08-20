# TokenForge — Export System

**Project:** TokenForge  
**Document:** Export System  
**Status:** Active  
**Version:** 1.1  
**Last Updated:** 21 August 2026  
**Purpose:** Define how TokenForge converts the approved token system into the four supported V1 export formats and determines whether that system is ready for each selected format.

---

## 1. Purpose

The Export System converts a validated TokenForge token system into a representation that can be used in an external development environment.

Export is the final stage of the TokenForge workflow:

    Create / Edit
         ↓
    System Validation
         ↓
    Select Export Format
         ↓
    Export Readiness Validation
         ↓
    Export
         ↓
    Download

The Export System is responsible for representation and transformation.

It does not define the underlying token model, generate design tokens, or perform general system validation.

---

## 2. V1 Export Formats

TokenForge V1 supports four export formats:

1. JSON
2. CSS
3. Tailwind CSS
4. JavaScript / TypeScript

The V1 export system should remain limited to these formats.

Additional formats may be considered after V1 based on demonstrated user demand and implementation value.

---

## 3. Source of Truth

The canonical TokenForge token system is the source of truth.

Export formats are representations of that system.

    TokenForge Token Model
            ↓
       Export Adapter
            ↓
       Target Format

An exported file must not become a second source of truth inside TokenForge.

Changes made to an exported file outside TokenForge are therefore not automatically reflected in the TokenForge project.

---

## 4. Complete System Export

The default export is the complete approved token system.

A complete export includes all token categories supported by the selected format and included in the current project.

The user should not need to understand the internal architecture to export the complete system.

The intended flow is:

    Select format
         ↓
    Complete System
         ↓
    Readiness Check
         ↓
    Export

---

## 5. Category Selection

V1 may also allow the user to choose which token categories are included in an export.

The user can therefore choose:

    Complete System

or:

    Selected Categories

For example:

    ☑ Colour
    ☑ Typography
    ☑ Spacing
    ☑ Radius
    ☐ Shadow
    ☑ Motion

The selected categories become part of the export input.

Category selection must not modify or delete tokens from the project's source system.

It only determines what is included in that particular export.

---

## 6. Category Dependencies

Token categories may contain relationships with other categories.

For example:

    Semantic token
          ↓
    references primitive token

If a user excludes a category that is required by an included token, Export Readiness Validation must identify the resulting dependency problem.

TokenForge should not silently include excluded categories or silently rewrite references.

The user should instead be shown the relevant readiness problem and given an appropriate way to resolve it.

---

## 7. Export Workflow

The V1 export workflow is:

### Step 1 — System Validation

The complete token system is validated independently of the export format.

### Step 2 — Format Selection

The user selects one of the four supported export formats.

### Step 3 — Category Selection

The user may export the complete system or select specific token categories.

### Step 4 — Export Readiness Validation

TokenForge checks whether the current system and selected categories can be represented in the selected format.

### Step 5 — Correction

If readiness errors exist, the user can correct them.

### Step 6 — Final Readiness Check

TokenForge confirms that the current export selection is still valid.

### Step 7 — Export

The selected adapter generates the requested files.

---

## 8. Export Readiness

Export readiness is format-specific.

A token system that is valid in TokenForge is not automatically guaranteed to be representable in every target format.

For example:

    System Validation
         ↓
        PASS

    CSS selected
         ↓
    CSS Readiness
         ↓
        PASS

    User changes format

    JavaScript / TypeScript selected
         ↓
    JavaScript / TypeScript Readiness
         ↓
    New evaluation

The readiness result for one format must never be assumed to apply to another format.

---

## 9. Readiness Invalidation

Export readiness is associated with:

- The current token-system state
- The selected export format
- The selected token categories
- The relevant export configuration

Changing any of these may invalidate the existing readiness result.

Examples:

- Changing CSS to JSON
- Changing selected token categories
- Renaming a token
- Changing a token type
- Changing a token reference
- Changing a token value where the target format has relevant constraints

When a relevant change occurs, TokenForge must re-run the affected readiness checks before export.

---

## 10. Final Validation Before Export

A final readiness check must occur immediately before export.

This protects against exporting a system using stale validation results.

The final stage is therefore:

    Current Project State
            ↓
    Current Export Selection
            ↓
    Final Readiness Check
            ↓
       ┌────┴────┐
      PASS      FAIL
       ↓          ↓
    Export     Return to correction

The exporter should also perform defensive validation before writing output.

---

## 11. Export Adapters

Each export format is implemented through an export adapter.

The adapter converts the canonical TokenForge representation into the target representation.

    Internal Token Model
            ↓
       Export Adapter
       ↙     ↓      ↘
     CSS    JSON    Tailwind
            ...
       JavaScript / TypeScript

Each adapter is responsible for the syntax and representation rules of its target format.

The adapter must not redefine the TokenForge token model.

---

## 12. Adapter Responsibilities

An export adapter is responsible for:

- Reading the canonical token representation
- Applying the selected category filter
- Resolving the target representation
- Converting token types where appropriate
- Converting references into target syntax
- Producing valid target-format output
- Reporting target-format incompatibilities
- Preserving token relationships where the target format supports them

An adapter is not responsible for:

- Generating the token system
- Choosing an archetype
- Deciding whether a design system is visually good
- Performing general accessibility validation
- Silently changing the source token system

---

## 13. JSON Export

JSON is the most direct machine-readable representation of the token system.

The JSON exporter should preserve as much of the canonical token structure as the selected JSON representation allows.

Where DTCG-compatible output is provided, it should follow the applicable Design Tokens Community Group specification.

TokenForge should not claim that every JSON export is automatically DTCG-compliant unless it has passed the relevant DTCG readiness checks.

The internal TokenForge model remains the source of truth.

---

## 14. DTCG Compatibility

The Design Tokens Community Group specification provides a standard format for exchanging design tokens.

TokenForge should use the applicable DTCG specification when defining DTCG-compatible JSON output.

DTCG-compatible export should be treated as an output representation rather than the complete definition of TokenForge's internal model.

The internal model may contain application-specific metadata that is not required by the target representation.

Where a DTCG export cannot represent part of the current system, Export Readiness Validation should identify the incompatibility before export.

---

## 15. CSS Export

CSS export should represent tokens using CSS custom properties.

A conceptual result is:

    :root {
      --color-primary: ...;
      --spacing-md: ...;
      --radius-md: ...;
    }

The exact generated naming follows the TokenForge naming architecture and the CSS adapter's conversion rules.

References should be represented using valid CSS custom-property references where supported.

The CSS exporter should produce output that can be directly incorporated into a web project's stylesheet or token layer.

---

## 16. Tailwind CSS Export

Tailwind CSS export should translate the TokenForge token system into the configuration or token representation appropriate to the supported Tailwind version.

The adapter must be version-specific where Tailwind's configuration model requires it.

TokenForge should not assume that a configuration valid for one Tailwind major version is automatically valid for another.

The supported V1 Tailwind target should therefore be explicitly defined during implementation.

The export adapter should preserve the relationship between TokenForge tokens and Tailwind theme values where the target representation permits it.

---

## 17. JavaScript / TypeScript Export

JavaScript / TypeScript export provides a programmatic representation of the token system for application code.

A conceptual result is:

    export const tokens = {
      color: {
        primary: "...",
      },
    };

The exact output structure should be deterministic and documented.

TypeScript is a valid V1 export target because design tokens are frequently consumed directly by application code, build tooling and component systems.

Where TypeScript is selected, the generated output should use valid TypeScript syntax.

The export should not require the consuming project to adopt a TokenForge-specific runtime.

---

## 18. Naming During Export

Token names originate from the approved TokenForge token system.

Export adapters transform names only when required by the target format.

For example:

    TokenForge
    spacing.md

may need to become an appropriate target representation for CSS or another format.

An adapter must not silently rename the source token.

If a target format imposes a restriction that cannot be safely transformed, Export Readiness Validation should report the issue.

---

## 19. Target-Specific Naming Restrictions

Target-specific naming restrictions belong primarily to Export Readiness Validation and the relevant adapter.

This is important because a naming rule required by one format does not necessarily need to become a global TokenForge restriction.

The process is:

    TokenForge name
          ↓
    Target compatibility check
          ↓
    Valid transformation?
       ↙       ↘
     Yes        No
      ↓          ↓
    Export     Error

Where a deterministic transformation is safe and predictable, the adapter may perform it.

Where no safe transformation exists, the export should be blocked.

---

## 20. References

Token references must remain meaningful after export.

For example:

    semantic.color.primary
            ↓
    primitive.color.blue.500

should remain a valid relationship in the target representation where the target format supports references.

If the target format does not support the same reference mechanism, the adapter must use an appropriate deterministic representation or report an incompatibility.

References must never be silently broken.

---

## 21. Composite Tokens

Composite tokens require target-specific handling.

Where a target format supports the relevant structure, the adapter should preserve it.

Where a target format requires the composite value to be represented differently, the adapter may transform it according to documented rules.

If the transformation would lose meaningful information, Export Readiness Validation should report the limitation rather than silently discarding data.

The canonical composite token remains unchanged.

---

## 22. Unsupported Token Types

If the selected export format cannot represent a token type or structure, the exporter must not silently discard it.

The process is:

    Unsupported representation
            ↓
    Export Readiness Error
            ↓
    User chooses how to resolve it

Possible resolutions may include:

- Include a different representation
- Exclude the affected category
- Modify the token system
- Choose another export format

The source token system remains unchanged until the user explicitly modifies it.

---

## 23. Export Errors

Export errors should be actionable.

An error should identify:

- The affected token or category
- The selected export format
- Why the representation is unsupported or invalid
- Whether automatic remediation is available
- What the user can do to resolve it

Export should not fail with an opaque technical message when the problem can be explained in user-facing terms.

---

## 24. Export Output

The export system should generate the files required for the selected format.

The output should be:

- Deterministic
- Valid for the selected target
- Consistent with the current token system
- Consistent with the selected categories
- Free from unresolved export errors

The same source system and export configuration should produce equivalent output.

---

## 25. No Source Mutation

Export must never modify the project's canonical token system.

For example, if CSS requires a different representation of a token name:

    TokenForge token
          ↓
    CSS transformation
          ↓
    CSS output

The source token remains unchanged.

This ensures that exporting one format does not alter the result of a later export to another format.

---

## 26. Multiple Export Formats

A user may export the same system in multiple formats.

For example:

    TokenForge System
        ├── JSON
        ├── CSS
        ├── Tailwind CSS
        └── JavaScript / TypeScript

Each format is evaluated independently.

A successful CSS export does not imply that JSON, Tailwind CSS or JavaScript / TypeScript is ready.

---

## 27. Export and Validation Relationship

The Validation system owns evaluation.

The Export System owns representation.

    Validation
         ↓
    Is the system valid?
         ↓
    Export System
         ↓
    Can the selected representation be produced?

Export adapters may perform defensive technical checks, but the main readiness evaluation should remain part of the Validation architecture.

This prevents validation logic from becoming duplicated across four exporters.

---

## 28. V1 Export Requirements

TokenForge V1 must support:

- JSON export
- CSS export
- Tailwind CSS export
- JavaScript / TypeScript export
- Complete system export
- Token-category selection
- Format-specific readiness validation
- Readiness invalidation after relevant changes
- Final readiness check before export
- Export adapters
- Deterministic output
- Reference preservation where supported
- Clear unsupported-format errors
- No silent source-system mutation

---

## 29. V1 Non-Goals

The V1 Export System does not need to provide:

- Android XML
- Swift asset/catalogue generation
- Kotlin generation
- Figma file generation
- Design-tool plugin exports
- Framework-specific component generation
- Automatic repository integration
- Git commits
- Package publishing
- Cloud synchronisation
- Continuous export pipelines

These can be considered after V1 if there is demonstrated value.

---

## 30. Relationship to Other Documents

| Concern | Primary Document |
|---|---|
| Product scope | `PRODUCT.md` |
| Token structure | `TOKEN-MODEL.md` |
| Archetypes | `ARCHETYPES.md` |
| Colour generation | `COLOUR-ENGINE.md` |
| Validation and readiness | `VALIDATION.md` |
| Components | `COMPONENTS.md` |
| Export behaviour | `EXPORT-SYSTEM.md` |
| Application architecture | `ARCHITECTURE.md` |
| Overall specification | `MASTER-SPECIFICATION.md` |

This document defines export behaviour without redefining the underlying token model or validation architecture.

---

## 31. Summary

TokenForge V1 exports a validated token system into four practical development formats:

    JSON
    CSS
    Tailwind CSS
    JavaScript / TypeScript

The system is validated before export format selection.

After the user selects a format and optional token categories, TokenForge performs a format-specific readiness check.

Changing the format, selected categories or relevant token-system data invalidates the previous readiness state.

A final readiness check occurs immediately before export.

The architecture is:

    Canonical Token System
            ↓
    System Validation
            ↓
    Export Selection
            ↓
    Category Selection
            ↓
    Format Readiness Validation
            ↓
    Export Adapter
            ↓
    Target Format

The core principle is:

> **One canonical system. Multiple validated representations.**