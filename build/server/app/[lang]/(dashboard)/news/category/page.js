(()=>{var e={};e.id=8473,e.ids=[8473],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},70298:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d}),a(65933),a(88418),a(10634),a(35866);var s=a(23191),r=a(88716),l=a(37922),i=a.n(l),n=a(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(t,o);let d=["",{children:["[lang]",{children:["(dashboard)",{children:["news",{children:["category",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,65933)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\news\\category\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,88418)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,10634)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\news\\category\\page.jsx"],x="/[lang]/(dashboard)/news/category/page",u={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/[lang]/(dashboard)/news/category/page",pathname:"/[lang]/news/category",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},21316:(e,t,a)=>{Promise.resolve().then(a.bind(a,40461))},19518:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var s=a(45353),r=a(91367),l=a(17577),i=a(41135),n=a(88634),o=a(91703),d=a(2791),c=a(89178),x=a(55336),u=a(10326);let m=["className","raised"],g=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},x.y,t)},p=(0,o.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),h=l.forwardRef(function(e,t){let a=(0,d.i)({props:e,name:"MuiCard"}),{className:l,raised:n=!1}=a,o=(0,r.Z)(a,m),c=(0,s.Z)({},a,{raised:n}),x=g(c);return(0,u.jsx)(p,(0,s.Z)({className:(0,i.Z)(x.root,l),elevation:n?8:void 0,ref:t,ownerState:c},o))})},55336:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,y:()=>l});var s=a(71685),r=a(97898);function l(e){return(0,r.ZP)("MuiCard",e)}let i=(0,s.Z)("MuiCard",["root"])},60003:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var s=a(10326),r=a(17577),l=a(90434),i=a(83708),n=a(71728),o=a(69035),d=a(37841),c=a(70034),x=a(47541),u=a(48467),m=a(89178),g=a(48260),p=a(99207),h=a(48029),j=a.n(h),f=a(65087);let v=e=>{let{tooltipProps:t,children:a}=e;return t?.title?s.jsx(i.Z,{...t,children:a}):a},b=({children:e,option:t})=>t.href?s.jsx(n.Z,{component:l.default,href:t.href,...t.linkProps,children:e}):s.jsx(s.Fragment,{children:e}),w=e=>{let{tooltipProps:t,icon:a,iconClassName:l,options:i,leftAlignMenu:n,iconButtonProps:h}=e,[w,P]=(0,r.useState)(!1),y=(0,r.useRef)(null),{settings:C}=(0,f.r)(),Z=e=>{y.current&&y.current.contains(e.target)||P(!1)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(v,{tooltipProps:t,children:s.jsx(g.Z,{ref:y,size:"small",onClick:()=>{P(e=>!e)},...h,children:"string"==typeof a?s.jsx("i",{className:j()(a,l)}):a||s.jsx("i",{className:j()("ri-more-2-line",l)})})}),s.jsx(o.Z,{open:w,anchorEl:y.current,placement:n?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>s.jsx(u.Z,{...e,children:s.jsx(m.Z,{className:"bordered"===C.skin?"border shadow-none":"shadow-lg",children:s.jsx(x.d,{onClickAway:Z,children:s.jsx(c.Z,{autoFocusItem:w,children:i.map((e,t)=>"string"==typeof e?s.jsx(d.Z,{onClick:Z,children:e},t):"divider"in e?e.divider&&s.jsx(p.Z,{...e.dividerProps},t):s.jsx(d.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{Z(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,s.jsxs)(b,{option:e,children:[("string"==typeof e.icon?s.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},5330:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(10326);a(17577);var r=a(38506),l=a(76865);let i=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,l.q)();return s.jsx("div",{children:s.jsx(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},40461:(e,t,a)=>{"use strict";a.d(t,{default:()=>q});var s=a(10326),r=a(17577),l=a(19518),i=a(87700),n=a(48260),o=a(95684),d=a(78077),c=a(25609),x=a(48029),u=a.n(x),m=a(5606),g=a(11798),p=a(86508);a(60003);var h=a(89307),j=a.n(h),f=a(84875),v=a(18753),b=a(29084),w=a(24443),P=a(5330),y=a(76865),C=a(19074),Z=a(99207),N=a(74723);let S=e=>{let{setGlobalMsg:t}=(0,y.q)(),{open:a,handleClose:l,newData:o,setData:x}=e,[u]=(0,v.D)(w.SB),[m,g]=(0,r.useState)("");(0,r.useRef)(null);let{control:p,reset:h,handleSubmit:j,formState:{errors:f}}=(0,N.cI)({defaultValues:{title:""}}),b=async e=>{x([...o,(await u({variables:{title:e.title}})).data.insert_news_categories_one]),S(),t("➕ Added New Category")},S=()=>{l(),h({title:""}),g("")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(C.ZP,{open:a,anchor:"right",variant:"temporary",onClose:S,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,s.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[s.jsx(c.Z,{variant:"h5",children:"Add Category"}),s.jsx(n.Z,{size:"small",onClick:S,children:s.jsx("i",{className:"ri-close-line text-2xl"})})]}),s.jsx(Z.Z,{}),s.jsx("div",{className:"p-5",children:(0,s.jsxs)("form",{onSubmit:j(e=>b(e)),className:"flex flex-col gap-5",children:[s.jsx(N.Qr,{name:"title",control:p,rules:{required:!0},render:({field:e})=>s.jsx(d.Z,{...e,fullWidth:!0,label:"Title",placeholder:"",...f.title&&{error:!0,helpertext:"This field is required."}})}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(i.Z,{variant:"contained",type:"submit",children:"Add"}),s.jsx(i.Z,{variant:"outlined",color:"error",type:"reset",onClick:S,children:"Discard"})]})]})})]}),s.jsx(P.Z,{})]})},D=e=>{let{setGlobalMsg:t}=(0,y.q)(),{open:a,handleClose:l,newData:o,setData:x}=e,[u]=(0,v.D)(w.J2),[m,g]=(0,r.useState)("");(0,r.useRef)(null);let{control:p,reset:h,handleSubmit:j,formState:{errors:f}}=(0,N.cI)({defaultValues:{title:""}}),b=async e=>{let a=await u({variables:{id:o.id,title:e.title}});x(e=>e.map(e=>e.id===o?.id?{...e,...a.data.update_news_categories_by_pk}:e)),S(),t("✅ Category Data has been updated")};(0,r.useEffect)(()=>{o&&h({title:o.title})},[o]);let S=()=>{l(),h({title:""}),g("")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(C.ZP,{open:a,anchor:"right",variant:"temporary",onClose:S,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,s.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[s.jsx(c.Z,{variant:"h5",children:"Edit Category"}),s.jsx(n.Z,{size:"small",onClick:S,children:s.jsx("i",{className:"ri-close-line text-2xl"})})]}),s.jsx(Z.Z,{}),s.jsx("div",{className:"p-5",children:(0,s.jsxs)("form",{onSubmit:j(e=>b(e)),className:"flex flex-col gap-5",children:[s.jsx(N.Qr,{name:"title",control:p,rules:{required:!0},render:({field:e})=>s.jsx(d.Z,{...e,fullWidth:!0,label:"Title",placeholder:"",...f.title&&{error:!0,helperText:"This field is required."}})}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(i.Z,{variant:"contained",type:"submit",children:"Update"}),s.jsx(i.Z,{variant:"outlined",color:"error",type:"reset",onClick:S,children:"Discard"})]})]})})]}),s.jsx(P.Z,{})]})};var A=a(4099),_=a(92474);let M=(e,t,a,s)=>{let r=(0,m.O4)(e.getValue(t),a);return s({itemRank:r}),r.passed},R=({value:e,onChange:t,debounce:a=500,...l})=>{let[i,n]=(0,r.useState)(e);return(0,r.useEffect)(()=>{n(e)},[e]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{t(i)},a);return()=>clearTimeout(e)},[i]),s.jsx(d.Z,{...l,value:i,onChange:e=>n(e.target.value),size:"small"})},k=(0,g.Cl)(),q=()=>{let{setGlobalMsg:e}=(0,y.q)(),{data:t}=(0,f.kJ)(b.nX),[a]=(0,v.D)(w.oe),[d,x]=(0,r.useState)(!1),[m,h]=(0,r.useState)({}),[C,Z]=(0,r.useState)(t.news_categories),[N,q]=(0,r.useState)(""),[F,T]=(0,r.useState)(!1),[E,I]=(0,r.useState)(!1),[z,O]=(0,r.useState)(),G=(e,t,a)=>({children:e,color:t,variant:a}),H=(0,r.useMemo)(()=>[k.accessor("title",{header:"Categories",cell:({row:e})=>s.jsx("div",{className:"flex items-center gap-3",children:(0,s.jsxs)("div",{className:"flex flex-col items-start",children:[s.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.title}),s.jsx(c.Z,{variant:"body2",children:e.original.description})]})})}),k.accessor("news_aggregate.aggregate.count",{header:"Total Post",cell:({row:e})=>s.jsx(c.Z,{children:e.original.news_aggregate?.aggregate?.count.toLocaleString()})}),k.accessor("created_at",{header:"Date",cell:({row:e})=>s.jsx(c.Z,{children:e.original.created_at.substring(0,10)})}),k.accessor("actions",{header:"Actions",cell:({row:e})=>(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(n.Z,{size:"small",onClick:()=>{I(!E),O(e.original)},children:s.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),s.jsx(A.Z,{element:i.Z,elementProps:G(s.jsx("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:_.Z,dialogProps:{type:"deleteNewCategory"},dataId:e.original.id,setData:Z,data:C})]}),enableSorting:!1})],[C]),J=(0,p.b7)({data:C,columns:H,filterFns:{fuzzy:M},state:{rowSelection:m,globalFilter:N},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:M,onRowSelectionChange:h,getCoreRowModel:(0,g.sC)(),onGlobalFilterChange:q,getFilteredRowModel:(0,g.vL)(),getSortedRowModel:(0,g.tj)(),getPaginationRowModel:(0,g.G_)(),getFacetedRowModel:(0,g.o6)(),getFacetedUniqueValues:(0,g.JG)(),getFacetedMinMaxValues:(0,g.HO)()});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[s.jsx(R,{value:N??"",onChange:e=>q(String(e)),placeholder:"Search",className:"max-sm:is-full"}),s.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:s.jsx(i.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>x(!d),startIcon:s.jsx("i",{className:"ri-add-line"}),children:"Add Category"})})]}),s.jsx("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:j().table,children:[s.jsx("thead",{children:J.getHeaderGroups().map(e=>s.jsx("tr",{children:e.headers.map(e=>s.jsx("th",{children:e.isPlaceholder?null:s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:u()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,p.ie)(e.column.columnDef.header,e.getContext()),{asc:s.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:s.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===J.getFilteredRowModel().rows.length?s.jsx("tbody",{children:s.jsx("tr",{children:s.jsx("td",{colSpan:J.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):s.jsx("tbody",{children:J.getRowModel().rows.slice(0,J.getState().pagination.pageSize).map(e=>s.jsx("tr",{className:u()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>s.jsx("td",{children:(0,p.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),s.jsx(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:J.getFilteredRowModel().rows.length,rowsPerPage:J.getState().pagination.pageSize,page:J.getState().pagination.pageIndex,onPageChange:(e,t)=>{J.setPageIndex(t)},onRowsPerPageChange:e=>J.setPageSize(Number(e.target.value))})]}),s.jsx(S,{open:d,newData:C,setData:Z,handleClose:()=>x(!d)}),s.jsx(D,{open:E,newData:z,setData:Z,loading:F,setLoading:T,handleClose:()=>I(!E)}),s.jsx(P.Z,{})]})}},65933:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var s=a(19510),r=a(68570);let l=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\news\category\NewCategoryTable.jsx`),{__esModule:i,$$typeof:n}=l;l.default;let o=(0,r.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\news\category\NewCategoryTable.jsx#default`),d=()=>s.jsx(o,{})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[8948,4471,4674,4366,8522,8077,4313,2825,1798,8117,4723,9074,5684,3054,6860,7251,4073],()=>a(70298));module.exports=s})();