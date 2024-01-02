import{r as L,R as g,b as U}from"./secondPulse-FRAu8-U8.js";var R={exports:{}},k={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=L;function W(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var H=typeof Object.is=="function"?Object.is:W,P=y.useSyncExternalStore,z=y.useRef,T=y.useEffect,_=y.useMemo,j=y.useDebugValue;k.useSyncExternalStoreWithSelector=function(e,t,u,n,r){var o=z(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=_(function(){function d(c){if(!i){if(i=!0,S=c,c=n(c),r!==void 0&&s.hasValue){var f=s.value;if(r(f,c))return v=f}return v=c}if(f=v,H(S,c))return f;var p=n(c);return r!==void 0&&r(f,p)?f:(S=c,v=p)}var i=!1,S,v,x=u===void 0?null:u;return[function(){return d(t())},x===null?void 0:function(){return d(x())}]},[t,u,n,r]);var l=P(e,o[0],o[1]);return T(function(){s.hasValue=!0,s.value=l},[l]),j(l),l};R.exports=k;var q=R.exports,a="default"in g?U:g,m=Symbol.for("react-redux-context"),E=typeof globalThis<"u"?globalThis:{};function I(){if(!a.createContext)return{};const e=E[m]??(E[m]=new Map);let t=e.get(a.createContext);return t||(t=a.createContext(null),e.set(a.createContext,t)),t}var b=I(),$=()=>{throw new Error("uSES not initialized!")};function h(e=b){return function(){return a.useContext(e)}}var V=h(),M=$,A=e=>{M=e},B=(e,t)=>e===t;function K(e=b){const t=e===b?V:h(e);return function(n,r={}){const{equalityFn:o=B,devModeChecks:s={}}=typeof r=="function"?{equalityFn:r}:r,{store:l,subscription:d,getServerState:i,stabilityCheck:S,identityFunctionCheck:v}=t();a.useRef(!0);const x=a.useCallback({[n.name](f){return n(f)}}[n.name],[n,S,s.stabilityCheck]),c=M(d.addNestedSub,l.getState,i||l.getState,x,o);return a.useDebugValue(c),c}}var te=K();function F(e){e()}function G(){let e=null,t=null;return{clear(){e=null,t=null},notify(){F(()=>{let u=e;for(;u;)u.callback(),u=u.next})},get(){let u=[],n=e;for(;n;)u.push(n),n=n.next;return u},subscribe(u){let n=!0,r=t={callback:u,next:null,prev:t};return r.prev?r.prev.next=r:e=r,function(){!n||e===null||(n=!1,r.next?r.next.prev=r.prev:t=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var w={notify(){},get:()=>[]};function J(e,t){let u,n=w,r=0,o=!1;function s(p){S();const D=n.subscribe(p);let C=!1;return()=>{C||(C=!0,D(),v())}}function l(){n.notify()}function d(){f.onStateChange&&f.onStateChange()}function i(){return o}function S(){r++,u||(u=t?t.addNestedSub(d):e.subscribe(d),n=G())}function v(){r--,u&&r===0&&(u(),u=void 0,n.clear(),n=w)}function x(){o||(o=!0,S())}function c(){o&&(o=!1,v())}const f={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:d,isSubscribed:i,trySubscribe:x,tryUnsubscribe:c,getListeners:()=>n};return f}var Q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X=Q?a.useLayoutEffect:a.useEffect;function Y({store:e,context:t,children:u,serverState:n,stabilityCheck:r="once",identityFunctionCheck:o="once"}){const s=a.useMemo(()=>{const i=J(e);return{store:e,subscription:i,getServerState:n?()=>n:void 0,stabilityCheck:r,identityFunctionCheck:o}},[e,n,r,o]),l=a.useMemo(()=>e.getState(),[e]);X(()=>{const{subscription:i}=s;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),l!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[s,l]);const d=t||b;return a.createElement(d.Provider,{value:s},u)}var ne=Y;function N(e=b){const t=e===b?V:h(e);return function(){const{store:n}=t();return n}}var Z=N();function O(e=b){const t=e===b?Z:N(e);return function(){return t().dispatch}}var re=O();A(q.useSyncExternalStoreWithSelector);export{ne as P,re as a,te as u};
