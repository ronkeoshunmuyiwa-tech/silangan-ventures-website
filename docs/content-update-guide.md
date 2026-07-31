# Content Update Guide

| What | Where |
|---|---|
| Company name / tagline / description | `src/content/site.ts` |
| Navigation labels | `src/content/navigation.ts` |
| Homepage headline/CTAs | `src/content/homepage.ts` |
| About page copy | `src/content/about.ts` |
| Kalye AI page copy | `src/content/kalye-ai.ts` |
| Services/capabilities cards | `src/content/services.ts` |
| Contact page copy | `src/content/contact.ts` |
| Privacy / Disclaimer copy | `src/content/legal.ts` |

## Replacing an image
1. Add the new file to `public/images/<relevant-folder>/`.
2. Reference it in the relevant component using the Next.js `Image` component, e.g. `src="/images/company/example.webp"`.

## Previewing a change
Run `npm run dev`, open http://localhost:3000, and check the relevant page.

## Committing and pushing a change
```
git add .
git commit -m "Describe the change"
git push origin <branch-name>
```
Do this on a feature/setup branch, not directly on `main`.

## Changes that require Paula's approval
- Any change to messaging, claims, or positioning about Silangan Ventures or Kalye AI
- Any new page or navigation item
- Any change to what capabilities are described as available vs. in development
- Merging any branch into `main`
