(()=>{var e={};e.id=2510,e.ids=[2510],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},60245:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>c,routeModule:()=>h,tree:()=>d}),s(36847),s(5114),s(32687),s(85133);var t=s(79193),a=s(71854),l=s(33997),n=s.n(l),i=s(73320),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(r,o);let d=["",{children:["[lang]",{children:["(dashboard)",{children:["services",{children:["service_center",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,36847)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\services\\service_center\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,5114)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,32687)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\services\\service_center\\page.jsx"],x="/[lang]/(dashboard)/services/service_center/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(dashboard)/services/service_center/page",pathname:"/[lang]/services/service_center",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},90702:(e,r,s)=>{Promise.resolve().then(s.bind(s,5255))},69121:(e,r,s)=>{"use strict";s.d(r,{Z:()=>g});var t=s(13211),a=s(6520),l=s(618),n=s(69360),i=s(47150),o=s(26829),d=s(28502),c=s(24687),x=s(41922),u=s(27486);let h=["className","raised"],m=e=>{let{classes:r}=e;return(0,i.Z)({root:["root"]},x.y,r)},p=(0,o.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),g=l.forwardRef(function(e,r){let s=(0,d.i)({props:e,name:"MuiCard"}),{className:l,raised:i=!1}=s,o=(0,a.Z)(s,h),c=(0,t.Z)({},s,{raised:i}),x=m(c);return(0,u.jsx)(p,(0,t.Z)({className:(0,n.Z)(x.root,l),elevation:i?8:void 0,ref:r,ownerState:c},o))})},41922:(e,r,s)=>{"use strict";s.d(r,{Z:()=>n,y:()=>l});var t=s(66875),a=s(62209);function l(e){return(0,a.ZP)("MuiCard",e)}let n=(0,t.Z)("MuiCard",["root"])},48398:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>P});var t=s(27486),a=s(618),l=s(38165),n=s(57559),i=s(63990),o=s(6386),d=s(23467),c=s(84961),x=s(8126),u=s(77673),h=s(24687),m=s(9594),p=s(20700),g=s(19396),j=s.n(g),v=s(63665);let f=e=>{let{tooltipProps:r,children:s}=e;return r?.title?t.jsx(n.Z,{...r,children:s}):s},b=({children:e,option:r})=>r.href?t.jsx(i.Z,{component:l.default,href:r.href,...r.linkProps,children:e}):t.jsx(t.Fragment,{children:e}),P=e=>{let{tooltipProps:r,icon:s,iconClassName:l,options:n,leftAlignMenu:i,iconButtonProps:g}=e,[P,Z]=(0,a.useState)(!1),C=(0,a.useRef)(null),{settings:w}=(0,v.r)(),N=e=>{C.current&&C.current.contains(e.target)||Z(!1)};return(0,t.jsxs)(t.Fragment,{children:[t.jsx(f,{tooltipProps:r,children:t.jsx(m.Z,{ref:C,size:"small",onClick:()=>{Z(e=>!e)},...g,children:"string"==typeof s?t.jsx("i",{className:j()(s,l)}):s||t.jsx("i",{className:j()("ri-more-2-line",l)})})}),t.jsx(o.Z,{open:P,anchorEl:C.current,placement:i?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>t.jsx(u.Z,{...e,children:t.jsx(h.Z,{className:"bordered"===w.skin?"border shadow-none":"shadow-lg",children:t.jsx(x.d,{onClickAway:N,children:t.jsx(c.Z,{autoFocusItem:P,children:n.map((e,r)=>"string"==typeof e?t.jsx(d.Z,{onClick:N,children:e},r):"divider"in e?e.divider&&t.jsx(p.Z,{...e.dividerProps},r):t.jsx(d.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:r=>{N(r),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(r)},children:(0,t.jsxs)(b,{option:e,children:[("string"==typeof e.icon?t.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},r))})})})})})]})}},91347:(e,r,s)=>{"use strict";s.d(r,{Z:()=>n});var t=s(27486);s(618);var a=s(27319),l=s(22405);let n=()=>{let{globalMsg:e,setGlobalMsg:r}=(0,l.q)();return t.jsx("div",{children:t.jsx(a.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>r(null),message:e})})}},5255:(e,r,s)=>{"use strict";s.d(r,{default:()=>k});var t=s(27486),a=s(618),l=s(69121),n=s(12964),i=s(9594),o=s(2598),d=s(4081),c=s(72660),x=s(19396),u=s.n(x),h=s(61359),m=s(36514),p=s(57229),g=s(39800),j=s(20700),v=s(58894),f=s(83398),b=s(66718),P=s(91347),Z=s(22405),C=s(25009);let w=e=>{let{setGlobalMsg:r}=(0,Z.q)(),{open:s,handleClose:l,serviceCenterData:o,setData:x}=e,[u]=(0,f.D)(b.O7);(0,a.useRef)(null);let{control:h,reset:m,handleSubmit:p,formState:{errors:C}}=(0,v.cI)({defaultValues:{name:"",phone:"",address:""}}),w=async e=>{x([...o??[],(await u({variables:{data:{address:e.address,name:e.name,phone:e.phone}}})).data.insert_service_centers_one]),N(),r("➕ Added New Data")},N=()=>{l(),m({title:"",description:""})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.ZP,{open:s,anchor:"right",variant:"temporary",onClose:N,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[t.jsx(c.Z,{variant:"h5",children:"Add Admin"}),t.jsx(i.Z,{size:"small",onClick:N,children:t.jsx("i",{className:"ri-close-line text-2xl"})})]}),t.jsx(j.Z,{}),t.jsx("div",{className:"p-5",children:(0,t.jsxs)("form",{onSubmit:p(e=>w(e)),className:"flex flex-col gap-5",children:[t.jsx(v.Qr,{name:"name",control:h,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...C.name&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"phone",control:h,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Phone",type:"phone",placeholder:"",...C.phone&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"address",control:h,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Address",placeholder:"",...C.address&&{error:!0,helperText:"This field is required."}})}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[t.jsx(n.Z,{variant:"contained",type:"submit",children:"Add"}),t.jsx(n.Z,{variant:"outlined",color:"error",type:"reset",onClick:N,children:"Discard"})]})]})})]}),t.jsx(P.Z,{})]})};var N=s(45882);let S=e=>{let{setGlobalMsg:r}=(0,Z.q)(),{open:s,handleClose:l,serviceCenterData:o,setData:x}=e,[u]=(0,f.D)(b.he),{data:h}=(0,N.kJ)(C.kI);(0,a.useRef)(null);let{control:m,reset:p,handleSubmit:w,formState:{errors:S}}=(0,v.cI)({defaultValues:{name:"",address:"",phone:""}}),y=async e=>{let s=await u({variables:{id:o.id,data:{phone:e.phone,name:e.name,address:e.address}}});x(e=>e.map(e=>e.id===o?.id?{...e,...s.data.update_service_centers_by_pk}:e)),_(),r("✅ Service Data has been updated")};(0,a.useEffect)(()=>{o&&p({name:o.name||"",address:o.address||"",phone:o.phone||""})},[o,p]);let _=()=>{l()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.ZP,{open:s,anchor:"right",variant:"temporary",onClose:_,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,t.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[t.jsx(c.Z,{variant:"h5",children:"Edit Service Center"}),t.jsx(i.Z,{size:"small",onClick:()=>{l()},children:t.jsx("i",{className:"ri-close-line text-2xl"})})]}),t.jsx(j.Z,{}),t.jsx("div",{className:"p-5",children:(0,t.jsxs)("form",{onSubmit:w(e=>y(e)),className:"flex flex-col gap-5",children:[t.jsx(v.Qr,{name:"name",control:m,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Name",placeholder:"",...S.name&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"phone",control:m,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Phone",placeholder:"",...S.phone&&{error:!0,helperText:"This field is required."}})}),t.jsx(v.Qr,{name:"address",control:m,rules:{required:!0},render:({field:e})=>t.jsx(d.Z,{...e,fullWidth:!0,label:"Address",placeholder:"",...S.address&&{error:!0,helperText:"This field is required."}})}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[t.jsx(n.Z,{variant:"contained",type:"submit",children:"Update"}),t.jsx(n.Z,{variant:"outlined",color:"error",type:"reset",onClick:_,children:"Discard"})]})]})})]}),t.jsx(P.Z,{})]})};s(48398);var y=s(36839),_=s(5632),q=s(31538),A=s.n(q);let D=(e,r,s,t)=>{let a=(0,h.O4)(e.getValue(r),s);return t({itemRank:a}),a.passed},R=({value:e,onChange:r,debounce:s=500,...l})=>{let[n,i]=(0,a.useState)(e);return(0,a.useEffect)(()=>{i(e)},[e]),(0,a.useEffect)(()=>{let e=setTimeout(()=>{r(n)},s);return()=>clearTimeout(e)},[n]),t.jsx(d.Z,{...l,value:n,onChange:e=>i(e.target.value),size:"small"})},T=(0,m.Cl)(),k=()=>{let{setGlobalMsg:e}=(0,Z.q)(),{data:r}=(0,N.kJ)(C.TX),s=r.service_centers,[d]=(0,f.D)(b.DR),[x,h]=(0,a.useState)(!1),[g,j]=(0,a.useState)(!1),[v,q]=(0,a.useState)(),[k,M]=(0,a.useState)({}),[F,I]=(0,a.useState)(s),[E,z]=(0,a.useState)(""),O=(e,r,s)=>({children:e,color:r,variant:s}),G=e=>{q(e),j(!g)},H=(0,a.useMemo)(()=>[T.accessor("id",{header:"ID",cell:({row:e})=>t.jsx(c.Z,{children:e.original.id?.substring(0,10)})}),T.accessor("name",{header:"Name",cell:({row:e})=>t.jsx("div",{className:"flex items-center gap-3",children:t.jsx("div",{className:"flex flex-col items-start",children:t.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.name})})})}),T.accessor("phone",{header:"Phone",cell:({row:e})=>t.jsx(c.Z,{type:"phone",children:e.original.phone})}),T.accessor("address",{header:"Address",cell:({row:e})=>t.jsx(c.Z,{className:"w-80 text-wrap",children:e.original.address})}),T.accessor("created_at",{header:"Date",cell:({row:e})=>t.jsx(c.Z,{children:e.original.created_at?.substring(0,10)})}),T.accessor("actions",{header:"Actions",cell:({row:e})=>(0,t.jsxs)("div",{className:"flex items-center",children:[t.jsx(i.Z,{size:"small",onClick:()=>G(e.original),children:t.jsx("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),t.jsx(y.Z,{element:n.Z,elementProps:O(t.jsx("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:_.Z,dialogProps:{type:"deleteServiceCenter"},dataId:e.original.id,setData:I,data:F})]}),enableSorting:!1})],[F]),J=(0,p.b7)({data:F,columns:H,filterFns:{fuzzy:D},state:{rowSelection:k,globalFilter:E},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:D,onRowSelectionChange:M,getCoreRowModel:(0,m.sC)(),onGlobalFilterChange:z,getFilteredRowModel:(0,m.vL)(),getSortedRowModel:(0,m.tj)(),getPaginationRowModel:(0,m.G_)(),getFacetedRowModel:(0,m.o6)(),getFacetedUniqueValues:(0,m.JG)(),getFacetedMinMaxValues:(0,m.HO)()});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[t.jsx(R,{value:E??"",onChange:e=>z(String(e)),placeholder:"Search",className:"max-sm:is-full"}),t.jsx("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:t.jsx(n.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>h(!x),startIcon:t.jsx("i",{className:"ri-add-line"}),children:"Add Service Center"})})]}),t.jsx("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:A().table,children:[t.jsx("thead",{children:J.getHeaderGroups().map(e=>t.jsx("tr",{children:e.headers.map(e=>t.jsx("th",{children:e.isPlaceholder?null:t.jsx(t.Fragment,{children:(0,t.jsxs)("div",{className:u()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,p.ie)(e.column.columnDef.header,e.getContext()),{asc:t.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:t.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===J.getFilteredRowModel().rows.length?t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{colSpan:J.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):t.jsx("tbody",{children:J.getRowModel().rows.slice(0,J.getState().pagination.pageSize).map(e=>t.jsx("tr",{className:u()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>t.jsx("td",{children:(0,p.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),t.jsx(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:J.getFilteredRowModel().rows.length,rowsPerPage:J.getState().pagination.pageSize,page:J.getState().pagination.pageIndex,onPageChange:(e,r)=>{J.setPageIndex(r)},onRowsPerPageChange:e=>J.setPageSize(Number(e.target.value))})]}),t.jsx(w,{open:x,serviceCenterData:F,setData:I,handleClose:()=>h(!x)}),t.jsx(S,{open:g,serviceCenterData:v,setData:I,handleClose:()=>j(!g)}),t.jsx(P.Z,{})]})}},36847:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>d});var t=s(79703),a=s(92334);let l=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\service_center\lists\ServiceCenterTable.jsx`),{__esModule:n,$$typeof:i}=l;l.default;let o=(0,a.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\service_center\lists\ServiceCenterTable.jsx#default`),d=()=>t.jsx(o,{})}};var r=require("../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[9357,6491,1598,8743,8520,4081,168,195,6514,8894,3697,9800,2598,1738,5670,6532,1894],()=>s(60245));module.exports=t})();