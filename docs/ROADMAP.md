# TokenForge — Roadmap

**Project:** TokenForge  
**Document:** Roadmap  
**Status:** Active  
**Version:** 1.0  
**Last Updated:** 21 August 2026  
**Purpose:** Define the sequential development path to TokenForge V1 and broad post-V1 considerations without acting as a granular project-management tracker.

---

## 1. Purpose

This roadmap establishes the order of operations for implementing TokenForge V1.

It is intentionally lightweight. It defines *what* must be built and in *what order* to ensure foundational systems are stable before dependent systems are constructed. Granular task tracking belongs in the repository's issue tracker, not in this specification.

The sequence follows the architectural dependency graph:
**Data Schema → Generation → Evaluation → Interface → Export.**

---

## 2. Phase 1: Core Engine & Foundations

Phase 1 establishes the deterministic data layer, the canonical Token Model, and the underlying mathematical engines. UI is strictly functional at this stage.

*   **Project Scaffolding:** Initialise the React Native and Expo development environment, configuring routing and local project state persistence.
*   **Token Model Implementation:** Build the canonical data schema, ensuring support for structured hierarchy, references, and explicit interactive `State` metadata (Hover, Pressed, Disabled).
*   **Colour Engine Integration:** Implement colour-space conversions, perceptual palette generation (OKLCH), and explicit gamut-mapping using `Color.js` to ensure standards-compliant execution without writing bespoke intersection mathematics.
*   **Archetype Blueprints:** Implement the data structures for the initial 5 archetypes (Material Inspired, Apple Inspired, Fluent Inspired, Minimal, Editorial) and their predefined naming scales.
*   **Generation Pipeline:** Build the deterministic logic that consumes user brand colours and an archetype to output the initial canonical token system.

---

## 3. Phase 2: Validation & Component Lab

Phase 2 introduces the evaluation layers and the visual stress-testing surface. The system must evaluate the tokens and visually bind the results to the UI.

*   **System Validation Engine:** Build the rule evaluators (contrast checks, reference resolution, structural integrity) and ensure they output the strict `affectedTokenIds` data payload.
*   **Component Lab UI:** Develop the 12 reference components within the Expo environment.
*   **Data Contract Binding:** Implement the subscription layer where component anatomy parts listen for validation errors matching their consumed token IDs and render UI warning states accordingly.
*   **Token Refinement UI:** Build the user interfaces for selecting predefined naming conventions, overriding generated colour values, and inspecting token relationships.
*   **State Visualisation:** Ensure the Component Lab can deterministically render interactive states (e.g., triggering a hover or error state preview).

---

## 4. Phase 3: Export & V1 Release

Phase 3 bridges the internal TokenForge system to external production environments.

*   **Export Readiness Validation:** Implement the secondary validation layer that checks if the current canonical system can be safely represented in the target format (e.g., detecting invalid DTCG characters).
*   **JSON (DTCG) Adapter:** Build the deterministic syntax translation to output valid DTCG nested structures, replacing internal characters as needed.
*   **CSS & Tailwind v4 Adapters:** Implement the generation of standard CSS custom properties and modern Tailwind v4 `@theme` variables, ensuring immediate compatibility with web and NativeWind mobile setups.
*   **JS/TS Adapter:** Generate strictly typed TypeScript definitions and JavaScript constant exports.
*   **Workflow Stitching:** Connect the linear UI flow: Create → Generate → Edit → Validate → Export.
*   **V1 Final Polish:** Final end-to-end testing of the deterministic generation and export pipelines.

---

## 5. Post-V1 (Future Considerations)

These features are explicitly excluded from V1 to protect project velocity, but the architecture is designed to support them in future releases.

*   **Component Authoring:** Allowing users to create custom components and bind their own token anatomy.
*   **Partial Category Export:** Exporting isolated sub-trees of the token system, which requires complex dependency-graph validation logic.
*   **AI Assistance (`AI-SYSTEM.md`):** Natural language intent translation and contextual design-system explanations.
*   **Platform-Specific Outputs:** Swift/Apple formats, Android XML, Kotlin, and direct Figma variable syncing.
*   **Advanced Theming:** Full multi-mode (e.g., Light/Dark/High-Contrast) generation workflows beyond the foundational data-model support.
