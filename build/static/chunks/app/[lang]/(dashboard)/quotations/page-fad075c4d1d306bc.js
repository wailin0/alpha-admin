(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6826],{22349:function(e,t,r){Promise.resolve().then(r.bind(r,10909))},49758:function(e,t,r){"use strict";r.r(t);var a=r(57437),n=r(2265),i=r(96303),l=r(48024),s=r(22305);let o=(0,l.ZP)(i.Z)(e=>{let{skin:t,color:r,size:a,theme:n}=e;return{...r&&"light"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-lightOpacity)"),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"light-static"===t&&{backgroundColor:(0,s.$n)(n.palette[r].main,.84),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"filled"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-main)"),color:"var(--mui-palette-".concat(r,"-contrastText)")},...a&&{height:a,width:a}}}),c=(0,n.forwardRef)((e,t)=>{let{color:r,skin:n="filled",...i}=e;return(0,a.jsx)(o,{color:r,skin:n,ref:t,...i})});t.default=c},81128:function(e,t,r){"use strict";r.r(t);var a=r(57437),n=r(2265),i=r(87138),l=r(31655),s=r(91326),o=r(27316),c=r(11656),d=r(42748),u=r(24134),m=r(95635),g=r(28027),x=r(60335),h=r(14595),p=r(56800),f=r.n(p),j=r(92110);let v=e=>{let{tooltipProps:t,children:r}=e;return(null==t?void 0:t.title)?(0,a.jsx)(l.Z,{...t,children:r}):r},b=e=>{let{children:t,option:r}=e;return r.href?(0,a.jsx)(s.Z,{component:i.default,href:r.href,...r.linkProps,children:t}):(0,a.jsx)(a.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:r,iconClassName:i,options:l,leftAlignMenu:s,iconButtonProps:p}=e,[C,y]=(0,n.useState)(!1),N=(0,n.useRef)(null),{settings:Z}=(0,j.r)(),k=e=>{N.current&&N.current.contains(e.target)||y(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{tooltipProps:t,children:(0,a.jsx)(x.Z,{ref:N,size:"small",onClick:()=>{y(e=>!e)},...p,children:"string"==typeof r?(0,a.jsx)("i",{className:f()(r,i)}):r||(0,a.jsx)("i",{className:f()("ri-more-2-line",i)})})}),(0,a.jsx)(o.Z,{open:C,anchorEl:N.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,a.jsx)(m.Z,{...t,children:(0,a.jsx)(g.Z,{className:"bordered"===Z.skin?"border shadow-none":"shadow-lg",children:(0,a.jsx)(u.d,{onClickAway:k,children:(0,a.jsx)(d.Z,{autoFocusItem:C,children:l.map((e,t)=>"string"==typeof e?(0,a.jsx)(c.Z,{onClick:k,children:e},t):"divider"in e?e.divider&&(0,a.jsx)(h.Z,{...e.dividerProps},t):(0,a.jsx)(c.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{k(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,a.jsxs)(b,{option:e,children:[("string"==typeof e.icon?(0,a.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},44156:function(e,t,r){"use strict";r.d(t,{J:function(){return c},SettingsProvider:function(){return d}});var a=r(57437),n=r(2265),i=r(36887),l=r(60625),s=r(97271);let o=(e,t)=>{let[r,a]=(0,s.Z)(e);return[(0,n.useMemo)(()=>r?JSON.parse(r):t,[r]),e=>{a(JSON.stringify(e))}]},c=(0,n.createContext)(null),d=e=>{let t={mode:i.Z.mode,skin:i.Z.skin,semiDark:i.Z.semiDark,layout:i.Z.layout,navbarContentWidth:i.Z.navbar.contentWidth,contentWidth:i.Z.contentWidth,footerContentWidth:i.Z.footer.contentWidth,primaryColor:l.Z[0].main},r={...t,mode:e.mode||i.Z.mode},[s,d]=o(i.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:r),[u,m]=(0,n.useState)("{}"!==JSON.stringify(s)?s:r),g=(e,t)=>{let{updateCookie:r=!0}=t||{};m(t=>{let a={...t,...e};return r&&d(a),a})},x=(0,n.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(u),[u]);return(0,a.jsx)(c.Provider,{value:{settings:u,updateSettings:g,isSettingsChanged:x,resetSettings:()=>{g(t)},updatePageSettings:e=>(g(e,{updateCookie:!1}),()=>g(s,{updateCookie:!1}))},children:e.children})}},92110:function(e,t,r){"use strict";r.d(t,{r:function(){return i}});var a=r(2265),n=r(44156);let i=()=>{let e=(0,a.useContext)(n.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},77405:function(e,t,r){"use strict";r.d(t,{Pg:function(){return s},c7:function(){return n},sE:function(){return l},uH:function(){return a},zh:function(){return i}});let a={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},n={pending:"warning",completed:"success",accepted:"info",rejected:"error"},i={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},l={paid:"secondary","partially paid":"info",rejected:"error",unpaid:"primary",pending:"warning"},s={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},14996:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});let a={defaultLocale:"en",locales:["en","fr","ar"],langDirection:{en:"ltr",fr:"ltr",ar:"rtl"}}},60625:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},36887:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/user/list",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},73317:function(e,t,r){"use strict";r.d(t,{Q:function(){return a}});let a=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},63920:function(e,t,r){"use strict";r.d(t,{U:function(){return l}});var a=r(14996);let n=(e,t)=>e.startsWith(t)?e:"".concat(t).concat(e),i=e=>a.a.locales.every(t=>!(e.startsWith("/".concat(t,"/"))||e==="/".concat(t))),l=(e,t)=>{if(!e||!t)throw Error("URL or Language Code can't be empty");return i(e)?"/".concat(t).concat(n(e,"/")):e}},10909:function(e,t,r){"use strict";r.d(t,{default:function(){return O}});var a=r(57437),n=r(33037),i=r(2265),l=r(87138),s=r(16463),o=r(76520),c=r(55205),d=r(15667),u=r(83719),m=r(57683),g=r(60335),x=r(48965),h=r(28549),p=r(67351),f=r(19004),j=r(11656),v=r(67838),b=r(56800),C=r.n(b),y=r(13541),N=r(54175),Z=r(33514);r(81128);var k=r(49758),w=r(77405);r(73317);var S=r(63920),P=r(18156),_=r.n(P),F=r(43808),R=r(44514),D=r(96303);r(1552);var E=r(95412);let I=(e,t,r,a)=>{let n=(0,y.O4)(e.getValue(t),r);return a({itemRank:n}),n.passed},W=e=>{let{value:t,onChange:r,debounce:n=500,...l}=e,[s,o]=(0,i.useState)(t);return(0,i.useEffect)(()=>{o(t)},[t]),(0,i.useEffect)(()=>{let e=setTimeout(()=>{r(s)},n);return()=>clearTimeout(e)},[s]),(0,a.jsx)(x.Z,{...l,value:s,onChange:e=>o(e.target.value),size:"small"})},A=(0,N.Cl)(),z=[{label:"Quotation Number",key:"quotation_number"},{label:"UserName",key:"name"},{label:"Status",key:"status"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}];var J=()=>{var e;let{data:t}=(0,F.kJ)(R.kQ),{data:r}=(0,F.kJ)(R.KH),[n,x]=(0,i.useState)(""),[b,y]=(0,i.useState)({}),[k,P]=(0,i.useState)(t.quotations),[J,M]=(0,i.useState)(k),[O,U]=(0,i.useState)(""),{lang:q}=(0,s.useParams)(),L=J.map(e=>({...e,name:e.user.name,status:e.status,created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()})),B=(0,i.useMemo)(()=>[A.accessor("quotation_number",{header:"Quotation Number",cell:e=>{let{row:t}=e;return(0,a.jsx)(u.Z,{component:l.default,href:(0,S.U)("/quotation/preview".concat(t.original.quotation_number),q),color:"primary",children:"".concat(t.original.quotation_number)})}}),A.accessor("user.name",{header:"Client",cell:e=>{let{row:t}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(D.Z,{src:t.original.user.profile_picture_url,width:"100px",height:"100px"}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)(u.Z,{className:"font-medium",color:"text.primary",children:t.original.user.name})})]})}}),A.accessor("dealer_remark",{header:"Dealer Remark",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)(u.Z,{className:"font-medium",color:"text.primary",children:t.original.dealer_remark})})})}}),A.accessor("total_amount",{header:"Total",cell:e=>{let{row:t}=e;return(0,a.jsx)(u.Z,{children:"".concat(null!==t.original.total_amount?t.original.total_amount:"-")})}}),A.accessor("created_at",{header:"Date",cell:e=>{let{row:t}=e;return(0,a.jsx)(u.Z,{children:t.original.created_at.substring(0,10)})}}),A.accessor("status",{header:"Status",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)(m.Z,{label:t.original.status,color:w.c7[t.original.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})})})}}),A.accessor("action",{header:"Action",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(g.Z,{children:(0,a.jsx)(l.default,{href:(0,S.U)("/quotations/preview/".concat(t.original.id),q),className:"flex",children:(0,a.jsx)("i",{className:"ri-eye-line text-textSecondary"})})})})},enableSorting:!1})],[k,J]),Q=(0,Z.b7)({data:J,columns:B,filterFns:{fuzzy:I},state:{rowSelection:b,globalFilter:O},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:I,onRowSelectionChange:y,getCoreRowModel:(0,N.sC)(),onGlobalFilterChange:U,getFilteredRowModel:(0,N.vL)(),getSortedRowModel:(0,N.tj)(),getPaginationRowModel:(0,N.G_)(),getFacetedRowModel:(0,N.o6)(),getFacetedUniqueValues:(0,N.JG)(),getFacetedMinMaxValues:(0,N.HO)()});return(0,i.useEffect)(()=>{M(null==k?void 0:k.filter(e=>{var t;return!n||(null==e?void 0:null===(t=e.status)||void 0===t?void 0:t.toLowerCase().replace(/\s+/g,"-"))===n}))},[n,k,M]),(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(c.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:[(0,a.jsx)(W,{value:null!=O?O:"",onChange:e=>U(String(e)),placeholder:"Search Quotation",className:"max-sm:is-full min-is-[200px]"}),(0,a.jsxs)(h.Z,{fullWidth:!0,size:"small",className:"min-is-[175px]",children:[(0,a.jsx)(p.Z,{id:"status-select",children:"Quotation Status"}),(0,a.jsxs)(f.Z,{fullWidth:!0,id:"select-status",value:n,onChange:e=>x(e.target.value),label:"Invoice Status",labelId:"status-select",children:[(0,a.jsx)(j.Z,{value:"",children:"none"}),null===(e=r.quotation_status)||void 0===e?void 0:e.map(e=>(0,a.jsx)(j.Z,{value:e.name,children:e.name},e.id))]})]})]}),(0,a.jsx)(d.Z,{color:"secondary",variant:"outlined",startIcon:(0,a.jsx)("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:(0,a.jsx)(E.CSVLink,{className:"exportBtn",data:L,headers:z,filename:"all-quotations-".concat(new Date().toISOString(),".csv"),children:"Export"})})]}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:_().table,children:[(0,a.jsx)("thead",{children:Q.getHeaderGroups().map(e=>(0,a.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,a.jsx)("th",{children:e.isPlaceholder?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:C()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,Z.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,a.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,a.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===Q.getFilteredRowModel().rows.length?(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:Q.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,a.jsx)("tbody",{children:Q.getRowModel().rows.slice(0,Q.getState().pagination.pageSize).map(e=>(0,a.jsx)("tr",{className:C()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,a.jsx)("td",{children:(0,Z.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,a.jsx)(v.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:Q.getFilteredRowModel().rows.length,rowsPerPage:Q.getState().pagination.pageSize,page:Q.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{Q.setPageIndex(t)},onRowsPerPageChange:e=>Q.setPageSize(Number(e.target.value))})]})},M=e=>{let{count:t,title:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(o.Z,{children:(0,a.jsxs)(c.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[(0,a.jsx)(u.Z,{color:"text.primary",variant:"h3",children:t}),(0,a.jsx)("div",{className:"flex items-center gap-2 flex-wrap",children:(0,a.jsx)(u.Z,{variant:"h5",color:"".concat("Pending"===r?"orange":"User"===r?"primary":"Reject"===r?"error":"Complete"===r?"green":"grey"),children:r})})]}),(0,a.jsx)(k.default,{skin:"light",variant:"rounded",size:42,children:(0,a.jsx)("i",{class:"".concat("Pending"===r?"ri-pass-pending-fill":"User"===r?"ri-user-add-line":"Reject"===r?"ri-user-unfollow-fill ":"Complete"===r?"ri-check-double-fill":"grey")})})]})})})},O=()=>{let{data:e}=(0,F.kJ)(R.aN),{data:t}=(0,F.kJ)(R.$X);return(0,a.jsxs)(n.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(M,{count:t.users_aggregate.aggregate.count,title:"User"})}),(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(M,{count:e.pendingQuotation.aggregate.count,title:"Pending"})}),(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(M,{count:e.rejectedQuotation.aggregate.count,title:"Reject"})}),(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(M,{count:e.completedQuotation.aggregate.count,title:"Complete"})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,children:(0,a.jsx)(J,{})})]})}},18156:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[956,1441,9584,7138,9855,8329,7660,7800,8965,6715,6805,6101,7212,5313,8325,481,8674,4175,7683,779,7838,3410,4514,1552,2971,7023,1744],function(){return e(e.s=22349)}),_N_E=e.O()}]);