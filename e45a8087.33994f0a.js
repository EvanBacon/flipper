(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),i=(t(0),t(143)),a=t(144),c=t(147),s={id:"styling-components",title:"Styling Components"},l={unversionedId:"extending/styling-components",id:"extending/styling-components",isDocsHomePage:!1,title:"Styling Components",description:"Flipper ships with its own design system which is based on Ant Design.",source:"@site/../docs/extending/styling-components.mdx",slug:"/extending/styling-components",permalink:"/docs/extending/styling-components",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/styling-components.mdx",version:"current",sidebar:"extending",previous:{title:"Desktop Plugin API",permalink:"/docs/extending/flipper-plugin"},next:{title:"Create Table Plugin",permalink:"/docs/extending/create-table-plugin"}},p=[{value:"Basic tags",id:"basic-tags",children:[]},{value:"Extending Flipper Components",id:"extending-flipper-components",children:[]},{value:"CSS",id:"css",children:[]},{value:"Colors",id:"colors",children:[]}],u={rightToc:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Flipper ships with its own design system which is based on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://ant.design/"}),"Ant Design"),".\nIn general, custom styling should be needed rarily, as Ant Design provides a very extensive set of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://ant.design/components/overview/"}),"components"),"."),Object(i.b)("p",null,"To build plugin layout and data visualization Flipper ships with an additional set of components through the ",Object(i.b)("inlineCode",{parentName:"p"},"flipper-plugin")," package.\nThe list of available additional compoents can be found in the ",Object(i.b)(c.a,{to:Object(a.a)("/docs/extending/flipper-plugin#ui-components"),mdxType:"Link"},"API Reference")," and are further documented\nin the Flipper Style Guide which can be found in Flipper under ",Object(i.b)("inlineCode",{parentName:"p"},"View > Flipper style guide"),"."),Object(i.b)("p",null,"In case you still need customly styled components,\nwe are using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://emotion.sh"}),"emotion")," to style our components. For more details on how this works, please refer to emotion's documentation. We heavily use their ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://emotion.sh/docs/styled"}),"Styled Components")," approach, which allows you to extend our and Ant's built-in components."),Object(i.b)("h2",{id:"basic-tags"},"Basic tags"),Object(i.b)("p",null,"For basic building blocks (views, texts, ...) you can use the styled object."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {styled} from 'flipper-plugin';\n\nconst MyView = styled.div({\n  fontSize: 10,\n  color: colors.red\n});\nconst MyText = styled.span({ ... });\nconst MyImage = styled.img({ ... });\nconst MyInput = styled.input({ ... });\n")),Object(i.b)("h2",{id:"extending-flipper-components"},"Extending Flipper Components"),Object(i.b)("p",null,"In some cases it is required to customize Ant or Flipper's components in some way. For example changing colors, alignment, or wrapping behavior.\nFlippers components can be wrapped using the ",Object(i.b)("inlineCode",{parentName:"p"},"styled")," function which allows adding or overwriting existing style rules."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {Layout, styled} from 'flipper-plugin';\n\nconst Container = styled(Layout.Container)({\n  alignItems: 'center',\n});\n\nfunction MyComponent {\n  return <Container>...</Container>;\n}\n")),Object(i.b)("h2",{id:"css"},"CSS"),Object(i.b)("p",null,"The CSS-in-JS object passed to the styled components takes just any CSS rule, with the difference that it uses camel cased keys for the properties. Pixel-values can be numbers, any other values need to be strings."),Object(i.b)("p",null,"The style object can also be returned from a function for dynamic values. Props can be passed to the styled component using React."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const MyView = styled.div(\n  props => ({\n    fontSize: 10,\n    color:  => (props.disabled ? 'red' : 'black'),\n  })\n);\n\n// usage\n<MyView disabled />\n")),Object(i.b)("p",null,"Pseudo-classes can be used like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"'&:hover': {color: 'red'}`\n")),Object(i.b)("p",null,"Children can be matched by using normal CSS selectors. This makes it possible to customize Ant components as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"'.ant-btn-primary': {color: 'yellow'}\n")),Object(i.b)("h2",{id:"colors"},"Colors"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"theme")," module contains all standard colors used by Flipper. All available colors can be previewed by starting Flipper and opening ",Object(i.b)("inlineCode",{parentName:"p"},"View > Flipper Style Guide"),".\nThe colors exposed here will handle dark mode automatically, so it is recommended to use those colors over hardcoded ones."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {theme} from 'flipper-plugin'\n")))}d.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},144:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var r=t(145),o=t(146);function i(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+p:p}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},145:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(20);n.default=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},146:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},147:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(11),a=t(146),c=t(10),s=Object(r.createContext)({collectLink:function(){}}),l=t(144),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};n.a=function(e){var n,t,u,d=e.isNavLink,b=e.to,f=e.href,m=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],y=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),O=Object(l.b)().withBaseUrl,v=Object(r.useContext)(s),j=b||f,w=Object(a.a)(j),x=null==j?void 0:j.replace("pathname://",""),C=void 0!==x?function(e){return e.startsWith("/")}(t=x)?O(t):t:void 0,k=Object(r.useRef)(!1),N=d?i.e:i.c,P=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&w&&window.docusaurus.prefetch(C),function(){P&&u&&u.disconnect()}}),[C,P,w]);var S=null!==(n=null==C?void 0:C.startsWith("#"))&&void 0!==n&&n,T=!C||!w||S;return C&&w&&!S&&!h&&v.collectLink(C),T?o.a.createElement("a",Object.assign({href:C},j&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(N,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(C),k.current=!0)},innerRef:function(e){var n,t;P&&e&&w&&(n=e,t=function(){window.docusaurus.prefetch(C)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(n),u.disconnect(),t())}))}))).observe(n))},to:C||""},d&&{isActive:g,activeClassName:m}))}}}]);