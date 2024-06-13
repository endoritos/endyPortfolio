This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Extra steps after deployment

If you encounter an issue where you make a change on Prismic and can see the change on the Prismic preview but not on your deployed website (this may not occur when running on localhost), this problem arises due to how caching is handled.

To fix this, you need to set up webhooks and a cURL API to clear the cache when a change is made. This ensures that new information is loaded when you update something on your external website or Prismic.

You can find the source code to do this here: [GitHub Source Code](https://github.com/endoritos/endyPortfolio/blob/master/app/api/cron/route.ts).

Here is an example of how you should set up your webhook: [Webhook Setup Example](https://documenter.getpostman.com/view/2sA3XPD2vF?version=latest#intro).
