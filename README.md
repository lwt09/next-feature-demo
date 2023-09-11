# NEST@latest-DEMO

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project was developed to test new features of next13.

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 技术相关

- [Next13](https://nextjs.org/docs/getting-started/installation)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [React](https://zh-hans.react.dev/)
- [Prisma](https://www.prisma.io/docs/getting-started/quickstart)
- [PostgreSQL](https://www.postgresql.org/docs/)

## 测试 FEATURE

- APP ROUTER
  - [x] page.tsx
  - [x] layout.tsx
  - [x] error.tsx
  - [x] loading.tsx
  - [x] not-found.tsx
  - [ ] default.tsx
  - [ ] template.tsx
  - [x] (group-route)
  - [x] [dynamic-route]
  - [x] @folder-route （parallel-routes）
  - [ ] (..)route (intercepting-routes)
  - [x] router-action (Link + useRouter)
  - [ ] middleware
- Route-handle
  - [x] route.tsx
  - [ ] cache (error!!)
- render
  - [x] server-component
    - [x] static-render
    - [x] dynamic-render
    - [x] stream-render
  - [x] client-component
  - [x] mix-component
- data-fetch
  - [x] fetch API
  - [x] cache
    - [x] broswer-router-cache
    - [x] full-route-cache
    - [x] request-memoization
    - [x] data-cache
- other
  - [x] load script
  - [x] meta data
  - [x] lazy-load
- db
  - [x] prisma
    - [x] postgresql
- socket
  - app 路由下暂不支持 socket, 看 issue 也是切了个 pages 目录出来写 socket
- build!
  - issue: 
    - to check
- next-cli
  - [ ] next.config.ts
  - [ ] cli action (eg. create-next-app)