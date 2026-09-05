# Portfolio

Personal site and project archive — built with Next.js, TypeScript, and
Tailwind CSS.

**Live:** [shrutidhungana.com.np](https://www.shrutidhungana.com.np/)

## Stack

- [Next.js](https://nextjs.org/) (Pages Router)
- TypeScript
- Tailwind CSS
- Framer Motion for transitions

## Structure

| Route | Contents |
|---|---|
| `/` | Identity, current role, stack, and a snapshot of what I work across |
| `/projects` | Shipped projects, with the flagship case study first |
| `/experience` | Roles, with the engineering work behind each |
| `/writing` | Technical notes |
| `/about` | Background and education |
| `/resume` | Downloadable resume |

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint     # eslint
```

## Design

Warm-neutral palette, restrained motion, no template filler. Design tokens
and layout decisions live in `src/styles/globals.css` and
`tailwind.config.ts`.
