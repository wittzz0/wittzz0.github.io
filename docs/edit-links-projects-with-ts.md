# 通过 TS 文件维护 Links 和 Projects 页面

本项目已经把 `Links` 与 `Projects` 页面内容集中到 TS 数据文件。

## 1. 你需要编辑的文件

- Links 数据：`src/data/links.ts`
- Projects 数据：`src/data/projects.ts`

页面模板文件已改为读取上述数据，通常不需要再改：

- `src/pages/links/index.astro`
- `src/pages/projects/index.astro`

## 2. 如何编辑 Links 页面

编辑 `src/data/links.ts` 中的 `linksData`：

```ts
export const linksData = {
  friends: [
    {
      id_name: 'cf-links',
      desc: 'Common links included in circle friends',
      link_list: [
        {
          name: "Arthals' ink",
          intro: '所见高山远木，阔云流风；所幸岁月盈余，了无拘束',
          link: 'https://arthals.ink/',
          avatar: 'https://cdn.arthals.ink/Arthals.png'
        }
      ]
    }
  ]
}
```

`friends` 数组约定：

- `friends[0]`：Common Links
- `friends[1]`：Links with Bad Status
- `friends[2]`：Special Links

每个链接对象字段：

- `name`：名称
- `intro`：简介
- `link`：跳转地址
- `avatar`：头像地址
- `avatar_cache`：可选，缓存头像信息

## 3. 如何编辑 Projects 页面

编辑 `src/data/projects.ts` 中的 `projectsPageData`：

```ts
export const projectsPageData = {
  programs: [],
  oldProjects: [],
  learnings: [],
  others: []
}
```

字段含义：

- `programs`：Programs 区块
- `oldProjects`：Some old projects 折叠区块
- `learnings`：Learnings 区块
- `others`：Others 区块

每个项目对象字段：

- `name`：项目名
- `description`：项目描述
- `links`：链接数组（至少 1 条）
- `image`：可选，项目图片文件名（放在 `src/assets/projects/`）

`links` 内可用 `type`：

- `github`
- `site`
- `doc`
- `release`

## 4. 与 `public/links.json` 的关系

`public/links.json` 仍保留用于兼容，但它由 TS 自动同步生成。

- 手动同步命令：`bun run sync:links`
- 构建前自动执行：`prebuild -> sync:links`

建议：把 `src/data/links.ts` 作为唯一编辑入口，不要手改 `public/links.json`。

## 5. 推荐编辑流程

1. 修改 `src/data/links.ts` 或 `src/data/projects.ts`
2. 执行 `bun run check`
3. 执行 `bun run build`（会自动同步 links.json）
4. 预览确认：`bun preview` 或 `bun dev`

## 6. 常见问题

- 图标不显示：检查 `links.type` 是否为 `github/site/doc/release` 之一。
- 页面没更新：确认你改的是 `src/data/*.ts`，不是旧的内嵌数组。
- Links JSON 不一致：执行 `bun run sync:links` 或直接 `bun run build`。

## 7. Edit Sponsorship by TS

Sponsorship content on `Projects` is now also data-driven.

Edit `src/data/projects.ts` in `projectsPageData.sponsorship`:

```ts
sponsorship: {
  title: 'Sponsorship',
  actions: [
    {
      key: 'buy-me-a-coffee',
      label: 'Buy Me a Coffee',
      icon: 'receive-money',
      type: 'link',
      href: 'https://ko-fi.com/cworld0',
      target: '_blank'
    },
    {
      key: 'wechat-pay',
      label: 'WeChat',
      icon: 'wechat-pay',
      type: 'hover-qrcode',
      qrImage: wechatQRCode,
      qrAlt: 'WeChat Pay QR Code'
    }
  ],
  contact: {
    introText: 'Please contact me proactively after sponsorship. My email is',
    email: 'cworld0@qq.com',
    suffixText: '.'
  },
  thanks: {
    title: 'Thanks to the following sponsors:',
    progressMax: 50,
    items: [
      { name: 'Juyao Huang', amount: 5, date: '2026-01-15' }
    ]
  }
}
```

- Change Buy Me a Coffee link: update `href` on the `link` action.
- Change WeChat QR image: import another image and replace `qrImage`.
- Change sponsorship email text/link: update `contact.introText` / `contact.email` / `contact.suffixText`.
- Edit sponsor thanks list: update `thanks.items` (`name`, `date`, `amount`).
- Sponsor platform is no longer displayed in the thanks list.
- The page template no longer needs hardcoded payment text, email, or sponsor list.
