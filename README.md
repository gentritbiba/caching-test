# Next.js Cache Revalidation Testing

This repository is designed to test and demonstrate caching behaviors and revalidation issues with Vercel servers when using Next.js. It serves as a testing ground for understanding how different caching strategies and revalidation approaches work in a production environment.

## Purpose

- Test cache revalidation patterns in Next.js
- Identify potential issues with Vercel's caching mechanism
- Document behavior of different caching strategies
- Provide reproducible test cases for cache-related issues

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gentritbiba/caching-test
cd caching-test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables


4. Run the development server:
```bash
npm run build
npm run start
```

5. Verify that cache revalidation is working locally

6. Deploy to Vercel and check if cache revalidation is working on Vercel



## Known Issues

Vercel doesn't revalidate cache when using `revalidateTag` or `revalidatePath` in server actions.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/) (Deployment Platform)
- [Prisma](https://www.prisma.io/) (Database ORM)
