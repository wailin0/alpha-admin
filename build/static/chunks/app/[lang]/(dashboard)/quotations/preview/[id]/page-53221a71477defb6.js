(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6926],{15399:function(e,t,n){Promise.resolve().then(n.bind(n,23022))},64825:function(e,t,n){"use strict";n.d(t,{J:function(){return c},SettingsProvider:function(){return d}});var i=n(59533),r=n(31229),s=n(23310),a=n(13231),l=n(75443);let o=(e,t)=>{let[n,i]=(0,l.Z)(e);return[(0,r.useMemo)(()=>n?JSON.parse(n):t,[n]),e=>{i(JSON.stringify(e))}]},c=(0,r.createContext)(null),d=e=>{let t={mode:s.Z.mode,skin:s.Z.skin,semiDark:s.Z.semiDark,layout:s.Z.layout,navbarContentWidth:s.Z.navbar.contentWidth,contentWidth:s.Z.contentWidth,footerContentWidth:s.Z.footer.contentWidth,primaryColor:a.Z[0].main},n={...t,mode:e.mode||s.Z.mode},[l,d]=o(s.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:n),[u,h]=(0,r.useState)("{}"!==JSON.stringify(l)?l:n),x=(e,t)=>{let{updateCookie:n=!0}=t||{};h(t=>{let i={...t,...e};return n&&d(i),i})},m=(0,r.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(u),[u]);return(0,i.jsx)(c.Provider,{value:{settings:u,updateSettings:x,isSettingsChanged:m,resetSettings:()=>{x(t)},updatePageSettings:e=>(x(e,{updateCookie:!1}),()=>x(l,{updateCookie:!1}))},children:e.children})}},59787:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var i=n(31229),r=n(64825);let s=()=>{let e=(0,i.useContext)(r.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},77173:function(e,t,n){"use strict";n.d(t,{VerticalNavProvider:function(){return a}});var i=n(59533),r=n(31229);let s=(0,r.createContext)({}),a=e=>{let{children:t}=e,[n,a]=(0,r.useState)(),l=(0,r.useCallback)(e=>{a(t=>({...t,...e,collapsing:!0===e.isCollapsed,expanding:!1===e.isCollapsed}))},[]),o=(0,r.useCallback)(e=>{a(t=>({...t,isHovered:void 0!==e&&!1,isCollapsed:void 0!==e?!!e:!(null==t?void 0:t.isCollapsed),collapsing:!0===e,expanding:!0!==e}))},[]),c=(0,r.useCallback)(e=>{a(t=>({...t,isHovered:void 0!==e?!!e:!(null==t?void 0:t.isHovered)}))},[]),d=(0,r.useCallback)(e=>{a(t=>({...t,isToggled:void 0!==e?!!e:!(null==t?void 0:t.isToggled)}))},[]),u=(0,r.useMemo)(()=>({...n,updateVerticalNavState:l,collapseVerticalNav:o,hoverVerticalNav:c,toggleVerticalNav:d}),[n,l,o,c,d]);return(0,i.jsx)(s.Provider,{value:u,children:t})};t.Z=s},82293:function(e,t,n){"use strict";var i=n(31229),r=n(77173);t.Z=()=>{let e=(0,i.useContext)(r.Z);if(void 0===e)throw Error("VerticalNav Component is required!");return e}},12895:function(e,t,n){"use strict";n.d(t,{ApolloWrapper:function(){return x},q:function(){return h}});var i=n(59533),r=n(50421),s=n(73079),a=n(41502),l=n(17856),o=n(31229);let c=(0,o.createContext)();function d(){let e=new s.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),t=(0,l.v)(async(e,t)=>{let{headers:n}=t;try{return{headers:{...n,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:n}}});return new a.fe({cache:new a.h4,link:u.concat(t).concat(e)})}let u=(0,r.q)(e=>{let{graphQLErrors:t,networkError:n}=e;t&&(console.log("graphql",t),t.forEach(e=>{let{extensions:t}=e;("invalid-headers"===t.code||"invalid-jwt"===t.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),n&&(console.log("[Network error]: ".concat(n)),alert("network connection problem"))}),h=()=>(0,o.useContext)(c);function x(e){let{children:t}=e,[n,r]=(0,o.useState)(null),[s,l]=(0,o.useState)(!1);return(0,i.jsx)(a.e$,{makeClient:d,children:(0,i.jsx)(c.Provider,{value:{globalMsg:n,setGlobalMsg:r,loading:s,setLoading:l},children:t})})}},76422:function(e,t,n){"use strict";var i=n(59533);n(31229);var r=n(36772),s=n(12895);t.Z=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,s.q)();return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},42648:function(e,t,n){"use strict";n.d(t,{Pg:function(){return l},c7:function(){return r},sE:function(){return a},uH:function(){return i},zh:function(){return s}});let i={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},r={pending:"warning",completed:"success",accepted:"info",rejected:"error",negotiation:"primary"},s={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},a={paid:"secondary","partially paid":"info",rejected:"error",unpaid:"primary",pending:"warning"},l={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},72126:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(42541),r=n(59533),s=n(31229),a=n(93077),l=n(23310),o=n(82293),c=n(59787),d=n(68197),u={src:"/_next/static/media/logo.d5ae22de.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAr4P/xAAbEAEAAgIDAAAAAAAAAAAAAAABAhEAAwQTYf/aAAgBAQABPwCRuORGQy6yxKKfc//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8};function h(){let e=(0,i._)(["\n  color: ",";\n  font-size: 1.25rem;\n  line-height: 1.2;\n  font-weight: 600;\n  letter-spacing: 0.15px;\n  text-transform: uppercase;\n  transition: ",";\n\n  ","\n"]);return h=function(){return e},e}let x=a.Z.span(h(),e=>{let{color:t}=e;return null!=t?t:"var(--mui-palette-text-primary)"},e=>{let{transitionDuration:t}=e;return"margin-inline-start ".concat(t,"ms ease-in-out, opacity ").concat(t,"ms ease-in-out")},e=>{let{isHovered:t,isCollapsed:n,isBreakpointReached:i}=e;return i||!n||t?"opacity: 1; margin-inline-start: 10px;":"opacity: 0; margin-inline-start: 0;"});var m=e=>{let{color:t}=e,n=(0,s.useRef)(null),{isHovered:i,transitionDuration:a,isBreakpointReached:h}=(0,o.Z)(),{settings:m}=(0,c.r)(),{layout:p}=m;return(0,s.useEffect)(()=>{if("collapsed"===p&&n&&n.current){if(h||"collapsed"!==p||i)n.current.classList.remove("hidden");else{var e;null===(e=n.current)||void 0===e||e.classList.add("hidden")}}},[i,p,h]),(0,r.jsxs)("div",{className:"flex items-center min-bs-[24px]",children:[(0,r.jsx)(d.default,{src:u,width:42,height:42,className:"rounded-full bg-contain",placeholder:"blur",alt:"logo"}),(0,r.jsx)(x,{color:t,ref:n,isHovered:i,isCollapsed:"collapsed"===p,transitionDuration:a,isBreakpointReached:h,children:l.Z.templateName})]})}},13231:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/user/list",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},20397:function(e,t,n){"use strict";n.d(t,{Z:function(){return d},c:function(){return c}});let i=["/en/dashboards","/en/products","/en/user","/en/orders","/en/news","/en/services","/en/service_token","/en/invoice","/en/quotations","/en/admin","/en/service_center"],r=["/en/dashboards","/en/products","/en/services","/en/service_center","/en/news"],s=["/en/dashboards","/en/orders","/en/invoice","/en/quotations"],a=["/en/dashboards","/en/services","/en/service_token","/en/invoice"],l=["/en/dashboards","/en/orders"],o=["/en/dashboards","/en/orders","/en/invoice"],c=async(e,t,n)=>{try{return(await fetch(t,{method:"PUT",headers:{"Content-Type":"".concat(n,"/*"),"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}},d=(e,t)=>!!("admin"===e&&i.includes("/en/"+t)||"manager"===e&&r.includes("/en/"+t)||"service"===e&&a.includes("/en/"+t)||"sale"===e&&s.includes("/en/"+t))||!!("delivery"===e&&l.includes("/en/"+t))||!!("finance"===e&&o.includes("/en/"+t))},23022:function(e,t,n){"use strict";n.d(t,{default:function(){return R}});var i=n(59533),r=n(91771),s=n(31229),a=n(61250),l=n(29900),o=n(76778),c=n(54323),d=n(88363),u=n(84448),h=n(84323),x=n(82597),m=n(48111),p=n(20526),f=n(45641),A=n(29349),j=n(20397),v=n(12895),g=n(20593),y=n(76422),Z=e=>{let{open:t,handleClose:n,quotationData:r}=e,[a,o]=(0,s.useState)(),[c]=(0,f.D)(A.Sf),[y]=(0,f.D)(A.BM),{setGlobalMsg:Z}=(0,v.q)(),b=(0,s.useRef)(null),{control:C,reset:N,handleSubmit:w,formState:{errors:k}}=(0,p.cI)({defaultValues:{title:"",description:""}}),S=async e=>{try{let e=await c({variables:{content_type:"pdf",folder:"quotations"}}),t=await (0,j.c)(a[0],e.data.getFileUploadUrl.fileUploadUrl,"image"),n=await y({variables:{quotation_id:r.id,quotation_file_url:t}});console.log("res ",n),o(""),Z("✅ Send Quotation file suceessful")}catch(e){Z("❌ Send file error")}},_=()=>{o(""),n()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.ZP,{open:t,anchor:"right",variant:"temporary",onClose:_,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,i.jsx)(h.Z,{variant:"h5",children:"Send Quotation File"}),(0,i.jsx)(u.Z,{size:"small",onClick:()=>{n()},children:(0,i.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,i.jsx)(m.Z,{}),(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:w(e=>S(e)),className:"flex flex-col gap-5",children:[(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(x.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:a?a[0].name:"",className:"flex-auto",InputProps:{readOnly:!0,endAdornment:a?(0,i.jsx)(g.Z,{position:"end",children:(0,i.jsx)(u.Z,{size:"small",edge:"end",onClick:()=>setFileName(""),children:(0,i.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,i.jsxs)(l.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,i.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&o(t)},ref:b})]})]}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(l.Z,{variant:"contained",type:"submit",children:"Add"}),(0,i.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:_,children:"Discard"})]})]})})]})})},b=e=>{let{open:t,handleClose:n,quotationData:r}=e,[a,o]=(0,s.useState)(),[c]=(0,f.D)(A.Sf),[j]=(0,f.D)(A.KN),{setGlobalMsg:g}=(0,v.q)();(0,s.useRef)(null);let{control:Z,reset:b,handleSubmit:C,formState:{errors:N}}=(0,p.cI)({defaultValues:{title:"",description:""}}),w=async e=>{try{await j({variables:{quotation_id:r.id,discounted_amount:e.price}}),g("✅ Send Quotation Invoice file suceessful")}catch(e){g("❌ Send file error")}},k=()=>{b({price:""}),n()};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.ZP,{open:t,anchor:"right",variant:"temporary",onClose:k,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,i.jsx)(h.Z,{variant:"h5",children:"Send Invoice "}),(0,i.jsx)(u.Z,{size:"small",onClick:()=>{n()},children:(0,i.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,i.jsx)(m.Z,{}),(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:C(e=>w(e)),className:"flex flex-col gap-5",children:[(0,i.jsx)(p.Qr,{name:"price",control:Z,rules:{required:!0},render:e=>{let{field:t}=e;return(0,i.jsx)(x.Z,{...t,fullWidth:!0,type:"number",label:"Amount",placeholder:"Enter discounted Amount",...N.price&&{error:!0,helperText:"This field is required."}})}}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(l.Z,{variant:"contained",type:"submit",children:"Send"}),(0,i.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:k,children:"Discard"})]})]})})]}),(0,i.jsx)(y.Z,{})]})},C=n(11114),N=e=>{let{open:t,handleClose:n,quotationData:r}=e,[a,o]=(0,s.useState)(),[c]=(0,f.D)(A.Sf),[y]=(0,f.D)(A.BM),{setGlobalMsg:Z,loading:b,setLoading:N}=(0,v.q)(),w=(0,s.useRef)(null),{control:k,reset:S,handleSubmit:_,formState:{errors:D}}=(0,p.cI)({defaultValues:{title:"",description:""}}),P=async e=>{try{N(!0);let e=await c({variables:{content_type:"pdf",folder:"quotations"}}),t=await (0,j.c)(a[0],e.data.getFileUploadUrl.fileUploadUrl,"image");await y({variables:{quotation_id:r.id,quotation_file_url:t}}),o(""),Z("✅ Send Quotation file suceessful"),N(!1)}catch(e){Z("❌ ".concat(e.message))}},q=()=>{o(""),n()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.ZP,{open:t,anchor:"right",variant:"temporary",onClose:q,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,i.jsx)(h.Z,{variant:"h5",children:"Send Quotation File"}),(0,i.jsx)(u.Z,{size:"small",onClick:()=>{n()},children:(0,i.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,i.jsx)(m.Z,{}),(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:_(e=>P(e)),className:"flex flex-col gap-5",children:[(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(x.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:a?a[0].name:"",className:"flex-auto",InputProps:{readOnly:!0,endAdornment:a?(0,i.jsx)(g.Z,{position:"end",children:(0,i.jsx)(u.Z,{size:"small",edge:"end",onClick:()=>setFileName(""),children:(0,i.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,i.jsxs)(l.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,i.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&o(t)},ref:w})]})]}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(C.Z,{variant:"contained",type:"submit",children:"Add"}),(0,i.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:q,children:"Discard"})]})]})})]})})},w=e=>{let{id:t,onButtonClick:n,quotationData:r}=e,[d,u]=(0,s.useState)(!1),[h,x]=(0,s.useState)(!1),[m,p]=(0,s.useState)(!1),[f,A]=(0,s.useState)(!1),{lang:j}=(0,a.useParams)();return(0,i.jsxs)(i.Fragment,{children:[((null==r?void 0:r.status)==="negotiation"||(null==r?void 0:r.status)==="accepted")&&(0,i.jsx)(o.Z,{children:(0,i.jsx)(c.Z,{className:"flex flex-col gap-4",children:(0,i.jsx)(l.Z,{fullWidth:!0,color:"success",variant:"contained",className:"capitalize",startIcon:(0,i.jsx)("i",{className:"ri-send-plane-line"}),onClick:()=>x(!0),children:"Send Quotation File"})})}),(0,i.jsx)(N,{open:h,handleClose:()=>x(!1),quotationData:r}),(0,i.jsx)(b,{open:f,handleClose:()=>A(!1),quotationData:r}),(0,i.jsx)(Z,{open:m,handleClose:()=>p(!1),quotationData:r})]})},k=n(72126),S=n(67875),_=n.n(S);n(23825);var D=n(31029),P=n(21467),q=n(42648),Q=e=>{var t,n,s,a;let{quotationData:l}=e;return(0,i.jsx)(o.Z,{className:"previewCard",children:(0,i.jsx)(c.Z,{className:"sm:!p-12",children:(0,i.jsxs)(r.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,children:(0,i.jsx)("div",{className:"p-6 bg-actionHover rounded",children:(0,i.jsxs)("div",{className:"flex justify-between gap-y-4 flex-col sm:flex-row",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsx)(k.Z,{})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{color:"text.primary",children:"No. 297, Marlar Myaing Street,"}),(0,i.jsx)(h.Z,{color:"text.primary",children:"Tharkayta Industrial Zone,"}),(0,i.jsx)(h.Z,{color:"text.primary",children:"Yangon, Myanmar"}),(0,i.jsx)(h.Z,{color:"text.primary",children:"09- 428 694 996 09- 762 509 157"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,i.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,i.jsx)(h.Z,{variant:"h5",children:"Quotation"}),(0,i.jsx)(P.Z,{label:null==l?void 0:l.status,color:q.c7[l.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsxs)(h.Z,{color:"text.primary",children:["Quotation Number : ",null==l?void 0:l.quotation_number]}),(0,i.jsxs)(h.Z,{color:"text.primary",children:["Due Date : ",new Date(null==l?void 0:l.updated_at).toLocaleDateString()]})]})]})]})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,children:(0,i.jsx)(r.ZP,{container:!0,spacing:6,children:(0,i.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,i.jsx)(h.Z,{className:"font-medium",color:"text.primary",children:"Delivery Address To:"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{children:null==l?void 0:null===(n=l.user)||void 0===n?void 0:null===(t=n.orders[0])||void 0===t?void 0:t.receiver_name}),(0,i.jsx)(h.Z,{className:"my-1",children:null==l?void 0:null===(s=l.user.orders[0])||void 0===s?void 0:s.receiver_phone}),(0,i.jsx)(h.Z,{children:null==l?void 0:null===(a=l.user.orders[0])||void 0===a?void 0:a.receiver_address})]})]})})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,children:(0,i.jsx)("div",{className:"overflow-x-auto border rounded",children:(0,i.jsxs)("table",{className:_().table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"border-be",children:[(0,i.jsx)("th",{className:"!bg-transparent",children:"Product"}),(0,i.jsx)("th",{className:"!bg-transparent",children:"Brand"}),(0,i.jsx)("th",{className:"!bg-transparent",children:"Price"}),(0,i.jsx)("th",{className:"!bg-transparent",children:"Qty"})]})}),(0,i.jsx)("tbody",{children:null==l?void 0:l.quotation_items.map((e,t)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(h.Z,{color:"text.primary",className:"w-60 text-wrap",children:e.product.title})}),(0,i.jsx)("td",{children:(0,i.jsx)(h.Z,{color:"text.primary",children:e.product.brand.title})}),(0,i.jsx)("td",{children:(0,i.jsx)(h.Z,{color:"text.primary",children:e.product.price})}),(0,i.jsx)("td",{children:(0,i.jsx)(h.Z,{color:"text.primary",children:e.quantity})})]},t))})]})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,children:(0,i.jsx)("div",{className:"flex justify-end flex-col gap-y-4 sm:flex-row"})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,children:(0,i.jsx)(m.Z,{className:"border-dashed"})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,children:(0,i.jsxs)(h.Z,{children:[(0,i.jsxs)(h.Z,{component:"span",className:"font-medium",color:"text.primary",children:["Dealer Remark :"," "]}),l.dealer_remark?l.dealer_remark:" - "]})})]})})})},E=n(83354),F=n(34755),B=n(8957),I=n(5443),M=e=>{let{quotationData:t}=e,{setGlobalMsg:n}=(0,v.q)(),[r,a]=(0,s.useState)(!1),[o]=(0,f.D)(A.yG,{refetchQueries:[D._n]}),[c]=(0,f.D)(A.KN,{refetchQueries:[D._n]}),d=async(e,t)=>{try{await o({variables:{quotation_id:e,status:t}}),n("✅ Change Quotation Status")}catch(e){console.log("Change Status Error ",e)}};return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(l.Z,{variant:"outlined",color:"primary",size:"large",fullWidth:!0,onClick:()=>d(null==t?void 0:t.id,"negotiation"),children:"Negotiate"})}),(0,i.jsxs)("div",{className:"flex  justify-center gap-3 mt-4",children:[(0,i.jsx)(l.Z,{variant:"outlined",color:"info",size:"large",onClick:async()=>{await c({variables:{quotation_id:t.id}}),n("✅ Quotation Accepted")},children:"Accepted"}),(0,i.jsx)(l.Z,{variant:"outlined",className:"text-error",onClick:()=>{a(!0)},children:"Reject"})]}),(0,i.jsx)("div",{children:(0,i.jsxs)(E.Z,{fullWidth:"md",open:r,onClose:()=>a(!1),PaperProps:{component:"form",onSubmit:async e=>{e.preventDefault();let i=Object.fromEntries(new FormData(e.currentTarget).entries()).rejected_reason;await o({variables:{quotation_id:null==t?void 0:t.id,status:"rejected",rejected_reason:i}}),n("✅ Reject reason send successfull"),a(!1)}},children:[(0,i.jsx)(F.Z,{children:"Reject Reason"}),(0,i.jsx)(B.Z,{children:(0,i.jsx)(x.Z,{multiline:!0,autoFocus:!0,margin:"dense",id:"rejected_reason",name:"rejected_reason",label:"Reason",fullWidth:!0,variant:"standard"})}),(0,i.jsxs)(I.Z,{children:[(0,i.jsx)(l.Z,{color:"error",onClick:()=>a(!1),children:"Cancel"}),(0,i.jsx)(l.Z,{color:"success",type:"submit",children:"OK"})]})]})}),(0,i.jsx)(y.Z,{})]})},W=n(40877),R=()=>{let{id:e}=(0,a.useParams)(),{data:t}=(0,W.kJ)(D._n,{variables:{id:e}});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:9,children:(0,i.jsx)(Q,{quotationData:null==t?void 0:t.quotations_by_pk})}),(0,i.jsxs)(r.ZP,{item:!0,xs:12,md:3,className:"flex flex-col gap-5",children:[(0,i.jsx)(M,{quotationData:null==t?void 0:t.quotations_by_pk}),(0,i.jsx)(w,{onButtonClick:()=>{window.print()},quotationData:null==t?void 0:t.quotations_by_pk})]})]})})}},23825:function(){},67875:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[3307,9323,6086,2599,1378,8190,5266,5029,2597,6479,9276,9124,717,1166,1711,6772,1467,526,8363,3047,8197,8407,1029,9349,4170,6842,1744],function(){return e(e.s=15399)}),_N_E=e.O()}]);