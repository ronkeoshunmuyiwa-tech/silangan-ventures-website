# Project Notes

Running log of setup decisions. Add an entry whenever a file-conflict or notable decision is made per Step 5.15.

| Date | Decision | Reason |
|---|---|---|
| _(fill in)_ | Hand-authored the Next.js project structure instead of running `create-next-app` directly | Files were generated in an offline environment without network access to run the scaffolding tool; the resulting file set matches the standard `create-next-app` (TypeScript + Tailwind + ESLint + App Router + src directory) output so `npm install` on a normal machine should behave the same way. |
