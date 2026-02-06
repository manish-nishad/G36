# Service Pages — UI & Content Specification

Consistent structure for all Genius36 Technologies service detail pages.  
**Source of truth:** `servicePagesContent.js` (used by `ServiceSingle.jsx`).

---

## 1. Page URL slugs (SEO-friendly)

| # | Service | Slug |
|---|---------|------|
| 1 | Website & Mobile App Development | `website-mobile-app-development` |
| 2 | UI/UX & Responsive Design Services | `ui-ux-responsive-design` |
| 3 | E-Commerce Solutions & Platforms | `ecommerce-solutions-platforms` |
| 4 | Digital Marketing & SEO Services | `digital-marketing-seo` |
| 5 | Cloud, Cybersecurity & IT Consultancy | `cloud-cybersecurity-it-consultancy` |
| 6 | AI/ML Training & Technology Workshops | `ai-ml-training-workshops` |
| 7 | Labs Setup & 3D Printing Services | `labs-setup-3d-printing` |

**Routes:** `/services/:slug` (e.g. `/services/website-mobile-app-development`)

---

## 2. Page title (consistent with services menu)

Each page uses `seo.metaTitle` as the document title. Format:  
`{Service Name} | {Short differentiator} | Genius36 Technologies`

---

## 3. Breadcrumb

- **Format:** `Home > Services > {Service Name}`
- **Implementation:** Chakra `Breadcrumb`; Home and Services are `RouterLink` to `/` and `/services`; current page is `BreadcrumbLink` (no `to`).

---

## 4. Hero banner

| Field | Description |
|-------|-------------|
| **headline** | H1, main value proposition |
| **subheadline** | Supporting line below H1 |
| **image** | Full URL (Unsplash/static). Full-width under gradient overlay |
| **imageAlt** | Accessibility-friendly alt text |

**Layout:** Image with blue gradient overlay; headline and subheadline bottom-left. Responsive height: `280px` (base), `400px` (md), `480px` (lg).

---

## 5. SEO section

| Field | Purpose |
|-------|---------|
| **metaTitle** | `<title>` and OG title |
| **metaDescription** | Meta description and OG description |
| **focusKeywords** | Array of target keywords (for reference; not rendered in HTML) |

---

## 6. Service description

| Block | Content |
|-------|---------|
| **overview** | 2–4 sentence summary |
| **targetAudience** | Who the service is for |
| **useCases** | Bullet list of 4–5 typical use cases |

**Layout:** Overview full-width; Target audience and Use cases in a 2-column grid (1 col on mobile).

---

## 7. Key features

- **Format:** Bullet list with CheckCircle icon
- **Layout:** 2-column grid (1 col mobile), centered, max-width container
- **Count:** 5–7 items per service

---

## 8. Benefits

- **Format:** Short phrases in pill/chip-style blocks (border, rounded)
- **Layout:** `Wrap` / flex, centered
- **Count:** 4 items per service

---

## 9. Visual / feature blocks

- **Layout:** 2-column grid (1 col mobile, 2 col `lg`)
- **Per block:** Lucide icon (in blue gradient circle) + title + short description
- **Icon names in data:** `Globe`, `Smartphone`, `Layout`, `Palette`, `ShoppingCart`, `CreditCard`, `Search`, `BarChart3`, `Cloud`, `Shield`, `Cpu`, `Bot`, `Monitor`, `Box`

---

## 10. Process section

- **Title:** `"Website Designed & Developed in Just 5 Steps"` (or service-specific variant in data)
- **Steps:** 5 numbered items; each = one sentence
- **Layout:** Vertical stack; each step = number in circle + text in a subtle card

---

## 11. CTAs

| Type | Style | Data fields |
|------|-------|-------------|
| **Primary** | Filled `#0951d8`, `size="lg"`, ArrowRight icon | `cta.primary.label`, `cta.primary.to` |
| **Secondary** | Outline, blue border and text | `cta.secondary.label`, `cta.secondary.to` |

**Placement:** Centered, in a light gray rounded section after the process.

---

## 12. Page footer

| Element | Description |
|---------|-------------|
| **Related services** | Horizontal, scrollable row of cards; each links to `/services/{slug}`. Data: `relatedServices` (array of 3 slugs). |
| **Contact / support** | “Get in touch” → `/contact`, phone, email |
| **Social links** | Facebook, Instagram, YouTube, LinkedIn (same URLs as main site footer) |

---

## Typography & spacing (uniform)

- **H1 (hero):** `2xl`–`4xl` responsive, white on overlay
- **H2 (sections):** `xl`–`2xl`, `gray.900`
- **H3:** `lg`, `gray.900`
- **Body:** `md`–`lg`, `gray.700`, `lineHeight` 1.6–1.8
- **Section padding:** `py={{ base: 8, md: 12 }}` (or 10/14 for hero-adjacent)

---

## CTA button standards

- **Primary:** `bg="#0951d8"`, `color="white"`, `_hover={{ bg: "#073fa6" }}`, `size="lg"`
- **Secondary:** `variant="outline"`, `colorScheme="blue"`, `borderColor="#0951d8"`, `color="#0951d8"`

---

## Icon set (Lucide)

Used in feature blocks and process:

- `Globe`, `Smartphone`, `Layout`, `Palette`, `ShoppingCart`, `CreditCard`
- `Search`, `BarChart3`, `Cloud`, `Shield`, `Cpu`, `Bot`, `Monitor`, `Box`
- `CheckCircle`, `ArrowRight`, `ChevronRight`

---

## Accessibility

- All images: meaningful `alt` from `hero.imageAlt` or block-level descriptions
- Headings: `h1` → `h2` → `h3` in order
- Links: `RouterLink` / `Link` with clear text; external: `target="_blank"`, `rel="noopener noreferrer"`
- Social links: `aria-label` where only the icon is shown
