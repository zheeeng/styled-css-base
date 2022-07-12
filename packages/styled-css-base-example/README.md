# Styled CSS Base

[![NPM](https://nodei.co/npm/styled-css-base.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/styled-css-base/)

![publish workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/styled-css-base.svg)](https://www.npmjs.com/package/styled-css-base)

> Lightweight basic CSS style sheets for styling your HTML elements.

If you get tired of setting up a comprehensive styling scaffold, you may try returning back to this primitive styling ways.

## 🍀 Presets

<ul>
    <li>
        <details>
            <summary>
                <a href="https://styled-css-base.zheeeng.me/#/simple" rel="nofollow">Simple Style</a>
            </summary>
            <br />
            <img src="https://user-images.githubusercontent.com/1303154/178388028-33a2ecc0-0b8c-46bd-aa9f-b0b72a23b9b4.png" />
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

---

_Considering these styles only use the CSS tag selectors, if you do not want to leak them to your entire application, you may try using the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) or the [CSS preprocessors](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)._

### Using with shadow DOM

```js
// Apply external styles to the shadow DOM
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'https://unpkg.com/styled-css-base/presets/simple/index.css');

// Attach the created element to the shadow DOM
shadow.appendChild(linkElem);
```

### Using with CSS preprocessors

We __recommend__ nesting the `styled-css-base` for scoping them:

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
