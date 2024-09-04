(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{58127:function(e,r,l){Promise.resolve().then(l.bind(l,14754))},348:function(e,r,l){"use strict";l.d(r,{Q:function(){return i}});let i=e=>e.split(/\s/).reduce((e,r)=>e+=r.slice(0,1),"")},14754:function(e,r,l){"use strict";l.d(r,{default:function(){return Q}});var i=l(59533),s=l(95094),t=l(47867),n=l(3443),a=l(28095);l(83338),l(66967);var c=l(76399),d=l(31029),o=l(29349),x=l(31229),m=l(12895);let u={completed:"success",canceled:"error",refunded:"warning",delivering:"primary",preparing:"info",ordered:"secondary"};var h=e=>{var r;let{orderData:l}=e,{setGlobalMsg:s}=(0,m.q)(),[x]=(0,c.D)(o.HT),[h]=(0,c.D)(o.tt,{refetchQueries:[d.Nz]}),j=async(e,r)=>{try{await h({variables:{order_id:e,status:r}}),s("Change Order Status")}catch(e){console.log("Change Status Error ",e)}};return(0,i.jsxs)("div",{className:"flex flex-wrap justify-between sm:items-center max-sm:flex-col gap-y-4",children:[(0,i.jsxs)("div",{className:"flex flex-col items-start gap-1",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(a.Z,{variant:"h5",children:"Order - ".concat(null==l?void 0:l.order_number)}),(0,i.jsx)(n.Z,{variant:"tonal",label:null==l?void 0:l.status,color:u[(null==l?void 0:l.status)||""],size:"small"})]}),(0,i.jsx)(a.Z,{children:"".concat(new Date(null!==(r=null==l?void 0:l.ordered_at)&&void 0!==r?r:"").toLocaleString())})]}),(0,i.jsxs)("div",{className:"flex gap-4",children:[(0,i.jsx)(t.Z,{variant:"outlined",color:"success",onClick:()=>j(l.id,"completed"),children:"Complete"}),(0,i.jsx)(t.Z,{variant:"outlined",color:"error",onClick:()=>j(l.id,"canceled"),children:"Cancel"}),(0,i.jsx)(t.Z,{variant:"outlined",color:"warning",onClick:()=>j(l.id,"refunded"),children:"Refund"}),(0,i.jsx)(t.Z,{variant:"outlined",color:"primary",onClick:()=>j(l.id,"delivering"),children:"Delivering"}),(0,i.jsx)(t.Z,{variant:"outlined",color:"info",onClick:()=>j(l.id,"preparing"),children:"Preparing"})]})]})},j=l(26175),p=l(32870),v=l(33386),g=l(72860),f=l.n(g),Z=l(19880),N=l(65841),b=l(51480);l(83762);var y=l(67875),w=l.n(y);let _=(e,r,l,i)=>{let s=(0,Z.O4)(e.getValue(r),l);return i({itemRank:s}),s.passed},S=(0,N.Cl)(),C=e=>{var r;let{orderData:l}=e,[s,t]=(0,x.useState)({}),[n,c]=(0,x.useState)(l.order_items),[d,o]=(0,x.useState)(""),m=(0,x.useMemo)(()=>[S.accessor("title",{header:"Product",cell:e=>{let{row:r}=e;return(0,i.jsx)("div",{className:"flex items-center gap-3 text-wrap",children:(0,i.jsxs)("div",{className:"flex flex-col items-start  ",children:[(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium w-60 text-wrap",children:r.original.product.title}),(0,i.jsx)(a.Z,{variant:"body2",children:r.original.product.brand.title})]})})}}),S.accessor("order_items?.unit_price",{header:"Price",cell:e=>{let{row:r}=e;return(0,i.jsxs)(a.Z,{children:["".concat(r.original.unit_price.toLocaleString())," Ks"]})}}),S.accessor("quantity",{header:"Qty",cell:e=>{let{row:r}=e;return(0,i.jsx)(a.Z,{children:"".concat(r.original.quantity)})}}),S.accessor("total",{header:"Total",cell:e=>{var r;let{row:l}=e;return(0,i.jsxs)(a.Z,{children:["".concat(null===(r=l.original.total)||void 0===r?void 0:r.toLocaleString())," Ks"]})}})],[]),u=(0,b.b7)({data:n,columns:m,filterFns:{fuzzy:_},state:{rowSelection:s,globalFilter:d},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:_,onRowSelectionChange:t,getCoreRowModel:(0,N.sC)(),onGlobalFilterChange:o,getFilteredRowModel:(0,N.vL)(),getSortedRowModel:(0,N.tj)(),getPaginationRowModel:(0,N.G_)(),getFacetedRowModel:(0,N.o6)(),getFacetedUniqueValues:(0,N.JG)(),getFacetedMinMaxValues:(0,N.HO)()});return(0,i.jsx)("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:w().table,children:[(0,i.jsx)("thead",{children:u.getHeaderGroups().map(e=>(0,i.jsx)("tr",{children:e.headers.map(e=>{var r;return(0,i.jsx)("th",{children:e.isPlaceholder?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:f()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,b.ie)(e.column.columnDef.header,e.getContext()),null!==(r=({asc:(0,i.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,i.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==r?r:null]})})},e.id)})},e.id))}),(null===(r=u.getFilteredRowModel().rows)||void 0===r?void 0:r.length)===0?(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:u.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,i.jsx)("tbody",{className:"border-be",children:u.getRowModel().rows.slice(0,u.getState().pagination.pageSize).map(e=>(0,i.jsx)("tr",{className:f()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,i.jsx)("td",{className:"first:is-14",children:(0,b.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})};var D=e=>{var r,l,s;let{orderData:t}=e;return(0,i.jsxs)(j.Z,{children:[(0,i.jsx)(p.Z,{title:"Order Details"}),(0,i.jsx)(C,{orderData:t}),(0,i.jsx)(v.Z,{className:"flex justify-end",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex items-center gap-12",children:[(0,i.jsx)(a.Z,{color:"text.primary",className:"min-is-[100px]",children:"Subtotal:"}),(0,i.jsxs)(a.Z,{color:"text.primary",className:"font-medium",children:[null==t?void 0:null===(r=t.items_total)||void 0===r?void 0:r.toLocaleString()," Ks"]})]}),(0,i.jsxs)("div",{className:"flex items-center gap-12",children:[(0,i.jsx)(a.Z,{color:"text.primary",className:"min-is-[100px]",children:"Delivery Fee:"}),(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium",children:null==t?void 0:null===(l=t.delivery_fee)||void 0===l?void 0:l.toLocaleString()})]}),(0,i.jsxs)("div",{className:"flex items-center gap-12",children:[(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium min-is-[100px]",children:"Total:"}),(0,i.jsxs)(a.Z,{color:"text.primary",className:"font-medium",children:[null==t?void 0:null===(s=t.total)||void 0===s?void 0:s.toLocaleString()," Ks"]})]})]})})]})},P=l(72540),M=l(33135),k=l(34607),R=l(34051),O=l(84407),F=l(66030),L=l(15217);let T=(0,F.ZP)(L.Z)({paddingLeft:0,paddingRight:0,"& .MuiTimelineItem-root":{width:"100%","&:before":{display:"none"},"& .MuiTimelineContent-root:last-child":{paddingBottom:0},"&:nth-last-child(2) .MuiTimelineConnector-root":{backgroundColor:"transparent",borderInlineStart:"1px dashed var(--mui-palette-divider)"},"& .MuiTimelineConnector-root":{backgroundColor:"var(--mui-palette-primary-main)"}}});var z=e=>{let{orderData:r}=e;return(0,i.jsxs)(j.Z,{children:[(0,i.jsx)(p.Z,{title:"Shipping Activity"}),(0,i.jsx)(v.Z,{children:(0,i.jsxs)(T,{children:[(0,i.jsxs)(M.Z,{children:[(0,i.jsxs)(R.Z,{children:[(0,i.jsx)(P.Z,{color:"primary"}),(0,i.jsx)(O.Z,{})]}),(0,i.jsxs)(k.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,i.jsxs)(a.Z,{color:"text.primary",className:"font-medium",children:["Order was placed (Order ID: #",r.order_number,")"]}),(0,i.jsx)(a.Z,{variant:"caption",children:new Date(r.ordered_at).toLocaleString()})]}),(0,i.jsx)(a.Z,{className:"mbe-2",children:"Order has been placed successfully"})]})]}),(0,i.jsxs)(M.Z,{children:[(0,i.jsxs)(R.Z,{children:[(0,i.jsx)(P.Z,{variant:null===r.preparing_at?"outlined":"contained",color:null===r.preparing_at?"grey":"primary"}),(0,i.jsx)(O.Z,{})]}),(0,i.jsxs)(k.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium",children:"Preparing"}),null!==r.preparing_at&&(0,i.jsx)(a.Z,{variant:"caption",children:new Date(null==r?void 0:r.preparing_at).toLocaleString()})]}),(0,i.jsx)(a.Z,{className:"mbe-2",children:"Order is preparing"})]})]}),(0,i.jsxs)(M.Z,{children:[(0,i.jsxs)(R.Z,{children:[(0,i.jsx)(P.Z,{variant:null===r.delivering_at?"outlined":"contained",color:null===r.delivering_at?"grey":"primary"}),(0,i.jsx)(O.Z,{})]}),(0,i.jsxs)(k.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium",children:"Delivering"}),null!==r.delivering_at&&(0,i.jsx)(a.Z,{variant:"caption",children:new Date(null==r?void 0:r.delivering_at).toLocaleString()})]}),(0,i.jsx)(a.Z,{className:"mbe-2",children:"Order is delivering "})]})]}),(0,i.jsxs)(M.Z,{children:[(0,i.jsxs)(R.Z,{children:[(0,i.jsx)(P.Z,{variant:null===r.completed_at?"outlined":"contained",color:null===r.completed_at?"grey":"primary"}),(0,i.jsx)(O.Z,{})]}),(0,i.jsxs)(k.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium",children:"Completed"}),null!==r.completed_at&&(0,i.jsx)(a.Z,{variant:"caption",children:new Date(null==r?void 0:r.completed_at).toLocaleString()})]}),(0,i.jsx)(a.Z,{className:"mbe-2",children:"Order has been completed "})]})]})]})})]})},I=l(36663);l(6083),l(42801);var V=l(348);let q=e=>{let{avatar:r,customer:l}=e;return r?(0,i.jsx)(I.Z,{src:r}):(0,i.jsx)(I.Z,{children:(0,V.Q)(l)})};var E=e=>{var r,l;let{orderData:s}=e;return(0,i.jsx)(j.Z,{children:(0,i.jsxs)(v.Z,{className:"flex flex-col gap-6",children:[(0,i.jsx)(a.Z,{variant:"h5",children:"Customer details"}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[q({avatar:null!==(r=null==s?void 0:s.avatar)&&void 0!==r?r:"",customer:null!==(l=null==s?void 0:s.user.profile_picture_url)&&void 0!==l?l:""}),(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium",children:null==s?void 0:s.user.name})})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsx)("div",{className:"flex justify-between items-center",children:(0,i.jsx)(a.Z,{color:"text.primary",className:"font-medium",children:"Contact info"})}),(0,i.jsxs)(a.Z,{children:["Mobile : ",s.user.phone]})]})]})})};l(82471);var G=e=>{let{orderData:r}=e;return(0,i.jsx)(j.Z,{children:(0,i.jsxs)(v.Z,{className:"flex flex-col gap-6",children:[(0,i.jsx)("div",{className:"flex justify-between items-center",children:(0,i.jsx)(a.Z,{variant:"h5",children:"Shipping Address"})}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsxs)(a.Z,{children:["Receiver Name : ",r.receiver_name]}),(0,i.jsx)("br",{}),(0,i.jsxs)(a.Z,{children:["Receiver Phone : ",r.receiver_phone]}),(0,i.jsx)("br",{}),(0,i.jsxs)(a.Z,{children:["Receiver Address : ",r.receiver_address]})]})]})})},H=l(61250),K=l(17848),Q=()=>{let{id:e}=(0,H.useParams)(),{data:r}=(0,K.kJ)(d.Nz,{variables:{id:e}}),l=null==r?void 0:r.orders_by_pk;return(0,i.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(h,{orderData:l})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,i.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(D,{orderData:l})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(z,{orderData:l})})]})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,i.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(E,{orderData:l})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(G,{orderData:l})})]})})]})}}},function(e){e.O(0,[3307,8869,1055,4214,9253,4637,9276,7020,4284,2163,9993,7957,5841,3443,3532,1325,9650,8307,5402,1029,497,4170,6842,1744],function(){return e(e.s=58127)}),_N_E=e.O()}]);