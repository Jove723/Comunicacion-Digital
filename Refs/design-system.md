# Design System - Supermerprado El Rey

## Colors

### Primary Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Primary (Green) | `#16A34A` | Main brand color, buttons, primary actions |
| Contrast (Yellow) | `#FFFA01` | Product prices, add buttons, accent highlights |
| Contrast (White) | `#FFFFFF` | Text on primary backgrounds, header/footer |
| Black | `#000000` | Primary text, product titles |
| White | `#FFFFFF` | Backgrounds, cards |
| Tertiary (Dark Blue) | `#1E3A5F` | Navigation text, secondary text |
| Primary Text | `#16A34A` | Product prices, links, accents |

### Secondary Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Grey | `#9CA3AF` | Secondary text, placeholders |
| Light Grey | `#F3F4F6` | Backgrounds, dividers, input backgrounds |
| Background | `#F9FAFB` | Page background |

### Stroke Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Border Light | `#E5E7EB` | Card borders, input borders |
| Border Primary | `#16A34A` | Active inputs, primary buttons |

## Typography

### Font Family
- Primary: `Inter, system-ui, -apple-system, sans-serif`

### Font Sizes
| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| H1 | 48px | Bold (700) | 1.2 | Page titles |
| H2 | 40px | Bold (700) | 1.2 | Section titles |
| H3 | 32px | Bold (700) | 1.2 | Subsection titles |
| H4 | 24px | Bold (700) | 1.3 | Category titles, product prices |
| Body 1 | 16px | Regular (400) | 1.5 | Primary body text |
| Body 2 | 14px | Regular (400) | 1.5 | Secondary body text |
| Caption | 12px | Regular (400) | 1.4 | Small labels, timestamps |
| Button | 16px | Bold (700) | 1.0 | Button labels |
| Small | 14px | Regular (400) | 1.4 | Small text |

### Font Weights
| Name | Value | Usage |
|------|-------|-------|
| Regular | 400 | Body text |
| Medium | 500 | Medium emphasis text |
| Semi-bold | 600 | Semi-bold emphasis |
| Bold | 700 | Headings, buttons, emphasis |

## Spacing System

Base unit: **8px**

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Minimal spacing |
| sm | 8px | Tight spacing |
| md | 16px | Standard spacing |
| lg | 24px | Section spacing |
| xl | 32px | Large spacing |
| xxl | 48px | Extra large spacing |
| xxxl | 64px | Page section spacing |

## Border Radius

| Name | Value | Usage |
|------|-------|-------|
| sm | 8px | Small elements, inputs |
| md | 12px | Medium cards, badges |
| lg | 16px | Large cards, containers |
| xl | 20px | Product cards |
| pill | 90px | Buttons, rounded elements |
| circle | 500px | Circular avatars, logos |

## Border / Stroke

| Name | Value | Usage |
|------|-------|-------|
| thin | 1px | Light borders |
| medium | 2px | Primary borders, active states |
| thick | 5px | Logo border |

## Shadows

| Name | Value | Usage |
|------|-------|-------|
| sm | `0 1px 2px rgba(0,0,0,0.05)` | Subtle shadows |
| md | `0 4px 6px rgba(0,0,0,0.1)` | Card shadows |
| lg | `0 10px 15px rgba(0,0,0,0.1)` | Dropdown shadows |
| xl | `0 20px 25px rgba(0,0,0,0.15)` | Modal shadows |

## Components

### Buttons

#### Primary Button
```css
background-color: #16A34A;
color: #FFFFFF;
border-radius: 90px;
padding: 12px 24px;
font-size: 16px;
font-weight: 700;
```

#### Secondary Button (Outline)
```css
background-color: transparent;
color: #1E3A5F;
border: 2px solid #16A34A;
border-radius: 90px;
padding: 12px 24px;
font-size: 16px;
font-weight: 700;
```

#### Add Button (Contrast)
```css
background-color: #FFFA01;
color: #000000;
border-radius: 500px;
width: 40px;
height: 40px;
```

#### Quantity Button
```css
background-color: transparent;
border: 1px solid #1E3A5F;
border-radius: 500px;
width: 32px;
height: 32px;
color: #9CA3AF;
```

#### Quantity Button (Hover)
```css
border-color: #FFFA01;
color: #FFFA01;
```

#### Icon Button
```css
background-color: transparent;
color: #1E3A5F;
border: none;
border-radius: 3px;
padding: 8px;
```

### Cards

#### Product Card
```css
background-color: #FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
padding: 16px;
```

#### Section Card
```css
background-color: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 16px;
padding: 24px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
```

### Inputs

#### Text Input
```css
background-color: #F3F4F6;
border: 2px solid transparent;
border-radius: 12px;
padding: 12px 16px;
font-size: 16px;
color: #000000;
```

#### Text Input (Focused)
```css
border-color: #16A34A;
```

### Header
```css
background-color: #16A34A;
padding: 16px 24px;
```

- Logo: Circular (border-radius: 500px), border: 2px solid #FFFFFF
- Navigation links: Color #FFFFFF, font-weight 600
- **Iconos (menú, carrito, búsqueda)**: Color #FFFA01 (amarillo contraste)
- Search bar: White background, border-radius: 10px, placeholder text #16A34A
- Cart badge: White background with #16A34A stroke, border-radius: 12px

### Footer
```css
background-color: #16A34A;
padding: 48px 24px;
```

- Logo: Circular (border-radius: 500px), border: 5px solid #FFFFFF
- **Iconos**: Color #FFFA01 (amarillo contraste)
- Section titles: Color #FFFFFF, font-weight 700
- Links: Color #FFFFFF, font-weight 400

### Badges

#### Cart Badge
```css
background-color: #FFFFFF;
border: 1px solid #16A34A;
border-radius: 12px;
font-size: 12px;
font-weight: 700;
color: #000000;
```

### Dividers
```css
background-color: #FFFFFF;
border-radius: 2px;
height: 3px;
width: 20px;
```

## Responsive Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| mobile | 320px | Small mobile devices |
| tablet | 768px | Tablets, large phones |
| desktop | 1024px | Small desktop screens |
| large | 1280px | Standard desktop |
| xlarge | 1536px | Large screens |

## Grid System

- Desktop: 12 columns, 24px gap
- Tablet: 8 columns, 16px gap
- Mobile: 4 columns, 16px gap

## Animation

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| fast | 150ms | ease-in-out | Hover states |
| normal | 300ms | ease-in-out | Transitions |
| slow | 500ms | ease-out | Page transitions |

## Icons

- Size small: 16px
- Size medium: 20px
- Size large: 24px
- Style: Line icons with 1.5px stroke

## Do's and Don'ts

### Do
- ✅ Use Primary green (#16A34A) for all primary actions
- ✅ Use Contrast yellow (#FFFA01) for product prices
- ✅ Use White (#FFFFFF) for text on dark backgrounds
- ✅ Use Black (#000000) for primary content text
- ✅ Use Grey (#9CA3AF) for secondary/placeholder text
- ✅ Use 8px spacing system consistently
- ✅ Use 20px border-radius for product cards
- ✅ Use 90px border-radius for pill buttons
- ✅ Use 500px border-radius for circular elements (buttons, avatars)

### Don't
- ❌ Don't use other shades of green without approval
- ❌ Don't use grey for primary text (use Black)
- ❌ Don't use border-radius other than specified values
- ❌ Don't deviate from the spacing system
- ❌ Don't use different font weights than specified

### Notas Importantes
- 🔴 **Header y Footer**: Los iconos (menú hamburguesa, carrito, búsqueda) deben ser amarillos (#FFFA01), NO blancos. Solo el texto y el logo pueden ser blancos.
- 🔴 **Consistencia visual**: Mantener el color amarillo para iconos en fondos verdes (#16A34A) asegura mejor visibilidad y refuerza la identidad de marca.
