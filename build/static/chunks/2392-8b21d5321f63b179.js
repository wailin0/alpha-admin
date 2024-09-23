"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2392],{68984:function(t,e,n){n.d(e,{Wq:function(){return T},ht:function(){return A}});var r='input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',o="undefined"==typeof Element,i=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!o&&Element.prototype.getRootNode?function(t){var e;return null==t?void 0:null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return null==t?void 0:t.ownerDocument},l=function t(e,n){void 0===n&&(n=!0);var r,o=null==e?void 0:null===(r=e.getAttribute)||void 0===r?void 0:r.call(e,"inert");return""===o||"true"===o||n&&e&&t(e.parentNode)},f=function(t){var e,n=null==t?void 0:null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n},c=function(t,e,n){if(l(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(r));return e&&i.call(t,r)&&o.unshift(t),o=o.filter(n)},a=function t(e,n,o){for(var u=[],f=Array.from(e);f.length;){var c=f.shift();if(!l(c,!1)){if("SLOT"===c.tagName){var a=c.assignedElements(),s=t(a.length?a:c.children,!0,o);o.flatten?u.push.apply(u,s):u.push({scopeParent:c,candidates:s})}else{i.call(c,r)&&o.filter(c)&&(n||!e.includes(c))&&u.push(c);var d=c.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(c),p=!l(d,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(c));if(d&&p){var h=t(!0===d?c.children:d.children,!0,o);o.flatten?u.push.apply(u,h):u.push({scopeParent:c,candidates:h})}else f.unshift.apply(f,c.children)}}}return u},s=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},d=function(t){if(!t)throw Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||f(t))&&!s(t)?0:t.tabIndex},p=function(t,e){var n=d(t);return n<0&&e&&!s(t)?0:n},h=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},m=function(t){return"INPUT"===t.tagName},g=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]},y=function(t){if(!t.name)return!0;var e,n=t.form||u(t),r=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name));else try{e=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=g(e,t.form);return!o||o===t},w=function(t){var e,n,r,o,i,l,f,c=t&&u(t),a=null===(e=c)||void 0===e?void 0:e.host,s=!1;if(c&&c!==t)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!s&&a;)s=!!(null!==(l=a=null===(i=c=u(a))||void 0===i?void 0:i.host)&&void 0!==l&&null!==(f=l.ownerDocument)&&void 0!==f&&f.contains(a));return s},v=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return 0===n&&0===r},x=function(t,e){var n=e.displayCheck,r=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=i.call(t,"details>summary:first-of-type")?t.parentElement:t;if(i.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return v(t)}else{if("function"==typeof r){for(var l=t;t;){var f=t.parentElement,c=u(t);if(f&&!f.shadowRoot&&!0===r(f))return v(t);t=t.assignedSlot?t.assignedSlot:f||c===t.ownerDocument?f:c.host}t=l}if(w(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1},b=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n);if("LEGEND"===r.tagName)return!!i.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1},R=function(t,e){var n,r,o;return!(m(n=e)&&"radio"===n.type&&!y(n)||0>d(e))&&(r=t,!((o=e).disabled||l(o)||m(o)&&"hidden"===o.type||x(o,r)||"DETAILS"===o.tagName&&Array.prototype.slice.apply(o.children).some(function(t){return"SUMMARY"===t.tagName})||b(o)))},k=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!isNaN(e)||e>=0},E=function t(e){var n=[],r=[];return e.forEach(function(e,o){var i=!!e.scopeParent,u=i?e.scopeParent:e,l=p(u,i),f=i?t(e.candidates):u;0===l?i?n.push.apply(n,f):n.push(u):r.push({documentOrder:o,tabIndex:l,item:e,isScope:i,content:f})}),r.sort(h).reduce(function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t},[]).concat(n)},A=function(t,e){return E((e=e||{}).getShadowRoot?a([t],e.includeContainer,{filter:R.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:k}):c(t,e.includeContainer,R.bind(null,e)))},T=function(t,e){if(e=e||{},!t)throw Error("No node provided");return!1!==i.call(t,r)&&R(e,t)}},20021:function(t,e,n){n.d(e,{x7:function(){return N},X5:function(){return L},Me:function(){return A},oo:function(){return M},US:function(){return T},RR:function(){return F},Cp:function(){return C},Qo:function(){return O},dr:function(){return V},cv:function(){return S},Jv:function(){return E},uY:function(){return D},dp:function(){return P}});var r=n(55856);function o(t,e,n){let o,{reference:i,floating:u}=t,l=(0,r.Qq)(e),f=(0,r.Wh)(e),c=(0,r.I4)(f),a=(0,r.k3)(e),s="y"===l,d=i.x+i.width/2-u.width/2,p=i.y+i.height/2-u.height/2,h=i[c]/2-u[c]/2;switch(a){case"top":o={x:d,y:i.y-u.height};break;case"bottom":o={x:d,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:p};break;case"left":o={x:i.x-u.width,y:p};break;default:o={x:i.x,y:i.y}}switch((0,r.hp)(e)){case"start":o[f]-=h*(n&&s?-1:1);break;case"end":o[f]+=h*(n&&s?-1:1)}return o}let i=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:u=[],platform:l}=n,f=u.filter(Boolean),c=await (null==l.isRTL?void 0:l.isRTL(e)),a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:s,y:d}=o(a,r,c),p=r,h={},m=0;for(let n=0;n<f.length;n++){let{name:u,fn:g}=f[n],{x:y,y:w,data:v,reset:x}=await g({x:s,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:h,rects:a,platform:l,elements:{reference:t,floating:e}});s=null!=y?y:s,d=null!=w?w:d,h={...h,[u]:{...h[u],...v}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(a=!0===x.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:s,y:d}=o(a,p,c)),n=-1)}return{x:s,y:d,placement:p,strategy:i,middlewareData:h}};async function u(t,e){var n;void 0===e&&(e={});let{x:o,y:i,platform:u,rects:l,elements:f,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:s="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=(0,r.ku)(e,t),m=(0,r.yd)(h),g=f[p?"floating"===d?"reference":"floating":d],y=(0,r.JB)(await u.getClippingRect({element:null==(n=await (null==u.isElement?void 0:u.isElement(g)))||n?g:g.contextElement||await (null==u.getDocumentElement?void 0:u.getDocumentElement(f.floating)),boundary:a,rootBoundary:s,strategy:c})),w="floating"===d?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,v=await (null==u.getOffsetParent?void 0:u.getOffsetParent(f.floating)),x=await (null==u.isElement?void 0:u.isElement(v))&&await (null==u.getScale?void 0:u.getScale(v))||{x:1,y:1},b=(0,r.JB)(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:v,strategy:c}):w);return{top:(y.top-b.top+m.top)/x.y,bottom:(b.bottom-y.bottom+m.bottom)/x.y,left:(y.left-b.left+m.left)/x.x,right:(b.right-y.right+m.right)/x.x}}function l(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function f(t){return r.mA.some(e=>t[e]>=0)}function c(t){let e=(0,r.VV)(...t.map(t=>t.left)),n=(0,r.VV)(...t.map(t=>t.top));return{x:e,y:n,width:(0,r.Fp)(...t.map(t=>t.right))-e,height:(0,r.Fp)(...t.map(t=>t.bottom))-n}}async function a(t,e){let{placement:n,platform:o,elements:i}=t,u=await (null==o.isRTL?void 0:o.isRTL(i.floating)),l=(0,r.k3)(n),f=(0,r.hp)(n),c="y"===(0,r.Qq)(n),a=["left","top"].includes(l)?-1:1,s=u&&c?-1:1,d=(0,r.ku)(e,t),{mainAxis:p,crossAxis:h,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return f&&"number"==typeof m&&(h="end"===f?-1*m:m),c?{x:h*s,y:p*a}:{x:p*a,y:h*s}}var s=n(9896);function d(t){let e=(0,s.Dx)(t),n=parseFloat(e.width)||0,o=parseFloat(e.height)||0,i=(0,s.Re)(t),u=i?t.offsetWidth:n,l=i?t.offsetHeight:o,f=(0,r.NM)(n)!==u||(0,r.NM)(o)!==l;return f&&(n=u,o=l),{width:n,height:o,$:f}}function p(t){return(0,s.kK)(t)?t:t.contextElement}function h(t){let e=p(t);if(!(0,s.Re)(e))return(0,r.ze)(1);let n=e.getBoundingClientRect(),{width:o,height:i,$:u}=d(e),l=(u?(0,r.NM)(n.width):n.width)/o,f=(u?(0,r.NM)(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),f&&Number.isFinite(f)||(f=1),{x:l,y:f}}let m=(0,r.ze)(0);function g(t){let e=(0,s.Jj)(t);return(0,s.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:m}function y(t,e,n,o){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let u=t.getBoundingClientRect(),l=p(t),f=(0,r.ze)(1);e&&(o?(0,s.kK)(o)&&(f=h(o)):f=h(t));let c=(void 0===(i=n)&&(i=!1),o&&(!i||o===(0,s.Jj)(l))&&i)?g(l):(0,r.ze)(0),a=(u.left+c.x)/f.x,d=(u.top+c.y)/f.y,m=u.width/f.x,y=u.height/f.y;if(l){let t=(0,s.Jj)(l),e=o&&(0,s.kK)(o)?(0,s.Jj)(o):o,n=t,r=(0,s.wK)(n);for(;r&&o&&e!==n;){let t=h(r),e=r.getBoundingClientRect(),o=(0,s.Dx)(r),i=e.left+(r.clientLeft+parseFloat(o.paddingLeft))*t.x,u=e.top+(r.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,d*=t.y,m*=t.x,y*=t.y,a+=i,d+=u,n=(0,s.Jj)(r),r=(0,s.wK)(n)}}return(0,r.JB)({width:m,height:y,x:a,y:d})}function w(t,e){let n=(0,s.Lw)(t).scrollLeft;return e?e.left+n:y((0,s.tF)(t)).left+n}function v(t,e,n){let o;if("viewport"===e)o=function(t,e){let n=(0,s.Jj)(t),r=(0,s.tF)(t),o=n.visualViewport,i=r.clientWidth,u=r.clientHeight,l=0,f=0;if(o){i=o.width,u=o.height;let t=(0,s.Pf)();(!t||t&&"fixed"===e)&&(l=o.offsetLeft,f=o.offsetTop)}return{width:i,height:u,x:l,y:f}}(t,n);else if("document"===e)o=function(t){let e=(0,s.tF)(t),n=(0,s.Lw)(t),o=t.ownerDocument.body,i=(0,r.Fp)(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),u=(0,r.Fp)(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),l=-n.scrollLeft+w(t),f=-n.scrollTop;return"rtl"===(0,s.Dx)(o).direction&&(l+=(0,r.Fp)(e.clientWidth,o.clientWidth)-i),{width:i,height:u,x:l,y:f}}((0,s.tF)(t));else if((0,s.kK)(e))o=function(t,e){let n=y(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,u=(0,s.Re)(t)?h(t):(0,r.ze)(1),l=t.clientWidth*u.x;return{width:l,height:t.clientHeight*u.y,x:i*u.x,y:o*u.y}}(e,n);else{let n=g(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return(0,r.JB)(o)}function x(t){return"static"===(0,s.Dx)(t).position}function b(t,e){if(!(0,s.Re)(t)||"fixed"===(0,s.Dx)(t).position)return null;if(e)return e(t);let n=t.offsetParent;return(0,s.tF)(t)===n&&(n=n.ownerDocument.body),n}function R(t,e){let n=(0,s.Jj)(t);if((0,s.tR)(t))return n;if(!(0,s.Re)(t)){let e=(0,s.Ow)(t);for(;e&&!(0,s.Py)(e);){if((0,s.kK)(e)&&!x(e))return e;e=(0,s.Ow)(e)}return n}let r=b(t,e);for(;r&&(0,s.Ze)(r)&&x(r);)r=b(r,e);return r&&(0,s.Py)(r)&&x(r)&&!(0,s.hT)(r)?n:r||(0,s.gQ)(t)||n}let k=async function(t){let e=this.getOffsetParent||R,n=this.getDimensions,o=await n(t.floating);return{reference:function(t,e,n){let o=(0,s.Re)(e),i=(0,s.tF)(e),u="fixed"===n,l=y(t,!0,u,e),f={scrollLeft:0,scrollTop:0},c=(0,r.ze)(0);if(o||!o&&!u){if(("body"!==(0,s.wk)(e)||(0,s.ao)(i))&&(f=(0,s.Lw)(e)),o){let t=y(e,!0,u,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=w(i))}let a=0,d=0;if(i&&!o&&!u){let t=i.getBoundingClientRect();d=t.top+f.scrollTop,a=t.left+f.scrollLeft-w(i,t)}return{x:l.left+f.scrollLeft-c.x-a,y:l.top+f.scrollTop-c.y-d,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},E={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t,u="fixed"===i,l=(0,s.tF)(o),f=!!e&&(0,s.tR)(e.floating);if(o===l||f&&u)return n;let c={scrollLeft:0,scrollTop:0},a=(0,r.ze)(1),d=(0,r.ze)(0),p=(0,s.Re)(o);if((p||!p&&!u)&&(("body"!==(0,s.wk)(o)||(0,s.ao)(l))&&(c=(0,s.Lw)(o)),(0,s.Re)(o))){let t=y(o);a=h(o),d.x=t.x+o.clientLeft,d.y=t.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+d.x,y:n.y*a.y-c.scrollTop*a.y+d.y}},getDocumentElement:s.tF,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t,u=[..."clippingAncestors"===n?(0,s.tR)(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=(0,s.Kx)(t,[],!1).filter(t=>(0,s.kK)(t)&&"body"!==(0,s.wk)(t)),o=null,i="fixed"===(0,s.Dx)(t).position,u=i?(0,s.Ow)(t):t;for(;(0,s.kK)(u)&&!(0,s.Py)(u);){let e=(0,s.Dx)(u),n=(0,s.hT)(u);n||"fixed"!==e.position||(o=null),(i?!n&&!o:!n&&"static"===e.position&&!!o&&["absolute","fixed"].includes(o.position)||(0,s.ao)(u)&&!n&&function t(e,n){let r=(0,s.Ow)(e);return!(r===n||!(0,s.kK)(r)||(0,s.Py)(r))&&("fixed"===(0,s.Dx)(r).position||t(r,n))}(t,u))?r=r.filter(t=>t!==u):o=e,u=(0,s.Ow)(u)}return e.set(t,r),r}(e,this._c):[].concat(n),o],l=u[0],f=u.reduce((t,n)=>{let o=v(e,n,i);return t.top=(0,r.Fp)(o.top,t.top),t.right=(0,r.VV)(o.right,t.right),t.bottom=(0,r.VV)(o.bottom,t.bottom),t.left=(0,r.Fp)(o.left,t.left),t},v(e,l,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:R,getElementRects:k,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=d(t);return{width:e,height:n}},getScale:h,isElement:s.kK,isRTL:function(t){return"rtl"===(0,s.Dx)(t).direction}};function A(t,e,n,o){let i;void 0===o&&(o={});let{ancestorScroll:u=!0,ancestorResize:l=!0,elementResize:f="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:a=!1}=o,d=p(t),h=u||l?[...d?(0,s.Kx)(d):[],...(0,s.Kx)(e)]:[];h.forEach(t=>{u&&t.addEventListener("scroll",n,{passive:!0}),l&&t.addEventListener("resize",n)});let m=d&&c?function(t,e){let n,o=null,i=(0,s.tF)(t);function u(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return!function l(f,c){void 0===f&&(f=!1),void 0===c&&(c=1),u();let{left:a,top:s,width:d,height:p}=t.getBoundingClientRect();if(f||e(),!d||!p)return;let h=(0,r.GW)(s),m=(0,r.GW)(i.clientWidth-(a+d)),g={rootMargin:-h+"px "+-m+"px "+-(0,r.GW)(i.clientHeight-(s+p))+"px "+-(0,r.GW)(a)+"px",threshold:(0,r.Fp)(0,(0,r.VV)(1,c))||1},y=!0;function w(t){let e=t[0].intersectionRatio;if(e!==c){if(!y)return l();e?l(!1,e):n=setTimeout(()=>{l(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(w,{...g,root:i.ownerDocument})}catch(t){o=new IntersectionObserver(w,g)}o.observe(t)}(!0),u}(d,n):null,g=-1,w=null;f&&(w=new ResizeObserver(t=>{let[r]=t;r&&r.target===d&&w&&(w.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=w)||t.observe(e)})),n()}),d&&!a&&w.observe(d),w.observe(e));let v=a?y(t):null;return a&&function e(){let r=y(t);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,i=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach(t=>{u&&t.removeEventListener("scroll",n),l&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=w)||t.disconnect(),w=null,a&&cancelAnimationFrame(i)}}let T=u,S=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,r;let{x:o,y:i,placement:u,middlewareData:l}=e,f=await a(e,t);return u===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+f.x,y:i+f.y,data:{...f,placement:u}}}}},L=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i,l;let{rects:f,middlewareData:c,placement:a,platform:s,elements:d}=e,{crossAxis:p=!1,alignment:h,allowedPlacements:m=r.Ct,autoAlignment:g=!0,...y}=(0,r.ku)(t,e),w=void 0!==h||m===r.Ct?((l=h||null)?[...m.filter(t=>(0,r.hp)(t)===l),...m.filter(t=>(0,r.hp)(t)!==l)]:m.filter(t=>(0,r.k3)(t)===t)).filter(t=>!l||(0,r.hp)(t)===l||!!g&&(0,r.Go)(t)!==t):m,v=await u(e,y),x=(null==(n=c.autoPlacement)?void 0:n.index)||0,b=w[x];if(null==b)return{};let R=(0,r.i8)(b,f,await (null==s.isRTL?void 0:s.isRTL(d.floating)));if(a!==b)return{reset:{placement:w[0]}};let k=[v[(0,r.k3)(b)],v[R[0]],v[R[1]]],E=[...(null==(o=c.autoPlacement)?void 0:o.overflows)||[],{placement:b,overflows:k}],A=w[x+1];if(A)return{data:{index:x+1,overflows:E},reset:{placement:A}};let T=E.map(t=>{let e=(0,r.hp)(t.placement);return[t.placement,e&&p?t.overflows.slice(0,2).reduce((t,e)=>t+e,0):t.overflows[0],t.overflows]}).sort((t,e)=>t[1]-e[1]),S=(null==(i=T.filter(t=>t[2].slice(0,(0,r.hp)(t[0])?2:3).every(t=>t<=0))[0])?void 0:i[0])||T[0][0];return S!==a?{data:{index:x+1,overflows:E},reset:{placement:S}}:{}}}},D=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:o,placement:i}=e,{mainAxis:l=!0,crossAxis:f=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=(0,r.ku)(t,e),s={x:n,y:o},d=await u(e,a),p=(0,r.Qq)((0,r.k3)(i)),h=(0,r.Rn)(p),m=s[h],g=s[p];if(l){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",n=m+d[t],o=m-d[e];m=(0,r.uZ)(n,m,o)}if(f){let t="y"===p?"top":"left",e="y"===p?"bottom":"right",n=g+d[t],o=g-d[e];g=(0,r.uZ)(n,g,o)}let y=c.fn({...e,[h]:m,[p]:g});return{...y,data:{x:y.x-n,y:y.y-o,enabled:{[h]:l,[p]:f}}}}}},F=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o,i,l,f;let{placement:c,middlewareData:a,rects:s,initialPlacement:d,platform:p,elements:h}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:y,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...b}=(0,r.ku)(t,e);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};let R=(0,r.k3)(c),k=(0,r.Qq)(d),E=(0,r.k3)(d)===d,A=await (null==p.isRTL?void 0:p.isRTL(h.floating)),T=y||(E||!x?[(0,r.pw)(d)]:(0,r.gy)(d)),S="none"!==v;!y&&S&&T.push(...(0,r.KX)(d,x,v,A));let L=[d,...T],D=await u(e,b),F=[],P=(null==(o=a.flip)?void 0:o.overflows)||[];if(m&&F.push(D[R]),g){let t=(0,r.i8)(c,s,A);F.push(D[t[0]],D[t[1]])}if(P=[...P,{placement:c,overflows:F}],!F.every(t=>t<=0)){let t=((null==(i=a.flip)?void 0:i.index)||0)+1,e=L[t];if(e)return{data:{index:t,overflows:P},reset:{placement:e}};let n=null==(l=P.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:l.placement;if(!n)switch(w){case"bestFit":{let t=null==(f=P.filter(t=>{if(S){let e=(0,r.Qq)(t.placement);return e===k||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:f[0];t&&(n=t);break}case"initialPlacement":n=d}if(c!==n)return{reset:{placement:n}}}return{}}}},P=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var n,o;let i,l;let{placement:f,rects:c,platform:a,elements:s}=e,{apply:d=()=>{},...p}=(0,r.ku)(t,e),h=await u(e,p),m=(0,r.k3)(f),g=(0,r.hp)(f),y="y"===(0,r.Qq)(f),{width:w,height:v}=c.floating;"top"===m||"bottom"===m?(i=m,l=g===(await (null==a.isRTL?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(l=m,i="end"===g?"top":"bottom");let x=v-h.top-h.bottom,b=w-h.left-h.right,R=(0,r.VV)(v-h[i],x),k=(0,r.VV)(w-h[l],b),E=!e.middlewareData.shift,A=R,T=k;if(null!=(n=e.middlewareData.shift)&&n.enabled.x&&(T=b),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(A=x),E&&!g){let t=(0,r.Fp)(h.left,0),e=(0,r.Fp)(h.right,0),n=(0,r.Fp)(h.top,0),o=(0,r.Fp)(h.bottom,0);y?T=w-2*(0!==t||0!==e?t+e:(0,r.Fp)(h.left,h.right)):A=v-2*(0!==n||0!==o?n+o:(0,r.Fp)(h.top,h.bottom))}await d({...e,availableWidth:T,availableHeight:A});let S=await a.getDimensions(s.floating);return w!==S.width||v!==S.height?{reset:{rects:!0}}:{}}}},C=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){let{rects:n}=e,{strategy:o="referenceHidden",...i}=(0,r.ku)(t,e);switch(o){case"referenceHidden":{let t=l(await u(e,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:f(t)}}}case"escaped":{let t=l(await u(e,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:f(t)}}}default:return{}}}}},N=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:o,placement:i,rects:u,platform:l,elements:f,middlewareData:c}=e,{element:a,padding:s=0}=(0,r.ku)(t,e)||{};if(null==a)return{};let d=(0,r.yd)(s),p={x:n,y:o},h=(0,r.Wh)(i),m=(0,r.I4)(h),g=await l.getDimensions(a),y="y"===h,w=y?"clientHeight":"clientWidth",v=u.reference[m]+u.reference[h]-p[h]-u.floating[m],x=p[h]-u.reference[h],b=await (null==l.getOffsetParent?void 0:l.getOffsetParent(a)),R=b?b[w]:0;R&&await (null==l.isElement?void 0:l.isElement(b))||(R=f.floating[w]||u.floating[m]);let k=R/2-g[m]/2-1,E=(0,r.VV)(d[y?"top":"left"],k),A=(0,r.VV)(d[y?"bottom":"right"],k),T=R-g[m]-A,S=R/2-g[m]/2+(v/2-x/2),L=(0,r.uZ)(E,S,T),D=!c.arrow&&null!=(0,r.hp)(i)&&S!==L&&u.reference[m]/2-(S<E?E:A)-g[m]/2<0,F=D?S<E?S-E:S-T:0;return{[h]:p[h]+F,data:{[h]:L,centerOffset:S-L-F,...D&&{alignmentOffset:F}},reset:D}}}),O=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){let{placement:n,elements:o,rects:i,platform:u,strategy:l}=e,{padding:f=2,x:a,y:s}=(0,r.ku)(t,e),d=Array.from(await (null==u.getClientRects?void 0:u.getClientRects(o.reference))||[]),p=function(t){let e=t.slice().sort((t,e)=>t.y-e.y),n=[],o=null;for(let t=0;t<e.length;t++){let r=e[t];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(t=>(0,r.JB)(c(t)))}(d),h=(0,r.JB)(c(d)),m=(0,r.yd)(f),g=await u.getElementRects({reference:{getBoundingClientRect:function(){if(2===p.length&&p[0].left>p[1].right&&null!=a&&null!=s)return p.find(t=>a>t.left-m.left&&a<t.right+m.right&&s>t.top-m.top&&s<t.bottom+m.bottom)||h;if(p.length>=2){if("y"===(0,r.Qq)(n)){let t=p[0],e=p[p.length-1],o="top"===(0,r.k3)(n),i=t.top,u=e.bottom,l=o?t.left:e.left,f=o?t.right:e.right;return{top:i,bottom:u,left:l,right:f,width:f-l,height:u-i,x:l,y:i}}let t="left"===(0,r.k3)(n),e=(0,r.Fp)(...p.map(t=>t.right)),o=(0,r.VV)(...p.map(t=>t.left)),i=p.filter(n=>t?n.left===o:n.right===e),u=i[0].top,l=i[i.length-1].bottom;return{top:u,bottom:l,left:o,right:e,width:e-o,height:l-u,x:o,y:u}}return h}},floating:o.floating,strategy:l});return i.reference.x!==g.reference.x||i.reference.y!==g.reference.y||i.reference.width!==g.reference.width||i.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}},V=function(t){return void 0===t&&(t={}),{options:t,fn(e){let{x:n,y:o,placement:i,rects:u,middlewareData:l}=e,{offset:f=0,mainAxis:c=!0,crossAxis:a=!0}=(0,r.ku)(t,e),s={x:n,y:o},d=(0,r.Qq)(i),p=(0,r.Rn)(d),h=s[p],m=s[d],g=(0,r.ku)(f,e),y="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){let t="y"===p?"height":"width",e=u.reference[p]-u.floating[t]+y.mainAxis,n=u.reference[p]+u.reference[t]-y.mainAxis;h<e?h=e:h>n&&(h=n)}if(a){var w,v;let t="y"===p?"width":"height",e=["top","left"].includes((0,r.k3)(i)),n=u.reference[d]-u.floating[t]+(e&&(null==(w=l.offset)?void 0:w[d])||0)+(e?0:y.crossAxis),o=u.reference[d]+u.reference[t]+(e?0:(null==(v=l.offset)?void 0:v[d])||0)-(e?y.crossAxis:0);m<n?m=n:m>o&&(m=o)}return{[p]:h,[d]:m}}}},M=(t,e,n)=>{let r=new Map,o={platform:E,...n},u={...o.platform,_c:r};return i(t,e,{...o,platform:u})}},21302:function(t,e,n){n.d(e,{Cp:function(){return v},Qo:function(){return x},RR:function(){return g},X5:function(){return w},YF:function(){return s},cv:function(){return p},dp:function(){return y},dr:function(){return m},uY:function(){return h},x7:function(){return b}});var r=n(20021),o=n(31229),i=n(90339),u="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function l(t,e){let n,r,o;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!l(t[r],e[r]))return!1;return!0}if((n=(o=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(e,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!t.$$typeof)&&!l(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function f(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function c(t,e){let n=f(t);return Math.round(e*n)/n}function a(t){let e=o.useRef(t);return u(()=>{e.current=t}),e}function s(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:s=[],platform:d,elements:{reference:p,floating:h}={},transform:m=!0,whileElementsMounted:g,open:y}=t,[w,v]=o.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[x,b]=o.useState(s);l(x,s)||b(s);let[R,k]=o.useState(null),[E,A]=o.useState(null),T=o.useCallback(t=>{t!==F.current&&(F.current=t,k(t))},[]),S=o.useCallback(t=>{t!==P.current&&(P.current=t,A(t))},[]),L=p||R,D=h||E,F=o.useRef(null),P=o.useRef(null),C=o.useRef(w),N=null!=g,O=a(g),V=a(d),M=a(y),I=o.useCallback(()=>{if(!F.current||!P.current)return;let t={placement:e,strategy:n,middleware:x};V.current&&(t.platform=V.current),(0,r.oo)(F.current,P.current,t).then(t=>{let e={...t,isPositioned:!1!==M.current};W.current&&!l(C.current,e)&&(C.current=e,i.flushSync(()=>{v(e)}))})},[x,e,n,V,M]);u(()=>{!1===y&&C.current.isPositioned&&(C.current.isPositioned=!1,v(t=>({...t,isPositioned:!1})))},[y]);let W=o.useRef(!1);u(()=>(W.current=!0,()=>{W.current=!1}),[]),u(()=>{if(L&&(F.current=L),D&&(P.current=D),L&&D){if(O.current)return O.current(L,D,I);I()}},[L,D,I,O,N]);let K=o.useMemo(()=>({reference:F,floating:P,setReference:T,setFloating:S}),[T,S]),j=o.useMemo(()=>({reference:L,floating:D}),[L,D]),B=o.useMemo(()=>{let t={position:n,left:0,top:0};if(!j.floating)return t;let e=c(j.floating,w.x),r=c(j.floating,w.y);return m?{...t,transform:"translate("+e+"px, "+r+"px)",...f(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:r}},[n,m,j.floating,w.x,w.y]);return o.useMemo(()=>({...w,update:I,refs:K,elements:j,floatingStyles:B}),[w,I,K,j,B])}let d=t=>({name:"arrow",options:t,fn(e){let{element:n,padding:o}="function"==typeof t?t(e):t;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?(0,r.x7)({element:n.current,padding:o}).fn(e):{}:n?(0,r.x7)({element:n,padding:o}).fn(e):{}}}),p=(t,e)=>({...(0,r.cv)(t),options:[t,e]}),h=(t,e)=>({...(0,r.uY)(t),options:[t,e]}),m=(t,e)=>({...(0,r.dr)(t),options:[t,e]}),g=(t,e)=>({...(0,r.RR)(t),options:[t,e]}),y=(t,e)=>({...(0,r.dp)(t),options:[t,e]}),w=(t,e)=>({...(0,r.X5)(t),options:[t,e]}),v=(t,e)=>({...(0,r.Cp)(t),options:[t,e]}),x=(t,e)=>({...(0,r.Qo)(t),options:[t,e]}),b=(t,e)=>({...d(t),options:[t,e]})},44250:function(t,e,n){n.d(e,{AW:function(){return o},G6:function(){return a},Ie:function(){return b},MM:function(){return h},Me:function(){return g},Pe:function(){return y},U9:function(){return w},V5:function(){return d},Xf:function(){return u},Zj:function(){return f},cr:function(){return c},ex:function(){return m},ij:function(){return l},j7:function(){return v},p7:function(){return x},r:function(){return p},r3:function(){return i}});var r=n(9896);function o(t){let e=t.activeElement;for(;(null==(n=e)||null==(n=n.shadowRoot)?void 0:n.activeElement)!=null;){var n;e=e.shadowRoot.activeElement}return e}function i(t,e){if(!t||!e)return!1;let n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){let n=e;for(;n;){if(t===n)return!0;n=n.parentNode||n.host}}return!1}function u(){let t=navigator.userAgentData;return null!=t&&t.platform?t.platform:navigator.platform}function l(){let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(t=>{let{brand:e,version:n}=t;return e+"/"+n}).join(" "):navigator.userAgent}function f(t){return 0===t.mozInputSource&&!!t.isTrusted||(s()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType)}function c(t){return!l().includes("jsdom/")&&(!s()&&0===t.width&&0===t.height||s()&&1===t.width&&1===t.height&&0===t.pressure&&0===t.detail&&"mouse"===t.pointerType||t.width<1&&t.height<1&&0===t.pressure&&0===t.detail&&"touch"===t.pointerType)}function a(){return/apple/i.test(navigator.vendor)}function s(){let t=/android/i;return t.test(u())||t.test(l())}function d(){return u().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function p(t,e){let n=["mouse","pen"];return e||n.push("",void 0),n.includes(t)}function h(t){return"nativeEvent"in t}function m(t){return t.matches("html,body")}function g(t){return(null==t?void 0:t.ownerDocument)||document}function y(t,e){return null!=e&&("composedPath"in t?t.composedPath().includes(e):null!=t.target&&e.contains(t.target))}function w(t){return"composedPath"in t?t.composedPath()[0]:t.target}function v(t){return(0,r.Re)(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}function x(t){t.preventDefault(),t.stopPropagation()}function b(t){return!!t&&"combobox"===t.getAttribute("role")&&v(t)}},9896:function(t,e,n){function r(){return"undefined"!=typeof window}function o(t){return l(t)?(t.nodeName||"").toLowerCase():"#document"}function i(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function u(t){var e;return null==(e=(l(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function l(t){return!!r()&&(t instanceof Node||t instanceof i(t).Node)}function f(t){return!!r()&&(t instanceof Element||t instanceof i(t).Element)}function c(t){return!!r()&&(t instanceof HTMLElement||t instanceof i(t).HTMLElement)}function a(t){return!!r()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof i(t).ShadowRoot)}function s(t){let{overflow:e,overflowX:n,overflowY:r,display:o}=w(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(o)}function d(t){return["table","td","th"].includes(o(t))}function p(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function h(t){let e=g(),n=f(t)?w(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function m(t){let e=x(t);for(;c(e)&&!y(e);){if(h(e))return e;if(p(e))break;e=x(e)}return null}function g(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function y(t){return["html","body","#document"].includes(o(t))}function w(t){return i(t).getComputedStyle(t)}function v(t){return f(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function x(t){if("html"===o(t))return t;let e=t.assignedSlot||t.parentNode||a(t)&&t.host||u(t);return a(e)?e.host:e}function b(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}n.d(e,{Dx:function(){return w},Jj:function(){return i},Kx:function(){return function t(e,n,r){var o;void 0===n&&(n=[]),void 0===r&&(r=!0);let u=function t(e){let n=x(e);return y(n)?e.ownerDocument?e.ownerDocument.body:e.body:c(n)&&s(n)?n:t(n)}(e),l=u===(null==(o=e.ownerDocument)?void 0:o.body),f=i(u);if(l){let e=b(f);return n.concat(f,f.visualViewport||[],s(u)?u:[],e&&r?t(e):[])}return n.concat(u,t(u,[],r))}},Lw:function(){return v},Ow:function(){return x},Pf:function(){return g},Py:function(){return y},Re:function(){return c},Ze:function(){return d},Zq:function(){return a},ao:function(){return s},gQ:function(){return m},hT:function(){return h},kK:function(){return f},tF:function(){return u},tR:function(){return p},wK:function(){return b},wk:function(){return o}})},55856:function(t,e,n){n.d(e,{Ct:function(){return o},Fp:function(){return u},GW:function(){return f},Go:function(){return R},I4:function(){return y},JB:function(){return T},KX:function(){return k},NM:function(){return l},Qq:function(){return w},Rn:function(){return g},VV:function(){return i},Wh:function(){return v},gy:function(){return b},hp:function(){return m},i8:function(){return x},k3:function(){return h},ku:function(){return p},mA:function(){return r},pw:function(){return E},uZ:function(){return d},yd:function(){return A},ze:function(){return c}});let r=["top","right","bottom","left"],o=r.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),i=Math.min,u=Math.max,l=Math.round,f=Math.floor,c=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(t,e,n){return u(t,i(e,n))}function p(t,e){return"function"==typeof t?t(e):t}function h(t){return t.split("-")[0]}function m(t){return t.split("-")[1]}function g(t){return"x"===t?"y":"x"}function y(t){return"y"===t?"height":"width"}function w(t){return["top","bottom"].includes(h(t))?"y":"x"}function v(t){return g(w(t))}function x(t,e,n){void 0===n&&(n=!1);let r=m(t),o=v(t),i=y(o),u="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[i]>e.floating[i]&&(u=E(u)),[u,E(u)]}function b(t){let e=E(t);return[R(t),e,R(e)]}function R(t){return t.replace(/start|end/g,t=>s[t])}function k(t,e,n,r){let o=m(t),i=function(t,e,n){let r=["left","right"],o=["right","left"];switch(t){case"top":case"bottom":if(n)return e?o:r;return e?r:o;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(h(t),"start"===n,r);return o&&(i=i.map(t=>t+"-"+o),e&&(i=i.concat(i.map(R)))),i}function E(t){return t.replace(/left|right|bottom|top/g,t=>a[t])}function A(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function T(t){let{x:e,y:n,width:r,height:o}=t;return{width:r,height:o,top:n,left:e,right:e+r,bottom:n+o,x:e,y:n}}}}]);