<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="Life Progress Bar" />
 <h2 align="center">Life Progress Bar</h2>
 <p align="center">在你的 GitHub 首页生成你的人生进度条！</p>
</p>

  <p align="center">
    <a href="#demo">查看 Demo</a>
    ·
    <a href="https://github.com/babbittry/life-progress-bar/issues/new/choose">报告 Bug</a>
    ·
    <a href="https://github.com/babbittry/life-progress-bar/issues/new/choose">请求增加功能</a>
  </p>
  <p align="center">
    <a href="/docs/readme_en.md">English</a>
    ·
    <a href="readme.md">简体中文</a>
  </p>
## 目录

- [人生进度条卡片](#人生进度条卡片)
- [主题](#主题)
- [自定义](#自定义)
- [自己部署](#自己部署)

## 人生进度条卡片

_注意：人生进度条卡片并不表示你具体能活多少年，它是用平均寿命来衡量用户的期望寿命，并不负有任何医学、伦理上的责任。_

### 使用细则

将这行代码复制到你的 `README.md` 文件中，就是如此简单！

更改 `?username=` 的值为你的 GitHub 用户名。

```md
[![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry)](https://github.com/babbittry/life-progress-bar)
```

[![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry)](https://github.com/babbittry/life-progress-bar)

### 隐藏指定项目

想要隐藏指定项目信息，你可以调用参数 `?hide=`，其值用 `,` 分隔。

> 选项：`&hide=day,week,month,year,lifetime`

```md
![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&hide=day,week)
```

![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&hide=day,week)

### 显示图标

如果想要显示图标，你可以调用 `show_icons=true` 参数，像这样：

```md
![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&show_icons=true)
```

![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&show_icons=true)

### 主题

你可以从[默认主题](#主题)中进行选择，对现有的主题进行卡片个性化，省去[手动自定义](#自定义)的麻烦。

通过调用 `?theme=THEME_NAME` 参数，像这样：

```md
![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&show_icons=true&theme=radical)
```

![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&show_icons=true&theme=radical)

#### 所有现有主题

dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

<img src="https://res.cloudinary.com/babbittry/image/upload/v1595174536/grs-themes_l4ynja.png" alt="GitHub Readme Stat Themes" width="600px"/>

你可以预览[所有可用主题](../themes/README.md)或者签出[主题配置文件](../themes/index.js), 而且如果你喜欢, **你也可以贡献新的主题** :D

### 自定义

你可以通过使用 URL 参数的方式，为你的 `Stats Card` 或 `Repo Card` 自定义样式。

常用选项：

- `title_color` - 卡片标题颜色 _（十六进制色码）_
- `text_color` - 内容文本颜色 _（十六进制色码）_
- `icon_color` - 图标颜色（如果可用）_（十六进制色码）_
- `bg_color` - 卡片背景颜色 _（十六进制色码）_ **或者** 以 _angle,start,end_ 的形式渐变
- `hide_border` - 隐藏卡的边框 _(布尔值)_
- `theme` - 主题名称，从[所有可用主题](../themes/README.md)中选择
- `cache_seconds` - 手动设置缓存头 _（最小值: 1800，最大值: 86400）_
- `locale` - 在卡片中设置语言 _(例如 cn, en)_

#### bg_color 渐变

你可以在 bg_color 选项中提供多个逗号分隔的值来呈现渐变，渐变的格式是 :-

```
&bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10
```

> 缓存的注意事项: 如果 fork 数和 star 数 少于 1k , Repo 卡片默认缓存是 4 小时 （14400 秒） ，否则是 2 小时（7200）。另请注意缓存被限制为最短 2 小时，最长 24 小时。

#### 语言卡片专属选项:

- `hide` - 从卡片中隐藏指定语言 _(Comma seperated values)_
- `hide_title` - _(boolean)_
- `show_icons` - _(boolean)_
- `card_width` - 手动设置卡片的宽度 _(number)_

---

- 渐变

![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&bg_color=30,e96443,904e95&title_color=fff&text_color=fff)

- 自定义统计卡片

![babbittry's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&show_icons=true&title_color=fff&icon_color=79ff97&text_color=9f9f9f&bg_color=151515)

---

### 快速提示 (对齐 Repo 卡片)

你通常无法将图片靠边显示。为此，您可以使用以下方法：

```md
<a href="https://github.com/babbittry/life-progress-bar">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=babbittry&repo=github-readme-stats" />
</a>
<a href="https://github.com/babbittry/convoychat">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=babbittry&repo=convoychat" />
</a>
```

## 自己部署

#### [Check Out Step By Step Video Tutorial By @codeSTACKr](https://youtu.be/n6d4KHSKqGk?t=107)

因为 GitHub 的 API 每个小时只允许 5 千次请求，我的 `https://github-readme-stats.vercel.app/api` 很有可能会触发限制。如果你将其托管在自己的 Vercel 服务器上，那么你就不必为此担心。点击 deploy 按钮来开始你的部署！

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/babbittry/life-progress-bar)

<details>
 <summary>设置 Vercel 的指导</summary>

1. 前往 [vercel.com](https://vercel.com/)
1. 点击 `Log in`
   ![](https://files.catbox.moe/tct1wg.png)
1. 点击 `Continue with GitHub` 通过 GitHub 进行登录
   ![](https://files.catbox.moe/btd78j.jpeg)
1. 登录 GitHub 并允许访问所有存储库（如果系统这样提示）
1. Fork 这个仓库
1. 返回到你的 [Vercel dashboard](https://vercel.com/dashboard)
1. 选择 `Import Project`
   ![](https://files.catbox.moe/qckos0.png)
1. 选择 `Import Git Repository`
   ![](https://files.catbox.moe/pqub9q.png)
1. 选择 root 并将所有内容保持不变，并且只需添加名为 PAT_1 的环境变量（如图所示），其中将包含一个个人访问令牌（PAT），你可以在[这里](https://github.com/settings/tokens/new)轻松创建（保留默认，并且只需要命名下，名字随便）
   ![](https://files.catbox.moe/caem5b.png)
1. 点击 deploy，这就完成了，查看你的域名就可使用 API 了！

</details>

---

## TODO：

- 显示一个人已经度过了多少天
- 显示一句古诗或名言