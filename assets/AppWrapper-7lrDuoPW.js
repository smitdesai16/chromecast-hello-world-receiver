import{r,R as B,j as $}from"./secondPulse-GCsooXuv.js";import{u as U}from"./react-redux-TcNh3Ynz.js";import{j as v,T as W,a as z,u as x,m as Y,_ as X,b as q,g as G,c as J}from"./useTheme-KMIYS1Lo.js";import{M as Q,b as Z,u as ee,d as l,f as te,g as se}from"./senderReducer-2w5cIs5X.js";import"./index-uXiRLEQq.js";import"./firstPulse-K9qi0T_9.js";function ne(s,e){if(e){const t=Object.keys(e).reduce((n,o)=>`${n}--${o}: ${e[o]}; `,"");return`${s} { ${t} }`}return`${s} {}`}function R(){return typeof window<"u"&&!!(window.document&&window.document.createElement)}const oe={current:0},ie=r.createContext(void 0);function re(){var s;return(s=r.useContext(ie))!==null&&s!==void 0?s:oe}const ce=R()?r.useLayoutEffect:r.useEffect,P=r.createContext(void 0);P.Provider;function ae(){return r.useContext(P)||""}function ue(s="fui-",e){const t=re(),n=ae(),o=B.useId;if(o){const i=o(),u=r.useMemo(()=>i.replace(/:/g,""),[i]);return e||`${n}${s}${u}`}return r.useMemo(()=>e||`${n}${s}${++t.current}`,[n,s,e,t])}function de(...s){const e=r.useCallback(t=>{e.current=t;for(const n of s)typeof n=="function"?n(t):n&&(n.current=t)},[...s]);return e}const S=r.createContext(void 0),le=S.Provider,fe=r.createContext(void 0),me=fe.Provider,ve=r.createContext(void 0),he=ve.Provider,L=r.createContext(void 0),_e={targetDocument:typeof document=="object"?document:void 0,dir:"ltr"},ge=L.Provider;function D(){var s;return(s=r.useContext(L))!==null&&s!==void 0?s:_e}const F=r.createContext(void 0),ye=F.Provider;function be(){var s;return(s=r.useContext(F))!==null&&s!==void 0?s:{}}const I=r.createContext(void 0),pe=I.Provider;function k(s,e){var t;const n=s;var o;return!!(!(n==null||(t=n.ownerDocument)===null||t===void 0)&&t.defaultView&&n instanceof n.ownerDocument.defaultView[(o=e==null?void 0:e.constructorName)!==null&&o!==void 0?o:"HTMLElement"])}const Ee=r.createContext(void 0),Ce=Ee.Provider,we=(s,e)=>v(ge,{value:e.provider,children:v(le,{value:e.theme,children:v(me,{value:e.themeClassName,children:v(pe,{value:e.customStyleHooks_unstable,children:v(he,{value:e.tooltip,children:v(W,{dir:e.textDirection,children:v(Ce,{value:e.iconDirection,children:v(ye,{value:e.overrides_unstable,children:z(s.root,{children:[R()?null:v("style",{dangerouslySetInnerHTML:{__html:s.serverStyleProps.cssRule},...s.serverStyleProps.attributes}),s.root.children]})})})})})})})})});/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */const ke=typeof WeakRef<"u";class N{constructor(e){ke&&typeof e=="object"?this._weakRef=new WeakRef(e):this._instance=e}deref(){var e,t,n;let o;return this._weakRef?(o=(e=this._weakRef)===null||e===void 0?void 0:e.deref(),o||delete this._weakRef):(o=this._instance,!((n=(t=o)===null||t===void 0?void 0:t.isDisposed)===null||n===void 0)&&n.call(t)&&delete this._instance),o}}/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */const _="keyborg:focusin";function Te(s){const e=s.HTMLElement,t=e.prototype.focus;let n=!1;return e.prototype.focus=function(){n=!0},s.document.createElement("button").focus(),e.prototype.focus=t,n}let b=!1;function xe(s){const e=s;b||(b=Te(e));const t=e.HTMLElement.prototype.focus;if(t.__keyborgNativeFocus)return;e.HTMLElement.prototype.focus=u;const n=d=>{const c=d.relatedTarget,a=d.currentTarget;a.contains(c)||(a.removeEventListener("focusin",o),a.removeEventListener("focusout",n))},o=d=>{var c;let a=d.target;if(!a)return;a.shadowRoot&&(a.shadowRoot.addEventListener("focusin",o),a.shadowRoot.addEventListener("focusout",n),a=d.composedPath()[0]);const f={relatedTarget:d.relatedTarget||void 0},h=new CustomEvent(_,{cancelable:!0,bubbles:!0,composed:!0,detail:f});h.details=f,(b||i.lastFocusedProgrammatically)&&(f.isFocusedProgrammatically=a===((c=i.lastFocusedProgrammatically)===null||c===void 0?void 0:c.deref()),i.lastFocusedProgrammatically=void 0),a.dispatchEvent(h)},i=e.__keyborgData={focusInHandler:o};e.document.addEventListener("focusin",e.__keyborgData.focusInHandler,!0);function u(){const d=e.__keyborgData;return d&&(d.lastFocusedProgrammatically=new N(this)),t.apply(this,arguments)}u.__keyborgNativeFocus=t}function Re(s){const e=s,t=e.HTMLElement.prototype,n=t.focus.__keyborgNativeFocus,o=e.__keyborgData;o&&(e.document.removeEventListener("focusin",o.focusInHandler,!0),delete e.__keyborgData),n&&(t.focus=n)}/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */const Pe=500;let M=0;class Se{constructor(){this.__keyborgCoreRefs={},this._isNavigatingWithKeyboard=!1}add(e){const t=e.id;t in this.__keyborgCoreRefs||(this.__keyborgCoreRefs[t]=new N(e))}remove(e){delete this.__keyborgCoreRefs[e],Object.keys(this.__keyborgCoreRefs).length===0&&(this._isNavigatingWithKeyboard=!1)}setVal(e){if(this._isNavigatingWithKeyboard!==e){this._isNavigatingWithKeyboard=e;for(const t of Object.keys(this.__keyborgCoreRefs)){const o=this.__keyborgCoreRefs[t].deref();o?o.update(e):this.remove(t)}}}getVal(){return this._isNavigatingWithKeyboard}}const m=new Se;class Le{constructor(e,t){this._onFocusIn=o=>{if(this._isMouseUsedTimer||m.getVal())return;const i=o.detail;i.relatedTarget&&(i.isFocusedProgrammatically||i.isFocusedProgrammatically===void 0||m.setVal(!0))},this._onMouseDown=o=>{if(o.buttons===0||o.clientX===0&&o.clientY===0&&o.screenX===0&&o.screenY===0)return;const i=this._win;i&&(this._isMouseUsedTimer&&i.clearTimeout(this._isMouseUsedTimer),this._isMouseUsedTimer=i.setTimeout(()=>{delete this._isMouseUsedTimer},1e3)),m.setVal(!1)},this._onKeyDown=o=>{var i,u;const d=m.getVal(),c=o.keyCode,a=this._triggerKeys;if(!d&&(!a||a.has(c))){const f=(i=this._win)===null||i===void 0?void 0:i.document.activeElement;if(f&&(f.tagName==="INPUT"||f.tagName==="TEXTAREA"||f.contentEditable==="true"))return;m.setVal(!0)}else d&&(!((u=this._dismissKeys)===null||u===void 0)&&u.has(c))&&this._scheduleDismiss()},this.id="c"+ ++M,this._win=e;const n=e.document;if(t){const o=t.triggerKeys,i=t.dismissKeys;o!=null&&o.length&&(this._triggerKeys=new Set(o)),i!=null&&i.length&&(this._dismissKeys=new Set(i))}n.addEventListener(_,this._onFocusIn,!0),n.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("keydown",this._onKeyDown,!0),xe(e),m.add(this)}dispose(){const e=this._win;if(e){this._isMouseUsedTimer&&(e.clearTimeout(this._isMouseUsedTimer),this._isMouseUsedTimer=void 0),this._dismissTimer&&(e.clearTimeout(this._dismissTimer),this._dismissTimer=void 0),Re(e);const t=e.document;t.removeEventListener(_,this._onFocusIn,!0),t.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("keydown",this._onKeyDown,!0),delete this._win,m.remove(this.id)}}isDisposed(){return!!this._win}update(e){var t,n;const o=(n=(t=this._win)===null||t===void 0?void 0:t.__keyborg)===null||n===void 0?void 0:n.refs;if(o)for(const i of Object.keys(o))g.update(o[i],e)}_scheduleDismiss(){const e=this._win;if(e){this._dismissTimer&&(e.clearTimeout(this._dismissTimer),this._dismissTimer=void 0);const t=e.document.activeElement;this._dismissTimer=e.setTimeout(()=>{this._dismissTimer=void 0;const n=e.document.activeElement;t&&n&&t===n&&m.setVal(!1)},Pe)}}}class g{constructor(e,t){this._cb=[],this._id="k"+ ++M,this._win=e;const n=e.__keyborg;n?(this._core=n.core,n.refs[this._id]=this):(this._core=new Le(e,t),e.__keyborg={core:this._core,refs:{[this._id]:this}})}static create(e,t){return new g(e,t)}static dispose(e){e.dispose()}static update(e,t){e._cb.forEach(n=>n(t))}dispose(){var e;const t=(e=this._win)===null||e===void 0?void 0:e.__keyborg;t!=null&&t.refs[this._id]&&(delete t.refs[this._id],Object.keys(t.refs).length===0&&(t.core.dispose(),delete this._win.__keyborg)),this._cb=[],delete this._core,delete this._win}isNavigatingWithKeyboard(){return m.getVal()}subscribe(e){this._cb.push(e)}unsubscribe(e){const t=this._cb.indexOf(e);t>=0&&this._cb.splice(t,1)}setVal(e){m.setVal(e)}}function De(s,e){return g.create(s,e)}function Fe(s){g.dispose(s)}const T="data-fui-focus-visible";function Ie(s,e){if(K(s))return()=>{};const t={current:void 0},n=De(e);function o(c){n.isNavigatingWithKeyboard()&&k(c)&&(t.current=c,c.setAttribute(T,""))}function i(){t.current&&(t.current.removeAttribute(T),t.current=void 0)}n.subscribe(c=>{c||i()});const u=c=>{i();const a=c.composedPath()[0];o(a)},d=c=>{(!c.relatedTarget||k(c.relatedTarget)&&!s.contains(c.relatedTarget))&&i()};return s.addEventListener(_,u),s.addEventListener("focusout",d),s.focusVisible=!0,o(e.document.activeElement),()=>{i(),s.removeEventListener(_,u),s.removeEventListener("focusout",d),delete s.focusVisible,Fe(n)}}function K(s){return s?s.focusVisible?!0:K(s==null?void 0:s.parentElement):!1}function Ne(s={}){const e=D(),t=r.useRef(null);var n;const o=(n=s.targetDocument)!==null&&n!==void 0?n:e.targetDocument;return r.useEffect(()=>{if(o!=null&&o.defaultView&&t.current)return Ie(t.current,o.defaultView)},[t,o]),t}const H={root:"fui-FluentProvider"},Me=X({root:{sj55zd:"f19n0e5",De3pzq:"fxugw4r",fsow6f:["f1o700av","fes3tcz"],Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"}},{d:[".f19n0e5{color:var(--colorNeutralForeground1);}",".fxugw4r{background-color:var(--colorNeutralBackground1);}",".f1o700av{text-align:left;}",".fes3tcz{text-align:right;}",".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".f1i3iumi{line-height:var(--lineHeightBase300);}"]}),Ke=s=>{const e=x(),t=Me({dir:s.dir,renderer:e});return s.root.className=Y(H.root,s.themeClassName,t.root,s.root.className),s},He=r.useInsertionEffect?r.useInsertionEffect:ce,Oe=(s,e)=>{if(!s)return;const t=s.createElement("style");return Object.keys(e).forEach(n=>{t.setAttribute(n,e[n])}),s.head.appendChild(t),t},Ve=(s,e)=>{const t=s.sheet;t&&(t.cssRules.length>0&&t.deleteRule(0),t.insertRule(e,0))},Ae=s=>{const{targetDocument:e,theme:t,rendererAttributes:n}=s,o=r.useRef(),i=ue(H.root),u=n,d=r.useMemo(()=>ne(`.${i}`,t),[t,i]);return je(e,i),He(()=>{const c=e==null?void 0:e.getElementById(i);return c?o.current=c:(o.current=Oe(e,{...u,id:i}),o.current&&Ve(o.current,d)),()=>{var a;(a=o.current)===null||a===void 0||a.remove()}},[i,e,d,u]),{styleTagId:i,rule:d}};function je(s,e){r.useState(()=>{if(!s)return;const t=s.getElementById(e);t&&s.head.append(t)})}const Be={},$e=(s,e)=>{const t=D(),n=Ue(),o=be(),i=r.useContext(I)||Be,{applyStylesToPortals:u=!0,customStyleHooks_unstable:d,dir:c=t.dir,targetDocument:a=t.targetDocument,theme:f,overrides_unstable:h={}}=s,E=p(n,f),V=p(o,h),A=p(i,d),C=x();var y;const{styleTagId:w,rule:j}=Ae({theme:E,targetDocument:a,rendererAttributes:(y=C.styleElementAttributes)!==null&&y!==void 0?y:{}});return{applyStylesToPortals:u,customStyleHooks_unstable:A,dir:c,targetDocument:a,theme:E,overrides_unstable:V,themeClassName:w,components:{root:"div"},root:q(G("div",{...s,dir:c,ref:de(e,Ne({targetDocument:a}))}),{elementType:"div"}),serverStyleProps:{cssRule:j,attributes:{...C.styleElementAttributes,id:w}}}};function p(s,e){return s&&e?{...s,...e}:s||e}function Ue(){return r.useContext(S)}function We(s){const{applyStylesToPortals:e,customStyleHooks_unstable:t,dir:n,root:o,targetDocument:i,theme:u,themeClassName:d,overrides_unstable:c}=s,a=r.useMemo(()=>({dir:n,targetDocument:i}),[n,i]),[f]=r.useState(()=>({})),h=r.useMemo(()=>({textDirection:n}),[n]);return{customStyleHooks_unstable:t,overrides_unstable:c,provider:a,textDirection:n,iconDirection:h,tooltip:f,theme:u,themeClassName:e?o.className:d}}const O=r.forwardRef((s,e)=>{const t=$e(s,e);Ke(t);const n=We(t);return we(t,n)});O.displayName="FluentProvider";function Qe({children:s}){const e=U(),t=J();return r.useEffect(()=>{document.body.style.backgroundColor=t.colorNeutralBackground1}),r.useEffect(()=>{try{const n=setInterval(function(){if(window.cast){clearInterval(n);const o=new window.cast.framework.CastReceiverOptions;o.disableIdleTimeout=!0,o.maxInactivity=5,o.versionCode=1;const i=window.cast.framework.CastReceiverContext.getInstance();i.setInactivityTimeout(5),i.addCustomMessageListener("urn:x-cast:io.smitdesai16.github.message",function(u){e(Z(new Q(u.senderId,u.data.message)))}),setInterval(function(){e(ee(i.getSenders().map(u=>u.id)))},500),i.addEventListener("ready",function(){e(l("ready")),e(te(i.getApplicationData())),e(se(i.getDeviceCapabilities()))}),i.addEventListener("shutdown",function(){e(l("shutdown"))}),i.addEventListener("senderconnected",function(){e(l("senderconnected"))}),i.addEventListener("senderdisconnected",function(){e(l("senderdisconnected"))}),i.addEventListener("error",function(){e(l("error"))}),i.addEventListener("systemvolumechanged",function(){e(l("systemvolumechanged"))}),i.addEventListener("visibilitychanged",function(){e(l("visibilitychanged"))}),i.addEventListener("standbychanged",function(){e(l("standbychanged"))}),i.addEventListener("maxvideoresolutionchanged",function(){e(l("maxvideoresolutionchanged"))}),i.addEventListener("feedbackstarted",function(){e(l("feedbackstarted"))}),i.addEventListener("allowgroupchange",function(){e(l("allowgroupchange"))}),i.addEventListener("groupcapabilities",function(){e(l("groupcapabilities"))}),i.addEventListener("playbackdevicestatus",function(){e(l("playbackdevicestatus"))}),i.addEventListener("showmediacontrols",function(){e(l("showmediacontrols"))}),i.addEventListener("*",function(){e(l("*"))}),i.start(o)}},500)}catch{}}),$.jsx(O,{theme:t,children:s})}export{Qe as default};