Installing contentlayer adds intellisense and support of .md files in JS or TS files, only with NPM, not with PNPM, e.g.

```js
const content = await import('../test.md');
```

This above code line works if Contentlayer is installed by **NPM**.
If Contentlayer is installed by **PNPM the line does not work** and VSC shows error _"Modul or type classification not found"_.

I have tested it without NextJS, e.g. Svelte. It does not need a `contentlayer.config.js`.

This issue can be reproduced, have a look at this simple example / repository [https://github.com/git-no/contentlayer-pnpm-issue](https://github.com/git-no/contentlayer-pnpm-issue).

## Steps to reproduce:

1. Clone this [git repository](<[https://github.com/git-no/contentlayer-pnpm-issue](https://github.com/git-no/contentlayer-pnpm-issue)>)
2. Run `npm install`, open/reload VSC, look into file src/routes/+page.ts, line 7. No error and intellisense of '../' shows the .md file.
3. Switch from NPM to PNPM, delete `node_modules` directory and `package-lock.json`file.
4. Run `pnpm install`, open/reload VSC, look into file src/routes/+page.ts, line 7. Error and NO intellisense of '../' with .md file.

Does anyone have a hint to fix this?
