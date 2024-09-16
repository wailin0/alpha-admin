(()=>{var e={};e.id=1871,e.ids=[1871],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},27311:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>o}),t(23327),t(88418),t(10634),t(35866);var a=t(23191),s=t(88716),i=t(37922),n=t.n(i),l=t(95231),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);t.d(r,d);let o=["",{children:["[lang]",{children:["(dashboard)",{children:["products",{children:["details",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,23327)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\products\\details\\[id]\\page.jsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,88418)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,10634)),"D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\ALPHA PROJECT\\Admin Dashboard\\alpha-admin\\src\\app\\[lang]\\(dashboard)\\products\\details\\[id]\\page.jsx"],m="/[lang]/(dashboard)/products/details/[id]/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/products/details/[id]/page",pathname:"/[lang]/products/details/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},38011:(e,r,t)=>{Promise.resolve().then(t.bind(t,87663))},87663:(e,r,t)=>{"use strict";t.d(r,{default:()=>E});var a=t(10326),s=t(32634);t(92474),t(4099);var i=t(29084),n=t(24443),l=t(17577),d=t(76865),o=t(19518),c=t(67461),m=t(84187),u=t(25609);t(48029);var p=t(11798);t(81547),t(89307);var x=t(87700),h=t(19074),j=t(53913),g=t(48260),v=t(918),f=t(37841),b=t(56390),P=t(78077),y=t(99207),Z=t(74723),_=t(18753),N=t(84875),A=t(5330),D=t(36238);let C=e=>{let{setGlobalMsg:r}=(0,d.q)(),{open:t,handleClose:s,discountData:o,loading:c,setLoading:m,setData:p}=e,[C]=(0,_.D)(n.Lh,{refetchQueries:[i.ef]}),[q,w]=(0,l.useState)(),[T,S]=(0,l.useState)(),{data:k}=(0,N.kJ)(i.pR),[E,M]=(0,l.useState)("");(0,l.useRef)(null);let{control:R,reset:L,handleSubmit:J,formState:{errors:O}}=(0,Z.cI)({defaultValues:{}}),G=async e=>{try{m(!0);let t=await C({variables:{data:{min_order:Number(e.min_order),customer_type:T,discounted_value:Number(e.discounted_value),product_id:o?.id}}});m(!1),p(t.data.insert_product_discounts_one),H(),r("➕ Added New Product Discount")}catch(e){console.log("Error ",e)}},H=()=>{s(),L({title:"",description:""}),M("")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h.ZP,{open:t,anchor:"right",variant:"temporary",onClose:H,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[a.jsx(u.Z,{variant:"h5",children:"Add Discount"}),a.jsx(g.Z,{size:"small",onClick:H,children:a.jsx("i",{className:"ri-close-line text-2xl"})})]}),a.jsx(y.Z,{}),a.jsx("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:J(e=>G(e)),className:"flex flex-col gap-5",children:[a.jsx(Z.Qr,{name:"min_order",control:R,rules:{required:!0},render:({field:e})=>a.jsx(P.Z,{...e,fullWidth:!0,type:"number",label:"Minimal Order",placeholder:"",...O.min_order&&{error:!0,helperText:"This field is required."}})}),a.jsx(Z.Qr,{name:"discounted_value",control:R,rules:{required:!0},render:({field:e})=>a.jsx(P.Z,{...e,fullWidth:!0,type:"number",label:"Discounted Value",placeholder:"",...O.discounted_value&&{error:!0,helperText:"This field is required."}})}),(0,a.jsxs)(j.Z,{fullWidth:!0,children:[a.jsx(v.Z,{children:"Select User Role"}),a.jsx(b.Z,{label:"Select Vendor",value:T,onChange:e=>S(e.target.value),children:k?.user_roles?.map((e,r)=>a.jsx(f.Z,{value:e?.role_name,children:e?.role_name},r))}),a.jsx(D.Z,{sx:{color:"red"},children:O?.role_name})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[a.jsx(x.Z,{variant:"contained",type:"submit",loading:c,children:"Add"}),a.jsx(x.Z,{variant:"outlined",color:"error",type:"reset",onClick:H,children:"Discard"})]})]})})]}),a.jsx(A.Z,{})]})};var q=t(70178);(0,p.Cl)();let w=({productData:e})=>{let[r,t]=(0,l.useState)(!1),[s,i]=(0,l.useState)(!1),[n,d]=(0,l.useState)(e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Z,{children:[a.jsx(c.Z,{title:"Product Details",action:a.jsx(a.Fragment,{children:a.jsx(x.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>i(!s),startIcon:a.jsx("i",{className:"ri-add-line"}),children:"Discount"})})}),a.jsx(m.Z,{className:"flex ",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex items-center gap-12 ",children:[a.jsx(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Name :"}),a.jsx(u.Z,{color:"text.primary",className:"font-medium",children:e?.title})]}),(0,a.jsxs)("div",{className:"flex items-center gap-12 mt-3",children:[a.jsx(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Brand :"}),a.jsx(u.Z,{color:"text.primary",className:"font-medium",children:e?.brand?.title})]}),(0,a.jsxs)("div",{className:"flex items-center gap-12 mt-3",children:[a.jsx(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Serial Number :"}),a.jsx(u.Z,{color:"text.primary",className:"font-medium",children:e.serial_number})]}),(0,a.jsxs)("div",{className:"flex items-center gap-12 mt-3",children:[a.jsx(u.Z,{color:"text.primary",className:"font-medium min-is-[100px]",children:"Category :"}),a.jsx(u.Z,{color:"text.primary",className:"font-medium",children:e?.product_category?.title})]}),(0,a.jsxs)("div",{className:"flex items-center gap-12 mt-3",children:[a.jsx(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Description :"}),a.jsx(u.Z,{color:"text.primary",className:"font-medium",children:e?.description})]})]})}),a.jsx(C,{open:s,discountData:e,setData:d,loading:r,setLoading:t,handleClose:()=>i(!s)})]}),a.jsx(q.Z,{productData:n})]})};var T=t(91703),S=t(87164);(0,T.ZP)(S.Z)({paddingLeft:0,paddingRight:0,"& .MuiTimelineItem-root":{width:"100%","&:before":{display:"none"},"& .MuiTimelineContent-root:last-child":{paddingBottom:0},"&:nth-last-child(2) .MuiTimelineConnector-root":{backgroundColor:"transparent",borderInlineStart:"1px dashed var(--mui-palette-divider)"},"& .MuiTimelineConnector-root":{backgroundColor:"var(--mui-palette-primary-main)"}}}),t(40529),t(72501),t(31094);var k=t(35047);let E=()=>{let{id:e}=(0,k.useParams)(),{data:r}=(0,N.kJ)(i.yZ,{variables:{id:e}}),t=r?.products_by_pk;return a.jsx(s.ZP,{container:!0,spacing:6,children:a.jsx(s.ZP,{item:!0,xs:12,md:12,children:a.jsx(s.ZP,{container:!0,spacing:6,children:a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(w,{productData:t})})})})})}},23327:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var a=t(19510);t(58585);var s=t(68570);let i=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\products\details\index.jsx`),{__esModule:n,$$typeof:l}=i;i.default;let d=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\Admin Dashboard\alpha-admin\src\views\products\details\index.jsx#default`),o=async()=>a.jsx(d,{})}};var r=require("../../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[8948,4471,4674,4366,8522,8077,4313,2825,1994,1798,8117,4723,9074,5684,3054,7115,3954,6860,7251,9345,2745,178],()=>t(27311));module.exports=a})();