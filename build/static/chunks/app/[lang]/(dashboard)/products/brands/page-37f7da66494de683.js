(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8146,9349],{12342:function(e,n,t){Promise.resolve().then(t.bind(t,13126))},20593:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r,i=t(57221),a=t(99683),o=t(31229),s=t(27494),d=t(80810),u=t(54792),l=t(84323),c=t(37772),_=t(66651),m=t(73815),p=t(31157),f=t(483);function g(e){return(0,f.ZP)("MuiInputAdornment",e)}let h=(0,p.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v=t(96013),x=t(59533);let $=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=e=>{let{classes:n,disablePointerEvents:t,hiddenLabel:r,position:i,size:a,variant:o}=e,s={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,u.Z)(i)),o,r&&"hiddenLabel",a&&"size".concat((0,u.Z)(a))]};return(0,d.Z)(s,g,n)},b=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,n["position".concat((0,u.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})(e=>{let{theme:n,ownerState:t}=e;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&{["&.".concat(h.positionStart,"&:not(.").concat(h.hiddenLabel,")")]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})});var j=o.forwardRef(function(e,n){let t=(0,v.i)({props:e,name:"MuiInputAdornment"}),{children:d,className:u,component:m="div",disablePointerEvents:p=!1,disableTypography:f=!1,position:g,variant:h}=t,j=(0,i.Z)(t,$),w=(0,_.Z)()||{},P=h;h&&w.variant,w&&!P&&(P=w.variant);let S=(0,a.Z)({},t,{hiddenLabel:w.hiddenLabel,size:w.size,disablePointerEvents:p,position:g,variant:P}),k=y(S);return(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(b,(0,a.Z)({as:m,ownerState:S,className:(0,s.Z)(k.root,u),ref:n},j,{children:"string"!=typeof d||f?(0,x.jsxs)(o.Fragment,{children:["start"===g?r||(r=(0,x.jsx)("span",{className:"notranslate",children:"​"})):null,d]}):(0,x.jsx)(l.Z,{color:"text.secondary",children:d})}))})})},79505:function(e,n,t){"use strict";t.r(n);var r=t(59533),i=t(31229),a=t(96353),o=t(10358),s=t(66873),d=t(51442),u=t(6532),l=t(50529),c=t(93730),_=t(72315),m=t(46355),p=t(84448),f=t(48111),g=t(72860),h=t.n(g),v=t(59787);let x=e=>{let{tooltipProps:n,children:t}=e;return(null==n?void 0:n.title)?(0,r.jsx)(o.Z,{...n,children:t}):t},$=e=>{let{children:n,option:t}=e;return t.href?(0,r.jsx)(s.Z,{component:a.default,href:t.href,...t.linkProps,children:n}):(0,r.jsx)(r.Fragment,{children:n})};n.default=e=>{let{tooltipProps:n,icon:t,iconClassName:a,options:o,leftAlignMenu:s,iconButtonProps:g}=e,[y,b]=(0,i.useState)(!1),j=(0,i.useRef)(null),{settings:w}=(0,v.r)(),P=e=>{j.current&&j.current.contains(e.target)||b(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{tooltipProps:n,children:(0,r.jsx)(p.Z,{ref:j,size:"small",onClick:()=>{b(e=>!e)},...g,children:"string"==typeof t?(0,r.jsx)("i",{className:h()(t,a)}):t||(0,r.jsx)("i",{className:h()("ri-more-2-line",a)})})}),(0,r.jsx)(d.Z,{open:y,anchorEl:j.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:n}=e;return(0,r.jsx)(_.Z,{...n,children:(0,r.jsx)(m.Z,{className:"bordered"===w.skin?"border shadow-none":"shadow-lg",children:(0,r.jsx)(c.d,{onClickAway:P,children:(0,r.jsx)(l.Z,{autoFocusItem:y,children:o.map((e,n)=>"string"==typeof e?(0,r.jsx)(u.Z,{onClick:P,children:e},n):"divider"in e?e.divider&&(0,r.jsx)(f.Z,{...e.dividerProps},n):(0,r.jsx)(u.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:n=>{P(n),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(n)},children:(0,r.jsxs)($,{option:e,children:[("string"==typeof e.icon?(0,r.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},n))})})})})}})]})}},64825:function(e,n,t){"use strict";t.d(n,{J:function(){return u},SettingsProvider:function(){return l}});var r=t(59533),i=t(31229),a=t(23310),o=t(13231),s=t(75443);let d=(e,n)=>{let[t,r]=(0,s.Z)(e);return[(0,i.useMemo)(()=>t?JSON.parse(t):n,[t]),e=>{r(JSON.stringify(e))}]},u=(0,i.createContext)(null),l=e=>{let n={mode:a.Z.mode,skin:a.Z.skin,semiDark:a.Z.semiDark,layout:a.Z.layout,navbarContentWidth:a.Z.navbar.contentWidth,contentWidth:a.Z.contentWidth,footerContentWidth:a.Z.footer.contentWidth,primaryColor:o.Z[0].main},t={...n,mode:e.mode||a.Z.mode},[s,l]=d(a.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:t),[c,_]=(0,i.useState)("{}"!==JSON.stringify(s)?s:t),m=(e,n)=>{let{updateCookie:t=!0}=n||{};_(n=>{let r={...n,...e};return t&&l(r),r})},p=(0,i.useMemo)(()=>JSON.stringify(n)!==JSON.stringify(c),[c]);return(0,r.jsx)(u.Provider,{value:{settings:c,updateSettings:m,isSettingsChanged:p,resetSettings:()=>{m(n)},updatePageSettings:e=>(m(e,{updateCookie:!1}),()=>m(s,{updateCookie:!1}))},children:e.children})}},59787:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var r=t(31229),i=t(64825);let a=()=>{let e=(0,r.useContext)(i.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},12895:function(e,n,t){"use strict";t.d(n,{ApolloWrapper:function(){return m},q:function(){return _}});var r=t(59533),i=t(50421),a=t(73079),o=t(41502),s=t(17856),d=t(31229);let u=(0,d.createContext)();function l(){let e=new a.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),n=(0,s.v)(async(e,n)=>{let{headers:t}=n;try{return{headers:{...t,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:t}}});return new o.fe({cache:new o.h4,link:c.concat(n).concat(e)})}let c=(0,i.q)(e=>{let{graphQLErrors:n,networkError:t}=e;n&&(console.log("graphql",n),n.forEach(e=>{let{extensions:n}=e;("invalid-headers"===n.code||"invalid-jwt"===n.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),t&&(console.log("[Network error]: ".concat(t)),alert("network connection problem"))}),_=()=>(0,d.useContext)(u);function m(e){let{children:n}=e,[t,i]=(0,d.useState)(null),[a,s]=(0,d.useState)(!1);return(0,r.jsx)(o.e$,{makeClient:l,children:(0,r.jsx)(u.Provider,{value:{globalMsg:t,setGlobalMsg:i,loading:a,setLoading:s},children:n})})}},66967:function(e,n,t){"use strict";var r=t(59533),i=t(31229);n.Z=e=>{let{element:n,dialog:t,elementProps:a,dialogProps:o,dataId:s,setData:d,data:u}=e,[l,c]=(0,i.useState)(!1),{onClick:_,...m}=a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{onClick:e=>{_&&_(e),c(!0)},...m}),(0,r.jsx)(t,{open:l,setOpen:c,...o,dataId:s,setData:d,data:u})]})}},83338:function(e,n,t){"use strict";var r=t(59533),i=t(31229),a=t(83354),o=t(8957),s=t(5443),d=t(84323),u=t(29900);t(72860);var l=t(45641),c=t(29349),_=t(61250),m=t(31029);n.Z=e=>{let{open:n,setOpen:t,type:p,dataId:f,data:g,setData:h}=e,{userId:v}=(0,_.useParams)(),[x]=(0,l.D)(c.HT),[$]=(0,l.D)(c.SZ,{refetchQueries:[m.L5]}),[y]=(0,l.D)(c.z7,{refetchQueries:[m.L5]}),[b]=(0,l.D)(c.aY),[j]=(0,l.D)(c.Ff),[w]=(0,l.D)(c.ju),[P]=(0,l.D)(c.oe),[S]=(0,l.D)(c.DR),[k]=(0,l.D)(c.Qm),[Z,C]=(0,i.useState)(!1),[N,D]=(0,i.useState)(!1),A="disable-account"===p?"div":i.Fragment,F=async e=>{if(!0===e)try{"disable-account"===p&&await $({variables:{id:v,data:{status:"disable"}}}),"enable-account"===p&&await $({variables:{id:v,data:{status:"verified"}}}),"verified-account"===p&&await y({variables:{user_id:v,is_verified:!0}}),"unverified-account"===p&&await y({variables:{user_id:v,is_verified:!1}}),"deleteProductCategory"===p&&(await b({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteProductBrand"===p&&(await j({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deletePost"===p&&(await w({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteNewCategory"===p&&(await P({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteServiceCenter"===p&&(await S({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteProductDiscount"===p&&(await k({variables:{id:f}}),h(g.filter(e=>e.id!==f))),D(e),t(!1)}catch(e){console.log("Error",e)}else t(!1);D(e),C(!0),t(!1)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{fullWidth:!0,maxWidth:"xs",open:n,onClose:()=>t(!1),children:[(0,r.jsxs)(o.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,r.jsx)("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,r.jsxs)(A,{..."disable-account"===p&&{className:"flex flex-col items-center gap-2"},children:[(0,r.jsxs)(d.Z,{variant:"h4",children:["unsubscribe"===p&&"Are you sure to cancel your subscription?","disable-account"===p&&"Are you sure?","delete-order"===p&&"Are you sure?","delete-customer"===p&&"Are you sure?"]}),"verified-account"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductDiscount"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteServiceCenter"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===p&&(0,r.jsx)(d.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,r.jsxs)(s.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[(0,r.jsx)(u.Z,{variant:"contained",onClick:()=>F(!0),children:"disable-account"===p?"Yes, Disabel User!":"enable-account"===p?"Yes, Enable User!":"deleteProductCategory"===p?"Yes, Delete Category!":"deleteProductBrand"===p?"Yes, Delete Brand":"delete-customer"===p?"Yes, Delete Customer!":"verified-account"===p?"Yes , User Verify":"unverified-account"===p?"Yes, User Unverify":"deletePost"===p?"Yes, Delete Post":"deleteNewCategory"===p?"Yes, Delete Category":"deleteServiceCenter"===p?"Yes, Delete Service Center":"deleteProductDiscount"===p?"Yes, Delete Product Discount":"Yes"}),(0,r.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:()=>{F(!1)},children:"Cancel"})]})]})})}},76422:function(e,n,t){"use strict";var r=t(59533);t(31229);var i=t(36772),a=t(12895);n.Z=()=>{let{globalMsg:e,setGlobalMsg:n}=(0,a.q)();return(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>n(null),message:e})})}},13231:function(e,n){"use strict";n.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,n){"use strict";n.Z={templateName:"ALPHA",homePageUrl:"/user/list",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},29349:function(e,n,t){"use strict";t.d(n,{BM:function(){return eS},DR:function(){return eD},Ff:function(){return ed},HT:function(){return em},Hd:function(){return ep},J2:function(){return eL},J9:function(){return ea},JB:function(){return eA},KN:function(){return eZ},Lh:function(){return ez},MP:function(){return er},MZ:function(){return eN},O7:function(){return eU},Qm:function(){return eB},SB:function(){return ec},SZ:function(){return eb},Sf:function(){return eh},Si:function(){return eO},Zq:function(){return eP},aY:function(){return eu},bc:function(){return eT},dE:function(){return ef},dn:function(){return eR},en:function(){return eE},hB:function(){return en},he:function(){return eq},hq:function(){return et},jN:function(){return eI},ju:function(){return e_},mU:function(){return ey},mt:function(){return eM},oe:function(){return el},pE:function(){return eW},rV:function(){return eF},si:function(){return eJ},tC:function(){return ek},tt:function(){return ev},tz:function(){return e$},u7:function(){return es},ui:function(){return eY},uv:function(){return eo},vl:function(){return eC},wU:function(){return ex},yG:function(){return ew},yn:function(){return eg},z7:function(){return ej},zN:function(){return ei}});var r=t(42541),i=t(14595);function a(){let e=(0,r._)(["\n  mutation adminSignIn($email: String!, $password: String!) {\n    AdminSignIn(email: $email, password: $password) {\n      token\n      message\n    }\n  }\n"]);return a=function(){return e},e}function o(){let e=(0,r._)(["\n  mutation addCategory($data: product_categories_insert_input!) {\n    insert_product_categories_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}function s(){let e=(0,r._)(["\n  mutation addCategory($data: brands_insert_input!) {\n    insert_brands_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}function d(){let e=(0,r._)(["\n  mutation addProduct(\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $dealer_price: numeric!\n    $consumer_price: numeric!\n    $warranty_period: String\n    $product_medias: product_medias_arr_rel_insert_input!\n  ) {\n    insert_products_one(\n      object: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        dealer_price: $dealer_price\n        consumer_price: $consumer_price\n        warranty_period: $warranty_period\n        product_medias: $product_medias\n      }\n    ) {\n      id\n      title\n\n      consumer_price\n      dealer_price\n      created_at\n      description_html\n      serial_number\n      warranty_period\n      product_medias {\n        media_url\n        media_type\n      }\n      brand {\n        title\n      }\n    }\n  }\n"]);return d=function(){return e},e}function u(){let e=(0,r._)(["\n  mutation editProduct(\n    $id: uuid!\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String\n    $dealer_price: numeric!\n    $consumer_price: numeric!\n    $warranty_period: String\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        dealer_price: $dealer_price\n        consumer_price: $consumer_price\n        warranty_period: $warranty_period\n      }\n    ) {\n      id\n      title\n\n      consumer_price\n      dealer_price\n      created_at\n      description_html\n      serial_number\n      warranty_period\n      product_medias {\n        media_url\n        media_type\n      }\n      brand {\n        title\n      }\n    }\n  }\n"]);return u=function(){return e},e}function l(){let e=(0,r._)(["\n  mutation addNews($data: news_insert_input!) {\n    insert_news_one(object: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,r._)(["\n  mutation deleteProduct($id: uuid!) {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function _(){let e=(0,r._)(["\n  mutation deleteBrand($id: uuid!) {\n    delete_brands_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return _=function(){return e},e}function m(){let e=(0,r._)(["\n  mutation deleteProductCat($id: uuid!) {\n    delete_product_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function p(){let e=(0,r._)(["\n  mutation deleteNewCat($id: uuid!) {\n    delete_news_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function f(){let e=(0,r._)(["\n  mutation addNewCat($title: String!) {\n    insert_news_categories_one(object: { title: $title }) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function g(){let e=(0,r._)(["\n  mutation deleteNews($id: uuid!) {\n    delete_news_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return g=function(){return e},e}function h(){let e=(0,r._)(["\n  mutation deleteInvoice($id: uuid!) {\n    delete_invoices_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return h=function(){return e},e}function v(){let e=(0,r._)(["\n  mutation aa($id: uuid!) {\n    delete_orders_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function x(){let e=(0,r._)(["\n  mutation deleteDealer($id: uuid!) {\n    delete_dealers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return x=function(){return e},e}function $(){let e=(0,r._)(["\n  mutation addDealer($data: dealers_insert_input!) {\n    insert_dealers_one(object: $data) {\n      id\n    }\n  }\n"]);return $=function(){return e},e}function y(){let e=(0,r._)(["\n  mutation addNewProducts($data: news_related_products_insert_input!) {\n    insert_news_related_products_one(object: $data) {\n      id\n    }\n  }\n"]);return y=function(){return e},e}function b(){let e=(0,r._)(["\n  mutation editNewProducts($id: uuid!, $data: news_set_input!) {\n    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return b=function(){return e},e}function j(){let e=(0,r._)(["\n  mutation aa($news_id: uuid!) {\n    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return j=function(){return e},e}function w(){let e=(0,r._)(["\n  mutation aa($content_type: String!, $folder: String!) {\n    getFileUploadUrl(content_type: $content_type, folder: $folder) {\n      error\n      message\n      fileName\n      fileUploadUrl\n    }\n  }\n"]);return w=function(){return e},e}function P(){let e=(0,r._)(["\n  mutation orderStatus($order_id: uuid!, $status: String!) {\n    updateOrderStatus(order_id: $order_id, status: $status) {\n      message\n    }\n  }\n"]);return P=function(){return e},e}function S(){let e=(0,r._)(["\n  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {\n    updateServiceStatus(service_token_id: $service_token_id, status: $status) {\n      message\n    }\n  }\n"]);return S=function(){return e},e}function k(){let e=(0,r._)(["\n  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {\n    acceptServiceToken(\n      is_warranty_valid: $is_warranty_valid\n      service_fee: $service_fee\n      service_token_id: $service_token_id\n    ) {\n      message\n    }\n  }\n"]);return k=function(){return e},e}function Z(){let e=(0,r._)(["\n  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {\n    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {\n      message\n    }\n  }\n"]);return Z=function(){return e},e}function C(){let e=(0,r._)(["\n  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      role\n      status\n    }\n  }\n"]);return C=function(){return e},e}function N(){let e=(0,r._)(["\n  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {\n    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {\n      message\n    }\n  }\n"]);return N=function(){return e},e}function D(){let e=(0,r._)(["\n  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {\n    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {\n      message\n    }\n  }\n"]);return D=function(){return e},e}function A(){let e=(0,r._)(["\n  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {\n    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {\n      message\n    }\n  }\n"]);return A=function(){return e},e}function F(){let e=(0,r._)(["\n  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {\n    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return F=function(){return e},e}function I(){let e=(0,r._)(["\n  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {\n    addInvoicePayment(\n      amount: $amount\n      invoice_id: $invoice_id\n      payment_date: $payment_date\n      payment_method: $payment_method\n    ) {\n      message\n    }\n  }\n"]);return I=function(){return e},e}function U(){let e=(0,r._)(["\n  mutation sendQInvoice($quotation_id: uuid!) {\n    sendInvoice(quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return U=function(){return e},e}function E(){let e=(0,r._)(["\n  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {\n    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {\n      id\n    }\n  }\n"]);return E=function(){return e},e}function q(){let e=(0,r._)(["\n  mutation deleteAdmin($id: uuid!) {\n    delete_admins_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return q=function(){return e},e}function B(){let e=(0,r._)(["\n  mutation deleteServiceCenter($id: uuid!) {\n    delete_service_centers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return B=function(){return e},e}function M(){let e=(0,r._)(["\n  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {\n    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {\n      message\n      token\n    }\n  }\n"]);return M=function(){return e},e}function z(){let e=(0,r._)(["\n  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {\n    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      email\n      role\n    }\n  }\n"]);return z=function(){return e},e}function R(){let e=(0,r._)(["\n  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {\n    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {\n      message\n      token\n    }\n  }\n"]);return R=function(){return e},e}function T(){let e=(0,r._)(["\n  mutation addSeriveCenter($data: service_centers_insert_input!) {\n    insert_service_centers_one(object: $data) {\n      id\n      name\n      phone\n      address\n      created_at\n      updated_at\n    }\n  }\n"]);return T=function(){return e},e}function O(){let e=(0,r._)(["\n  mutation editService($id: uuid!, $data: service_tokens_set_input!) {\n    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      service_fee\n    }\n  }\n"]);return O=function(){return e},e}function L(){let e=(0,r._)(["\n  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {\n    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      phone\n      address\n    }\n  }\n"]);return L=function(){return e},e}function W(){let e=(0,r._)(["\n  mutation deleteProductDiscount($id: uuid!) {\n    delete_product_discounts_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return W=function(){return e},e}function J(){let e=(0,r._)(["\n  mutation orderComplete($id: uuid!, $completion_photo_url: String!, $remark: String!) {\n    update_orders_by_pk(\n      pk_columns: { id: $id }\n      _set: { completion_photo_url: $completion_photo_url, remark: $remark }\n    ) {\n      id\n      completion_photo_url\n      remark\n    }\n  }\n"]);return J=function(){return e},e}function Y(){let e=(0,r._)(["\n  mutation addDiscount($data: product_discounts_insert_input!) {\n    insert_product_discounts_one(object: $data) {\n      id\n      min_order\n      product_id\n      discount_type\n      discounted_value\n      customer_type\n      created_at\n      updated_at\n    }\n  }\n"]);return Y=function(){return e},e}function Q(){let e=(0,r._)(["\n  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {\n    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      min_order\n      discount_type\n      customer_type\n      discounted_value\n      created_at\n      updated_at\n    }\n  }\n"]);return Q=function(){return e},e}function H(){let e=(0,r._)(["\n  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {\n    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return H=function(){return e},e}function V(){let e=(0,r._)(["\n  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {\n    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return V=function(){return e},e}function G(){let e=(0,r._)(["\n  mutation editNewCat($id: uuid!, $title: String!) {\n    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      id\n      title\n    }\n  }\n"]);return G=function(){return e},e}function K(){let e=(0,r._)(["\n  mutation imageUpload($data: product_medias_insert_input!) {\n    insert_product_medias_one(object: $data) {\n      id\n      product_id\n      media_url\n      media_type\n    }\n  }\n"]);return K=function(){return e},e}function X(){let e=(0,r._)(["\n  mutation deleteProductImage($id: uuid!) {\n    delete_product_medias_by_pk(id: $id) {\n      id\n      media_url\n      media_type\n    }\n  }\n"]);return X=function(){return e},e}function ee(){let e=(0,r._)(["\n  mutation resetUserPassword($user_id: uuid!, $confirmNewPassword: String!, $newPassword: String!) {\n    UpdateUserPassword(confirmNewPassword: $confirmNewPassword, user_id: $user_id, newPassword: $newPassword) {\n      message\n    }\n  }\n"]);return ee=function(){return e},e}let en=(0,i.Ps)(a()),et=(0,i.Ps)(o()),er=(0,i.Ps)(s()),ei=(0,i.Ps)(d()),ea=(0,i.Ps)(u()),eo=(0,i.Ps)(l()),es=(0,i.Ps)(c()),ed=(0,i.Ps)(_()),eu=(0,i.Ps)(m()),el=(0,i.Ps)(p()),ec=(0,i.Ps)(f()),e_=(0,i.Ps)(g());(0,i.Ps)(h());let em=(0,i.Ps)(v());(0,i.Ps)(x()),(0,i.Ps)($());let ep=(0,i.Ps)(y()),ef=(0,i.Ps)(b()),eg=(0,i.Ps)(j()),eh=(0,i.Ps)(w()),ev=(0,i.Ps)(P()),ex=(0,i.Ps)(S()),e$=(0,i.Ps)(k()),ey=(0,i.Ps)(Z()),eb=(0,i.Ps)(C()),ej=(0,i.Ps)(N()),ew=(0,i.Ps)(D()),eP=(0,i.Ps)(A()),eS=(0,i.Ps)(F()),ek=(0,i.Ps)(I()),eZ=(0,i.Ps)(U()),eC=(0,i.Ps)(E()),eN=(0,i.Ps)(q()),eD=(0,i.Ps)(B()),eA=(0,i.Ps)(M()),eF=(0,i.Ps)(z()),eI=(0,i.Ps)(R()),eU=(0,i.Ps)(T()),eE=(0,i.Ps)(O()),eq=(0,i.Ps)(L()),eB=(0,i.Ps)(W()),eM=(0,i.Ps)(J()),ez=(0,i.Ps)(Y()),eR=(0,i.Ps)(Q()),eT=(0,i.Ps)(H()),eO=(0,i.Ps)(V()),eL=(0,i.Ps)(G()),eW=(0,i.Ps)(K()),eJ=(0,i.Ps)(X()),eY=(0,i.Ps)(ee())},20397:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},c:function(){return u}});let r=["/en/dashboards","/en/products","/en/user","/en/orders","/en/news","/en/services","/en/service_token","/en/invoice","/en/quotations","/en/admin","/en/service_center","/en/ewarranties"],i=["/en/dashboards","/en/products","/en/services","/en/service_center","/en/news"],a=["/en/dashboards","/en/orders","/en/invoice","/en/quotations"],o=["/en/dashboards","/en/services","/en/service_token","/en/invoice"],s=["/en/dashboards","/en/orders"],d=["/en/dashboards","/en/orders","/en/invoice"],u=async(e,n,t)=>{try{return(await fetch(n,{method:"PUT",headers:{"Content-Type":"".concat(t,"/*"),"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}},l=(e,n)=>!!("admin"===e&&r.includes("/en/"+n)||"manager"===e&&i.includes("/en/"+n)||"service"===e&&o.includes("/en/"+n)||"sale"===e&&a.includes("/en/"+n))||!!("delivery"===e&&s.includes("/en/"+n))||!!("finance"===e&&d.includes("/en/"+n))},13126:function(e,n,t){"use strict";t.d(n,{default:function(){return E}});var r=t(59533),i=t(31229),a=t(76778),o=t(29900),s=t(84448),d=t(13954),u=t(61732),l=t(84323),c=t(72860),_=t.n(c),m=t(19880),p=t(65841),f=t(51480),g=t(88363),h=t(48111),v=t(20593),x=t(20526),$=t(45641),y=t(29349),b=t(12895),j=t(20397),w=e=>{var n;let{setGlobalMsg:t}=(0,b.q)(),{open:a,handleClose:d,brandData:c,setData:_,loading:m,setLoading:p}=e,[f]=(0,$.D)(y.MP),[w]=(0,$.D)(y.Sf),[P,S]=(0,i.useState)(""),[k,Z]=(0,i.useState)(""),C=(0,i.useRef)(null),{control:N,reset:D,handleSubmit:A,formState:{errors:F}}=(0,x.cI)({defaultValues:{title:"",description:""}}),I=async e=>{if(!P||0===P.length){Z("Please Select Image");return}try{p(!0);let n=await w({variables:{content_type:"image",folder:"quotations"}}),r=await (0,j.c)(P[0],n.data.getFileUploadUrl.fileUploadUrl,"image"),i=await f({variables:{data:{title:e.title,image_url:r}}});_([...c,i.data.insert_brands_one]),t("➕ Add New Product Brand"),p(!1),d(),U()}catch(e){t("❌ Title Must Be Unique"),console.log("Add Error ",e)}},U=()=>{D({title:"",image_url:""}),S("")};return(0,r.jsxs)(g.ZP,{open:a,anchor:"right",variant:"temporary",onClose:U,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(l.Z,{variant:"h5",children:"Add Brand"}),(0,r.jsx)(s.Z,{size:"small",onClick:()=>{d()},children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:A(e=>I(e)),className:"flex flex-col gap-5",children:[(0,r.jsx)(x.Qr,{name:"title",control:N,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Title",placeholder:"",...F.title&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(u.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:P?null===(n=P[0])||void 0===n?void 0:n.name:"",className:"flex-auto",InputProps:{readOnly:!0,endAdornment:P?(0,r.jsx)(v.Z,{position:"end",children:(0,r.jsx)(s.Z,{size:"small",edge:"end",onClick:()=>S(""),children:(0,r.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,r.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,r.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:n}=e.target;if(n&&0!==n.length){if("image"!==n[0].type.split("/")[0])Z("Please upload a valid image file."),S("");else{var t;Z(""),S(n),console.log("Selected file:",null===(t=n[0])||void 0===t?void 0:t.name)}}},ref:C})]})]}),k&&(0,r.jsx)(l.Z,{color:"error",children:k}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(o.Z,{variant:"contained",type:"submit",loading:m,children:"Add"}),(0,r.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:U,children:"Discard"})]})]})})]})};t(79505);var P=t(67875),S=t.n(P),k=t(40877),Z=t(31029),C=t(76422),N=e=>{let{setGlobalMsg:n}=(0,b.q)(),{open:t,handleClose:a,brandData:d,setData:c,loading:_,setLoading:m}=e,[p]=(0,$.D)(y.Si),[f]=(0,$.D)(y.Sf),[v,w]=(0,i.useState)(""),[P,S]=(0,i.useState)(),[k,Z]=(0,i.useState)(""),C=(0,i.useRef)(null),{control:N,reset:D,handleSubmit:A,formState:{errors:F}}=(0,x.cI)({defaultValues:{title:"",image_url:""}}),I=async e=>{try{m(!0);let t=d.image_url;if(v&&v!==(null==d?void 0:d.image_url)){let e=await f({variables:{content_type:"image",folder:"products"}});t=await (0,j.c)(v,e.data.getFileUploadUrl.fileUploadUrl,"image")}let r=await p({variables:{id:d.id,data:{title:e.title,image_url:t}}});c(e=>e.map(e=>e.id===(null==d?void 0:d.id)?{...e,...r.data.update_brands_by_pk}:e)),n("✅ Brand Data has been updated"),U()}catch(e){n("❌ Add Brand Error"),console.log("Add Error ",e)}},U=()=>{a(),D({title:"",description:""}),w("")};return(0,i.useEffect)(()=>{d&&(S(null==d?void 0:d.image_url),D({title:d.title}),w(d.image_url))},[d,D]),(0,r.jsxs)(g.ZP,{open:t,anchor:"right",variant:"temporary",onClose:U,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(l.Z,{variant:"h5",children:"Edit Brand"}),(0,r.jsx)(s.Z,{size:"small",onClick:U,children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:A(e=>I(e)),className:"flex flex-col gap-5",children:[(0,r.jsx)(x.Qr,{name:"title",control:N,rules:{required:!0},render:e=>{let{field:n}=e;return(0,r.jsx)(u.Z,{...n,fullWidth:!0,label:"Title",placeholder:"",...F.title&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsx)("input",{type:"file",id:"contained-button-file",onChange:e=>{let{files:n}=e.target;if(n&&n.length>0){let e=n[0];["image/jpeg","image/png"].includes(e.type)?(Z(""),w(e),S(URL.createObjectURL(e))):(Z("Invalid file type. Please select an image (JPEG, PNG, GIF)."),w(null),S(null),C.current.value=null)}},ref:C})}),k&&(0,r.jsx)(l.Z,{color:"error",variant:"body2",children:k}),P&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("img",{src:P,alt:"Preview",style:{width:"100%",borderRadius:"4px"}})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(o.Z,{variant:"contained",type:"submit",children:"Update"}),(0,r.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:a,children:"Cancel"})]})]})})]})},D=t(66967),A=t(83338);let F=(e,n,t,r)=>{let i=(0,m.O4)(e.getValue(n),t);return r({itemRank:i}),i.passed},I=e=>{let{value:n,onChange:t,debounce:a=500,...o}=e,[s,d]=(0,i.useState)(n);return(0,i.useEffect)(()=>{d(n)},[n]),(0,i.useEffect)(()=>{let e=setTimeout(()=>{t(s)},a);return()=>clearTimeout(e)},[s]),(0,r.jsx)(u.Z,{...o,value:s,onChange:e=>d(e.target.value),size:"small"})},U=(0,p.Cl)();var E=()=>{let{setGlobalMsg:e}=(0,b.q)(),{data:n}=(0,k.kJ)(Z.Sg),[t]=(0,$.D)(y.Ff),[u,c]=(0,i.useState)(!1),[m,g]=(0,i.useState)({}),[h,v]=(0,i.useState)(n.brands),[x,j]=(0,i.useState)(""),[P,E]=(0,i.useState)(!1),[q,B]=(0,i.useState)(!1),[M,z]=(0,i.useState)(),R=(e,n,t)=>({children:e,color:n,variant:t}),T=(0,i.useMemo)(()=>[U.accessor("title",{header:"Brands",cell:e=>{let{row:n}=e;return(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{src:n.original.image_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,r.jsx)("div",{className:"flex flex-col items-start",children:(0,r.jsx)(l.Z,{className:"font-medium",color:"text.primary",children:n.original.title})})]})}}),U.accessor("products_aggregate.aggregate.count",{header:"Total Products",cell:e=>{var n,t,i;let{row:a}=e;return(0,r.jsx)(l.Z,{children:null===(i=a.original)||void 0===i?void 0:null===(t=i.products_aggregate)||void 0===t?void 0:null===(n=t.aggregate)||void 0===n?void 0:n.count.toLocaleString()})}}),U.accessor("created_at",{header:"Date",cell:e=>{let{row:n}=e;return(0,r.jsx)(l.Z,{children:n.original.created_at.substring(0,10)})}}),U.accessor("actions",{header:"Actions",cell:e=>{let{row:n}=e;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s.Z,{size:"small",onClick:()=>{B(!q),z(n.original)},children:(0,r.jsx)("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),(0,r.jsx)(D.Z,{element:o.Z,elementProps:R((0,r.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:A.Z,dialogProps:{type:"deleteProductBrand"},dataId:n.original.id,setData:v,data:h})]})},enableSorting:!1})],[h]),O=(0,f.b7)({data:h,columns:T,filterFns:{fuzzy:F},state:{rowSelection:m,globalFilter:x},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:F,onRowSelectionChange:g,getCoreRowModel:(0,p.sC)(),onGlobalFilterChange:j,getFilteredRowModel:(0,p.vL)(),getSortedRowModel:(0,p.tj)(),getPaginationRowModel:(0,p.G_)(),getFacetedRowModel:(0,p.o6)(),getFacetedUniqueValues:(0,p.JG)(),getFacetedMinMaxValues:(0,p.HO)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[(0,r.jsx)(I,{value:null!=x?x:"",onChange:e=>j(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,r.jsx)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:(0,r.jsx)(o.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>c(!u),startIcon:(0,r.jsx)("i",{className:"ri-add-line"}),children:"Add Brand"})})]}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:S().table,children:[(0,r.jsx)("thead",{children:O.getHeaderGroups().map(e=>(0,r.jsx)("tr",{children:e.headers.map(e=>{var n;return(0,r.jsx)("th",{children:e.isPlaceholder?null:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:_()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,f.ie)(e.column.columnDef.header,e.getContext()),null!==(n=({asc:(0,r.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,r.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==n?n:null]})})},e.id)})},e.id))}),0===O.getFilteredRowModel().rows.length?(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:O.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,r.jsx)("tbody",{children:O.getRowModel().rows.slice(0,O.getState().pagination.pageSize).map(e=>(0,r.jsx)("tr",{className:_()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,r.jsx)("td",{children:(0,f.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,r.jsx)(d.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:O.getFilteredRowModel().rows.length,rowsPerPage:O.getState().pagination.pageSize,page:O.getState().pagination.pageIndex,onPageChange:(e,n)=>{O.setPageIndex(n)},onRowsPerPageChange:e=>O.setPageSize(Number(e.target.value))})]}),(0,r.jsx)(w,{open:u,brandData:h,setData:v,loading:P,setLoading:E,handleClose:()=>c(!u)}),(0,r.jsx)(N,{open:q,brandData:M,setData:v,loading:P,setLoading:E,handleClose:()=>B(!q)}),(0,r.jsx)(C.Z,{})]})}},67875:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[3307,6086,5278,6353,1378,8190,5266,1802,1732,6479,9276,9124,1166,3302,1711,9295,559,6772,4772,526,3954,8363,3047,1029,4170,6842,1744],function(){return e(e.s=12342)}),_N_E=e.O()}]);