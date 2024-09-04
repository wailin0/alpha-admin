"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6631],{94653:function(e,t,n){let r;n.d(t,{NI:function(){return et},RB:function(){return P},XI:function(){return O},YF:function(){return Q},Y_:function(){return el},Zm:function(){return R},ay:function(){return M},bQ:function(){return G},eS:function(){return H},jV:function(){return C},ll:function(){return W},mN:function(){return L},qq:function(){return f},qs:function(){return er},xp:function(){return ec}});var o,u=n(31229),l=n(44250),i=n(56714),c=n(68984),a=n(90339),s=n(54514);function f(e){return u.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}let d={...o||(o=n.t(u,2))},v=d.useInsertionEffect||(e=>e());function m(e){let t=u.useRef(()=>{});return v(()=>{t.current=e}),u.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}var p="undefined"!=typeof document?u.useLayoutEffect:u.useEffect;function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let b=!1,E=0,h=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+E++,y=d.useId||function(){let[e,t]=u.useState(()=>b?h():void 0);return p(()=>{null==e&&t(h())},[]),u.useEffect(()=>{b=!0},[]),e};function k(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}}let w=u.createContext(null),x=u.createContext(null),R=()=>{var e;return(null==(e=u.useContext(w))?void 0:e.id)||null},M=()=>u.useContext(x);function C(e){let t=y(),n=M(),r=R(),o=e||r;return p(()=>{let e={id:t,parentId:o};return null==n||n.addNode(e),()=>{null==n||n.removeNode(e)}},[n,t,o]),t}function L(e){let{children:t,id:n}=e,r=R();return u.createElement(w.Provider,{value:u.useMemo(()=>({id:n,parentId:r}),[n,r])},t)}function P(e){let{children:t}=e,n=u.useRef([]),r=u.useCallback(e=>{n.current=[...n.current,e]},[]),o=u.useCallback(e=>{n.current=n.current.filter(t=>t!==e)},[]),l=u.useState(()=>k())[0];return u.createElement(x.Provider,{value:u.useMemo(()=>({nodesRef:n,addNode:r,removeNode:o,events:l}),[r,o,l])},t)}function T(e){return"data-floating-ui-"+e}function K(e){let t=(0,u.useRef)(e);return p(()=>{t.current=e}),t}let S=T("safe-polygon");function A(e,t,n){return n&&!(0,l.r)(n)?0:"number"==typeof e?e:null==e?void 0:e[t]}function O(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:o,events:c,elements:a}=e,{enabled:s=!0,delay:f=0,handleClose:d=null,mouseOnly:v=!1,restMs:g=0,move:b=!0}=t,E=M(),h=R(),y=K(d),k=K(f),w=K(n),x=u.useRef(),C=u.useRef(-1),L=u.useRef(),P=u.useRef(-1),T=u.useRef(!0),O=u.useRef(!1),_=u.useRef(()=>{}),D=u.useCallback(()=>{var e;let t=null==(e=o.current.openEvent)?void 0:e.type;return(null==t?void 0:t.includes("mouse"))&&"mousedown"!==t},[o]);u.useEffect(()=>{if(s)return c.on("openchange",e),()=>{c.off("openchange",e)};function e(e){let{open:t}=e;t||(clearTimeout(C.current),clearTimeout(P.current),T.current=!0)}},[s,c]),u.useEffect(()=>{if(!s||!y.current||!n)return;function e(e){D()&&r(!1,e,"hover")}let t=(0,l.Me)(a.floating).documentElement;return t.addEventListener("mouseleave",e),()=>{t.removeEventListener("mouseleave",e)}},[a.floating,n,r,s,y,D]);let j=u.useCallback(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n="hover");let o=A(k.current,"close",x.current);o&&!L.current?(clearTimeout(C.current),C.current=window.setTimeout(()=>r(!1,e,n),o)):t&&(clearTimeout(C.current),r(!1,e,n))},[k,r]),B=m(()=>{_.current(),L.current=void 0}),I=m(()=>{if(O.current){let e=(0,l.Me)(a.floating).body;e.style.pointerEvents="",e.removeAttribute(S),O.current=!1}});u.useEffect(()=>{if(s&&(0,i.kK)(a.domReference)){var e;let t=a.domReference;return n&&t.addEventListener("mouseleave",f),null==(e=a.floating)||e.addEventListener("mouseleave",f),b&&t.addEventListener("mousemove",u,{once:!0}),t.addEventListener("mouseenter",u),t.addEventListener("mouseleave",c),()=>{var e;n&&t.removeEventListener("mouseleave",f),null==(e=a.floating)||e.removeEventListener("mouseleave",f),b&&t.removeEventListener("mousemove",u),t.removeEventListener("mouseenter",u),t.removeEventListener("mouseleave",c)}}function t(){return!!o.current.openEvent&&["click","mousedown"].includes(o.current.openEvent.type)}function u(e){if(clearTimeout(C.current),T.current=!1,v&&!(0,l.r)(x.current)||g>0&&!A(k.current,"open"))return;let t=A(k.current,"open",x.current);t?C.current=window.setTimeout(()=>{w.current||r(!0,e,"hover")},t):r(!0,e,"hover")}function c(e){if(t())return;_.current();let r=(0,l.Me)(a.floating);if(clearTimeout(P.current),y.current&&o.current.floatingContext){n||clearTimeout(C.current),L.current=y.current({...o.current.floatingContext,tree:E,x:e.clientX,y:e.clientY,onClose(){I(),B(),j(e,!0,"safe-polygon")}});let t=L.current;r.addEventListener("mousemove",t),_.current=()=>{r.removeEventListener("mousemove",t)};return}"touch"===x.current&&(0,l.r3)(a.floating,e.relatedTarget)||j(e)}function f(e){!t()&&o.current.floatingContext&&(null==y.current||y.current({...o.current.floatingContext,tree:E,x:e.clientX,y:e.clientY,onClose(){I(),B(),j(e)}})(e))}},[a,s,e,v,g,b,j,B,I,r,n,w,E,k,y,o]),p(()=>{var e,t;if(s&&n&&null!=(e=y.current)&&e.__options.blockPointerEvents&&D()){let e=(0,l.Me)(a.floating).body;e.setAttribute(S,""),e.style.pointerEvents="none",O.current=!0;let n=a.floating;if((0,i.kK)(a.domReference)&&n){let e=a.domReference,r=null==E||null==(t=E.nodesRef.current.find(e=>e.id===h))||null==(t=t.context)?void 0:t.elements.floating;return r&&(r.style.pointerEvents=""),e.style.pointerEvents="auto",n.style.pointerEvents="auto",()=>{e.style.pointerEvents="",n.style.pointerEvents=""}}}},[s,n,h,a,E,y,D]),p(()=>{n||(x.current=void 0,B(),I())},[n,B,I]),u.useEffect(()=>()=>{B(),clearTimeout(C.current),clearTimeout(P.current),I()},[s,a.domReference,B,I]);let N=u.useMemo(()=>{function e(e){x.current=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e;function o(){T.current||w.current||r(!0,t,"hover")}(!v||(0,l.r)(x.current))&&!n&&0!==g&&(clearTimeout(P.current),"touch"===x.current?o():P.current=window.setTimeout(o,g))}}},[v,r,n,w,g]),U=u.useMemo(()=>({onMouseEnter(){clearTimeout(C.current)},onMouseLeave(e){j(e.nativeEvent,!1)}}),[j]);return u.useMemo(()=>s?{reference:N,floating:U}:{},[s,N,U])}function _(e,t){let n=e.filter(e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)}),r=n;for(;r.length;)r=e.filter(e=>{var t;return null==(t=r)?void 0:t.some(t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)})}),n=n.concat(r);return n}let D=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function j(e,t){let n=(0,c.ht)(e,D());"prev"===t&&n.reverse();let r=n.indexOf((0,l.AW)((0,l.Me)(e)));return n.slice(r+1)[0]}function B(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!(0,l.r3)(n,r)}let I={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function N(e){"Tab"===e.key&&(e.target,clearTimeout(r))}let U=u.forwardRef(function(e,t){let[n,r]=u.useState();p(()=>((0,l.G6)()&&r("button"),document.addEventListener("keydown",N),()=>{document.removeEventListener("keydown",N)}),[]);let o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[T("focus-guard")]:"",style:I};return u.createElement("span",g({},e,o))}),q=u.createContext(null),F=T("portal");function W(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e,l=function(e){void 0===e&&(e={});let{id:t,root:n}=e,r=y(),o=Y(),[l,c]=u.useState(null),a=u.useRef(null);return p(()=>()=>{null==l||l.remove(),queueMicrotask(()=>{a.current=null})},[l]),p(()=>{if(!r||a.current)return;let e=t?document.getElementById(t):null;if(!e)return;let n=document.createElement("div");n.id=r,n.setAttribute(F,""),e.appendChild(n),a.current=n,c(n)},[t,r]),p(()=>{if(!r||a.current)return;let e=n||(null==o?void 0:o.portalNode);e&&!(0,i.kK)(e)&&(e=e.current),e=e||document.body;let u=null;t&&((u=document.createElement("div")).id=t,e.appendChild(u));let l=document.createElement("div");l.id=r,l.setAttribute(F,""),(e=u||e).appendChild(l),a.current=l,c(l)},[t,n,r,o]),l}({id:n,root:r}),[s,f]=u.useState(null),d=u.useRef(null),v=u.useRef(null),m=u.useRef(null),g=u.useRef(null),b=!!s&&!s.modal&&s.open&&o&&!!(r||l);return u.useEffect(()=>{if(l&&o&&(null==s||!s.modal))return l.addEventListener("focusin",e,!0),l.addEventListener("focusout",e,!0),()=>{l.removeEventListener("focusin",e,!0),l.removeEventListener("focusout",e,!0)};function e(e){l&&B(e)&&("focusin"===e.type?function(e){e.querySelectorAll("[data-tabindex]").forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")})}:function(e){(0,c.ht)(e,D()).forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")})})(l)}},[l,o,null==s?void 0:s.modal]),u.createElement(q.Provider,{value:u.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:d,afterOutsideRef:v,beforeInsideRef:m,afterInsideRef:g,portalNode:l,setFocusManagerState:f}),[o,l])},b&&l&&u.createElement(U,{"data-type":"outside",ref:d,onFocus:e=>{if(B(e,l)){var t;null==(t=m.current)||t.focus()}else{let e=j(document.body,"prev")||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),b&&l&&u.createElement("span",{"aria-owns":l.id,style:I}),l&&a.createPortal(t,l),b&&l&&u.createElement(U,{"data-type":"outside",ref:v,onFocus:e=>{if(B(e,l)){var t;null==(t=g.current)||t.focus()}else{let t=j(document.body,"next")||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}let Y=()=>u.useContext(q);function X(e){return(0,i.Re)(e.target)&&"BUTTON"===e.target.tagName}function H(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:c=!0,event:a="click",toggle:s=!0,ignoreMouse:f=!1,keyboardHandlers:d=!0}=t,v=u.useRef(),m=u.useRef(!1),p=u.useMemo(()=>({onPointerDown(e){v.current=e.pointerType},onMouseDown(e){let t=v.current;0===e.button&&"click"!==a&&((0,l.r)(t,!0)&&f||(n&&s&&(!o.current.openEvent||"mousedown"===o.current.openEvent.type)?r(!1,e.nativeEvent,"click"):(e.preventDefault(),r(!0,e.nativeEvent,"click"))))},onClick(e){let t=v.current;if("mousedown"===a&&v.current){v.current=void 0;return}(0,l.r)(t,!0)&&f||(n&&s&&(!o.current.openEvent||"click"===o.current.openEvent.type)?r(!1,e.nativeEvent,"click"):r(!0,e.nativeEvent,"click"))},onKeyDown(e){v.current=void 0,e.defaultPrevented||!d||X(e)||(" "!==e.key||(0,l.j7)(i)||(e.preventDefault(),m.current=!0),"Enter"===e.key&&(n&&s?r(!1,e.nativeEvent,"click"):r(!0,e.nativeEvent,"click")))},onKeyUp(e){!(e.defaultPrevented||!d||X(e)||(0,l.j7)(i))&&" "===e.key&&m.current&&(m.current=!1,n&&s?r(!1,e.nativeEvent,"click"):r(!0,e.nativeEvent,"click"))}}),[o,i,a,f,d,r,n,s]);return u.useMemo(()=>c?{reference:p}:{},[c,p])}let z={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},V={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Z=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function G(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,elements:o,dataRef:c}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:f=!0,outsidePressEvent:d="pointerdown",referencePress:v=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:b,capture:E}=t,h=M(),y=m("function"==typeof f?f:()=>!1),k="function"==typeof f?y:f,w=u.useRef(!1),x=u.useRef(!1),{escapeKey:R,outsidePress:C}=Z(b),{escapeKey:L,outsidePress:P}=Z(E),K=m(e=>{var t;if(!n||!a||!s||"Escape"!==e.key)return;let o=null==(t=c.current.floatingContext)?void 0:t.nodeId,u=h?_(h.nodesRef.current,o):[];if(!R&&(e.stopPropagation(),u.length>0)){let e=!0;if(u.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__escapeKeyBubbles){e=!1;return}}),!e)return}r(!1,(0,l.MM)(e)?e.nativeEvent:e,"escape-key")}),S=m(e=>{var t;let n=()=>{var t;K(e),null==(t=(0,l.U9)(e))||t.removeEventListener("keydown",n)};null==(t=(0,l.U9)(e))||t.addEventListener("keydown",n)}),A=m(e=>{var t;let n=w.current;w.current=!1;let u=x.current;if(x.current=!1,"click"===d&&u||n||"function"==typeof k&&!k(e))return;let a=(0,l.U9)(e),s="["+T("inert")+"]",f=(0,l.Me)(o.floating).querySelectorAll(s),v=(0,i.kK)(a)?a:null;for(;v&&!(0,i.Py)(v);){let e=(0,i.Ow)(v);if((0,i.Py)(e)||!(0,i.kK)(e))break;v=e}if(f.length&&(0,i.kK)(a)&&!(0,l.ex)(a)&&!(0,l.r3)(a,o.floating)&&Array.from(f).every(e=>!(0,l.r3)(v,e)))return;if((0,i.Re)(a)&&j){let t=a.clientWidth>0&&a.scrollWidth>a.clientWidth,n=a.clientHeight>0&&a.scrollHeight>a.clientHeight,r=n&&e.offsetX>a.clientWidth;if(n&&"rtl"===(0,i.Dx)(a).direction&&(r=e.offsetX<=a.offsetWidth-a.clientWidth),r||t&&e.offsetY>a.clientHeight)return}let m=null==(t=c.current.floatingContext)?void 0:t.nodeId,p=h&&_(h.nodesRef.current,m).some(t=>{var n;return(0,l.Pe)(e,null==(n=t.context)?void 0:n.elements.floating)});if((0,l.Pe)(e,o.floating)||(0,l.Pe)(e,o.domReference)||p)return;let g=h?_(h.nodesRef.current,m):[];if(g.length>0){let e=!0;if(g.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__outsidePressBubbles){e=!1;return}}),!e)return}r(!1,e,"outside-press")}),O=m(e=>{var t;let n=()=>{var t;A(e),null==(t=(0,l.U9)(e))||t.removeEventListener(d,n)};null==(t=(0,l.U9)(e))||t.addEventListener(d,n)});u.useEffect(()=>{if(!n||!a)return;function e(e){r(!1,e,"ancestor-scroll")}c.current.__escapeKeyBubbles=R,c.current.__outsidePressBubbles=C;let t=(0,l.Me)(o.floating);s&&t.addEventListener("keydown",L?S:K,L),k&&t.addEventListener(d,P?O:A,P);let u=[];return g&&((0,i.kK)(o.domReference)&&(u=(0,i.Kx)(o.domReference)),(0,i.kK)(o.floating)&&(u=u.concat((0,i.Kx)(o.floating))),!(0,i.kK)(o.reference)&&o.reference&&o.reference.contextElement&&(u=u.concat((0,i.Kx)(o.reference.contextElement)))),(u=u.filter(e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})).forEach(t=>{t.addEventListener("scroll",e,{passive:!0})}),()=>{s&&t.removeEventListener("keydown",L?S:K,L),k&&t.removeEventListener(d,P?O:A,P),u.forEach(t=>{t.removeEventListener("scroll",e)})}},[c,o,s,k,d,n,r,g,a,R,C,K,L,S,A,P,O]),u.useEffect(()=>{w.current=!1},[k,d]);let D=u.useMemo(()=>({onKeyDown:K,[z[p]]:e=>{v&&r(!1,e.nativeEvent,"reference-press")}}),[K,r,v,p]),j=u.useMemo(()=>({onKeyDown:K,onMouseDown(){x.current=!0},onMouseUp(){x.current=!0},[V[d]]:()=>{w.current=!0}}),[K,d]);return u.useMemo(()=>a?{reference:D,floating:j}:{},[a,D,j])}function Q(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,o=y(),l=u.useRef({}),[i]=u.useState(()=>k()),c=null!=R(),[a,s]=u.useState(r.reference),f=m((e,t,r)=>{l.current.openEvent=e?t:void 0,i.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)}),d=u.useMemo(()=>({setPositionReference:s}),[]),v=u.useMemo(()=>({reference:a||r.reference||null,floating:r.floating||null,domReference:r.reference}),[a,r.reference,r.floating]);return u.useMemo(()=>({dataRef:l,open:t,onOpenChange:f,elements:v,events:i,floatingId:o,refs:d}),[t,f,v,i,o,d])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[l,c]=u.useState(null),[a,f]=u.useState(null),d=(null==o?void 0:o.reference)||l,v=u.useRef(null),g=M();p(()=>{d&&(v.current=d)},[d]);let b=(0,s.YF)({...e,elements:{...o,...a&&{reference:a}}}),E=u.useCallback(e=>{let t=(0,i.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;f(t),b.refs.setReference(t)},[b.refs]),h=u.useCallback(e=>{((0,i.kK)(e)||null===e)&&(v.current=e,c(e)),((0,i.kK)(b.refs.reference.current)||null===b.refs.reference.current||null!==e&&!(0,i.kK)(e))&&b.refs.setReference(e)},[b.refs]),w=u.useMemo(()=>({...b.refs,setReference:h,setPositionReference:E,domReference:v}),[b.refs,h,E]),x=u.useMemo(()=>({...b.elements,domReference:d}),[b.elements,d]),C=u.useMemo(()=>({...b,...r,refs:w,elements:x,nodeId:t}),[b,w,x,t,r]);return p(()=>{r.dataRef.current.floatingContext=C;let e=null==g?void 0:g.nodesRef.current.find(e=>e.id===t);e&&(e.context=C)}),u.useMemo(()=>({...b,context:C,refs:w,elements:x}),[b,w,x,C])}let J="active",$="selected";function ee(e,t,n){let r=new Map,o="item"===n,u=e;if(o&&e){let{[J]:t,[$]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(o&&[J,$].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var l;null==(l=r.get(n))||l.push(u),e[n]=function(){for(var e,t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...o)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function et(e){void 0===e&&(e=[]);let t=e.map(e=>null==e?void 0:e.reference),n=e.map(e=>null==e?void 0:e.floating),r=e.map(e=>null==e?void 0:e.item),o=u.useCallback(t=>ee(t,e,"reference"),t),l=u.useCallback(t=>ee(t,e,"floating"),n),i=u.useCallback(t=>ee(t,e,"item"),r);return u.useMemo(()=>({getReferenceProps:o,getFloatingProps:l,getItemProps:i}),[o,l,i])}let en=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function er(e,t){var n;void 0===t&&(t={});let{open:r,floatingId:o}=e,{enabled:l=!0,role:i="dialog"}=t,c=null!=(n=en.get(i))?n:i,a=y(),s=null!=R(),f=u.useMemo(()=>"tooltip"===c||"label"===i?{["aria-"+("label"===i?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":"alertdialog"===c?"dialog":c,"aria-controls":r?o:void 0,..."listbox"===c&&{role:"combobox"},..."menu"===c&&{id:a},..."menu"===c&&s&&{role:"menuitem"},..."select"===i&&{"aria-autocomplete":"none"},..."combobox"===i&&{"aria-autocomplete":"list"}},[c,o,s,r,a,i]),d=u.useMemo(()=>{let e={id:o,...c&&{role:c}};return"tooltip"===c||"label"===i?e:{...e,..."menu"===c&&{"aria-labelledby":a}}},[c,o,a,i]),v=u.useCallback(e=>{let{active:t,selected:n}=e,r={role:"option",...t&&{id:o+"-option"}};switch(i){case"select":return{...r,"aria-selected":t&&n};case"combobox":return{...r,...t&&{"aria-selected":!0}}}return{}},[o,i]);return u.useMemo(()=>l?{reference:f,floating:d,item:v}:{},[l,f,d,v])}let eo=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,t)=>(t?"-":"")+e.toLowerCase());function eu(e,t){return"function"==typeof e?e(t):e}function el(e,t){void 0===t&&(t={});let{initial:n={opacity:0},open:r,close:o,common:l,duration:i=250}=t,c=e.placement,a=c.split("-")[0],s=u.useMemo(()=>({side:a,placement:c}),[a,c]),f="number"==typeof i,d=(f?i:i.open)||0,v=(f?i:i.close)||0,[m,g]=u.useState(()=>({...eu(l,s),...eu(n,s)})),{isMounted:b,status:E}=function(e,t){void 0===t&&(t={});let{open:n,elements:{floating:r}}=e,{duration:o=250}=t,l=("number"==typeof o?o:o.close)||0,[i,c]=u.useState("unmounted"),a=function(e,t){let[n,r]=u.useState(e);return e&&!n&&r(!0),u.useEffect(()=>{if(!e&&n){let e=setTimeout(()=>r(!1),t);return()=>clearTimeout(e)}},[e,n,t]),n}(n,l);return a||"close"!==i||c("unmounted"),p(()=>{if(r){if(n){c("initial");let e=requestAnimationFrame(()=>{c("open")});return()=>{cancelAnimationFrame(e)}}c("close")}},[n,r]),{isMounted:a,status:i}}(e,{duration:i}),h=K(n),y=K(r),k=K(o),w=K(l);return p(()=>{let e=eu(h.current,s),t=eu(k.current,s),n=eu(w.current,s),r=eu(y.current,s)||Object.keys(e).reduce((e,t)=>(e[t]="",e),{});if("initial"===E&&g(t=>({transitionProperty:t.transitionProperty,...n,...e})),"open"===E&&g({transitionProperty:Object.keys(r).map(eo).join(","),transitionDuration:d+"ms",...n,...r}),"close"===E){let r=t||e;g({transitionProperty:Object.keys(r).map(eo).join(","),transitionDuration:v+"ms",...n,...r})}},[v,k,h,y,w,d,E,s]),{isMounted:b,styles:m}}function ei(e,t){let[n,r]=e,o=!1,u=t.length;for(let e=0,l=u-1;e<u;l=e++){let[u,i]=t[e]||[0,0],[c,a]=t[l]||[0,0];i>=r!=a>=r&&n<=(c-u)*(r-i)/(a-i)+u&&(o=!o)}return o}function ec(e){let t;void 0===e&&(e={});let{buffer:n=.5,blockPointerEvents:r=!1,requireIntent:o=!0}=e,u=!1,c=null,a=null,s=performance.now(),f=e=>{let{x:r,y:f,placement:d,elements:v,onClose:m,nodeId:p,tree:g}=e;return function(e){function b(){clearTimeout(t),m()}if(clearTimeout(t),!v.domReference||!v.floating||null==d||null==r||null==f)return;let{clientX:E,clientY:h}=e,y=[E,h],k=(0,l.U9)(e),w="mouseleave"===e.type,x=(0,l.r3)(v.floating,k),R=(0,l.r3)(v.domReference,k),M=v.domReference.getBoundingClientRect(),C=v.floating.getBoundingClientRect(),L=d.split("-")[0],P=r>C.right-C.width/2,T=f>C.bottom-C.height/2,K=y[0]>=M.x&&y[0]<=M.x+M.width&&y[1]>=M.y&&y[1]<=M.y+M.height,S=C.width>M.width,A=C.height>M.height,O=(S?M:C).left,D=(S?M:C).right,j=(A?M:C).top,B=(A?M:C).bottom;if(x&&(u=!0,!w))return;if(R&&(u=!1),R&&!w){u=!0;return}if(w&&(0,i.kK)(e.relatedTarget)&&(0,l.r3)(v.floating,e.relatedTarget)||g&&_(g.nodesRef.current,p).some(e=>{let{context:t}=e;return null==t?void 0:t.open}))return;if("top"===L&&f>=M.bottom-1||"bottom"===L&&f<=M.top+1||"left"===L&&r>=M.right-1||"right"===L&&r<=M.left+1)return b();let I=[];switch(L){case"top":I=[[O,M.top+1],[O,C.bottom-1],[D,C.bottom-1],[D,M.top+1]];break;case"bottom":I=[[O,C.top+1],[O,M.bottom-1],[D,M.bottom-1],[D,C.top+1]];break;case"left":I=[[C.right-1,B],[C.right-1,j],[M.left+1,j],[M.left+1,B]];break;case"right":I=[[M.right-1,B],[M.right-1,j],[C.left+1,j],[C.left+1,B]]}if(!ei([E,h],I)){if(u&&!K)return b();if(!w&&o){let t=function(e,t){let n=performance.now(),r=n-s;if(null===c||null===a||0===r)return c=e,a=t,s=n,null;let o=e-c,u=t-a;return c=e,a=t,s=n,Math.sqrt(o*o+u*u)/r}(e.clientX,e.clientY);if(null!==t&&t<.1)return b()}ei([E,h],function(e){let[t,r]=e;switch(L){case"top":{let e=[[C.left,P?C.bottom-n:S?C.bottom-n:C.top],[C.right,P?S?C.bottom-n:C.top:C.bottom-n]];return[[S?t+n/2:P?t+4*n:t-4*n,r+n+1],[S?t-n/2:P?t+4*n:t-4*n,r+n+1],...e]}case"bottom":{let e=[[C.left,P?C.top+n:S?C.top+n:C.bottom],[C.right,P?S?C.top+n:C.bottom:C.top+n]];return[[S?t+n/2:P?t+4*n:t-4*n,r-n],[S?t-n/2:P?t+4*n:t-4*n,r-n],...e]}case"left":return[[T?C.right-n:A?C.right-n:C.left,C.top],[T?A?C.right-n:C.left:C.right-n,C.bottom],[t+n+1,A?r+n/2:T?r+4*n:r-4*n],[t+n+1,A?r-n/2:T?r+4*n:r-4*n]];case"right":{let e=[[T?C.left+n:A?C.left+n:C.right,C.top],[T?A?C.left+n:C.right:C.left+n,C.bottom]];return[[t-n,A?r+n/2:T?r+4*n:r-4*n],[t-n,A?r-n/2:T?r+4*n:r-4*n],...e]}}}([r,f]))?!u&&o&&(t=window.setTimeout(b,40)):b()}}};return f.__options={blockPointerEvents:r},f}}}]);