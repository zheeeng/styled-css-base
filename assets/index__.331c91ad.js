import{c as e}from"./index.620dde58.js";const n={},p="wrapper";function l({components:s,...t}){return e(p,{...n,...t,components:s,mdxType:"MDXLayout"},e("h1",null,"Styled CSS Base"),e("p",null,e("a",{parentName:"p",href:"https://nodei.co/npm/styled-css-base/"},e("img",{parentName:"a",src:"https://nodei.co/npm/styled-css-base.png?downloads=true&downloadRank=true&stars=true",alt:"NPM"}))),e("p",null,e("img",{parentName:"p",src:"https://github.com/zheeeng/styled-css-base/actions/workflows/publish.yml/badge.svg",alt:"publish workflow"}),`
`,e("img",{parentName:"p",src:"https://github.com/zheeeng/styled-css-base/actions/workflows/pages.yml/badge.svg",alt:"pages workflow"}),`
`,e("a",{parentName:"p",href:"https://www.npmjs.com/package/styled-css-base"},e("img",{parentName:"a",src:"https://img.shields.io/npm/v/styled-css-base.svg",alt:"npm version"}))),e("blockquote",null,e("p",{parentName:"blockquote"},"Lightweight basic CSS style sheets.")),e("p",null,"If you get tired of setting up a comprehensive styling scaffold, you may try returning back to this primitive styling ways."),e("h2",null,"\u{1F340} Presets"),e("ul",null,e("li",null,e("details",null,e("summary",null,e("a",{href:"https://styled-css-base.zheeeng.me/#/simple",rel:"nofollow"},"Simple Style")),e("br",null),e("img",{src:"https://user-images.githubusercontent.com/1303154/178547756-cd9ff332-07a0-4a15-837d-deea3f695586.png"})))),e("h2",null,"\u{1F447} Usages"),e("h3",null,"Copying to your project"),e("p",null," See the ",e("a",{parentName:"p",href:"https://github.com/zheeeng/styled-css-base/releases"},"releases"),"."),e("h3",null,"Using with application bundler"),e("h4",null,"\u{1F9E9} Installation"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`yarn add styled-css-base (or npm/pnpm)
`)),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import 'styled-css-base/presets/simple/index.css';
`)),e("pre",null,e("code",{parentName:"pre",className:"language-css"},`@import "styled-css-base/presets/simple/index.css";
`)),e("h3",null,"Using CDN link"),e("pre",null,e("code",{parentName:"pre",className:"language-html"},`<link rel="stylesheet" href="https://unpkg.com/styled-css-base/presets/simple/index.css">
`)),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import 'https://unpkg.com/styled-css-base/presets/simple/index.css'
`)),e("pre",null,e("code",{parentName:"pre",className:"language-css"},`@import "https://unpkg.com/styled-css-base/presets/simple/index.css"
`)),e("hr",null),e("p",null,e("em",{parentName:"p"},"Considering these styles only use the CSS tag selectors, if you care about isolate them from other public styling, you may try to use the ",e("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor"},"CSS preprocessors")," or the ",e("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"shadow DOM"),".")),e("h3",null,"Using with CSS preprocessors"),e("p",null,"The CSS ",e("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"},"Descendant combinator")," can scope our styles and we ",e("strong",{parentName:"p"},"recommend")," nesting the ",e("inlineCode",{parentName:"p"},"styled-css-base")," by these common CSS preprocessors:"),e("p",null,e("strong",{parentName:"p"},"scss:")),e("pre",null,e("code",{parentName:"pre",className:"language-scss"},`.showcase {
    @import "styled-css-base/presets/simple/index";
}
`)),e("p",null,e("strong",{parentName:"p"},"less:")),e("pre",null,e("code",{parentName:"pre",className:"language-less"},`.showcase {
  @import "styled-css-base/presets/simple/index";
}
`)),e("p",null,"or:"),e("pre",null,e("code",{parentName:"pre",className:"language-less"},`.showcase {
  @import (less) "styled-css-base/presets/simple/index.css";
}
`)),e("p",null,e("strong",{parentName:"p"},"stylus"),":"),e("pre",null,e("code",{parentName:"pre",className:"language-less"},`.showcase {
    @import "styled-css-base/presets/simple/index";
}
`)),e("h3",null,"Using with Shadow DOM"),e("p",null,"Style Encapsulation is the built-in feature of Shadow DOM."),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`// Apply external styles to the Shadow DOM
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'https://unpkg.com/styled-css-base/presets/simple/index.css');

// Attach the created element to the Shadow DOM
shadow.appendChild(linkElem);
`)))}l.isMDXComponent=!0;const r={},o="wrapper";function a({components:s,...t}){return e(o,{...r,...t,components:s,mdxType:"MDXLayout"},e(l,{mdxType:"README"}))}a.isMDXComponent=!0;var m=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));const c={};c.main=m;export{c as default};
