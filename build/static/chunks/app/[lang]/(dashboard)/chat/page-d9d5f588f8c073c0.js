(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4230],{29753:function(e,s,a){Promise.resolve().then(a.bind(a,58253))},6083:function(e,s,a){"use strict";a.r(s);var l=a(59533),i=a(31229),r=a(36663),t=a(66030),n=a(16948);let o=(0,t.ZP)(r.Z)(e=>{let{skin:s,color:a,size:l,theme:i}=e;return{...a&&"light"===s&&{backgroundColor:"var(--mui-palette-".concat(a,"-lightOpacity)"),color:"var(--mui-palette-".concat(a,"-main)")},...a&&"light-static"===s&&{backgroundColor:(0,n.$n)(i.palette[a].main,.84),color:"var(--mui-palette-".concat(a,"-main)")},...a&&"filled"===s&&{backgroundColor:"var(--mui-palette-".concat(a,"-main)"),color:"var(--mui-palette-".concat(a,"-contrastText)")},...l&&{height:l,width:l}}}),c=(0,i.forwardRef)((e,s)=>{let{color:a,skin:i="filled",...r}=e;return(0,l.jsx)(o,{color:a,skin:i,ref:s,...r})});s.default=c},18308:function(e,s,a){"use strict";var l=a(47867),i=a(66030),r=a(23310);let t=(0,i.ZP)(l.Z)(e=>{let{color:s,size:a,theme:l,variant:i}=e;return{minInlineSize:0,..."small"===a?{fontSize:"20px",padding:l.spacing("outlined"===i?1.5:1.75),"& i, & svg":{fontSize:"inherit"}}:{..."large"===a?{fontSize:"24px",padding:l.spacing("outlined"===i?2:2.25),"& i, & svg":{fontSize:"inherit"}}:{fontSize:"22px",padding:l.spacing("outlined"===i?1.75:2),"& i, & svg":{fontSize:"inherit"}}},...!s&&{color:"var(--mui-palette-action-active)","&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active":{backgroundColor:"rgb(var(--mui-palette-text-primaryChannel) / 0.08)"},...r.Z.disableRipple&&{"&.Mui-focusVisible:not(.Mui-disabled)":{backgroundColor:"rgb(var(--mui-palette-text-primaryChannel) / 0.08)"}},"&.Mui-disabled":{opacity:.45,color:"var(--mui-palette-action-active)"},..."outlined"===i&&{border:"none !important",..."small"===a?{padding:l.spacing(1.75)}:{..."large"===a?{padding:l.spacing(2.25)}:{padding:l.spacing(2)}}},..."contained"===i&&{boxShadow:"none !important",backgroundColor:"transparent"}}}});s.Z=t},79505:function(e,s,a){"use strict";a.r(s);var l=a(59533),i=a(31229),r=a(96353),t=a(75510),n=a(51115),o=a(88478),c=a(30034),d=a(13638),u=a(62168),x=a(49744),m=a(13935),p=a(89749),h=a(45336),j=a(72860),f=a.n(j),g=a(59787);let v=e=>{let{tooltipProps:s,children:a}=e;return(null==s?void 0:s.title)?(0,l.jsx)(t.Z,{...s,children:a}):a},b=e=>{let{children:s,option:a}=e;return a.href?(0,l.jsx)(n.Z,{component:r.default,href:a.href,...a.linkProps,children:s}):(0,l.jsx)(l.Fragment,{children:s})};s.default=e=>{let{tooltipProps:s,icon:a,iconClassName:r,options:t,leftAlignMenu:n,iconButtonProps:j}=e,[N,Z]=(0,i.useState)(!1),w=(0,i.useRef)(null),{settings:S}=(0,g.r)(),k=e=>{w.current&&w.current.contains(e.target)||Z(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{tooltipProps:s,children:(0,l.jsx)(p.Z,{ref:w,size:"small",onClick:()=>{Z(e=>!e)},...j,children:"string"==typeof a?(0,l.jsx)("i",{className:f()(a,r)}):a||(0,l.jsx)("i",{className:f()("ri-more-2-line",r)})})}),(0,l.jsx)(o.Z,{open:N,anchorEl:w.current,placement:n?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:s}=e;return(0,l.jsx)(x.Z,{...s,children:(0,l.jsx)(m.Z,{className:"bordered"===S.skin?"border shadow-none":"shadow-lg",children:(0,l.jsx)(u.d,{onClickAway:k,children:(0,l.jsx)(d.Z,{autoFocusItem:N,children:t.map((e,s)=>"string"==typeof e?(0,l.jsx)(c.Z,{onClick:k,children:e},s):"divider"in e?e.divider&&(0,l.jsx)(h.Z,{...e.dividerProps},s):(0,l.jsx)(c.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:s=>{k(s),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(s)},children:(0,l.jsxs)(b,{option:e,children:[("string"==typeof e.icon?(0,l.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},s))})})})})}})]})}},348:function(e,s,a){"use strict";a.d(s,{Q:function(){return l}});let l=e=>e.split(/\s/).reduce((e,s)=>e+=s.slice(0,1),"")},58253:function(e,s,a){"use strict";a.d(s,{default:function(){return ep}});var l=a(59533),i=a(31229),r=a(15995),t=a(90083),n=a(72860),o=a.n(n),c=a(10566),d=a(18938),u=a(36663),x=a(66431),m=a(5870),p=a(28095),h=a(3443),j=a(55332),f=a(81770),g=a(89749),v=a(3186),b=a.n(v),N=a(6083),Z=a(842),w=a(55740),S=a(59242),k=a(52534),C=a(21738),y=a(8887),P=a(61642),I=a(72575),z=a(26891),B=a(5885),M=a(47867),D=a(52512),O=a(66030),U=a(348);let E=(0,O.ZP)("span",{name:"MuiBadgeContentSpan"})(e=>{let{color:s,badgeSize:a}=e;return{width:a,height:a,borderRadius:"50%",cursor:"pointer",backgroundColor:"var(--mui-palette-".concat(s,"-main)"),boxShadow:"0 0 0 2px var(--mui-palette-background-paper)"}});var L=e=>{let{ref:s,alt:a,src:i,color:r,badgeColor:t,isChatActive:n,onClick:c,className:d,badgeSize:x}=e;return(0,l.jsx)(D.Z,{ref:s,overlap:"circular",badgeContent:(0,l.jsx)(E,{color:t,onClick:c,badgeSize:x||8}),anchorOrigin:{vertical:"bottom",horizontal:"right"},children:i?(0,l.jsx)(u.Z,{ref:s,alt:a,src:i,onClick:c,className:o()("cursor-pointer",d)}):(0,l.jsx)(N.default,{ref:s,color:r,skin:n?"light-static":"light",onClick:c,className:o()("cursor-pointer",d),children:a&&(0,U.Q)(a)})})};let F=e=>{let{children:s,isBelowLgScreen:a}=e;return a?(0,l.jsx)("div",{className:"bs-full overflow-x-hidden overflow-y-auto",children:s}):(0,l.jsx)(b(),{options:{wheelPropagation:!1},children:s})};var R=e=>{let{userSidebar:s,setUserSidebar:a,profileUserData:t,dispatch:n,isBelowLgScreen:o,isBelowSmScreen:c}=e,[u,h]=(0,i.useState)(!0),[j,f]=(0,i.useState)(!1),v=()=>{h(!u)},b=()=>{f(!j)};return t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(m.ZP,{open:s,anchor:"left",variant:"persistent",ModalProps:{keepMounted:!0},onClose:()=>a(!1),sx:{zIndex:13,"& .MuiDrawer-paper":{width:c?"100%":"370px",position:"absolute",border:0}},children:[(0,l.jsx)(g.Z,{size:"small",className:"absolute block-start-4 inline-end-4",onClick:()=>a(!1),children:(0,l.jsx)("i",{className:"ri-close-line text-2xl"})}),(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4 mbs-6 pli-5 pbs-5 pbe-1",children:[(0,l.jsx)(L,{alt:t.fullName,src:t.avatar,badgeColor:_[t.status],className:"bs-[84px] is-[84px]",badgeSize:12}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)(p.Z,{variant:"h5",children:t.fullName}),(0,l.jsx)(p.Z,{children:t.role})]})]}),(0,l.jsx)(F,{isBelowLgScreen:o,children:(0,l.jsxs)("div",{className:"flex flex-col gap-6 p-5",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)(p.Z,{className:"uppercase",color:"text.disabled",children:"About"}),(0,l.jsx)(x.Z,{fullWidth:!0,rows:3,multiline:!0,id:"about-textarea",defaultValue:t.about})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)(k.Z,{id:"status-radio-buttons-group-label",className:"uppercase text-textDisabled",children:"Status"}),(0,l.jsxs)(w.Z,{value:t.status,name:"radio-buttons-group",onChange:e=>{n((0,d.ij)({status:e.target.value}))},"aria-labelledby":"status-radio-buttons-group-label",children:[(0,l.jsx)(S.Z,{value:"online",control:(0,l.jsx)(Z.Z,{color:"success"}),label:"Online"}),(0,l.jsx)(S.Z,{value:"away",control:(0,l.jsx)(Z.Z,{color:"warning"}),label:"Away"}),(0,l.jsx)(S.Z,{value:"busy",control:(0,l.jsx)(Z.Z,{color:"error"}),label:"Do not disturb"}),(0,l.jsx)(S.Z,{value:"offline",control:(0,l.jsx)(Z.Z,{color:"secondary"}),label:"Offline"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)(p.Z,{className:"uppercase",color:"text.disabled",children:"Settings"}),(0,l.jsxs)(C.Z,{children:[(0,l.jsx)(y.ZP,{disablePadding:!0,secondaryAction:(0,l.jsx)(B.Z,{checked:u,onChange:v}),children:(0,l.jsxs)(P.Z,{onClick:v,className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-lock-password-line"})}),(0,l.jsx)(I.Z,{primary:"Two-step Verification"})]})}),(0,l.jsx)(y.ZP,{disablePadding:!0,secondaryAction:(0,l.jsx)(B.Z,{checked:j,onChange:b}),children:(0,l.jsxs)(P.Z,{onClick:b,className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-notification-line"})}),(0,l.jsx)(I.Z,{primary:"Notification"})]})}),(0,l.jsx)(y.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-user-add-line"})}),(0,l.jsx)(I.Z,{primary:"Invite Friends"})]})}),(0,l.jsx)(y.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-delete-bin-7-line"})}),(0,l.jsx)(I.Z,{primary:"Delete Account"})]})})]})]}),(0,l.jsx)(M.Z,{variant:"contained",fullWidth:!0,className:"mbs-auto",endIcon:(0,l.jsx)("i",{className:"ri-logout-box-r-line"}),children:"Logout"})]})})]}),(0,l.jsx)(r.Z,{open:s,onClick:()=>a(!1),className:"absolute z-[12]"})]}):null};let A=e=>{let s=new Date;return new Date(e).getDate()===s.getDate()&&new Date(e).getMonth()===s.getMonth()&&new Date(e).getFullYear()===s.getFullYear()},T=function(e){let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],a=new Date(e),l={month:"short",day:"numeric"};return s&&A(a)&&(l={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",l).format(new Date(e))},_={busy:"error",away:"warning",online:"success",offline:"secondary"},V=e=>{let{chatStore:s,getActiveUserData:a,setSidebarOpen:i,backdropOpen:r,setBackdropOpen:t,isBelowMdScreen:n}=e;return s.chats.map(e=>{var c;let d=s.contacts.find(s=>s.id===e.userId)||s.contacts[0],u=(null===(c=s.activeUser)||void 0===c?void 0:c.id)===d.id;return(0,l.jsxs)("li",{className:o()("flex items-start gap-4 pli-3 plb-2 cursor-pointer rounded mbe-1",{"bg-primary shadow-xs":u,"text-[var(--mui-palette-primary-contrastText)]":u}),onClick:()=>{a(e.userId),n&&i(!1),n&&r&&t(!1)},children:[(0,l.jsx)(L,{src:d.avatar,isChatActive:u,alt:d.fullName,badgeColor:_[d.status],color:d.avatarColor}),(0,l.jsxs)("div",{className:"min-is-0 flex-auto",children:[(0,l.jsx)(p.Z,{color:"inherit",children:null==d?void 0:d.fullName}),e.chat.length?(0,l.jsx)(p.Z,{variant:"body2",color:u?"inherit":"text.secondary",className:"truncate",children:e.chat[e.chat.length-1].message}):(0,l.jsx)(p.Z,{variant:"body2",color:u?"inherit":"text.secondary",className:"truncate",children:d.role})]}),(0,l.jsxs)("div",{className:"flex flex-col items-end justify-start",children:[(0,l.jsx)(p.Z,{variant:"body2",color:"inherit",className:o()("truncate",{"text-textDisabled":!u}),children:e.chat.length?T(e.chat[e.chat.length-1].time):null}),e.unseenMsgs>0?(0,l.jsx)(h.Z,{label:e.unseenMsgs,color:"error",size:"small"}):null]})]},e.id)})},W=e=>{let{children:s,isBelowLgScreen:a}=e;return a?(0,l.jsx)("div",{className:"bs-full overflow-y-auto overflow-x-hidden",children:s}):(0,l.jsx)(b(),{options:{wheelPropagation:!1},children:s})};var Q=e=>{let{chatStore:s,getActiveUserData:a,dispatch:r,backdropOpen:t,setBackdropOpen:n,sidebarOpen:c,setSidebarOpen:p,isBelowLgScreen:h,isBelowMdScreen:v,isBelowSmScreen:b,messageInputRef:Z}=e,[w,S]=(0,i.useState)(!1),[k,C]=(0,i.useState)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(m.ZP,{open:c,onClose:()=>p(!1),className:"bs-full",variant:v?"persistent":"permanent",ModalProps:{disablePortal:!0,keepMounted:!0},sx:{zIndex:v&&c?11:10,position:v?"absolute":"static",...b&&c&&{width:"100%"},"& .MuiDrawer-paper":{overflow:"hidden",boxShadow:"none",width:b?"100%":"370px",position:v?"absolute":"static"}},children:[(0,l.jsxs)("div",{className:"flex plb-[18px] pli-5 gap-4 border-be",children:[(0,l.jsx)(L,{alt:s.profileUser.fullName,src:s.profileUser.avatar,badgeColor:_[s.profileUser.status],onClick:()=>{S(!0)}}),(0,l.jsxs)("div",{className:"flex is-full items-center flex-auto sm:gap-x-3",children:[(0,l.jsx)(j.Z,{fullWidth:!0,size:"small",id:"select-contact",options:s.contacts.map(e=>e.fullName)||[],value:k||null,onChange:(e,l)=>{var i,t,o,c;C(l),r((0,d.rz)({id:null===(i=s.contacts.find(e=>e.fullName===l))||void 0===i?void 0:i.id})),a((null===(t=s.contacts.find(e=>e.fullName===l))||void 0===t?void 0:t.id)||(null===(o=s.activeUser)||void 0===o?void 0:o.id)),v&&p(!1),n(!1),C(null),null===(c=Z.current)||void 0===c||c.focus()},renderInput:e=>(0,l.jsx)(x.Z,{...e,variant:"outlined",sx:{"& .MuiOutlinedInput-root":{borderRadius:"999px !important"}},placeholder:"Search Contacts",InputProps:{...e.InputProps,startAdornment:(0,l.jsx)(f.Z,{position:"end",children:(0,l.jsx)("i",{className:"ri-search-line text-xl"})})}}),renderOption:(e,a)=>{let r=s.contacts.find(e=>e.fullName===a);return(0,i.createElement)("li",{...e,key:a.toLowerCase().replace(/\s+/g,"-"),className:o()("gap-3 max-sm:pli-3",e.className),children:[r?r.avatar?(0,l.jsx)(u.Z,{alt:r.fullName,src:r.avatar},a.toLowerCase().replace(/\s+/g,"-")):(0,l.jsx)(N.default,{color:r.avatarColor,skin:"light",children:(0,U.Q)(r.fullName)},a.toLowerCase().replace(/\s+/g,"-")):null,a]})}}),v?(0,l.jsx)(g.Z,{className:"p-0 mis-2",onClick:()=>{p(!1),n(!1)},children:(0,l.jsx)("i",{className:"ri-close-line"})}):null]})]}),(0,l.jsx)(W,{isBelowLgScreen:h,children:(0,l.jsx)("ul",{className:"p-3 pbs-4",children:V({chatStore:s,getActiveUserData:a,backdropOpen:t,setSidebarOpen:p,isBelowMdScreen:v,setBackdropOpen:n})})})]}),(0,l.jsx)(R,{userSidebar:w,setUserSidebar:S,profileUserData:s.profileUser,dispatch:r,isBelowLgScreen:h,isBelowSmScreen:b})]})},H=a(33386),K=a(79505);let Y=(e,s)=>{let a=[],l=e[0]?e[0].senderId:s.id,i={senderId:l,messages:[]};return e.forEach((s,r)=>{l===s.senderId?i.messages.push({time:s.time,message:s.message,msgStatus:s.msgStatus}):(l=s.senderId,a.push(i),i={senderId:s.senderId,messages:[{time:s.time,message:s.message,msgStatus:s.msgStatus}]}),r===e.length-1&&a.push(i)}),a},q=e=>{let{children:s,isBelowLgScreen:a,scrollRef:i,className:r}=e;return a?(0,l.jsx)("div",{ref:i,className:o()("bs-full overflow-y-auto overflow-x-hidden",r),children:s}):(0,l.jsx)(b(),{ref:i,options:{wheelPropagation:!1},className:r,children:s})};var $=e=>{let{chatStore:s,isBelowLgScreen:a,isBelowMdScreen:r,isBelowSmScreen:t}=e,{profileUser:n,contacts:c}=s,d=s.chats.find(e=>{var a;return e.userId===(null===(a=s.activeUser)||void 0===a?void 0:a.id)}),x=(0,i.useRef)(null),m=()=>{x.current&&(a?x.current.scrollTop=x.current.scrollHeight:x.current._container.scrollTop=x.current._container.scrollHeight)};return(0,i.useEffect)(()=>{d&&d.chat&&d.chat.length&&m()},[s]),(0,l.jsx)(q,{isBelowLgScreen:a,scrollRef:x,className:"bg-[var(--mui-palette-customColors-chatBg)]",children:(0,l.jsx)(H.Z,{className:"p-0",children:d&&Y(d.chat,n).map((e,s)=>{var a,i,x,m,h;let j=e.senderId===n.id;return(0,l.jsxs)("div",{className:o()("flex gap-4 p-5",{"flex-row-reverse":j}),children:[j?n.avatar?(0,l.jsx)(u.Z,{alt:n.fullName,src:n.avatar,className:"is-8 bs-8"}):(0,l.jsx)(N.default,{alt:n.fullName,src:n.avatar,size:32}):(null===(a=c.find(e=>e.id===(null==d?void 0:d.userId)))||void 0===a?void 0:a.avatar)?(0,l.jsx)(u.Z,{alt:null===(i=c.find(e=>e.id===(null==d?void 0:d.userId)))||void 0===i?void 0:i.fullName,src:null===(x=c.find(e=>e.id===(null==d?void 0:d.userId)))||void 0===x?void 0:x.avatar,className:"is-8 bs-8"}):(0,l.jsx)(N.default,{color:null===(m=c.find(e=>e.id===(null==d?void 0:d.userId)))||void 0===m?void 0:m.avatarColor,skin:"light",size:32,children:(0,U.Q)(null===(h=c.find(e=>e.id===(null==d?void 0:d.userId)))||void 0===h?void 0:h.fullName)}),(0,l.jsxs)("div",{className:o()("flex flex-col gap-2",{"items-end":j,"max-is-[65%]":!r,"max-is-[75%]":r&&!t,"max-is-[calc(100%-5.75rem)]":t}),children:[e.messages.map((e,s)=>(0,l.jsx)(p.Z,{className:o()("whitespace-pre-wrap pli-4 plb-2 shadow-xs",{"bg-backgroundPaper rounded-e rounded-b":!j,"bg-primary text-[var(--mui-palette-primary-contrastText)] rounded-s rounded-b":j}),style:{wordBreak:"break-word"},children:e.message},s)),e.messages.map((s,a)=>{var i,r,t;return a===e.messages.length-1&&(j?(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(null===(i=s.msgStatus)||void 0===i?void 0:i.isSeen)?(0,l.jsx)("i",{className:"ri-check-double-line text-success text-base"}):(null===(r=s.msgStatus)||void 0===r?void 0:r.isDelivered)?(0,l.jsx)("i",{className:"ri-check-double-line text-base"}):(null===(t=s.msgStatus)||void 0===t?void 0:t.isSent)&&(0,l.jsx)("i",{className:"ri-check-line text-base"}),a===d.chat.length-1?(0,l.jsx)(p.Z,{variant:"caption",children:new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}):s.time?(0,l.jsx)(p.Z,{variant:"caption",children:new Date(s.time).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}):null]},a):a===d.chat.length-1?(0,l.jsx)(p.Z,{variant:"caption",children:new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})},a):s.time?(0,l.jsx)(p.Z,{variant:"caption",children:new Date(s.time).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})},a):null)})]})]},s)})})})},G=a(88478),J=a(49744),X=a(13935),ee=a(62168),es=a(41903),ea=a(30034),el=a(75829),ei=a(89863),er=a(18308);let et=e=>{let{onChange:s,isBelowSmScreen:a,openEmojiPicker:i,setOpenEmojiPicker:r,anchorRef:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(G.Z,{open:i,transition:!0,disablePortal:!0,placement:"top-start",className:"z-[12]",anchorEl:t.current,children:e=>{let{TransitionProps:i,placement:t}=e;return(0,l.jsx)(J.Z,{...i,style:{transformOrigin:"top-start"===t?"right top":"left top"},children:(0,l.jsx)(X.Z,{children:(0,l.jsx)(ee.d,{onClickAway:()=>r(!1),children:(0,l.jsx)("span",{children:(0,l.jsx)(el.Z,{emojiSize:18,theme:"light",data:ei,maxFrequentRows:1,onEmojiSelect:e=>{s(e.native),r(!1)},...a&&{perLine:8}})})})})})}})})};var en=e=>{let{dispatch:s,activeUser:a,isBelowSmScreen:r,messageInputRef:t}=e,[n,o]=(0,i.useState)(""),[c,u]=(0,i.useState)(null),[m,p]=(0,i.useState)(!1),h=(0,i.useRef)(null),j=!!c,f=()=>{p(e=>!e)},v=()=>{u(null)},b=(e,a)=>{e.preventDefault(),""!==a.trim()&&(s((0,d.g_)({msg:a})),o(""))};return(0,i.useEffect)(()=>{o("")},[a.id]),(0,l.jsx)("form",{autoComplete:"off",onSubmit:e=>b(e,n),className:" bg-[var(--mui-palette-customColors-chatBg)]",children:(0,l.jsx)(x.Z,{fullWidth:!0,multiline:!0,maxRows:4,placeholder:"Type a message",value:n,className:"p-5",onChange:e=>o(e.target.value),sx:{"& fieldset":{border:"0"},"& .MuiOutlinedInput-root":{background:"var(--mui-palette-background-paper)",boxShadow:"var(--mui-customShadows-xs)"}},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||b(e,n)},size:"small",inputRef:t,InputProps:{endAdornment:(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{size:"small",id:"option-menu","aria-haspopup":"true",...j&&{"aria-expanded":!0,"aria-controls":"share-menu"},onClick:e=>{u(s=>s?null:e.currentTarget)},ref:h,children:(0,l.jsx)("i",{className:"ri-more-2-line text-textPrimary"})}),(0,l.jsxs)(es.Z,{anchorEl:c,open:j,onClose:v,children:[(0,l.jsx)(ea.Z,{onClick:()=>{f(),v()},className:"justify-center",children:(0,l.jsx)("i",{className:"ri-emotion-happy-line text-textPrimary"})}),(0,l.jsx)(ea.Z,{onClick:v,className:"justify-center",children:(0,l.jsx)("i",{className:"ri-mic-line text-textPrimary"})}),(0,l.jsx)(ea.Z,{onClick:v,className:"p-0",children:(0,l.jsxs)("label",{htmlFor:"upload-img",className:"plb-2 pli-5",children:[(0,l.jsx)("i",{className:"ri-attachment-2 text-textPrimary"}),(0,l.jsx)("input",{hidden:!0,type:"file",id:"upload-img"})]})})]}),(0,l.jsx)(et,{anchorRef:h,openEmojiPicker:m,setOpenEmojiPicker:p,isBelowSmScreen:r,onChange:e=>{o(n+e),t.current&&t.current.focus()}})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{ref:h,size:"small",onClick:f,children:(0,l.jsx)("i",{className:"ri-emotion-happy-line text-textPrimary"})}),(0,l.jsx)(et,{anchorRef:h,openEmojiPicker:m,setOpenEmojiPicker:p,isBelowSmScreen:r,onChange:e=>{o(n+e),t.current&&t.current.focus()}}),(0,l.jsx)(g.Z,{size:"small",children:(0,l.jsx)("i",{className:"ri-mic-line text-textPrimary"})}),(0,l.jsxs)(g.Z,{size:"small",component:"label",htmlFor:"upload-img",children:[(0,l.jsx)("i",{className:"ri-attachment-2 text-textPrimary"}),(0,l.jsx)("input",{hidden:!0,type:"file",id:"upload-img"})]})]}),r?(0,l.jsx)(er.Z,{variant:"contained",color:"primary",type:"submit",children:(0,l.jsx)("i",{className:"ri-send-plane-line"})}):(0,l.jsx)(M.Z,{variant:"contained",color:"primary",type:"submit",endIcon:(0,l.jsx)("i",{className:"ri-send-plane-line"}),children:"Send"})]})}})})};let eo=e=>{let{children:s,isBelowLgScreen:a,className:i}=e;return a?(0,l.jsx)("div",{className:o()("bs-full overflow-x-hidden overflow-y-auto",i),children:s}):(0,l.jsx)(b(),{options:{wheelPropagation:!1},className:i,children:s})};var ec=e=>{let{open:s,handleClose:a,activeUser:i,isBelowLgScreen:r,isBelowSmScreen:t}=e;return i?(0,l.jsxs)(m.ZP,{open:s,anchor:"right",variant:"persistent",ModalProps:{keepMounted:!0},sx:{zIndex:12,"& .MuiDrawer-paper":{width:t?"100%":"370px",position:"absolute",border:0}},children:[(0,l.jsx)(g.Z,{size:"small",className:"absolute block-start-4 inline-end-4",onClick:a,children:(0,l.jsx)("i",{className:"ri-close-line text-2xl"})}),(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4 mbs-6 pli-5 pbs-5 pbe-1",children:[(0,l.jsx)(L,{alt:i.fullName,src:i.avatar,color:i.avatarColor,badgeColor:_[i.status],className:"bs-[84px] is-[84px] text-3xl",badgeSize:12}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)(p.Z,{variant:"h5",children:i.fullName}),(0,l.jsx)(p.Z,{children:i.role})]})]}),(0,l.jsxs)(eo,{isBelowLgScreen:r,className:"flex flex-col gap-6 p-5",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)(p.Z,{className:"uppercase",color:"text.disabled",children:"About"}),(0,l.jsx)(p.Z,{children:i.about})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)(p.Z,{className:"uppercase",color:"text.disabled",children:"Personal Information"}),(0,l.jsxs)(C.Z,{children:[(0,l.jsxs)(y.ZP,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-mail-line"})}),(0,l.jsx)(I.Z,{primary:"".concat(i.fullName.toLowerCase().replace(/\s/g,"_"),"@email.com")})]}),(0,l.jsxs)(y.ZP,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-phone-line"})}),(0,l.jsx)(I.Z,{primary:"+1(123) 456 - 7890"})]}),(0,l.jsxs)(y.ZP,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-time-line"})}),(0,l.jsx)(I.Z,{primary:"Mon - Fri 10AM - 8PM"})]})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)(p.Z,{className:"uppercase",color:"text.disabled",children:"Options"}),(0,l.jsxs)(C.Z,{children:[(0,l.jsx)(y.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-bookmark-line"})}),(0,l.jsx)(I.Z,{primary:"Add Tag"})]})}),(0,l.jsx)(y.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-user-star-line"})}),(0,l.jsx)(I.Z,{primary:"Important Contact"})]})}),(0,l.jsx)(y.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-image-2-line"})}),(0,l.jsx)(I.Z,{primary:"Shared Image"})]})}),(0,l.jsx)(y.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{className:"p-2 gap-2",children:[(0,l.jsx)(z.Z,{children:(0,l.jsx)("i",{className:"ri-forbid-2-line"})}),(0,l.jsx)(I.Z,{primary:"Block Contact"})]})})]})]}),(0,l.jsx)(M.Z,{variant:"contained",color:"error",fullWidth:!0,className:"mbs-auto",endIcon:(0,l.jsx)("i",{className:"ri-delete-bin-7-line"}),children:"Delete Contact"})]})]}):null};let ed=e=>{let{activeUser:s,setUserProfileLeftOpen:a,setBackdropOpen:i}=e;return(0,l.jsxs)("div",{className:"flex items-center gap-4 cursor-pointer",onClick:()=>{a(!0),i(!0)},children:[(0,l.jsx)(L,{alt:null==s?void 0:s.fullName,src:null==s?void 0:s.avatar,color:null==s?void 0:s.avatarColor,badgeColor:_[(null==s?void 0:s.status)||"offline"]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{color:"text.primary",children:null==s?void 0:s.fullName}),(0,l.jsx)(p.Z,{variant:"body2",children:null==s?void 0:s.role})]})]})};var eu=e=>{let{chatStore:s,dispatch:a,backdropOpen:r,setBackdropOpen:t,setSidebarOpen:n,isBelowMdScreen:o,isBelowSmScreen:c,isBelowLgScreen:d,messageInputRef:u}=e,{activeUser:x}=s,[m,h]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{!r&&m&&h(!1)},[r]),s.activeUser?(0,l.jsxs)(l.Fragment,{children:[x&&(0,l.jsxs)("div",{className:"flex flex-col flex-grow bs-full",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between border-be plb-[17px] pli-5 bg-[var(--mui-palette-customColors-chatBg)]",children:[o?(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)(g.Z,{size:"small",onClick:()=>{n(!0),t(!0)},children:(0,l.jsx)("i",{className:"ri-menu-line text-textSecondary"})}),(0,l.jsx)(ed,{activeUser:x,setBackdropOpen:t,setUserProfileLeftOpen:h})]}):(0,l.jsx)(ed,{activeUser:x,setBackdropOpen:t,setUserProfileLeftOpen:h}),o?(0,l.jsx)(K.default,{iconClassName:"text-textSecondary",options:[{text:"View Contact",menuItemProps:{onClick:()=>{h(!0),t(!0)}}},"Mute Notifications","Block Contact","Clear Chat","Block"]}):(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(g.Z,{size:"small",children:(0,l.jsx)("i",{className:"ri-phone-line text-textSecondary"})}),(0,l.jsx)(g.Z,{size:"small",children:(0,l.jsx)("i",{className:"ri-video-add-line text-textSecondary"})}),(0,l.jsx)(g.Z,{size:"small",children:(0,l.jsx)("i",{className:"ri-search-line text-textSecondary"})}),(0,l.jsx)(K.default,{iconClassName:"text-textSecondary",options:[{text:"View Contact",menuItemProps:{onClick:()=>{h(!0),t(!0)}}},"Mute Notifications","Block Contact","Clear Chat","Block"]})]})]}),(0,l.jsx)($,{chatStore:s,isBelowMdScreen:o,isBelowSmScreen:c,isBelowLgScreen:d}),(0,l.jsx)(en,{dispatch:a,activeUser:x,isBelowSmScreen:c,messageInputRef:u})]}),x&&(0,l.jsx)(ec,{open:m,handleClose:()=>{h(!1),t(!1)},activeUser:x,isBelowSmScreen:c,isBelowLgScreen:d})]}):(0,l.jsxs)(H.Z,{className:"flex flex-col flex-auto items-center justify-center bs-full gap-[18px] bg-[var(--mui-palette-customColors-chatBg)]",children:[(0,l.jsx)(N.default,{variant:"circular",size:98,color:"primary",skin:"light",children:(0,l.jsx)("i",{className:"ri-wechat-line text-[50px]"})}),(0,l.jsx)(p.Z,{className:"text-center",children:"Select a contact to start a conversation."}),o&&(0,l.jsx)(M.Z,{variant:"contained",className:"rounded-full",onClick:()=>{n(!0),c?t(!1):t(!0)},children:"Select Contact"})]})},ex=a(59787),em=a(5668),ep=()=>{let[e,s]=(0,i.useState)(!1),[a,n]=(0,i.useState)(!1),u=(0,i.useRef)(null),{settings:x}=(0,ex.r)(),m=(0,c.I0)(),p=(0,c.v9)(e=>e.chatReducer),h=(0,t.Z)(e=>e.breakpoints.down("lg")),j=(0,t.Z)(e=>e.breakpoints.down("md")),f=(0,t.Z)(e=>e.breakpoints.down("sm"));return(0,i.useEffect)(()=>{var e;(null===(e=p.activeUser)||void 0===e?void 0:e.id)!==null&&u.current&&u.current.focus()},[p.activeUser]),(0,i.useEffect)(()=>{!j&&e&&a&&s(!1)},[j]),(0,i.useEffect)(()=>{!f&&a&&s(!0)},[f]),(0,i.useEffect)(()=>{!e&&a&&n(!1)},[e]),(0,l.jsxs)("div",{className:o()(em.kV.contentHeightFixed,"flex is-full overflow-hidden rounded relative",{border:"bordered"===x.skin,"shadow-md":"bordered"!==x.skin}),children:[(0,l.jsx)(Q,{chatStore:p,getActiveUserData:e=>{m((0,d.hs)(e))},dispatch:m,backdropOpen:e,setBackdropOpen:s,sidebarOpen:a,setSidebarOpen:n,isBelowLgScreen:h,isBelowMdScreen:j,isBelowSmScreen:f,messageInputRef:u}),(0,l.jsx)(eu,{chatStore:p,dispatch:m,backdropOpen:e,setBackdropOpen:s,setSidebarOpen:n,isBelowMdScreen:j,isBelowLgScreen:h,isBelowSmScreen:f,messageInputRef:u}),(0,l.jsx)(r.Z,{open:e,onClick:()=>s(!1),className:"absolute z-10"})]})}}},function(e){e.O(0,[6029,4362,8869,1055,4214,9253,4637,313,6431,7814,9415,1559,9993,3443,3532,5870,7586,7690,9242,6960,7099,1476,4170,6842,1744],function(){return e(e.s=29753)}),_N_E=e.O()}]);