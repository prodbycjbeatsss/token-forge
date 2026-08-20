# TokenForge — Validation

**Project:** TokenForge  
**Document:** Validation  
**Status:** Active  
**Version:** 1.0  
**Purpose:** Define how TokenForge evaluates generated and user-modified design-token systems, reports validation results, provides automatic remediation, supports manual correction, and determines export readiness.

---

## 1. Purpose

Validation is the evaluation layer of TokenForge.

It examines the token system produced by the Token Model, Archetype and generation systems and determines whether the resulting system is:

- Structurally valid
- Internally coherent
- Correctly referenced
- Consistent with the selected archetype where applicable
- Accessible where applicable
- Suitable for component consumption
- Ready for export

Validation does not replace the generation systems.

The Colour Engine generates and manipulates colour.

The Archetype establishes the initial blueprint.

The Token Model defines what TokenForge can represent.

Validation evaluates the resulting system.

The user remains the final authority over legitimate design decisions.

The core relationship is:

    Archetype
        ↓
    Token Model
        ↓
    Generation
        ↓
    Generated Token System
        ↓
    Validation
        ↓
    User remediation
        ↓
    Re-validation
        ↓
    Validated Token System
        ↓
    Export

---

## 2. Core Principle

The fundamental principle of TokenForge validation is:

> **Detect problems, explain them clearly, offer appropriate remediation, and never silently override the user's decisions.**

Validation should distinguish between:

- Something that is technically invalid
- Something that is potentially problematic
- Something that is valid
- Something that is intentionally different from the archetype

User customisation is not automatically an error.

The selected archetype provides the starting blueprint.

The user owns the resulting system.

Therefore:

    Archetype recommendation
            ↓
    User modification
            ↓
    Validation
            ↓
    Valid / Warning / Error

A user changing an archetype-generated colour, token name or semantic assignment should not automatically cause the system to be considered invalid merely because it differs from the original archetype.

---

## 3. Relationship to Other Systems

Validation sits between token generation and export.

    PRODUCT
       ↓
    ARCHETYPE
       ↓
    TOKEN MODEL
       ↓
    COLOUR ENGINE
       ↓
    VALIDATION
       ↓
    COMPONENTS
       ↓
    EXPORT

The responsibilities are deliberately separated.

| System | Responsibility |
|---|---|
| `PRODUCT.md` | Defines product purpose and scope |
| `SOURCES.md` | Defines source authority |
| `ARCHETYPES.md` | Defines design-system blueprints |
| `TOKEN-MODEL.md` | Defines token structure and relationships |
| `COLOUR-ENGINE.md` | Generates and evaluates colour values |
| `VALIDATION.md` | Evaluates the resulting system |
| `COMPONENTS.md` | Defines component consumption |
| `EXPORT-SYSTEM.md` | Defines output and transformation |
| `ARCHITECTURE.md` | Defines application architecture |
| `AI-SYSTEM.md` | Defines AI functionality |

Validation should not duplicate responsibilities belonging to these systems.

---

# 4. Validation Categories

Validation should evaluate the token system across several categories.

## 4.1 Structural Validation

Checks whether the token system conforms to the TokenForge token model.

Examples include:

- Missing required properties
- Invalid token structure
- Unsupported token types
- Invalid token values
- Invalid token names where applicable
- Invalid groups
- Malformed references
- Missing required archetype structures
- Invalid metadata

---

## 4.2 Reference Validation

Checks relationships between tokens.

Examples include:

- Reference target does not exist
- Reference target has an incompatible type
- Circular reference
- Broken alias
- Unresolvable dependency
- Invalid reference syntax

References are an important part of the TokenForge token model.

    Semantic Token
          ↓
    Primitive Token
          ↓
    Value

Validation must therefore understand the token dependency graph rather than treating every token as an isolated object.

---

## 4.3 Type Validation

Every token must have a valid and determinable type.

Validation must not infer a token's type merely by inspecting its value when the underlying token model requires an explicit type.

For standards-compatible DTCG output, the applicable DTCG rules must be respected.

For example:

    $type: color
    $value: valid colour

is structurally different from:

    $type: color
    $value: dimension

The latter is invalid because the value does not satisfy the declared type.

---

## 4.4 Semantic Validation

Checks whether semantic roles required by the generated system are present and correctly configured.

Examples include:

- Missing required semantic token
- Semantic token referencing an invalid primitive
- Semantic role referencing an inappropriate type
- Missing required state
- Broken semantic relationship
- Duplicate or conflicting semantic roles

The exact semantic roles are determined by the selected archetype.

Validation must therefore use the archetype configuration rather than assuming a universal semantic-token catalogue.

---

## 4.5 Colour Validation

Colour validation builds on `COLOUR-ENGINE.md`.

It evaluates:

- Colour validity
- Colour-space validity
- Gamut status
- Contrast relationships
- Semantic colour usage
- State colour relationships
- Relevant component colour relationships

Colour generation remains the responsibility of the Colour Engine.

Validation evaluates the resulting colour system.

---

## 4.6 Accessibility Validation

Accessibility validation checks applicable requirements derived from the project's target accessibility standard.

TokenForge V1 uses WCAG 2.2 as the primary accessibility reference where WCAG criteria are applicable.

For example, WCAG 2.2 Success Criterion 1.4.3 requires:

- 4.5:1 minimum contrast for normal text
- 3:1 minimum contrast for large text

WCAG 2.2 Success Criterion 1.4.11 requires a minimum 3:1 contrast ratio for applicable non-text user-interface components and graphical objects.

These requirements must be evaluated according to their actual applicability rather than applied indiscriminately to every colour relationship.

---

# 5. Validation Severity

Every validation result receives a severity.

TokenForge V1 uses three user-facing result states:

| Status | Meaning |
|---|---|
| **Pass** | The tested condition satisfies the applicable requirement |
| **Warning** | The condition may be undesirable, but does not necessarily make the system invalid |
| **Error** | The condition violates a required technical, structural or accessibility rule |

---

## 5.1 Pass

A pass means the tested condition satisfies its applicable requirement.

Examples:

- Token type is valid
- Reference resolves correctly
- Required semantic role exists
- Text contrast passes its applicable requirement
- Colour is inside the target gamut
- No circular dependency exists

Passes should be visible to the user because the validation screen is intended to provide a complete overview of the system.

---

## 5.2 Warning

A warning identifies something that may deserve attention but is not necessarily invalid.

Examples may include:

- Unused token
- Token name differs from an archetype recommendation
- A generated value is technically valid but unusual
- A user override diverges significantly from the archetype recommendation
- A token may be redundant
- A semantic role has an unusual relationship
- A project contains optional functionality that has not been configured

Warnings must not be treated as automatic proof that the user's design is wrong.

---

## 5.3 Error

An error represents a condition that violates a required rule.

Examples include:

- Invalid token value
- Unresolved required reference
- Circular token reference
- Invalid token type
- Required semantic role missing
- Required component dependency missing
- Applicable mandatory accessibility requirement failed
- Token system cannot be represented by the selected export target

Errors must be clearly distinguished from warnings.

---

# 6. Validation Result Model

Each validation result should contain enough information for the user to understand and resolve the issue.

A validation result should conceptually contain:

| Property | Purpose |
|---|---|
| `id` | Stable identifier for the validation rule/result |
| `status` | Pass, Warning or Error |
| `category` | Validation category |
| `severity` | Severity associated with the result |
| `title` | Short human-readable description |
| `description` | Explanation of the issue |
| `target` | Token, relationship or component affected |
| `currentValue` | Current relevant value |
| `requirement` | Requirement being evaluated |
| `recommendation` | Suggested resolution |
| `canAutoFix` | Whether an automatic fix is available |
| `fix` | Proposed remediation where available |
| `source` | Standard or rule supporting the result |

The exact internal representation may evolve with implementation.

---

# 7. Validation Result Identity

Validation results should have stable identities.

A result should not rely solely on its position in the validation list.

For example:

    colour.contrast.text-on-surface

should remain identifiable even if other validation results are added or removed.

Stable identities allow TokenForge to:

- Track results
- Re-run individual validations
- Apply targeted fixes
- Display validation history
- Revalidate after edits
- Associate results with tokens
- Support future project auditing

---

# 8. Validation Pipeline

Validation should run as a deterministic pipeline.

    Token System
          ↓
    Structural validation
          ↓
    Reference validation
          ↓
    Type validation
          ↓
    Semantic validation
          ↓
    Colour validation
          ↓
    Accessibility validation
          ↓
    Component validation
          ↓
    Export-readiness validation
          ↓
    Validation results

The exact execution order may be optimised in implementation.

However, dependent validations should not run against unresolved or invalid prerequisites as though they were valid.

For example:

    Broken reference
          ↓
    Cannot reliably evaluate dependent semantic value
          ↓
    Reference error

The system should avoid generating a misleading cascade of secondary errors where the root cause is already known.

---

# 9. Root-Cause Awareness

Validation should distinguish primary failures from downstream consequences.

For example:

    color.action.primary
          ↓
    references missing token
          ↓
    Button colour cannot resolve
          ↓
    Contrast cannot be evaluated

The primary issue is:

> `color.action.primary` references a missing token.

The button contrast result should not necessarily be presented as an independent error claiming that the button's contrast is definitively invalid.

Instead it may be:

> Unable to evaluate because the referenced colour is unresolved.

This prevents validation from overwhelming the user with misleading duplicate errors.

---

# 10. Dependency Graph

TokenForge should maintain a dependency graph of token relationships.

Example:

    color.action.primary
             ↓
    color.brand.primary.600
             ↓
          #6750A4

The dependency graph supports:

- Reference validation
- Circular-reference detection
- Change propagation
- Impact analysis
- Revalidation
- Automatic remediation
- Export

Circular dependencies must be detected before attempting recursive resolution.

Example:

    A → B
    B → C
    C → A

This is an error.

---

# 11. Archetype Validation

The archetype defines the initial blueprint.

Validation checks whether the resulting system satisfies the relevant structural expectations of that archetype.

However, user customisation must remain legitimate.

Therefore validation should distinguish between:

### Required archetype structure

A missing required structure may be an error.

### Recommended archetype configuration

A deviation may be a warning or may not produce a validation result at all, depending on the archetype rule.

### User customisation

A deliberate user change should not automatically be considered invalid.

The archetype is a starting point, not a compliance regime.

---

# 12. Archetype Drift

TokenForge may identify significant divergence from the original archetype as a warning where this is useful.

For example:

    Material Inspired
          ↓
    User changes most semantic structures
          ↓
    Significant archetype divergence

The system should not tell the user:

> "Your design system is wrong."

Instead it may explain:

> "This system has diverged significantly from the Material Inspired starting structure."

This information is advisory.

It should never silently revert the user's changes.

---

# 13. Colour Validation

Colour validation operates using the Colour Engine.

The Colour Engine is responsible for:

- Colour conversion
- Palette generation
- Perceptual manipulation
- Gamut handling
- Candidate generation

Validation is responsible for evaluating the resulting system.

The relationship is:

    Colour Engine
          ↓
    Generated colour
          ↓
    Validation
          ↓
    Pass / Warning / Error

---

## 13.1 Gamut Validation

Generated colours must be checked against the intended output colour space.

An out-of-gamut value should not be treated as valid for an output that cannot represent it without conversion or gamut mapping.

Where the Colour Engine provides a gamut-mapped value, validation should evaluate the resulting value.

---

## 13.2 Contrast Validation

Contrast must be evaluated using the applicable WCAG method rather than using OKLCH lightness as a substitute for contrast.

Validation should evaluate colour pairs according to their intended semantic or component context.

Examples:

    text.primary
          +
    surface.default
          ↓
    Contrast validation

    icon.on-action-primary
          +
    action.primary
          ↓
    Non-text contrast validation

---

# 14. Contextual Validation

TokenForge should prefer contextual validation over isolated token validation where the requirement depends on usage.

A primitive colour does not inherently have a universal accessibility status.

For example:

    #777777

cannot simply be labelled:

> "Accessible"

or:

> "Inaccessible"

without knowing the colour it is being compared against and the relevant usage.

Therefore:

    Primitive
        ↓
    Semantic role
        ↓
    Component context
        ↓
    Validation

This approach avoids misleading users.

---

# 15. Component Validation

Components consume semantic tokens.

Validation should therefore be capable of evaluating representative component relationships.

Examples include:

- Button states
- Input states
- Surface/content relationships
- Focus indicators
- Borders
- Icons
- Text
- Interactive states
- Disabled states

The component validation layer should consume the token system rather than create an independent colour or token system.

The intended relationship remains:

    Primitive
        ↓
    Semantic
        ↓
    Component
        ↓
    Validation

---

# 16. Component Validation Scope

V1 should not attempt to validate every possible component implementation in every technology.

Instead, V1 should validate the abstract relationships that TokenForge controls.

For example:

    Button
      ├── background
      ├── label
      ├── icon
      ├── hover
      ├── pressed
      ├── disabled
      └── focus

Validation can evaluate whether the relevant token relationships exist and satisfy applicable requirements.

Platform-specific implementation validation belongs to the exported implementation and consuming application.

---

# 17. Export Readiness

Validation should determine whether a token system is ready for export.

A system may be:

### Export Ready

No blocking errors exist.

### Export Ready With Warnings

Warnings exist, but no blocking errors exist.

### Not Export Ready

One or more blocking errors exist.

The user should be able to understand why export is blocked.

Example:

    Export unavailable

    3 errors must be resolved before export.

    [View Errors]

Warnings should not automatically block export unless the relevant export target explicitly requires the condition.

---

# 18. Automatic Remediation

TokenForge should provide automatic remediation where a safe and deterministic fix exists.

The user should be presented with the ability to:

- Fix all errors
- Fix all warnings and errors
- Fix individual results
- Edit individual results manually

The interface should clearly communicate what will be changed before or during an automatic fix where the change is consequential.

---

# 19. Fix All Errors

The user can select:

> **Fix all errors**

TokenForge identifies all currently fixable error results and applies their proposed remediations.

The system must then re-run validation.

    Current system
          ↓
    Fix all errors
          ↓
    Apply fixes
          ↓
    Revalidate
          ↓
    Updated results

TokenForge must not assume that applying a fix guarantees that the entire system is now valid.

---

# 20. Fix Warnings and Errors

The user can select:

> **Fix warnings and errors**

This applies automatic fixes for all results that are both:

- Warning
- Error

and have a safe automatic remediation available.

Warnings that represent intentional user decisions should not be automatically modified unless the user has explicitly chosen the bulk-fix action.

The action must therefore be treated as an explicit user instruction to apply available remediations.

---

# 21. Fixability

Not every validation result should be automatically fixable.

A result should expose whether it has a safe deterministic fix.

Examples of potentially auto-fixable issues:

- Broken generated colour candidate where the Colour Engine can generate a valid replacement
- Invalid generated reference where the intended target is unambiguous
- Missing generated token that has a deterministic archetype definition
- Contrast failure where a constrained repair can produce a valid candidate
- Formatting or normalisation issue
- Unused generated token where removal is explicitly safe

Examples that may require manual intervention:

- Ambiguous reference target
- User-defined token with no obvious replacement
- Intentional semantic restructuring
- Ambiguous naming conflict
- Design decision requiring user judgement
- A warning caused by deliberate user customisation

---

# 22. Automatic Fix Authority

Automatic fixes must be generated by the system responsible for the underlying problem.

Examples:

| Problem | Fix authority |
|---|---|
| Colour generation issue | Colour Engine |
| Broken token structure | Token Model / validation remediation |
| Archetype-required token | Archetype |
| Reference resolution | Token Model / resolver |
| Export incompatibility | Export system |
| Component relationship | Component system |

Validation coordinates remediation but should not independently invent replacement values that belong to another system.

---

# 23. Fix Safety

An automatic fix must be:

- Deterministic
- Explainable
- Reversible where practical
- Validated after application
- Limited to the affected system
- Consistent with the relevant source of truth

TokenForge must never silently modify unrelated tokens merely because they could theoretically be improved.

---

# 24. Re-validation After Fixes

Every automatic fix must trigger validation again.

This is mandatory.

Example:

    Error
      ↓
    Automatic fix
      ↓
    Recalculate dependencies
      ↓
    Re-run affected validations
      ↓
    Re-run dependent validations
      ↓
    Updated result set

A fix may:

- Resolve an issue
- Create a new issue
- Change another validation result
- Remove a downstream issue

The UI should update accordingly.

---

# 25. Manual Remediation

Users must be able to select an individual validation result.

Selecting a result should open a detailed validation view.

The view should explain:

- What was tested
- What was found
- Why it matters
- Which token or relationship is affected
- The current value
- The relevant requirement
- The recommended change
- Whether an automatic fix exists

The user should then be able to edit the relevant value directly where the system supports manual editing.

---

# 26. Manual Editing

Manual editing should use the appropriate editor for the token type.

Examples:

- Colour → Colour editor
- Dimension → Dimension editor
- Number → Numeric editor
- Typography → Typography editor
- Reference → Token/reference selector

The editor should modify the actual token system rather than creating a temporary validation-only value.

After the edit:

    User edit
        ↓
    Update token system
        ↓
    Recalculate dependencies
        ↓
    Revalidate
        ↓
    Updated validation result

---

# 27. Validation Screen

The validation experience should provide a dedicated screen containing the complete validation result set.

The screen should provide:

- Overall validation status
- Pass count
- Warning count
- Error count
- Filtering
- Individual results
- Bulk remediation
- Access to detailed remediation

Conceptually:

    Validation

    ✓ 42 Passed
    ⚠  6 Warnings
    ✕  3 Errors

    [All] [Pass] [Warnings] [Errors]

    [Fix Errors]
    [Fix Warnings + Errors]

    ─────────────────────

    ✕ Insufficient contrast
      text.primary / surface.default

    ⚠ Unused token
      colour.brand.950

    ✓ Primary action contrast
      Passed

The exact visual design belongs to the application design system.

---

# 28. Filtering

Users should be able to filter validation results by:

- All
- Pass
- Warning
- Error

Filtering should not remove results from the underlying validation state.

It only changes what is displayed.

Example:

    All
      ↓
    51 results

    Errors
      ↓
    3 results

    Warnings
      ↓
    6 results

    Pass
      ↓
    42 results

Counts should update after remediation and re-validation.

---

# 29. Sorting

The validation screen may support ordering results by:

- Severity
- Category
- Token
- Component
- Source requirement
- Fixability

V1 should prioritise a simple default ordering:

1. Errors
2. Warnings
3. Passes

Within each group, results should be ordered consistently.

---

# 30. Result Detail

Opening a validation result should expose a detailed explanation.

A result should conceptually contain:

    Status
    Category

    What happened

    Why it matters

    Affected token/component

    Current value

    Requirement

    Recommended fix

    Automatic fix availability

    [Fix]
    [Edit]

The explanation should be understandable to users who are not experts in design-token architecture.

Technical details may be progressively disclosed where useful.

---

# 31. Validation Sources

Where a validation result is based on an external standard, the result should identify the relevant source.

Examples:

    WCAG 2.2
    Success Criterion 1.4.3
    Contrast (Minimum)

or:

    DTCG 2025.10
    Token type requirement

This allows users to understand why TokenForge considers something invalid.

The complete source registry is maintained in `SOURCES.md`.

---

# 32. Standards Authority

TokenForge should follow the source hierarchy established in `SOURCES.md`.

The order of authority is:

    Applicable standard
          ↓
    Official technical documentation
          ↓
    Established implementation/reference
          ↓
    Research
          ↓
    TokenForge product decision

TokenForge must clearly distinguish between:

- A standards requirement
- An implementation requirement
- A TokenForge recommendation
- A user preference

---

# 33. DTCG Validation

The Design Tokens Community Group specification should be used as an interoperability reference when validating standards-compatible token structures.

The DTCG 2025.10 specification defines token names, values, types, groups, aliases/references and type-specific value requirements.

Validation should therefore be capable of detecting issues such as:

- Invalid token structure
- Invalid token type
- Invalid type/value combination
- Invalid reference
- Unresolved reference
- Circular reference
- Invalid naming for the target format

TokenForge's internal model may contain capabilities that are not directly represented by an external interchange format.

Therefore:

    TokenForge internal validation
            ↓
    Export-target validation
            ↓
    DTCG-compatible output where applicable

DTCG compatibility should not unnecessarily constrain the internal TokenForge model.

---

# 34. WCAG Validation

WCAG 2.2 is the primary accessibility reference for applicable colour and interface requirements.

TokenForge should use the applicable success criteria rather than treating WCAG as a generic colour checklist.

Relevant V1 colour-related criteria include:

- SC 1.4.3 Contrast (Minimum)
- SC 1.4.11 Non-text Contrast

Where additional WCAG criteria become relevant to component or interaction validation, they should be incorporated through the appropriate validation category.

WCAG success criteria are testable requirements, but not every criterion can be evaluated solely from a token system.

TokenForge should therefore only claim validation for requirements it can actually evaluate from the available design-system information.

---

# 35. Colour-Science Validation

Colour validation should follow the principles established in `COLOUR-ENGINE.md`.

OKLCH may be used for perceptual colour manipulation and candidate generation.

However:

> OKLCH lightness is not a substitute for WCAG relative luminance.

Contrast calculations must use the applicable WCAG method.

Gamut validation must use the intended output colour space.

CSS Color 4 provides the technical basis for modern colour spaces and gamut mapping.

---

# 36. Gamut Validation

An out-of-gamut colour should be identified before it is treated as a valid output value for a constrained colour space.

The system should distinguish between:

- In-gamut colour
- Out-of-gamut colour with available mapping
- Out-of-gamut colour without acceptable mapping
- Successfully gamut-mapped colour

Where the Colour Engine produces a gamut-mapped result, validation should evaluate the mapped value rather than the original out-of-gamut candidate.

---

# 37. Validation and User Overrides

A user override is not automatically a validation error.

For example:

    Archetype recommendation
        ↓
    User changes colour
        ↓
    Validation
        ↓
    Contrast passes
        ↓
    PASS

If the user changes the colour and it fails an applicable requirement:

    User override
        ↓
    Contrast fails
        ↓
    ERROR

The error is caused by the resulting condition, not by the fact that the user deviated from the archetype.

This distinction is fundamental to TokenForge's user-ownership model.

---

# 38. Validation and AI

AI must not be the authoritative validation engine.

AI may:

- Explain a validation result
- Suggest possible design alternatives
- Help the user understand a technical issue
- Translate a natural-language design request into a possible change

Deterministic validation must remain authoritative for:

- Token validity
- Reference resolution
- Type checking
- Colour calculations
- Contrast calculations
- Gamut evaluation
- Export compatibility

The relationship is:

    AI suggestion
          ↓
    Deterministic validation
          ↓
    Confirmed result

AI must not be allowed to declare a system valid when deterministic validation says otherwise.

---

# 39. Validation Consistency

Given the same:

- Token system
- Archetype version
- Token Model version
- Colour Engine version
- Validation rules
- Target output configuration

TokenForge should produce deterministic validation results.

This supports:

- Reproducibility
- Testing
- Debugging
- Versioning
- Reliable exports

Validation should not depend on nondeterministic AI output.

---

# 40. Validation Rule Versioning

Validation rules should be versioned.

A future version may change:

- Accessibility requirements
- Token standards
- Export constraints
- Archetype requirements
- Colour calculations
- Component rules

Existing projects should not silently change because a validation rule changed.

Where appropriate, projects should record the relevant validation-rule version.

This allows TokenForge to distinguish:

    Project validated under Rule Set 1.0

from:

    Project validated under Rule Set 2.0

Future migration behaviour may allow users to deliberately revalidate existing projects against newer rule sets.

---

# 41. Validation Result Lifecycle

Validation results follow a lifecycle.

    Generated
       ↓
    Evaluated
       ↓
    Displayed
       ↓
    User selects
       ↓
    Fix / Edit / Ignore where permitted
       ↓
    Token system changes
       ↓
    Re-validation
       ↓
    Result resolved / changed / remains

A resolved result should disappear from the active warning/error list after re-validation.

The underlying validation history may be retained in future versions, but V1 does not require a full historical audit system.

---

# 42. Ignoring Results

V1 should be cautious about allowing users to permanently dismiss validation results.

A user should be able to understand and address a warning or error rather than simply hiding it.

If future versions introduce "ignore" or "acknowledge" functionality, ignored results should remain distinguishable from passes.

An ignored error must never become a technical pass.

---

# 43. Bulk Fix Behaviour

Bulk fixing must operate only on the current validation result set.

For:

    Fix Errors

TokenForge should:

1. Identify all current error results.
2. Determine which have automatic fixes.
3. Apply applicable fixes.
4. Recalculate dependencies.
5. Re-run validation.
6. Present the new result set.

For:

    Fix Warnings + Errors

TokenForge should perform the same process for both warnings and errors with available safe remediations.

If a result cannot be automatically fixed, it remains for manual action.

---

# 44. Partial Fixes

Bulk remediation may produce partial success.

For example:

    8 issues detected
        ↓
    5 automatically fixed
        ↓
    3 require manual intervention
        ↓
    Re-validation
        ↓
    Updated result screen

TokenForge should clearly communicate this.

It must not claim:

> "Everything fixed"

when unresolved issues remain.

---

# 45. Fix Conflicts

Two validation results may sometimes recommend changes to the same token.

For example:

    Rule A → change token X
    Rule B → change token X

TokenForge must detect conflicting automatic fixes rather than applying them blindly.

The system should either:

- Resolve the conflict using deterministic priority rules
- Apply the higher-authority fix
- Combine compatible fixes
- Require manual intervention

The chosen behaviour must be deterministic and documented.

---

# 46. Validation Priority

When multiple rules conflict, TokenForge should follow the source hierarchy.

    Standards
        ↓
    Official technical requirements
        ↓
    Archetype requirements
        ↓
    TokenForge recommendations
        ↓
    User preferences

A user preference should not override a technical validity requirement while the system is claiming that requirement has been satisfied.

However, the user may still choose to retain a failing value.

In that situation the system should report the failure rather than silently changing the user's decision.

---

# 47. Errors Must Be Actionable

Every error should provide a path towards resolution where possible.

A poor validation result:

> Error: invalid colour.

A better validation result:

> **Invalid colour value**  
> `color.action.primary` contains a colour value that cannot be resolved by the selected colour model.  
>  
> **Current value:** invalid  
> **Recommended action:** Replace the value with a valid colour.  
>  
> `[Edit]`

Validation should prioritise actionable information over technical jargon.

---

# 48. Warnings Must Be Contextual

Warnings should explain why the condition may matter.

For example:

> **Unused token**  
> `color.brand.950` is not currently referenced by any semantic or component token.

rather than:

> Warning: unused.

Likewise:

> **Archetype divergence**  
> This semantic role differs from the recommended Material Inspired configuration. This does not make the token system invalid.

rather than:

> Warning: archetype mismatch.

The system should help the user make an informed decision.

---

# 49. V1 Validation Scope

V1 should support:

### Token structure

- Token validity
- Token types
- Token values
- Required properties
- Token naming rules where applicable

### References

- Reference syntax
- Reference resolution
- Missing targets
- Type compatibility
- Circular references

### Archetypes

- Required archetype structures
- Required semantic roles
- Required states where applicable
- Recommended configuration checks

### Colour

- Colour validity
- Gamut status
- Contrast
- Relevant semantic colour relationships
- Relevant component colour relationships

### Accessibility

- Applicable WCAG 2.2 contrast requirements
- Applicable non-text contrast requirements

### Components

- Required semantic dependencies
- Supported component states
- Relevant token relationships

### Export

- Export-target compatibility
- Blocking errors
- Warnings relevant to export

### User remediation

- Individual fixes
- Manual editing
- Fix all errors
- Fix all warnings and errors
- Automatic re-validation

---

# 50. V1 Out of Scope

The following are not required for the first validation implementation:

- Full accessibility auditing of arbitrary application code
- Automated usability testing
- Automated visual-regression testing
- Complete WCAG conformance auditing of a finished application
- AI-only validation
- Permanent warning suppression
- Complex historical validation dashboards
- Full cross-platform runtime testing
- Automated migration between archetypes
- Automated migration between every validation-rule version

These may be considered later.

---

# 51. Validation Architecture

The conceptual architecture is:

    ┌─────────────────────────────┐
    │      Token System           │
    └──────────────┬──────────────┘
                   ↓
    ┌─────────────────────────────┐
    │       Validation Engine      │
    ├─────────────────────────────┤
    │ Structural Rules             │
    │ Reference Rules              │
    │ Type Rules                   │
    │ Semantic Rules               │
    │ Colour Rules                 │
    │ Accessibility Rules          │
    │ Component Rules              │
    │ Export Rules                 │
    └──────────────┬──────────────┘
                   ↓
    ┌─────────────────────────────┐
    │    Validation Results        │
    │                             │
    │    Pass / Warning / Error   │
    └──────────────┬──────────────┘
                   ↓
    ┌─────────────────────────────┐
    │      Validation Screen       │
    ├─────────────────────────────┤
    │ All | Pass | Warning | Error│
    │                             │
    │ Fix Errors                  │
    │ Fix Warnings + Errors       │
    └──────────────┬──────────────┘
                   ↓
          User selects result
                   ↓
    ┌─────────────────────────────┐
    │      Remediation Layer       │
    ├─────────────────────────────┤
    │ Automatic Fix                │
    │ Manual Edit                  │
    └──────────────┬──────────────┘
                   ↓
             Token System
                   ↓
              Re-validation

---

# 52. Source Authority

The validation system follows the source hierarchy defined in `SOURCES.md`.

## Tier 1 — Authoritative

Primary standards include:

- W3C WCAG 2.2
- DTCG Design Tokens Format 2025.10
- W3C CSS Color Module Level 4

## Tier 2 — Official Platform Documentation

Used where validation concerns platform-specific implementation behaviour.

## Tier 3 — Industry References

Used to understand established validation and design-system practices.

Examples include:

- Material Design
- Figma
- Style Dictionary
- Color.js

These are references rather than normative authorities.

## Tier 4 — Research

Used to understand underlying scientific and technical principles.

The source registry is maintained in `SOURCES.md`.

---

# 53. Primary References

## WCAG 2.2

Category: Accessibility  
Tier: 1 — Authoritative

Reference:

https://www.w3.org/TR/WCAG22/

Relevant areas include:

- SC 1.4.3 Contrast (Minimum)
- SC 1.4.11 Non-text Contrast
- Other criteria where TokenForge has sufficient information to evaluate them

---

## Design Tokens Community Group Specification

Category: Design Tokens  
Tier: 1 — Authoritative

Reference:

https://www.designtokens.org/tr/2025.10/

Relevant areas include:

- Token structure
- Token names
- Token types
- Token values
- References
- Reference resolution
- Circular references
- Type validation

---

## W3C CSS Color Module Level 4

Category: Colour Science / CSS  
Tier: 1 — Authoritative

Reference:

https://www.w3.org/TR/css-color-4/

Relevant areas include:

- OKLab
- OKLCH
- Colour conversion
- Colour spaces
- Gamut
- Gamut mapping
- Colour difference

---

# 54. Validation and Export

Validation and export remain separate systems.

Validation determines whether the current token system satisfies the requirements necessary for export.

Export then transforms that system into the requested output format.

    Token System
         ↓
    Validation
         ↓
    Export readiness
         ↓
    Export System
         ↓
    Output

The export system must not silently repair validation failures.

If a repair is necessary, the user should be returned to the validation/remediation workflow.

---

# 55. Source of Truth

The final user-approved token system is the project's source of truth.

The validation system does not become a competing source of truth.

The relationship is:

    Archetype
        ↓
    Initial generation
        ↓
    User refinement
        ↓
    Token System
        ↓
    Validation
        ↓
    User remediation
        ↓
    Approved Token System
        ↓
    Export

Validation describes the state of the token system.

It does not own the token system.

---

# 56. Summary

TokenForge validation exists to make the generated design system understandable, testable and actionable.

The system should:

- Detect structural problems
- Detect broken references
- Validate token types
- Validate semantic relationships
- Validate relevant colour relationships
- Evaluate applicable accessibility requirements
- Evaluate component dependencies
- Determine export readiness
- Clearly distinguish passes, warnings and errors
- Allow users to filter results
- Allow users to inspect individual results
- Provide automatic remediation where safe
- Allow users to manually correct results
- Support fixing all errors
- Support fixing all warnings and errors
- Re-run validation after every change
- Never silently override user decisions

The central workflow is:

    Generate
        ↓
    Validate
        ↓
    Understand
        ↓
    Fix automatically or manually
        ↓
    Re-validate
        ↓
    Approve
        ↓
    Export

The core principle is:

> **Validation should tell the user what is wrong, why it matters, how it can be fixed, and let the user decide what happens next.**