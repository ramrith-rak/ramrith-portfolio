# Design System: Tactical Precision

This document outlines the visual identity and engineering principles for the Ramrith Rakpoun (Ram) UX/UI Portfolio.

## 1. Visual Identity & Aesthetic

The "Tactical Precision" aesthetic is inspired by high-end engineering interfaces, tactical command centers, and cinematic tech visuals. It prioritizes clarity, technical detail, and a sense of "digital weight."

- **Core Aesthetic:** High-fidelity, technical, and atmospheric.
- **Atmosphere:** Deep obsidian surfaces with sharp indigo accents.
- **Technical Motifs:** Scanlines, corner L-brackets, noise grain, and grid-based layouts.

## 2. Design Tokens

The system uses a **two-tier token architecture**:
1. **Primitives**: Raw palette values (Neutrals and Indigos).
2. **Semantics**: Intent-based mappings (Background, Primary, Tactical) that components consume.

### 2.1 Primitive Colors (Raw Palette)
These values are defined in `globals.css` and should **never** be consumed directly by components.

| Scale | Step / Variable | Value | Role |
|-------|-----------------|-------|------|
| **Neutral** | `neutral-50` | `#F8FAFC` | Lightest text / foreground. |
| | `neutral-500` | `#64748B` | Muted / secondary text. |
| | `neutral-950` | `#080808` | **Obsidian** (Surface). |
| | `neutral-1000`| `#030303` | **Void** (Base Background). |
| **Indigo** | `indigo-500` | `#6366F1` | **Tactical Indigo** (Primary Action). |

### 2.2 Semantic Tokens (Intent Layer)
Components consume these tokens to ensure theme consistency.

| Token | CSS Variable | Primitive Mapping | Role / Usage |
|-------|--------------|-------------------|--------------|
| `color.bg.base` | `--background` | `neutral-1000` | Main page background (Void). |
| `color.bg.surface` | `--card` | `neutral-950` | Elevated surfaces (Obsidian). |
| `color.accent.primary` | `--tactical` | `indigo-500` | Primary tactical indigo action color. |
| `color.text.primary` | `--foreground` | `neutral-50` | High-contrast primary text. |
| `color.text.muted` | `--muted` | `neutral-500` | Secondary/de-emphasized text. |
| `color.border.base` | `--border` | `white/10` | Structural component borders. |
| `color.status.active` | `--tactical` | `indigo-500` | Active indicators and pulse effects. |

### Typography (Semantic Tokens)
- **Primary Font:** `JetBrains Mono` (Weights: 300, 400, 500, 700)
- **Style:** Monospaced for all elements to reinforce the technical/engineering feel.

| Token | Size / Tailwind | Attributes | Usage |
|-------|-----------------|------------|-------|
| `font.size.display` | `text-7xl` to `text-8xl` | `tracking-tighter`, `leading-[0.9]` | Page-level hero names. |
| `font.size.h1` | `text-4xl` to `text-6xl` | `tracking-tighter`, `font-bold` | Section headings. |
| `font.size.body.base` | `text-base` / `text-sm` | `leading-relaxed` | Standard content text. |
| `font.size.tactical` | `text-[10px]` | `uppercase`, `tracking-widest`, `font-bold` | Status, tags, annotations. |

### Radius & Spacing (Semantic Tokens)
The system enforces a strict **sharp edge** policy.

| Token | Value | Mapping | Usage |
|-------|-------|---------|-------|
| `radius.sharp` | `0px` | `--radius` | **Global Standard**. No rounded corners. |
| `space.base` | `4px` | N/A | Multiples of 4 for all spacing. |

### Elevation & Effects (Semantic Tokens)
| Token | Variable | Effect | Usage |
|-------|----------|--------|-------|
| `effect.scanline` | `--scanline` | Vertical indigo gradient animation | Tactical depth on large surfaces. |
| `effect.glow.active` | `--glow` | `box-shadow: 0 0 20px tactical/30` | Active states and primary highlights. |

## 3. Component Architecture

### Button Component
Buttons strictly follow the tactical aesthetic:
- **Radius**: Always `0px`.
- **Typography**: `uppercase`, `font-bold`, `tracking-widest`.
- **Focus State**: Intense 2px tactical indigo ring (`outline-tactical`).

### Card Component
Containers use the custom tactical border system:
- **Corner Accents**: 2px indigo L-brackets (`.corner-tl`, etc.).
- **Background**: Obsidian (`neutral-950`) with varying opacities.

## 4. UX Principles

- **Precision Over Flair**: Animations are fast (200ms) and purposeful.
- **Visual Hierarchy**: Use Tactical Indigo (`--tactical`) sparingly to guide attention to primary actions.
- **A11y**: Focus visible states are mandatory for all interactive elements.
- **Consistency**: Components must consume **Semantic Tokens**, never raw values or Primitives.
