(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{43:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7294),o=t(1163),s=t(9008),c=t(1664),a=t(5893);function i(){var e=(0,o.useRouter)();return(0,a.jsx)("a",{href:"#sign-out",className:"font-medium",onClick:function(){var n,t=null===(n=document.cookie.split(";").find((function(e){return e.trim().startsWith("access-token=")})))||void 0===n?void 0:n.split("=");fetch("http://localhost:3000/api/logout",{headers:{"X-Access-Token":t[1]}}).then((function(n){n.ok&&(document.cookie=String("access-token=; path=/; max-age=0"),e.replace("/"))}))},children:"Sign out"})}function l(e){var n=e.children,t=(0,o.useRouter)(),l=(0,r.useState)((0,a.jsx)("a",{href:"#",className:"font-medium",children:"..."})),u=l[0],f=l[1];return"object"===typeof document&&(0,r.useEffect)((function(){document.cookie.split(";").some((function(e){return e.trim().startsWith("access-token=")}))?f((0,a.jsx)(i,{})):f((0,a.jsx)(c.default,{href:{pathname:"/sign-in.html",query:{next:t.asPath}},children:(0,a.jsx)("a",{className:String("font-medium").concat("/sign-in"===t.pathname?" pointer-events-none cursor-default":""),children:"Sign in"})}))}),[document.cookie]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{children:"Higo App"}),(0,a.jsx)("link",{href:"/styles/higo-app.css",rel:"stylesheet"})]}),(0,a.jsxs)("div",{className:"container max-w-screen-lg mx-auto px-3 md:px-12",children:[(0,a.jsxs)("div",{className:"columns-2 py-3",children:[(0,a.jsx)("header",{children:(0,a.jsx)("h3",{className:"text-lg",children:(0,a.jsx)(c.default,{href:"/",children:(0,a.jsx)("a",{className:"font-semibold",children:"Higo App"})})})}),(0,a.jsx)("nav",{className:"text-end",children:(0,a.jsxs)("ul",{className:"list-none flex justify-end",children:[(0,a.jsx)("li",{className:"me-3",children:(0,a.jsx)(c.default,{href:"/analytics.html",children:(0,a.jsx)("a",{className:"font-normal",children:"Analytics"})})}),(0,a.jsx)("li",{className:"me-3",children:u})]})})]}),(0,a.jsx)("hr",{}),n]})]})}},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,s=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),a=t(4651),i=t(7426);var l={};function u(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=a.useRouter(),f=s.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),s=t[0],a=t[1];return{href:s,as:e.as?c.resolveHref(o,e.as):a||s}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var g=(n=s.default.Children.only(p))&&"object"===typeof n&&n.ref,y=i.useIntersection({rootMargin:"200px"}),k=r(y,2),N=k[0],b=k[1],_=s.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);s.default.useEffect((function(){var e=b&&t&&c.isLocalURL(d),n="undefined"!==typeof j?j:o&&o.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(o,d,h,{locale:n})}),[h,d,b,j,t,o]);var E={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,s,a,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](t,r,{shallow:s,locale:i,scroll:a}))}(e,o,d,h,m,v,x,j)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof j?j:o&&o.locale,L=o&&o.isLocaleDomain&&c.getDomainLocale(h,w,o&&o.locales,o&&o.domainLocales);E.href=L||c.addBasePath(c.addLocale(h,w,o&&o.defaultLocale))}return s.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],h=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,s=r.observer,c=r.elements;return c.set(e,n),s.observe(e),function(){c.delete(e),s.unobserve(e),0===c.size&&(s.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[h,f]};var o=t(7294),s=t(3447),c="undefined"!==typeof IntersectionObserver;var a=new Map},2562:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(43),o=t(5893);function s(){return(0,o.jsx)("div",{className:"pt-8",children:(0,o.jsx)("h1",{className:"text-xl",children:"Welcome to Higo App !."})})}function c(){return(0,o.jsx)(r.Z,{children:(0,o.jsx)(s,{})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);