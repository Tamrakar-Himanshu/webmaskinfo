## Deploying to Amazon S3 (Static Hosting)

This project is configured for static export via `output: "export"` in `next.config.ts`. That produces a pre-rendered site in `out/` suitable for S3 static hosting.

Important: API routes (e.g. `app/api/contact`) are not supported on S3 static hosting. The contact form will not submit on S3 unless you wire it to an external service or a Lambda/API Gateway endpoint.

### Prerequisites
- AWS CLI installed and authenticated (`aws configure`)
- An S3 bucket created (e.g. `my-webmask-bucket`) with public read or CloudFront in front

### Build the site

```bash
npm run build
```

This generates the static site in `out/` automatically because of `output: export`.

### Deploy to S3

Set your bucket name in an environment variable:

```bash
set S3_BUCKET=my-webmask-bucket
```

Then deploy (Windows CMD):

```bash
set S3_BUCKET=my-webmask-bucket
npm run deploy:s3:win
```

This command:
On macOS/Linux:

```bash
export S3_BUCKET=my-webmask-bucket
npm run deploy:s3:nix
```

- Syncs all assets in `out/` to `s3://$S3_BUCKET`
- Sets long cache headers for static assets
- Uploads `index.html` and `404.html` with no-cache headers for correct refresh behavior

### Recommended: CloudFront
For best performance and TLS, put CloudFront in front of the S3 bucket and:
- Default root object: `index.html`
- Custom error response for 404s → `/404.html` (404)
- Cache policies: long TTL for static assets, no-cache for HTML

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
