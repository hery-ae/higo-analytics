(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{43:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(7294),a=n(1163),r=n(9008),c=n(1664),i=n(5893);function l(){var e=(0,a.useRouter)();return(0,i.jsx)("a",{href:"#sign-out",className:"font-medium",onClick:function(){var t,n=null===(t=document.cookie.split(";").find((function(e){return e.trim().startsWith("access-token=")})))||void 0===t?void 0:t.split("=");fetch("http://localhost:3000/logout",{headers:{"X-Access-Token":n[1]}}).then((function(t){t.ok&&(document.cookie=String("access-token=; path=/; max-age=0"),e.replace("/"))}))},children:"Sign out"})}function d(e){var t=e.children,n=(0,a.useRouter)(),d=(0,s.useState)((0,i.jsx)("a",{href:"#",className:"font-medium",children:"..."})),o=d[0],u=d[1];return"object"===typeof document&&(0,s.useEffect)((function(){document.cookie.split(";").some((function(e){return e.trim().startsWith("access-token=")}))?u((0,i.jsx)(l,{})):u((0,i.jsx)(c.default,{href:{pathname:"/sign-in.html",query:{next:n.asPath}},children:(0,i.jsx)("a",{className:String("font-medium").concat("/sign-in"===n.pathname?" pointer-events-none cursor-default":""),children:"Sign in"})}))}),[document.cookie]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"Higo App"}),(0,i.jsx)("link",{href:"/styles/higo-app.css",rel:"stylesheet"})]}),(0,i.jsxs)("div",{className:"container max-w-screen-lg mx-auto px-3 md:px-12",children:[(0,i.jsxs)("div",{className:"columns-2 py-3",children:[(0,i.jsx)("header",{children:(0,i.jsx)("h3",{className:"text-lg",children:(0,i.jsx)(c.default,{href:"/",children:(0,i.jsx)("a",{className:"font-semibold",children:"Higo App"})})})}),(0,i.jsx)("nav",{className:"text-end",children:(0,i.jsxs)("ul",{className:"list-none flex justify-end",children:[(0,i.jsx)("li",{className:"me-3",children:(0,i.jsx)(c.default,{href:"/analytics.html",children:(0,i.jsx)("a",{className:"font-normal",children:"Analytics"})})}),(0,i.jsx)("li",{className:"me-3",children:o})]})})]}),(0,i.jsx)("hr",{}),t]})]})}},1093:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(43),a=n(7294),r=n(1163),c=n(9085),i=n(6495),l=n(5893);function d(){return(0,l.jsx)(s.Z,{children:(0,l.jsx)(o,{})})}function o(){var e=(0,r.useRouter)(),t=(0,a.useState)((0,l.jsx)(l.Fragment,{children:"Loading..."})),n=t[0],s=t[1];return(0,a.useEffect)((function(){var t;switch(document.cookie.split(";").some((function(e){return e.trim().startsWith("access-token=")}))){case!0:var n=null===(t=document.cookie.split(";").find((function(e){return e.trim().startsWith("access-token=")})))||void 0===t?void 0:t.split("=");fetch("http://localhost:3000/api/analytics",{headers:{"X-Access-Token":n[1]}}).then((function(e){e.ok&&e.json().then((function(e){s((0,l.jsxs)("div",{className:"container mt-3",children:[(0,l.jsxs)("div",{className:"grid grid-flow-col auto-cols-auto mb-6",children:[(0,l.jsx)(u,{total:e.unique_total,children:"Unique"}),(0,l.jsx)(u,{total:e.new_total,children:"New"}),(0,l.jsx)(u,{total:e.returning_total,children:"Returning"}),(0,l.jsx)(u,{total:e.user_data.length,children:"Total"}),(0,l.jsx)(u,{total:e.hari_ramai,children:"Hari Ramai"}),(0,l.jsx)(u,{total:e.jam_ramai,children:"Jam Ramai"})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"columns-1 mb-6",children:(0,l.jsx)(h,{data:e.jumlah_per_hari})}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"columns-1 mb-6",children:[(0,l.jsx)("div",{className:"w-2/3 mb-6",children:(0,l.jsx)(x,{data:e.age_group})}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"w-2/3 mb-6",children:(0,l.jsx)(x,{data:e.gender})}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"w-4/5 mb-6",children:(0,l.jsx)(x,{data:e.device})}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"w-4/5 mb-6",children:(0,l.jsx)(x,{data:e.digital_interest})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"columns-1 mb-6",children:(0,l.jsx)(m,{data:e.user_data,locations:e.locations})})]}))}))}));break;default:e.replace({pathname:"/sign-in.html",query:{next:"/analytics.html"}})}}),[]),(0,l.jsxs)("div",{className:"container my-3",children:[(0,l.jsx)("h1",{className:"text-xl",children:"Analytics"}),n]})}function u(e){var t=e.children,n=e.total;return(0,l.jsxs)("div",{className:"border rounded shadow-lg mb-2 me-2 px-1",children:[(0,l.jsx)("h3",{className:"font-medium",children:t}),(0,l.jsx)("p",{children:n})]})}function h(e){var t=e.data,n=(c.kL,t.map((function(e){return e.used_at})));return(0,l.jsx)(i.$Q,{data:{labels:n,datasets:[{label:"Unique",data:t.reduce((function(e,t){return e.push(t.unique),e}),[])},{label:"New",data:t.reduce((function(e,t){return e.push(t.new),e}),[])},{label:"Returning",data:t.reduce((function(e,t){return e.push(t.returning),e}),[])}]}})}function x(e){var t=e.data,n=(c.kL,Object.keys(t));return(0,l.jsx)(i.by,{data:{labels:n,datasets:[{data:Object.keys(t).map((function(e){return t[e]}))}]}})}function m(e){var t=e.data,n=e.locations,s=(0,a.useState)(t.slice(0,100)),r=s[0],c=s[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"overflow-x-auto mb-6",children:(0,l.jsxs)("table",{className:"table-fixed border",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"text-center",children:"#"}),(0,l.jsx)("th",{className:"text-center",children:(0,l.jsxs)("select",{onChange:function(e){c(t.filter((function(t){return t.data.some((function(t){return t["Name of Location"]==e.target.value}))})))},children:[(0,l.jsx)("option",{children:"Location"}),n.map((function(e){return(0,l.jsx)("option",{value:e["Name of Location"],children:e["Name of Location"]})}))]})}),(0,l.jsx)("th",{className:"text-center",children:"Date"}),(0,l.jsx)("th",{className:"text-center",children:"Hour"}),(0,l.jsx)("th",{className:"text-center",children:"Name"}),(0,l.jsx)("th",{className:"text-center",children:"Age"}),(0,l.jsx)("th",{className:"text-center",children:"Gender"}),(0,l.jsx)("th",{className:"text-center",children:"Email"}),(0,l.jsx)("th",{className:"text-center",children:"Telp"}),(0,l.jsx)("th",{className:"text-center",children:"Device"}),(0,l.jsx)("th",{className:"text-center",children:"Interest"}),(0,l.jsx)("th",{className:"text-center",children:"Type"}),(0,l.jsx)("th",{className:"text-center",children:"Total"})]})}),(0,l.jsx)("tbody",{children:r.map((function(e){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"border",children:e.index}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e["Name of Location"],(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e.Date,(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e["Login Hour"],(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e.Name,(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e.Age,(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e.gender,(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e.Email,(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e["No Telp"],(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e["Brand Device"],(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e["Digital Interest"],(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.data.map((function(e){return(0,l.jsxs)(l.Fragment,{children:[e["Location Type"],(0,l.jsx)("br",{})]})}))}),(0,l.jsx)("td",{className:"border",children:e.total})]},e.index)}))})]})}),(0,l.jsxs)("div",{className:"flex justify-center",children:[(0,l.jsx)("button",{className:"bg-blue-500 rounded text-white px-2 py-1 mr-1",onClick:function(){c(t.slice(0,100))},children:"First"}),(0,l.jsx)("button",{className:"bg-blue-500 rounded text-white px-2 py-1 mr-1",onClick:function(){r.length&&r[0].index-100-1>=0&&c(t.slice(r[0].index-100-1,r[0].index-1))},children:"Prev"}),(0,l.jsx)("button",{className:"bg-blue-500 rounded text-white px-2 py-1 mr-1",onClick:function(){r.length&&r[r.length-1].index<t.length&&c(t.slice(r[r.length-1].index,r[r.length-1].index+100))},children:"Next"}),(0,l.jsx)("button",{className:"bg-blue-500 rounded text-white px-2 py-1",onClick:function(){c(t.slice(t.length-100))},children:"Last"})]})]})}},9469:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics",function(){return n(1093)}])}},function(e){e.O(0,[774,196,775,888,179],(function(){return t=9469,e(e.s=t);var t}));var t=e.O();_N_E=t}]);