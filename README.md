这是一个以樱桃小丸子为主题的web前端学习项目，包含了QAnything智能问答服务等，画面色彩丰富且有趣，一起来学习前端开发技术吧。

项目概述

本项目使用Next.js框架，结合HTML、CSS、JavaScript和React技术，实现了以下核心功能：


课程练习展示：以组件化方式组织和展示作业


编码时长统计：通过WakaTime API获取并展示个人编码时长数据


智能问答服务：通过iframe嵌入QAnything提供的问答界面



QAnything集成路径


选择路径：基础路径（HTML页面嵌入）

实现细节：


在/qanything路由下创建专用页面


课程整合方式

在/app/exercises目录下为每个练习创建独立路由


使用Next.js的App Router实现路由管理

在练习导航页（/exercises）提供所有练习的链接入口


采用组件化开发思想，将重复UI元素抽象为可复用组件


项目运行指南

项目运行指南
前提条件
Node.js 18.x或更高版本
npm包管理器
WakaTime API密钥

运行截图
![08ed9208c78cbd56533f7ec9490e5a0](https://github.com/user-attachments/assets/b3976d3d-35ec-42f5-9aea-e84168dbbeb4)
![5e28f9ee9535d32c12db151826a650e](https://github.com/user-attachments/assets/281c8101-3635-479d-888a-f8b2cd4c7913)

![9065467334bad04765611ee5428f765](https://github.com/user-attachments/assets/b835038f-fa58-45c0-b7ed-d91bb48d97ae)


