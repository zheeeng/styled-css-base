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
                <a href="https://styled-css-base.zheeeng.me/#/simple" rel="nofollow">Simple Style</a>
            </summary>
            <br />
            <img src="https://user-images.githubusercontent.com/1303154/178547756-cd9ff332-07a0-4a15-837d-deea3f695586.png" />
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

_Considering these styles only use the CSS tag selectors, if you care about isolate them from other public styling, you may try to use the [CSS preprocessors](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor) or the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)._

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
