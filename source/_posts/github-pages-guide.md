---
title: GitHub Pages 部署指南
date: 2026-06-15 12:00:00
tags:
  - GitHub
  - 部署
  - 教程
categories:
  - 技术
cover: https://picsum.photos/800/400?random=3
description: 详细介绍如何使用 GitHub Pages 部署静态网站，包括 GitHub Actions 自动部署。
---

## 什么是 GitHub Pages？

GitHub Pages 是 GitHub 提供的静态网站托管服务，可以直接从 GitHub 仓库托管网站。

## 部署方式

### 方式一：手动部署

使用 hexo-deployer-git 插件：

```bash
npm install hexo-deployer-git --save
hexo clean && hexo g && hexo d
```

### 方式二：GitHub Actions 自动部署（推荐）

创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy Hexo to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Generate static files
        run: npx hexo generate

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## 配置步骤

1. 在 GitHub 创建仓库 `username.github.io`
2. 推送代码到仓库
3. 进入仓库 Settings -> Pages
4. 选择 `gh-pages` 分支作为源
5. 等待部署完成

## 自定义域名

如果需要绑定自定义域名：

1. 在仓库根目录创建 `CNAME` 文件，内容为域名
2. 配置 DNS 解析
3. 在 GitHub Pages 设置中填写自定义域名

## 常见问题

### 部署失败

- 检查 Node.js 版本
- 查看 GitHub Actions 日志
- 确认依赖安装成功

### 页面无法访问

- 确认分支设置正确
- 检查 CNAME 配置
- 等待 DNS 生效

## 总结

GitHub Pages 是免费且可靠的静态网站托管服务，配合 GitHub Actions 可以实现自动化部署，非常适合个人博客和项目文档。
