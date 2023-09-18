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
  - [ ] default.tsx ==> [Document is still being written](https://nextjs.org/docs/app/api-reference/file-conventions/default)
  - [ ] template.tsx
  - [x] (group-route)
  - [x] [dynamic-route]
  - [x] @folder-route （parallel-routes）
  - [ ] (..)route (intercepting-routes)
  - [x] router-action (Link + useRouter)
  - [ ] middleware
- Route-handler
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

## 测试异常的 DEMO

### 当前版本

```
Operating System:
      Platform: darwin
      Arch: arm64
      Version: Darwin Kernel Version 22.5.0: Thu Jun  8 22:22:23 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6020
    Binaries:
      Node: 20.5.1
      npm: 9.8.0
      Yarn: N/A
      pnpm: 8.6.12
    Relevant Packages:
      next: 13.4.19
      eslint-config-next: 13.4.19
      react: 18.2.0
      react-dom: 18.2.0
      typescript: 5.1.6
    Next.js Config:
      output: N/A
```

### 1. @folder-route:

根据官方文档给出的介绍 , 并行路由的层级是不会影响 url 的层级的

> Slots are not route segments and do not affect the URL structure. The file path /@team/members would be accessible at /members.

也就是说文件目录中的 folder/@folderLeft/test/page.tsx 应该是可以在 web 中通过 folder/test 来访问到的。 但是无论 folder/test 或者 folder/folderLeft/test 或者 folder/@folderLeft/test 我都无法命中路径。

### 2. socket 能力

我借鉴 next12 的方式尝试在 app-router 内建立客户端与 route-handler 的 socket 连接，测试了几种方式都没能成功建立起连接。目前官方 issue 中也指出了如果想要在 next13 中建立 socket 连接，仍然需要创建 pages 目录，app 路由目前暂不支持。

### 3. route-handler

> Route Handlers are cached by default when using the GET method with the Response object.

根据官方文档的描述，route-handler 会通过 GET 请求与 NextResponse 的共同作用，缓存 route-cache 的响应数据，只有在 [Opt out of cache](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#opting-out-of-caching) 时候才会关闭缓存的能力。
但是我在 /api/test-cache 目录中达成了如上的条件，开发环境中通过客户端多次访问该 api 的时候却仍然没有命中缓存。

### 4. cache

- prisma 读取数据库数据缓存：
  客户端访问 /prisma 页面时候会读取数据库内的 pokemon 条数。在开发模式下，更新数据库条数后刷新客户端页面， /prisma 页面会跟着重新请求条数，然而在 build 环境下，刷新页面，页面展示的数据库条数却并没有更新。
  我理解改组件是 静态 server-component ，在 build 的时候，会将 payload 全缓存在服务器内存中，用户访问时候通过 full-route-cache 命中（符合 build 环境的表现）。

- client 访问 api route handler
  在 client 组件中访问 route handler 的 api (/cache/api-cache 组件)，在 dev 模式下访问都正常，而在 build 过程中却直接报错，加了 `export const dynamic = "force-dynamic";` 却没有报错了。[issue](https://github.com/vercel/next.js/issues/55042)
  tips: 我已经知道 next13 中不推荐直接在 client 中直接调用服务的 route hanlder，而应该在 server-component 获取数据完传递给 client-component

### 5. 加载 script
用官方介绍的 Script 加载 jquery, 并且在 page.tsx 中读取 $, 系统报错（`Expected server HTML to contain a matching <script> in <html>.`）
使用方式 ↓
```
<Script
  strategy="beforeInteractive"
  src="https://code.jquery.com/jquery-3.7.1.js"
></Script>
```