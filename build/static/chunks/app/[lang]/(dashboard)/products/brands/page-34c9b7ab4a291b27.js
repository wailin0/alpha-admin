(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8146],{4555:function(e,t,r){Promise.resolve().then(r.bind(r,20356))},76520:function(e,t,r){"use strict";var a=r(22988),n=r(23950),i=r(2265),l=r(44839),s=r(76990),o=r(48024),c=r(95885),d=r(28027),u=r(8344),m=r(57437);let h=["className","raised"],x=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},u.y,t)},p=(0,o.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=i.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=r,o=(0,n.Z)(r,h),d=(0,a.Z)({},r,{raised:s}),u=x(d);return(0,m.jsx)(p,(0,a.Z)({className:(0,l.Z)(u.root,i),elevation:s?8:void 0,ref:t,ownerState:d},o))});t.Z=g},8344:function(e,t,r){"use strict";r.d(t,{y:function(){return i}});var a=r(72296),n=r(70587);function i(e){return(0,n.ZP)("MuiCard",e)}let l=(0,a.Z)("MuiCard",["root"]);t.Z=l},52326:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var a,n=r(23950),i=r(22988),l=r(2265),s=r(44839),o=r(76990),c=r(12272),d=r(83719),u=r(37920),m=r(88875),h=r(48024),x=r(72296),p=r(70587);function g(e){return(0,p.ZP)("MuiInputAdornment",e)}let f=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v=r(95885),j=r(57437);let y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=e=>{let{classes:t,disablePointerEvents:r,hiddenLabel:a,position:n,size:i,variant:l}=e,s={root:["root",r&&"disablePointerEvents",n&&"position".concat((0,c.Z)(n)),l,a&&"hiddenLabel",i&&"size".concat((0,c.Z)(i))]};return(0,o.Z)(s,g,t)},C=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["position".concat((0,c.Z)(r.position))],!0===r.disablePointerEvents&&t.disablePointerEvents,t[r.variant]]}})(e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===r.variant&&{["&.".concat(f.positionStart,"&:not(.").concat(f.hiddenLabel,")")]:{marginTop:16}},"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})});var Z=l.forwardRef(function(e,t){let r=(0,v.i)({props:e,name:"MuiInputAdornment"}),{children:o,className:c,component:h="div",disablePointerEvents:x=!1,disableTypography:p=!1,position:g,variant:f}=r,Z=(0,n.Z)(r,y),w=(0,m.Z)()||{},P=f;f&&w.variant,w&&!P&&(P=w.variant);let N=(0,i.Z)({},r,{hiddenLabel:w.hiddenLabel,size:w.size,disablePointerEvents:x,position:g,variant:P}),S=b(N);return(0,j.jsx)(u.Z.Provider,{value:null,children:(0,j.jsx)(C,(0,i.Z)({as:h,ownerState:N,className:(0,s.Z)(S.root,c),ref:t},Z,{children:"string"!=typeof o||p?(0,j.jsxs)(l.Fragment,{children:["start"===g?a||(a=(0,j.jsx)("span",{className:"notranslate",children:"​"})):null,o]}):(0,j.jsx)(d.Z,{color:"text.secondary",children:o})}))})})},81128:function(e,t,r){"use strict";r.r(t);var a=r(57437),n=r(2265),i=r(87138),l=r(31655),s=r(91326),o=r(27316),c=r(11656),d=r(42748),u=r(24134),m=r(95635),h=r(28027),x=r(60335),p=r(14595),g=r(56800),f=r.n(g),v=r(92110);let j=e=>{let{tooltipProps:t,children:r}=e;return(null==t?void 0:t.title)?(0,a.jsx)(l.Z,{...t,children:r}):r},y=e=>{let{children:t,option:r}=e;return r.href?(0,a.jsx)(s.Z,{component:i.default,href:r.href,...r.linkProps,children:t}):(0,a.jsx)(a.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:r,iconClassName:i,options:l,leftAlignMenu:s,iconButtonProps:g}=e,[b,C]=(0,n.useState)(!1),Z=(0,n.useRef)(null),{settings:w}=(0,v.r)(),P=e=>{Z.current&&Z.current.contains(e.target)||C(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{tooltipProps:t,children:(0,a.jsx)(x.Z,{ref:Z,size:"small",onClick:()=>{C(e=>!e)},...g,children:"string"==typeof r?(0,a.jsx)("i",{className:f()(r,i)}):r||(0,a.jsx)("i",{className:f()("ri-more-2-line",i)})})}),(0,a.jsx)(o.Z,{open:b,anchorEl:Z.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,a.jsx)(m.Z,{...t,children:(0,a.jsx)(h.Z,{className:"bordered"===w.skin?"border shadow-none":"shadow-lg",children:(0,a.jsx)(u.d,{onClickAway:P,children:(0,a.jsx)(d.Z,{autoFocusItem:b,children:l.map((e,t)=>"string"==typeof e?(0,a.jsx)(c.Z,{onClick:P,children:e},t):"divider"in e?e.divider&&(0,a.jsx)(p.Z,{...e.dividerProps},t):(0,a.jsx)(c.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{P(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,a.jsxs)(y,{option:e,children:[("string"==typeof e.icon?(0,a.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},44156:function(e,t,r){"use strict";r.d(t,{J:function(){return c},SettingsProvider:function(){return d}});var a=r(57437),n=r(2265),i=r(36887),l=r(60625),s=r(97271);let o=(e,t)=>{let[r,a]=(0,s.Z)(e);return[(0,n.useMemo)(()=>r?JSON.parse(r):t,[r]),e=>{a(JSON.stringify(e))}]},c=(0,n.createContext)(null),d=e=>{let t={mode:i.Z.mode,skin:i.Z.skin,semiDark:i.Z.semiDark,layout:i.Z.layout,navbarContentWidth:i.Z.navbar.contentWidth,contentWidth:i.Z.contentWidth,footerContentWidth:i.Z.footer.contentWidth,primaryColor:l.Z[0].main},r={...t,mode:e.mode||i.Z.mode},[s,d]=o(i.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:r),[u,m]=(0,n.useState)("{}"!==JSON.stringify(s)?s:r),h=(e,t)=>{let{updateCookie:r=!0}=t||{};m(t=>{let a={...t,...e};return r&&d(a),a})},x=(0,n.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(u),[u]);return(0,a.jsx)(c.Provider,{value:{settings:u,updateSettings:h,isSettingsChanged:x,resetSettings:()=>{h(t)},updatePageSettings:e=>(h(e,{updateCookie:!1}),()=>h(s,{updateCookie:!1}))},children:e.children})}},92110:function(e,t,r){"use strict";r.d(t,{r:function(){return i}});var a=r(2265),n=r(44156);let i=()=>{let e=(0,a.useContext)(n.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},9188:function(e,t,r){"use strict";r.d(t,{ApolloWrapper:function(){return h},q:function(){return m}});var a=r(57437),n=r(37736),i=r(33128),l=r(42090),s=r(23064),o=r(2265);let c=(0,o.createContext)();function d(){let e=new i.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),t=(0,s.v)(async(e,t)=>{let{headers:r}=t;try{return{headers:{...r,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:r}}});return new l.fe({cache:new l.h4,link:u.concat(t).concat(e)})}let u=(0,n.q)(e=>{let{graphQLErrors:t,networkError:r}=e;t&&(console.log("graphql",t),t.forEach(e=>{let{extensions:t}=e;("invalid-headers"===t.code||"invalid-jwt"===t.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),r&&(console.log("[Network error]: ".concat(r)),alert("network connection problem"))}),m=()=>(0,o.useContext)(c);function h(e){let{children:t}=e,[r,n]=(0,o.useState)(null),[i,s]=(0,o.useState)(!1);return(0,a.jsx)(l.e$,{makeClient:d,children:(0,a.jsx)(c.Provider,{value:{globalMsg:r,setGlobalMsg:n,loading:i,setLoading:s},children:t})})}},47868:function(e,t,r){"use strict";var a=r(57437),n=r(2265);t.Z=e=>{let{element:t,dialog:r,elementProps:i,dialogProps:l,dataId:s,setData:o,data:c}=e,[d,u]=(0,n.useState)(!1),{onClick:m,...h}=i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{onClick:e=>{m&&m(e),u(!0)},...h}),(0,a.jsx)(r,{open:d,setOpen:u,...l,dataId:s,setData:o,data:c})]})}},6830:function(e,t,r){"use strict";var a=r(57437),n=r(2265),i=r(61096),l=r(66124),s=r(98784),o=r(83719),c=r(75519),d=r(56800),u=r.n(d),m=r(23944),h=r(1552),x=r(16463),p=r(44514);t.Z=e=>{let{open:t,setOpen:r,type:d,dataId:g,data:f,setData:v}=e,{userId:j}=(0,x.useParams)(),[y]=(0,m.D)(h.HT),[b]=(0,m.D)(h.SZ,{refetchQueries:[p.L5]}),[C]=(0,m.D)(h.z7,{refetchQueries:[p.L5]}),[Z]=(0,m.D)(h.aY),[w]=(0,m.D)(h.Ff),[P]=(0,m.D)(h.ju),[N]=(0,m.D)(h.oe),[S]=(0,m.D)(h.DR),[D]=(0,m.D)(h.Qm),[k,A]=(0,n.useState)(!1),[F,_]=(0,n.useState)(!1),E="disable-account"===d?"div":n.Fragment,U=()=>{A(!1),r(!1)},M=async e=>{if(!0===e)try{"disable-account"===d&&await b({variables:{id:j,data:{status:"disable"}}}),"enable-account"===d&&await b({variables:{id:j,data:{status:"verified"}}}),"verified-account"===d&&await C({variables:{user_id:j,is_verified:!0}}),"unverified-account"===d&&await C({variables:{user_id:j,is_verified:!1}}),"deleteProductCategory"===d&&(await Z({variables:{id:g}}),v(f.filter(e=>e.id!==g))),"deleteProductBrand"===d&&(await w({variables:{id:g}}),v(f.filter(e=>e.id!==g))),"deletePost"===d&&(await P({variables:{id:g}}),v(f.filter(e=>e.id!==g))),"deleteNewCategory"===d&&(await N({variables:{id:g}}),v(f.filter(e=>e.id!==g))),"deleteServiceCenter"===d&&(await S({variables:{id:g}}),v(f.filter(e=>e.id!==g))),"deleteProductDiscount"===d&&(await D({variables:{id:g}}),v(f.filter(e=>e.id!==g))),_(e),r(!1)}catch(e){console.log("Error",e)}else r(!1);_(e),A(!0),r(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Z,{fullWidth:!0,maxWidth:"xs",open:t,onClose:()=>r(!1),children:[(0,a.jsxs)(l.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,a.jsx)("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,a.jsxs)(E,{..."disable-account"===d&&{className:"flex flex-col items-center gap-2"},children:[(0,a.jsxs)(o.Z,{variant:"h4",children:["unsubscribe"===d&&"Are you sure to cancel your subscription?","disable-account"===d&&"Are you sure?","delete-order"===d&&"Are you sure?","delete-customer"===d&&"Are you sure?"]}),"verified-account"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductDiscount"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteServiceCenter"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===d&&(0,a.jsx)(o.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,a.jsxs)(s.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[(0,a.jsx)(c.Z,{variant:"contained",onClick:()=>M(!0),children:"disable-account"===d?"Yes, Disabel User!":"enable-account"===d?"Yes, Enable User!":"deleteProductCategory"===d?"Yes, Delete Category!":"deleteProductBrand"===d?"Yes, Delete Brand":"delete-customer"===d?"Yes, Delete Customer!":"verified-account"===d?"Yes , User Verify":"unverified-account"===d?"Yes, User Unverify":"deletePost"===d?"Yes, Delete Post":"deleteNewCategory"===d?"Yes, Delete Category":"deleteServiceCenter"===d?"Yes, Delete Service Center":"deleteProductDiscount"===d?"Yes, Delete Product Discount":"Yes"}),(0,a.jsx)(c.Z,{variant:"outlined",color:"secondary",onClick:()=>{M(!1)},children:"Cancel"})]})]}),(0,a.jsxs)(i.Z,{open:k,onClose:U,children:[(0,a.jsxs)(l.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,a.jsx)("i",{className:u()("text-[88px] mbe-6",{"ri-checkbox-circle-line":F,"text-success":F,"ri-close-circle-line":!F,"text-error":!F})}),(0,a.jsx)(o.Z,{variant:"h4",className:"mbe-2",children:F?"".concat("disable-account"===d?"User Disabled":"enable-account"===d?"User Enabled":"verified-account"===d?"User Verified":"deleteProductCategory"===d?"Delete Category":"unverified"===d?"User Unverified":"deleteProductBrand"===d?"Delete Brand":"deletePost"===d?"Delete Post":"deleteNewCategory"===d?"Delete New Category":"deleteServiceCenter"===d?"Delete Service Center":"deleteProductDiscount"===d?"Delete Product Discount":"yes"):"Cancelled"}),(0,a.jsx)(o.Z,{color:"text.primary",children:F?(0,a.jsxs)(a.Fragment,{children:["verified-account"===d&&"Your account has been verified successfully.","unverified-account"===d&&"Your account has been unverified successfully.","disable-account"===d&&"User has been disabled.","enable-account"===d&&"User has been enabled.","deleteProductCategory"===d&&"Your Category has been deleted successfully.","deleteServiceCenter"===d&&"Your Service Center has been deleted successfully.","deleteNewCategory"===d&&"Your New Category has been deleted successfully.","deleteProductDiscount"===d&&"Your Product Discount has been deleted successfully.","deleteProductBrand"===d&&"Your Category has been deleted successfully.","deletePost"===d&&"Your Post has been deleted successfully.","delete-customer"===d&&"Your customer removed successfully."]}):(0,a.jsxs)(a.Fragment,{children:["verified-account"===d&&"User Verify Cancelled!","unverified-account"===d&&"User Unverify Cancelled!","disable-account"===d&&"Cancelled Disabled :)","deleteProductCategory"===d&&"Category Deletion Cancelled","deleteProductDiscount"===d&&"Product Discount Deletion Cancelled","deleteServiceCenter"===d&&"Service Center Deletion Cancelled","deleteNewCategory"===d&&"New Category Deletion Cancelled","deleteProductBrand"===d&&"Brand Deletion Cancelled","deletePost"===d&&"Post Deletion Cancelled!","delete-customer"===d&&"Customer Deletion Cancelled"]})})]}),(0,a.jsx)(s.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:(0,a.jsx)(c.Z,{variant:"contained",color:"success",onClick:U,children:"Ok"})})]})]})}},47380:function(e,t,r){"use strict";var a=r(57437);r(2265);var n=r(3550),i=r(9188);t.Z=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,i.q)();return(0,a.jsx)("div",{children:(0,a.jsx)(n.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},60625:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},36887:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/dashboards/crm",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},34364:function(e,t,r){"use strict";r.d(t,{c:function(){return a}});let a=async(e,t,r)=>{try{return(await fetch(t,{method:"PUT",headers:{"Content-Type":"".concat(r,"/*"),"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}}},20356:function(e,t,r){"use strict";r.d(t,{default:function(){return B}});var a=r(57437),n=r(2265),i=r(76520),l=r(75519),s=r(60335),o=r(67838),c=r(48965),d=r(83719),u=r(56800),m=r.n(u),h=r(13541),x=r(54175),p=r(33514),g=r(58438),f=r(14595),v=r(52326),j=r(39343),y=r(23944),b=r(1552),C=r(9188),Z=r(34364),w=e=>{var t;let{setGlobalMsg:r}=(0,C.q)(),{open:i,handleClose:o,brandData:u,setData:m,loading:h,setLoading:x}=e,[p]=(0,y.D)(b.MP),[w]=(0,y.D)(b.Sf),[P,N]=(0,n.useState)(""),S=(0,n.useRef)(null),{control:D,reset:k,handleSubmit:A,formState:{errors:F}}=(0,j.cI)({defaultValues:{title:"",description:""}}),_=async e=>{try{x(!0);let t=await w({variables:{content_type:"image",folder:"quotations"}}),a=await (0,Z.c)(P[0],t.data.getFileUploadUrl.fileUploadUrl,"image"),n=await p({variables:{data:{title:e.title,image_url:a}}});m([...u,n.data.insert_brands_one]),r("➕ Add New Product Brand"),x(!1),o(),E()}catch(e){r("❌ Add Brand Error"),console.log("Add Error ",e)}},E=()=>{k({}),N("")};return(0,a.jsxs)(g.ZP,{open:i,anchor:"right",variant:"temporary",onClose:E,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,a.jsx)(d.Z,{variant:"h5",children:"Add Brand"}),(0,a.jsx)(s.Z,{size:"small",onClick:()=>{o()},children:(0,a.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,a.jsx)(f.Z,{}),(0,a.jsx)("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:A(e=>_(e)),className:"flex flex-col gap-5",children:[(0,a.jsx)(j.Qr,{name:"title",control:D,rules:{required:!0},render:e=>{let{field:t}=e;return(0,a.jsx)(c.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...F.title&&{error:!0,helperText:"This field is required."}})}}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(c.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:null===(t=P[0])||void 0===t?void 0:t.name,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:P?(0,a.jsx)(v.Z,{position:"end",children:(0,a.jsx)(s.Z,{size:"small",edge:"end",onClick:()=>N(""),children:(0,a.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,a.jsxs)(l.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,a.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&N(t)},ref:S})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(l.Z,{variant:"contained",type:"submit",loading:h,children:"Add"}),(0,a.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:E,children:"Discard"})]})]})})]})};r(81128);var P=r(18156),N=r.n(P),S=r(43808),D=r(44514),k=r(47380),A=e=>{let{setGlobalMsg:t}=(0,C.q)(),{open:r,handleClose:i,brandData:o,setData:u,loading:m,setLoading:h}=e,[x]=(0,y.D)(b.Si),[p]=(0,y.D)(b.Sf),[v,w]=(0,n.useState)(""),[P,N]=(0,n.useState)(),S=(0,n.useRef)(null),{control:D,reset:k,handleSubmit:A,formState:{errors:F}}=(0,j.cI)({defaultValues:{title:"",image_url:""}}),_=async e=>{try{h(!0);let r=o.image_url;if(v&&v!==(null==o?void 0:o.image_url)){let e=await p({variables:{content_type:"image",folder:"products"}});r=await (0,Z.c)(v,e.data.getFileUploadUrl.fileUploadUrl,"image")}let a=await x({variables:{id:o.id,data:{title:e.title,image_url:r}}});u(e=>e.map(e=>e.id===(null==o?void 0:o.id)?{...e,...a.data.update_brands_by_pk}:e)),t("✅ Brand Data has been updated"),E()}catch(e){t("❌ Add Brand Error"),console.log("Add Error ",e)}},E=()=>{i(),k({title:"",description:""}),w("")};return(0,n.useEffect)(()=>{o&&(N(null==o?void 0:o.image_url),k({title:o.title}),w(o.image_url))},[o,k]),(0,a.jsxs)(g.ZP,{open:r,anchor:"right",variant:"temporary",onClose:E,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,a.jsx)(d.Z,{variant:"h5",children:"Edit Brand"}),(0,a.jsx)(s.Z,{size:"small",onClick:E,children:(0,a.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,a.jsx)(f.Z,{}),(0,a.jsx)("div",{className:"p-5",children:(0,a.jsxs)("form",{onSubmit:A(e=>_(e)),className:"flex flex-col gap-5",children:[(0,a.jsx)(j.Qr,{name:"title",control:D,rules:{required:!0},render:e=>{let{field:t}=e;return(0,a.jsx)(c.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...F.title&&{error:!0,helperText:"This field is required."}})}}),(0,a.jsx)("div",{className:"flex items-center gap-4",children:(0,a.jsx)("input",{type:"file",id:"contained-button-file",onChange:e=>{let{files:t}=e.target;if(t&&t.length>0){let e=t[0];w(e),N(URL.createObjectURL(e))}},ref:S})}),P&&(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("img",{src:P,alt:"Preview",style:{width:"100%",borderRadius:"4px"}})}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(l.Z,{variant:"contained",type:"submit",children:"Update"}),(0,a.jsx)(l.Z,{variant:"outlined",color:"error",type:"reset",onClick:E,children:"Discard"})]})]})})]})},F=r(47868),_=r(6830);let E=(e,t,r,a)=>{let n=(0,h.O4)(e.getValue(t),r);return a({itemRank:n}),n.passed},U=e=>{let{value:t,onChange:r,debounce:i=500,...l}=e,[s,o]=(0,n.useState)(t);return(0,n.useEffect)(()=>{o(t)},[t]),(0,n.useEffect)(()=>{let e=setTimeout(()=>{r(s)},i);return()=>clearTimeout(e)},[s]),(0,a.jsx)(c.Z,{...l,value:s,onChange:e=>o(e.target.value),size:"small"})},M=(0,x.Cl)();var B=()=>{let{setGlobalMsg:e}=(0,C.q)(),{data:t}=(0,S.kJ)(D.Sg),[r]=(0,y.D)(b.Ff),[c,u]=(0,n.useState)(!1),[h,g]=(0,n.useState)({}),[f,v]=(0,n.useState)(t.brands),[j,Z]=(0,n.useState)(""),[P,B]=(0,n.useState)(!1),[R,I]=(0,n.useState)(!1),[Y,z]=(0,n.useState)(),O=(e,t,r)=>({children:e,color:t,variant:r}),W=(0,n.useMemo)(()=>[M.accessor("title",{header:"Brands",cell:e=>{let{row:t}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("img",{src:t.original.image_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,a.jsx)("div",{className:"flex flex-col items-start",children:(0,a.jsx)(d.Z,{className:"font-medium",color:"text.primary",children:t.original.title})})]})}}),M.accessor("products_aggregate.aggregate.count",{header:"Total Products",cell:e=>{var t,r,n;let{row:i}=e;return(0,a.jsx)(d.Z,{children:null===(n=i.original)||void 0===n?void 0:null===(r=n.products_aggregate)||void 0===r?void 0:null===(t=r.aggregate)||void 0===t?void 0:t.count.toLocaleString()})}}),M.accessor("created_at",{header:"Date",cell:e=>{let{row:t}=e;return(0,a.jsx)(d.Z,{children:t.original.created_at.substring(0,10)})}}),M.accessor("actions",{header:"Actions",cell:e=>{let{row:t}=e;return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(s.Z,{size:"small",onClick:()=>{I(!R),z(t.original)},children:(0,a.jsx)("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),(0,a.jsx)(F.Z,{element:l.Z,elementProps:O((0,a.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:_.Z,dialogProps:{type:"deleteProductBrand"},dataId:t.original.id,setData:v,data:f})]})},enableSorting:!1})],[f]),L=(0,p.b7)({data:f,columns:W,filterFns:{fuzzy:E},state:{rowSelection:h,globalFilter:j},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:E,onRowSelectionChange:g,getCoreRowModel:(0,x.sC)(),onGlobalFilterChange:Z,getFilteredRowModel:(0,x.vL)(),getSortedRowModel:(0,x.tj)(),getPaginationRowModel:(0,x.G_)(),getFacetedRowModel:(0,x.o6)(),getFacetedUniqueValues:(0,x.JG)(),getFacetedMinMaxValues:(0,x.HO)()});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[(0,a.jsx)(U,{value:null!=j?j:"",onChange:e=>Z(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,a.jsx)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:(0,a.jsx)(l.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>u(!c),startIcon:(0,a.jsx)("i",{className:"ri-add-line"}),children:"Add Brand"})})]}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:N().table,children:[(0,a.jsx)("thead",{children:L.getHeaderGroups().map(e=>(0,a.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,a.jsx)("th",{children:e.isPlaceholder?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,p.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,a.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,a.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===L.getFilteredRowModel().rows.length?(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:L.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,a.jsx)("tbody",{children:L.getRowModel().rows.slice(0,L.getState().pagination.pageSize).map(e=>(0,a.jsx)("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,a.jsx)("td",{children:(0,p.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,a.jsx)(o.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:L.getFilteredRowModel().rows.length,rowsPerPage:L.getState().pagination.pageSize,page:L.getState().pagination.pageIndex,onPageChange:(e,t)=>{L.setPageIndex(t)},onRowsPerPageChange:e=>L.setPageSize(Number(e.target.value))})]}),(0,a.jsx)(w,{open:c,brandData:f,setData:v,loading:P,setLoading:B,handleClose:()=>u(!c)}),(0,a.jsx)(A,{open:R,brandData:Y,setData:v,loading:P,setLoading:B,handleClose:()=>I(!R)}),(0,a.jsx)(k.Z,{})]})}},18156:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[956,1441,9580,9855,8329,7800,7660,8965,6715,6805,8325,6101,5313,8674,7172,4175,3197,3550,9343,8438,2903,887,4514,1552,2971,7023,1744],function(){return e(e.s=4555)}),_N_E=e.O()}]);