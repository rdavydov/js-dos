(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(89)),i=n(91),l={id:"buttons",title:"Buttons"},c={unversionedId:"buttons",id:"buttons",isDocsHomePage:!1,title:"Buttons",description:"emulators-ui and js-dos bundles support adding on screen buttons.",source:"@site/docs/buttons.md",slug:"/buttons",permalink:"/v7/build/docs/buttons",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/buttons.md",version:"current",sidebar:"someSidebar",previous:{title:"Gestures",permalink:"/v7/build/docs/gestures"},next:{title:"Multiple layers",permalink:"/v7/build/docs/multiple-layers"}},s=[{value:"All possible buttons",id:"all-possible-buttons",children:[]},{value:"Changing style",id:"changing-style",children:[]},{value:"All buttons example",id:"all-buttons-example",children:[]},{value:"GameStudio",id:"gamestudio",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"emulators-ui")," and ",Object(o.b)("strong",{parentName:"p"},"js-dos bundles")," support adding on screen buttons.\nThis buttons can be mapped to key events."),Object(o.b)("p",null,"To enable buttons support, you need to add ",Object(o.b)("inlineCode",{parentName:"p"},"buttons")," section in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"configuration#jsdosjsdosjson"}),"jsdos.json"),".\nIn that case js-dos will automatically configure buttons support."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OR")),Object(o.b)("p",null,"You can directly create ",Object(o.b)("inlineCode",{parentName:"p"},"button")," control like in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"ui-digger"}),"Digger")," example."),Object(o.b)("p",null,"Each button should conform following interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'export type ActionType = "click" | "hold";\n// hold - means track press/release events separately\n\nexport interface Button {\n    action: ActionType,\n    mapTo: number,\n    symbol?: string,\n    position: {\n        left?: 1 | 2,\n        top?: 1 | 2,\n        right?: 1 | 2,\n        bottom?: 1 | 2,\n    },\n}\n')),Object(o.b)("p",null,"Each side of screen can snap up to two buttons. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{ left: 1, top: 1 }")," - button will be placed to left-top corner"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{ left: 2, top: 1 }")," - button will be placed at the top and after previous button")),Object(o.b)("p",null,"For example, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/v7/build/docs/ui-digger"}),"digger")," configuration is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const buttons = [\n    {\n        action: "click",\n        mapTo: 88 /*KBD_x*/,\n        position: {\n            left: 1,\n            bottom: 1,\n        }\n    },\n];\n\nemulatorsUi.controls.button(layers, ci, buttons);\n')),Object(o.b)("p",null,'This snippet will add button "X" in the bottom of screen, when you press it keyboard event for\nkey "x" will be generated.'),Object(o.b)("h2",{id:"all-possible-buttons"},"All possible buttons"),Object(o.b)("p",null,"You can create up to 16 buttons per ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/v7/build/docs/multiple-layers"}),"layer"),". Layout of all buttons:"),Object(o.b)("img",{alt:"all buttons",src:Object(i.a)("img/all-buttons.jpg")}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you use default js-dos installation then button ",Object(o.b)("inlineCode",{parentName:"p"},"10")," will be created automatically.\nThis button will be a options button that give access to built-in functions (fullscreen, save-load, etc)"),Object(o.b)("img",{alt:"special button",src:Object(i.a)("img/special-button.jpg")}))),Object(o.b)("h2",{id:"changing-style"},"Changing style"),Object(o.b)("p",null,"Currently you can change size of buttons by passing ",Object(o.b)("inlineCode",{parentName:"p"},"scale")," in layersOptions."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),' const layers = emulatorsUi.dom.layers(document.getElementById("root"), { scale: 0.7 });\n')),Object(o.b)("h2",{id:"all-buttons-example"},"All buttons example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="examples/all-buttons.html"',title:'"examples/all-buttons.html"'}),"{}\n")),Object(o.b)("h2",{id:"gamestudio"},"GameStudio"),Object(o.b)("p",null,"You can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"game-studio"}),"Game Studio")," to easily configure gestures."))}b.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(90),a=n(92);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},92:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);