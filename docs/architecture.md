# Architecture

- Use `src/app/` only for routes, layouts, metadata, and Next.js-specific resources. Delegate screen
  implementations to `src/screens/`.
- Give every screen its own folder with `index.tsx` and `styles.module.css`.
- Keep screen-specific components inside that screen's `components/` folder. Each component has its
  own folder with `index.tsx` and `styles.module.css`.
- Use `src/components/` only for components reused across different screens. Follow the same
  component folder structure; avoid premature global abstractions.
- Use colocated CSS Modules. Reserve `src/app/globals.css` for global styles and variables.
- Store monochromatic SVG icons in `src/assets/icons/`. Use `currentColor` for all visible fills and
  strokes; `none` is allowed. Set color through JSX props or CSS.
- Store illustrations in `src/assets/illustrations/` and logos in `src/assets/logos/`. These assets
  may retain multiple colors.
- Import every SVG directly as a React component through SVGR and render it in JSX. Do not render
  SVGs through image URLs, image components, or inline SVG markup.
- Use `src/hooks/`, `src/services/`, `src/utils/`, `src/types/`, and `src/constants/` for shared
  hooks, integrations, utilities, types, and constants, respectively. Create these directories when
  needed.
- Prefer Server Components. Add `"use client"` only when necessary.
- Use the `@/` alias for internal imports; it resolves to `src/`.

```tsx
import SearchIcon from "@/assets/icons/search.svg";

<SearchIcon color="#ffffff" aria-label="Search" />;
```
