(()=>{var e={};e.id=2510,e.ids=[2510],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},18008:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(69842),s(88418),s(10634),s(35866);var t=s(23191),a=s(88716),n=s(37922),l=s.n(n),i=s(95231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(r,o);let d=["",{children:["[lang]",{children:["(dashboard)",{children:["services",{children:["service_center",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,69842)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\services\\service_center\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,88418)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,10634)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\services\\service_center\\page.jsx"],x="/[lang]/(dashboard)/services/service_center/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(dashboard)/services/service_center/page",pathname:"/[lang]/services/service_center",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},78463:(e,r,s)=>{Promise.resolve().then(s.bind(s,94336))},19518:(e,r,s)=>{"use strict";s.d(r,{Z:()=>g});var t=s(45353),a=s(91367),n=s(17577),l=s(41135),i=s(88634),o=s(91703),d=s(2791),c=s(89178),x=s(55336),h=s(10326);let m=["className","raised"],u=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},x.y,r)},p=(0,o.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),g=n.forwardRef(function(e,r){let s=(0,d.i)({props:e,name:"MuiCard"}),{className:n,raised:i=!1}=s,o=(0,a.Z)(s,m),c=(0,t.Z)({},s,{raised:i}),x=u(c);return(0,h.jsx)(p,(0,t.Z)({className:(0,l.Z)(x.root,n),elevation:i?8:void 0,ref:r,ownerState:c},o))})},55336:(e,r,s)=>{"use strict";s.d(r,{Z:()=>l,y:()=>n});var t=s(71685),a=s(97898);function n(e){return(0,a.ZP)("MuiCard",e)}let l=(0,t.Z)("MuiCard",["root"])},60003:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>P});var t=s(10326),a=s(17577),n=s(90434),l=s(83708),i=s(71728),o=s(69035),d=s(37841),c=s(70034),x=s(47541),h=s(48467),m=s(89178),u=s(48260),p=s(99207),g=s(48029),j=s.n(g),v=s(65087);let f=e=>{let{tooltipProps:r,children:s}=e;return r?.title?t.jsx(l.Z,{...r,children:s}):s},b=({children:e,option:r})=>r.href?t.jsx(i.Z,{component:n.default,href:r.href,...r.linkProps,children:e}):t.jsx(t.Fragment,{children:e}),P=e=>{let{tooltipProps:r,icon:s,iconClassName:n,options:l,leftAlignMenu:i,iconButtonProps:g}=e,[P,Z]=(0,a.useState)(!1),C=(0,a.useRef)(null),{settings:w}=(0,v.r)(),N=e=>{C.current&&C.current.contains(e.target)||Z(!1)};return(0,t.jsxs)(t.Fragment,{children:[t.jsx(f,{tooltipProps:r,children:t.jsx(u.Z,{ref:C,size:"small",onClick:()=>{Z(e=>!e)},...g,children:"string"==typeof s?t.jsx("i",{className:j()(s,n)}):s||t.jsx("i",{className:j()("ri-more-2-line",n)})})}),t.jsx(o.Z,{open:P,anchorEl:C.current,placement:i?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>t.jsx(h.Z,{...e,children:t.jsx(m.Z,{className:"bordered"===w.skin?"border shadow-none":"shadow-lg",children:t.jsx(x.d,{onClickAway:N,children:t.jsx(c.Z,{autoFocusItem:P,children:l.map((e,r)=>"string"==typeof e?t.jsx(d.Z,{onClick:N,children:e},r):"divider"in e?e.divider&&t.jsx(p.Z,{...e.dividerProps},r):t.jsx(d.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:r=>{N(r),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(r)},children:(0,t.jsxs)(b,{option:e,children:[("string"==typeof e.icon?t.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},r))})})})})})]})}},5330:(e,r,s)=>{"use strict";s.d(r,{Z:()=>l});var t=s(10326);s(17577);var a=s(38506),n=s(76865);let l=()=>{let{globalMsg:e,setGlobalMsg:r}=(0,n.q)();return t.jsx("div",{children:t.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>r(null),message:e})})}},94336:(e,r,s)=>{"use strict";s.d(r,{default:()=>k});var t=s(10326),a=s(17577),n=s(19518),l=s(87700),i=s(48260),o=s(95684),d=s(78077),c=s(25609),x=s(48029),h=s.n(x),m=s(5606),u=s(11798),p=s(86508),g=s(19074),j=s(99207),v=s(74723),f=s(18753),b=s(24443),P=s(5330),Z=s(76865),C=s(29084);let w=e=>{let{setGlobalMsg:r}=(0,Z.q)(),{open:s,handleClose:n,serviceCenterData:o,setData:x}=e,[h]=(0,f.D)(b.O7);(0,a.useRef)(null);let{control:m,reset:u,handleSubmit:p,formState:{errors:C}}=(0,v.cI)({defaultValues:{name:"",phone:"",address:""}}),w=async e=>{x([...o??[],(await h({variables:{data:{address:e.address,name:e.name,phone:e.phone}}})).data.insert_service_centers_one]),N(),r("➕ Added New Data")},N=()=>{n(),u({title:"",description:""})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.ZP,{open:s,anchor:"right",variant:"temporary",onClose:N,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[t.jsx(c.Z,{variant:"h5",children:"Add Admin"}),t.jsx(i.Z,{size:"small",onClick:N,children:t.jsx("i",{className:"ri-close-line text-2xl"})})]}),t.jsx(j.Z,{}),t.jsx("div",{className:"p-5",children:(0,t.jsxs)("form",{onSubmit:p(e=>w(e)),className:"flex flex-col gap-5",children:[t.jsx(v.Qr,{name:"name",control:m,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...C.name&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"phone",control:m,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Phone",type:"phone",placeholder:"",...C.phone&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"address",control:m,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Address",placeholder:"",...C.address&&{error:!0,helperText:"This field is required."}})}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[t.jsx(l.Z,{variant:"contained",type:"submit",children:"Add"}),t.jsx(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:N,children:"Discard"})]})]})})]}),t.jsx(P.Z,{})]})};var N=s(84875);let S=e=>{let{setGlobalMsg:r}=(0,Z.q)(),{open:s,handleClose:n,serviceCenterData:o,setData:x}=e,[h]=(0,f.D)(b.he),{data:m}=(0,N.kJ)(C.kI);(0,a.useRef)(null);let{control:u,reset:p,handleSubmit:w,formState:{errors:S}}=(0,v.cI)({defaultValues:{name:"",address:"",phone:""}}),y=async e=>{let s=await h({variables:{id:o.id,data:{phone:e.phone,name:e.name,address:e.address}}});x(e=>e.map(e=>e.id===o?.id?{...e,...s.data.update_service_centers_by_pk}:e)),_(),r("✅ Service Data has been updated")};(0,a.useEffect)(()=>{o&&p({name:o.name||"",address:o.address||"",phone:o.phone||""})},[o,p]);let _=()=>{n()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.ZP,{open:s,anchor:"right",variant:"temporary",onClose:_,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[t.jsx(c.Z,{variant:"h5",children:"Edit Service Center"}),t.jsx(i.Z,{size:"small",onClick:()=>{n()},children:t.jsx("i",{className:"ri-close-line text-2xl"})})]}),t.jsx(j.Z,{}),t.jsx("div",{className:"p-5",children:(0,t.jsxs)("form",{onSubmit:w(e=>y(e)),className:"flex flex-col gap-5",children:[t.jsx(v.Qr,{name:"name",control:u,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...S.name&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"phone",control:u,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Phone",placeholder:"",...S.phone&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"address",control:u,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Address",placeholder:"",...S.address&&{error:!0,helperText:"This field is required."}})}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[t.jsx(l.Z,{variant:"contained",type:"submit",children:"Update"}),t.jsx(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:_,children:"Discard"})]})]})})]}),t.jsx(P.Z,{})]})};s(60003);var y=s(4099),_=s(92474),A=s(89307),D=s.n(A);let q=(e,r,s,t)=>{let a=(0,m.O4)(e.getValue(r),s);return t({itemRank:a}),a.passed},R=({value:e,onChange:r,debounce:s=500,...n})=>{let[l,i]=(0,a.useState)(e);return(0,a.useEffect)(()=>{i(e)},[e]),(0,a.useEffect)(()=>{let e=setTimeout(()=>{r(l)},s);return()=>clearTimeout(e)},[l]),t.jsx(d.Z,{...n,value:l,onChange:e=>i(e.target.value),size:"small"})},T=(0,u.Cl)(),k=()=>{let{setGlobalMsg:e}=(0,Z.q)(),{data:r}=(0,N.kJ)(C.TX),s=r.service_centers,[d]=(0,f.D)(b.DR),[x,m]=(0,a.useState)(!1),[g,j]=(0,a.useState)(!1),[v,A]=(0,a.useState)(),[k,M]=(0,a.useState)({}),[F,I]=(0,a.useState)(s),[E,z]=(0,a.useState)(""),O=(e,r,s)=>({children:e,color:r,variant:s}),G=e=>{A(e),j(!g)},H=(0,a.useMemo)(()=>[T.accessor("id",{header:"ID",cell:({row:e})=>t.jsx(c.Z,{children:e.original.id?.substring(0,10)})}),T.accessor("name",{header:"Name",cell:({row:e})=>t.jsx("div",{className:"flex items-center gap-3",children:t.jsx("div",{className:"flex flex-col items-start",children:t.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.name})})})}),T.accessor("phone",{header:"Phone",cell:({row:e})=>t.jsx(c.Z,{type:"phone",children:e.original.phone})}),T.accessor("address",{header:"Address",cell:({row:e})=>t.jsx(c.Z,{className:"w-80 text-wrap",children:e.original.address})}),T.accessor("created_at",{header:"Date",cell:({row:e})=>t.jsx(c.Z,{children:e.original.created_at?.substring(0,10)})}),T.accessor("actions",{header:"Actions",cell:({row:e})=>(0,t.jsxs)("div",{className:"flex items-center",children:[t.jsx(i.Z,{size:"small",onClick:()=>G(e.original),children:t.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),t.jsx(y.Z,{element:l.Z,elementProps:O(t.jsx("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:_.Z,dialogProps:{type:"deleteServiceCenter"},dataId:e.original.id,setData:I,data:F})]}),enableSorting:!1})],[F]),J=(0,p.b7)({data:F,columns:H,filterFns:{fuzzy:q},state:{rowSelection:k,globalFilter:E},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:q,onRowSelectionChange:M,getCoreRowModel:(0,u.sC)(),onGlobalFilterChange:z,getFilteredRowModel:(0,u.vL)(),getSortedRowModel:(0,u.tj)(),getPaginationRowModel:(0,u.G_)(),getFacetedRowModel:(0,u.o6)(),getFacetedUniqueValues:(0,u.JG)(),getFacetedMinMaxValues:(0,u.HO)()});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[t.jsx(R,{value:E??"",onChange:e=>z(String(e)),placeholder:"Search",className:"max-sm:is-full"}),t.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:t.jsx(l.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>m(!x),startIcon:t.jsx("i",{className:"ri-add-line"}),children:"Add Service Center"})})]}),t.jsx("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:D().table,children:[t.jsx("thead",{children:J.getHeaderGroups().map(e=>t.jsx("tr",{children:e.headers.map(e=>t.jsx("th",{children:e.isPlaceholder?null:t.jsx(t.Fragment,{children:(0,t.jsxs)("div",{className:h()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,p.ie)(e.column.columnDef.header,e.getContext()),{asc:t.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:t.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===J.getFilteredRowModel().rows.length?t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{colSpan:J.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):t.jsx("tbody",{children:J.getRowModel().rows.slice(0,J.getState().pagination.pageSize).map(e=>t.jsx("tr",{className:h()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>t.jsx("td",{children:(0,p.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),t.jsx(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:J.getFilteredRowModel().rows.length,rowsPerPage:J.getState().pagination.pageSize,page:J.getState().pagination.pageIndex,onPageChange:(e,r)=>{J.setPageIndex(r)},onRowsPerPageChange:e=>J.setPageSize(Number(e.target.value))})]}),t.jsx(w,{open:x,serviceCenterData:F,setData:I,handleClose:()=>m(!x)}),t.jsx(S,{open:g,serviceCenterData:v,setData:I,handleClose:()=>j(!g)}),t.jsx(P.Z,{})]})}},69842:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>d});var t=s(19510),a=s(68570);let n=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\service_center\lists\ServiceCenterTable.jsx`),{__esModule:l,$$typeof:i}=n;n.default;let o=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\service_center\lists\ServiceCenterTable.jsx#default`),d=()=>t.jsx(o,{})}};var r=require("../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[8948,4471,4674,4366,8522,4313,2825,8077,1798,8117,4723,9074,5684,3054,6860,7251,9345],()=>s(18008));module.exports=t})();