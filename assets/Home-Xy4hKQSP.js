import{_ as s}from"./index-f9wZsgVc.js";import{b as a,j as e,r}from"./secondPulse-hoc6Lbg9.js";import{E as t}from"./react-error-boundary.esm-gEcEtI2-.js";import"./firstPulse-HBQm0ihX.js";const l=a.lazy(()=>s(()=>import("./ApplicationDetail-OvtGbgHR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),n=a.lazy(()=>s(()=>import("./Senders-DVoR-Z_f.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]))),o=a.lazy(()=>s(()=>import("./Messages-6JlWLhpO.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]))),d=a.lazy(()=>s(()=>import("./Events-Bd68AmwN.js"),__vite__mapDeps([10,1,2,3,4,5,6,7]))),j=()=>{const i=()=>e.jsx("p",{children:"Error"});return e.jsx(t,{fallbackRender:i,children:e.jsxs("div",{style:{display:"grid",width:"100%",gridTemplateColumns:"repeat(2, 1fr)",wordBreak:"break-all"},children:[e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Application Detail"}),children:e.jsx(l,{})}),e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Senders"}),children:e.jsx(n,{})}),e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Messages"}),children:e.jsx(o,{})}),e.jsx(r.Suspense,{fallback:e.jsx("p",{children:"Loading Events"}),children:e.jsx(d,{})})]})})};export{j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ApplicationDetail-OvtGbgHR.js","assets/secondPulse-hoc6Lbg9.js","assets/index-f9wZsgVc.js","assets/index-JfQiRzvL.css","assets/firstPulse-HBQm0ihX.js","assets/react-redux-dUcFEmws.js","assets/useTheme-79-U25ha.js","assets/Title1-u8ZmhaVU.js","assets/Senders-DVoR-Z_f.js","assets/Messages-6JlWLhpO.js","assets/Events-Bd68AmwN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}