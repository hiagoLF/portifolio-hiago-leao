<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your
training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's
directory; in monorepos the `next` package may not be visible from the repo root) before writing any
code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at
`node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates
the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules

- Write code, identifiers, comments, and documentation in English. User-facing content follows the
  portfolio's intended audience.
- Use tabs, double quotes, semicolons, and consistent Prettier formatting.
- Limit all authored lines to 100 characters. Exclude generated files, lockfiles, and SVG lines that
  cannot be split without changing their content.
- Run `npm run lint` after every implementation and resolve all failures.
- Follow [the architecture rules](docs/architecture.md) for every implementation.
