# Styled CSS Base

[![NPM](https://nodei.co/npm/styled-css-base.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/styled-css-base/)

![publish workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/styled-css-base.svg)](https://www.npmjs.com/package/styled-css-base)

Provide a series of basic CSS style sheets for styling your demonstration.

## 🧩 Installation

```bash
yarn add styled-css-base (or npm/pnpm)
```

## 🍀 Presets

* [Simple](https://styled-css-base.zheeeng.me/#/simple)

## 👇 Usages

### Integrate via application bundler

```ts
import 'styled-css-base/presets/simple/index.css';
```

_Consider these styles only use element selector, if you want to not leak them to your entire application, consider using them for shadow DOM or using them through CSS processors._

### Integrate via CSS processors

We recommend nesting the `styled-css-base` for scoping these styles:

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
