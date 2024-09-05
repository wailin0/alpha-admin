(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1559],{75510:function(e,t,o){"use strict";o.d(t,{Z:function(){return F}});var r=o(99370),n=o(78845),i=o(31229),a=o(27494),p=o(84019),l=o(92728),c=o(17235),s=o(88638),u=o(95197),m=o(66030),d=o(64041),f=o(28464),h=o(91343),g=o(1777),v=o(88478),Z=o(92310),b=o(90119),w=o(49622),y=o(55165),x=o(56498),T=o(47678),R=o(11016);function C(e){return(0,R.ZP)("MuiTooltip",e)}let k=(0,T.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var M=o(59533);let S=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"],E=e=>{let{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch","tooltipPlacement".concat((0,h.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,l.Z)(a,C,t)},P=(0,m.ZP)(v.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})(e=>{let{theme:t,ownerState:o,open:r}=e;return(0,n.Z)({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},o.arrow&&{['&[data-popper-placement*="bottom"] .'.concat(k.arrow)]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},['&[data-popper-placement*="top"] .'.concat(k.arrow)]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},['&[data-popper-placement*="right"] .'.concat(k.arrow)]:(0,n.Z)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),['&[data-popper-placement*="left"] .'.concat(k.arrow)]:(0,n.Z)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})}),O=(0,m.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,h.Z)(o.placement.split("-")[0]))]]}})(e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:(0,c.Fq)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:"".concat(Math.round(16/14*1e5)/1e5,"em"),fontWeight:t.typography.fontWeightRegular},{[".".concat(k.popper,'[data-popper-placement*="left"] &')]:(0,n.Z)({transformOrigin:"right center"},o.isRtl?(0,n.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[".".concat(k.popper,'[data-popper-placement*="right"] &')]:(0,n.Z)({transformOrigin:"left center"},o.isRtl?(0,n.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[".".concat(k.popper,'[data-popper-placement*="top"] &')]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[".".concat(k.popper,'[data-popper-placement*="bottom"] &')]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})}),N=(0,m.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(e=>{let{theme:t}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,c.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}),L=!1,I=new p.V,A={x:0,y:0};function B(e,t){return function(o){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];t&&t(o,...n),e(o,...n)}}var F=i.forwardRef(function(e,t){var o,l,c,m,h,T,R,C,k,F,D,U,W,j,z,_,J,V,q;let H=(0,f.i)({props:e,name:"MuiTooltip"}),{arrow:X=!1,children:Y,components:G={},componentsProps:K={},describeChild:Q=!1,disableFocusListener:$=!1,disableHoverListener:ee=!1,disableInteractive:et=!1,disableTouchListener:eo=!1,enterDelay:er=100,enterNextDelay:en=0,enterTouchDelay:ei=700,followCursor:ea=!1,id:ep,leaveDelay:el=0,leaveTouchDelay:ec=1500,onClose:es,onOpen:eu,open:em,placement:ed="bottom",PopperComponent:ef,PopperProps:eh={},slotProps:eg={},slots:ev={},title:eZ,TransitionComponent:eb=g.Z,TransitionProps:ew}=H,ey=(0,r.Z)(H,S),ex=i.isValidElement(Y)?Y:(0,M.jsx)("span",{children:Y}),eT=(0,d.Z)(),eR=(0,s.V)(),[eC,ek]=i.useState(),[eM,eS]=i.useState(null),eE=i.useRef(!1),eP=et||ea,eO=(0,p.Z)(),eN=(0,p.Z)(),eL=(0,p.Z)(),eI=(0,p.Z)(),[eA,eB]=(0,x.Z)({controlled:em,default:!1,name:"Tooltip",state:"open"}),eF=eA,eD=(0,w.Z)(ep),eU=i.useRef(),eW=(0,Z.Z)(()=>{void 0!==eU.current&&(document.body.style.WebkitUserSelect=eU.current,eU.current=void 0),eI.clear()});i.useEffect(()=>eW,[eW]);let ej=e=>{I.clear(),L=!0,eB(!0),eu&&!eF&&eu(e)},ez=(0,Z.Z)(e=>{I.start(800+el,()=>{L=!1}),eB(!1),es&&eF&&es(e),eO.start(eT.transitions.duration.shortest,()=>{eE.current=!1})}),e_=e=>{eE.current&&"touchstart"!==e.type||(eC&&eC.removeAttribute("title"),eN.clear(),eL.clear(),er||L&&en?eN.start(L?en:er,()=>{ej(e)}):ej(e))},eJ=e=>{eN.clear(),eL.start(el,()=>{ez(e)})},{isFocusVisibleRef:eV,onBlur:eq,onFocus:eH,ref:eX}=(0,y.Z)(),[,eY]=i.useState(!1),eG=e=>{eq(e),!1===eV.current&&(eY(!1),eJ(e))},eK=e=>{eC||ek(e.currentTarget),eH(e),!0===eV.current&&(eY(!0),e_(e))},eQ=e=>{eE.current=!0;let t=ex.props;t.onTouchStart&&t.onTouchStart(e)};i.useEffect(()=>{if(eF)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&ez(e)}},[ez,eF]);let e$=(0,b.Z)(ex.ref,eX,ek,t);eZ||0===eZ||(eF=!1);let e0=i.useRef(),e1={},e4="string"==typeof eZ;Q?(e1.title=eF||!e4||ee?null:eZ,e1["aria-describedby"]=eF?eD:null):(e1["aria-label"]=e4?eZ:null,e1["aria-labelledby"]=eF&&!e4?eD:null);let e2=(0,n.Z)({},e1,ey,ex.props,{className:(0,a.Z)(ey.className,ex.props.className),onTouchStart:eQ,ref:e$},ea?{onMouseMove:e=>{let t=ex.props;t.onMouseMove&&t.onMouseMove(e),A={x:e.clientX,y:e.clientY},e0.current&&e0.current.update()}}:{}),e7={};eo||(e2.onTouchStart=e=>{eQ(e),eL.clear(),eO.clear(),eW(),eU.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eI.start(ei,()=>{document.body.style.WebkitUserSelect=eU.current,e_(e)})},e2.onTouchEnd=e=>{ex.props.onTouchEnd&&ex.props.onTouchEnd(e),eW(),eL.start(ec,()=>{ez(e)})}),ee||(e2.onMouseOver=B(e_,e2.onMouseOver),e2.onMouseLeave=B(eJ,e2.onMouseLeave),eP||(e7.onMouseOver=e_,e7.onMouseLeave=eJ)),$||(e2.onFocus=B(eK,e2.onFocus),e2.onBlur=B(eG,e2.onBlur),eP||(e7.onFocus=eK,e7.onBlur=eG));let e9=i.useMemo(()=>{var e;let t=[{name:"arrow",enabled:!!eM,options:{element:eM,padding:4}}];return null!=(e=eh.popperOptions)&&e.modifiers&&(t=t.concat(eh.popperOptions.modifiers)),(0,n.Z)({},eh.popperOptions,{modifiers:t})},[eM,eh]),e3=(0,n.Z)({},H,{isRtl:eR,arrow:X,disableInteractive:eP,placement:ed,PopperComponentProp:ef,touch:eE.current}),e5=E(e3),e6=null!=(o=null!=(l=ev.popper)?l:G.Popper)?o:P,e8=null!=(c=null!=(m=null!=(h=ev.transition)?h:G.Transition)?m:eb)?c:g.Z,te=null!=(T=null!=(R=ev.tooltip)?R:G.Tooltip)?T:O,tt=null!=(C=null!=(k=ev.arrow)?k:G.Arrow)?C:N,to=(0,u.Z)(e6,(0,n.Z)({},eh,null!=(F=eg.popper)?F:K.popper,{className:(0,a.Z)(e5.popper,null==eh?void 0:eh.className,null==(D=null!=(U=eg.popper)?U:K.popper)?void 0:D.className)}),e3),tr=(0,u.Z)(e8,(0,n.Z)({},ew,null!=(W=eg.transition)?W:K.transition),e3),tn=(0,u.Z)(te,(0,n.Z)({},null!=(j=eg.tooltip)?j:K.tooltip,{className:(0,a.Z)(e5.tooltip,null==(z=null!=(_=eg.tooltip)?_:K.tooltip)?void 0:z.className)}),e3),ti=(0,u.Z)(tt,(0,n.Z)({},null!=(J=eg.arrow)?J:K.arrow,{className:(0,a.Z)(e5.arrow,null==(V=null!=(q=eg.arrow)?q:K.arrow)?void 0:V.className)}),e3);return(0,M.jsxs)(i.Fragment,{children:[i.cloneElement(ex,e2),(0,M.jsx)(e6,(0,n.Z)({as:null!=ef?ef:v.Z,placement:ed,anchorEl:ea?{getBoundingClientRect:()=>({top:A.y,left:A.x,right:A.x,bottom:A.y,width:0,height:0})}:eC,popperRef:e0,open:!!eC&&eF,id:eD,transition:!0},e7,to,{popperOptions:e9,children:e=>{let{TransitionProps:t}=e;return(0,M.jsx)(e8,(0,n.Z)({timeout:eT.transitions.duration.shorter},t,tr,{children:(0,M.jsxs)(te,(0,n.Z)({},tn,{children:[eZ,X?(0,M.jsx)(tt,(0,n.Z)({},ti,{ref:eS})):null]}))}))}}))]})})},49622:function(e,t,o){"use strict";var r=o(23908);t.Z=r.Z},30290:function(e,t,o){var r,n,i;void 0!==(n="function"==typeof(r=i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var o=arguments[e];for(var r in o)t[r]=o[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function o(r){function n(){}function i(t,o,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},n.defaults,i)).expires&&(i.expires=new Date(new Date*1+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(o);/^[\{\[]/.test(a)&&(o=a)}catch(e){}o=r.write?r.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var p="";for(var l in i)i[l]&&(p+="; "+l,!0!==i[l]&&(p+="="+i[l].split(";")[0]));return document.cookie=t+"="+o+p}}function a(e,o){if("undefined"!=typeof document){for(var n={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var p=i[a].split("="),l=p.slice(1).join("=");o||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(p[0]);if(l=(r.read||r)(l,c)||t(l),o)try{l=JSON.parse(l)}catch(e){}if(n[c]=l,e===c)break}catch(e){}}return e?n[e]:n}}return n.set=i,n.get=function(e){return a(e,!1)},n.getJSON=function(e){return a(e,!0)},n.remove=function(t,o){i(t,"",e(o,{expires:-1}))},n.defaults={},n.withConverter=o,n}(function(){})})?r.call(t,o,t,e):r)&&(e.exports=n),e.exports=i()},75443:function(e,t,o){"use strict";var r=o(31229),n=o(30290),i=o.n(n);t.Z=function(e){var t=(0,r.useState)(function(){return i().get(e)||null}),o=t[0],n=t[1];return[o,(0,r.useCallback)(function(t,o){i().set(e,t,o),n(t)},[e]),(0,r.useCallback)(function(){i().remove(e),n(null)},[e])]}}}]);