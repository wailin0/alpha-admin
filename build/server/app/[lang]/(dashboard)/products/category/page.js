(()=>{var e={};e.id=8583,e.ids=[8583],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},78088:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),a(90014),a(88418),a(10634),a(35866);var r=a(23191),s=a(88716),i=a(37922),l=a.n(i),n=a(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(t,o);let d=["",{children:["[lang]",{children:["(dashboard)",{children:["products",{children:["category",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,90014)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\products\\category\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,88418)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,10634)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\products\\category\\page.jsx"],u="/[lang]/(dashboard)/products/category/page",m={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/products/category/page",pathname:"/[lang]/products/category",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},72261:(e,t,a)=>{Promise.resolve().then(a.bind(a,89777))},19518:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var r=a(45353),s=a(91367),i=a(17577),l=a(41135),n=a(88634),o=a(91703),d=a(2791),c=a(89178),u=a(55336),m=a(10326);let p=["className","raised"],x=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},u.y,t)},g=(0,o.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),h=i.forwardRef(function(e,t){let a=(0,d.i)({props:e,name:"MuiCard"}),{className:i,raised:n=!1}=a,o=(0,s.Z)(a,p),c=(0,r.Z)({},a,{raised:n}),u=x(c);return(0,m.jsx)(g,(0,r.Z)({className:(0,l.Z)(u.root,i),elevation:n?8:void 0,ref:t,ownerState:c},o))})},55336:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l,y:()=>i});var r=a(71685),s=a(97898);function i(e){return(0,s.ZP)("MuiCard",e)}let l=(0,r.Z)("MuiCard",["root"])},57329:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var r,s=a(91367),i=a(45353),l=a(17577),n=a(41135),o=a(88634),d=a(54641),c=a(25609),u=a(45011),m=a(65656),p=a(91703),x=a(71685),g=a(97898);function h(e){return(0,g.ZP)("MuiInputAdornment",e)}let j=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var f=a(2791),v=a(10326);let b=["children","className","component","disablePointerEvents","disableTypography","position","variant"],P=e=>{let{classes:t,disablePointerEvents:a,hiddenLabel:r,position:s,size:i,variant:l}=e,n={root:["root",a&&"disablePointerEvents",s&&`position${(0,d.Z)(s)}`,l,r&&"hiddenLabel",i&&`size${(0,d.Z)(i)}`]};return(0,o.Z)(n,h,t)},y=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`position${(0,d.Z)(a.position)}`],!0===a.disablePointerEvents&&t.disablePointerEvents,t[a.variant]]}})(({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${j.positionStart}&:not(.${j.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),Z=l.forwardRef(function(e,t){let a=(0,f.i)({props:e,name:"MuiInputAdornment"}),{children:o,className:d,component:p="div",disablePointerEvents:x=!1,disableTypography:g=!1,position:h,variant:j}=a,Z=(0,s.Z)(a,b),C=(0,m.Z)()||{},w=j;j&&C.variant,C&&!w&&(w=C.variant);let N=(0,i.Z)({},a,{hiddenLabel:C.hiddenLabel,size:C.size,disablePointerEvents:x,position:h,variant:w}),S=P(N);return(0,v.jsx)(u.Z.Provider,{value:null,children:(0,v.jsx)(y,(0,i.Z)({as:p,ownerState:N,className:(0,n.Z)(S.root,d),ref:t},Z,{children:"string"!=typeof o||g?(0,v.jsxs)(l.Fragment,{children:["start"===h?r||(r=(0,v.jsx)("span",{className:"notranslate",children:"​"})):null,o]}):(0,v.jsx)(c.Z,{color:"text.secondary",children:o})}))})})},60003:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var r=a(10326),s=a(17577),i=a(90434),l=a(83708),n=a(71728),o=a(69035),d=a(37841),c=a(70034),u=a(47541),m=a(48467),p=a(89178),x=a(48260),g=a(99207),h=a(48029),j=a.n(h),f=a(65087);let v=e=>{let{tooltipProps:t,children:a}=e;return t?.title?r.jsx(l.Z,{...t,children:a}):a},b=({children:e,option:t})=>t.href?r.jsx(n.Z,{component:i.default,href:t.href,...t.linkProps,children:e}):r.jsx(r.Fragment,{children:e}),P=e=>{let{tooltipProps:t,icon:a,iconClassName:i,options:l,leftAlignMenu:n,iconButtonProps:h}=e,[P,y]=(0,s.useState)(!1),Z=(0,s.useRef)(null),{settings:C}=(0,f.r)(),w=e=>{Z.current&&Z.current.contains(e.target)||y(!1)};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(v,{tooltipProps:t,children:r.jsx(x.Z,{ref:Z,size:"small",onClick:()=>{y(e=>!e)},...h,children:"string"==typeof a?r.jsx("i",{className:j()(a,i)}):a||r.jsx("i",{className:j()("ri-more-2-line",i)})})}),r.jsx(o.Z,{open:P,anchorEl:Z.current,placement:n?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>r.jsx(m.Z,{...e,children:r.jsx(p.Z,{className:"bordered"===C.skin?"border shadow-none":"shadow-lg",children:r.jsx(u.d,{onClickAway:w,children:r.jsx(c.Z,{autoFocusItem:P,children:l.map((e,t)=>"string"==typeof e?r.jsx(d.Z,{onClick:w,children:e},t):"divider"in e?e.divider&&r.jsx(g.Z,{...e.dividerProps},t):r.jsx(d.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{w(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,r.jsxs)(b,{option:e,children:[("string"==typeof e.icon?r.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})})]})}},5330:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(10326);a(17577);var s=a(38506),i=a(76865);let l=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,i.q)();return r.jsx("div",{children:r.jsx(s.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},89777:(e,t,a)=>{"use strict";a.d(t,{default:()=>F});var r=a(10326),s=a(17577),i=a(19518),l=a(46374),n=a(48260),o=a(95684),d=a(78077),c=a(25609),u=a(48029),m=a.n(u),p=a(5606),x=a(11798),g=a(86508),h=a(19074),j=a(99207),f=a(57329),v=a(19611),b=a(74723),P=a(18753),y=a(24443),Z=a(5330),C=a(76865);let w=e=>{let{setGlobalMsg:t}=(0,C.q)(),{open:a,handleClose:i,categoryData:o,setData:u,loading:m,setLoading:p}=e,[x]=(0,P.D)(y.hq),[g]=(0,P.D)(y.Sf),[w,N]=(0,s.useState)(""),S=(0,s.useRef)(null),{control:_,reset:A,handleSubmit:R,formState:{errors:D}}=(0,b.cI)({defaultValues:{title:"",description:""}}),M=async e=>{try{p(!0);let a=await g({variables:{content_type:"image",folder:"quotations"}}),r=await (0,v.c)(w[0],a.data.getFileUploadUrl.fileUploadUrl,"image"),s=await x({variables:{data:{title:e.title,image_url:r}}});p(!1),u([...o,s.data.insert_product_categories_one]),E(),t("➕ Added New Category")}catch(e){console.log("Error ",e)}},E=()=>{i(),A({title:"",description:""}),N("")};return console.log("rile name ",w),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.ZP,{open:a,anchor:"right",variant:"temporary",onClose:E,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[r.jsx(c.Z,{variant:"h5",children:"Add Category"}),r.jsx(n.Z,{size:"small",onClick:E,children:r.jsx("i",{className:"ri-close-line text-2xl"})})]}),r.jsx(j.Z,{}),r.jsx("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:R(e=>M(e)),className:"flex flex-col gap-5",children:[r.jsx(b.Qr,{name:"title",control:_,rules:{required:!0},render:({field:e})=>r.jsx(d.Z,{...e,fullWidth:!0,label:"Title",placeholder:"",...D.title&&{error:!0,helperText:"This field is required."}})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(d.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:w[0]?.name,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:w?r.jsx(f.Z,{position:"end",children:r.jsx(n.Z,{size:"small",edge:"end",onClick:()=>N(""),children:r.jsx("i",{className:"ri-close-line"})})}):null}}),(0,r.jsxs)(l.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",r.jsx("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&N(t)},ref:S})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(l.Z,{variant:"contained",type:"submit",loading:m,children:"Add"}),r.jsx(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:E,children:"Discard"})]})]})})]}),r.jsx(Z.Z,{})]})};a(60003);var N=a(89307),S=a.n(N),_=a(84875),A=a(29084);let R=e=>{let{setGlobalMsg:t}=(0,C.q)(),{open:a,handleClose:i,categoryData:o,setData:u,loading:m,setLoading:p}=e,[x]=(0,P.D)(y.bc),[g]=(0,P.D)(y.Sf),[f,w]=(0,s.useState)(),[N,S]=(0,s.useState)(),_=(0,s.useRef)(null),{control:A,reset:R,handleSubmit:D,formState:{errors:M}}=(0,b.cI)({defaultValues:{title:"",image_url:""}}),E=async e=>{try{p(!0);let a=o.image_url;if(f&&f!==o?.image_url){let{data:e}=await g({variables:{content_type:"image",folder:"products"}});a=await (0,v.c)(f,e.getFileUploadUrl.fileUploadUrl,"image")}let r=await x({variables:{id:o?.id,data:{title:e.title,image_url:a}}});u(e=>e.map(e=>e.id===o?.id?{...e,...r.data.update_product_categories_by_pk}:e)),q(),t("✅ Category has been updated")}catch(e){console.log("Error ",e)}};(0,s.useEffect)(()=>{o&&(S(o?.image_url),R({title:o.title}),w(o.image_url||""))},[o,R]);let q=()=>{i(),R({title:"",description:""}),w("")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.ZP,{open:a,anchor:"right",variant:"temporary",onClose:q,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[r.jsx(c.Z,{variant:"h5",children:"Edit Category"}),r.jsx(n.Z,{size:"small",onClick:q,children:r.jsx("i",{className:"ri-close-line text-2xl"})})]}),r.jsx(j.Z,{}),r.jsx("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:D(e=>E(e)),className:"flex flex-col gap-5",children:[r.jsx(b.Qr,{name:"title",control:A,rules:{required:!0},render:({field:e})=>r.jsx(d.Z,{...e,fullWidth:!0,label:"Title",placeholder:"",...M.title&&{error:!0,helperText:"This field is required."}})}),r.jsx("div",{className:"flex items-center gap-4",children:r.jsx("input",{type:"file",id:"contained-button-file",onChange:e=>{let{files:t}=e.target;if(t&&t.length>0){let e=t[0];w(e),S(URL.createObjectURL(e))}},ref:_})}),N&&r.jsx("div",{className:"mt-4",children:r.jsx("img",{src:N,alt:"Preview",style:{width:"100%",borderRadius:"4px"}})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx(l.Z,{variant:"contained",type:"submit",loading:m,children:"Update"}),r.jsx(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:q,children:"Discard"})]})]})})]}),r.jsx(Z.Z,{})]})};var D=a(4099),M=a(92474);let E=(e,t,a,r)=>{let s=(0,p.O4)(e.getValue(t),a);return r({itemRank:s}),s.passed},q=({value:e,onChange:t,debounce:a=500,...i})=>{let[l,n]=(0,s.useState)(e);return(0,s.useEffect)(()=>{n(e)},[e]),(0,s.useEffect)(()=>{let e=setTimeout(()=>{t(l)},a);return()=>clearTimeout(e)},[l]),r.jsx(d.Z,{...i,value:l,onChange:e=>n(e.target.value),size:"small"})},k=(0,x.Cl)(),F=()=>{let{setGlobalMsg:e}=(0,C.q)(),{data:t}=(0,_.kJ)(A.C9),[a,d]=(0,s.useState)(!1),[u,p]=(0,s.useState)(!1),[h,j]=(0,s.useState)({}),[f,v]=(0,s.useState)(t.product_categories),[b,P]=(0,s.useState)(""),[y,Z]=(0,s.useState)(!1),[N,F]=(0,s.useState)(),I=(e,t,a)=>({children:e,color:t,variant:a}),T=(0,s.useMemo)(()=>[k.accessor("title",{header:"Categories",cell:({row:e})=>(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[r.jsx("img",{src:e.original.image_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,r.jsxs)("div",{className:"flex flex-col items-start",children:[r.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.title}),r.jsx(c.Z,{variant:"body2",children:e.original.description})]})]})}),k.accessor("products_aggregate.aggregate.count",{header:"Total Products",cell:({row:e})=>r.jsx(c.Z,{children:e?.original?.products_aggregate?.aggregate?.count?.toLocaleString()})}),k.accessor("created_at",{header:"Date",cell:({row:e})=>r.jsx(c.Z,{children:e.original.created_at.substring(0,10)})}),k.accessor("actions",{header:"Actions",cell:({row:e})=>(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(n.Z,{size:"small",onClick:()=>{p(!u),F(e.original)},children:r.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),r.jsx(D.Z,{element:l.Z,elementProps:I(r.jsx("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:M.Z,dialogProps:{type:"deleteProductCategory"},dataId:e.original.id,setData:v,data:f})]}),enableSorting:!1})],[f]),z=(0,g.b7)({data:f,columns:T,filterFns:{fuzzy:E},state:{rowSelection:h,globalFilter:b},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:E,onRowSelectionChange:j,getCoreRowModel:(0,x.sC)(),onGlobalFilterChange:P,getFilteredRowModel:(0,x.vL)(),getSortedRowModel:(0,x.tj)(),getPaginationRowModel:(0,x.G_)(),getFacetedRowModel:(0,x.o6)(),getFacetedUniqueValues:(0,x.JG)(),getFacetedMinMaxValues:(0,x.HO)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[r.jsx(q,{value:b??"",onChange:e=>P(String(e)),placeholder:"Search",className:"max-sm:is-full"}),r.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:r.jsx(l.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>d(!a),startIcon:r.jsx("i",{className:"ri-add-line"}),children:"Add Category"})})]}),r.jsx("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:S().table,children:[r.jsx("thead",{children:z.getHeaderGroups().map(e=>r.jsx("tr",{children:e.headers.map(e=>r.jsx("th",{children:e.isPlaceholder?null:r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,g.ie)(e.column.columnDef.header,e.getContext()),{asc:r.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:r.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===z.getFilteredRowModel().rows.length?r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{colSpan:z.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):r.jsx("tbody",{children:z.getRowModel().rows.slice(0,z.getState().pagination.pageSize).map(e=>r.jsx("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>r.jsx("td",{children:(0,g.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),r.jsx(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:z.getFilteredRowModel().rows.length,rowsPerPage:z.getState().pagination.pageSize,page:z.getState().pagination.pageIndex,onPageChange:(e,t)=>{z.setPageIndex(t)},onRowsPerPageChange:e=>z.setPageSize(Number(e.target.value))})]}),r.jsx(w,{open:a,categoryData:f,setData:v,loading:y,setLoading:Z,handleClose:()=>d(!a)}),r.jsx(R,{open:u,categoryData:N,setData:v,loading:y,setLoading:Z,handleClose:()=>p(!u)})]})}},90014:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(19510),s=a(68570);let i=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\products\category\ProductCategoryTable.jsx`),{__esModule:l,$$typeof:n}=i;i.default;let o=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\products\category\ProductCategoryTable.jsx#default`),d=()=>r.jsx(o,{})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[8948,4471,5280,4366,8522,8077,4313,2825,1798,4723,8117,9074,5684,3054,6860,7251,4073],()=>a(78088));module.exports=r})();