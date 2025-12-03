# Dark Theme Refactoring Plan
## Statement.ai Landing Page - UI Transformation

**Date Created:** 2025-12-03
**Current Status:** Planning Phase
**Target Design:** Nebula AI Dark Theme with Teal Accents

---

## 📋 Executive Summary

Transform the Statement.ai landing page from a light theme with purple accents to a premium dark theme with teal/mint green accents, following modern SaaS design patterns inspired by Nebula AI.

### Key Changes
- **Background:** White → Deep black (#0a0a0a)
- **Accent Color:** Purple (#6c48fb) → Teal/Mint (#4ade80)
- **Design Pattern:** Clean light → Minimalist dark with glassmorphism
- **UI Components:** Update all shadcn/ui components to dark variants

---

## 🎨 Design System Overview

### Color Palette

#### Background Colors
- Primary: `#0a0a0a` (Deep black)
- Secondary: `#111111` (Dark charcoal)
- Card: `rgba(17, 17, 17, 0.8)` (Semi-transparent dark with backdrop blur)

#### Text Colors
- Primary: `#f5f5f5` (Off-white)
- Secondary: `#888888` (Muted gray)
- Muted: `#555555` (Very muted)

#### Accent Colors
- Primary Accent: `#4ade80` (Teal/mint green)
- Secondary Accent: `#2dd4bf` (Cyan/turquoise)
- Glow Effect: `rgba(74, 222, 128, 0.15)`

#### Border Colors
- Subtle: `rgba(255, 255, 255, 0.05)`
- Light: `rgba(255, 255, 255, 0.1)`

### Typography
- Font Family: Inter (already in use)
- Hero Headline: 48-64px, medium weight
- Section Headings: 32-40px, medium weight
- Body Text: 14-16px, regular weight with 1.6-1.8 line-height

### Border Radius
- Small: `8px`
- Medium: `12px`
- Large: `16px`
- Full/Pills: `9999px`

### Spacing
- Section vertical spacing: 100-150px
- Card internal padding: 24-32px
- Container max-width: 1200px

---

## 📂 Component Refactoring Checklist

### Phase 1: Foundation Layer
**Estimated Scope:** Core theming infrastructure

- [ ] **1.1 Tailwind Config (`tailwind.config.ts`)**
  - Update color tokens to dark theme
  - Add custom teal/mint accent colors
  - Add glow utility classes
  - Add backdrop-blur utilities
  - Configure extended border radius values

- [ ] **1.2 Global Styles (`app/globals.css`)**
  - Replace light theme CSS variables with dark values
  - Remove or update old purple accent values
  - Add new teal accent values
  - Add glassmorphism/backdrop-blur base styles
  - Add subtle grain/noise texture overlay (optional)
  - Update border colors to low-opacity white

- [ ] **1.3 Layout (`app/layout.tsx`)**
  - Add dark background to body/html
  - Verify font rendering on dark background
  - Update metadata if needed

---

### Phase 2: Core UI Components
**Estimated Scope:** Shadcn/ui component library updates

- [ ] **2.1 Button Component (`components/ui/button.tsx`)**
  - Update `default` variant: teal background, black text
  - Update `outline` variant: transparent bg, low-opacity border, white text
  - Update hover states with brightness/glow effects
  - Make CTAs pill-shaped (border-radius: 9999px)
  - Add subtle glow on hover for primary buttons

- [ ] **2.2 Card Component (`components/ui/card.tsx`)**
  - Update background to semi-transparent dark
  - Add backdrop-blur filter
  - Update border to low-opacity white
  - Increase border-radius to 12-16px
  - Add subtle inner shadow/glow
  - Update text colors to off-white

- [ ] **2.3 Input Component (`components/ui/input.tsx`)**
  - Dark background (#111)
  - Low-opacity border
  - Off-white text
  - Teal border glow on focus
  - Update placeholder to muted gray

- [ ] **2.4 Other UI Components (as needed)**
  - Accordion
  - Textarea
  - Select
  - Dialog/Modal overlays

---

### Phase 3: Layout Components
**Estimated Scope:** Header, navigation, footer

- [ ] **3.1 Navbar (`components/navbar.tsx`)**
  - Update background to dark with blur (`bg-black/80 backdrop-blur-md`)
  - Change logo color from purple to teal
  - Update link colors to muted gray, teal on hover
  - Update "Book a Call" button to teal pill button
  - Update mobile menu background to dark
  - Add subtle bottom border or shadow

- [ ] **3.2 Footer (`components/footer.tsx`)**
  - Change background from `slate-50` to dark (#0a0a0a or #111)
  - Update text colors to off-white/muted gray
  - Update social icons to teal accent
  - Update border colors to low-opacity white
  - Update button styling to match new design
  - "Let's talk" section with prominent email display

---

### Phase 4: Page Sections (app/page.tsx)
**Estimated Scope:** Individual landing page sections

- [ ] **4.1 Hero Section**
  - Remove light background
  - Update team photo placeholders (gradient from purple → teal/dark)
  - Update heading text colors to off-white
  - Update animated words to teal accent color
  - Update body text to muted gray
  - Update "Let's talk" button to teal pill with black text
  - Optional: Add hero glow effect (amber/teal gradient orb in background)

- [ ] **4.2 Services Section**
  - Update `ServiceCards` component background to dark card
  - Change icon backgrounds from purple to teal
  - Update icon colors to teal
  - Update text colors to off-white/muted gray
  - Update bullet points with teal accent dots
  - Ensure proper contrast on dark background
  - Update border and shadow styling

- [ ] **4.3 Our Process Section**
  - Change section background from `slate-50` to slightly different dark (#111 vs #0a0a0a)
  - Update `ProcessSteps` cards to dark theme
  - Update icon backgrounds to teal
  - Update hover states with teal border glow
  - Update text colors for readability
  - Add numbered labels (01, 02, 03, 04) in muted teal

- [ ] **4.4 About the Founder Section**
  - Update profile picture border/background (gradient from purple → teal/dark)
  - Update text colors to off-white/muted gray
  - Ensure bio text is readable on dark background

- [ ] **4.5 Book a Call Section**
  - Update text colors to off-white
  - Update purple accent text to teal
  - Verify Calendly widget displays correctly on dark background
  - May need custom CSS for Calendly iframe

---

### Phase 5: Custom Components
**Estimated Scope:** Unique/custom components

- [ ] **5.1 ServiceCards (`components/service-cards.tsx`)**
  - Update outer card background to dark semi-transparent
  - Add backdrop blur effect
  - Update icon container backgrounds to teal/10
  - Change icon colors from purple to teal
  - Update text hierarchy for dark theme
  - Update bullet point dots to teal
  - Update CTA button styling

- [ ] **5.2 ProcessSteps (`components/process-steps.tsx`)**
  - Update Card background to dark
  - Add low-opacity borders
  - Update icon backgrounds to teal accent
  - Update hover effects (teal border glow)
  - Add numbered step indicators if desired
  - Update text colors for contrast

- [ ] **5.3 AnimatedText (`components/animated-text.tsx`)**
  - Update animation colors from gray to teal
  - Ensure smooth transitions on dark background
  - Verify visibility/contrast

- [ ] **5.4 BookCallWidget (`components/book-call-widget.tsx`)**
  - Verify Calendly widget appearance
  - May need custom styling for dark theme compatibility
  - Update any form elements if present

---

## 🎯 Implementation Strategy

### Approach: Top-Down Sequential Refactoring

**Why this approach?**
- Establishes design system foundation first
- Cascading changes minimize redundant work
- Allows for visual verification at each stage
- Reduces risk of conflicting styles

### Implementation Order

1. **Foundation First** (Phase 1)
   - Set up color system in Tailwind
   - Update global CSS variables
   - This affects all downstream components

2. **Core UI Components** (Phase 2)
   - Update reusable components used across the site
   - Ensures consistency before touching page-specific code

3. **Layout Components** (Phase 3)
   - Navbar and Footer provide frame for all pages
   - Sets visual context for content

4. **Page Sections** (Phase 4)
   - Update each section sequentially
   - Test visual hierarchy and contrast
   - Verify responsive behavior

5. **Polish and Refinement** (Phase 5)
   - Fine-tune custom components
   - Add special effects (glows, gradients)
   - Performance optimization

---

## 📊 Progress Tracking

### Phase 1: Foundation Layer
**Status:** ⬜ Not Started
**Components:** 3
**Completed:** 0 / 3

| Component | Status | Notes |
|-----------|--------|-------|
| tailwind.config.ts | ⬜ | Core theme configuration |
| app/globals.css | ⬜ | CSS variables and base styles |
| app/layout.tsx | ⬜ | Root layout updates |

---

### Phase 2: Core UI Components
**Status:** ⬜ Not Started
**Components:** 4
**Completed:** 0 / 4

| Component | Status | Notes |
|-----------|--------|-------|
| components/ui/button.tsx | ⬜ | Primary CTA styling |
| components/ui/card.tsx | ⬜ | Card backgrounds and borders |
| components/ui/input.tsx | ⬜ | Form input styling |
| Other UI components | ⬜ | As needed basis |

---

### Phase 3: Layout Components
**Status:** ⬜ Not Started
**Components:** 2
**Completed:** 0 / 2

| Component | Status | Notes |
|-----------|--------|-------|
| components/navbar.tsx | ⬜ | Header navigation |
| components/footer.tsx | ⬜ | Footer section |

---

### Phase 4: Page Sections
**Status:** ⬜ Not Started
**Sections:** 5
**Completed:** 0 / 5

| Section | Status | Notes |
|---------|--------|-------|
| Hero Section | ⬜ | Main headline and CTA |
| Services Section | ⬜ | Service cards and descriptions |
| Our Process Section | ⬜ | Process steps cards |
| About the Founder | ⬜ | Founder bio and photo |
| Book a Call Section | ⬜ | Calendly integration |

---

### Phase 5: Custom Components
**Status:** ⬜ Not Started
**Components:** 4
**Completed:** 0 / 4

| Component | Status | Notes |
|-----------|--------|-------|
| components/service-cards.tsx | ⬜ | Services display |
| components/process-steps.tsx | ⬜ | Process workflow |
| components/animated-text.tsx | ⬜ | Text animations |
| components/book-call-widget.tsx | ⬜ | Calendly widget |

---

## 🎨 CSS Variables Reference

### Before (Current Light Theme)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262 83% 58%;  /* Purple */
  --primary-foreground: 210 40% 98%;
  /* ... etc */
}
```

### After (New Dark Theme)
```css
:root {
  /* Backgrounds */
  --background: 0 0% 4%;  /* #0a0a0a */
  --foreground: 0 0% 96%;  /* #f5f5f5 */

  /* Cards */
  --card: 0 0% 7%;  /* #111111 */
  --card-foreground: 0 0% 96%;

  /* Primary (Teal) */
  --primary: 142 69% 58%;  /* #4ade80 */
  --primary-foreground: 0 0% 0%;  /* Black text on teal */

  /* Secondary */
  --secondary: 0 0% 11%;  /* #1a1a1a */
  --secondary-foreground: 0 0% 96%;

  /* Muted */
  --muted: 0 0% 15%;
  --muted-foreground: 0 0% 53%;  /* #888888 */

  /* Accent (Teal variant) */
  --accent: 172 66% 50%;  /* #2dd4bf */
  --accent-foreground: 0 0% 96%;

  /* Borders */
  --border: 0 0% 100% / 0.05;  /* rgba(255,255,255,0.05) */
  --input: 0 0% 100% / 0.1;

  /* Ring (focus) */
  --ring: 142 69% 58%;  /* Teal */

  /* Border radius */
  --radius: 0.75rem;  /* 12px */
}
```

---

## 🔍 Testing Checklist

After each phase, verify:

- [ ] **Visual Consistency**
  - All text is readable (sufficient contrast)
  - Accent colors are consistent throughout
  - Spacing and alignment maintained

- [ ] **Component States**
  - Hover states work correctly
  - Focus states visible and accessible
  - Active/pressed states provide feedback

- [ ] **Responsive Design**
  - Mobile layout works on dark theme
  - Tablet breakpoints maintained
  - Desktop view is polished

- [ ] **Browser Compatibility**
  - Test in Chrome, Firefox, Safari
  - Verify backdrop-blur support
  - Check gradient rendering

- [ ] **Accessibility**
  - WCAG AA contrast ratios met (4.5:1 for normal text)
  - Focus indicators visible
  - Screen reader compatibility maintained

- [ ] **Performance**
  - No layout shift from theme changes
  - Smooth animations/transitions
  - Optimize any new background effects

---

## 🚨 Potential Challenges & Solutions

### Challenge 1: Calendly Widget on Dark Background
**Issue:** Calendly widget may have light theme default
**Solution:**
- Check Calendly embed options for dark mode
- Apply custom CSS to iframe if possible
- Consider adding a lighter background container around widget

### Challenge 2: Image/Photo Visibility
**Issue:** Profile photos may need borders for visibility
**Solution:**
- Add subtle teal glow or border around images
- Use semi-transparent gradient overlays
- Increase contrast on photo containers

### Challenge 3: Text Contrast Ratios
**Issue:** Muted text may not meet WCAG standards
**Solution:**
- Test all text colors with contrast checker
- Adjust gray values to meet AA standards
- Use slightly lighter grays for body text

### Challenge 4: Maintaining Brand Identity
**Issue:** Significant visual departure from current design
**Solution:**
- Progressive enhancement approach
- Keep layout/structure identical
- Focus on color/theme changes only
- Preserve content hierarchy

---

## 📝 Notes for Implementation

### Best Practices
1. **Test incrementally** - Don't refactor everything at once
2. **Keep backups** - Commit after each phase
3. **Check contrast** - Use browser tools to verify readability
4. **Maintain consistency** - Stick to the defined color palette
5. **Document changes** - Update this file as you progress

### Git Strategy
- Create feature branch: `feature/dark-theme-refactor`
- Commit after each phase completion
- Tag major milestones
- Merge to main when fully tested

### Status Legend
- ⬜ Not Started
- 🔄 In Progress
- ✅ Completed
- ⚠️ Blocked/Issues
- 🧪 Testing

---

## 🎬 Next Steps

1. **Review this plan** with stakeholders
2. **Set up development environment**
3. **Create feature branch**
4. **Begin Phase 1**: Foundation Layer
5. **Update progress tracking** after each component

---

**Last Updated:** 2025-12-03
**Document Version:** 1.0
