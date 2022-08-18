# Styled CSS Base

[![NPM](https://nodei.co/npm/styled-css-base.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/styled-css-base/)

![publish workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/styled-css-base.svg)](https://www.npmjs.com/package/styled-css-base)

> Lightweight basic CSS style sheets.

If you get tired of setting up a comprehensive styling scaffold, you may try returning back to this primitive styling ways.

## 🍀 Presets

<ul>
    <li>
        <details>
            <summary>
                <a href="https://styled-css-base.zheeeng.me/#/simple" rel="nofollow">Simple Style Light theme</a>
            </summary>
            <br />
            <img src="https://raw.githubusercontent.com/zheeeng/styled-css-base/main/screenshots/preset-simple-light-theme.png" />
        </details>
    </li>
    <li>
        <details>
            <summary>
                <a href="https://styled-css-base.zheeeng.me/#/simple" rel="nofollow">Simple Style Dark theme</a>
            </summary>
            <br />
            <img src="https://raw.githubusercontent.com/zheeeng/styled-css-base/main/screenshots/preset-simple-dark-theme.png" />
        </details>
    </li>
</ul>

## 👇 Usages

### Copying to your project

 See the [releases](https://github.com/zheeeng/styled-css-base/releases).

### Using with application bundler

#### 🧩 Installation

```bash
yarn add styled-css-base (or npm/pnpm)
```

```ts
import 'styled-css-base/presets/simple/index.css';
```

```css
@import "styled-css-base/presets/simple/index.css";
```

### Using CDN link

```html
<link rel="stylesheet" href="https://unpkg.com/styled-css-base/presets/simple/index.css">
```

```ts
import 'https://unpkg.com/styled-css-base/presets/simple/index.css'
```

```css
@import "https://unpkg.com/styled-css-base/presets/simple/index.css"
```

### Switch theme

Add HTML attributes [data-prefers-color-scheme-auto], [data-prefers-color-scheme-light], [data-prefers-color-scheme-dark] to themify its children elements.

```html
<div [data-prefers-color-scheme-auto]>
    <button>Ok</button>
    <button>Cancel</button>
</div>
```

* `[data-prefers-color-scheme-auto]`: switch theme by user's system preference.
* `[data-prefers-color-scheme-light]`: force using light theme.
* `[data-prefers-color-scheme-dark]`: force using dark theme.

---

_Considering these styles only use the CSS tag selectors, if you care about isolating them from other page's stylesheets, it's recommended to use the [CSS preprocessors](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor) or the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)._

### Using with CSS preprocessors

The CSS [Descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator) can scope our styles and we __recommend__ nesting the `styled-css-base` by these common CSS preprocessors:

__scss:__

```scss
.showcase {
    @import "styled-css-base/presets/simple/index";
}
```

__less:__

```less
.showcase {
  @import "styled-css-base/presets/simple/index";
}
```

or:

```less
.showcase {
  @import (less) "styled-css-base/presets/simple/index.css";
}
```

__stylus__:

```less
.showcase {
    @import "styled-css-base/presets/simple/index";
}
```

### Using with Shadow DOM

Style Encapsulation is the built-in feature of Shadow DOM.

```js
// Apply external styles to the Shadow DOM
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'https://unpkg.com/styled-css-base/presets/simple/index.css');

// Attach the created element to the Shadow DOM
shadow.appendChild(linkElem);
```
