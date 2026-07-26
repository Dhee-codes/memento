---
name: Memento
colors:
  surface: '#fff8f6'
  surface-dim: '#ebd6cc'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1eb'
  surface-container: '#ffeae0'
  surface-container-high: '#fae4da'
  surface-container-highest: '#f4ded4'
  on-surface: '#241913'
  on-surface-variant: '#574237'
  inverse-surface: '#3a2e27'
  inverse-on-surface: '#ffede5'
  outline: '#8b7265'
  outline-variant: '#dec0b2'
  surface-tint: '#9c4400'
  primary: '#9c4400'
  on-primary: '#ffffff'
  primary-container: '#f47a2a'
  on-primary-container: '#592400'
  inverse-primary: '#ffb68f'
  secondary: '#a83900'
  on-secondary: '#ffffff'
  secondary-container: '#ff6a2a'
  on-secondary-container: '#5b1b00'
  tertiary: '#79590d'
  on-tertiary: '#ffffff'
  tertiary-container: '#be9648'
  on-tertiary-container: '#453000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb68f'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#773200'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#ecc06d'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fff8f6'
  on-background: '#241913'
  surface-variant: '#f4ded4'
typography:
  display-chunky:
    fontFamily: plusJakartaSans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: plusJakartaSans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: plusJakartaSans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: dmSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: dmSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  accent-script:
    fontFamily: playfairDisplay
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
  label-sm:
    fontFamily: dmSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 32px
  xl: 48px
  safe-margin: 20px
---

## Brand & Style
The design system for this mobile-first experience is rooted in a **Keepsake/Scrapbook** aesthetic. It is designed to feel "huggable," nostalgic, and deeply personal, capturing the warmth of culinary memories. The visual language avoids the cold precision of typical tech apps, opting instead for tactile surfaces and a sunny, optimistic palette.

The brand personality is **warm, playful, and sentimental**. It treats every piece of user-generated content as a precious artifact. The UI utilizes generous whitespace and organic shapes to create a relaxed, inviting atmosphere that encourages users to linger and share.

## Colors
The palette is strictly warm, revolving around the "Honey Glaze" and "Tangerine Burst" core. To ensure a soft, parchment-like feel, the background is a cream-tinted off-white (#FFFAF5), which reduces eye strain and reinforces the nostalgic theme.

**Gradients**
The primary brand gradient is a linear transition from Honey Glaze (#F47A2A) to Tangerine Burst (#FF6A2A), typically angled at 135 degrees. Use this for high-impact call-to-actions and brand moments.

**Neutral & Text**
Avoid pure black. Use a deep, toasted brown (#4A2E19) for primary body text and headings to maintain warmth and contrast against the cream background.

## Typography
The typography system balances playfulness with legibility. 
- **Headlines:** Use chunky, rounded sans-serifs (Plus Jakarta Sans) to mimic the "Fadone" style from the brand presentation.
- **Body:** Use DM Sans for its clean, geometric, yet friendly character. It remains highly readable at smaller sizes for order details and captions.
- **Accents:** Reserved for memory titles or emotional quotes. Use Playfair Display (Italic) or a dedicated handwritten-style font to provide a "signed with love" feeling.

*Note: For the accent font, ensure it is never used for functional UI labels or buttons, as it prioritizes personality over scanning speed.*

## Layout & Spacing
The layout follows a **fluid grid** optimized for mobile viewports, emphasizing a "photo-forward" experience.
- **Margins:** A standard 20px safe-area margin is applied to the left and right of the screen.
- **Gutter:** 16px between card elements to ensure they feel distinct but connected.
- **Rhythm:** Vertical spacing is generous (24px - 32px between sections) to prevent the "scrapbook" from feeling cluttered.
- **Content Reflow:** On larger devices (tablets), the memory feed transitions from a single-column list to a staggered masonry grid to enhance the tactile, non-linear feel of a real scrapbook.

## Elevation & Depth
Depth is conveyed through **soft, ambient shadows** rather than hard lines. 
- **Tonal Layers:** Cards sit on the cream background with a subtle, diffused shadow (Blur: 15px, Opacity: 8% of the primary brown text color).
- **Tactile Stacking:** Elements like the bottom navigation bar or floating action buttons use a slightly higher elevation to appear "pinned" or "taped" onto the page.
- **Depth Color:** Shadows should be tinted with a warm hue (e.g., a dark sienna) rather than neutral grey to keep the interface feeling organic.

## Shapes
The design system employs a **highly rounded** shape language to reinforce the "friendly and huggable" brand voice.
- **Primary Elements:** Buttons and Input fields use a pill-shape (full radius) for a playful, accessible look.
- **Containers:** Cards and image containers use a minimum of `1.5rem` (24px) corner radius.
- **Images:** Photos should frequently feature organic, slightly irregular masks (like soft-edged blobs) to mimic physical cut-outs from a scrapbook.

## Components
### Bottom Navigation
A fixed persistent bar with a blurred background. Icons should be "thick-stroke" or filled when active, colored in the primary Honey Glaze. Labels use `label-sm`.

### Buttons
- **Primary:** Full gradient (Honey Glaze to Tangerine Burst) with white text. Pill-shaped. Heavy drop shadow on hover/tap to feel "squishy."
- **Secondary:** Toasted brown outline or soft orange tint background with Honey Glaze text.

### Cards
Cards are the "snapshots" of the app.
- **Structure:** White background, 24px corner radius, 20px internal padding.
- **Media:** Images should be top-aligned with no top-radius or a matched radius to the container.
- **Shadows:** Soft, warm-tinted shadows only. No borders.

### Input Fields
Soft cream background (slightly darker than the page background) with a subtle inner shadow to feel "pressed" into the page. High rounded corners.

### Chips/Tags
Small, pill-shaped elements with a soft Tangerine Burst background at 10% opacity. Used for food categories or memory "moods."