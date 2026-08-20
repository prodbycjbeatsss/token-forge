# TokenForge — Export System

**Project:** TokenForge  
**Document:** Export System  
**Status:** Active  
**Version:** 1.0  
**Last Updated:** 20 August 2026

---

## Purpose

The Export System converts a validated TokenForge design-token system into formats that can be used in external design and development environments.
Export is the final stage of the TokenForge workflow:

    Create / Edit
        ↓
    Validate
        ↓
    Select Export
        ↓
    Export Readiness Check
        ↓
    Export

TokenForge maintains one internal token system as the source of truth. Exported files are representations of that system, not separate sources of truth.

---

## 2. V1 Export Formats

TokenForge V1 will support four export formats.

| Format | Purpose |
|---|---|
| DTCG JSON | Standards-based design-token interchange |
| CSS | Web applications using CSS Custom Properties |
| Tailwind CSS | Applications using Tailwind CSS |
| JavaScript / TypeScript | Direct consumption by JavaScript and TypeScript applications |

### 2.1 DTCG JSON

DTCG JSON is the standards-oriented export format.

TokenForge should target a clearly defined stable DTCG specification version rather than silently changing its output as the external specification evolves.

DTCG export should preserve token types, values, references and supported metadata where the selected DTCG specification allows them.

### 2.2 CSS

CSS export should produce CSS Custom Properties.

Example:

    :root {
      --color-action-primary: ...;
      --color-text-primary: ...;
      --spacing-md: ...;
    }

Where possible, semantic tokens should retain their relationships to primitive tokens rather than being unnecessarily flattened.

### 2.3 Tailwind CSS

Tailwind export should target the current CSS-first Tailwind architecture.

The export should produce a usable Tailwind CSS token configuration rather than relying on legacy configuration approaches where the current Tailwind architecture provides a better representation.

### 2.4 JavaScript / TypeScript

JavaScript / TypeScript export should provide the token system as a structured object suitable for direct consumption by application code.

React is not treated as a separate export format.

A JavaScript / TypeScript token export can be consumed by React, React Native and other JavaScript or TypeScript applications without tying TokenForge's export system to a specific UI framework.

---

## 3. Export Scope

The user should have two export-scope options.

### Complete System

Exports the complete token system.

### Custom Selection

Allows the user to choose which token categories are included.

For example:

    Colour          ✓
    Typography      ✓
    Spacing         ✓
    Shape           ✓
    Elevation       ✕
    Motion          ✕

The user should not need to individually select every token when they only want to include or exclude entire categories.

---

## 4. Export Flow

The export experience should follow this structure:

    Export
      ↓
    Select format
      ↓
    Select scope
      ↓
    Export readiness check
      ↓
    Ready / Issues
      ↓
    Export

Example:

    Format
    [ CSS ]

    Scope
    ● Complete system
    ○ Custom selection

    [ Check Export ]

    Export Readiness
    ✓ Ready to export

    [ Export CSS ]

---

## 5. Relationship to Validation

TokenForge has one primary validation system.

General validation determines whether the user's token system is valid independently of any export format.

Examples include:

- Invalid token values
- Broken references
- Invalid token structure
- Naming problems
- Colour-system problems
- Accessibility problems
- Component-related problems

The main Validation system must not attempt to report export-format problems before the user has selected an export format.

---

## 6. Export Readiness

After the user selects an export format and scope, TokenForge performs an export-readiness check.

The readiness check determines whether the current token system can be exported correctly using the selected configuration.

It should consider:

- The selected export format
- The selected token categories
- The current token-system state
- Target-specific compatibility
- Required token references
- Target-specific naming requirements
- Any other requirements necessary to produce a valid export

Every V1 export format must have an export-readiness check.

No export format should bypass this process.

---

## 7. Export Readiness Is Configuration-Specific

An export-readiness result is only valid for the exact export configuration against which it was generated.

The relevant configuration includes:

- Current token-system state
- Export format
- Export scope
- Selected token categories
- Relevant export options

For example:

    CSS
    Complete System
        ↓
    Ready ✓

does not mean:

    JavaScript / TypeScript
    Complete System
        ↓
    Ready ✓

The JavaScript / TypeScript export must be checked independently.

---

## 8. Readiness Invalidation

TokenForge must invalidate an existing export-readiness result when a relevant part of the configuration changes.

### Changing the export format

Example:

    CSS
      ↓
    JavaScript / TypeScript

The previous CSS readiness result becomes invalid.

A new readiness check must run for JavaScript / TypeScript.

### Changing the export scope

Example:

    Complete System
      ↓
    Custom Selection

The readiness result must be recalculated.

### Changing selected categories

Example:

    Colour ✓
    Typography ✓
    Spacing ✓

becomes:

    Colour ✓
    Typography ✕
    Spacing ✓

The readiness result must be recalculated.

### Changing the token system

If the user modifies a token after an export-readiness check, the previous readiness result must no longer be treated as current.

A new check must be performed before export.

---

## 9. Export Readiness Results

The user should receive a clear result.

### Ready

The selected system can be exported using the selected format and scope.

Example:

    ✓ Ready to export

### Issues

The selected configuration contains export-specific problems.

Example:

    2 export issues

The user should be able to view the relevant issues and return to the appropriate editing or validation flow.

---

## 10. Export Errors

Export-specific errors should only be raised when they are relevant to the selected export configuration.

For example, if a particular token cannot be represented correctly in Tailwind CSS, that problem should be identified when Tailwind CSS is selected.

It should not appear as a general system validation error when the user has not selected Tailwind.

The purpose is to avoid presenting users with problems that do not affect their current task.

---

## 11. Token References

TokenForge should preserve token references where the selected export format supports them.

For example:

    semantic.action.primary
        ↓
    primitive.color.blue.600

should remain a relationship where the target format can represent it.

If the target format requires the reference to be resolved, the export system should resolve it safely.

An export must never contain a broken reference.

---

## 12. Token Selection and Dependencies

When the user selects specific token categories, TokenForge must account for dependencies between tokens.

For example:

    semantic.action.primary
        ↓
    primitive.color.blue.600

If the user includes the semantic token but excludes the primitive token it depends upon, TokenForge must ensure the resulting export remains valid.

The system may include required dependencies automatically where appropriate.

It must not create an intentionally broken export.

---

## 13. Naming

Users may modify token names after selecting an archetype.

Token names are therefore not permanently locked to the archetype.

However, TokenForge controls the naming rules to maintain consistency and prevent invalid token structures.

Naming rules should ensure:

- Consistent hierarchy
- Valid characters
- No duplicate token paths
- No ambiguous structures
- Valid export transformations
- Predictable generated names

The exact naming rules are defined by the Token Model and validation systems.

---

## 14. Export Naming

Each export format may require a different representation of the same TokenForge token name.

For example:

    color.action.primary

may become:

    --color-action-primary

when exported to CSS.

Naming transformations must be deterministic.

The same TokenForge project should produce predictable names when exported repeatedly using the same configuration.

---

## 15. Export Integrity

Before an export is generated, TokenForge must confirm that the selected configuration is ready.

The export process must not silently:

- Drop required tokens
- Break references
- Overwrite conflicting names
- Remove essential information
- Produce invalid target syntax

If the selected format cannot represent something required for a valid export, the user must be informed before the export is generated.

---

## 16. Export Preview

The Export interface should provide a concise preview before downloading.

The preview should communicate:

- Selected format
- Selected scope
- Number or categories of tokens being exported
- Export-readiness status
- Relevant issues, if any
- The files that will be generated

The preview does not need to reproduce the entire generated file.

A representative preview is sufficient for V1.

---

## 17. Export Output

Depending on the selected format, TokenForge may generate one or more files.

The user should receive the resulting files in a convenient downloadable form.

The output should have predictable filenames and valid syntax for the selected format.

---

## 18. Export and Components

Components are consumers of the token system.

V1 does not require TokenForge to generate complete component implementations as part of token export.

For example, exporting CSS does not automatically generate:

- React components
- Vue components
- React Native components
- Android components
- Web component libraries

The exported token system is intended to provide the design-system foundation that developers can use when implementing components.

---

## 19. V1 Exclusions

The following are outside the V1 Export System:

- Android XML
- Swift / SwiftUI
- Jetpack Compose
- Flutter
- Automatic component-code generation
- Complete application scaffolding
- Automatic GitHub publishing
- Automatic package publishing
- Automatic dependency installation
- Automatic modification of an existing application
- Framework-specific React component generation

These may be considered as future capabilities if there is a demonstrated need.

---

## 20. V1 Principles

The Export System follows these principles:

1. The TokenForge token system remains the source of truth.
2. Export formats are representations of that system.
3. V1 supports DTCG JSON, CSS, Tailwind CSS and JavaScript / TypeScript.
4. Users can export the complete system or select token categories.
5. General validation remains format-agnostic.
6. Every export format receives an export-readiness check.
7. Readiness is tied to the current token state and export configuration.
8. Changing the format, scope, selected categories or relevant token data invalidates the previous readiness result.
9. Token references should be preserved where the target supports them.
10. TokenForge must never silently produce a broken or misleading export.
11. Export should remain simple for V1 rather than exposing unnecessary technical configuration.

---

## 21. Relationship to Other Systems

The Export System depends on the rest of the TokenForge architecture:

    Archetypes
        ↓
    Token Model
        ↓
    Colour / Foundation Systems
        ↓
    User Editing
        ↓
    Validation
        ↓
    Export Readiness
        ↓
    Export

The Export System should consume the validated token model rather than defining its own token architecture.

Validation remains responsible for determining whether the system and selected export configuration are valid.

Export remains responsible for transforming the approved system into the selected output format.