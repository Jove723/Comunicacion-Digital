# Design System - Supermerprado El Rey

## Colors

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#00552C` | Header, footer, primary buttons, links |
| `--color-primary-dark` | `#004225` | Button hover states |
| `--color-white` | `#FFFFFF` | Text on dark, card backgrounds |
| `--color-black` | `#000000` | Primary text, card borders |
| `--color-contrast` | `#FFFA01` | Icons on dark, add buttons, prices |

### Neutral Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-grey` | `#9CA3AF` | Placeholder text, secondary text |
| `--color-light-grey` | `#F3F4F6` | Input backgrounds, dividers |
| `--color-background` | `#F9FAFB` | Page background |
| `--color-border-light` | `#E5E7EB` | Card borders, input borders |
| `--color-tertiary` | `#639A7F` | Secondary buttons, icon buttons |

## Typography

### Font Stack
- Headings: `DM Sans, sans-serif`
- Body: `Poppins, sans-serif`
- UI/Base: `Inter, system-ui, -apple-system, sans-serif`

### Scale
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `--font-size-h1` | 64px | 700 | Page titles |
| `--font-size-h2` | 40px | 700 | Section titles |
| `--font-size-h3` | 32px | 700 | Subsection titles |
| `--font-size-h4` | 24px | 700 | Category titles |
| `--font-size-body1` | 16px | 400 | Primary body text |
| `--font-size-body2` | 14px | 400 | Secondary body text |
| `--font-size-caption` | 12px | 400 | Badges, labels |

### Weights
| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-regular` | 400 | Body text |
| `--font-weight-medium` | 500 | Medium emphasis |
| `--font-weight-semibold` | 600 | Navigation links |
| `--font-weight-bold` | 700 | Headings, buttons |

## Spacing

Base unit: **8px**

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Minimal gaps |
| `--spacing-sm` | 8px | Tight spacing |
| `--spacing-md` | 16px | Standard spacing |
| `--spacing-lg` | 24px | Section gaps |
| `--spacing-xl` | 32px | Large spacing |
| `--spacing-xxl` | 48px | Section padding |
| `--spacing-xxxl` | 64px | Page sections |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Inputs, small elements |
| `--radius-md` | 12px | Badges, medium cards |
| `--radius-lg` | 16px | Large containers |
| `--radius-xl` | 20px | Product cards |
| `--radius-pill` | 90px | Buttons |
| `--radius-circle` | 500px | Circular buttons, avatars |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Card hover |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Dropdowns, modals |

## Animation

### Durations
| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | 150ms | Hover states, micro-interactions |
| `--transition-normal` | 300ms | Page transitions, overlays |
| `--transition-slow` | 500ms | Page load, reveals |

### Easing
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);     /* Smooth deceleration */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);    /* Balance */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Playful */
```

### Animation Types

#### 1. Hover Elevate
```css
.product-card {
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.product-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}
```

#### 2. Button Press
```css
.btn:active {
    transform: scale(0.96);
}
```

#### 3. Image Zoom
```css
.product-card__image img {
    transition: transform 400ms var(--ease-out);
}
.product-card:hover .product-card__image img {
    transform: scale(1.08);
}
```

#### 4. Sidebar Slide
```css
.categories-sidebar {
    transition: transform var(--transition-normal);
    transform: translateX(-320px);
}
.categories-sidebar--open {
    transform: translateX(0);
}
```

#### 5. Overlay Fade
```css
.categories-overlay {
    transition: opacity var(--transition-normal), visibility var(--transition-normal);
}
```

#### 6. Staggered Entrance
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.product-card {
    animation: fadeInUp 400ms var(--ease-out) backwards;
}
/* Stagger with nth-child */
.product-card:nth-child(1) { animation-delay: 0ms; }
.product-card:nth-child(2) { animation-delay: 75ms; }
.product-card:nth-child(3) { animation-delay: 150ms; }
.product-card:nth-child(4) { animation-delay: 225ms; }
```

#### 7. Page Load Sequence
```css
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.header {
    animation: slideDown 500ms var(--ease-out);
}
```

## Components

### Header
| Element | Style |
|---------|-------|
| Background | `--color-primary` |
| Padding | 20px 150px |
| Logo border | 2px solid `--color-contrast` |
| Nav links | White, `--font-weight-bold`, hover → contrast |
| Search icon | `--color-primary` |
| Cart icon | `--color-contrast` |

### Product Card
| State | Style |
|-------|-------|
| Default | White bg, 1px black border, 20px radius |
| Hover | translateY(-4px), shadow-lg, image zoom |
| Active | scale(0.98) |

### Buttons

#### Primary
```css
background: --color-primary;
color: --color-white;
border-radius: --radius-pill;
padding: 16px 24px;
font-weight: 700;
```
**Hover:** `--color-primary-dark`

#### Secondary/Outline
```css
background: transparent;
color: --color-primary;
border: 2px solid --color-primary;
border-radius: --radius-pill;
```
**Hover:** bg becomes primary, color becomes white

#### Add Button (Contrast)
```css
background: --color-contrast;
color: --color-black;
border-radius: --radius-circle;
width: 40px;
height: 40px;
```
**Hover:** darken 10%

### Footer
| Element | Style |
|---------|-------|
| Background | `--color-primary` |
| Logo border | 5px solid `--color-contrast` |
| Section titles | `--color-contrast`, 600 weight |
| Links | `--color-white`, 400 weight |

## Responsive Breakpoints

| Name | Width | Grid Columns |
|------|-------|--------------|
| desktop | 1200px+ | 4 columns |
| tablet | 992px | 3 columns |
| mobile-large | 768px | 2 columns |
| mobile | 480px | 1 column |

## Icons

| Size | Value |
|------|-------|
| small | 16px |
| medium | 20px |
| large | 24px |

Style: Line icons, 2px stroke

## Usage Rules

### Do
- Use `--color-primary` (#00552C) for all primary actions
- Use `--color-contrast` (#FFFA01) for icons on dark backgrounds
- Use 150ms for hover, 300ms for transitions, 500ms for page animations
- Apply `ease-out` for reveals, `ease-in-out` for toggles

### Don't
- Mix `#16A34A` (use `--color-primary` which is `#00552C`)
- Use animation durations outside 150-500ms range
- Apply animations to elements that don't have user interaction context
