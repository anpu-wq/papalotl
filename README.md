这是一个基于Next.js构建的Web应用，整合了个人课程练习展示、WakaTime编码时长统计和QAnything智能问答服务。
项目概述


本项目使用Next.js框架，结合HTML、CSS、JavaScript和React技术，实现了以下核心功能：

课程练习展示：以组件化方式组织和展示所有课程练习
编码时长统计：通过WakaTime API获取并展示个人编码时长数据
智能问答服务：通过iframe嵌入QAnything提供的问答界面
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

QAnything集成路径
选择路径：基础路径（HTML页面嵌入）

实现细节：

在/qanything路由下创建专用页面
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
