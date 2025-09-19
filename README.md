# 大象的賽博博客 🐘

這是孫晟赫（大象）的個人博客網站，使用 React 和 Vite 構建，採用賽博朋克風格設計。

## 👋 關於我

我是孫晟赫，大家都喜歡叫我大象！我是一名對計算機科學充滿熱情的學習者，正在不斷探索技術的邊界。

## 🚀 特性

- **賽博朋克風格設計**: 使用霓虹色彩和酷炫動畫效果
- **個人化內容**: 展示我的學習經歷和技術技能
- **響應式佈局**: 適配桌面端和移動端
- **現代化技術棧**: React + Vite + CSS3

## 🛠️ 技術棧

- **前端框架**: React 18
- **構建工具**: Vite 7
- **樣式**: CSS3 (原生CSS變量和動畫)
- **字體**: Courier New (等寬字體，增強賽博感)

## 📁 項目結構

```
src/
├── components/          # React 組件
│   ├── Header.jsx      # 頂部導航組件
│   ├── Hero.jsx        # 主頁英雄區域（個人介紹）
│   ├── About.jsx       # 關於大象的詳細信息
│   ├── Skills.jsx      # 技術技能展示
│   ├── BlogSection.jsx # 博客文章列表
│   ├── Footer.jsx      # 頁腳組件
│   └── *.css          # 對應的樣式文件
├── cyber-theme.css     # 主題樣式定義
├── App.jsx            # 主應用組件
├── App.css            # 應用樣式
└── index.css          # 全局樣式入口
```

## 🎨 設計特點

### 色彩方案
- 主背景: 深色調 (#0a0a0f, #111118)
- 霓虹色彩: 青色 (#00ffff), 紫色 (#ff00ff), 綠色 (#00ff41)
- 文字: 白色系漸變

### 視覺效果
- 故障效果 (Glitch) 動畫
- 霓虹發光效果
- 掃描線動畫
- 網格背景
- 終端機風格界面

## 🚀 開發指南

### 安裝依賴
```bash
npm install
```

### 啟動開發服務器
```bash
npm run dev
```

### 構建項目
```bash
npm run build
```

### 預覽構建結果
```bash
npm run preview
```

## 📝 待完善功能

1. **博客系統**: 實現真實的博客文章管理
2. **項目展示**: 添加項目作品集頁面  
3. **聯繫表單**: 實現聯繫功能
4. **深色/淺色主題切換**: 提供主題選擇
5. **國際化**: 支持多語言
6. **SEO優化**: 改善搜索引擎優化

## 🎯 使用說明

當前版本包含了基礎的頁面結構和示例內容。要添加您的個人信息:

1. 修改 `Hero.jsx` 中的個人介紹文字
2. 更新 `About.jsx` 中的技能和背景信息  
3. 在 `BlogSection.jsx` 中添加真實的博客文章
4. 根據需要調整顏色主題和動畫效果

## 📱 響應式設計

網站完全響應式，在以下設備上都能良好顯示:
- 桌面電腦 (1200px+)
- 平板電腦 (768px-1199px) 
- 手機 (<768px)

## 🔧 自定義主題

所有的顏色和樣式變量都定義在 `cyber-theme.css` 中，您可以輕鬆修改:

```css
:root {
  --cyber-neon-cyan: #00ffff;    /* 主要霓虹色 */
  --cyber-neon-purple: #ff00ff;  /* 次要霓虹色 */
  --cyber-bg: #0a0a0f;          /* 主背景色 */
  /* ... 更多變量 */
}
```

---

🌟 享受在賽博世界中的創作之旅！+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
