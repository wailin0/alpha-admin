(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8473],{94124:function(e,t,r){Promise.resolve().then(r.bind(r,38394))},26175:function(e,t,r){"use strict";var a=r(78845),n=r(99370),i=r(31229),l=r(27494),s=r(92728),o=r(66030),c=r(28464),d=r(13935),u=r(79161),m=r(59533);let h=["className","raised"],x=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},u.y,t)},g=(0,o.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),p=i.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=r,o=(0,n.Z)(r,h),d=(0,a.Z)({},r,{raised:s}),u=x(d);return(0,m.jsx)(g,(0,a.Z)({className:(0,l.Z)(u.root,i),elevation:s?8:void 0,ref:t,ownerState:d},o))});t.Z=p},79161:function(e,t,r){"use strict";r.d(t,{y:function(){return i}});var a=r(47678),n=r(11016);function i(e){return(0,n.ZP)("MuiCard",e)}let l=(0,a.Z)("MuiCard",["root"]);t.Z=l},79505:function(e,t,r){"use strict";r.r(t);var a=r(59533),n=r(31229),i=r(96353),l=r(75510),s=r(51115),o=r(88478),c=r(30034),d=r(13638),u=r(62168),m=r(49744),h=r(13935),x=r(89749),g=r(45336),p=r(72860),f=r.n(p),j=r(59787);let v=e=>{let{tooltipProps:t,children:r}=e;return(null==t?void 0:t.title)?(0,a.jsx)(l.Z,{...t,children:r}):r},C=e=>{let{children:t,option:r}=e;return r.href?(0,a.jsx)(s.Z,{component:i.default,href:r.href,...r.linkProps,children:t}):(0,a.jsx)(a.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:r,iconClassName:i,options:l,leftAlignMenu:s,iconButtonProps:p}=e,[Z,w]=(0,n.useState)(!1),S=(0,n.useRef)(null),{settings:N}=(0,j.r)(),y=e=>{S.current&&S.current.contains(e.target)||w(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{tooltipProps:t,children:(0,a.jsx)(x.Z,{ref:S,size:"small",onClick:()=>{w(e=>!e)},...p,children:"string"==typeof r?(0,a.jsx)("i",{className:f()(r,i)}):r||(0,a.jsx)("i",{className:f()("ri-more-2-line",i)})})}),(0,a.jsx)(o.Z,{open:Z,anchorEl:S.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,a.jsx)(m.Z,{...t,children:(0,a.jsx)(h.Z,{className:"bordered"===N.skin?"border shadow-none":"shadow-lg",children:(0,a.jsx)(u.d,{onClickAway:y,children:(0,a.jsx)(d.Z,{autoFocusItem:Z,children:l.map((e,t)=>"string"==typeof e?(0,a.jsx)(c.Z,{onClick:y,children:e},t):"divider"in e?e.divider&&(0,a.jsx)(g.Z,{...e.dividerProps},t):(0,a.jsx)(c.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{y(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,a.jsxs)(C,{option:e,children:[("string"==typeof e.icon?(0,a.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},64825:function(e,t,r){"use strict";r.d(t,{J:function(){return c},SettingsProvider:function(){return d}});var a=r(59533),n=r(31229),i=r(23310),l=r(13231),s=r(75443);let o=(e,t)=>{let[r,a]=(0,s.Z)(e);return[(0,n.useMemo)(()=>r?JSON.parse(r):t,[r]),e=>{a(JSON.stringify(e))}]},c=(0,n.createContext)(null),d=e=>{let t={mode:i.Z.mode,skin:i.Z.skin,semiDark:i.Z.semiDark,layout:i.Z.layout,navbarContentWidth:i.Z.navbar.contentWidth,contentWidth:i.Z.contentWidth,footerContentWidth:i.Z.footer.contentWidth,primaryColor:l.Z[0].main},r={...t,mode:e.mode||i.Z.mode},[s,d]=o(i.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:r),[u,m]=(0,n.useState)("{}"!==JSON.stringify(s)?s:r),h=(e,t)=>{let{updateCookie:r=!0}=t||{};m(t=>{let a={...t,...e};return r&&d(a),a})},x=(0,n.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(u),[u]);return(0,a.jsx)(c.Provider,{value:{settings:u,updateSettings:h,isSettingsChanged:x,resetSettings:()=>{h(t)},updatePageSettings:e=>(h(e,{updateCookie:!1}),()=>h(s,{updateCookie:!1}))},children:e.children})}},59787:function(e,t,r){"use strict";r.d(t,{r:function(){return i}});var a=r(31229),n=r(64825);let i=()=>{let e=(0,a.useContext)(n.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},12895:function(e,t,r){"use strict";r.d(t,{ApolloWrapper:function(){return h},q:function(){return m}});var a=r(59533),n=r(81866),i=r(63876),l=r(49464),s=r(50069),o=r(31229);let c=(0,o.createContext)();function d(){let e=new i.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),t=(0,s.v)(async(e,t)=>{let{headers:r}=t;try{return{headers:{...r,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:r}}});return new l.fe({cache:new l.h4,link:u.concat(t).concat(e)})}let u=(0,n.q)(e=>{let{graphQLErrors:t,networkError:r}=e;t&&(console.log("graphql",t),t.forEach(e=>{let{extensions:t}=e;("invalid-headers"===t.code||"invalid-jwt"===t.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),r&&(console.log("[Network error]: ".concat(r)),alert("network connection problem"))}),m=()=>(0,o.useContext)(c);function h(e){let{children:t}=e,[r,n]=(0,o.useState)(null),[i,s]=(0,o.useState)(!1);return(0,a.jsx)(l.e$,{makeClient:d,children:(0,a.jsx)(c.Provider,{value:{globalMsg:r,setGlobalMsg:n,loading:i,setLoading:s},children:t})})}},76422:function(e,t,r){"use strict";var a=r(59533);r(31229);var n=r(12173),i=r(12895);t.Z=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,i.q)();return(0,a.jsx)("div",{children:(0,a.jsx)(n.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},13231:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/dashboards/crm",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},38394:function(e,t,r){"use strict";r.d(t,{default:function(){return A}});var a=r(59533),n=r(31229),i=r(26175),l=r(47867),s=r(89749),o=r(23524),c=r(66431),d=r(28095),u=r(72860),m=r.n(u),h=r(19880),x=r(65841),g=r(51480);r(79505);var p=r(67875),f=r.n(p),j=r(17848),v=r(76399),C=r(31029),Z=r(29349),w=r(76422),S=r(12895),N=r(5870),y=r(45336),b=r(20526),k=e=>{let{setGlobalMsg:t}=(0,S.q)(),{open:r,handleClose:i,newData:o,setData:u}=e,[m]=(0,v.D)(Z.SB),[h,x]=(0,n.useState)("");(0,n.useRef)(null);let{control:g,reset:p,handleSubmit:f,formState:{errors:j}}=(0,b.cI)({defaultValues:{title:""}}),C=async e=>{u([...o,(await m({variables:{title:e.title}})).data.insert_news_categories_one]),k(),t("➕ Added New Category")},k=()=>{i(),p({title:""}),x("")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(N.ZP,{open:r,anchor:"right",variant:"temporary",onClose:k,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,a.jsx)(d.Z,{variant:"h5",children:"Add Category"}),(0,a.jsx)(s.Z,{size:"small",onClick:k,children:(0,a.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,a.jsx)(y.Z,{}),(0,a.jsx)("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:f(e=>C(e)),className:"flex flex-col gap-5",children:[(0,a.jsx)(b.Qr,{name:"title",control:g,rules:{required:!0},render:e=>{let{field:t}=e;return(0,a.jsx)(c.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...j.title&&{error:!0,helperText:"This field is required."}})}}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(l.Z,{variant:"contained",type:"submit",children:"Add"}),(0,a.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:k,children:"Discard"})]})]})})]}),(0,a.jsx)(w.Z,{})]})},P=e=>{let{setGlobalMsg:t}=(0,S.q)(),{open:r,handleClose:i,newData:o,setData:u}=e,[m]=(0,v.D)(Z.J2),[h,x]=(0,n.useState)("");(0,n.useRef)(null);let{control:g,reset:p,handleSubmit:f,formState:{errors:j}}=(0,b.cI)({defaultValues:{title:""}}),C=async e=>{let r=await m({variables:{id:o.id,title:e.title}});u(e=>e.map(e=>e.id===(null==o?void 0:o.id)?{...e,...r.data.update_news_categories_by_pk}:e)),k(),t("✏️ Category Data has been updated")};console.log("new data ",o),(0,n.useEffect)(()=>{o&&p({title:o.title})},[o]);let k=()=>{i(),p({title:""}),x("")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(N.ZP,{open:r,anchor:"right",variant:"temporary",onClose:k,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,a.jsx)(d.Z,{variant:"h5",children:"Edit Category"}),(0,a.jsx)(s.Z,{size:"small",onClick:k,children:(0,a.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,a.jsx)(y.Z,{}),(0,a.jsx)("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:f(e=>C(e)),className:"flex flex-col gap-5",children:[(0,a.jsx)(b.Qr,{name:"title",control:g,rules:{required:!0},render:e=>{let{field:t}=e;return(0,a.jsx)(c.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...j.title&&{error:!0,helperText:"This field is required."}})}}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(l.Z,{variant:"contained",type:"submit",children:"Edit"}),(0,a.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:k,children:"Discard"})]})]})})]}),(0,a.jsx)(w.Z,{})]})},F=r(66967),D=r(83338);let M=(e,t,r,a)=>{let n=(0,h.O4)(e.getValue(t),r);return a({itemRank:n}),n.passed},_=e=>{let{value:t,onChange:r,debounce:i=500,...l}=e,[s,o]=(0,n.useState)(t);return(0,n.useEffect)(()=>{o(t)},[t]),(0,n.useEffect)(()=>{let e=setTimeout(()=>{r(s)},i);return()=>clearTimeout(e)},[s]),(0,a.jsx)(c.Z,{...l,value:s,onChange:e=>o(e.target.value),size:"small"})},R=(0,x.Cl)();var A=()=>{let{setGlobalMsg:e}=(0,S.q)(),{data:t}=(0,j.kJ)(C.nX),[r]=(0,v.D)(Z.oe),[c,u]=(0,n.useState)(!1),[h,p]=(0,n.useState)({}),[N,y]=(0,n.useState)(t.news_categories),[b,A]=(0,n.useState)(""),[E,I]=(0,n.useState)(!1),[q,z]=(0,n.useState)(!1),[O,W]=(0,n.useState)(),J=(e,t,r)=>({children:e,color:t,variant:r}),T=(0,n.useMemo)(()=>[R.accessor("title",{header:"Categories",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsx)(d.Z,{className:"font-medium",color:"text.primary",children:t.original.title}),(0,a.jsx)(d.Z,{variant:"body2",children:t.original.description})]})})}}),R.accessor("news_aggregate.aggregate.count",{header:"Total Post",cell:e=>{var t,r;let{row:n}=e;return(0,a.jsx)(d.Z,{children:null===(r=n.original.news_aggregate)||void 0===r?void 0:null===(t=r.aggregate)||void 0===t?void 0:t.count.toLocaleString()})}}),R.accessor("created_at",{header:"Date",cell:e=>{let{row:t}=e;return(0,a.jsx)(d.Z,{children:t.original.created_at.substring(0,10)})}}),R.accessor("actions",{header:"Actions",cell:e=>{let{row:t}=e;return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(s.Z,{size:"small",onClick:()=>{z(!q),W(t.original)},children:(0,a.jsx)("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),(0,a.jsx)(F.default,{element:l.Z,elementProps:J((0,a.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:D.Z,dialogProps:{type:"deleteNewCategory"},dataId:t.original.id,setData:y,data:N})]})},enableSorting:!1})],[N]),B=(0,g.b7)({data:N,columns:T,filterFns:{fuzzy:M},state:{rowSelection:h,globalFilter:b},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:M,onRowSelectionChange:p,getCoreRowModel:(0,x.sC)(),onGlobalFilterChange:A,getFilteredRowModel:(0,x.vL)(),getSortedRowModel:(0,x.tj)(),getPaginationRowModel:(0,x.G_)(),getFacetedRowModel:(0,x.o6)(),getFacetedUniqueValues:(0,x.JG)(),getFacetedMinMaxValues:(0,x.HO)()});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[(0,a.jsx)(_,{value:null!=b?b:"",onChange:e=>A(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,a.jsx)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:(0,a.jsx)(l.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>u(!c),startIcon:(0,a.jsx)("i",{className:"ri-add-line"}),children:"Add Category"})})]}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:f().table,children:[(0,a.jsx)("thead",{children:B.getHeaderGroups().map(e=>(0,a.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,a.jsx)("th",{children:e.isPlaceholder?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,g.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,a.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,a.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===B.getFilteredRowModel().rows.length?(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:B.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,a.jsx)("tbody",{children:B.getRowModel().rows.slice(0,B.getState().pagination.pageSize).map(e=>(0,a.jsx)("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,a.jsx)("td",{children:(0,g.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,a.jsx)(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:B.getFilteredRowModel().rows.length,rowsPerPage:B.getState().pagination.pageSize,page:B.getState().pagination.pageIndex,onPageChange:(e,t)=>{B.setPageIndex(t)},onRowsPerPageChange:e=>B.setPageSize(Number(e.target.value))})]}),(0,a.jsx)(k,{open:c,newData:N,setData:y,handleClose:()=>u(!c)}),(0,a.jsx)(P,{open:q,newData:O,setData:y,loading:E,setLoading:I,handleClose:()=>z(!q)}),(0,a.jsx)(w.Z,{})]})}}},function(e){e.O(0,[3307,8869,1055,4214,9253,4637,313,6431,7814,9276,9415,7020,2163,1559,7957,5841,7952,2173,285,4076,5870,1325,1029,4240,4170,6842,1744],function(){return e(e.s=94124)}),_N_E=e.O()}]);