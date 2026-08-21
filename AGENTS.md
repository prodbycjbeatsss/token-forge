# TokenForge — Agent Instructions

## Purpose

This file defines how AI coding agents should work within the TokenForge repository.

It does not replace the project's product, architecture or subsystem specifications.

The repository documentation defines what TokenForge is.
This file defines how an agent should work on it.

---

## 1. Before Making Changes

Before changing code, documentation or architecture:

1. Inspect the current repository state.
2. Read the relevant project documentation.
3. Inspect the existing implementation related to the requested change.
4. Determine whether the requested behaviour already exists.
5. Identify affected systems, dependencies and derived state.
6. Check whether the proposed change is within V1 scope.

Do not implement from assumptions or from previous conversation context when the current repository can verify the answer.

Do not recreate functionality that already exists.

If the requested behaviour conflicts with the documented architecture or requirements, identify the conflict before implementing it.

If a materially important requirement is ambiguous, ask for clarification rather than inventing behaviour.

---

## 2. Project Documentation Is the Source of Product Decisions

Use the repository's documentation as the primary source of truth for product and architectural decisions.

Read:

- `docs/MASTER-SPECIFICATION.md` for the overall V1 product and system contract.
- `docs/ARCHITECTURE.md` for system boundaries, responsibilities and data flow.
- `docs/TOKEN-MODEL.md` for the canonical token model.
- `docs/PRODUCT.md` for product requirements and behaviour.
- The relevant subsystem specification before changing that subsystem.

Relevant subsystem specifications include:

- `docs/ARCHETYPES.md`
- `docs/COLOUR-ENGINE.md`
- `docs/COMPONENTS.md`
- `docs/VALIDATION.md`
- `docs/EXPORT-SYSTEM.md`
- `docs/AI-SYSTEM.md`

Do not copy large sections of these documents into new instructions. Read and follow the authoritative document instead.

If implementation and documentation disagree, report the discrepancy and determine which should be reconciled before treating either interpretation as authoritative.

---

## 3. TokenForge's Architectural Principle

Preserve the project's central architecture:

> One canonical token system, multiple consumers and representations.

The approved token system is the source of truth.

Components consume it.

Validation evaluates it.

Export represents it.

Derived previews, validation results, export files, cached calculations and AI suggestions must not silently become competing sources of truth.

Do not introduce duplicated token state or parallel representations when the existing canonical model can provide the required behaviour.

When a change affects a source value, consider which dependent systems must be recalculated or invalidated.

---

## 4. Protect V1 Scope

Do not expand V1 requirements without an explicit product decision.

A technically useful feature is not automatically a V1 requirement.

When a requested change relates to functionality documented as future or excluded scope:

1. Identify that it is outside the current V1 contract.
2. Do not quietly implement it as part of another change.
3. Raise it as a separate product decision when necessary.

Prefer the smallest implementation that satisfies the current documented requirement.

---

## 5. Deterministic-First Architecture

TokenForge V1 is deterministic-first.

Where a result can be reliably produced through defined rules, calculations or standards, use deterministic logic rather than introducing generative AI.

AI must not become authoritative for:

- token structure;
- token relationships;
- colour calculations;
- validation;
- accessibility decisions;
- export correctness;
- other deterministic system behaviour.

If AI functionality is ever introduced, follow `docs/AI-SYSTEM.md`.

---

## 6. Research and External Sources

When technical, standards-based, scientific or library information must be researched:

1. Check `SOURCES.md` first.
2. Prefer the highest-authority applicable source tier.
3. Prefer current official documentation and specifications.
4. Do not treat industry references as standards.
5. Do not invent APIs, standards, capabilities or technical behaviour.
6. If an external source materially changes a TokenForge decision, determine whether the project documentation also needs updating.

`SOURCES.md` defines the project's curated external reference hierarchy.

TokenForge's own documentation defines what the project chooses to build.

---

## 7. Implementation Discipline

Follow the architecture and patterns already established by the repository.

Prefer:

- existing implementations over duplication;
- simple solutions over unnecessary abstraction;
- explicit system boundaries;
- strongly typed data;
- accessible behaviour;
- maintainable code;
- minimal dependencies.

Do not introduce a framework, dependency, abstraction or architectural pattern without a concrete reason.

When changing a subsystem, avoid moving responsibilities into another subsystem merely because doing so is convenient.

Each major capability should have one authoritative owner.

---

## 8. Documentation Changes

If an implementation change alters documented behaviour, update the relevant documentation.

Do not duplicate the same requirement across multiple documents unless the duplication is intentionally a summary or navigation aid.

When a specification changes, check whether related specifications now contain contradictory information.

Keep status, version and last-updated information accurate when modifying project documents that contain such metadata.

---

## 9. Verification

After making a change:

1. Run the most relevant available checks.
2. Test affected behaviour where practical.
3. Inspect the resulting diff.
4. Check for unintended changes.
5. Report what was verified and what could not be verified.

Never claim that code works, tests pass or behaviour is correct unless it has actually been verified.

---

## 10. Git Discipline

Keep changes focused.

Do not stage unrelated files.

Before committing:

```bash
git status
git diff
Stage only the intended files.
Use a clear conventional commit message.
Push only when the change is ready and the user has authorised the workflow.
Do not use broad staging commands when explicit paths can be used.
11. Decision Discipline
For significant technical or architectural decisions:
Identify the problem.
Check the existing project decision.
Identify viable options.
Consider meaningful trade-offs.
Recommend the simplest appropriate solution.
Identify consequences and affected systems.
Do not silently override an existing project decision because another approach appears preferable.
If the existing decision is technically flawed, explain why and propose a deliberate change rather than bypassing it.
12. Final Check
Before completing a task, confirm:
I inspected the current implementation.
I read the relevant project specification.
I checked SOURCES.md where external research was required.
I did not invent behaviour that the project has not specified.
I did not duplicate existing functionality.
I did not accidentally expand V1 scope.
I preserved the canonical token model.
I considered affected dependent systems.
I verified the change appropriately.
I identified any unresolved documentation or implementation discrepancies.