(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4959],{40350:function(e,t,r){Promise.resolve().then(r.bind(r,34242))},49758:function(e,t,r){"use strict";r.r(t);var a=r(57437),n=r(2265),l=r(96303),i=r(48024),s=r(22305);let o=(0,i.ZP)(l.Z)(e=>{let{skin:t,color:r,size:a,theme:n}=e;return{...r&&"light"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-lightOpacity)"),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"light-static"===t&&{backgroundColor:(0,s.$n)(n.palette[r].main,.84),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"filled"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-main)"),color:"var(--mui-palette-".concat(r,"-contrastText)")},...a&&{height:a,width:a}}}),c=(0,n.forwardRef)((e,t)=>{let{color:r,skin:n="filled",...l}=e;return(0,a.jsx)(o,{color:r,skin:n,ref:t,...l})});t.default=c},81128:function(e,t,r){"use strict";r.r(t);var a=r(57437),n=r(2265),l=r(87138),i=r(31655),s=r(91326),o=r(27316),c=r(11656),d=r(42748),u=r(24134),m=r(95635),g=r(28027),x=r(60335),p=r(14595),h=r(56800),f=r.n(h),j=r(92110);let v=e=>{let{tooltipProps:t,children:r}=e;return(null==t?void 0:t.title)?(0,a.jsx)(i.Z,{...t,children:r}):r},b=e=>{let{children:t,option:r}=e;return r.href?(0,a.jsx)(s.Z,{component:l.default,href:r.href,...r.linkProps,children:t}):(0,a.jsx)(a.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:r,iconClassName:l,options:i,leftAlignMenu:s,iconButtonProps:h}=e,[y,C]=(0,n.useState)(!1),N=(0,n.useRef)(null),{settings:k}=(0,j.r)(),Z=e=>{N.current&&N.current.contains(e.target)||C(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{tooltipProps:t,children:(0,a.jsx)(x.Z,{ref:N,size:"small",onClick:()=>{C(e=>!e)},...h,children:"string"==typeof r?(0,a.jsx)("i",{className:f()(r,l)}):r||(0,a.jsx)("i",{className:f()("ri-more-2-line",l)})})}),(0,a.jsx)(o.Z,{open:y,anchorEl:N.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,a.jsx)(m.Z,{...t,children:(0,a.jsx)(g.Z,{className:"bordered"===k.skin?"border shadow-none":"shadow-lg",children:(0,a.jsx)(u.d,{onClickAway:Z,children:(0,a.jsx)(d.Z,{autoFocusItem:y,children:i.map((e,t)=>"string"==typeof e?(0,a.jsx)(c.Z,{onClick:Z,children:e},t):"divider"in e?e.divider&&(0,a.jsx)(p.Z,{...e.dividerProps},t):(0,a.jsx)(c.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{Z(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,a.jsxs)(b,{option:e,children:[("string"==typeof e.icon?(0,a.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},44156:function(e,t,r){"use strict";r.d(t,{J:function(){return c},SettingsProvider:function(){return d}});var a=r(57437),n=r(2265),l=r(36887),i=r(60625),s=r(97271);let o=(e,t)=>{let[r,a]=(0,s.Z)(e);return[(0,n.useMemo)(()=>r?JSON.parse(r):t,[r]),e=>{a(JSON.stringify(e))}]},c=(0,n.createContext)(null),d=e=>{let t={mode:l.Z.mode,skin:l.Z.skin,semiDark:l.Z.semiDark,layout:l.Z.layout,navbarContentWidth:l.Z.navbar.contentWidth,contentWidth:l.Z.contentWidth,footerContentWidth:l.Z.footer.contentWidth,primaryColor:i.Z[0].main},r={...t,mode:e.mode||l.Z.mode},[s,d]=o(l.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:r),[u,m]=(0,n.useState)("{}"!==JSON.stringify(s)?s:r),g=(e,t)=>{let{updateCookie:r=!0}=t||{};m(t=>{let a={...t,...e};return r&&d(a),a})},x=(0,n.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(u),[u]);return(0,a.jsx)(c.Provider,{value:{settings:u,updateSettings:g,isSettingsChanged:x,resetSettings:()=>{g(t)},updatePageSettings:e=>(g(e,{updateCookie:!1}),()=>g(s,{updateCookie:!1}))},children:e.children})}},92110:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var a=r(2265),n=r(44156);let l=()=>{let e=(0,a.useContext)(n.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},82026:function(e,t,r){"use strict";r(57437),r(56800),r(49758),r(44514)},77405:function(e,t,r){"use strict";r.d(t,{Pg:function(){return s},c7:function(){return n},sE:function(){return i},uH:function(){return a},zh:function(){return l}});let a={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},n={pending:"warning",completed:"success",accepted:"info",rejected:"error"},l={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},i={paid:"primary","partially paid":"info",completed:"success",unpaid:"error",pending:"warning"},s={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},14996:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});let a={defaultLocale:"en",locales:["en","fr","ar"],langDirection:{en:"ltr",fr:"ltr",ar:"rtl"}}},60625:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},36887:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/user/list",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},73317:function(e,t,r){"use strict";r.d(t,{Q:function(){return a}});let a=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},63920:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var a=r(14996);let n=(e,t)=>e.startsWith(t)?e:"".concat(t).concat(e),l=e=>a.a.locales.every(t=>!(e.startsWith("/".concat(t,"/"))||e==="/".concat(t))),i=(e,t)=>{if(!e||!t)throw Error("URL or Language Code can't be empty");return l(e)?"/".concat(t).concat(n(e,"/")):e}},34242:function(e,t,r){"use strict";r.d(t,{default:function(){return M}});var a=r(57437),n=r(33037),l=r(2265),i=r(87138),s=r(16463),o=r(76520),c=r(55205),d=r(75519),u=r(83719),m=r(57683),g=r(60335),x=r(48965),p=r(28549),h=r(67351),f=r(19004),j=r(11656),v=r(67838),b=r(56800),y=r.n(b),C=r(13541),N=r(54175),k=r(33514);r(81128);var Z=r(49758),S=r(77405);r(73317);var w=r(63920),P=r(18156),_=r.n(P),F=r(43808),O=r(44514),D=r(96303);r(1552);var A=r(95412);let E=(e,t,r,a)=>{let n=(0,C.O4)(e.getValue(t),r);return a({itemRank:n}),n.passed},I=e=>{let{value:t,onChange:r,debounce:n=500,...i}=e,[s,o]=(0,l.useState)(t);return(0,l.useEffect)(()=>{o(t)},[t]),(0,l.useEffect)(()=>{let e=setTimeout(()=>{r(s)},n);return()=>clearTimeout(e)},[s]),(0,a.jsx)(x.Z,{...i,value:s,onChange:e=>o(e.target.value),size:"small"})},R=(0,N.Cl)(),W=[{label:"Order Number",key:"order_number"},{label:"Username",key:"name"},{label:"Receiver Name",key:"receiver_name"},{label:"Product Name",key:"title"},{label:"Product Brand",key:"title"},{label:"Product Category",key:"title"},{label:"Price",key:"price"},{label:"Quantity",key:"quantity"},{label:"SubTotal Amount",key:"items_total"},{label:"Total Amount",key:"total"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}];var z=()=>{let{data:e}=(0,F.kJ)(O.Pg),{data:t}=(0,F.kJ)(O.DF),[r,n]=(0,l.useState)(""),[x,b]=(0,l.useState)({}),[C,Z]=(0,l.useState)(e.orders),[P,z]=(0,l.useState)(C),[J,M]=(0,l.useState)(""),{lang:L}=(0,s.useParams)(),B=P.map(e=>{var t,r,a,n,l;return{...e,order_number:e.order_number,name:e.user.name,price:null===(t=e.order_items)||void 0===t?void 0:t.map(e=>e.product.price),quantity:null===(r=e.order_items)||void 0===r?void 0:r.map(e=>e.quantity),title:null===(a=e.order_items)||void 0===a?void 0:a.map(e=>e.product.title).join("  ,  "),title:null===(n=e.order_items)||void 0===n?void 0:n.map(e=>e.product.brand.title).join("  ,  "),title:null===(l=e.order_items)||void 0===l?void 0:l.map(e=>e.product.product_category.title).join("  ,  "),created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()}}),T=(0,l.useMemo)(()=>[R.accessor("id",{header:"Order Number",cell:e=>{let{row:t}=e;return(0,a.jsx)(u.Z,{component:i.default,href:(0,w.U)("/orders/details/".concat(t.original.id),L),color:"primary",children:"".concat(t.original.order_number)})}}),R.accessor("user.name ",{header:"Client",cell:e=>{let{row:t}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(D.Z,{src:t.original.user.profile_picture_url,width:"100px",height:"100px"}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)(u.Z,{className:"font-medium",color:"text.primary",children:t.original.user.name})})]})}}),R.accessor("receiver_name ",{header:"Receiver Name",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)(u.Z,{className:"font-medium",color:"text.primary",children:t.original.receiver_name})})})}}),R.accessor("total",{header:"Total",cell:e=>{let{row:t}=e;return(0,a.jsx)(u.Z,{children:"".concat(null!==t.original.total?t.original.total:"-")})}}),R.accessor("created_at",{header:"Date",cell:e=>{let{row:t}=e;return(0,a.jsx)(u.Z,{children:new Date(t.original.created_at).toLocaleString()})}}),R.accessor("status",{header:"Status",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)(m.Z,{label:t.original.status,color:S.zh[t.original.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})})})}}),R.accessor("action",{header:"Action",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(g.Z,{children:(0,a.jsx)(i.default,{href:(0,w.U)("/orders/details/".concat(t.original.id),L),className:"flex",children:(0,a.jsx)("i",{className:"ri-eye-line text-textSecondary"})})})})},enableSorting:!1})],[C,P]),U=(0,k.b7)({data:P,columns:T,filterFns:{fuzzy:E},state:{rowSelection:x,globalFilter:J},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:E,onRowSelectionChange:b,getCoreRowModel:(0,N.sC)(),onGlobalFilterChange:M,getFilteredRowModel:(0,N.vL)(),getSortedRowModel:(0,N.tj)(),getPaginationRowModel:(0,N.G_)(),getFacetedRowModel:(0,N.o6)(),getFacetedUniqueValues:(0,N.JG)(),getFacetedMinMaxValues:(0,N.HO)()});return(0,l.useEffect)(()=>{z(null==C?void 0:C.filter(e=>!r||e.status.toLowerCase().replace(/\s+/g,"-")===r))},[r,C,z]),(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(c.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:[(0,a.jsx)(I,{value:null!=J?J:"",onChange:e=>M(String(e)),placeholder:"Search Order",className:"max-sm:is-full min-is-[200px]"}),(0,a.jsxs)(p.Z,{fullWidth:!0,size:"small",className:"min-is-[175px]",children:[(0,a.jsx)(h.Z,{id:"status-select",children:"Order Status"}),(0,a.jsxs)(f.Z,{fullWidth:!0,id:"select-status",value:r,onChange:e=>n(e.target.value),label:"Invoice Status",labelId:"status-select",children:[(0,a.jsx)(j.Z,{value:"",children:"none"}),t.order_status.map(e=>(0,a.jsx)(j.Z,{value:e.name,children:e.name},e.id))]})]})]}),(0,a.jsx)(d.Z,{color:"secondary",variant:"outlined",startIcon:(0,a.jsx)("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:(0,a.jsx)(A.CSVLink,{className:"exportBtn",data:B,headers:W,filename:"all-orders-".concat(new Date().toISOString(),".csv"),children:"Export"})})]}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:_().table,children:[(0,a.jsx)("thead",{children:U.getHeaderGroups().map(e=>(0,a.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,a.jsx)("th",{children:e.isPlaceholder?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:y()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,k.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,a.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,a.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===U.getFilteredRowModel().rows.length?(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:U.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,a.jsx)("tbody",{children:U.getRowModel().rows.slice(0,U.getState().pagination.pageSize).map(e=>(0,a.jsx)("tr",{className:y()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,a.jsx)("td",{children:(0,k.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,a.jsx)(v.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:U.getFilteredRowModel().rows.length,rowsPerPage:U.getState().pagination.pageSize,page:U.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{U.setPageIndex(t)},onRowsPerPageChange:e=>U.setPageSize(Number(e.target.value))})]})};r(82026);var J=e=>{let{count:t,title:r,color:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,{children:(0,a.jsxs)(c.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[(0,a.jsx)(u.Z,{color:"text.primary",variant:"h3",children:t}),(0,a.jsx)("div",{className:"flex items-center gap-2 flex-wrap",children:(0,a.jsx)(u.Z,{variant:"h5",color:"".concat("Active"===r?"primary":"Completed"===r?"green":"Delivering"===r?"orange":"error"),children:r})})]}),(0,a.jsx)(Z.default,{skin:"light",variant:"rounded",size:42})]})})})},M=()=>{let{data:e}=(0,F.kJ)(O.Jv);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(J,{count:e.activeOrder.aggregate.count,title:"Active"})}),(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(J,{count:e.completeOrder.aggregate.count,title:"Completed",color:"success"})}),(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(J,{count:e.refundedOrder.aggregate.count,title:"Delivering"})}),(0,a.jsx)(n.ZP,{item:!0,md:3,xs:12,sm:6,children:(0,a.jsx)(J,{count:e.canceledOrder.aggregate.count,title:"Canceled"})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,children:(0,a.jsx)(z,{})})]})})}},18156:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[956,1441,3733,7138,9855,8329,7660,7800,8965,6715,6805,6101,7212,5313,8325,481,8674,4175,7683,779,7838,8274,4514,1552,2971,7023,1744],function(){return e(e.s=40350)}),_N_E=e.O()}]);