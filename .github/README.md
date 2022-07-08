# Styled CSS Base

[![NPM](https://nodei.co/npm/styled-css-base.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/styled-css-base/)

![publish workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/styled-css-base/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/styled-css-base.svg)](https://www.npmjs.com/package/styled-css-base)

Provide a series of basic CSS style sheets for styling your demonstration.

## 🧩  Installation

```bash
yarn add styled-css-base (or npm/pnpm)
```

## Presets

At presents, we have some preset style:

* [Simple](https://styled-css-base.zheeeng.me/#/simple)

## 👇 Usages

### Import for application bundler

```ts
  @import (less) "styled-css-base/presets/simple/index.css";

```

_Consider these styles only use element selector, if you want to not leak them to your entire application, consider using them for shadow DOM or using them through CSS processors._

### Import for CSS processor

We recommend nesting the `styled-css-base`:

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
