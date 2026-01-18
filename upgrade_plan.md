# Upgrade Plan: Ethereal Sections

## Goal
Replace standard "Features" with an "Awwwards-winning" Bento Grid and add atmospheric scroll sections.

## Components

### 1. [NEW] `components/ui/bento-grid.tsx`
- **Style**: Dark, glassmorphism, glowing borders.
- **Layout**: CSS Grid with `col-span-1`, `col-span-2`.
- **Content**:
    - **Titanium Frame**: Large card, subtle sheen animation.
    - **Sapphire Crystal**: Small card, sparkle effect.
    - **Haptic Engine**: Small card, vibration visual.
    - **30-Day Battery**: Wide card, charging bar animation.

### 2. [NEW] `components/ui/velocity-scroll.tsx`
- **Function**: Infinite horizontal scrolling text ("AETHER • PRECISION • LEGACY").
- **Effect**: Speed changes based on scroll velocity (using `useScroll`, `useVelocity`).

### 3. [NEW] `components/Philosophy.tsx`
- **New Section**: "The Philosophy".
- **Effect**: Text reveal animation (characters fade in or mask reveal).

## Integration
- Update `app/page.tsx` to:
    - Keep `Hero` (untouched).
    - Add `VelocityScroll`.
    - Add `Philosophy` (Text Reveal).
    - Add `features-bento` (The new Bento Grid).
