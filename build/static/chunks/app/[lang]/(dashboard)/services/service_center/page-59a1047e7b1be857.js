(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2510,1552],{57615:function(e,n,t){Promise.resolve().then(t.bind(t,24879))},76520:function(e,n,t){"use strict";var r=t(22988),i=t(23950),a=t(2265),s=t(44839),o=t(76990),d=t(48024),u=t(95885),l=t(28027),c=t(8344),m=t(57437);let _=["className","raised"],p=e=>{let{classes:n}=e;return(0,o.Z)({root:["root"]},c.y,n)},f=(0,d.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})(()=>({overflow:"hidden"})),h=a.forwardRef(function(e,n){let t=(0,u.i)({props:e,name:"MuiCard"}),{className:a,raised:o=!1}=t,d=(0,i.Z)(t,_),l=(0,r.Z)({},t,{raised:o}),c=p(l);return(0,m.jsx)(f,(0,r.Z)({className:(0,s.Z)(c.root,a),elevation:o?8:void 0,ref:n,ownerState:l},d))});n.Z=h},8344:function(e,n,t){"use strict";t.d(n,{y:function(){return a}});var r=t(72296),i=t(70587);function a(e){return(0,i.ZP)("MuiCard",e)}let s=(0,r.Z)("MuiCard",["root"]);n.Z=s},81128:function(e,n,t){"use strict";t.r(n);var r=t(57437),i=t(2265),a=t(87138),s=t(31655),o=t(91326),d=t(27316),u=t(11656),l=t(42748),c=t(24134),m=t(95635),_=t(28027),p=t(60335),f=t(14595),h=t(56800),g=t.n(h),x=t(92110);let v=e=>{let{tooltipProps:n,children:t}=e;return(null==n?void 0:n.title)?(0,r.jsx)(s.Z,{...n,children:t}):t},y=e=>{let{children:n,option:t}=e;return t.href?(0,r.jsx)(o.Z,{component:a.default,href:t.href,...t.linkProps,children:n}):(0,r.jsx)(r.Fragment,{children:n})};n.default=e=>{let{tooltipProps:n,icon:t,iconClassName:a,options:s,leftAlignMenu:o,iconButtonProps:h}=e,[$,b]=(0,i.useState)(!1),j=(0,i.useRef)(null),{settings:P}=(0,x.r)(),C=e=>{j.current&&j.current.contains(e.target)||b(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{tooltipProps:n,children:(0,r.jsx)(p.Z,{ref:j,size:"small",onClick:()=>{b(e=>!e)},...h,children:"string"==typeof t?(0,r.jsx)("i",{className:g()(t,a)}):t||(0,r.jsx)("i",{className:g()("ri-more-2-line",a)})})}),(0,r.jsx)(d.Z,{open:$,anchorEl:j.current,placement:o?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:n}=e;return(0,r.jsx)(m.Z,{...n,children:(0,r.jsx)(_.Z,{className:"bordered"===P.skin?"border shadow-none":"shadow-lg",children:(0,r.jsx)(c.d,{onClickAway:C,children:(0,r.jsx)(l.Z,{autoFocusItem:$,children:s.map((e,n)=>"string"==typeof e?(0,r.jsx)(u.Z,{onClick:C,children:e},n):"divider"in e?e.divider&&(0,r.jsx)(f.Z,{...e.dividerProps},n):(0,r.jsx)(u.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:n=>{C(n),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(n)},children:(0,r.jsxs)(y,{option:e,children:[("string"==typeof e.icon?(0,r.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},n))})})})})}})]})}},44156:function(e,n,t){"use strict";t.d(n,{J:function(){return u},SettingsProvider:function(){return l}});var r=t(57437),i=t(2265),a=t(36887),s=t(60625),o=t(97271);let d=(e,n)=>{let[t,r]=(0,o.Z)(e);return[(0,i.useMemo)(()=>t?JSON.parse(t):n,[t]),e=>{r(JSON.stringify(e))}]},u=(0,i.createContext)(null),l=e=>{let n={mode:a.Z.mode,skin:a.Z.skin,semiDark:a.Z.semiDark,layout:a.Z.layout,navbarContentWidth:a.Z.navbar.contentWidth,contentWidth:a.Z.contentWidth,footerContentWidth:a.Z.footer.contentWidth,primaryColor:s.Z[0].main},t={...n,mode:e.mode||a.Z.mode},[o,l]=d(a.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:t),[c,m]=(0,i.useState)("{}"!==JSON.stringify(o)?o:t),_=(e,n)=>{let{updateCookie:t=!0}=n||{};m(n=>{let r={...n,...e};return t&&l(r),r})},p=(0,i.useMemo)(()=>JSON.stringify(n)!==JSON.stringify(c),[c]);return(0,r.jsx)(u.Provider,{value:{settings:c,updateSettings:_,isSettingsChanged:p,resetSettings:()=>{_(n)},updatePageSettings:e=>(_(e,{updateCookie:!1}),()=>_(o,{updateCookie:!1}))},children:e.children})}},92110:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var r=t(2265),i=t(44156);let a=()=>{let e=(0,r.useContext)(i.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},9188:function(e,n,t){"use strict";t.d(n,{ApolloWrapper:function(){return _},q:function(){return m}});var r=t(57437),i=t(37736),a=t(33128),s=t(42090),o=t(23064),d=t(2265);let u=(0,d.createContext)();function l(){let e=new a.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),n=(0,o.v)(async(e,n)=>{let{headers:t}=n;try{return{headers:{...t,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:t}}});return new s.fe({cache:new s.h4,link:c.concat(n).concat(e)})}let c=(0,i.q)(e=>{let{graphQLErrors:n,networkError:t}=e;n&&(console.log("graphql",n),n.forEach(e=>{let{extensions:n}=e;("invalid-headers"===n.code||"invalid-jwt"===n.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),t&&(console.log("[Network error]: ".concat(t)),alert("network connection problem"))}),m=()=>(0,d.useContext)(u);function _(e){let{children:n}=e,[t,i]=(0,d.useState)(null),[a,o]=(0,d.useState)(!1);return(0,r.jsx)(s.e$,{makeClient:l,children:(0,r.jsx)(u.Provider,{value:{globalMsg:t,setGlobalMsg:i,loading:a,setLoading:o},children:n})})}},47868:function(e,n,t){"use strict";var r=t(57437),i=t(2265);n.Z=e=>{let{element:n,dialog:t,elementProps:a,dialogProps:s,dataId:o,setData:d,data:u}=e,[l,c]=(0,i.useState)(!1),{onClick:m,..._}=a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{onClick:e=>{m&&m(e),c(!0)},..._}),(0,r.jsx)(t,{open:l,setOpen:c,...s,dataId:o,setData:d,data:u})]})}},6830:function(e,n,t){"use strict";var r=t(57437),i=t(2265),a=t(61096),s=t(66124),o=t(98784),d=t(83719),u=t(75519),l=t(56800),c=t.n(l),m=t(23944),_=t(1552),p=t(16463),f=t(44514);n.Z=e=>{let{open:n,setOpen:t,type:l,dataId:h,data:g,setData:x}=e,{userId:v}=(0,p.useParams)(),[y]=(0,m.D)(_.HT),[$]=(0,m.D)(_.SZ,{refetchQueries:[f.L5]}),[b]=(0,m.D)(_.z7,{refetchQueries:[f.L5]}),[j]=(0,m.D)(_.aY),[P]=(0,m.D)(_.Ff),[C]=(0,m.D)(_.ju),[S]=(0,m.D)(_.oe),[w]=(0,m.D)(_.DR),[k]=(0,m.D)(_.Qm),[Z,N]=(0,i.useState)(!1),[D,A]=(0,i.useState)(!1),F="disable-account"===l?"div":i.Fragment,q=()=>{N(!1),t(!1)},U=async e=>{if(!0===e)try{"disable-account"===l&&await $({variables:{id:v,data:{status:"disable"}}}),"enable-account"===l&&await $({variables:{id:v,data:{status:"verified"}}}),"verified-account"===l&&await b({variables:{user_id:v,is_verified:!0}}),"unverified-account"===l&&await b({variables:{user_id:v,is_verified:!1}}),"deleteProductCategory"===l&&(await j({variables:{id:h}}),x(g.filter(e=>e.id!==h))),"deleteProductBrand"===l&&(await P({variables:{id:h}}),x(g.filter(e=>e.id!==h))),"deletePost"===l&&(await C({variables:{id:h}}),x(g.filter(e=>e.id!==h))),"deleteNewCategory"===l&&(await S({variables:{id:h}}),x(g.filter(e=>e.id!==h))),"deleteServiceCenter"===l&&(await w({variables:{id:h}}),x(g.filter(e=>e.id!==h))),"deleteProductDiscount"===l&&(await k({variables:{id:h}}),x(g.filter(e=>e.id!==h))),A(e),t(!1)}catch(e){console.log("Error",e)}else t(!1);A(e),N(!0),t(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{fullWidth:!0,maxWidth:"xs",open:n,onClose:()=>t(!1),children:[(0,r.jsxs)(s.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,r.jsx)("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,r.jsxs)(F,{..."disable-account"===l&&{className:"flex flex-col items-center gap-2"},children:[(0,r.jsxs)(d.Z,{variant:"h4",children:["unsubscribe"===l&&"Are you sure to cancel your subscription?","disable-account"===l&&"Are you sure?","delete-order"===l&&"Are you sure?","delete-customer"===l&&"Are you sure?"]}),"verified-account"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductDiscount"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteServiceCenter"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===l&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,r.jsxs)(o.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[(0,r.jsx)(u.Z,{variant:"contained",onClick:()=>U(!0),children:"disable-account"===l?"Yes, Disabel User!":"enable-account"===l?"Yes, Enable User!":"deleteProductCategory"===l?"Yes, Delete Category!":"deleteProductBrand"===l?"Yes, Delete Brand":"delete-customer"===l?"Yes, Delete Customer!":"verified-account"===l?"Yes , User Verify":"unverified-account"===l?"Yes, User Unverify":"deletePost"===l?"Yes, Delete Post":"deleteNewCategory"===l?"Yes, Delete Category":"deleteServiceCenter"===l?"Yes, Delete Service Center":"deleteProductDiscount"===l?"Yes, Delete Product Discount":"Yes"}),(0,r.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:()=>{U(!1)},children:"Cancel"})]})]}),(0,r.jsxs)(a.Z,{open:Z,onClose:q,children:[(0,r.jsxs)(s.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,r.jsx)("i",{className:c()("text-[88px] mbe-6",{"ri-checkbox-circle-line":D,"text-success":D,"ri-close-circle-line":!D,"text-error":!D})}),(0,r.jsx)(d.Z,{variant:"h4",className:"mbe-2",children:D?"".concat("disable-account"===l?"User Disabled":"enable-account"===l?"User Enabled":"verified-account"===l?"User Verified":"deleteProductCategory"===l?"Delete Category":"unverified"===l?"User Unverified":"deleteProductBrand"===l?"Delete Brand":"deletePost"===l?"Delete Post":"deleteNewCategory"===l?"Delete New Category":"deleteServiceCenter"===l?"Delete Service Center":"deleteProductDiscount"===l?"Delete Product Discount":"yes"):"Cancelled"}),(0,r.jsx)(d.Z,{color:"text.primary",children:D?(0,r.jsxs)(r.Fragment,{children:["verified-account"===l&&"Your account has been verified successfully.","unverified-account"===l&&"Your account has been unverified successfully.","disable-account"===l&&"User has been disabled.","enable-account"===l&&"User has been enabled.","deleteProductCategory"===l&&"Your Category has been deleted successfully.","deleteServiceCenter"===l&&"Your Service Center has been deleted successfully.","deleteNewCategory"===l&&"Your New Category has been deleted successfully.","deleteProductDiscount"===l&&"Your Product Discount has been deleted successfully.","deleteProductBrand"===l&&"Your Category has been deleted successfully.","deletePost"===l&&"Your Post has been deleted successfully.","delete-customer"===l&&"Your customer removed successfully."]}):(0,r.jsxs)(r.Fragment,{children:["verified-account"===l&&"User Verify Cancelled!","unverified-account"===l&&"User Unverify Cancelled!","disable-account"===l&&"Cancelled Disabled :)","deleteProductCategory"===l&&"Category Deletion Cancelled","deleteProductDiscount"===l&&"Product Discount Deletion Cancelled","deleteServiceCenter"===l&&"Service Center Deletion Cancelled","deleteNewCategory"===l&&"New Category Deletion Cancelled","deleteProductBrand"===l&&"Brand Deletion Cancelled","deletePost"===l&&"Post Deletion Cancelled!","delete-customer"===l&&"Customer Deletion Cancelled"]})})]}),(0,r.jsx)(o.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:(0,r.jsx)(u.Z,{variant:"contained",color:"success",onClick:q,children:"Ok"})})]})]})}},47380:function(e,n,t){"use strict";var r=t(57437);t(2265);var i=t(3550),a=t(9188);n.Z=()=>{let{globalMsg:e,setGlobalMsg:n}=(0,a.q)();return(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>n(null),message:e})})}},60625:function(e,n){"use strict";n.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},36887:function(e,n){"use strict";n.Z={templateName:"ALPHA",homePageUrl:"/user/list",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},1552:function(e,n,t){"use strict";t.d(n,{BM:function(){return ej},DR:function(){return ek},Ff:function(){return ea},HT:function(){return el},Hd:function(){return ec},J2:function(){return eT},J9:function(){return et},JB:function(){return eZ},KN:function(){return eC},Lh:function(){return eM},MP:function(){return ee},MZ:function(){return ew},O7:function(){return eA},Qm:function(){return eU},SB:function(){return ed},SZ:function(){return ev},Sf:function(){return ep},Si:function(){return eR},Zq:function(){return eb},aY:function(){return es},bc:function(){return eY},dE:function(){return em},dn:function(){return eB},en:function(){return eF},hB:function(){return K},he:function(){return eq},hq:function(){return X},jN:function(){return eD},ju:function(){return eu},mU:function(){return ex},mt:function(){return eI},oe:function(){return eo},rV:function(){return eN},tC:function(){return eP},tt:function(){return ef},tz:function(){return eg},u7:function(){return ei},uv:function(){return er},vl:function(){return eS},wU:function(){return eh},yG:function(){return e$},yn:function(){return e_},z7:function(){return ey},zN:function(){return en}});var r=t(48646),i=t(21432);function a(){let e=(0,r._)(["\n  mutation adminSignIn($email: String!, $password: String!) {\n    AdminSignIn(email: $email, password: $password) {\n      token\n      message\n    }\n  }\n"]);return a=function(){return e},e}function s(){let e=(0,r._)(["\n  mutation addCategory($data: product_categories_insert_input!) {\n    insert_product_categories_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}function o(){let e=(0,r._)(["\n  mutation addCategory($data: brands_insert_input!) {\n    insert_brands_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}function d(){let e=(0,r._)(["\n  mutation addProduct(\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n    $product_medias: product_medias_arr_rel_insert_input!\n  ) {\n    insert_products_one(\n      object: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n        product_medias: $product_medias\n      }\n    ) {\n      id\n    }\n  }\n"]);return d=function(){return e},e}function u(){let e=(0,r._)(["\n  mutation editProduct(\n    $id: uuid!\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n      }\n    ) {\n      id\n    }\n  }\n"]);return u=function(){return e},e}function l(){let e=(0,r._)(["\n  mutation addNews($data: news_insert_input!) {\n    insert_news_one(object: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,r._)(["\n  mutation deleteProduct($id: uuid!) {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function m(){let e=(0,r._)(["\n  mutation deleteBrand($id: uuid!) {\n    delete_brands_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function _(){let e=(0,r._)(["\n  mutation deleteProductCat($id: uuid!) {\n    delete_product_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return _=function(){return e},e}function p(){let e=(0,r._)(["\n  mutation deleteNewCat($id: uuid!) {\n    delete_news_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function f(){let e=(0,r._)(["\n  mutation addNewCat($title: String!) {\n    insert_news_categories_one(object: { title: $title }) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function h(){let e=(0,r._)(["\n  mutation deleteNews($id: uuid!) {\n    delete_news_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return h=function(){return e},e}function g(){let e=(0,r._)(["\n  mutation deleteInvoice($id: uuid!) {\n    delete_invoices_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return g=function(){return e},e}function x(){let e=(0,r._)(["\n  mutation aa($id: uuid!) {\n    delete_orders_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return x=function(){return e},e}function v(){let e=(0,r._)(["\n  mutation deleteDealer($id: uuid!) {\n    delete_dealers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function y(){let e=(0,r._)(["\n  mutation addDealer($data: dealers_insert_input!) {\n    insert_dealers_one(object: $data) {\n      id\n    }\n  }\n"]);return y=function(){return e},e}function $(){let e=(0,r._)(["\n  mutation addNewProducts($data: news_related_products_insert_input!) {\n    insert_news_related_products_one(object: $data) {\n      id\n    }\n  }\n"]);return $=function(){return e},e}function b(){let e=(0,r._)(["\n  mutation editNewProducts($id: uuid!, $data: news_set_input!) {\n    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return b=function(){return e},e}function j(){let e=(0,r._)(["\n  mutation aa($news_id: uuid!) {\n    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return j=function(){return e},e}function P(){let e=(0,r._)(["\n  mutation aa($content_type: String!, $folder: String!) {\n    getFileUploadUrl(content_type: $content_type, folder: $folder) {\n      error\n      message\n      fileName\n      fileUploadUrl\n    }\n  }\n"]);return P=function(){return e},e}function C(){let e=(0,r._)(["\n  mutation orderStatus($order_id: uuid!, $status: String!) {\n    updateOrderStatus(order_id: $order_id, status: $status) {\n      message\n    }\n  }\n"]);return C=function(){return e},e}function S(){let e=(0,r._)(["\n  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {\n    updateServiceStatus(service_token_id: $service_token_id, status: $status) {\n      message\n    }\n  }\n"]);return S=function(){return e},e}function w(){let e=(0,r._)(["\n  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {\n    acceptServiceToken(\n      is_warranty_valid: $is_warranty_valid\n      service_fee: $service_fee\n      service_token_id: $service_token_id\n    ) {\n      message\n    }\n  }\n"]);return w=function(){return e},e}function k(){let e=(0,r._)(["\n  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {\n    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {\n      message\n    }\n  }\n"]);return k=function(){return e},e}function Z(){let e=(0,r._)(["\n  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      role\n      status\n    }\n  }\n"]);return Z=function(){return e},e}function N(){let e=(0,r._)(["\n  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {\n    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {\n      message\n    }\n  }\n"]);return N=function(){return e},e}function D(){let e=(0,r._)(["\n  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {\n    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {\n      message\n    }\n  }\n"]);return D=function(){return e},e}function A(){let e=(0,r._)(["\n  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {\n    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      status\n    }\n  }\n"]);return A=function(){return e},e}function F(){let e=(0,r._)(["\n  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {\n    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return F=function(){return e},e}function q(){let e=(0,r._)(["\n  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {\n    addInvoicePayment(\n      amount: $amount\n      invoice_id: $invoice_id\n      payment_date: $payment_date\n      payment_method: $payment_method\n    ) {\n      message\n    }\n  }\n"]);return q=function(){return e},e}function U(){let e=(0,r._)(["\n  mutation sendQInvoice($quotation_id: uuid!) {\n    sendInvoice(quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return U=function(){return e},e}function I(){let e=(0,r._)(["\n  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {\n    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {\n      id\n    }\n  }\n"]);return I=function(){return e},e}function M(){let e=(0,r._)(["\n  mutation deleteAdmin($id: uuid!) {\n    delete_admins_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return M=function(){return e},e}function B(){let e=(0,r._)(["\n  mutation deleteServiceCenter($id: uuid!) {\n    delete_service_centers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return B=function(){return e},e}function Y(){let e=(0,r._)(["\n  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {\n    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {\n      message\n      token\n    }\n  }\n"]);return Y=function(){return e},e}function R(){let e=(0,r._)(["\n  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {\n    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      email\n      role\n    }\n  }\n"]);return R=function(){return e},e}function T(){let e=(0,r._)(["\n  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {\n    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {\n      message\n      token\n    }\n  }\n"]);return T=function(){return e},e}function W(){let e=(0,r._)(["\n  mutation addSeriveCenter($data: service_centers_insert_input!) {\n    insert_service_centers_one(object: $data) {\n      id\n      name\n      phone\n      address\n      created_at\n      updated_at\n    }\n  }\n"]);return W=function(){return e},e}function E(){let e=(0,r._)(["\n  mutation editService($id: uuid!, $data: service_tokens_set_input!) {\n    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      service_fee\n    }\n  }\n"]);return E=function(){return e},e}function O(){let e=(0,r._)(["\n  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {\n    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      phone\n      address\n    }\n  }\n"]);return O=function(){return e},e}function z(){let e=(0,r._)(["\n  mutation deleteProductDiscount($id: uuid!) {\n    delete_product_discounts_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return z=function(){return e},e}function Q(){let e=(0,r._)(["\n  mutation orderComplete($id: uuid!, $completion_photo_url: String!, $remark: String!) {\n    update_orders_by_pk(\n      pk_columns: { id: $id }\n      _set: { completion_photo_url: $completion_photo_url, remark: $remark }\n    ) {\n      id\n      completion_photo_url\n      remark\n    }\n  }\n"]);return Q=function(){return e},e}function J(){let e=(0,r._)(["\n  mutation addDiscount($data: product_discounts_insert_input!) {\n    insert_product_discounts_one(object: $data) {\n      id\n      min_order\n      discount_type\n      customer_type\n      created_at\n      updated_at\n    }\n  }\n"]);return J=function(){return e},e}function V(){let e=(0,r._)(["\n  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {\n    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      min_order\n      discount_type\n      customer_type\n      created_at\n      updated_at\n    }\n  }\n"]);return V=function(){return e},e}function H(){let e=(0,r._)(["\n  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {\n    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return H=function(){return e},e}function L(){let e=(0,r._)(["\n  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {\n    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return L=function(){return e},e}function G(){let e=(0,r._)(["\n  mutation editNewCat($id: uuid!, $title: String!) {\n    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      id\n      title\n    }\n  }\n"]);return G=function(){return e},e}let K=(0,i.Ps)(a()),X=(0,i.Ps)(s()),ee=(0,i.Ps)(o()),en=(0,i.Ps)(d()),et=(0,i.Ps)(u()),er=(0,i.Ps)(l()),ei=(0,i.Ps)(c()),ea=(0,i.Ps)(m()),es=(0,i.Ps)(_()),eo=(0,i.Ps)(p()),ed=(0,i.Ps)(f()),eu=(0,i.Ps)(h());(0,i.Ps)(g());let el=(0,i.Ps)(x());(0,i.Ps)(v()),(0,i.Ps)(y());let ec=(0,i.Ps)($()),em=(0,i.Ps)(b()),e_=(0,i.Ps)(j()),ep=(0,i.Ps)(P()),ef=(0,i.Ps)(C()),eh=(0,i.Ps)(S()),eg=(0,i.Ps)(w()),ex=(0,i.Ps)(k()),ev=(0,i.Ps)(Z()),ey=(0,i.Ps)(N()),e$=(0,i.Ps)(D()),eb=(0,i.Ps)(A()),ej=(0,i.Ps)(F()),eP=(0,i.Ps)(q()),eC=(0,i.Ps)(U()),eS=(0,i.Ps)(I()),ew=(0,i.Ps)(M()),ek=(0,i.Ps)(B()),eZ=(0,i.Ps)(Y()),eN=(0,i.Ps)(R()),eD=(0,i.Ps)(T()),eA=(0,i.Ps)(W()),eF=(0,i.Ps)(E()),eq=(0,i.Ps)(O()),eU=(0,i.Ps)(z()),eI=(0,i.Ps)(Q()),eM=(0,i.Ps)(J()),eB=(0,i.Ps)(V()),eY=(0,i.Ps)(H()),eR=(0,i.Ps)(L()),eT=(0,i.Ps)(G())},24879:function(e,n,t){"use strict";t.d(n,{default:function(){return q}});var r=t(57437),i=t(2265),a=t(76520),s=t(75519),o=t(60335),d=t(67838),u=t(48965),l=t(83719),c=t(56800),m=t.n(c),_=t(13541),p=t(54175),f=t(33514),h=t(58438),g=t(14595),x=t(39343),v=t(23944),y=t(1552),$=t(47380),b=t(9188),j=t(44514),P=e=>{let{setGlobalMsg:n}=(0,b.q)(),{open:t,handleClose:a,serviceCenterData:d,setData:c}=e,[m]=(0,v.D)(y.O7);(0,i.useRef)(null);let{control:_,reset:p,handleSubmit:f,formState:{errors:j}}=(0,x.cI)({defaultValues:{name:"",phone:"",address:""}}),P=async e=>{c([...null!=d?d:[],(await m({variables:{data:{address:e.address,name:e.name,phone:e.phone}}})).data.insert_service_centers_one]),C(),n("➕ Added New Data")},C=()=>{a(),p({title:"",description:""})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.ZP,{open:t,anchor:"right",variant:"temporary",onClose:C,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(l.Z,{variant:"h5",children:"Add Admin"}),(0,r.jsx)(o.Z,{size:"small",onClick:C,children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(g.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:f(e=>P(e)),className:"flex flex-col gap-5",children:[(0,r.jsx)(x.Qr,{name:"name",control:_,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Name",placeholder:"",...j.name&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsx)(x.Qr,{name:"phone",control:_,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Phone",type:"phone",placeholder:"",...j.phone&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsx)(x.Qr,{name:"address",control:_,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Address",placeholder:"",...j.address&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(s.Z,{variant:"contained",type:"submit",children:"Add"}),(0,r.jsx)(s.Z,{variant:"outlined",color:"error",type:"reset",onClick:C,children:"Discard"})]})]})})]}),(0,r.jsx)($.Z,{})]})},C=t(43808),S=e=>{let{setGlobalMsg:n}=(0,b.q)(),{open:t,handleClose:a,serviceCenterData:d,setData:c}=e,[m]=(0,v.D)(y.he),{data:_}=(0,C.kJ)(j.kI);(0,i.useRef)(null);let{control:p,reset:f,handleSubmit:P,formState:{errors:S}}=(0,x.cI)({defaultValues:{name:"",address:"",phone:""}}),w=async e=>{let t=await m({variables:{id:d.id,data:{phone:e.phone,name:e.name,address:e.address}}});c(e=>e.map(e=>e.id===(null==d?void 0:d.id)?{...e,...t.data.update_service_centers_by_pk}:e)),k(),n("✅ Service Data has been updated")};(0,i.useEffect)(()=>{d&&f({name:d.name||"",address:d.address||"",phone:d.phone||""})},[d,f]);let k=()=>{a()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.ZP,{open:t,anchor:"right",variant:"temporary",onClose:k,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(l.Z,{variant:"h5",children:"Edit Service Center"}),(0,r.jsx)(o.Z,{size:"small",onClick:()=>{a()},children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(g.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:P(e=>w(e)),className:"flex flex-col gap-5",children:[(0,r.jsx)(x.Qr,{name:"name",control:p,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Name",placeholder:"",...S.name&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsx)(x.Qr,{name:"phone",control:p,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Phone",placeholder:"",...S.phone&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsx)(x.Qr,{name:"address",control:p,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Address",placeholder:"",...S.address&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(s.Z,{variant:"contained",type:"submit",children:"Update"}),(0,r.jsx)(s.Z,{variant:"outlined",color:"error",type:"reset",onClick:k,children:"Discard"})]})]})})]}),(0,r.jsx)($.Z,{})]})};t(81128);var w=t(47868),k=t(6830),Z=t(18156),N=t.n(Z);let D=(e,n,t,r)=>{let i=(0,_.O4)(e.getValue(n),t);return r({itemRank:i}),i.passed},A=e=>{let{value:n,onChange:t,debounce:a=500,...s}=e,[o,d]=(0,i.useState)(n);return(0,i.useEffect)(()=>{d(n)},[n]),(0,i.useEffect)(()=>{let e=setTimeout(()=>{t(o)},a);return()=>clearTimeout(e)},[o]),(0,r.jsx)(u.Z,{...s,value:o,onChange:e=>d(e.target.value),size:"small"})},F=(0,p.Cl)();var q=()=>{let{setGlobalMsg:e}=(0,b.q)(),{data:n}=(0,C.kJ)(j.TX),t=n.service_centers,[u]=(0,v.D)(y.DR),[c,_]=(0,i.useState)(!1),[h,g]=(0,i.useState)(!1),[x,Z]=(0,i.useState)(),[q,U]=(0,i.useState)({}),[I,M]=(0,i.useState)(t),[B,Y]=(0,i.useState)(""),R=(e,n,t)=>({children:e,color:n,variant:t}),T=e=>{Z(e),g(!h)},W=(0,i.useMemo)(()=>[F.accessor("id",{header:"ID",cell:e=>{var n;let{row:t}=e;return(0,r.jsx)(l.Z,{children:null===(n=t.original.id)||void 0===n?void 0:n.substring(0,10)})}}),F.accessor("name",{header:"Name",cell:e=>{let{row:n}=e;return(0,r.jsx)("div",{className:"flex items-center gap-3",children:(0,r.jsx)("div",{className:"flex flex-col items-start",children:(0,r.jsx)(l.Z,{className:"font-medium",color:"text.primary",children:n.original.name})})})}}),F.accessor("phone",{header:"Phone",cell:e=>{let{row:n}=e;return(0,r.jsx)(l.Z,{type:"phone",children:n.original.phone})}}),F.accessor("address",{header:"Address",cell:e=>{let{row:n}=e;return(0,r.jsx)(l.Z,{className:"w-80 text-wrap",children:n.original.address})}}),F.accessor("created_at",{header:"Date",cell:e=>{var n;let{row:t}=e;return(0,r.jsx)(l.Z,{children:null===(n=t.original.created_at)||void 0===n?void 0:n.substring(0,10)})}}),F.accessor("actions",{header:"Actions",cell:e=>{let{row:n}=e;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(o.Z,{size:"small",onClick:()=>T(n.original),children:(0,r.jsx)("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),(0,r.jsx)(w.Z,{element:s.Z,elementProps:R((0,r.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:k.Z,dialogProps:{type:"deleteServiceCenter"},dataId:n.original.id,setData:M,data:I})]})},enableSorting:!1})],[I]),E=(0,f.b7)({data:I,columns:W,filterFns:{fuzzy:D},state:{rowSelection:q,globalFilter:B},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:D,onRowSelectionChange:U,getCoreRowModel:(0,p.sC)(),onGlobalFilterChange:Y,getFilteredRowModel:(0,p.vL)(),getSortedRowModel:(0,p.tj)(),getPaginationRowModel:(0,p.G_)(),getFacetedRowModel:(0,p.o6)(),getFacetedUniqueValues:(0,p.JG)(),getFacetedMinMaxValues:(0,p.HO)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[(0,r.jsx)(A,{value:null!=B?B:"",onChange:e=>Y(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,r.jsx)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:(0,r.jsx)(s.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>_(!c),startIcon:(0,r.jsx)("i",{className:"ri-add-line"}),children:"Add Service Center"})})]}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:N().table,children:[(0,r.jsx)("thead",{children:E.getHeaderGroups().map(e=>(0,r.jsx)("tr",{children:e.headers.map(e=>{var n;return(0,r.jsx)("th",{children:e.isPlaceholder?null:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,f.ie)(e.column.columnDef.header,e.getContext()),null!==(n=({asc:(0,r.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,r.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==n?n:null]})})},e.id)})},e.id))}),0===E.getFilteredRowModel().rows.length?(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:E.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,r.jsx)("tbody",{children:E.getRowModel().rows.slice(0,E.getState().pagination.pageSize).map(e=>(0,r.jsx)("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,r.jsx)("td",{children:(0,f.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,r.jsx)(d.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:E.getFilteredRowModel().rows.length,rowsPerPage:E.getState().pagination.pageSize,page:E.getState().pagination.pageIndex,onPageChange:(e,n)=>{E.setPageIndex(n)},onRowsPerPageChange:e=>E.setPageSize(Number(e.target.value))})]}),(0,r.jsx)(P,{open:c,serviceCenterData:I,setData:M,handleClose:()=>_(!c)}),(0,r.jsx)(S,{open:h,serviceCenterData:x,setData:M,handleClose:()=>g(!h)}),(0,r.jsx)($.Z,{})]})}},18156:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[956,1441,3733,7138,9855,8329,7660,7800,8965,6715,6805,6101,5313,8325,8674,7172,4175,3550,779,9343,8438,7838,887,4514,2971,7023,1744],function(){return e(e.s=57615)}),_N_E=e.O()}]);