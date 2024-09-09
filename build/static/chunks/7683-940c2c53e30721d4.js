"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7683],{57683:function(e,a,o){o.d(a,{Z:function(){return I}});var t=o(23950),c=o(22988),l=o(2265),r=o(44839),n=o(76990),i=o(10317),s=o(59018),d=o(57437),p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),v=o(60909),u=o(12272),m=o(69022),b=o(95885),g=o(48024),Z=o(68165);let h=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],C=e=>{let{classes:a,disabled:o,size:t,color:c,iconColor:l,onDelete:r,clickable:i,variant:s}=e,d={root:["root",s,o&&"disabled","size".concat((0,u.Z)(t)),"color".concat((0,u.Z)(c)),i&&"clickable",i&&"clickableColor".concat((0,u.Z)(c)),r&&"deletable",r&&"deletableColor".concat((0,u.Z)(c)),"".concat(s).concat((0,u.Z)(c))],label:["label","label".concat((0,u.Z)(t))],avatar:["avatar","avatar".concat((0,u.Z)(t)),"avatarColor".concat((0,u.Z)(c))],icon:["icon","icon".concat((0,u.Z)(t)),"iconColor".concat((0,u.Z)(l))],deleteIcon:["deleteIcon","deleteIcon".concat((0,u.Z)(t)),"deleteIconColor".concat((0,u.Z)(c)),"deleteIcon".concat((0,u.Z)(s),"Color").concat((0,u.Z)(c))]};return(0,n.Z)(d,Z.z,a)},f=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:o}=e,{color:t,iconColor:c,clickable:l,onDelete:r,size:n,variant:i}=o;return[{["& .".concat(Z.Z.avatar)]:a.avatar},{["& .".concat(Z.Z.avatar)]:a["avatar".concat((0,u.Z)(n))]},{["& .".concat(Z.Z.avatar)]:a["avatarColor".concat((0,u.Z)(t))]},{["& .".concat(Z.Z.icon)]:a.icon},{["& .".concat(Z.Z.icon)]:a["icon".concat((0,u.Z)(n))]},{["& .".concat(Z.Z.icon)]:a["iconColor".concat((0,u.Z)(c))]},{["& .".concat(Z.Z.deleteIcon)]:a.deleteIcon},{["& .".concat(Z.Z.deleteIcon)]:a["deleteIcon".concat((0,u.Z)(n))]},{["& .".concat(Z.Z.deleteIcon)]:a["deleteIconColor".concat((0,u.Z)(t))]},{["& .".concat(Z.Z.deleteIcon)]:a["deleteIcon".concat((0,u.Z)(i),"Color").concat((0,u.Z)(t))]},a.root,a["size".concat((0,u.Z)(n))],a["color".concat((0,u.Z)(t))],l&&a.clickable,l&&"default"!==t&&a["clickableColor".concat((0,u.Z)(t),")")],r&&a.deletable,r&&"default"!==t&&a["deletableColor".concat((0,u.Z)(t))],a[i],a["".concat(i).concat((0,u.Z)(t))]]}})(e=>{let{theme:a,ownerState:o}=e,t="light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300];return(0,c.Z)({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(Z.Z.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(Z.Z.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},["& .".concat(Z.Z.avatarColorPrimary)]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},["& .".concat(Z.Z.avatarColorSecondary)]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},["& .".concat(Z.Z.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},["& .".concat(Z.Z.icon)]:(0,c.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,c.Z)({color:a.vars?a.vars.palette.Chip.defaultIconColor:t},"default"!==o.color&&{color:"inherit"})),["& .".concat(Z.Z.deleteIcon)]:(0,c.Z)({WebkitTapHighlightColor:"transparent",color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.26)"):(0,i.Fq)(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.4)"):(0,i.Fq)(a.palette.text.primary,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:a.vars?"rgba(".concat(a.vars.palette[o.color].contrastTextChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{["&.".concat(Z.Z.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{["&.".concat(Z.Z.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},e=>{let{theme:a,ownerState:o}=e;return(0,c.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},["&.".concat(Z.Z.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&"default"!==o.color&&{["&:hover, &.".concat(Z.Z.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},e=>{let{theme:a,ownerState:o}=e;return(0,c.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:a.vars?"1px solid ".concat(a.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[700]),["&.".concat(Z.Z.clickable,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(Z.Z.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["& .".concat(Z.Z.avatar)]:{marginLeft:4},["& .".concat(Z.Z.avatarSmall)]:{marginLeft:2},["& .".concat(Z.Z.icon)]:{marginLeft:4},["& .".concat(Z.Z.iconSmall)]:{marginLeft:2},["& .".concat(Z.Z.deleteIcon)]:{marginRight:5},["& .".concat(Z.Z.deleteIconSmall)]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(a.vars||a).palette[o.color].main,border:"1px solid ".concat(a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].main,.7)),["&.".concat(Z.Z.clickable,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(a.palette[o.color].main,a.palette.action.hoverOpacity)},["&.".concat(Z.Z.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.focusOpacity,")"):(0,i.Fq)(a.palette[o.color].main,a.palette.action.focusOpacity)},["& .".concat(Z.Z.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})}),y=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:o}=e,{size:t}=o;return[a.label,a["label".concat((0,u.Z)(t))]]}})(e=>{let{ownerState:a}=e;return(0,c.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===a.variant&&{paddingLeft:11,paddingRight:11},"small"===a.size&&{paddingLeft:8,paddingRight:8},"small"===a.size&&"outlined"===a.variant&&{paddingLeft:7,paddingRight:7})});function k(e){return"Backspace"===e.key||"Delete"===e.key}var I=l.forwardRef(function(e,a){let o=(0,b.i)({props:e,name:"MuiChip"}),{avatar:n,className:i,clickable:s,color:u="default",component:g,deleteIcon:Z,disabled:I=!1,icon:S,label:x,onClick:z,onDelete:R,onKeyDown:O,onKeyUp:w,size:F="medium",variant:L="filled",tabIndex:P,skipFocusWhenDisabled:N=!1}=o,T=(0,t.Z)(o,h),V=l.useRef(null),E=(0,v.Z)(V,a),M=e=>{e.stopPropagation(),R&&R(e)},q=!1!==s&&!!z||s,D=q||R?m.Z:g||"div",j=(0,c.Z)({},o,{component:D,disabled:I,size:F,color:u,iconColor:l.isValidElement(S)&&S.props.color||u,onDelete:!!R,clickable:q,variant:L}),W=C(j),K=D===m.Z?(0,c.Z)({component:g||"div",focusVisibleClassName:W.focusVisible},R&&{disableRipple:!0}):{},_=null;R&&(_=Z&&l.isValidElement(Z)?l.cloneElement(Z,{className:(0,r.Z)(Z.props.className,W.deleteIcon),onClick:M}):(0,d.jsx)(p,{className:(0,r.Z)(W.deleteIcon),onClick:M}));let A=null;n&&l.isValidElement(n)&&(A=l.cloneElement(n,{className:(0,r.Z)(W.avatar,n.props.className)}));let B=null;return S&&l.isValidElement(S)&&(B=l.cloneElement(S,{className:(0,r.Z)(W.icon,S.props.className)})),(0,d.jsxs)(f,(0,c.Z)({as:D,className:(0,r.Z)(W.root,i),disabled:!!q&&!!I||void 0,onClick:z,onKeyDown:e=>{e.currentTarget===e.target&&k(e)&&e.preventDefault(),O&&O(e)},onKeyUp:e=>{e.currentTarget===e.target&&(R&&k(e)?R(e):"Escape"===e.key&&V.current&&V.current.blur()),w&&w(e)},ref:E,tabIndex:N&&I?-1:P,ownerState:j},K,T,{children:[A||B,(0,d.jsx)(y,{className:(0,r.Z)(W.label),ownerState:j,children:x}),_]}))})},68165:function(e,a,o){o.d(a,{z:function(){return l}});var t=o(72296),c=o(70587);function l(e){return(0,c.ZP)("MuiChip",e)}let r=(0,t.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]);a.Z=r}}]);