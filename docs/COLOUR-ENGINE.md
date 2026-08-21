# TokenForge — Colour Engine

**Project:** TokenForge  
**Document:** Colour Engine  
**Status:** Active  
**Version:** 1.1  
**Last Updated:** 21 August 2026  
**Purpose:** Define how TokenForge accepts brand colours, generates colour palettes and semantic colour roles, handles colour-space and gamut constraints, calculates accessibility metrics, and incorporates user refinement.

---

## 1. Purpose

The Colour Engine is the deterministic colour-generation and colour-calculation layer of TokenForge.

It converts user-provided colour foundations into a coherent set of primitive and semantic colour tokens while preserving the design intent established by the selected archetype.

The Colour Engine is responsible for colour mathematics and colour-system generation. It does not independently decide the visual identity of a project and it does not own TokenForge's validation rules.

The selected archetype supplies the colour-generation strategy and semantic mapping, while the Colour Engine supplies the common technical capabilities required to execute that strategy.

The Colour Engine may calculate metrics required by validation, such as contrast ratios, and may generate candidate corrections. The Validation system remains responsible for determining whether those results satisfy TokenForge's applicable rules.

    User colour input
          ↓
    Normalisation
          ↓
    Colour representation
          ↓
    Colour Engine
          ↓
    Archetype colour strategy
          ↓
    Primitive palette
          ↓
    Semantic roles
          ↓
    Colour calculations
          ↓
    System Validation
          ↓
    User refinement
          ↓
    Final token system

---

## 2. Core Principles

The Colour Engine follows these principles:

1. **Perceptual operations should use perceptually useful colour spaces.**
2. **Accessibility metrics must be calculated using the applicable accessibility definitions rather than inferred from a colour-space coordinate.**
3. **Gamut constraints must be handled explicitly.**
4. **Archetypes determine design strategy; the Colour Engine provides common technical capabilities.**
5. **Generated colours are recommendations that users can inspect and override.**
6. **Core colour generation must be deterministic and reproducible.**
7. **AI must not be the authority for colour validity, contrast or colour-space mathematics.**
8. **Final colour decisions must be validated in their intended UI context rather than only as isolated swatches.**
9. **The Colour Engine calculates and generates colour information; the Validation system determines whether the resulting system satisfies TokenForge rules.**

---

## 3. Relationship to the Token Model

The Colour Engine operates within the token architecture defined by `TOKEN-MODEL.md`.

The Token Model defines the common structure of TokenForge's token system. It does not prescribe the exact palette, token names, scales or semantic roles for every project.

The selected archetype supplies those project-specific decisions.

    Token Model
        ↓
    Common token capabilities
        ↓
    Archetype
        ↓
    Colour strategy
        ↓
    Colour Engine
        ↓
    Generated colour tokens

The Colour Engine therefore must not hard-code a single universal naming system or palette structure that overrides the selected archetype.

---

## 4. Relationship to Archetypes

Archetypes are the blueprints used to generate a project's design-token system.

For colour, an archetype may determine:

- Which colour families are generated
- How many steps are used
- Which semantic roles are required
- How brand colours are prioritised
- How neutral colours are treated
- Which colour relationships are preferred
- Which states are required
- How generated colours are mapped to semantic roles

The Colour Engine supplies the mathematical and technical operations required to implement those decisions.

For example:

    Material Inspired
            ↓
    Material-informed colour strategy
            ↓
    Colour Engine
            ↓
    Generated palette

The same Colour Engine can therefore support a different strategy for Minimal or Editorial without duplicating the underlying colour mathematics.

---

## 5. Input Colours

TokenForge should accept user-defined brand colours as colour inputs.

The V1 system should support common CSS-compatible colour representations, including hexadecimal RGB values and other representations supported by the implementation.

Input processing should:

1. Parse the supplied value.
2. Validate that it represents a valid colour.
3. Preserve the specified colour space when explicitly supplied.
4. Convert the colour into the internal representation required for subsequent operations.
5. Record the intended output colour space where relevant.

A hexadecimal value such as:

    #6750A4

must be treated as an encoded sRGB colour rather than as an abstract set of three arbitrary channels.

---

## 6. Colour-Space Strategy

TokenForge must remain colour-space aware.

No single colour space is appropriate for every operation.

The V1 strategy is:

- **OKLCH:** primary working space for perceptual manipulation and palette operations.
- **OKLab:** supporting perceptual space for interpolation and colour-difference/gamut operations where appropriate.
- **sRGB:** default V1 output target for broad interoperability.
- **Display P3:** supported by the architecture as a wider-gamut target, but not required as the default V1 output.
- **Relative luminance / WCAG calculations:** used for accessibility measurement rather than substituted with OKLCH lightness.

W3C CSS Color 4 defines modern colour spaces, conversions, interpolation and gamut handling. OKLab/OKLCH are therefore part of the standards-based colour foundation rather than a proprietary TokenForge invention.

---

## 7. Why OKLCH

OKLCH is the primary working space for controlled perceptual colour manipulation because it represents colour using approximately perceptual dimensions of:

- Lightness (`L`)
- Chroma (`C`)
- Hue (`H`)

This is useful when generating UI colour scales because changes can be expressed in terms that more closely correspond to perceived lightness and chroma than direct RGB-channel manipulation.

However, OKLCH must not be treated as a guarantee of perceptual uniformity or accessibility.

In particular:

- Equal changes in `L` do not guarantee equal perceived differences in every context.
- A colour can be outside the target RGB gamut.
- OKLCH lightness is not the same thing as WCAG relative luminance.
- Contrast must therefore be calculated independently.

---

## 8. Palette Generation

The Colour Engine should generate colour scales using constraints rather than simply adding or subtracting fixed RGB values.

A palette-generation strategy may control:

- Lightness progression
- Chroma progression
- Hue stability or controlled hue shifts
- Number of scale steps
- End-point behaviour
- Target gamut
- Required semantic relationships
- Contrast targets

A simple lightness ladder must not be assumed to produce a high-quality UI palette.

For example, generating a scale by changing only `L` while keeping `C` and `H` constant may produce colours that become impossible to represent in the target gamut or behave poorly at the extremes.

The generation algorithm should therefore calculate and inspect the resulting candidates rather than assuming the mathematical input is sufficient.

---

## 9. Primitive Colour Scales

Primitive colour scales represent generated colour values before they are assigned to semantic roles.

The exact scale structure is determined by the selected archetype.

For example, an archetype may choose a numbered scale such as:

    primary.50
    primary.100
    primary.200
    ...
    primary.900
    primary.950

Another archetype may use a different scale structure.

The Colour Engine must support archetype-defined scales rather than imposing one universal scale on every project.

Primitive tokens should represent reusable colour values rather than usage-specific meaning.

---

## 10. Neutral Generation

Neutral colours require their own generation strategy.

TokenForge should support:

- Neutral scales
- Warm neutrals
- Cool neutrals
- Brand-influenced neutrals

The selected archetype determines which approach is preferred.

Neutral generation should not simply reduce the chroma of a brand colour to zero at every step.

The engine should instead generate a controlled lightness progression and apply any intended hue/chroma influence within the target gamut.

Neutral colours can subsequently be mapped to surface, text, border and other semantic roles.

---

## 11. Semantic Colour Mapping

Palette generation and semantic mapping are separate operations.

### Palette generation

Determines:

> **What colours exist?**

### Semantic mapping

Determines:

> **What are those colours used for?**

The archetype is responsible for the mapping strategy.

For example:

    Brand colour
          ↓
    Generated primary scale
          ↓
    Archetype semantic mapping
          ↓
    color.action.primary
    color.action.primary.hover
    color.action.primary.pressed
    ...

The semantic system must be generated from the archetype's requirements and the Token Model rather than from arbitrary colour names.

---

## 12. State Colours

Where the selected archetype requires state colours, the Colour Engine may generate or calculate colour candidates for roles such as:

- Success
- Warning
- Error
- Information

State colours must be treated as functional colours rather than merely decorative alternatives to the brand palette.

Their semantic roles, states and contrast relationships must subsequently be evaluated by the Validation system in context.

The Colour Engine must not assume that a generic green, yellow or red is automatically appropriate for a given role.

---

## 13. Colour Harmony

Traditional colour-harmony concepts may be used as creative guidance where an archetype requires them.

Examples include:

- Analogous relationships
- Complementary relationships
- Triadic relationships
- Split-complementary relationships

These relationships should **not** form the fundamental mathematical basis of TokenForge's UI colour generation.

Instead:

    Colour science
          ↓
    Technical foundation

    Colour harmony
          ↓
    Creative/archetype guidance

    WCAG
          ↓
    Accessibility measurement

This separation prevents subjective colour theory from being mistaken for an accessibility or perceptual guarantee.

---

## 14. Gamut Handling

A colour represented in OKLCH or another wide-gamut space may not be representable in the target output colour space.

TokenForge must therefore test generated colours against the intended output gamut.

The V1 process is:

    Generated colour
          ↓
    Target gamut check
          ↓
    In gamut?
      ↙       ↘
    YES       NO
     ↓         ↓
    Keep      Gamut-map
                 ↓
           Re-evaluate candidate

TokenForge should not rely on crude RGB channel clipping as its primary gamut-correction method.

To ensure technical feasibility without requiring bespoke implementations of complex perceptual gamut-mapping algorithms from scratch, TokenForge V1 explicitly permits and recommends the use of standard-compliant, vetted colour-science libraries (such as `Color.js`) to execute gamut checks and mapping aligned with W3C CSS Color 4 specifications.

---

## 15. Output Colour Spaces

V1 should use **sRGB as the default output target** because of its broad compatibility.

The architecture should remain capable of supporting wider-gamut output such as Display P3.

The internal engine must not unnecessarily discard wider-gamut information merely because the default output is sRGB.

Output conversion should occur as a deliberate final step rather than treating sRGB as the only colour space throughout the entire pipeline.

---

## 16. Contrast and Accessibility

Accessibility validation must be performed independently from perceptual palette generation.

The Colour Engine should calculate WCAG contrast using relative luminance and the applicable contrast-ratio definition.

The resulting contrast metrics are inputs to the Validation system. The Colour Engine does not determine whether a token relationship passes or fails a TokenForge validation rule.

For normal text, WCAG 2.2 SC 1.4.3 defines a minimum contrast ratio of 4.5:1, with 3:1 applicable to large text. SC 1.4.11 establishes a 3:1 minimum for relevant non-text UI components and graphical objects.

The engine must not use OKLCH `L` as a replacement for WCAG relative luminance.

Conceptually:

    Generated colour
          ↓
    Convert to required RGB representation
          ↓
    Relative luminance
          ↓
    Contrast ratio
          ↓
    Validation
          ↓
    Applicable TokenForge rule
          ↓
    Pass / Fail

---

## 17. Contextual Validation

A colour should not be considered accessible merely because it passes an isolated test.

The important relationship is between a colour and its intended context.

Examples include:

    text.primary
          +
    surface.default
          ↓
    contrast calculation
          ↓
    Validation

and:

    icon.onActionPrimary
          +
    action.primary
          ↓
    contrast calculation
          ↓
    Validation

This means accessibility evaluation belongs partly at the semantic and component levels rather than exclusively at the primitive level.

The Colour Engine supplies the required colour calculations.

The full validation process, including the rules used to interpret those calculations, is defined by `VALIDATION.md`.

---

## 18. Contrast Repair

When a generated semantic colour does not meet an applicable contrast target, TokenForge may attempt a constrained correction where an appropriate correction strategy exists.

The Colour Engine is responsible for generating and evaluating candidate colour values.

The Validation system determines whether a candidate satisfies the applicable rule.

The conceptual process is:

    Generated candidate
          ↓
    Contrast calculation
          ↓
    Validation identifies failure
          ↓
    Generate nearby candidates
          ↓
    Calculate contrast + colour difference
          ↓
    Validation evaluates candidates
          ↓
    Select suitable candidate

The repair process should attempt to preserve the intended visual character rather than making an arbitrary colour substitution.

Where possible, the correction should prioritise minimal perceptual deviation while satisfying the applicable requirement.

A repaired value must remain subject to gamut handling and subsequent validation.

---

## 19. User Overrides

Users may override generated colour values.

A user override does not invalidate the archetype.

Instead, TokenForge should recalculate the relevant colour metrics and re-run the relevant validation against the new value.

    Generated value
          ↓
    User override
          ↓
    Recalculate
          ↓
    Revalidate
          ↓
    Updated system

If an override introduces a problem, TokenForge should explain the consequence rather than silently reverting the user's decision.

---

## 20. Determinism

Core colour generation must be deterministic.

Given the same:

- Input colours
- Archetype version
- Colour-engine version
- Generation configuration
- Target colour space

TokenForge should produce the same generated result.

This is necessary for:

- Reproducibility
- Versioning
- Testing
- Debugging
- Export consistency

Randomness must not be used in the core generation algorithm unless it is explicitly controlled by a deterministic seed and there is a documented reason to use it.

---

## 21. AI's Role

AI must not be the authority for colour mathematics or accessibility decisions.

AI may later assist with:

- Explaining colour choices
- Suggesting alternatives
- Describing visual relationships
- Helping users explore possible directions
- Translating user intent into engine configuration

However, deterministic TokenForge logic remains authoritative for:

- Colour conversion
- Palette generation
- Gamut handling
- Contrast calculation
- Token validity
- Validation decisions

    AI
     ↓
    Recommendation / explanation
     ↓
    Deterministic Colour Engine
     ↓
    Validation
     ↓
    Result

---

## 22. V1 Colour Pipeline

The V1 pipeline is:

    1. User provides brand colour(s)
                 ↓
    2. Parse and validate input
                 ↓
    3. Establish colour-space metadata
                 ↓
    4. Convert to required internal representations
                 ↓
    5. Apply selected archetype colour strategy
                 ↓
    6. Generate primitive colour scales
                 ↓
    7. Generate neutral scales where required
                 ↓
    8. Generate semantic colour roles
                 ↓
    9. Check target gamut
                 ↓
    10. Apply gamut mapping where required (via Color.js or equivalent)
                 ↓
    11. Calculate required colour metrics
                 ↓
    12. Generate correction candidates where appropriate
                 ↓
    13. Pass relevant colour relationships and metrics to Validation
                 ↓
    14. Present generated system to user
                 ↓
    15. Accept user overrides
                 ↓
    16. Recalculate and revalidate

The Colour Engine performs the colour calculations and candidate generation in this pipeline.

The Validation system determines whether the resulting system satisfies TokenForge's validation rules.

---

## 23. V1 Scope

V1 should support:

- User-defined brand colours
- Colour parsing and input validation
- Colour-space-aware processing
- OKLCH-based perceptual manipulation
- Primitive colour-scale generation
- Archetype-driven colour strategies
- Semantic colour mapping
- Neutral generation
- Gamut detection
- Gamut mapping (via standard library integration)
- WCAG contrast measurement
- Contrast-aware candidate adjustment
- User overrides
- Deterministic generation
- sRGB output

The architecture should be prepared for wider-gamut output, including Display P3, without making it a V1 requirement.

---

## 24. Out of Scope for V1

The following should not be required for the first implementation:

- Bespoke implementation of colour-science algorithms from raw mathematical equations
- Automatic archetype switching
- Full multi-theme migration
- Automatic dark-mode generation as a separate product workflow
- Advanced colour-vision simulation tooling
- Full perceptual colour-difference analysis exposed directly to users
- AI-generated colour systems as an independent generation path
- Arbitrary custom colour spaces
- Exhaustive colour-harmony generation

These may be considered later where justified by the product roadmap.

---

## 25. Source Authority

The Colour Engine follows the source hierarchy established in `SOURCES.md`.

### Standards

Standards define the normative technical behaviour used by TokenForge where applicable.

Primary references include:

- W3C CSS Color Module Level 4
- WCAG 2.2

### Implementation Dependencies

Established, tested libraries are approved for executing technical colour operations according to standard algorithms.

Primary implementation reference:

- `Color.js`

### Research

Research sources inform the underlying colour-science rationale.

The OKLab research by Björn Ottosson is particularly relevant to the use of OKLab/OKLCH for perceptual colour manipulation.

The complete source registry and source tiers are maintained in `SOURCES.md`.

---

## 26. Implementation Authority

When implementing colour mathematics, TokenForge should follow this order:

    Applicable standard (e.g. W3C CSS Color 4)
          ↓
    Approved implementation library (e.g. Color.js)
          ↓
    Official technical documentation
          ↓
    Research
          ↓
    TokenForge design decision

A TokenForge design decision must not be presented as a standard requirement when it is actually a product choice.

Likewise, an implementation convenience must not override a normative accessibility or colour specification.

For validation decisions, `VALIDATION.md` is authoritative for the TokenForge rules applied to calculated colour metrics.

---

## 27. Relationship to Other Documents

| Concern | Primary Document |
|---|---|
| Product purpose and flow | `PRODUCT.md` |
| Source authority | `SOURCES.md` |
| Token structure | `TOKEN-MODEL.md` |
| Archetype colour strategy | `ARCHETYPES.md` |
| Colour generation and calculation | `COLOUR-ENGINE.md` |
| Validation rules | `VALIDATION.md` |
| Component usage | `COMPONENTS.md` |
| Design-system implementation | `DESIGN-SYSTEM.md` |
| Export | `EXPORT-SYSTEM.md` |
| Application architecture | `ARCHITECTURE.md` |
| AI behaviour | `AI-SYSTEM.md` |
| Development sequence | `ROADMAP.md` |

---

## 28. Summary

The TokenForge Colour Engine is a deterministic, colour-space-aware system for transforming user colour foundations into design-token colour systems and providing the colour calculations required for contextual validation.

Its architecture deliberately separates three concerns:

    COLOUR SCIENCE
    What is mathematically and perceptually possible?

            ↓

    ARCHETYPE STRATEGY
    What kind of colour system are we trying to create?

            ↓

    USER REFINEMENT
    What does the user ultimately want their system to be?

The Colour Engine performs the colour mathematics required to generate and analyse colour candidates.

Validation interprets those calculations against TokenForge's defined rules and determines pass/fail status.

OKLCH provides the primary working space for controlled perceptual manipulation, while WCAG relative-luminance calculations provide independent accessibility measurement. Gamut handling ensures generated colours remain representable in their intended output space using vetted implementations such as `Color.js`.

The Colour Engine generates recommendations and calculations; the archetype provides the design direction; Validation determines whether the resulting system satisfies the applicable rules; the user remains the final authority over the resulting design system.

> **Generate with colour science. Structure with the archetype. Validate in context. Let the user decide.**