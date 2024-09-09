"use strict";exports.id=178,exports.ids=[178],exports.modules={60003:(e,r,t)=>{t.r(r),t.d(r,{default:()=>Z});var l=t(10326),s=t(17577),a=t(90434),i=t(83708),n=t(71728),o=t(69035),d=t(37841),c=t(70034),u=t(47541),m=t(48467),x=t(89178),p=t(48260),g=t(99207),h=t(48029),j=t.n(h),f=t(65087);let v=e=>{let{tooltipProps:r,children:t}=e;return r?.title?l.jsx(i.Z,{...r,children:t}):t},b=({children:e,option:r})=>r.href?l.jsx(n.Z,{component:a.default,href:r.href,...r.linkProps,children:e}):l.jsx(l.Fragment,{children:e}),Z=e=>{let{tooltipProps:r,icon:t,iconClassName:a,options:i,leftAlignMenu:n,iconButtonProps:h}=e,[Z,_]=(0,s.useState)(!1),w=(0,s.useRef)(null),{settings:S}=(0,f.r)(),y=e=>{w.current&&w.current.contains(e.target)||_(!1)};return(0,l.jsxs)(l.Fragment,{children:[l.jsx(v,{tooltipProps:r,children:l.jsx(p.Z,{ref:w,size:"small",onClick:()=>{_(e=>!e)},...h,children:"string"==typeof t?l.jsx("i",{className:j()(t,a)}):t||l.jsx("i",{className:j()("ri-more-2-line",a)})})}),l.jsx(o.Z,{open:Z,anchorEl:w.current,placement:n?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:({TransitionProps:e})=>l.jsx(m.Z,{...e,children:l.jsx(x.Z,{className:"bordered"===S.skin?"border shadow-none":"shadow-lg",children:l.jsx(u.d,{onClickAway:y,children:l.jsx(c.Z,{autoFocusItem:Z,children:i.map((e,r)=>"string"==typeof e?l.jsx(d.Z,{onClick:y,children:e},r):"divider"in e?e.divider&&l.jsx(g.Z,{...e.dividerProps},r):l.jsx(d.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:r=>{y(r),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(r)},children:(0,l.jsxs)(b,{option:e,children:[("string"==typeof e.icon?l.jsx("i",{className:e.icon}):e.icon)||null,e.text]})},r))})})})})})]})}},5330:(e,r,t)=>{t.d(r,{Z:()=>i});var l=t(10326);t(17577);var s=t(38506),a=t(76865);let i=()=>{let{globalMsg:e,setGlobalMsg:r}=(0,a.q)();return l.jsx("div",{children:l.jsx(s.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>r(null),message:e})})}},11594:(e,r,t)=>{t.d(r,{Pg:()=>n,c7:()=>s,sE:()=>i,uH:()=>l,zh:()=>a});let l={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},s={pending:"warning",completed:"success",accepted:"info",rejected:"error"},a={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},i={paid:"primary","partially paid":"info",completed:"success",unpaid:"error",pending:"warning"},n={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},20802:(e,r,t)=>{t.d(r,{Q:()=>l});let l=e=>e.split(/\s/).reduce((e,r)=>e+=r.slice(0,1),"")},70178:(e,r,t)=>{t.d(r,{Z:()=>O});var l=t(10326),s=t(17577);t(90434);var a=t(35047),i=t(19518),n=t(84187),o=t(87700),d=t(25609),c=t(48260),u=t(78077),m=t(95684),x=t(19074),p=t(53913),g=t(918),h=t(37841),j=t(56390),f=t(99207),v=t(74723),b=t(18753),Z=t(84875),_=t(24443),w=t(5330),S=t(76865),y=t(29084),N=t(36238);let P=e=>{let{setGlobalMsg:r}=(0,S.q)(),{open:t,handleClose:a,discountData:i,loading:n,setLoading:m,setData:P}=e,[C]=(0,b.D)(_.dn),[k,F]=(0,s.useState)(),[D,M]=(0,s.useState)(),{data:R}=(0,Z.kJ)(y.pR),[I,z]=(0,s.useState)("");(0,s.useRef)(null);let{control:V,reset:q,handleSubmit:E,formState:{errors:T}}=(0,v.cI)({defaultValues:{min_order:"",discounted_value:"",customer_type:""}});(0,s.useEffect)(()=>{i&&q({min_order:i.min_order,discounted_value:i.discounted_value,customer_type:i.customer_type})},[i,q]);let O=async e=>{try{m(!0);let t=await C({variables:{id:i.id,data:{min_order:Number(e.min_order),customer_type:D,discounted_value:Number(e.discounted_value),product_id:i.product_id}}});m(!1),P(e=>e.map(e=>e.id===i?.id?{...e,...t.data.update_product_discounts_by_pk}:e)),H(),r("✅ Product discount has been updated")}catch(e){console.log("Error ",e)}},H=()=>{a(),q({title:"",description:""}),z("")};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(x.ZP,{open:t,anchor:"right",variant:"temporary",onClose:H,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,l.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[l.jsx(d.Z,{variant:"h5",children:"Edit Discount"}),l.jsx(c.Z,{size:"small",onClick:H,children:l.jsx("i",{className:"ri-close-line text-2xl"})})]}),l.jsx(f.Z,{}),l.jsx("div",{className:"p-5",children:(0,l.jsxs)("form",{onSubmit:E(e=>O(e)),className:"flex flex-col gap-5",children:[l.jsx(v.Qr,{name:"min_order",control:V,rules:{required:!0},render:({field:e})=>l.jsx(u.Z,{...e,fullWidth:!0,type:"number",label:"Minimal Order",placeholder:"",...T.min_order&&{error:!0,helperText:"This field is required."}})}),l.jsx(v.Qr,{name:"discounted_value",control:V,rules:{required:!0},render:({field:e})=>l.jsx(u.Z,{...e,fullWidth:!0,type:"number",label:"Discounted Value",placeholder:"",...T.discounted_value&&{error:!0,helperText:"This field is required."}})}),(0,l.jsxs)(p.Z,{fullWidth:!0,children:[l.jsx(g.Z,{children:"Select User Role"}),l.jsx(j.Z,{label:"Select Vendor",value:D,onChange:e=>M(e.target.value),children:R?.user_roles?.map((e,r)=>l.jsx(h.Z,{value:e?.role_name,children:e?.role_name},r))}),l.jsx(N.Z,{sx:{color:"red"},children:T?.role_name})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[l.jsx(o.Z,{variant:"contained",type:"submit",loading:n,children:"Update"}),l.jsx(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:H,children:"Discard"})]})]})})]}),l.jsx(w.Z,{})]})};var C=t(48029),k=t.n(C),F=t(5606),D=t(11798),M=t(86508);t(60003),t(40529),t(11594);var R=t(4099),I=t(92474);t(20802),t(86045);var z=t(89307),V=t.n(z);let q=(e,r,t,l)=>{let s=(0,F.O4)(e.getValue(r),t);return l({itemRank:s}),s.passed},E=({value:e,onChange:r,debounce:t=500,...a})=>{let[i,n]=(0,s.useState)(e);return(0,s.useEffect)(()=>{n(e)},[e]),(0,s.useEffect)(()=>{let e=setTimeout(()=>{r(i)},t);return()=>clearTimeout(e)},[i]),l.jsx(u.Z,{...a,value:i,onChange:e=>n(e.target.value),size:"small"})},T=(0,D.Cl)(),O=({productData:e})=>{let{data:r}=(0,Z.kJ)(y.ef,{variables:{product_id:e.id},fetchPolicy:"network-only"}),{data:t}=(0,Z.kJ)(y.DF),{setGlobalMsg:u}=(0,S.q)(),[x,p]=(0,s.useState)(""),[g,h]=(0,s.useState)(!1),[j,f]=(0,s.useState)({}),[v,N]=(0,s.useState)(r.product_discounts),[C,F]=(0,s.useState)(),[z,O]=(0,s.useState)(v),[H,G]=(0,s.useState)(""),[J,L]=(0,s.useState)(!1),[Q]=(0,b.D)(_.Qm),U=(e,r,t)=>({children:e,color:r,variant:t}),{lang:W}=(0,a.useParams)(),A=(0,s.useMemo)(()=>[T.accessor("id",{header:"#",cell:({row:e})=>l.jsx(d.Z,{color:"primary",children:`${e.original.id.substring(0,10)}`})}),T.accessor("min_order ",{header:"Minimal Order",cell:({row:e})=>l.jsx("div",{className:"flex items-center gap-3",children:l.jsx("div",{className:"flex flex-col",children:l.jsx(d.Z,{className:"font-medium",color:"text.primary",children:e.original.min_order})})})}),T.accessor("customer_type ",{header:"Customer Type",cell:({row:e})=>l.jsx("div",{className:"flex items-center gap-3",children:l.jsx("div",{className:"flex flex-col",children:l.jsx(d.Z,{className:"font-medium",color:"text.primary",children:e.original.customer_type})})})}),T.accessor("discounted_value",{header:"Discounted Value",cell:({row:e})=>l.jsx(d.Z,{children:`${null!==e.original.discounted_value?e.original.discounted_value.toLocaleString():"-"}`})}),T.accessor("created_at",{header:"Date",cell:({row:e})=>l.jsx(d.Z,{children:e.original.created_at.substring(0,10)})}),T.accessor("action",{header:"Action",cell:({row:e})=>(0,l.jsxs)("div",{className:"flex items-center",children:[l.jsx(R.default,{element:o.Z,elementProps:U(l.jsx("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:I.Z,dialogProps:{type:"deleteProductDiscount"},dataId:e.original.id,setData:N,data:v}),l.jsx(c.Z,{onClick:()=>{F(e.original),L(!0)},children:l.jsx("i",{className:"ri-pencil-line"})})]}),enableSorting:!1})],[v,z]),$=(0,M.b7)({data:z,columns:A,filterFns:{fuzzy:q},state:{rowSelection:j,globalFilter:H},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:q,onRowSelectionChange:f,getCoreRowModel:(0,D.sC)(),onGlobalFilterChange:G,getFilteredRowModel:(0,D.vL)(),getSortedRowModel:(0,D.tj)(),getPaginationRowModel:(0,D.G_)(),getFacetedRowModel:(0,D.o6)(),getFacetedUniqueValues:(0,D.JG)(),getFacetedMinMaxValues:(0,D.HO)()});return(0,s.useEffect)(()=>{O(v?.filter(e=>!x||e.status.toLowerCase().replace(/\s+/g,"-")===x))},[x,v,O]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.Z,{children:[l.jsx(n.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:l.jsx("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:l.jsx(E,{value:H??"",onChange:e=>G(String(e)),placeholder:"Search Product Discount",className:"max-sm:is-full min-is-[200px]"})})}),l.jsx("div",{className:"overflow-x-auto",children:(0,l.jsxs)("table",{className:V().table,children:[l.jsx("thead",{children:$.getHeaderGroups().map(e=>l.jsx("tr",{children:e.headers.map(e=>l.jsx("th",{children:e.isPlaceholder?null:l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:k()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,M.ie)(e.column.columnDef.header,e.getContext()),{asc:l.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:l.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===$.getFilteredRowModel().rows.length?l.jsx("tbody",{children:l.jsx("tr",{children:l.jsx("td",{colSpan:$.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):l.jsx("tbody",{children:$.getRowModel().rows.slice(0,$.getState().pagination.pageSize).map(e=>l.jsx("tr",{className:k()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>l.jsx("td",{children:(0,M.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),l.jsx(m.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:$.getFilteredRowModel().rows.length,rowsPerPage:$.getState().pagination.pageSize,page:$.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,r)=>{$.setPageIndex(r)},onRowsPerPageChange:e=>$.setPageSize(Number(e.target.value))})]}),l.jsx(w.Z,{}),l.jsx(P,{open:J,discountData:C,setData:N,loading:g,setLoading:h,handleClose:()=>L(!J)})]})}}};