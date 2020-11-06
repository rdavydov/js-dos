(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(89)),i=(n(91),{id:"buttons",title:"Buttons"}),c={unversionedId:"buttons",id:"buttons",isDocsHomePage:!1,title:"Buttons",description:"emulators-ui and js-dos bundles support adding on screen buttons.",source:"@site/docs/buttons.md",slug:"/buttons",permalink:"/v7/build/docs/buttons",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/buttons.md",version:"current",sidebar:"someSidebar",previous:{title:"Gestures",permalink:"/v7/build/docs/gestures"},next:{title:"Contributing in client-side features",permalink:"/v7/build/docs/contributing-emulators-ui"}},u=[{value:"GameStudio",id:"gamestudio",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"emulators-ui")," and ",Object(a.b)("strong",{parentName:"p"},"js-dos bundles")," support adding on screen buttons.\nThis buttons can be mapped to key events."),Object(a.b)("p",null,"To enable buttons support, you need to add ",Object(a.b)("inlineCode",{parentName:"p"},"buttons")," section in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"configuration#jsdosjsdosjson"}),"jsdos.json"),".\nIn that case js-dos will automatically configure buttons support."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"OR")),Object(a.b)("p",null,"You can directly create ",Object(a.b)("inlineCode",{parentName:"p"},"button")," control like in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"ui-digger"}),"Digger")," example."),Object(a.b)("p",null,"Each button should conform following interface:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'export type ActionType = "click" | "hold";\n// hold - means track press/release events separately\n\nexport interface Button {\n    action: ActionType,\n    mapTo: number,\n    size?: number,\n    symbol?: string,\n    style?: ElementCSSInlineStyle;\n}\n')),Object(a.b)("p",null,"For example, digger configuration is:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const buttons = [\n    {\n        action: "click",\n        mapTo: 88 /*KBD_x*/,\n        style: {\n            left: "16px",\n            bottom: "32px",\n        }\n    },\n];\n\nemulatorsUi.controls.button(layers, ci, buttons);\n')),Object(a.b)("p",null,'This snippet will add button "X" in the bottom of screen, when you press it keyboard event for\nkey "x" will be generated.'),Object(a.b)("h2",{id:"gamestudio"},"GameStudio"),Object(a.b)("p",null,"You can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"game-studio"}),"Game Studio")," to easily configure gestures."))}l.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){const e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(90),o=n(92);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},92:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);