(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(4745)}])},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},c=t(1003),u=t(880),l=t(9246);var s={};function f(e,r,t,n){if(e&&c.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=u.useRouter(),a=i.default.useMemo((function(){var r=o(c.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?c.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(r=i.default.Children.only(h))&&"object"===typeof r&&r.ref,j=o(l.useIntersection({rootMargin:"200px"}),2),_=j[0],w=j[1],x=i.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);i.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,w,b,t,n]);var C={ref:x,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,v,y,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&c.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);C.href=E||c.addBasePath(c.addLocale(p,k,n&&n.defaultLocale))}return i.default.cloneElement(r,C)};r.default=d},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!c,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(r?r.current:null),2),v=h[0],y=h[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=u.get(n):(r=u.get(t),l.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return u.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(o);var r=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&l.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return a.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&y(r.current)}),[r]),[m,d]};var a=t(7294),i=t(4686),c="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},9133:function(e,r,t){"use strict";t.d(r,{v:function(){return n}});var n={siteMeta:{title:"Chompy Developers' Blog",teamName:"Chompy, Inc.",description:"Chompy \u3092\u904b\u55b6\u3059\u308b Chompy, Inc. \u306e\u958b\u767a\u30e1\u30f3\u30d0\u30fc\u306eBlog\u3092\u4e00\u89a7\u3067\u304d\u307e\u3059\u3002"},siteRoot:"https://syninc.github.io/chompy-developers-blog",headerLinks:[{title:"Company",href:"https://chompy-inc.com/"},{title:"Recruit",href:"https://chompy-inc.com/recruit/"}]}},1775:function(e,r,t){"use strict";t.d(r,{v:function(){return o},a:function(){return a}});var n=t(5893),o=function(e){return(0,n.jsx)("div",{className:"content-wrapper",children:e.children})},a=function(e){return(0,n.jsx)("div",{className:"undo-wrap-for-scroll",children:e.children})}},4745:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),o=t(1664),a=t(9133),i=t(1775),c=function(){return(0,n.jsx)("header",{className:"site-header",children:(0,n.jsx)(i.v,{children:(0,n.jsxs)("div",{className:"site-header__inner",children:[(0,n.jsx)(o.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{className:"site-header__logo-link",children:(0,n.jsx)("h2",{children:"Chompy Developers' Blog"})})}),(0,n.jsx)("div",{className:"site-header__links",children:a.v.headerLinks.map((function(e,r){var t="header-link-".concat(r);return e.href.startsWith("/")?(0,n.jsx)(o.default,{href:e.href,passHref:!0,children:(0,n.jsx)("a",{className:"site-header__link",children:e.title})},t):(0,n.jsx)("a",{href:e.href,className:"site-header__link",children:e.title},t)}))})]})})})},u=function(){return(0,n.jsx)("footer",{className:"site-footer",children:(0,n.jsx)(i.v,{children:(0,n.jsxs)("p",{children:["\xa9 ",a.v.siteMeta.teamName]})})})};t(1470);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}function f(e){var r=e.Component,t=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{}),(0,n.jsx)(r,s({},t)),(0,n.jsx)(u,{})]})}},1470:function(){},1664:function(e,r,t){e.exports=t(1551)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(880)}));var t=e.O();_N_E=t}]);