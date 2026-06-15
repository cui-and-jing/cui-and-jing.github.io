---
title: 你好，世界！欢迎来到我的博客
date: 2026-06-15 10:00:00
tags:
  - 博客
  - Hexo
categories:
  - 技术
cover: https://picsum.photos/800/400?random=1
description: 这是我的第一篇博客文章，记录博客搭建的过程和心得。
---

## 前言

欢迎来到我的博客！这是使用 Hexo + Anzhiyu 主题搭建的个人博客。

## 为什么选择 Hexo？

Hexo 是一个快速、简洁且高效的博客框架，具有以下优点：

- **速度快**：基于 Node.js，生成速度极快
- **Markdown 支持**：使用 Markdown 写作，简单高效
- **丰富的主题**：拥有大量精美的主题可供选择
- **易于部署**：支持多种部署方式

## 为什么选择 Anzhiyu 主题？

Anzhiyu 是一个功能丰富、设计精美的 Hexo 主题，主要特点包括：

- 响应式设计，支持移动端
- 内置深色模式
- 支持多种评论系统
- 丰富的自定义选项
- 支持音乐播放器

## 博客搭建过程

### 1. 安装 Hexo

```bash
npm install hexo-cli -g
hexo init blog
cd blog
npm install
```

### 2. 安装 Anzhiyu 主题

```bash
cd themes
git clone https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git
```

### 3. 配置主题

编辑 `_config.anzhiyu.yml` 文件进行个性化配置。

### 4. 部署到 GitHub Pages

使用 GitHub Actions 实现自动部署。

## 后续计划

- 完善博客内容
- 配置评论系统
- 添加更多功能

## 结语

博客搭建完成，接下来就是持续输出优质内容了。希望这个博客能够帮助到更多人，也欢迎交流讨论！
