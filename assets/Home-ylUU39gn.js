import{_ as s}from"./index-Qj1PS2K2.js";import{b as a,j as e,r}from"./secondPulse-vkQr4YoG.js";import{E as t}from"./react-error-boundary.esm-dZ1s9-s_.js";import"./firstPulse-xPKsHXsb.js";const l=a.lazy(()=>s(()=>import("./ApplicationDetail-NSeRlh2L.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),n=a.lazy(()=>s(()=>import("./Senders-NboUOW-Y.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]))),o=a.lazy(()=>s(()=>import("./Messages-tUHTuWeT.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]))),d=a.lazy(()=>s(()=>import("./Events-jem3Qebb.js"),__vite__mapDeps([10,1,2,3,4,5,6,7]))),j=()=>{const i=()=>e.jsx("p",{children:"Error"});return e.jsx(t,{fallbackRender:i,children:e.jsxs("div",{style:{display:"grid",width:"100%",gridTemplateColumns:"repeat(2, 1fr)",wordBreak:"break-all"},children:[e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Application Detail"}),children:e.jsx(l,{})}),e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Senders"}),children:e.jsx(n,{})}),e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Messages"}),children:e.jsx(o,{})}),e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Events"}),children:e.jsx(d,{})})]})})};export{j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ApplicationDetail-NSeRlh2L.js","assets/secondPulse-vkQr4YoG.js","assets/index-Qj1PS2K2.js","assets/index-JfQiRzvL.css","assets/firstPulse-xPKsHXsb.js","assets/react-redux-lvoswc8h.js","assets/useTheme-jb2eIrN_.js","assets/Title1-I38sp3FR.js","assets/Senders-NboUOW-Y.js","assets/Messages-tUHTuWeT.js","assets/Events-jem3Qebb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}