(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7519],{49758:function(e,t,r){"use strict";r.r(t);var a=r(57437),o=r(2265),l=r(96303),i=r(48024),n=r(22305);let c=(0,i.ZP)(l.Z)(e=>{let{skin:t,color:r,size:a,theme:o}=e;return{...r&&"light"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-lightOpacity)"),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"light-static"===t&&{backgroundColor:(0,n.$n)(o.palette[r].main,.84),color:"var(--mui-palette-".concat(r,"-main)")},...r&&"filled"===t&&{backgroundColor:"var(--mui-palette-".concat(r,"-main)"),color:"var(--mui-palette-".concat(r,"-contrastText)")},...a&&{height:a,width:a}}}),s=(0,o.forwardRef)((e,t)=>{let{color:r,skin:o="filled",...l}=e;return(0,a.jsx)(c,{color:r,skin:o,ref:t,...l})});t.default=s},9188:function(e,t,r){"use strict";r.d(t,{ApolloWrapper:function(){return m},q:function(){return p}});var a=r(57437),o=r(37736),l=r(33128),i=r(42090),n=r(23064),c=r(2265);let s=(0,c.createContext)();function u(){let e=new l.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),t=(0,n.v)(async(e,t)=>{let{headers:r}=t;try{return{headers:{...r,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:r}}});return new i.fe({cache:new i.h4,link:d.concat(t).concat(e)})}let d=(0,o.q)(e=>{let{graphQLErrors:t,networkError:r}=e;t&&(console.log("graphql",t),t.forEach(e=>{let{extensions:t}=e;("invalid-headers"===t.code||"invalid-jwt"===t.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),r&&(console.log("[Network error]: ".concat(r)),alert("network connection problem"))}),p=()=>(0,c.useContext)(s);function m(e){let{children:t}=e,[r,o]=(0,c.useState)(null),[l,n]=(0,c.useState)(!1);return(0,a.jsx)(i.e$,{makeClient:u,children:(0,a.jsx)(s.Provider,{value:{globalMsg:r,setGlobalMsg:o,loading:l,setLoading:n},children:t})})}},31155:function(e,t,r){"use strict";var a=r(57437),o=r(2265),l=r(87138);t.default=(0,o.forwardRef)((e,t)=>{let{href:r,onClick:o,...i}=e;return(0,a.jsx)(l.default,{ref:t,...i,href:r||"/",onClick:o?e=>o(e):r?void 0:e=>e.preventDefault()})})},47868:function(e,t,r){"use strict";var a=r(57437),o=r(2265);t.Z=e=>{let{element:t,dialog:r,elementProps:l,dialogProps:i,dataId:n,setData:c,data:s}=e,[u,d]=(0,o.useState)(!1),{onClick:p,...m}=l;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{onClick:e=>{p&&p(e),d(!0)},...m}),(0,a.jsx)(r,{open:u,setOpen:d,...i,dataId:n,setData:c,data:s})]})}},54984:function(e,t,r){"use strict";r(57437),r(2265);var a=r(83719),o=r(48024),l=r(87942),i=r(31293);r(56800),(0,o.ZP)("div",{name:"MuiCustomInputHorizontal",slot:"root"})(e=>{let{theme:t}=e;return{blockSize:"100%",display:"flex",gap:t.spacing(1),borderRadius:"var(--mui-shape-borderRadius)",cursor:"pointer",position:"relative",alignItems:"flex-start",border:"1px solid var(--mui-palette-customColors-inputBorder)",padding:t.spacing(4),color:"var(--mui-palette-text-primary)",transition:t.transitions.create(["border-color"],{duration:t.transitions.duration.shorter}),"&:hover":{borderColor:"var(--mui-palette-action-active)"},"&.active":{borderColor:"var(--mui-palette-primary-main)","& i, & svg":{color:"var(--mui-palette-primary-main) !important"}}}}),(0,o.ZP)(a.Z,{name:"MuiCustomInputHorizontal",slot:"title"})(e=>{let{theme:t}=e;return{fontWeight:t.typography.fontWeightMedium,color:"var(--mui-palette-text-primary) !important"}}),(0,o.ZP)(a.Z,{name:"MuiCustomInputHorizontal",slot:"meta"})(e=>{let{theme:t}=e;return{...t.typography.body2,color:"var(--mui-palette-text-disabled) !important"}}),(0,o.ZP)(a.Z,{name:"MuiCustomInputHorizontal",slot:"content"})(e=>{let{theme:t}=e;return{...t.typography.body2}}),(0,o.ZP)(l.Z,{name:"MuiCustomInputHorizontal",slot:"input"})(e=>{let{theme:t}=e;return{marginBlockStart:t.spacing(-.25),marginInlineStart:t.spacing(-.25)}}),(0,o.ZP)(i.Z,{name:"MuiCustomInputHorizontal",slot:"input"})(e=>{let{theme:t}=e;return{marginBlockStart:t.spacing(-.25),marginInlineStart:t.spacing(-.25)}}),(0,o.ZP)(a.Z,{name:"MuiCustomInputVertical",slot:"title"})(e=>{let{theme:t}=e;return{letterSpacing:"0.15px",fontWeight:t.typography.fontWeightMedium}}),a.Z,a.Z},6830:function(e,t,r){"use strict";var a=r(57437),o=r(2265),l=r(61096),i=r(66124),n=r(98784),c=r(83719),s=r(75519),u=r(56800),d=r.n(u),p=r(23944),m=r(1552),y=r(16463),f=r(44514);t.Z=e=>{let{open:t,setOpen:r,type:u,dataId:h,data:v,setData:b}=e,{userId:x}=(0,y.useParams)(),[C]=(0,p.D)(m.HT),[g]=(0,p.D)(m.SZ,{refetchQueries:[f.L5]}),[w]=(0,p.D)(m.z7,{refetchQueries:[f.L5]}),[D]=(0,p.D)(m.aY),[P]=(0,p.D)(m.Ff),[Z]=(0,p.D)(m.ju),[j]=(0,p.D)(m.oe),[k]=(0,p.D)(m.DR),[S]=(0,p.D)(m.Qm),[Y,N]=(0,o.useState)(!1),[A,U]=(0,o.useState)(!1),_="disable-account"===u?"div":o.Fragment,B=()=>{N(!1),r(!1)},I=async e=>{if(!0===e)try{"disable-account"===u&&await g({variables:{id:x,data:{status:"disable"}}}),"enable-account"===u&&await g({variables:{id:x,data:{status:"verified"}}}),"verified-account"===u&&await w({variables:{user_id:x,is_verified:!0}}),"unverified-account"===u&&await w({variables:{user_id:x,is_verified:!1}}),"deleteProductCategory"===u&&(await D({variables:{id:h}}),b(v.filter(e=>e.id!==h))),"deleteProductBrand"===u&&(await P({variables:{id:h}}),b(v.filter(e=>e.id!==h))),"deletePost"===u&&(await Z({variables:{id:h}}),b(v.filter(e=>e.id!==h))),"deleteNewCategory"===u&&(await j({variables:{id:h}}),b(v.filter(e=>e.id!==h))),"deleteServiceCenter"===u&&(await k({variables:{id:h}}),b(v.filter(e=>e.id!==h))),"deleteProductDiscount"===u&&(await S({variables:{id:h}}),b(v.filter(e=>e.id!==h))),U(e),r(!1)}catch(e){console.log("Error",e)}else r(!1);U(e),N(!0),r(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Z,{fullWidth:!0,maxWidth:"xs",open:t,onClose:()=>r(!1),children:[(0,a.jsxs)(i.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,a.jsx)("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,a.jsxs)(_,{..."disable-account"===u&&{className:"flex flex-col items-center gap-2"},children:[(0,a.jsxs)(c.Z,{variant:"h4",children:["unsubscribe"===u&&"Are you sure to cancel your subscription?","disable-account"===u&&"Are you sure?","delete-order"===u&&"Are you sure?","delete-customer"===u&&"Are you sure?"]}),"verified-account"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductDiscount"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteServiceCenter"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===u&&(0,a.jsx)(c.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,a.jsxs)(n.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[(0,a.jsx)(s.Z,{variant:"contained",onClick:()=>I(!0),children:"disable-account"===u?"Yes, Disabel User!":"enable-account"===u?"Yes, Enable User!":"deleteProductCategory"===u?"Yes, Delete Category!":"deleteProductBrand"===u?"Yes, Delete Brand":"delete-customer"===u?"Yes, Delete Customer!":"verified-account"===u?"Yes , User Verify":"unverified-account"===u?"Yes, User Unverify":"deletePost"===u?"Yes, Delete Post":"deleteNewCategory"===u?"Yes, Delete Category":"deleteServiceCenter"===u?"Yes, Delete Service Center":"deleteProductDiscount"===u?"Yes, Delete Product Discount":"Yes"}),(0,a.jsx)(s.Z,{variant:"outlined",color:"secondary",onClick:()=>{I(!1)},children:"Cancel"})]})]}),(0,a.jsxs)(l.Z,{open:Y,onClose:B,children:[(0,a.jsxs)(i.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,a.jsx)("i",{className:d()("text-[88px] mbe-6",{"ri-checkbox-circle-line":A,"text-success":A,"ri-close-circle-line":!A,"text-error":!A})}),(0,a.jsx)(c.Z,{variant:"h4",className:"mbe-2",children:A?"".concat("disable-account"===u?"User Disabled":"enable-account"===u?"User Enabled":"verified-account"===u?"User Verified":"deleteProductCategory"===u?"Delete Category":"unverified"===u?"User Unverified":"deleteProductBrand"===u?"Delete Brand":"deletePost"===u?"Delete Post":"deleteNewCategory"===u?"Delete New Category":"deleteServiceCenter"===u?"Delete Service Center":"deleteProductDiscount"===u?"Delete Product Discount":"yes"):"Cancelled"}),(0,a.jsx)(c.Z,{color:"text.primary",children:A?(0,a.jsxs)(a.Fragment,{children:["verified-account"===u&&"Your account has been verified successfully.","unverified-account"===u&&"Your account has been unverified successfully.","disable-account"===u&&"User has been disabled.","enable-account"===u&&"User has been enabled.","deleteProductCategory"===u&&"Your Category has been deleted successfully.","deleteServiceCenter"===u&&"Your Service Center has been deleted successfully.","deleteNewCategory"===u&&"Your New Category has been deleted successfully.","deleteProductDiscount"===u&&"Your Product Discount has been deleted successfully.","deleteProductBrand"===u&&"Your Category has been deleted successfully.","deletePost"===u&&"Your Post has been deleted successfully.","delete-customer"===u&&"Your customer removed successfully."]}):(0,a.jsxs)(a.Fragment,{children:["verified-account"===u&&"User Verify Cancelled!","unverified-account"===u&&"User Unverify Cancelled!","disable-account"===u&&"Cancelled Disabled :)","deleteProductCategory"===u&&"Category Deletion Cancelled","deleteProductDiscount"===u&&"Product Discount Deletion Cancelled","deleteServiceCenter"===u&&"Service Center Deletion Cancelled","deleteNewCategory"===u&&"New Category Deletion Cancelled","deleteProductBrand"===u&&"Brand Deletion Cancelled","deletePost"===u&&"Post Deletion Cancelled!","delete-customer"===u&&"Customer Deletion Cancelled"]})})]}),(0,a.jsx)(n.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:(0,a.jsx)(s.Z,{variant:"contained",color:"success",onClick:B,children:"Ok"})})]})]})}},30812:function(e,t,r){"use strict";r(57437),r(2265)},18156:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}}]);