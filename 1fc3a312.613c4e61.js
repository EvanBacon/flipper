(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(t),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return t?i.a.createElement(m,l(l({ref:n},s),{},{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(143)),o={id:"dev-setup",title:"Development Setup"},l={unversionedId:"extending/dev-setup",id:"extending/dev-setup",isDocsHomePage:!1,title:"Development Setup",description:"IDE",source:"@site/../docs/extending/dev-setup.mdx",slug:"/extending/dev-setup",permalink:"/docs/extending/dev-setup",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/dev-setup.mdx",version:"current",sidebar:"extending",previous:{title:"Publishing your Plugin",permalink:"/docs/tutorial/js-publishing"},next:{title:"Dynamically Loading Plugins",permalink:"/docs/extending/loading-custom-plugins"}},p=[{value:"IDE",id:"ide",children:[{value:"TypeScript",id:"typescript",children:[]},{value:"Android (Java)",id:"android-java",children:[]}]},{value:"Running Flipper from source (recommended)",id:"running-flipper-from-source-recommended",children:[{value:"Startup options",id:"startup-options",children:[]}]},{value:"Guidelines for writing TypeScript",id:"guidelines-for-writing-typescript",children:[]},{value:"Submitting a diff / PR",id:"submitting-a-diff--pr",children:[]}],s=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",n)}},c=s("OssOnly"),b=s("FbInternalOnly"),d={rightToc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"ide"},"IDE"),Object(a.b)(c,{mdxType:"OssOnly"},Object(a.b)("p",null,"When developing Flipper plugins we recommend the following IDEs:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"TypeScript (for Flipper Desktop (plugins)): Visual Studio Code"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},'Install the "ESLint" (dbaeumer.vscode-eslint) extension from marketplace to enable linting'),Object(a.b)("li",{parentName:"ol"},'Install the "Prettier" (esbenp.prettier-vscode) extension to enable automatic code-formatting'),Object(a.b)("li",{parentName:"ol"},"If for some reason it is not working, the builtin TypeScript extension might be disabled. To enable it, to go to extensions, search for \u201c@builtin typescript\u201d and enable it."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Android Studio (for Android plugins)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"XCode (for iOS plugins)")))),Object(a.b)(b,{mdxType:"FbInternalOnly"},Object(a.b)("h3",{id:"typescript"},"TypeScript"),Object(a.b)("p",null,'Flipper Desktop is written in TypeScript.\nUsing our internal "VSCode @ FB" as IDE is strongly recommended (',Object(a.b)("inlineCode",{parentName:"p"},"code-fb"),")."),Object(a.b)("p",null,"Make sure to install the ",Object(a.b)("inlineCode",{parentName:"p"},"[FB-Internal]"),' "ESLint" and "Pretter" extensions are enabled.'),Object(a.b)("p",null,"If for some reason it is not working, the builtin TypeScript extension might be disabled. To enable it, to go to extensions, search for \u201c@builtin typescript\u201d and enable it."),Object(a.b)("h3",{id:"android-java"},"Android (Java)"),Object(a.b)("p",null,"IntelliJ is the recommended platform. Focussing on a flipper-enabled app should include the flipper modules as expected."),Object(a.b)("p",null,"If you don't have an fbsource checkout (e.g. Whatsapp Team), you can open Android Studio and import project: ",Object(a.b)("inlineCode",{parentName:"p"},"fbsource/xplat/sonar")),Object(a.b)("p",null,"If you're having gradle (or other) problems, make sure you're on the latest Android Studio version.")),Object(a.b)("h2",{id:"running-flipper-from-source-recommended"},"Running Flipper from source (recommended)"),Object(a.b)("p",null,"When developing Flipper plugins we strongly recommend to run from Flipper itself from source as well, as this yields several benefits:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Automatic transpilation and bundling of loaded plugins: ES6, TypeScript, JSX."),Object(a.b)("li",{parentName:"ul"},"Automatic refresh after code changes."),Object(a.b)("li",{parentName:"ul"},"React and Redux Dev Tools."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"debugging"}),"Debugging")," using Chrome Dev Tools or Visual Studio Code."),Object(a.b)("li",{parentName:"ul"},"Additional debug information like React warnings and performance metrics. ")),Object(a.b)("p",null,"Prerequisites for Flipper development build:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"node \u2265 14"),Object(a.b)("li",{parentName:"ul"},"yarn \u2265 1.5"),Object(a.b)("li",{parentName:"ul"},"git"),Object(a.b)("li",{parentName:"ul"},"watchman")),Object(a.b)("p",null,"To run Flipper Desktop from source:"),Object(a.b)(c,{mdxType:"OssOnly"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/facebook/flipper.git\ncd flipper/desktop\nyarn\nyarn start\n")),Object(a.b)("p",null,"Tip: start with ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start --fast-refresh")," for experimental fast refresh.")),Object(a.b)(b,{mdxType:"FbInternalOnly"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"fbclone fbsource\ncd ~/fbsource/xplat/sonar/desktop\nyarn\nyarn start\n")),Object(a.b)("p",null,"Tip: start with ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start --fast-refresh")," for experimental fast refresh."),Object(a.b)("p",null,"Tip: start wih ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start --public-build")," to preview changes for public builds."),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"code-fb .")," in the same directory to open an IDE to hack on Flipper.")),Object(a.b)("h3",{id:"startup-options"},"Startup options"),Object(a.b)("p",null,"You can use several options to customise development build instance. They can be provided as command-line args or environment variables.\nYou can check all of them by executing ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start --help"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'yarn start [args]\n\nOptions:\n  --embedded-plugins    Enables embedding of plugins into Flipper bundle. If it\n                        disabled then only installed plugins are loaded. The\n                        flag is enabled by default. Env var\n                        FLIPPER_NO_EMBEDDED_PLUGINS is equivalent to the\n                        command-line option "--no-embedded-plugins".   [boolean]\n  --fast-refresh        Enable Fast Refresh - quick reload of UI component\n                        changes without restarting Flipper. The flag is disabled\n                        by default. Env var FLIPPER_FAST_REFRESH is equivalent\n                        to the command-line option "--fast-refresh".   [boolean]\n  --plugin-auto-update  [FB-internal only] Enable plugin auto-updates. The flag\n                        is disabled by default in dev mode. Env var\n                        FLIPPER_NO_PLUGIN_AUTO_UPDATE is equivalent to the\n                        command-line option "--no-plugin-auto-update"  [boolean]\n  --enabled-plugins     Load only specified plugins and skip loading rest. This\n                        is useful when you are developing only one or few\n                        plugins. Plugins to load can be specified as a\n                        comma-separated list with either plugin id or name used\n                        as identifier, e.g. "--enabled-plugins\n                        network,inspector". The flag is not provided by default\n                        which means that all plugins loaded.             [array]\n  --open-dev-tools      Open Dev Tools window on startup. The flag is disabled\n                        by default. Env var FLIPPER_OPEN_DEV_TOOLS is equivalent\n                        to the command-line option "--open-dev-tools". [boolean]\n  --dev-server-port     Dev server port. 3000 by default. Env var "PORT=3001" is\n                        equivalent to the command-line option "--dev-server-port\n                        3001".                          [number] [default: 3000]\n  --version             Show version number                            [boolean]\n  --help                Show help                                      [boolean]\n')),Object(a.b)("p",null,"You can also create file ",Object(a.b)("inlineCode",{parentName:"p"},".env")," in ",Object(a.b)("inlineCode",{parentName:"p"},"desktop")," subfolder and specify any environment variables to load them automatically on ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start")," so you don't need to pass command-line args every time, e.g.:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"FLIPPER_FAST_REFRESH=true\nFLIPPER_OPEN_DEV_TOOLS=true\nFLIPPER_ENABLED_PLUGINS=flipper-messages,network,inspector\n")),Object(a.b)("h2",{id:"guidelines-for-writing-typescript"},"Guidelines for writing TypeScript"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Important:")," Use ",Object(a.b)("inlineCode",{parentName:"li"},".tsx")," file extension for all TypeScript files (instead of ",Object(a.b)("inlineCode",{parentName:"li"},".ts"),")"),Object(a.b)("li",{parentName:"ul"},"Prefer ",Object(a.b)("inlineCode",{parentName:"li"},"type")," for React props and state over interfaces"),Object(a.b)("li",{parentName:"ul"},"Don\u2019t prefix interfaces with ",Object(a.b)("inlineCode",{parentName:"li"},"I")),Object(a.b)("li",{parentName:"ul"},"Enums, Types and Interfaces use PascalCase (uppercase first letter)"),Object(a.b)("li",{parentName:"ul"},"Install 3rd party type definitions as dev dependency (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"yarn add @types/lodash --dev"),")")),Object(a.b)("h2",{id:"submitting-a-diff--pr"},"Submitting a diff / PR"),Object(a.b)("p",null,"Make sure your new functionality is covered with tests, and run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn test")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn test --watch")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"desktop/")," directory to verify that they pass. "),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"testing"}),"testing")," page for more details on writing and running test."),Object(a.b)("p",null,"To make sure you don't get any lint/formatting errors, run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn lint")," before submitting your diff. Some errors (especially formatting errors can be auto-fixed by running ",Object(a.b)("inlineCode",{parentName:"p"},"yarn fix")))}u.isMDXComponent=!0}}]);