# TokenForge — Sources & References

**Project:** TokenForge  
**Document:** Sources & References  
**Status:** Active  
**Version:** 1.0  
**Last Updated:** 20 August 2026

---

## Purpose

This document contains the curated external sources that should be referenced throughout the TokenForge project.

The sources cover:

- Design-token standards
- Colour science
- Accessibility
- Design-system architecture
- Token transformation and export
- Mobile development
- Backend infrastructure
- AI integration and AI-assisted development

The source list is intentionally curated rather than exhaustive. New sources should only be added when they provide meaningful information that the existing references do not adequately cover.

---

## Source Tiers

### Tier 1 — Authoritative

Official standards, specifications and primary technical documentation.

These should be given the highest priority when determining what is technically correct.

**Examples:** W3C, DTCG, WCAG.

---

### Tier 2 — Official Platform Documentation

Official documentation for the technologies and platforms used by TokenForge.

These should be preferred when implementing or troubleshooting a specific technology.

**Examples:** Android, React Native, Expo, TypeScript, Gemini and Supabase.

---

### Tier 3 — Industry References

Established design systems and tools that demonstrate proven approaches to solving similar problems.

These are references rather than authorities. TokenForge should learn from their approaches without automatically copying them.

**Examples:** Material Design 3, Figma and Style Dictionary.

---

### Tier 4 — Research & Scientific References

Scientific and technical research used to understand the principles behind TokenForge's systems.

These are particularly important for areas such as colour science and perceptual colour generation.

---

# Core Standards

## W3C Design Tokens Community Group

**Category:** Design Tokens  
**Tier:** 1 — Authoritative

The primary source for the Design Tokens Community Group and its ongoing standardisation work.

**Reference:**  
https://www.w3.org/community/design-tokens/

---

## Design Tokens Community Group Specification

**Category:** Design Tokens  
**Tier:** 1 — Authoritative

The primary technical specification for token structure, types, references, groups, themes and interoperability.

**Reference:**  
https://www.designtokens.org/tr/2025.10/

---

## W3C CSS Color Module Level 4

**Category:** Colour Science / CSS  
**Tier:** 1 — Authoritative

Reference for modern colour spaces, colour conversion, interpolation and gamut mapping, including OKLab, OKLCH and Display P3.

**Reference:**  
https://www.w3.org/TR/css-color-4/

---

## WCAG 2.2

**Category:** Accessibility  
**Tier:** 1 — Authoritative

Primary reference for accessibility requirements, including colour contrast and other relevant UI accessibility criteria.

**Reference:**  
https://www.w3.org/TR/WCAG22/

---

# Design Systems & Industry References

## Material Design 3

**Category:** Design Systems / Android  
**Tier:** 3 — Industry Reference

Reference for semantic colour systems, tonal palettes, themes, typography, components and Android-oriented design patterns.

**Reference:**  
https://m3.material.io/

---

## Figma Variables

**Category:** Design Systems / Variables  
**Tier:** 3 — Industry Reference

Reference for understanding established design-system workflows involving variables, collections, modes, aliases and reusable values.

Figma is used as an industry reference, not as a specification for how TokenForge should work.

**Reference:**  
https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma

---

## Style Dictionary

**Category:** Design Tokens / Export  
**Tier:** 3 — Industry Reference

Reference for transforming design tokens into platform-specific outputs and designing TokenForge's export architecture.

**Reference:**  
https://styledictionary.com/

---

# Colour Science

## OKLab

**Category:** Colour Science  
**Tier:** 4 — Research Reference

Foundational reference for OKLab and OKLCH, particularly relevant to perceptual colour manipulation and colour-scale generation.

**Reference:**  
https://bottosson.github.io/posts/oklab/

---

## Color.js

**Category:** Colour Science / Implementation  
**Tier:** 3 — Implementation Reference

Practical reference for colour conversion, manipulation and working with modern colour spaces.

**Reference:**  
https://colorjs.io/

---

# Application Development

## React Native

**Category:** Mobile Development  
**Tier:** 2 — Official Documentation

Primary technical reference for the TokenForge mobile application.

**Reference:**  
https://reactnative.dev/docs/getting-started

---

## Expo

**Category:** Mobile Development  
**Tier:** 2 — Official Documentation

Primary reference for the Expo development platform, tooling and application configuration.

**Reference:**  
https://docs.expo.dev/

---

## TypeScript

**Category:** Programming Language  
**Tier:** 2 — Official Documentation

Reference for TokenForge's type system, strongly typed token models and application code.

**Reference:**  
https://www.typescriptlang.org/docs/

---

## Android Developers

**Category:** Android Platform  
**Tier:** 2 — Official Documentation

Reference for Android platform behaviour, accessibility and Android-specific implementation considerations.

**Reference:**  
https://developer.android.com/

---

## Termux

**Category:** Development Environment  
**Tier:** 2 — Official Documentation

Reference for the Android/Linux development environment used to build and manage TokenForge.

**Reference:**  
https://termux.dev/en/docs/

---

# Backend & AI

## Supabase

**Category:** Backend / Database  
**Tier:** 2 — Official Documentation

Reference for authentication, database, storage, APIs and other backend infrastructure.

**Reference:**  
https://supabase.com/docs

---

## Gemini API

**Category:** Artificial Intelligence  
**Tier:** 2 — Official Documentation

Reference for integrating Gemini into TokenForge, including structured outputs and AI-assisted product functionality.

**Reference:**  
https://ai.google.dev/gemini-api/docs

---

## OpenAI / Codex

**Category:** AI-Assisted Development  
**Tier:** 2 — Official Documentation

Reference for using AI coding agents, repository context, development workflows and AI-assisted software engineering.

**Reference:**  
https://developers.openai.com/codex/

---

# Source Usage Principle

External sources provide evidence, standards and implementation knowledge.

They do not automatically determine what TokenForge should become.

**Standards define what is valid.**

**Official documentation defines how technologies work.**

**Industry references demonstrate established approaches.**

**Research explains underlying principles.**

**TokenForge's own documentation defines what we choose to build.**