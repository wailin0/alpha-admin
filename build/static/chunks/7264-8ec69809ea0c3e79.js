"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7264],{9941:function(e,t,l){l.d(t,{ZP:function(){return i},_i:function(){return a},pQ:function(){return c},uU:function(){return s}});var r=l(31229),o=l(59533);let n=r.createContext(null);function i(e){let{children:t,value:l}=e,i=function(){let[e,t]=r.useState(null);return r.useEffect(()=>{t("mui-p-".concat(Math.round(1e5*Math.random())))},[]),e}(),a=r.useMemo(()=>({idPrefix:i,value:l}),[i,l]);return(0,o.jsx)(n.Provider,{value:a,children:t})}function a(){return r.useContext(n)}function s(e,t){let{idPrefix:l}=e;return null===l?null:"".concat(e.idPrefix,"-P-").concat(t)}function c(e,t){let{idPrefix:l}=e;return null===l?null:"".concat(e.idPrefix,"-T-").concat(t)}},17264:function(e,t,l){let r;l.d(t,{Z:function(){return G}});var o=l(99683),n=l(57221),i=l(31229);l(61582);var a=l(27494),s=l(80810),c=l(84163),u=l(34590),d=l(73815),f=l(96013),h=l(2576),b=l(11317);function v(){if(r)return r;let e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function p(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var m=l(24486),S=l(63575),Z=l(59533);let w=["onChange"],x={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var g=l(17064),y=l(14849),B=l(91487),C=l(31157),E=l(483);function M(e){return(0,E.ZP)("MuiTabScrollButton",e)}let I=(0,C.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),P=["className","slots","slotProps","direction","orientation","disabled"],N=e=>{let{classes:t,orientation:l,disabled:r}=e;return(0,s.Z)({root:["root",l,r&&"disabled"]},M,t)},T=(0,d.ZP)(B.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:l}=e;return[t.root,l.orientation&&t[l.orientation]]}})(e=>{let{ownerState:t}=e;return(0,o.Z)({width:40,flexShrink:0,opacity:.8,["&.".concat(I.disabled)]:{opacity:0}},"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})}),R=i.forwardRef(function(e,t){var l,r;let i=(0,f.i)({props:e,name:"MuiTabScrollButton"}),{className:s,slots:d={},slotProps:h={},direction:b}=i,v=(0,n.Z)(i,P),p=(0,c.V)(),m=(0,o.Z)({isRtl:p},i),S=N(m),w=null!=(l=d.StartScrollButtonIcon)?l:g.Z,x=null!=(r=d.EndScrollButtonIcon)?r:y.Z,B=(0,u.Z)({elementType:w,externalSlotProps:h.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m}),C=(0,u.Z)({elementType:x,externalSlotProps:h.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m});return(0,Z.jsx)(T,(0,o.Z)({component:"div",className:(0,a.Z)(S.root,s),ref:t,role:null,ownerState:m,tabIndex:null},v,{children:"left"===b?(0,Z.jsx)(w,(0,o.Z)({},B)):(0,Z.jsx)(x,(0,o.Z)({},C))}))});var k=l(16571);function L(e){return(0,E.ZP)("MuiTabs",e)}let z=(0,C.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var W=l(30055);let A=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],j=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,X=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,H=(e,t,l)=>{let r=!1,o=l(e,t);for(;o;){if(o===e.firstChild){if(r)return;r=!0}let t=o.disabled||"true"===o.getAttribute("aria-disabled");if(!o.hasAttribute("tabindex")||t)o=l(e,o);else{o.focus();return}}},Y=e=>{let{vertical:t,fixed:l,hideScrollbar:r,scrollableX:o,scrollableY:n,centered:i,scrollButtonsHideMobile:a,classes:c}=e;return(0,s.Z)({root:["root",t&&"vertical"],scroller:["scroller",l&&"fixed",r&&"hideScrollbar",o&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[o&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]},L,c)},D=(0,d.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:l}=e;return[{["& .".concat(z.scrollButtons)]:t.scrollButtons},{["& .".concat(z.scrollButtons)]:l.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,l.vertical&&t.vertical]}})(e=>{let{ownerState:t,theme:l}=e;return(0,o.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{["& .".concat(z.scrollButtons)]:{[l.breakpoints.down("sm")]:{display:"none"}}})}),O=(0,d.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{let{ownerState:l}=e;return[t.scroller,l.fixed&&t.fixed,l.hideScrollbar&&t.hideScrollbar,l.scrollableX&&t.scrollableX,l.scrollableY&&t.scrollableY]}})(e=>{let{ownerState:t}=e;return(0,o.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})}),V=(0,d.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{let{ownerState:l}=e;return[t.flexContainer,l.vertical&&t.flexContainerVertical,l.centered&&t.centered]}})(e=>{let{ownerState:t}=e;return(0,o.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})}),F=(0,d.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(e=>{let{ownerState:t,theme:l}=e;return(0,o.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:l.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(l.vars||l).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(l.vars||l).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})}),_=(0,d.ZP)(function(e){let{onChange:t}=e,l=(0,n.Z)(e,w),r=i.useRef(),a=i.useRef(null),s=()=>{r.current=a.current.offsetHeight-a.current.clientHeight};return(0,m.Z)(()=>{let e=(0,b.Z)(()=>{let e=r.current;s(),e!==r.current&&t(r.current)}),l=(0,S.Z)(a.current);return l.addEventListener("resize",e),()=>{e.clear(),l.removeEventListener("resize",e)}},[t]),i.useEffect(()=>{s(),t(r.current)},[t]),(0,Z.jsx)("div",(0,o.Z)({style:x,ref:a},l))})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),q={},U=i.forwardRef(function(e,t){let l=(0,f.i)({props:e,name:"MuiTabs"}),r=(0,h.Z)(),s=(0,c.V)(),{"aria-label":d,"aria-labelledby":m,action:w,centered:x=!1,children:g,className:y,component:B="div",allowScrollButtonsMobile:C=!1,indicatorColor:E="primary",onChange:M,orientation:I="horizontal",ScrollButtonComponent:P=R,scrollButtons:N="auto",selectionFollowsFocus:T,slots:L={},slotProps:z={},TabIndicatorProps:U={},TabScrollButtonProps:Q={},textColor:K="primary",value:G,variant:J="standard",visibleScrollbar:$=!1}=l,ee=(0,n.Z)(l,A),et="scrollable"===J,el="vertical"===I,er=el?"scrollTop":"scrollLeft",eo=el?"top":"left",en=el?"bottom":"right",ei=el?"clientHeight":"clientWidth",ea=el?"height":"width",es=(0,o.Z)({},l,{component:B,allowScrollButtonsMobile:C,indicatorColor:E,orientation:I,vertical:el,scrollButtons:N,textColor:K,variant:J,visibleScrollbar:$,fixed:!et,hideScrollbar:et&&!$,scrollableX:et&&!el,scrollableY:et&&el,centered:x&&!et,scrollButtonsHideMobile:!C}),ec=Y(es),eu=(0,u.Z)({elementType:L.StartScrollButtonIcon,externalSlotProps:z.startScrollButtonIcon,ownerState:es}),ed=(0,u.Z)({elementType:L.EndScrollButtonIcon,externalSlotProps:z.endScrollButtonIcon,ownerState:es}),[ef,eh]=i.useState(!1),[eb,ev]=i.useState(q),[ep,em]=i.useState(!1),[eS,eZ]=i.useState(!1),[ew,ex]=i.useState(!1),[eg,ey]=i.useState({overflow:"hidden",scrollbarWidth:0}),eB=new Map,eC=i.useRef(null),eE=i.useRef(null),eM=()=>{let e,t;let l=eC.current;if(l){let t=l.getBoundingClientRect();e={clientWidth:l.clientWidth,scrollLeft:l.scrollLeft,scrollTop:l.scrollTop,scrollLeftNormalized:function(e,t){let l=e.scrollLeft;if("rtl"!==t)return l;switch(v()){case"negative":return e.scrollWidth-e.clientWidth+l;case"reverse":return e.scrollWidth-e.clientWidth-l;default:return l}}(l,s?"rtl":"ltr"),scrollWidth:l.scrollWidth,top:t.top,bottom:t.bottom,left:t.left,right:t.right}}if(l&&!1!==G){let e=eE.current.children;if(e.length>0){let l=e[eB.get(G)];t=l?l.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},eI=(0,k.Z)(()=>{let e;let{tabsMeta:t,tabMeta:l}=eM(),r=0;if(el)e="top",l&&t&&(r=l.top-t.top+t.scrollTop);else if(e=s?"right":"left",l&&t){let o=s?t.scrollLeftNormalized+t.clientWidth-t.scrollWidth:t.scrollLeft;r=(s?-1:1)*(l[e]-t[e]+o)}let o={[e]:r,[ea]:l?l[ea]:0};if(isNaN(eb[e])||isNaN(eb[ea]))ev(o);else{let t=Math.abs(eb[e]-o[e]),l=Math.abs(eb[ea]-o[ea]);(t>=1||l>=1)&&ev(o)}}),eP=function(e){let{animation:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t?function(e,t,l){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>{},{ease:n=p,duration:i=300}=r,a=null,s=t[e],c=!1,u=r=>{if(c){o(Error("Animation cancelled"));return}null===a&&(a=r);let d=Math.min(1,(r-a)/i);if(t[e]=n(d)*(l-s)+s,d>=1){requestAnimationFrame(()=>{o(null)});return}requestAnimationFrame(u)};return s===l?o(Error("Element already at target position")):requestAnimationFrame(u),()=>{c=!0}}(er,eC.current,e,{duration:r.transitions.duration.standard}):eC.current[er]=e},eN=e=>{let t=eC.current[er];el?t+=e:(t+=e*(s?-1:1),t*=s&&"reverse"===v()?-1:1),eP(t)},eT=()=>{let e=eC.current[ei],t=0,l=Array.from(eE.current.children);for(let r=0;r<l.length;r+=1){let o=l[r];if(t+o[ei]>e){0===r&&(t=e);break}t+=o[ei]}return t},eR=()=>{eN(-1*eT())},ek=()=>{eN(eT())},eL=i.useCallback(e=>{ey({overflow:null,scrollbarWidth:e})},[]),ez=(0,k.Z)(e=>{let{tabsMeta:t,tabMeta:l}=eM();l&&t&&(l[eo]<t[eo]?eP(t[er]+(l[eo]-t[eo]),{animation:e}):l[en]>t[en]&&eP(t[er]+(l[en]-t[en]),{animation:e}))}),eW=(0,k.Z)(()=>{et&&!1!==N&&ex(!ew)});i.useEffect(()=>{let e,t;let l=(0,b.Z)(()=>{eC.current&&eI()}),r=(0,S.Z)(eC.current);return r.addEventListener("resize",l),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(l),Array.from(eE.current.children).forEach(t=>{e.observe(t)})),"undefined"!=typeof MutationObserver&&(t=new MutationObserver(t=>{t.forEach(t=>{t.removedNodes.forEach(t=>{var l;null==(l=e)||l.unobserve(t)}),t.addedNodes.forEach(t=>{var l;null==(l=e)||l.observe(t)})}),l(),eW()})).observe(eE.current,{childList:!0}),()=>{var o,n;l.clear(),r.removeEventListener("resize",l),null==(o=t)||o.disconnect(),null==(n=e)||n.disconnect()}},[eI,eW]),i.useEffect(()=>{let e=Array.from(eE.current.children),t=e.length;if("undefined"!=typeof IntersectionObserver&&t>0&&et&&!1!==N){let l=e[0],r=e[t-1],o={root:eC.current,threshold:.99},n=new IntersectionObserver(e=>{em(!e[0].isIntersecting)},o);n.observe(l);let i=new IntersectionObserver(e=>{eZ(!e[0].isIntersecting)},o);return i.observe(r),()=>{n.disconnect(),i.disconnect()}}},[et,N,ew,null==g?void 0:g.length]),i.useEffect(()=>{eh(!0)},[]),i.useEffect(()=>{eI()}),i.useEffect(()=>{ez(q!==eb)},[ez,eb]),i.useImperativeHandle(w,()=>({updateIndicator:eI,updateScrollButtons:eW}),[eI,eW]);let eA=(0,Z.jsx)(F,(0,o.Z)({},U,{className:(0,a.Z)(ec.indicator,U.className),ownerState:es,style:(0,o.Z)({},eb,U.style)})),ej=0,eX=i.Children.map(g,e=>{if(!i.isValidElement(e))return null;let t=void 0===e.props.value?ej:e.props.value;eB.set(t,ej);let l=t===G;return ej+=1,i.cloneElement(e,(0,o.Z)({fullWidth:"fullWidth"===J,indicator:l&&!ef&&eA,selected:l,selectionFollowsFocus:T,onChange:M,textColor:K,value:t},1!==ej||!1!==G||e.props.tabIndex?{}:{tabIndex:0}))}),eH=(()=>{let e={};e.scrollbarSizeListener=et?(0,Z.jsx)(_,{onChange:eL,className:(0,a.Z)(ec.scrollableX,ec.hideScrollbar)}):null;let t=et&&("auto"===N&&(ep||eS)||!0===N);return e.scrollButtonStart=t?(0,Z.jsx)(P,(0,o.Z)({slots:{StartScrollButtonIcon:L.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:eu},orientation:I,direction:s?"right":"left",onClick:eR,disabled:!ep},Q,{className:(0,a.Z)(ec.scrollButtons,Q.className)})):null,e.scrollButtonEnd=t?(0,Z.jsx)(P,(0,o.Z)({slots:{EndScrollButtonIcon:L.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:ed},orientation:I,direction:s?"left":"right",onClick:ek,disabled:!eS},Q,{className:(0,a.Z)(ec.scrollButtons,Q.className)})):null,e})();return(0,Z.jsxs)(D,(0,o.Z)({className:(0,a.Z)(ec.root,y),ownerState:es,ref:t,as:B},ee,{children:[eH.scrollButtonStart,eH.scrollbarSizeListener,(0,Z.jsxs)(O,{className:ec.scroller,ownerState:es,style:{overflow:eg.overflow,[el?"margin".concat(s?"Left":"Right"):"marginBottom"]:$?void 0:-eg.scrollbarWidth},ref:eC,children:[(0,Z.jsx)(V,{"aria-label":d,"aria-labelledby":m,"aria-orientation":"vertical"===I?"vertical":null,className:ec.flexContainer,ownerState:es,onKeyDown:e=>{let t=eE.current,l=(0,W.Z)(t).activeElement;if("tab"!==l.getAttribute("role"))return;let r="horizontal"===I?"ArrowLeft":"ArrowUp",o="horizontal"===I?"ArrowRight":"ArrowDown";switch("horizontal"===I&&s&&(r="ArrowRight",o="ArrowLeft"),e.key){case r:e.preventDefault(),H(t,l,X);break;case o:e.preventDefault(),H(t,l,j);break;case"Home":e.preventDefault(),H(t,null,j);break;case"End":e.preventDefault(),H(t,null,X)}},ref:eE,role:"tablist",children:eX}),ef&&eA]}),eH.scrollButtonEnd]}))});var Q=l(9941);let K=["children"];var G=i.forwardRef(function(e,t){let{children:l}=e,r=(0,n.Z)(e,K),a=(0,Q._i)();if(null===a)throw TypeError("No TabContext provided");let s=i.Children.map(l,e=>i.isValidElement(e)?i.cloneElement(e,{"aria-controls":(0,Q.uU)(a,e.props.value),id:(0,Q.pQ)(a,e.props.value)}):null);return(0,Z.jsx)(U,(0,o.Z)({},r,{ref:t,value:a.value,children:s}))})}}]);