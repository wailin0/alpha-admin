(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2927],{26720:function(e,t,n){Promise.resolve().then(n.bind(n,64825)),Promise.resolve().then(n.bind(n,29958)),Promise.resolve().then(n.bind(n,77173)),Promise.resolve().then(n.bind(n,8100)),Promise.resolve().then(n.bind(n,9510)),Promise.resolve().then(n.bind(n,26296)),Promise.resolve().then(n.bind(n,36736))},51115:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(78845),i=n(99370),s=n(31229),l=n(27494),o=n(62104),a=n(60253),u=n(21865),c=n(83396),d=n(59533);let f=["className","component"];var h=n(38467),m=n(34878),g=n(17135);let v=(0,n(47678).Z)("MuiBox",["root"]),p=(0,m.Z)();var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t,defaultTheme:n,defaultClassName:h="MuiBox-root",generateClassName:m}=e,g=(0,o.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(a.Z);return s.forwardRef(function(e,s){let o=(0,c.Z)(n),a=(0,u.Z)(e),{className:v,component:p="div"}=a,x=(0,i.Z)(a,f);return(0,d.jsx)(g,(0,r.Z)({as:p,ref:s,className:(0,l.Z)(v,m?m(h):h),theme:t&&o[t]||o},x))})}({themeId:g.Z,defaultTheme:p,defaultClassName:v.root,generateClassName:h.Z.generate})},16948:function(e,t,n){"use strict";n.d(t,{$n:function(){return u},_j:function(){return a}});var r=n(30143),i=n(77963);function s(e,t=0,n=1){return(0,i.Z)(e,t,n)}function l(e){let t;if(e.type)return e;if("#"===e.charAt(0))return l(function(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map(e=>e+e)),n?`rgb${4===n.length?"a":""}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}(e));let n=e.indexOf("("),i=e.substring(0,n);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw Error((0,r.Z)(9,e));let s=e.substring(n+1,e.length-1);if("color"===i){if(t=(s=s.split(" ")).shift(),4===s.length&&"/"===s[3].charAt(0)&&(s[3]=s[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,r.Z)(10,t))}else s=s.split(",");return{type:i,values:s=s.map(e=>parseFloat(e)),colorSpace:t}}function o(e){let{type:t,colorSpace:n}=e,{values:r}=e;return -1!==t.indexOf("rgb")?r=r.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function a(e,t){if(e=l(e),t=s(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return o(e)}function u(e,t){if(e=l(e),t=s(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return o(e)}},37863:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(31229),i=n(49774),s=n(59787);let l=(e,t,n,l,o)=>{let{settings:a}=(0,s.r)(),{mode:u,systemMode:c}=(0,i.tv)();return(0,r.useMemo)(()=>{let e="system"===u?c:u,r=(null==a?void 0:a.skin)==="bordered",i="dark"===e;return r&&l&&o?i?o:l:i?n:t},[e,u,c])}},29958:function(e,t,n){"use strict";var r=n(59533),i=n(72860),s=n.n(i),l=n(59787),o=n(64003),a=n(5668);t.default=e=>{let{children:t,systemMode:n}=e,{settings:i}=(0,l.r)();return(0,o.Z)(n),(0,r.jsx)("div",{className:s()(a.jh.root,"is-full bs-full"),"data-skin":i.skin,children:t})}},36830:function(e,t,n){"use strict";var r=n(59533),i=n(90083),s=n(66030),l=n(64041),o=n(37863);let a=(0,s.ZP)("img")({inlineSize:"100%",position:"absolute",insetBlockEnd:0,zIndex:-1});t.Z=e=>{let{image1:t,image2:n,maskImg:s,mode:u}=e,c=(0,l.Z)(),d=(0,i.Z)(c.breakpoints.down("md")),f=(0,o.I)(u,"/images/pages/misc-mask-light.png","/images/pages/misc-mask-dark.png");function h(e){return e&&"object"==typeof e&&"src"in e}return d?null:(0,r.jsxs)(r.Fragment,{children:[void 0===t||h(t)?(0,r.jsx)("img",{alt:(null==t?void 0:t.alt)||"tree-1",src:(null==t?void 0:t.src)||"/images/illustrations/objects/tree-1.png",className:(null==t?void 0:t.className)||"absolute inline-start-0 block-end-0",width:null==t?void 0:t.width,height:(null==t?void 0:t.height)||200}):t,void 0===s||h(s)?(0,r.jsx)(a,{alt:(null==s?void 0:s.alt)||"mask",src:(null==s?void 0:s.src)||f,className:null==s?void 0:s.className,width:null==s?void 0:s.width,height:null==s?void 0:s.height}):s,void 0===n||h(n)?(0,r.jsx)("img",{alt:(null==n?void 0:n.alt)||"tree-2",src:(null==n?void 0:n.src)||"/images/illustrations/objects/tree-2.png",className:(null==n?void 0:n.className)||"absolute inline-end-0 block-end-0",width:null==n?void 0:n.width,height:(null==n?void 0:n.height)||200}):n]})}},99954:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});let r={defaultLocale:"en",locales:["en","fr","ar"],langDirection:{en:"ltr",fr:"ltr",ar:"rtl"}}},84148:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var r=n(99954);let i=(e,t)=>e.startsWith(t)?e:"".concat(t).concat(e),s=e=>r.a.locales.every(t=>!(e.startsWith("/".concat(t,"/"))||e==="/".concat(t))),l=(e,t)=>{if(!e||!t)throw Error("URL or Language Code can't be empty");return s(e)?"/".concat(t).concat(i(e,"/")):e}},36736:function(e,t,n){"use strict";var r=n(59533),i=n(96353),s=n(61250),l=n(47867),o=n(28095),a=n(36830),u=n(37863),c=n(84148);t.default=e=>{let{mode:t}=e,{lang:n}=(0,s.useParams)(),d=(0,u.I)(t,"/images/pages/misc-mask-light.png","/images/pages/misc-mask-dark.png");return(0,r.jsxs)("div",{className:"flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden",children:[(0,r.jsxs)("div",{className:"flex items-center flex-col text-center gap-10",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2 is-[90vw] sm:is-[unset]",children:[(0,r.jsx)(o.Z,{className:"font-medium text-8xl",color:"text.primary",children:"404"}),(0,r.jsx)(o.Z,{variant:"h4",children:"Page Not Found ⚠️"}),(0,r.jsx)(o.Z,{children:"We couldn't find the page you are looking for."})]}),(0,r.jsx)("img",{alt:"error-illustration",src:"/images/illustrations/characters/5.png",className:"object-cover bs-[400px] md:bs-[450px] lg:bs-[500px]"}),(0,r.jsx)(l.Z,{href:(0,c.U)("/",n),component:i.default,variant:"contained",children:"Back to Home"})]}),(0,r.jsx)(a.Z,{maskImg:{src:d}})]})}},72860:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=s(t,n));return t}(n)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[4650,8869,1055,7017,7690,2930,2704,1476,3418,4170,6842,1744],function(){return e(e.s=26720)}),_N_E=e.O()}]);