(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7157],{88573:function(e,t,r){Promise.resolve().then(r.bind(r,94190)),Promise.resolve().then(r.bind(r,96987)),Promise.resolve().then(r.bind(r,61027)),Promise.resolve().then(r.bind(r,8984)),Promise.resolve().then(r.bind(r,4389)),Promise.resolve().then(r.bind(r,3099)),Promise.resolve().then(r.bind(r,85417)),Promise.resolve().then(r.bind(r,20865)),Promise.resolve().then(r.bind(r,82662)),Promise.resolve().then(r.bind(r,13219)),Promise.resolve().then(r.bind(r,20030)),Promise.resolve().then(r.bind(r,51733)),Promise.resolve().then(r.bind(r,68579)),Promise.resolve().then(r.bind(r,6083)),Promise.resolve().then(r.bind(r,79505)),Promise.resolve().then(r.bind(r,83762)),Promise.resolve().then(r.bind(r,15199)),Promise.resolve().then(r.bind(r,53858)),Promise.resolve().then(r.bind(r,76699)),Promise.resolve().then(r.bind(r,82369)),Promise.resolve().then(r.bind(r,21869)),Promise.resolve().then(r.bind(r,26211))},94190:function(e,t,r){"use strict";r.r(t),r.d(t,{avatarClasses:function(){return a.Z},default:function(){return i.Z},getAvatarUtilityClass:function(){return a.$}});var i=r(36663),a=r(9686)},96987:function(e,t,r){"use strict";r.r(t),r.d(t,{buttonClasses:function(){return a.Z},default:function(){return i.Z},getButtonUtilityClass:function(){return a.F}});var i=r(47867),a=r(12812)},3099:function(e,t,r){"use strict";r.r(t),r.d(t,{cardMediaClasses:function(){return u},default:function(){return j},getCardMediaUtilityClass:function(){return p}});var i=r(99370),a=r(78845),s=r(31229),o=r(27494),n=r(92728),l=r(28464),c=r(66030),d=r(47678),m=r(11016);function p(e){return(0,m.ZP)("MuiCardMedia",e)}var u=(0,d.Z)("MuiCardMedia",["root","media","img"]),h=r(59533);let x=["children","className","component","image","src","style"],f=e=>{let{classes:t,isMediaComponent:r,isImageComponent:i}=e;return(0,n.Z)({root:["root",r&&"media",i&&"img"]},p,t)},b=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{isMediaComponent:i,isImageComponent:a}=r;return[t.root,i&&t.media,a&&t.img]}})(e=>{let{ownerState:t}=e;return(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})}),v=["video","audio","picture","iframe","img"],g=["picture","img"];var j=s.forwardRef(function(e,t){let r=(0,l.i)({props:e,name:"MuiCardMedia"}),{children:s,className:n,component:c="div",image:d,src:m,style:p}=r,u=(0,i.Z)(r,x),j=-1!==v.indexOf(c),y=!j&&d?(0,a.Z)({backgroundImage:'url("'.concat(d,'")')},p):p,Z=(0,a.Z)({},r,{component:c,isMediaComponent:j,isImageComponent:-1!==g.indexOf(c)}),k=f(Z);return(0,h.jsx)(b,(0,a.Z)({className:(0,o.Z)(k.root,n),as:c,role:!j&&d?"img":void 0,ref:t,style:y,ownerState:Z,src:j?d||m:void 0},u,{children:s}))})},20865:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i.Z},dividerClasses:function(){return a.Z},getDividerUtilityClass:function(){return a.V}});var i=r(45336),a=r(58328)},13219:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i.Z},getTextFieldUtilityClass:function(){return a.I},textFieldClasses:function(){return a.Z}});var i=r(66431),a=r(93873)},15248:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var i=r(31487),a=r(83396);function s(e){let{props:t,name:r,defaultTheme:s,themeId:o}=e,n=(0,a.Z)(s);return o&&(n=n[o]||n),(0,i.Z)({theme:n,name:r,props:t})}},6083:function(e,t,r){"use strict";r.r(t);var i=r(59533),a=r(31229),s=r(36663),o=r(66030),n=r(16948);let l=(0,o.ZP)(s.Z)(e=>{let{skin:t,color:r,size:i,theme:a}=e;return{...r&&"light"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-lightOpacity)"),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"light-static"===t&&{backgroundColor:(0,n.$n)(a.palette[r].main,.84),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"filled"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-main)"),color:"var(--mui-palette-".concat(r,"-contrastText)")},...i&&{height:i,width:i}}}),c=(0,a.forwardRef)((e,t)=>{let{color:r,skin:a="filled",...s}=e;return(0,i.jsx)(l,{color:r,skin:a,ref:t,...s})});t.default=c},79505:function(e,t,r){"use strict";r.r(t);var i=r(59533),a=r(31229),s=r(96353),o=r(75510),n=r(51115),l=r(88478),c=r(30034),d=r(13638),m=r(62168),p=r(49744),u=r(13935),h=r(89749),x=r(45336),f=r(72860),b=r.n(f),v=r(59787);let g=e=>{let{tooltipProps:t,children:r}=e;return(null==t?void 0:t.title)?(0,i.jsx)(o.Z,{...t,children:r}):r},j=e=>{let{children:t,option:r}=e;return r.href?(0,i.jsx)(n.Z,{component:s.default,href:r.href,...r.linkProps,children:t}):(0,i.jsx)(i.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:r,iconClassName:s,options:o,leftAlignMenu:n,iconButtonProps:f}=e,[y,Z]=(0,a.useState)(!1),k=(0,a.useRef)(null),{settings:C}=(0,v.r)(),w=e=>{k.current&&k.current.contains(e.target)||Z(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{tooltipProps:t,children:(0,i.jsx)(h.Z,{ref:k,size:"small",onClick:()=>{Z(e=>!e)},...f,children:"string"==typeof r?(0,i.jsx)("i",{className:b()(r,s)}):r||(0,i.jsx)("i",{className:b()("ri-more-2-line",s)})})}),(0,i.jsx)(l.Z,{open:y,anchorEl:k.current,placement:n?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,i.jsx)(p.Z,{...t,children:(0,i.jsx)(u.Z,{className:"bordered"===C.skin?"border shadow-none":"shadow-lg",children:(0,i.jsx)(m.d,{onClickAway:w,children:(0,i.jsx)(d.Z,{autoFocusItem:y,children:o.map((e,t)=>"string"==typeof e?(0,i.jsx)(c.Z,{onClick:w,children:e},t):"divider"in e?e.divider&&(0,i.jsx)(x.Z,{...e.dividerProps},t):(0,i.jsx)(c.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{w(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,i.jsxs)(j,{option:e,children:[("string"==typeof e.icon?(0,i.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},64825:function(e,t,r){"use strict";r.d(t,{J:function(){return c},SettingsProvider:function(){return d}});var i=r(59533),a=r(31229),s=r(23310),o=r(13231),n=r(75443);let l=(e,t)=>{let[r,i]=(0,n.Z)(e);return[(0,a.useMemo)(()=>r?JSON.parse(r):t,[r]),e=>{i(JSON.stringify(e))}]},c=(0,a.createContext)(null),d=e=>{let t={mode:s.Z.mode,skin:s.Z.skin,semiDark:s.Z.semiDark,layout:s.Z.layout,navbarContentWidth:s.Z.navbar.contentWidth,contentWidth:s.Z.contentWidth,footerContentWidth:s.Z.footer.contentWidth,primaryColor:o.Z[0].main},r={...t,mode:e.mode||s.Z.mode},[n,d]=l(s.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:r),[m,p]=(0,a.useState)("{}"!==JSON.stringify(n)?n:r),u=(e,t)=>{let{updateCookie:r=!0}=t||{};p(t=>{let i={...t,...e};return r&&d(i),i})},h=(0,a.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(m),[m]);return(0,i.jsx)(c.Provider,{value:{settings:m,updateSettings:u,isSettingsChanged:h,resetSettings:()=>{u(t)},updatePageSettings:e=>(u(e,{updateCookie:!1}),()=>u(n,{updateCookie:!1}))},children:e.children})}},59787:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var i=r(31229),a=r(64825);let s=()=>{let e=(0,i.useContext)(a.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},83762:function(e,t,r){"use strict";var i=r(59533),a=r(31229),s=r(96353);t.default=(0,a.forwardRef)((e,t)=>{let{href:r,onClick:a,...o}=e;return(0,i.jsx)(s.default,{ref:t,...o,href:r||"/",onClick:a?e=>a(e):r?void 0:e=>e.preventDefault()})})},13231:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/dashboards/crm",settingsCookieName:"materio-mui-next-demo-1",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},15199:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var i=r(59533),a=r(51115),s=r(66030);let o=(0,r(90884).default)(()=>Promise.all([r.e(7437),r.e(9618)]).then(r.bind(r,9618)),{loadableGenerated:{webpack:()=>[9618]},ssr:!1}),n=(0,s.ZP)(a.Z)(e=>{let{theme:t}=e;return{"& .apexcharts-canvas":{"& line[stroke='transparent']":{display:"none"},"& .apexcharts-tooltip":{boxShadow:"var(--mui-customShadows-xs)",borderColor:"var(--mui-palette-divider)",background:"var(--mui-palette-background-paper)",..."rtl"===t.direction&&{".apexcharts-tooltip-marker":{marginInlineEnd:10,marginInlineStart:0},".apexcharts-tooltip-text-y-value":{marginInlineStart:5,marginInlineEnd:0}},"& .apexcharts-tooltip-title":{fontWeight:600,borderColor:"var(--mui-palette-divider)",background:"var(--mui-palette-background-paper)"},"&.apexcharts-theme-light":{color:"var(--mui-palette-text-primary)"},"&.apexcharts-theme-dark":{color:"var(--mui-palette-common-white)"},"& .apexcharts-tooltip-series-group:first-of-type":{paddingBottom:0},"& .bar-chart":{padding:t.spacing(2,2.5)}},"& .apexcharts-xaxistooltip":{borderColor:"var(--mui-palette-divider)",background:"var(--mui-palette-grey-50)",'[data-mui-color-scheme="dark"] &':{background:"var(--mui-palette-customColors-bodyBg)"},"&:after":{borderBottomColor:"var(--mui-palette-grey-50)",'[data-mui-color-scheme="dark"] &':{borderBottomColor:"var(--mui-palette-customColors-bodyBg)"}},"&:before":{borderBottomColor:"var(--mui-palette-divider)"}},"& .apexcharts-yaxistooltip":{borderColor:"var(--mui-palette-divider)",background:"var(--mui-palette-grey-50)",'[data-mui-color-scheme="dark"] &':{background:"var(--mui-palette-customColors-bodyBg)"},"&:after":{borderLeftColor:"var(--mui-palette-grey-50)",'[data-mui-color-scheme="dark"] &':{borderLeftColor:"var(--mui-palette-customColors-bodyBg)"}},"&:before":{borderLeftColor:"var(--mui-palette-divider)"}},"& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text":{color:"var(--mui-palette-text-primary)"},"& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label":{textAnchor:"rtl"===t.direction?"start":void 0},"& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text":{fontFamily:"".concat(t.typography.fontFamily," !important")},"& .apexcharts-pie-label":{filter:"none"},"& .apexcharts-marker":{boxShadow:"none"}}}});var l=e=>{let{boxProps:t,...r}=e;return(0,i.jsx)(n,{...t,children:(0,i.jsx)(o,{...r})})}},53858:function(e,t,r){"use strict";var i=r(59533),a=r(26175),s=r(32870),o=r(33386),n=r(36663),l=r(66030),c=r(72540),d=r(33135),m=r(28095),p=r(34607),u=r(34051),h=r(84407),x=r(15217);let f=(0,l.ZP)(x.Z)({paddingLeft:0,paddingRight:0,"& .MuiTimelineItem-root":{width:"100%","&:before":{display:"none"}}});t.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(s.Z,{title:"Activity Timeline"}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(f,{children:[(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(c.Z,{color:"primary"}),(0,i.jsx)(h.Z,{})]}),(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,i.jsx)(m.Z,{className:"font-medium",color:"text.primary",children:"12 Invoices have been paid"}),(0,i.jsx)(m.Z,{variant:"caption",color:"text.disabled",children:"12 min ago"})]}),(0,i.jsx)(m.Z,{className:"mbe-2.5",children:"Invoices have been paid to the company"}),(0,i.jsxs)("div",{className:"flex items-center gap-2.5 is-fit plb-[5px] pli-2.5 rounded bg-actionHover",children:[(0,i.jsx)("img",{height:20,alt:"invoice.pdf",src:"/images/icons/pdf-document.png"}),(0,i.jsx)(m.Z,{className:"font-medium",children:"invoices.pdf"})]})]})]}),(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(c.Z,{color:"success"}),(0,i.jsx)(h.Z,{})]}),(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,i.jsx)(m.Z,{className:"font-medium",color:"text.primary",children:"Client Meeting"}),(0,i.jsx)(m.Z,{variant:"caption",color:"text.disabled",children:"45 min ago"})]}),(0,i.jsx)(m.Z,{className:"mbe-2.5",children:"Project meeting with john @10:15am"}),(0,i.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,i.jsx)(n.Z,{src:"/images/avatars/1.png",className:"bs-8 is-8"}),(0,i.jsxs)("div",{className:"flex flex-col flex-wrap gap-0.5",children:[(0,i.jsx)(m.Z,{variant:"body2",className:"font-medium",children:"Lester McCarthy (Client)"}),(0,i.jsx)(m.Z,{variant:"body2",children:"CEO of ThemeSelection"})]})]})]})]}),(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(c.Z,{color:"info"}),(0,i.jsx)(h.Z,{})]}),(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,i.jsx)(m.Z,{className:"font-medium",color:"text.primary",children:"Create a new project for client"}),(0,i.jsx)(m.Z,{variant:"caption",color:"text.disabled",children:"2 Day Ago"})]}),(0,i.jsx)(m.Z,{children:"6 team members in a project"})]})]})]})})]})},76699:function(e,t,r){"use strict";var i=r(59533),a=r(90884),s=r(26175),o=r(33386),n=r(28095),l=r(64041);let c=(0,a.default)(()=>Promise.resolve().then(r.bind(r,15199)),{loadableGenerated:{webpack:()=>[15199]}}),d=[{name:"Subscribers",data:[28,40,36,52,38,60]}];t.default=()=>{let e={chart:{parentHeightOffset:0,toolbar:{show:!1}},tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},grid:{show:!1,padding:{left:2,top:-30,right:2,bottom:-15}},fill:{type:"gradient",gradient:{colorStops:[[{offset:0,opacity:.3,color:"var(--mui-palette-success-main)"},{offset:100,opacity:.1,color:"var(--mui-palette-background-paper)"}]]}},theme:{monochrome:{enabled:!0,shadeTo:"light",shadeIntensity:1,color:(0,l.Z)().palette.success.main}},xaxis:{type:"numeric",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},responsive:[{breakpoint:600,options:{chart:{height:90}}}]};return(0,i.jsx)(s.Z,{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(n.Z,{variant:"h4",children:"42.5k"}),(0,i.jsx)(c,{type:"area",height:100,width:"100%",options:e,series:d}),(0,i.jsx)(n.Z,{color:"text.primary",className:"font-medium text-center",children:"Total Growth"})]})})}},82369:function(e,t,r){"use strict";var i=r(59533),a=r(90884),s=r(26175),o=r(64041),n=r(32870),l=r(33386),c=r(79505);let d=(0,a.default)(()=>Promise.resolve().then(r.bind(r,15199)),{loadableGenerated:{webpack:()=>[15199]}}),m=[{name:"Earning",data:[95,177,284,256,105,63,168,218,72]},{name:"Expense",data:[-145,-80,-60,-180,-100,-60,-85,-75,-100]}];t.default=()=>{let e=(0,o.Z)(),t={chart:{stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},tooltip:{enabled:!1},grid:{show:!1,padding:{left:-10,right:0}},legend:{offsetY:6,fontSize:"15px",markers:{radius:15,height:10,width:10,offsetX:"rtl"===e.direction?7:-4},itemMargin:{horizontal:9},labels:{colors:"var(--mui-palette-text-secondary)"}},stroke:{width:3,colors:["var(--mui-palette-background-paper)"]},dataLabels:{enabled:!1},colors:["var(--mui-palette-success-main)","var(--mui-palette-secondary-main)"],plotOptions:{bar:{borderRadius:5,columnWidth:"50%",borderRadiusApplication:"around",borderRadiusWhenStacked:"all"}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1350,options:{plotOptions:{bar:{columnWidth:"65%"}}}},{breakpoint:e.breakpoints.values.lg,options:{plotOptions:{bar:{columnWidth:"65%"}}}},{breakpoint:e.breakpoints.values.md,options:{plotOptions:{bar:{borderRadius:8,columnWidth:"50%"}}}},{breakpoint:700,options:{plotOptions:{bar:{borderRadius:6,columnWidth:"55%"}}}},{breakpoint:e.breakpoints.values.sm,options:{plotOptions:{bar:{borderRadius:8,columnWidth:"40%"}}}},{breakpoint:500,options:{plotOptions:{bar:{columnWidth:"55%"}}}},{breakpoint:400,options:{plotOptions:{bar:{borderRadius:7,columnWidth:"60%"}}}}]};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.Z,{title:"Revenue Report",action:(0,i.jsx)(c.default,{iconClassName:"text-textPrimary",options:["Last 28 Days","Last Month","Last Year"]})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(d,{type:"bar",height:238,width:"100%",series:m,options:t})})]})}},21869:function(e,t,r){"use strict";var i=r(59533),a=r(90884),s=r(26175),o=r(95094),n=r(45336),l=r(64041),c=r(32870),d=r(28095),m=r(33386),p=r(6083),u=r(79505);let h=(0,a.default)(()=>Promise.resolve().then(r.bind(r,15199)),{loadableGenerated:{webpack:()=>[15199]}});t.default=()=>{let e=(0,l.Z)(),t="var(--mui-palette-text-secondary)",r={chart:{sparkline:{enabled:!0}},grid:{padding:{left:20,right:20}},colors:["var(--mui-palette-primary-main)","rgba(var(--mui-palette-primary-mainChannel) / 0.7)","rgba(var(--mui-palette-primary-mainChannel) / 0.5)","var(--mui-palette-customColors-trackBg)"],stroke:{width:0},legend:{show:!1},tooltip:{theme:"false"},dataLabels:{enabled:!1},labels:["Apparel","Electronics","FMCG","Other Sales"],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{pie:{customScale:.9,donut:{size:"70%",labels:{show:!0,name:{offsetY:25,fontSize:"0.875rem",color:t},value:{offsetY:-15,fontWeight:500,fontSize:"24px",formatter:e=>"".concat(e,"k"),color:"var(--mui-palette-text-primary)"},total:{show:!0,fontSize:"0.875rem",label:"Weekly Sales",color:t,formatter:e=>"".concat(e.globals.seriesTotals.reduce((e,t)=>e+t),"k")}}}}},responsive:[{breakpoint:1300,options:{chart:{height:257}}},{breakpoint:e.breakpoints.values.lg,options:{chart:{height:276}}},{breakpoint:1050,options:{chart:{height:250}}}]};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{title:"Sales Overview",action:(0,i.jsx)(u.default,{iconClassName:"text-textPrimary",options:["Last 28 Days","Last Month","Last Year"]})}),(0,i.jsx)(m.Z,{children:(0,i.jsxs)(o.ZP,{container:!0,children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,sm:6,sx:{mb:[3,0]},children:(0,i.jsx)(h,{type:"donut",height:277,width:"100%",series:[12,25,13,50],options:r})}),(0,i.jsxs)(o.ZP,{item:!0,xs:12,sm:6,sx:{my:"auto"},children:[(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)(p.default,{skin:"light",color:"primary",variant:"rounded",children:(0,i.jsx)("i",{className:"ri-wallet-line text-primary"})}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)(d.Z,{children:"Number of Sales"}),(0,i.jsx)(d.Z,{variant:"h5",children:"$86,400"})]})]}),(0,i.jsx)(n.Z,{className:"mlb-6"}),(0,i.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,i.jsxs)(o.ZP,{item:!0,xs:6,children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 mbe-1",children:[(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"ri-circle-fill text-[10px] text-primary"})}),(0,i.jsx)(d.Z,{children:"Apparel"})]}),(0,i.jsx)(d.Z,{className:"font-medium",children:"$12,150"})]}),(0,i.jsxs)(o.ZP,{item:!0,xs:6,children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 mbe-1",children:[(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"ri-circle-fill text-[10px] text-primary"})}),(0,i.jsx)(d.Z,{children:"Electronics"})]}),(0,i.jsx)(d.Z,{className:"font-medium",children:"$24,900"})]}),(0,i.jsxs)(o.ZP,{item:!0,xs:6,children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 mbe-1",children:[(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"ri-circle-fill text-[10px] text-primary"})}),(0,i.jsx)(d.Z,{children:"FMCG"})]}),(0,i.jsx)(d.Z,{className:"font-medium",children:"$12,750"})]}),(0,i.jsxs)(o.ZP,{item:!0,xs:6,children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 mbe-1",children:[(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"ri-circle-fill text-[10px] text-primary"})}),(0,i.jsx)(d.Z,{children:"Other Sales"})]}),(0,i.jsx)(d.Z,{className:"font-medium",children:"$50,200"})]})]})]})]})})]})}},26211:function(e,t,r){"use strict";var i=r(59533),a=r(90884),s=r(26175),o=r(64041),n=r(32870),l=r(33386),c=r(79505);let d=(0,a.default)(()=>Promise.resolve().then(r.bind(r,15199)),{loadableGenerated:{webpack:()=>[15199]}});t.default=()=>{let e={chart:{parentHeightOffset:0,toolbar:{show:!1}},tooltip:{enabled:!1},fill:{type:"gradient",gradient:{opacityTo:.2,opacityFrom:1,shadeIntensity:0,type:"horizontal",stops:[0,100,100]}},stroke:{width:6,curve:"smooth",lineCap:"round"},legend:{show:!1},colors:[(0,o.Z)().palette.success.main],grid:{show:!1,padding:{left:0,right:0,bottom:-10}},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun"],labels:{style:{fontSize:"0.9375rem",colors:"var(--mui-palette-text-disabled)"}}},yaxis:{labels:{show:!1}}};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.Z,{title:"Total Sales",subheader:"$21,845",subheaderTypographyProps:{sx:{color:"var(--mui-palette-text-primary) !important"}},className:"pbe-0",action:(0,i.jsx)(c.default,{iconClassName:"text-textPrimary",options:["Last 28 Days","Last Month","Last Year"]})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(d,{type:"line",height:248,width:"100%",options:e,series:[{name:"Total Sales",data:[0,258,30,240,150,400]}]})})]})}}},function(e){e.O(0,[8869,1055,4214,9253,4637,313,6431,7814,9415,4284,1559,9993,3443,9650,5432,4170,6842,1744],function(){return e(e.s=88573)}),_N_E=e.O()}]);