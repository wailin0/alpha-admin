(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8583],{83410:function(e,t,i){Promise.resolve().then(i.bind(i,75582))},26175:function(e,t,i){"use strict";var n=i(78845),r=i(99370),a=i(31229),l=i(27494),s=i(92728),o=i(66030),c=i(28464),d=i(13935),u=i(79161),m=i(59533);let h=["className","raised"],g=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},u.y,t)},p=(0,o.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=a.forwardRef(function(e,t){let i=(0,c.i)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=i,o=(0,r.Z)(i,h),d=(0,n.Z)({},i,{raised:s}),u=g(d);return(0,m.jsx)(p,(0,n.Z)({className:(0,l.Z)(u.root,a),elevation:s?8:void 0,ref:t,ownerState:d},o))});t.Z=x},79161:function(e,t,i){"use strict";i.d(t,{y:function(){return a}});var n=i(47678),r=i(11016);function a(e){return(0,r.ZP)("MuiCard",e)}let l=(0,n.Z)("MuiCard",["root"]);t.Z=l},81770:function(e,t,i){"use strict";i.d(t,{Z:function(){return y}});var n,r=i(99370),a=i(78845),l=i(31229),s=i(27494),o=i(92728),c=i(91343),d=i(28095),u=i(4623),m=i(38688),h=i(66030),g=i(47678),p=i(11016);function x(e){return(0,p.ZP)("MuiInputAdornment",e)}let f=(0,g.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v=i(28464),j=i(59533);let Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=e=>{let{classes:t,disablePointerEvents:i,hiddenLabel:n,position:r,size:a,variant:l}=e,s={root:["root",i&&"disablePointerEvents",r&&"position".concat((0,c.Z)(r)),l,n&&"hiddenLabel",a&&"size".concat((0,c.Z)(a))]};return(0,o.Z)(s,x,t)},C=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t["position".concat((0,c.Z)(i.position))],!0===i.disablePointerEvents&&t.disablePointerEvents,t[i.variant]]}})(e=>{let{theme:t,ownerState:i}=e;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===i.variant&&{["&.".concat(f.positionStart,"&:not(.").concat(f.hiddenLabel,")")]:{marginTop:16}},"start"===i.position&&{marginRight:8},"end"===i.position&&{marginLeft:8},!0===i.disablePointerEvents&&{pointerEvents:"none"})});var y=l.forwardRef(function(e,t){let i=(0,v.i)({props:e,name:"MuiInputAdornment"}),{children:o,className:c,component:h="div",disablePointerEvents:g=!1,disableTypography:p=!1,position:x,variant:f}=i,y=(0,r.Z)(i,Z),w=(0,m.Z)()||{},N=f;f&&w.variant,w&&!N&&(N=w.variant);let S=(0,a.Z)({},i,{hiddenLabel:w.hiddenLabel,size:w.size,disablePointerEvents:g,position:x,variant:N}),P=b(S);return(0,j.jsx)(u.Z.Provider,{value:null,children:(0,j.jsx)(C,(0,a.Z)({as:h,ownerState:S,className:(0,s.Z)(P.root,c),ref:t},y,{children:"string"!=typeof o||p?(0,j.jsxs)(l.Fragment,{children:["start"===x?n||(n=(0,j.jsx)("span",{className:"notranslate",children:"​"})):null,o]}):(0,j.jsx)(d.Z,{color:"text.secondary",children:o})}))})})},79505:function(e,t,i){"use strict";i.r(t);var n=i(59533),r=i(31229),a=i(96353),l=i(75510),s=i(51115),o=i(88478),c=i(30034),d=i(13638),u=i(62168),m=i(49744),h=i(13935),g=i(89749),p=i(45336),x=i(72860),f=i.n(x),v=i(59787);let j=e=>{let{tooltipProps:t,children:i}=e;return(null==t?void 0:t.title)?(0,n.jsx)(l.Z,{...t,children:i}):i},Z=e=>{let{children:t,option:i}=e;return i.href?(0,n.jsx)(s.Z,{component:a.default,href:i.href,...i.linkProps,children:t}):(0,n.jsx)(n.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:i,iconClassName:a,options:l,leftAlignMenu:s,iconButtonProps:x}=e,[b,C]=(0,r.useState)(!1),y=(0,r.useRef)(null),{settings:w}=(0,v.r)(),N=e=>{y.current&&y.current.contains(e.target)||C(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{tooltipProps:t,children:(0,n.jsx)(g.Z,{ref:y,size:"small",onClick:()=>{C(e=>!e)},...x,children:"string"==typeof i?(0,n.jsx)("i",{className:f()(i,a)}):i||(0,n.jsx)("i",{className:f()("ri-more-2-line",a)})})}),(0,n.jsx)(o.Z,{open:b,anchorEl:y.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,n.jsx)(m.Z,{...t,children:(0,n.jsx)(h.Z,{className:"bordered"===w.skin?"border shadow-none":"shadow-lg",children:(0,n.jsx)(u.d,{onClickAway:N,children:(0,n.jsx)(d.Z,{autoFocusItem:b,children:l.map((e,t)=>"string"==typeof e?(0,n.jsx)(c.Z,{onClick:N,children:e},t):"divider"in e?e.divider&&(0,n.jsx)(p.Z,{...e.dividerProps},t):(0,n.jsx)(c.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{N(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,n.jsxs)(Z,{option:e,children:[("string"==typeof e.icon?(0,n.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},64825:function(e,t,i){"use strict";i.d(t,{J:function(){return c},SettingsProvider:function(){return d}});var n=i(59533),r=i(31229),a=i(23310),l=i(13231),s=i(75443);let o=(e,t)=>{let[i,n]=(0,s.Z)(e);return[(0,r.useMemo)(()=>i?JSON.parse(i):t,[i]),e=>{n(JSON.stringify(e))}]},c=(0,r.createContext)(null),d=e=>{let t={mode:a.Z.mode,skin:a.Z.skin,semiDark:a.Z.semiDark,layout:a.Z.layout,navbarContentWidth:a.Z.navbar.contentWidth,contentWidth:a.Z.contentWidth,footerContentWidth:a.Z.footer.contentWidth,primaryColor:l.Z[0].main},i={...t,mode:e.mode||a.Z.mode},[s,d]=o(a.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:i),[u,m]=(0,r.useState)("{}"!==JSON.stringify(s)?s:i),h=(e,t)=>{let{updateCookie:i=!0}=t||{};m(t=>{let n={...t,...e};return i&&d(n),n})},g=(0,r.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(u),[u]);return(0,n.jsx)(c.Provider,{value:{settings:u,updateSettings:h,isSettingsChanged:g,resetSettings:()=>{h(t)},updatePageSettings:e=>(h(e,{updateCookie:!1}),()=>h(s,{updateCookie:!1}))},children:e.children})}},59787:function(e,t,i){"use strict";i.d(t,{r:function(){return a}});var n=i(31229),r=i(64825);let a=()=>{let e=(0,n.useContext)(r.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},12895:function(e,t,i){"use strict";i.d(t,{ApolloWrapper:function(){return h},q:function(){return m}});var n=i(59533),r=i(81866),a=i(63876),l=i(49464),s=i(50069),o=i(31229);let c=(0,o.createContext)();function d(){let e=new a.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),t=(0,s.v)(async(e,t)=>{let{headers:i}=t;try{return{headers:{...i,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:i}}});return new l.fe({cache:new l.h4,link:u.concat(t).concat(e)})}let u=(0,r.q)(e=>{let{graphQLErrors:t,networkError:i}=e;t&&(console.log("graphql",t),t.forEach(e=>{let{extensions:t}=e;("invalid-headers"===t.code||"invalid-jwt"===t.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),i&&(console.log("[Network error]: ".concat(i)),alert("network connection problem"))}),m=()=>(0,o.useContext)(c);function h(e){let{children:t}=e,[i,r]=(0,o.useState)(null),[a,s]=(0,o.useState)(!1);return(0,n.jsx)(l.e$,{makeClient:d,children:(0,n.jsx)(c.Provider,{value:{globalMsg:i,setGlobalMsg:r,loading:a,setLoading:s},children:t})})}},76422:function(e,t,i){"use strict";var n=i(59533);i(31229);var r=i(12173),a=i(12895);t.Z=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,a.q)();return(0,n.jsx)("div",{children:(0,n.jsx)(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},13231:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/dashboards/crm",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},72718:function(e,t,i){"use strict";i.d(t,{c:function(){return n}});let n=async(e,t,i)=>{try{return(await fetch(t,{method:"PUT",headers:{"Content-Type":"".concat(i,"/*"),"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}}},75582:function(e,t,i){"use strict";i.d(t,{default:function(){return I}});var n=i(59533),r=i(31229),a=i(26175),l=i(47867),s=i(89749),o=i(23524),c=i(66431),d=i(28095),u=i(72860),m=i.n(u),h=i(19880),g=i(65841),p=i(51480),x=i(5870),f=i(45336),v=i(81770),j=i(72718),Z=i(20526),b=i(76399),C=i(29349),y=i(76422),w=i(12895),N=e=>{var t;let{setGlobalMsg:i}=(0,w.q)(),{open:a,handleClose:o,categoryData:u,setData:m,loading:h,setLoading:g}=e,[p]=(0,b.D)(C.hq),[N]=(0,b.D)(C.Sf),[S,P]=(0,r.useState)(""),k=(0,r.useRef)(null),{control:F,reset:E,handleSubmit:_,formState:{errors:M}}=(0,Z.cI)({defaultValues:{title:"",description:""}}),D=async e=>{try{g(!0);let t=await N({variables:{content_type:"image",folder:"quotations"}}),n=await (0,j.c)(S[0],t.data.getFileUploadUrl.fileUploadUrl,"image"),r=await p({variables:{data:{title:e.title,image_url:n}}});g(!1),m([...u,r.data.insert_product_categories_one]),R(),i("➕ Added New Category")}catch(e){console.log("Error ",e)}},R=()=>{o(),E({title:"",description:""}),P("")};return console.log("rile name ",S),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.ZP,{open:a,anchor:"right",variant:"temporary",onClose:R,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,n.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,n.jsx)(d.Z,{variant:"h5",children:"Add Category"}),(0,n.jsx)(s.Z,{size:"small",onClick:R,children:(0,n.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,n.jsx)(f.Z,{}),(0,n.jsx)("div",{className:"p-5",children:(0,n.jsxs)("form",{onSubmit:_(e=>D(e)),className:"flex flex-col gap-5",children:[(0,n.jsx)(Z.Qr,{name:"title",control:F,rules:{required:!0},render:e=>{let{field:t}=e;return(0,n.jsx)(c.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...M.title&&{error:!0,helperText:"This field is required."}})}}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)(c.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:null===(t=S[0])||void 0===t?void 0:t.name,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:S?(0,n.jsx)(v.Z,{position:"end",children:(0,n.jsx)(s.Z,{size:"small",edge:"end",onClick:()=>P(""),children:(0,n.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,n.jsxs)(l.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,n.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&P(t)},ref:k})]})]}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)(l.Z,{variant:"contained",type:"submit",loading:h,children:"Add"}),(0,n.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:R,children:"Discard"})]})]})})]}),(0,n.jsx)(y.Z,{})]})};i(79505);var S=i(67875),P=i.n(S),k=i(17848),F=i(31029),E=e=>{let{setGlobalMsg:t}=(0,w.q)(),{open:i,handleClose:a,categoryData:o,setData:u,loading:m,setLoading:h}=e,[g]=(0,b.D)(C.bc),[p]=(0,b.D)(C.Sf),[v,N]=(0,r.useState)(),[S,P]=(0,r.useState)(),k=(0,r.useRef)(null),{control:F,reset:E,handleSubmit:_,formState:{errors:M}}=(0,Z.cI)({defaultValues:{title:""}}),D=async e=>{try{h(!0);let i=o.image_url;if(v&&v!==(null==o?void 0:o.image_url)){let{data:e}=await p({variables:{content_type:"image",folder:"products"}});i=await (0,j.c)(v,e.getFileUploadUrl.fileUploadUrl,"image")}let n=await g({variables:{id:null==o?void 0:o.id,data:{title:e.title,image_url:i}}});u(e=>e.map(e=>e.id===(null==o?void 0:o.id)?{...e,...n.data.update_product_categories_by_pk}:e)),R(),t("➕ Category has been updated")}catch(e){console.log("Error ",e)}};(0,r.useEffect)(()=>{o&&(P(null==o?void 0:o.image_url),E({title:o.title}),N(o.image_url||""))},[o,E]);let R=()=>{a(),E({title:"",description:""}),N("")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.ZP,{open:i,anchor:"right",variant:"temporary",onClose:R,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,n.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,n.jsx)(d.Z,{variant:"h5",children:"Edit Category"}),(0,n.jsx)(s.Z,{size:"small",onClick:R,children:(0,n.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,n.jsx)(f.Z,{}),(0,n.jsx)("div",{className:"p-5",children:(0,n.jsxs)("form",{onSubmit:_(e=>D(e)),className:"flex flex-col gap-5",children:[(0,n.jsx)(Z.Qr,{name:"title",control:F,rules:{required:!0},render:e=>{let{field:t}=e;return(0,n.jsx)(c.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...M.title&&{error:!0,helperText:"This field is required."}})}}),(0,n.jsx)("div",{className:"flex items-center gap-4",children:(0,n.jsx)("input",{type:"file",id:"contained-button-file",onChange:e=>{let{files:t}=e.target;if(t&&t.length>0){let e=t[0];N(e),P(URL.createObjectURL(e))}},ref:k})}),S&&(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)("img",{src:S,alt:"Preview",style:{width:"100%",borderRadius:"4px"}})}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)(l.Z,{variant:"contained",type:"submit",loading:m,children:"Edit"}),(0,n.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:R,children:"Discard"})]})]})})]}),(0,n.jsx)(y.Z,{})]})},_=i(66967),M=i(83338);let D=(e,t,i,n)=>{let r=(0,h.O4)(e.getValue(t),i);return n({itemRank:r}),r.passed},R=e=>{let{value:t,onChange:i,debounce:a=500,...l}=e,[s,o]=(0,r.useState)(t);return(0,r.useEffect)(()=>{o(t)},[t]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{i(s)},a);return()=>clearTimeout(e)},[s]),(0,n.jsx)(c.Z,{...l,value:s,onChange:e=>o(e.target.value),size:"small"})},A=(0,g.Cl)();var I=()=>{let{setGlobalMsg:e}=(0,w.q)(),{data:t}=(0,k.kJ)(F.C9),[i,c]=(0,r.useState)(!1),[u,h]=(0,r.useState)(!1),[x,f]=(0,r.useState)({}),[v,j]=(0,r.useState)(t.product_categories),[Z,b]=(0,r.useState)(""),[C,y]=(0,r.useState)(!1),[S,I]=(0,r.useState)(),z=(e,t,i)=>({children:e,color:t,variant:i}),q=(0,r.useMemo)(()=>[A.accessor("title",{header:"Categories",cell:e=>{let{row:t}=e;return(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)("img",{src:t.original.image_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,n.jsxs)("div",{className:"flex flex-col items-start",children:[(0,n.jsx)(d.Z,{className:"font-medium",color:"text.primary",children:t.original.title}),(0,n.jsx)(d.Z,{variant:"body2",children:t.original.description})]})]})}}),A.accessor("products_aggregate.aggregate.count",{header:"Total Products",cell:e=>{var t,i,r,a;let{row:l}=e;return(0,n.jsx)(d.Z,{children:null==l?void 0:null===(a=l.original)||void 0===a?void 0:null===(r=a.products_aggregate)||void 0===r?void 0:null===(i=r.aggregate)||void 0===i?void 0:null===(t=i.count)||void 0===t?void 0:t.toLocaleString()})}}),A.accessor("created_at",{header:"Date",cell:e=>{let{row:t}=e;return(0,n.jsx)(d.Z,{children:t.original.created_at.substring(0,10)})}}),A.accessor("actions",{header:"Actions",cell:e=>{let{row:t}=e;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(s.Z,{size:"small",onClick:()=>{h(!u),I(t.original)},children:(0,n.jsx)("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),(0,n.jsx)(_.default,{element:l.Z,elementProps:z((0,n.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:M.Z,dialogProps:{type:"deleteProductCategory"},dataId:t.original.id,setData:j,data:v})]})},enableSorting:!1})],[v]),O=(0,p.b7)({data:v,columns:q,filterFns:{fuzzy:D},state:{rowSelection:x,globalFilter:Z},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:D,onRowSelectionChange:f,getCoreRowModel:(0,g.sC)(),onGlobalFilterChange:b,getFilteredRowModel:(0,g.vL)(),getSortedRowModel:(0,g.tj)(),getPaginationRowModel:(0,g.G_)(),getFacetedRowModel:(0,g.o6)(),getFacetedUniqueValues:(0,g.JG)(),getFacetedMinMaxValues:(0,g.HO)()});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[(0,n.jsx)(R,{value:null!=Z?Z:"",onChange:e=>b(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,n.jsx)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:(0,n.jsx)(l.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>c(!i),startIcon:(0,n.jsx)("i",{className:"ri-add-line"}),children:"Add Category"})})]}),(0,n.jsx)("div",{className:"overflow-x-auto",children:(0,n.jsxs)("table",{className:P().table,children:[(0,n.jsx)("thead",{children:O.getHeaderGroups().map(e=>(0,n.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,n.jsx)("th",{children:e.isPlaceholder?null:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,p.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,n.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,n.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===O.getFilteredRowModel().rows.length?(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:O.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,n.jsx)("tbody",{children:O.getRowModel().rows.slice(0,O.getState().pagination.pageSize).map(e=>(0,n.jsx)("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,n.jsx)("td",{children:(0,p.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,n.jsx)(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:O.getFilteredRowModel().rows.length,rowsPerPage:O.getState().pagination.pageSize,page:O.getState().pagination.pageIndex,onPageChange:(e,t)=>{O.setPageIndex(t)},onRowsPerPageChange:e=>O.setPageSize(Number(e.target.value))})]}),(0,n.jsx)(N,{open:i,categoryData:v,setData:j,loading:C,setLoading:y,handleClose:()=>c(!i)}),(0,n.jsx)(E,{open:u,categoryData:S,setData:j,loading:C,setLoading:y,handleClose:()=>h(!u)})]})}}},function(e){e.O(0,[3307,8869,1055,4214,9253,4637,313,6431,7814,9276,9415,7020,2163,1559,7957,5841,7952,2173,285,4076,5870,1325,1029,4240,4170,6842,1744],function(){return e(e.s=83410)}),_N_E=e.O()}]);