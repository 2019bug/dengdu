<div align="center">

# 灯都互联 - 照明展示页面

专注于光的价值，提供设计、研发、制造、方案、工程一站式照明解决方案。

<a href="https://2019bug.github.io/dengdu/">
  <img src="https://img.shields.io/badge/在线演示-访问-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white" alt="访问在线演示" />
</a>

**[在线体验 Demo →](https://2019bug.github.io/dengdu/)**

</div>

## 功能特性

- 交互式 3D 照明展示，基于 Three.js 和 HTML-in-Canvas 技术
- 物理模拟的吊灯摆动效果
- 实时调整灯光角度、亮度、色温和电源开关
- 鼠标拖拽控制灯光方向和摆动
- 智能渲染优化，场景静止时自动休眠

## 操作说明

| 操作 | 功能 |
| --- | --- |
| 左键拖拽 | 拉动和瞄准吊灯 |
| 释放 | 让吊灯自由摆动 |
| 右键拖拽 | 调整光束角度 |
| 右键点击 | 切换灯光颜色 |
| 双击 | 重置吊灯位置 |

## 技术栈

- [three-html-render](https://www.npmjs.com/package/three-html-render) — HTML-in-Canvas 渲染
- [Three.js](https://threejs.org/) — 3D 场景、材质和照明
- [React](https://react.dev/) 和 [TypeScript](https://www.typescriptlang.org/) — 界面和应用逻辑
- [Vinext](https://github.com/cloudflare/vinext) 和 [Vite](https://vite.dev/) — 开发和构建工具

## 本地开发

需要 Node.js 22.13 或更高版本。

```bash
git clone https://github.com/2019bug/dengdu.git
cd dengdu
npm install
npm run dev
```

代码检查：

```bash
npm run lint
npm test
```

## 致谢

基于 [@kaolti](https://x.com/kaolti) 的原创概念和视觉设计进行定制开发。

## 许可证

基于 [MIT License](./LICENSE) 发布。
