# TokenForge — AI System

**Project:** TokenForge
**Document:** AI System
**Status:** Active
**Version:** 1.0
**Last Updated:** 20 August 2026

---

## 1. Purpose

This document defines the role, boundaries and future use of artificial intelligence within TokenForge.

TokenForge V1 is a deterministic-first product. Its core token generation, colour processing, validation, component evaluation and export systems must not depend on generative AI.

AI may be considered for future assistance where it provides a clear advantage over deterministic logic, particularly for explanation, natural-language interaction and exploration.

AI is therefore an optional assistance layer, not the source of truth for the design system.

---

## 2. V1 AI Position

TokenForge V1 does not require generative AI to perform its core functionality.

The V1 workflow remains:

    User Input
        ↓
    Archetype
        ↓
    Token Model
        ↓
    Generation
        ↓
    User Refinement
        ↓
    Validation
        ↓
    Components
        ↓
    Export

These systems must function without an AI model.

The existence of an AI architecture document does not mean that TokenForge V1 must contain an AI-powered feature.

---

## 3. Deterministic-First Principle

TokenForge should use deterministic systems wherever a problem can be solved reliably through defined rules, mathematical operations or known standards.

This applies particularly to:

- Token generation
- Token relationships
- Token references
- Colour conversion
- Colour interpolation
- Gamut handling
- Contrast calculations
- Accessibility evaluation
- Validation
- Dependency resolution
- Export transformation
- Export-readiness checks

AI must not replace an authoritative deterministic calculation.

For example, TokenForge should calculate whether a colour combination satisfies an applicable contrast requirement rather than asking an AI model whether it "looks accessible".

---

## 4. AI Must Not Be Authoritative

AI-generated information must never become the authoritative source of truth for a TokenForge design system.

The authoritative sources remain:

    Token Model
        ↓
    Archetype configuration
        ↓
    Deterministic generation
        ↓
    Validation rules
        ↓
    User decisions

Where AI is introduced in the future, its output must ultimately be evaluated by the relevant TokenForge systems.

---

## 5. AI and Archetypes

Archetypes are predefined blueprints and should not require AI to generate their token architecture.

An archetype establishes:

- Design philosophy
- Token architecture
- Recommended relationships
- Initial configuration
- Relevant generation rules

The user can then modify the generated system.

AI should not silently rewrite an archetype or invent a new token architecture during normal V1 generation.

Future AI features may assist users in understanding or modifying an archetype, but any resulting changes must pass through the normal TokenForge generation and validation systems.

---

## 6. AI and Colour

Colour generation remains the responsibility of the Colour Engine.

AI must not be used as the authoritative mechanism for:

- Colour-space conversion
- OKLCH calculations
- Palette generation
- Gamut mapping
- Contrast calculation
- Accessibility determination

A future AI feature could help a user express an intent such as:

> "Make the palette feel softer."

The AI could translate that request into a proposed change or set of parameters.

The Colour Engine would then determine the actual resulting colours.

    User Intent
        ↓
    AI Suggestion
        ↓
    Colour Engine
        ↓
    Generated Values
        ↓
    Validation

The AI does not directly determine whether the resulting colours are valid.

---

## 7. AI and Validation

Validation remains deterministic.

AI must not determine whether a token system is:

- Structurally valid
- Correctly referenced
- Accessible
- Internally coherent
- Suitable for component consumption
- Ready for export

Future AI functionality may explain validation results in natural language or suggest possible remediation.

For example:

    Validation
    Error: unresolved reference

    AI assistance:
    "This semantic token references a primitive
    that no longer exists. You could restore the
    referenced primitive or change the semantic
    token to another valid primitive."

The underlying validation result remains authoritative.

---

## 8. AI and Automatic Fixes

TokenForge's automatic fixes should remain deterministic where possible.

If a validation rule has a known safe remediation, TokenForge should apply that remediation directly rather than asking an AI model to decide how to fix it.

AI-generated fixes may be considered in future versions for problems that require interpretation or creative judgement.

Any AI-generated fix must:

1. Be presented as a suggestion.
2. Require appropriate user approval.
3. Be applied through the TokenForge token model.
4. Be revalidated after application.

AI must never silently modify the user's token system.

---

## 9. Potential Future AI Capabilities

AI may be introduced where it solves a genuine user problem that deterministic systems cannot solve as effectively.

Potential areas include:

### 9.1 Natural-Language Assistance

Allow users to describe design intentions using ordinary language.

Example:

> "Make the interface feel more spacious and less dense."

The system could translate the request into suggested token changes.

### 9.2 Explanations

Explain:

- Why a token exists
- Why a validation result occurred
- How tokens relate to one another
- Why an archetype generated a particular structure
- What changing a token may affect

### 9.3 Guided Exploration

Help users explore alternative configurations without directly committing changes.

Example:

> "Show me three alternative spacing systems that keep the same overall hierarchy."

### 9.4 Educational Assistance

Explain design-system concepts to users who are unfamiliar with tokens, semantic roles, colour systems or accessibility.

This may be particularly useful for beginners without making AI responsible for the underlying system.

---

## 10. Human Authority

The user remains the final authority over legitimate design decisions.

AI recommendations must not override:

- User choices
- User-created values
- Intentional archetype overrides
- Valid custom token structures
- Explicit configuration

A difference from an archetype recommendation is not automatically an error.

The same principle applies to AI suggestions.

    AI Recommendation
          ↓
    User Decision
          ↓
    Token System
          ↓
    Validation

---

## 11. AI Output Verification

Any AI-generated recommendation that could affect the token system must be evaluated by the appropriate deterministic TokenForge system before being applied.

Examples:

    AI suggests colour
        ↓
    Colour Engine evaluates it
        ↓
    Validation evaluates resulting usage

    AI suggests token change
        ↓
    Token Model evaluates structure
        ↓
    Validation evaluates result

    AI suggests export-related change
        ↓
    Export system evaluates compatibility
        ↓
    Export readiness check

AI output must therefore be treated as untrusted input rather than authoritative system data.

---

## 12. Sources and Factual Claims

AI should not invent design-system standards, accessibility requirements or technical specifications.

Where an AI feature provides factual claims about standards or established design systems, those claims should be grounded in TokenForge's approved sources where appropriate.

Authoritative standards and documented system references remain higher authority than generated AI responses.

AI should communicate uncertainty rather than presenting unsupported claims as fact.

---

## 13. Privacy and Data Minimisation

If AI capabilities are introduced, TokenForge should minimise the information sent to external AI services.

Only information necessary to perform the requested AI task should be transmitted.

The system should avoid unnecessarily sending:

- Unrelated project data
- Personal information
- Private application source code
- Credentials
- Secrets
- Authentication information

The exact provider, data-processing model and retention policy must be defined before an AI-powered feature is introduced.

---

## 14. AI Failure Handling

AI assistance must fail safely.

If an AI service is:

- Unavailable
- Incorrect
- Uncertain
- Inconsistent
- Unable to understand the request
- Unable to produce a valid structured response

TokenForge should retain the existing token system and allow the user to continue using the deterministic product.

AI availability must not prevent core TokenForge functionality.

---

## 15. V1 Exclusions

The following are outside the scope of TokenForge V1:

- AI-generated complete interfaces
- AI-generated token systems
- AI-generated archetypes
- AI-controlled colour generation
- AI-controlled validation
- AI-controlled accessibility decisions
- AI-controlled export generation
- Autonomous modification of token systems
- Autonomous design decisions
- AI agents operating on user projects without approval
- AI as a dependency for core TokenForge functionality

These may be reconsidered only when a specific user problem justifies their inclusion.

---

## 16. Criteria for Introducing AI

A future AI feature should only be introduced when it satisfies a clear product requirement.

Before adding AI, TokenForge should establish:

1. What user problem is being solved?
2. Why is deterministic logic insufficient?
3. Does AI provide a meaningful improvement?
4. Can the feature preserve user control?
5. Can the output be verified?
6. What information must be sent to an AI provider?
7. What happens if the AI service fails?
8. Does the feature introduce unnecessary complexity?
9. Does the feature improve the product enough to justify that complexity?

If a deterministic solution is equally effective or more reliable, the deterministic solution should be preferred.

---

## 17. Core Principle

The fundamental AI principle for TokenForge is:

> **Use AI where interpretation benefits the user; use deterministic systems where correctness matters.**

AI should make TokenForge easier to understand and interact with where appropriate.

It should not replace the systems responsible for calculating, validating and representing the design system.

TokenForge V1 therefore remains useful, functional and reliable without generative AI.