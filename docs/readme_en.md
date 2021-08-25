<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Life Progress Bar</h2>
 <p align="center">Display life progress on your readmes!</p>
</p>
  <p align="center">
    <a href="#demo">View Demo</a>
    ·
    <a href="https://github.com/babbittry/life-progress-bar/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/babbittry/life-progress-bar/issues/new/choose">Request Feature</a>
  </p>
  <p align="center">
    <a href="/docs/readme_en.md">English</a>
    ·
    <a href="readme.md">简体中文</a>
  </p>



# Features

- [GitHub Stats Card](#github-stats-card)
- [GitHub Extra Pins](#github-extra-pins)
- [Life Progress Bar](#Life Progress Bar)
- [Wakatime Week Stats](#wakatime-week-stats)
- [Themes](#themes)
- [Customization](#customization)
- [Deploy Yourself](#deploy-on-your-own-vercel-instance)

# GitHub Stats Card

Copy-paste this into your markdown content, and that's it. Simple!

Change the `?username=` value to your GitHub's username.

```md
[![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry)](https://github.com/babbittry/github-readme-stats)
```

_Note: Available ranks are S+ (top 1%), S (top 25%), A++ (top 45%), A+ (top 60%), and B+ (everyone).
The values are calculated by using the [cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function) using commits, contributions, issues, stars, pull requests, followers, and owned repositories.
The implementation can be investigated at [src/calculateRank.js](./src/calculateRank.js)_

### Hiding individual stats

To hide any specific stats, you can pass a query parameter `?hide=` with comma-separated values.

> Options: `&hide=stars,commits,prs,issues,contribs`

```md
![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&hide=contribs,prs)
```


### Showing icons

To enable icons, you can pass `show_icons=true` in the query param, like so:

```md
![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&show_icons=true)
```

### Themes

With inbuilt themes, you can customize the look of the card without doing any [manual customization](#customization).

Use `?theme=THEME_NAME` parameter like so :-

```md
![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&show_icons=true&theme=radical)
```

#### All inbuilt themes :-

dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

<img src="https://res.cloudinary.com/babbittry/image/upload/v1595174536/grs-themes_l4ynja.png" alt="GitHub Readme Stats Themes" width="600px"/>

You can look at a preview for [all available themes](./themes/README.md) or checkout the [theme config file](./themes/index.js) & **you can also contribute new themes** if you like :D

### Customization

You can customize the appearance of your `Stats Card` or `Repo Card` however you wish with URL params.

#### Common Options:

- `title_color` - Card's title color _(hex color)_
- `text_color` - Body text color _(hex color)_
- `icon_color` - Icons color if available _(hex color)_
- `border_color` - Card's border color _(hex color)_. (Does not apply when `hide_border` is enabled)
- `bg_color` - Card's background color _(hex color)_ **or** a gradient in the form of _angle,start,end_
- `hide_border` - Hides the card's border _(boolean)_
- `theme` - name of the theme, choose from [all available themes](./themes/README.md)
- `cache_seconds` - set the cache header manually _(min: 1800, max: 86400)_
- `locale` - set the language in the card _(e.g. cn, de, es, etc.)_
- `border_radius` - Corner rounding on the card_

##### Gradient in bg_color

You can provide multiple comma-separated values in bg_color option to render a gradient, the format of the gradient is :-

```
&bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10
```

> Note on cache: Repo cards have a default cache of 4 hours (14400 seconds) if the fork count & star count is less than 1k, otherwise, it's 2 hours (7200 seconds). Also, note that the cache is clamped to a minimum of 2 hours and a maximum of 24 hours.

#### Stats Card Exclusive Options:

- `hide` - Hides the specified items from stats _(Comma-separated values)_
- `hide_title` - _(boolean)_
- `hide_rank` - _(boolean)_ hides the rank and automatically resizes the card width
- `show_icons` - _(boolean)_
- `include_all_commits` - Count total commits instead of just the current year commits _(boolean)_
- `line_height` - Sets the line-height between text _(number)_
- `custom_title` - Sets a custom title for the card
- `disable_animations` - Disables all animations in the card _(boolean)_

#### Repo Card Exclusive Options:

- `show_owner` - Show the repo's owner name _(boolean)_

#### Language Card Exclusive Options:

- `hide` - Hide the languages specified from the card _(Comma-separated values)_
- `hide_title` - _(boolean)_
- `card_width` - Set the card's width manually _(number)_
- `langs_count` - Show more languages on the card, between 1-10, defaults to 5 _(number)_
- `custom_title` - Sets a custom title for the card

> :warning: **Important:**
> Language names should be uri-escaped, as specified in [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding)
> (i.e: `c++` should become `c%2B%2B`, `jupyter notebook` should become `jupyter%20notebook`, etc.) You can use
> [urlencoder.org](https://www.urlencoder.org/) to help you do this automatically.

#### Wakatime Card Exclusive Options:

- `hide_title` - _(boolean)_
- `line_height` - Sets the line-height between text _(number)_
- `hide_progress` - Hides the progress bar and percentage _(boolean)_
- `custom_title` - Sets a custom title for the card
- `langs_count` - Limit number of languages on the card, defaults to all reported langauges
- `api_domain` - Set a custom API domain for the card, e.g. to use services like [Hakatime](https://github.com/mujx/hakatime) or [Wakapi](https://github.com/muety/wakapi)
- `range` – Request a range different from your WakaTime default, e.g. `last_7_days`. See [WakaTime API docs](https://wakatime.com/developers#stats) for list of available options.

---

# GitHub Extra Pins

GitHub extra pins allow you to pin more than 6 repositories in your profile using a GitHub readme profile.

Yay! You are no longer limited to 6 pinned repositories.

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/pin?username=babbittry&repo=github-readme-stats`

```md
[![Readme Card](https://life-progress-bar.vercel.app/api/pin/?username=babbittry&repo=github-readme-stats)](https://github.com/babbittry/github-readme-stats)
```

### Demo

[![Readme Card](https://life-progress-bar.vercel.app/api/pin/?username=babbittry&repo=github-readme-stats)](https://github.com/babbittry/life-progress-bar)

Use [show_owner](#customization) variable to include the repo's owner username

[![Readme Card](https://life-progress-bar.vercel.app/api/pin/?username=babbittry&repo=github-readme-stats&show_owner=true)](https://github.com/babbittry/life-progress-bar)

# Life Progress Bar

_Note: The life progress bar card does not indicate how many years you can live. It uses the average life span to measure the life expectancy of the user, and does not bear any medical or ethical responsibility._

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `?username=babbittry`

```md
[![Top Langs](https://life-progress-bar.vercel.app/api/top-langs/?username=babbittry)](https://github.com/babbittry/github-readme-stats)
```

```md
[![Top Langs](https://life-progress-bar.vercel.app/api/top-langs/?username=babbittry,babbittry.github.io)](https://github.com/babbittry/github-readme-stats)
```

### Hide individual languages

You can use `?hide=language1,language2` parameter to hide individual languages.

```md
[![Top Langs](https://life-progress-bar.vercel.app/api/top-langs/?username=babbittry&hide=javascript,html)](https://github.com/babbittry/life-progress-bar)
```

### Show more languages

You can use the `&langs_count=` option to increase or decrease the number of languages shown on the card. Valid values are integers between 1 and 10 (inclusive), and the default is 5.

```md
[![Top Langs](https://life-progress-bar.vercel.app/api/top-langs/?username=babbittry&langs_count=8)](https://github.com/babbittry/github-readme-stats)
```

### Demo

[![Top Langs](https://life-progress-bar.vercel.app/api/top-langs/?username=babbittry)](https://github.com/babbittry/life-progress-bar)


# Wakatime Week Stats

Change the `?username=` value to your [Wakatime](https://wakatime.com) username.

```md
[![willianrod's wakatime stats](https://life-progress-bar.vercel.app/api/wakatime?username=willianrod)](https://github.com/babbittry/github-readme-stats)
```

### Demo

[![willianrod's wakatime stats](https://life-progress-bar.vercel.app/api/wakatime?username=willianrod)](https://github.com/babbittry/life-progress-bar)

[![willianrod's wakatime stats](https://life-progress-bar.vercel.app/api/wakatime?username=willianrod&hide_progress=true)](https://github.com/babbittry/life-progress-bar)


---

### All Demos

- Default

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry)

- Hiding specific stats

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&hide=contribs,issues)

- Showing icons

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&hide=issues&show_icons=true)

- Customize Border Color

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&border_color=2e4058)

- Include All Commits

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&include_all_commits=true)

- Themes

Choose from any of the [default themes](#themes)

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&show_icons=true&theme=radical)

- Gradient

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api?username=babbittry&bg_color=30,e96443,904e95&title_color=fff&text_color=fff)

- Customizing stats card

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&show_icons=true&title_color=fff&icon_color=79ff97&text_color=9f9f9f&bg_color=151515)

- Setting card locale

![Anurag's GitHub stats](https://life-progress-bar.vercel.app/api/?username=babbittry&locale=es)

- Customizing repo card

![Customized Card](https://life-progress-bar.vercel.app/api/pin?username=babbittry&repo=github-readme-stats&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515)

- Top languages

[![Top Langs](https://life-progress-bar.vercel.app/api/top-langs/?username=babbittry)](https://github.com/babbittry/life-progress-bar)

- Wakatime card

[![willianrod's wakatime stats](https://life-progress-bar.vercel.app/api/wakatime?username=willianrod)](https://github.com/babbittry/life-progress-bar)

---

### Quick Tip (Align The Repo Cards)

You usually won't be able to layout the images side by side. To do that you can use this approach:

```html
<a href="https://github.com/babbittry/github-readme-stats">
  <img align="center" src="https://life-progress-bar.vercel.app/api/pin/?username=babbittry&repo=github-readme-stats" />
</a>
<a href="https://github.com/babbittry/convoychat">
  <img align="center" src="https://life-progress-bar.vercel.app/api/pin/?username=babbittry&repo=convoychat" />
</a>
```

## Deploy on your own Vercel instance

#### [Check Out Step By Step Video Tutorial By @codeSTACKr](https://youtu.be/n6d4KHSKqGk?t=107)

Since the GitHub API only allows 5k requests per hour, my `https://life-progress-bar.vercel.app/api` could possibly hit the rate limiter. If you host it on your own Vercel server, then you don't have to worry about anything. Click on the deploy button to get started!

NOTE: Since [#58](https://github.com/babbittry/life-progress-bar/pull/58) we should be able to handle more than 5k requests and have no issues with downtime :D

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/babbittry/life-progress-bar)

<details>
 <summary><b> Guide on setting up Vercel  🔨 </b></summary>

1. Go to [vercel.com](https://vercel.com/)
1. Click on `Log in`
   ![](https://files.catbox.moe/tct1wg.png)
1. Sign in with GitHub by pressing `Continue with GitHub`
   ![](https://files.catbox.moe/btd78j.jpeg)
1. Sign into GitHub and allow access to all repositories, if prompted
1. Fork this repo
1. Go back to your [Vercel dashboard](https://vercel.com/dashboard)
1. Select `Import Project`
   ![](https://files.catbox.moe/qckos0.png)
1. Select `Import Git Repository`
   ![](https://files.catbox.moe/pqub9q.png)
1. Select root and keep everything as is, just add your environment variable named PAT_1 (as shown), which will contain a personal access token (PAT), which you can easily create [here](https://github.com/settings/tokens/new) (leave everything as is, just name it something, it can be anything you want)
   ![](https://files.catbox.moe/0ez4g7.png)
1. Click deploy, and you're good to go. See your domains to use the API!

</details>


---

[![https://vercel.com?utm_source=github_readme_stats_team&utm_campaign=oss](./powered-by-vercel.svg)](https://vercel.com?utm_source=github_readme_stats_team&utm_campaign=oss)

