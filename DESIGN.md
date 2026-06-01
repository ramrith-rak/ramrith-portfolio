# Design System: Ivory & Ink Editorial

This document outlines the visual identity and engineering principles for the Ramrith Rakpoun (Ram) UX/UI Portfolio.

## 1. Visual Identity & Aesthetic: "Soulful Minimalism"

The "Ivory & Ink Editorial" aesthetic is inspired by high-end design journals, premium print media, and sophisticated minimalist galleries. It prioritizes white space, intentional storytelling, and a sense of "digital luxury."

- **Core Aesthetic:** Editorial, bespoke, and human-centric.
- **Atmosphere:** Warm, paper-like surfaces with crisp, ink-like typography.
- **Motifs:** Subtle grain textures, asymmetric layouts, and expansive white space.

## 2. Design Tokens

### 2.1 Color Palette (60-30-10 Rule)
| Role | Primitive | Value | CSS Variable |
|------|-----------|-------|--------------|
| **Dominant (60%)** | Ivory | `#FDFCFB` | `--background` |
| **Secondary (30%)** | Ink Black | `#1A1C20` | `--foreground` |
| **Accent (10%)** | Serenity Blue | `#9BB7D4` | `--accent` |

### 2.2 Typography
The system uses a sophisticated hybrid pairing to balance elegance with technical precision.

| Tier | Font | Weights | Usage |
|------|------|---------|-------|
| **Display / Heading** | `Crimson Pro` | 200, 300 | High-impact hero headings and project titles. |
| **Body / Detail** | `JetBrains Mono` | 300, 400, 500 | Annotations, meta-data, and long-form content. |

### 2.3 Radius & Layout
- **Radius:** Standardized at `2px` for subtle softness while maintaining a crisp edge.
- **Spacing:** Generous vertical padding (`160px` to `240px`) to create "breathing room" between narrative sections.

## 3. Component Architecture

### 3.1 Editorial Project Item
Projects are represented as a narrative "spread":
- **Asymmetric Grid:** Alternating alignment (8-column image vs 4-column info) to create a dynamic scroll.
- **Minimal Metadata:** Focus on Title, Tag, and a high-fidelity visual placeholder.
- **Animated Underline:** Call-to-actions (`Explore Work`) use an accent-colored expanding underline.

### 3.2 Navigation
- **Minimal Fixed Nav:** Background uses the Ivory color with 80% opacity and a backdrop blur.
- **Identity:** Logo uses a lightweight `Crimson Pro` typeface for a bespoke feel.

## 4. UX Principles

- **Intentional Narrative:** Guide the eye through a single, vertical story.
- **Quiet Luxury:** Animations are slow, smooth, and purposeful (e.g., 800ms fade-ins).
- **Substance Over Decoration:** Every visual element must serve the narrative; remove any "AI-generated" clutter.
- **A11y:** Maintain high contrast between Ink Black text and the Ivory background.
