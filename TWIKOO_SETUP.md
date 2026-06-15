# Twikoo 评论系统配置指南

## 简介

Twikoo 是一个简洁、安全的评论系统，支持多种部署方式。

## 部署步骤

### 方式一：使用 Vercel 部署（推荐）

1. **Fork Twikoo 仓库**
   - 访问 https://github.com/imaegoo/twikoo
   - 点击 Fork 按钮

2. **注册 Vercel 账号**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

3. **导入项目**
   - 点击 "New Project"
   - 选择你 Fork 的 Twikoo 仓库
   - 点击 "Deploy"

4. **获取环境 ID**
   - 部署完成后，Vercel 会分配一个域名（类似 `xxx.vercel.app`）
   - 这个域名就是你的 `envId`

### 方式二：使用腾讯云 CloudBase 部署

1. **注册腾讯云账号**
   - 访问 https://cloud.tencent.com

2. **开通云开发**
   - 进入云开发控制台
   - 创建环境

3. **部署 Twikoo**
   - 参考官方文档：https://twikoo.js.org/quick-start.html

## 配置博客

### 1. 修改主题配置

在 `_config.anzhiyu.yml` 中配置：

```yaml
# 评论系统 (Twikoo)
comments:
  use: twikoo
  text: true

twikoo:
  envId: https://your-vercel-app.vercel.app  # 替换为你的 Vercel 域名
  region:
  visitor: true
  option:
```

### 2. 在 Vercel 中配置环境变量（可选）

如果需要邮件通知等功能，需要在 Vercel 中配置环境变量：

- `TWIKOO_ADMIN_EMAIL`: 管理员邮箱
- `TWIKOO_MONGO_URL`: MongoDB 连接地址（可选）

## 功能说明

### 基本功能
- ✅ 评论发布
- ✅ 回复评论
- ✅ 点赞
- ✅ 评论通知（邮件/微信/QQ）
- ✅ 评论管理
- ✅ 反垃圾评论

### 管理后台
- 访问你的博客页面
- 点击评论区的"管理"按钮
- 设置管理员密码

## 常见问题

### Q: 评论区不显示？
A: 检查 `envId` 是否正确配置，确保 Vercel 部署成功。

### Q: 如何开启邮件通知？
A: 在 Vercel 环境变量中配置 `SMTP_SERVICE`、`SMTP_USER`、`SMTP_PASS` 等。

### Q: 如何自定义评论样式？
A: 可以通过 CSS 覆盖默认样式，参考 Twikoo 官方文档。

## 参考链接

- Twikoo 官方文档：https://twikoo.js.org
- Anzhiyu 主题文档：https://docs.anheyu.com
