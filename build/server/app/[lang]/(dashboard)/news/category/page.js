(()=>{var e={};e.id=8473,e.ids=[8473],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},1809:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d}),a(4325),a(5114),a(32687),a(85133);var s=a(79193),r=a(71854),l=a(33997),i=a.n(l),n=a(73320),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(t,o);let d=["",{children:["[lang]",{children:["(dashboard)",{children:["news",{children:["category",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,4325)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\news\\category\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,5114)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,32687)),"D:\\projects\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\projects\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\news\\category\\page.jsx"],x="/[lang]/(dashboard)/news/category/page",u={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/[lang]/(dashboard)/news/category/page",pathname:"/[lang]/news/category",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},34772:(e,t,a)=>{Promise.resolve().then(a.bind(a,59995))},42453:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var s=a(60170),r=a(63594),l=a(618),i=a(69360),n=a(82029),o=a(6593),d=a(54509),c=a(5773),x=a(50876),u=a(27486);let m=["className","raised"],p=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},x.y,t)},g=(0,o.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),h=l.forwardRef(function(e,t){let a=(0,d.i)({props:e,name:"MuiCard"}),{className:l,raised:n=!1}=a,o=(0,r.Z)(a,m),c=(0,s.Z)({},a,{raised:n}),x=p(c);return(0,u.jsx)(g,(0,s.Z)({className:(0,i.Z)(x.root,l),elevation:n?8:void 0,ref:t,ownerState:c},o))})},50876:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,y:()=>l});var s=a(3546),r=a(82517);function l(e){return(0,r.ZP)("MuiCard",e)}let i=(0,s.Z)("MuiCard",["root"])},48398:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var s=a(27486),r=a(618),l=a(38165),i=a(36370),n=a(29454),o=a(39926),d=a(48152),c=a(64037),x=a(29597),u=a(98108),m=a(5773),p=a(1416),g=a(7556),h=a(19396),j=a.n(h),f=a(63665);let v=e=>{let{tooltipProps:t,children:a}=e;return t?.title?s.jsx(i.Z,{...t,children:a}):a},w=({children:e,option:t})=>t.href?s.jsx(n.Z,{component:l.default,href:t.href,...t.linkProps,children:e}):s.jsx(s.Fragment,{children:e}),b=e=>{let{tooltipProps:t,icon:a,iconClassName:l,options:i,leftAlignMenu:n,iconButtonProps:h}=e,[b,y]=(0,r.useState)(!1),Z=(0,r.useRef)(null),{settings:C}=(0,f.r)(),P=e=>{Z.current&&Z.current.contains(e.target)||y(!1)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(v,{tooltipProps:t,children:s.jsx(p.Z,{ref:Z,size:"small",onClick:()=>{y(e=>!e)},...h,children:"string"==typeof a?s.jsx("i",{className:j()(a,l)}):a||s.jsx("i",{className:j()("ri-more-2-line",l)})})}),s.jsx(o.Z,{open:b,anchorEl:Z.current,placement:n?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>s.jsx(u.Z,{...e,children:s.jsx(m.Z,{className:"bordered"===C.skin?"border shadow-none":"shadow-lg",children:s.jsx(x.d,{onClickAway:P,children:s.jsx(c.Z,{autoFocusItem:b,children:i.map((e,t)=>"string"==typeof e?s.jsx(d.Z,{onClick:P,children:e},t):"divider"in e?e.divider&&s.jsx(g.Z,{...e.dividerProps},t):s.jsx(d.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{P(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,s.jsxs)(w,{option:e,children:[("string"==typeof e.icon?s.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},91347:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(27486);a(618);var r=a(72277),l=a(22405);let i=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,l.q)();return s.jsx("div",{children:s.jsx(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},59995:(e,t,a)=>{"use strict";a.d(t,{default:()=>R});var s=a(27486),r=a(618),l=a(42453),i=a(15532),n=a(1416),o=a(46797),d=a(30965),c=a(30675),x=a(19396),u=a.n(x),m=a(61359),p=a(36514),g=a(57229);a(48398);var h=a(31538),j=a.n(h),f=a(45162),v=a(38860),w=a(25009),b=a(66718),y=a(91347),Z=a(22405),C=a(40136),P=a(7556),N=a(58894);let S=e=>{let{setGlobalMsg:t}=(0,Z.q)(),{open:a,handleClose:l,newData:o,setData:x}=e,[u]=(0,v.D)(b.SB),[m,p]=(0,r.useState)("");(0,r.useRef)(null);let{control:g,reset:h,handleSubmit:j,formState:{errors:f}}=(0,N.cI)({defaultValues:{title:""}}),w=async e=>{x([...o,(await u({variables:{title:e.title}})).data.insert_news_categories_one]),S(),t("➕ Added New Category")},S=()=>{l(),h({title:""}),p("")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(C.ZP,{open:a,anchor:"right",variant:"temporary",onClose:S,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,s.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[s.jsx(c.Z,{variant:"h5",children:"Add Category"}),s.jsx(n.Z,{size:"small",onClick:S,children:s.jsx("i",{className:"ri-close-line text-2xl"})})]}),s.jsx(P.Z,{}),s.jsx("div",{className:"p-5",children:(0,s.jsxs)("form",{onSubmit:j(e=>w(e)),className:"flex flex-col gap-5",children:[s.jsx(N.Qr,{name:"title",control:g,rules:{required:!0},render:({field:e})=>s.jsx(d.Z,{...e,fullWidth:!0,label:"Title",placeholder:"",...f.title&&{error:!0,helperText:"This field is required."}})}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(i.Z,{variant:"contained",type:"submit",children:"Add"}),s.jsx(i.Z,{variant:"outlined",color:"error",type:"reset",onClick:S,children:"Discard"})]})]})})]}),s.jsx(y.Z,{})]})},_=e=>{let{setGlobalMsg:t}=(0,Z.q)(),{open:a,handleClose:l,newData:o,setData:x}=e,[u]=(0,v.D)(b.J2),[m,p]=(0,r.useState)("");(0,r.useRef)(null);let{control:g,reset:h,handleSubmit:j,formState:{errors:f}}=(0,N.cI)({defaultValues:{title:""}}),w=async e=>{let a=await u({variables:{id:o.id,title:e.title}});x(e=>e.map(e=>e.id===o?.id?{...e,...a.data.update_news_categories_by_pk}:e)),S(),t("✏️ Category Data has been updated")};console.log("new data ",o),(0,r.useEffect)(()=>{o&&h({title:o.title})},[o]);let S=()=>{l(),h({title:""}),p("")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(C.ZP,{open:a,anchor:"right",variant:"temporary",onClose:S,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,s.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[s.jsx(c.Z,{variant:"h5",children:"Edit Category"}),s.jsx(n.Z,{size:"small",onClick:S,children:s.jsx("i",{className:"ri-close-line text-2xl"})})]}),s.jsx(P.Z,{}),s.jsx("div",{className:"p-5",children:(0,s.jsxs)("form",{onSubmit:j(e=>w(e)),className:"flex flex-col gap-5",children:[s.jsx(N.Qr,{name:"title",control:g,rules:{required:!0},render:({field:e})=>s.jsx(d.Z,{...e,fullWidth:!0,label:"Title",placeholder:"",...f.title&&{error:!0,helperText:"This field is required."}})}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(i.Z,{variant:"contained",type:"submit",children:"Edit"}),s.jsx(i.Z,{variant:"outlined",color:"error",type:"reset",onClick:S,children:"Discard"})]})]})})]}),s.jsx(y.Z,{})]})};var M=a(36839),D=a(5632);let k=(e,t,a,s)=>{let r=(0,m.O4)(e.getValue(t),a);return s({itemRank:r}),r.passed},q=({value:e,onChange:t,debounce:a=500,...l})=>{let[i,n]=(0,r.useState)(e);return(0,r.useEffect)(()=>{n(e)},[e]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{t(i)},a);return()=>clearTimeout(e)},[i]),s.jsx(d.Z,{...l,value:i,onChange:e=>n(e.target.value),size:"small"})},F=(0,p.Cl)(),R=()=>{let{setGlobalMsg:e}=(0,Z.q)(),{data:t}=(0,f.kJ)(w.nX),[a]=(0,v.D)(b.oe),[d,x]=(0,r.useState)(!1),[m,h]=(0,r.useState)({}),[C,P]=(0,r.useState)(t.news_categories),[N,R]=(0,r.useState)(""),[I,z]=(0,r.useState)(!1),[T,A]=(0,r.useState)(!1),[E,G]=(0,r.useState)(),V=(e,t,a)=>({children:e,color:t,variant:a}),O=(0,r.useMemo)(()=>[F.accessor("title",{header:"Categories",cell:({row:e})=>s.jsx("div",{className:"flex items-center gap-3",children:(0,s.jsxs)("div",{className:"flex flex-col items-start",children:[s.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.title}),s.jsx(c.Z,{variant:"body2",children:e.original.description})]})})}),F.accessor("news_aggregate.aggregate.count",{header:"Total Post",cell:({row:e})=>s.jsx(c.Z,{children:e.original.news_aggregate?.aggregate?.count.toLocaleString()})}),F.accessor("created_at",{header:"Date",cell:({row:e})=>s.jsx(c.Z,{children:e.original.created_at.substring(0,10)})}),F.accessor("actions",{header:"Actions",cell:({row:e})=>(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(n.Z,{size:"small",onClick:()=>{A(!T),G(e.original)},children:s.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),s.jsx(M.default,{element:i.Z,elementProps:V(s.jsx("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:D.Z,dialogProps:{type:"deleteNewCategory"},dataId:e.original.id,setData:P,data:C})]}),enableSorting:!1})],[C]),H=(0,g.b7)({data:C,columns:O,filterFns:{fuzzy:k},state:{rowSelection:m,globalFilter:N},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:k,onRowSelectionChange:h,getCoreRowModel:(0,p.sC)(),onGlobalFilterChange:R,getFilteredRowModel:(0,p.vL)(),getSortedRowModel:(0,p.tj)(),getPaginationRowModel:(0,p.G_)(),getFacetedRowModel:(0,p.o6)(),getFacetedUniqueValues:(0,p.JG)(),getFacetedMinMaxValues:(0,p.HO)()});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[s.jsx(q,{value:N??"",onChange:e=>R(String(e)),placeholder:"Search",className:"max-sm:is-full"}),s.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:s.jsx(i.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>x(!d),startIcon:s.jsx("i",{className:"ri-add-line"}),children:"Add Category"})})]}),s.jsx("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:j().table,children:[s.jsx("thead",{children:H.getHeaderGroups().map(e=>s.jsx("tr",{children:e.headers.map(e=>s.jsx("th",{children:e.isPlaceholder?null:s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:u()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,g.ie)(e.column.columnDef.header,e.getContext()),{asc:s.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:s.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===H.getFilteredRowModel().rows.length?s.jsx("tbody",{children:s.jsx("tr",{children:s.jsx("td",{colSpan:H.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):s.jsx("tbody",{children:H.getRowModel().rows.slice(0,H.getState().pagination.pageSize).map(e=>s.jsx("tr",{className:u()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>s.jsx("td",{children:(0,g.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),s.jsx(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:H.getFilteredRowModel().rows.length,rowsPerPage:H.getState().pagination.pageSize,page:H.getState().pagination.pageIndex,onPageChange:(e,t)=>{H.setPageIndex(t)},onRowsPerPageChange:e=>H.setPageSize(Number(e.target.value))})]}),s.jsx(S,{open:d,newData:C,setData:P,handleClose:()=>x(!d)}),s.jsx(_,{open:T,newData:E,setData:P,loading:I,setLoading:z,handleClose:()=>A(!T)}),s.jsx(y.Z,{})]})}},4325:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var s=a(79703),r=a(92334);let l=(0,r.createProxy)(String.raw`D:\projects\alpha-admin\src\views\news\category\NewCategoryTable.jsx`),{__esModule:i,$$typeof:n}=l;l.default;let o=(0,r.createProxy)(String.raw`D:\projects\alpha-admin\src\views\news\category\NewCategoryTable.jsx#default`),d=()=>s.jsx(o,{})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[9357,6491,3302,3440,3198,7541,3133,965,6514,5073,8894,6797,136,1702,764,9599,1894],()=>a(1809));module.exports=s})();