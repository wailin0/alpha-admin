(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8583,9349],{42260:function(e,t,n){Promise.resolve().then(n.bind(n,75582))},76778:function(e,t,n){"use strict";var i=n(99683),r=n(57221),a=n(31229),o=n(27494),s=n(80810),u=n(73815),d=n(96013),l=n(46355),c=n(9002),_=n(59533);let m=["className","raised"],p=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},c.y,t)},f=(0,u.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=a.forwardRef(function(e,t){let n=(0,d.i)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=n,u=(0,r.Z)(n,m),l=(0,i.Z)({},n,{raised:s}),c=p(l);return(0,_.jsx)(f,(0,i.Z)({className:(0,o.Z)(c.root,a),elevation:s?8:void 0,ref:t,ownerState:l},u))});t.Z=g},9002:function(e,t,n){"use strict";n.d(t,{y:function(){return a}});var i=n(31157),r=n(483);function a(e){return(0,r.ZP)("MuiCard",e)}let o=(0,i.Z)("MuiCard",["root"]);t.Z=o},20593:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i,r=n(57221),a=n(99683),o=n(31229),s=n(27494),u=n(80810),d=n(54792),l=n(84323),c=n(37772),_=n(66651),m=n(73815),p=n(31157),f=n(483);function g(e){return(0,f.ZP)("MuiInputAdornment",e)}let h=(0,p.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v=n(96013),x=n(59533);let $=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:i,position:r,size:a,variant:o}=e,s={root:["root",n&&"disablePointerEvents",r&&"position".concat((0,d.Z)(r)),o,i&&"hiddenLabel",a&&"size".concat((0,d.Z)(a))]};return(0,u.Z)(s,g,t)},b=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t["position".concat((0,d.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})(e=>{let{theme:t,ownerState:n}=e;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&{["&.".concat(h.positionStart,"&:not(.").concat(h.hiddenLabel,")")]:{marginTop:16}},"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})});var j=o.forwardRef(function(e,t){let n=(0,v.i)({props:e,name:"MuiInputAdornment"}),{children:u,className:d,component:m="div",disablePointerEvents:p=!1,disableTypography:f=!1,position:g,variant:h}=n,j=(0,r.Z)(n,$),S=(0,_.Z)()||{},P=h;h&&S.variant,S&&!P&&(P=S.variant);let w=(0,a.Z)({},n,{hiddenLabel:S.hiddenLabel,size:S.size,disablePointerEvents:p,position:g,variant:P}),Z=y(w);return(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(b,(0,a.Z)({as:m,ownerState:w,className:(0,s.Z)(Z.root,d),ref:t},j,{children:"string"!=typeof u||f?(0,x.jsxs)(o.Fragment,{children:["start"===g?i||(i=(0,x.jsx)("span",{className:"notranslate",children:"​"})):null,u]}):(0,x.jsx)(l.Z,{color:"text.secondary",children:u})}))})})},79505:function(e,t,n){"use strict";n.r(t);var i=n(59533),r=n(31229),a=n(96353),o=n(10358),s=n(66873),u=n(51442),d=n(6532),l=n(50529),c=n(93730),_=n(72315),m=n(46355),p=n(84448),f=n(48111),g=n(72860),h=n.n(g),v=n(59787);let x=e=>{let{tooltipProps:t,children:n}=e;return(null==t?void 0:t.title)?(0,i.jsx)(o.Z,{...t,children:n}):n},$=e=>{let{children:t,option:n}=e;return n.href?(0,i.jsx)(s.Z,{component:a.default,href:n.href,...n.linkProps,children:t}):(0,i.jsx)(i.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:n,iconClassName:a,options:o,leftAlignMenu:s,iconButtonProps:g}=e,[y,b]=(0,r.useState)(!1),j=(0,r.useRef)(null),{settings:S}=(0,v.r)(),P=e=>{j.current&&j.current.contains(e.target)||b(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{tooltipProps:t,children:(0,i.jsx)(p.Z,{ref:j,size:"small",onClick:()=>{b(e=>!e)},...g,children:"string"==typeof n?(0,i.jsx)("i",{className:h()(n,a)}):n||(0,i.jsx)("i",{className:h()("ri-more-2-line",a)})})}),(0,i.jsx)(u.Z,{open:y,anchorEl:j.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,i.jsx)(_.Z,{...t,children:(0,i.jsx)(m.Z,{className:"bordered"===S.skin?"border shadow-none":"shadow-lg",children:(0,i.jsx)(c.d,{onClickAway:P,children:(0,i.jsx)(l.Z,{autoFocusItem:y,children:o.map((e,t)=>"string"==typeof e?(0,i.jsx)(d.Z,{onClick:P,children:e},t):"divider"in e?e.divider&&(0,i.jsx)(f.Z,{...e.dividerProps},t):(0,i.jsx)(d.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{P(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,i.jsxs)($,{option:e,children:[("string"==typeof e.icon?(0,i.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},64825:function(e,t,n){"use strict";n.d(t,{J:function(){return d},SettingsProvider:function(){return l}});var i=n(59533),r=n(31229),a=n(23310),o=n(13231),s=n(75443);let u=(e,t)=>{let[n,i]=(0,s.Z)(e);return[(0,r.useMemo)(()=>n?JSON.parse(n):t,[n]),e=>{i(JSON.stringify(e))}]},d=(0,r.createContext)(null),l=e=>{let t={mode:a.Z.mode,skin:a.Z.skin,semiDark:a.Z.semiDark,layout:a.Z.layout,navbarContentWidth:a.Z.navbar.contentWidth,contentWidth:a.Z.contentWidth,footerContentWidth:a.Z.footer.contentWidth,primaryColor:o.Z[0].main},n={...t,mode:e.mode||a.Z.mode},[s,l]=u(a.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:n),[c,_]=(0,r.useState)("{}"!==JSON.stringify(s)?s:n),m=(e,t)=>{let{updateCookie:n=!0}=t||{};_(t=>{let i={...t,...e};return n&&l(i),i})},p=(0,r.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(c),[c]);return(0,i.jsx)(d.Provider,{value:{settings:c,updateSettings:m,isSettingsChanged:p,resetSettings:()=>{m(t)},updatePageSettings:e=>(m(e,{updateCookie:!1}),()=>m(s,{updateCookie:!1}))},children:e.children})}},59787:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var i=n(31229),r=n(64825);let a=()=>{let e=(0,i.useContext)(r.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},12895:function(e,t,n){"use strict";n.d(t,{ApolloWrapper:function(){return m},q:function(){return _}});var i=n(59533),r=n(50421),a=n(73079),o=n(41502),s=n(17856),u=n(31229);let d=(0,u.createContext)();function l(){let e=new a.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),t=(0,s.v)(async(e,t)=>{let{headers:n}=t;try{return{headers:{...n,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:n}}});return new o.fe({cache:new o.h4,link:c.concat(t).concat(e)})}let c=(0,r.q)(e=>{let{graphQLErrors:t,networkError:n}=e;t&&(console.log("graphql",t),t.forEach(e=>{let{extensions:t}=e;("invalid-headers"===t.code||"invalid-jwt"===t.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),n&&(console.log("[Network error]: ".concat(n)),alert("network connection problem"))}),_=()=>(0,u.useContext)(d);function m(e){let{children:t}=e,[n,r]=(0,u.useState)(null),[a,s]=(0,u.useState)(!1);return(0,i.jsx)(o.e$,{makeClient:l,children:(0,i.jsx)(d.Provider,{value:{globalMsg:n,setGlobalMsg:r,loading:a,setLoading:s},children:t})})}},66967:function(e,t,n){"use strict";var i=n(59533),r=n(31229);t.Z=e=>{let{element:t,dialog:n,elementProps:a,dialogProps:o,dataId:s,setData:u,data:d}=e,[l,c]=(0,r.useState)(!1),{onClick:_,...m}=a;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{onClick:e=>{_&&_(e),c(!0)},...m}),(0,i.jsx)(n,{open:l,setOpen:c,...o,dataId:s,setData:u,data:d})]})}},83338:function(e,t,n){"use strict";var i=n(59533),r=n(31229),a=n(83354),o=n(8957),s=n(5443),u=n(84323),d=n(29900);n(72860);var l=n(45641),c=n(29349),_=n(61250),m=n(31029);t.Z=e=>{let{open:t,setOpen:n,type:p,dataId:f,data:g,setData:h}=e,{userId:v}=(0,_.useParams)(),[x]=(0,l.D)(c.HT),[$]=(0,l.D)(c.SZ,{refetchQueries:[m.L5]}),[y]=(0,l.D)(c.z7,{refetchQueries:[m.L5]}),[b]=(0,l.D)(c.aY),[j]=(0,l.D)(c.Ff),[S]=(0,l.D)(c.ju),[P]=(0,l.D)(c.oe),[w]=(0,l.D)(c.DR),[Z]=(0,l.D)(c.Qm),[k,C]=(0,r.useState)(!1),[N,D]=(0,r.useState)(!1),A="disable-account"===p?"div":r.Fragment,F=async e=>{if(!0===e)try{"disable-account"===p&&await $({variables:{id:v,data:{status:"disable"}}}),"enable-account"===p&&await $({variables:{id:v,data:{status:"verified"}}}),"verified-account"===p&&await y({variables:{user_id:v,is_verified:!0}}),"unverified-account"===p&&await y({variables:{user_id:v,is_verified:!1}}),"deleteProductCategory"===p&&(await b({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteProductBrand"===p&&(await j({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deletePost"===p&&(await S({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteNewCategory"===p&&(await P({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteServiceCenter"===p&&(await w({variables:{id:f}}),h(g.filter(e=>e.id!==f))),"deleteProductDiscount"===p&&(await Z({variables:{id:f}}),h(g.filter(e=>e.id!==f))),D(e),n(!1)}catch(e){console.log("Error",e)}else n(!1);D(e),C(!0),n(!1)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{fullWidth:!0,maxWidth:"xs",open:t,onClose:()=>n(!1),children:[(0,i.jsxs)(o.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,i.jsx)("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,i.jsxs)(A,{..."disable-account"===p&&{className:"flex flex-col items-center gap-2"},children:[(0,i.jsxs)(u.Z,{variant:"h4",children:["unsubscribe"===p&&"Are you sure to cancel your subscription?","disable-account"===p&&"Are you sure?","delete-order"===p&&"Are you sure?","delete-customer"===p&&"Are you sure?"]}),"verified-account"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to verify your account?"}),"unverified-account"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to unverify your account?"}),"disable-account"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to disalbe user!"}),"enable-account"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to enable user!"}),"deleteProductCategory"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductDiscount"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteServiceCenter"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===p&&(0,i.jsx)(u.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,i.jsxs)(s.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[(0,i.jsx)(d.Z,{variant:"contained",onClick:()=>F(!0),children:"disable-account"===p?"Yes, Disabel User!":"enable-account"===p?"Yes, Enable User!":"deleteProductCategory"===p?"Yes, Delete Category!":"deleteProductBrand"===p?"Yes, Delete Brand":"delete-customer"===p?"Yes, Delete Customer!":"verified-account"===p?"Yes , User Verify":"unverified-account"===p?"Yes, User Unverify":"deletePost"===p?"Yes, Delete Post":"deleteNewCategory"===p?"Yes, Delete Category":"deleteServiceCenter"===p?"Yes, Delete Service Center":"deleteProductDiscount"===p?"Yes, Delete Product Discount":"Yes"}),(0,i.jsx)(d.Z,{variant:"outlined",color:"secondary",onClick:()=>{F(!1)},children:"Cancel"})]})]})})}},76422:function(e,t,n){"use strict";var i=n(59533);n(31229);var r=n(36772),a=n(12895);t.Z=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,a.q)();return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},13231:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/user/list",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},29349:function(e,t,n){"use strict";n.d(t,{BM:function(){return eP},DR:function(){return eN},Ff:function(){return es},HT:function(){return e_},Hd:function(){return em},J2:function(){return eO},J9:function(){return er},JB:function(){return eD},KN:function(){return eZ},Lh:function(){return eR},MP:function(){return en},MZ:function(){return eC},O7:function(){return eI},Qm:function(){return eU},SB:function(){return el},SZ:function(){return ey},Sf:function(){return eg},Si:function(){return eT},Zq:function(){return eS},aY:function(){return eu},bc:function(){return eB},dE:function(){return ep},dn:function(){return ez},en:function(){return eq},hB:function(){return ee},he:function(){return eE},hq:function(){return et},jN:function(){return eF},ju:function(){return ec},mU:function(){return e$},mt:function(){return eM},oe:function(){return ed},pE:function(){return eL},rV:function(){return eA},si:function(){return eW},tC:function(){return ew},tt:function(){return eh},tz:function(){return ex},u7:function(){return eo},uv:function(){return ea},vl:function(){return ek},wU:function(){return ev},yG:function(){return ej},yn:function(){return ef},z7:function(){return eb},zN:function(){return ei}});var i=n(42541),r=n(14595);function a(){let e=(0,i._)(["\n  mutation adminSignIn($email: String!, $password: String!) {\n    AdminSignIn(email: $email, password: $password) {\n      token\n      message\n    }\n  }\n"]);return a=function(){return e},e}function o(){let e=(0,i._)(["\n  mutation addCategory($data: product_categories_insert_input!) {\n    insert_product_categories_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}function s(){let e=(0,i._)(["\n  mutation addCategory($data: brands_insert_input!) {\n    insert_brands_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}function u(){let e=(0,i._)(["\n  mutation addProduct(\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n    $product_medias: product_medias_arr_rel_insert_input!\n  ) {\n    insert_products_one(\n      object: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n        product_medias: $product_medias\n      }\n    ) {\n      id\n    }\n  }\n"]);return u=function(){return e},e}function d(){let e=(0,i._)(["\n  mutation editProduct(\n    $id: uuid!\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n      }\n    ) {\n      id\n    }\n  }\n"]);return d=function(){return e},e}function l(){let e=(0,i._)(["\n  mutation addNews($data: news_insert_input!) {\n    insert_news_one(object: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i._)(["\n  mutation deleteProduct($id: uuid!) {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function _(){let e=(0,i._)(["\n  mutation deleteBrand($id: uuid!) {\n    delete_brands_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return _=function(){return e},e}function m(){let e=(0,i._)(["\n  mutation deleteProductCat($id: uuid!) {\n    delete_product_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function p(){let e=(0,i._)(["\n  mutation deleteNewCat($id: uuid!) {\n    delete_news_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function f(){let e=(0,i._)(["\n  mutation addNewCat($title: String!) {\n    insert_news_categories_one(object: { title: $title }) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function g(){let e=(0,i._)(["\n  mutation deleteNews($id: uuid!) {\n    delete_news_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return g=function(){return e},e}function h(){let e=(0,i._)(["\n  mutation deleteInvoice($id: uuid!) {\n    delete_invoices_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return h=function(){return e},e}function v(){let e=(0,i._)(["\n  mutation aa($id: uuid!) {\n    delete_orders_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function x(){let e=(0,i._)(["\n  mutation deleteDealer($id: uuid!) {\n    delete_dealers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return x=function(){return e},e}function $(){let e=(0,i._)(["\n  mutation addDealer($data: dealers_insert_input!) {\n    insert_dealers_one(object: $data) {\n      id\n    }\n  }\n"]);return $=function(){return e},e}function y(){let e=(0,i._)(["\n  mutation addNewProducts($data: news_related_products_insert_input!) {\n    insert_news_related_products_one(object: $data) {\n      id\n    }\n  }\n"]);return y=function(){return e},e}function b(){let e=(0,i._)(["\n  mutation editNewProducts($id: uuid!, $data: news_set_input!) {\n    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return b=function(){return e},e}function j(){let e=(0,i._)(["\n  mutation aa($news_id: uuid!) {\n    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return j=function(){return e},e}function S(){let e=(0,i._)(["\n  mutation aa($content_type: String!, $folder: String!) {\n    getFileUploadUrl(content_type: $content_type, folder: $folder) {\n      error\n      message\n      fileName\n      fileUploadUrl\n    }\n  }\n"]);return S=function(){return e},e}function P(){let e=(0,i._)(["\n  mutation orderStatus($order_id: uuid!, $status: String!) {\n    updateOrderStatus(order_id: $order_id, status: $status) {\n      message\n    }\n  }\n"]);return P=function(){return e},e}function w(){let e=(0,i._)(["\n  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {\n    updateServiceStatus(service_token_id: $service_token_id, status: $status) {\n      message\n    }\n  }\n"]);return w=function(){return e},e}function Z(){let e=(0,i._)(["\n  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {\n    acceptServiceToken(\n      is_warranty_valid: $is_warranty_valid\n      service_fee: $service_fee\n      service_token_id: $service_token_id\n    ) {\n      message\n    }\n  }\n"]);return Z=function(){return e},e}function k(){let e=(0,i._)(["\n  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {\n    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {\n      message\n    }\n  }\n"]);return k=function(){return e},e}function C(){let e=(0,i._)(["\n  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      role\n      status\n    }\n  }\n"]);return C=function(){return e},e}function N(){let e=(0,i._)(["\n  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {\n    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {\n      message\n    }\n  }\n"]);return N=function(){return e},e}function D(){let e=(0,i._)(["\n  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {\n    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {\n      message\n    }\n  }\n"]);return D=function(){return e},e}function A(){let e=(0,i._)(["\n  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {\n    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {\n      message\n    }\n  }\n"]);return A=function(){return e},e}function F(){let e=(0,i._)(["\n  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {\n    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return F=function(){return e},e}function I(){let e=(0,i._)(["\n  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {\n    addInvoicePayment(\n      amount: $amount\n      invoice_id: $invoice_id\n      payment_date: $payment_date\n      payment_method: $payment_method\n    ) {\n      message\n    }\n  }\n"]);return I=function(){return e},e}function q(){let e=(0,i._)(["\n  mutation sendQInvoice($quotation_id: uuid!) {\n    sendInvoice(quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return q=function(){return e},e}function E(){let e=(0,i._)(["\n  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {\n    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {\n      id\n    }\n  }\n"]);return E=function(){return e},e}function U(){let e=(0,i._)(["\n  mutation deleteAdmin($id: uuid!) {\n    delete_admins_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return U=function(){return e},e}function M(){let e=(0,i._)(["\n  mutation deleteServiceCenter($id: uuid!) {\n    delete_service_centers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return M=function(){return e},e}function R(){let e=(0,i._)(["\n  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {\n    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {\n      message\n      token\n    }\n  }\n"]);return R=function(){return e},e}function z(){let e=(0,i._)(["\n  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {\n    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      email\n      role\n    }\n  }\n"]);return z=function(){return e},e}function B(){let e=(0,i._)(["\n  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {\n    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {\n      message\n      token\n    }\n  }\n"]);return B=function(){return e},e}function T(){let e=(0,i._)(["\n  mutation addSeriveCenter($data: service_centers_insert_input!) {\n    insert_service_centers_one(object: $data) {\n      id\n      name\n      phone\n      address\n      created_at\n      updated_at\n    }\n  }\n"]);return T=function(){return e},e}function O(){let e=(0,i._)(["\n  mutation editService($id: uuid!, $data: service_tokens_set_input!) {\n    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      service_fee\n    }\n  }\n"]);return O=function(){return e},e}function L(){let e=(0,i._)(["\n  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {\n    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      phone\n      address\n    }\n  }\n"]);return L=function(){return e},e}function W(){let e=(0,i._)(["\n  mutation deleteProductDiscount($id: uuid!) {\n    delete_product_discounts_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return W=function(){return e},e}function J(){let e=(0,i._)(["\n  mutation orderComplete($id: uuid!, $completion_photo_url: String!, $remark: String!) {\n    update_orders_by_pk(\n      pk_columns: { id: $id }\n      _set: { completion_photo_url: $completion_photo_url, remark: $remark }\n    ) {\n      id\n      completion_photo_url\n      remark\n    }\n  }\n"]);return J=function(){return e},e}function Y(){let e=(0,i._)(["\n  mutation addDiscount($data: product_discounts_insert_input!) {\n    insert_product_discounts_one(object: $data) {\n      id\n      min_order\n      product_id\n      discount_type\n      discounted_value\n      customer_type\n      created_at\n      updated_at\n    }\n  }\n"]);return Y=function(){return e},e}function Q(){let e=(0,i._)(["\n  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {\n    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      min_order\n      discount_type\n      customer_type\n      discounted_value\n      created_at\n      updated_at\n    }\n  }\n"]);return Q=function(){return e},e}function H(){let e=(0,i._)(["\n  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {\n    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return H=function(){return e},e}function V(){let e=(0,i._)(["\n  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {\n    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return V=function(){return e},e}function G(){let e=(0,i._)(["\n  mutation editNewCat($id: uuid!, $title: String!) {\n    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      id\n      title\n    }\n  }\n"]);return G=function(){return e},e}function K(){let e=(0,i._)(["\n  mutation imageUpload($data: product_medias_insert_input!) {\n    insert_product_medias_one(object: $data) {\n      id\n      product_id\n      media_url\n      media_type\n    }\n  }\n"]);return K=function(){return e},e}function X(){let e=(0,i._)(["\n  mutation deleteProductImage($id: uuid!) {\n    delete_product_medias_by_pk(id: $id) {\n      id\n      media_url\n      media_type\n    }\n  }\n"]);return X=function(){return e},e}let ee=(0,r.Ps)(a()),et=(0,r.Ps)(o()),en=(0,r.Ps)(s()),ei=(0,r.Ps)(u()),er=(0,r.Ps)(d()),ea=(0,r.Ps)(l()),eo=(0,r.Ps)(c()),es=(0,r.Ps)(_()),eu=(0,r.Ps)(m()),ed=(0,r.Ps)(p()),el=(0,r.Ps)(f()),ec=(0,r.Ps)(g());(0,r.Ps)(h());let e_=(0,r.Ps)(v());(0,r.Ps)(x()),(0,r.Ps)($());let em=(0,r.Ps)(y()),ep=(0,r.Ps)(b()),ef=(0,r.Ps)(j()),eg=(0,r.Ps)(S()),eh=(0,r.Ps)(P()),ev=(0,r.Ps)(w()),ex=(0,r.Ps)(Z()),e$=(0,r.Ps)(k()),ey=(0,r.Ps)(C()),eb=(0,r.Ps)(N()),ej=(0,r.Ps)(D()),eS=(0,r.Ps)(A()),eP=(0,r.Ps)(F()),ew=(0,r.Ps)(I()),eZ=(0,r.Ps)(q()),ek=(0,r.Ps)(E()),eC=(0,r.Ps)(U()),eN=(0,r.Ps)(M()),eD=(0,r.Ps)(R()),eA=(0,r.Ps)(z()),eF=(0,r.Ps)(B()),eI=(0,r.Ps)(T()),eq=(0,r.Ps)(O()),eE=(0,r.Ps)(L()),eU=(0,r.Ps)(W()),eM=(0,r.Ps)(J()),eR=(0,r.Ps)(Y()),ez=(0,r.Ps)(Q()),eB=(0,r.Ps)(H()),eT=(0,r.Ps)(V()),eO=(0,r.Ps)(G()),eL=(0,r.Ps)(K()),eW=(0,r.Ps)(X())},20397:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},c:function(){return d}});let i=["/en/dashboards","/en/products","/en/user","/en/orders","/en/news","/en/services","/en/service_token","/en/invoice","/en/quotations","/en/admin","/en/service_center"],r=["/en/dashboards","/en/products","/en/services","/en/service_center","/en/news"],a=["/en/dashboards","/en/orders","/en/invoice","/en/quotations"],o=["/en/dashboards","/en/services","/en/service_token","/en/invoice"],s=["/en/dashboards","/en/orders"],u=["/en/dashboards","/en/orders","/en/invoice"],d=async(e,t,n)=>{try{return(await fetch(t,{method:"PUT",headers:{"Content-Type":"".concat(n,"/*"),"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}},l=(e,t)=>!!("admin"===e&&i.includes("/en/"+t)||"manager"===e&&r.includes("/en/"+t)||"service"===e&&o.includes("/en/"+t)||"sale"===e&&a.includes("/en/"+t))||!!("delivery"===e&&s.includes("/en/"+t))||!!("finance"===e&&u.includes("/en/"+t))},75582:function(e,t,n){"use strict";n.d(t,{default:function(){return E}});var i=n(59533),r=n(31229),a=n(76778),o=n(29900),s=n(84448),u=n(13954),d=n(82597),l=n(84323),c=n(72860),_=n.n(c),m=n(19880),p=n(65841),f=n(51480),g=n(88363),h=n(48111),v=n(20593),x=n(20397),$=n(20526),y=n(45641),b=n(29349),j=n(76422),S=n(12895),P=e=>{var t;let{setGlobalMsg:n}=(0,S.q)(),{open:a,handleClose:u,categoryData:c,setData:_,loading:m,setLoading:p}=e,[f]=(0,y.D)(b.hq),[P]=(0,y.D)(b.Sf),[w,Z]=(0,r.useState)(""),[k,C]=(0,r.useState)(""),N=(0,r.useRef)(null),{control:D,reset:A,handleSubmit:F,formState:{errors:I}}=(0,$.cI)({defaultValues:{title:"",image_url:""}}),q=async e=>{try{p(!0);let t=await P({variables:{content_type:"image",folder:"products"}}),i=await (0,x.c)(w[0],t.data.getFileUploadUrl.fileUploadUrl,"image"),r=await f({variables:{data:{title:e.title,image_url:i}}});p(!1),_([...c,r.data.insert_product_categories_one]),E(),n("➕ Added New Category")}catch(e){console.log("Error ",e),n("❌ Title Must Be Unique")}},E=()=>{A({title:"",image_url:""}),Z(""),N.current.value=""};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.ZP,{open:a,anchor:"right",variant:"temporary",onClose:E,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,i.jsx)(l.Z,{variant:"h5",children:"Add Category"}),(0,i.jsx)(s.Z,{size:"small",onClick:u,children:(0,i.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:F(e=>q(e)),className:"flex flex-col gap-5",children:[(0,i.jsx)($.Qr,{name:"title",control:D,rules:{required:!0},render:e=>{let{field:t}=e;return(0,i.jsx)(d.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...I.title&&{error:!0,helperText:"This field is required."}})}}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(d.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:w?null===(t=w[0])||void 0===t?void 0:t.name:"",className:"flex-auto",InputProps:{readOnly:!0,endAdornment:w?(0,i.jsx)(v.Z,{position:"end",children:(0,i.jsx)(s.Z,{size:"small",edge:"end",onClick:()=>Z(""),children:(0,i.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,i.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,i.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;if(t&&0!==t.length){if("image"!==t[0].type.split("/")[0])C("Please upload a valid image file."),Z("");else{var n;C(""),Z(t),console.log("Selected file:",null===(n=t[0])||void 0===n?void 0:n.name)}}},ref:N})]})]}),k&&(0,i.jsx)(l.Z,{color:"error",children:k}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(o.Z,{variant:"contained",type:"submit",loading:m,children:"Add"}),(0,i.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:E,children:"Discard"})]})]})})]}),(0,i.jsx)(j.Z,{})]})};n(79505);var w=n(67875),Z=n.n(w),k=n(40877),C=n(31029),N=e=>{let{setGlobalMsg:t}=(0,S.q)(),{open:n,handleClose:a,categoryData:u,setData:c,loading:_,setLoading:m}=e,[p]=(0,y.D)(b.bc),[f]=(0,y.D)(b.Sf),[v,P]=(0,r.useState)(),[w,Z]=(0,r.useState)(),[k,C]=(0,r.useState)(""),N=(0,r.useRef)(null),{control:D,reset:A,handleSubmit:F,formState:{errors:I}}=(0,$.cI)({defaultValues:{title:"",image_url:""}}),q=async e=>{try{m(!0);let n=u.image_url;if(v&&v!==(null==u?void 0:u.image_url)){let{data:e}=await f({variables:{content_type:"image",folder:"products"}});n=await (0,x.c)(v,e.getFileUploadUrl.fileUploadUrl,"image")}let i=await p({variables:{id:null==u?void 0:u.id,data:{title:e.title,image_url:n}}});c(e=>e.map(e=>e.id===(null==u?void 0:u.id)?{...e,...i.data.update_product_categories_by_pk}:e)),E(),t("✅ Category has been updated")}catch(e){console.log("Error ",e)}};(0,r.useEffect)(()=>{u&&(Z(null==u?void 0:u.image_url),A({title:u.title}),P(u.image_url||""))},[u,A]);let E=()=>{a(),A({title:"",description:""}),P(""),C("")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.ZP,{open:n,anchor:"right",variant:"temporary",onClose:E,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,i.jsx)(l.Z,{variant:"h5",children:"Edit Category"}),(0,i.jsx)(s.Z,{size:"small",onClick:E,children:(0,i.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:F(e=>q(e)),className:"flex flex-col gap-5",children:[(0,i.jsx)($.Qr,{name:"title",control:D,rules:{required:!0},render:e=>{let{field:t}=e;return(0,i.jsx)(d.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...I.title&&{error:!0,helperText:"This field is required."}})}}),(0,i.jsx)("div",{className:"flex items-center gap-4",children:(0,i.jsx)("input",{type:"file",id:"contained-button-file",onChange:e=>{let{files:t}=e.target;if(t&&t.length>0){let e=t[0];["image/jpeg","image/png"].includes(e.type)?(C(""),P(e),Z(URL.createObjectURL(e))):(C("Invalid file type. Please select an image (JPEG, PNG, GIF)."),P(null),Z(null),N.current.value=null)}},ref:N})}),k&&(0,i.jsx)(l.Z,{color:"error",variant:"body2",children:k}),w&&(0,i.jsx)("div",{className:"mt-4",children:(0,i.jsx)("img",{src:w,alt:"Preview",style:{width:"100%",borderRadius:"4px"}})}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(o.Z,{variant:"contained",type:"submit",loading:_,children:"Update"}),(0,i.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:E,children:"Discard"})]})]})})]}),(0,i.jsx)(j.Z,{})]})},D=n(66967),A=n(83338);let F=(e,t,n,i)=>{let r=(0,m.O4)(e.getValue(t),n);return i({itemRank:r}),r.passed},I=e=>{let{value:t,onChange:n,debounce:a=500,...o}=e,[s,u]=(0,r.useState)(t);return(0,r.useEffect)(()=>{u(t)},[t]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{n(s)},a);return()=>clearTimeout(e)},[s]),(0,i.jsx)(d.Z,{...o,value:s,onChange:e=>u(e.target.value),size:"small"})},q=(0,p.Cl)();var E=()=>{let{setGlobalMsg:e}=(0,S.q)(),{data:t}=(0,k.kJ)(C.C9),[n,d]=(0,r.useState)(!1),[c,m]=(0,r.useState)(!1),[g,h]=(0,r.useState)({}),[v,x]=(0,r.useState)(t.product_categories),[$,y]=(0,r.useState)(""),[b,j]=(0,r.useState)(!1),[w,E]=(0,r.useState)(),U=(e,t,n)=>({children:e,color:t,variant:n}),M=(0,r.useMemo)(()=>[q.accessor("title",{header:"Categories",cell:e=>{let{row:t}=e;return(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("img",{src:t.original.image_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,i.jsxs)("div",{className:"flex flex-col items-start",children:[(0,i.jsx)(l.Z,{className:"font-medium",color:"text.primary",children:t.original.title}),(0,i.jsx)(l.Z,{variant:"body2",children:t.original.description})]})]})}}),q.accessor("products_aggregate.aggregate.count",{header:"Total Products",cell:e=>{var t,n,r,a;let{row:o}=e;return(0,i.jsx)(l.Z,{children:null==o?void 0:null===(a=o.original)||void 0===a?void 0:null===(r=a.products_aggregate)||void 0===r?void 0:null===(n=r.aggregate)||void 0===n?void 0:null===(t=n.count)||void 0===t?void 0:t.toLocaleString()})}}),q.accessor("created_at",{header:"Date",cell:e=>{let{row:t}=e;return(0,i.jsx)(l.Z,{children:t.original.created_at.substring(0,10)})}}),q.accessor("actions",{header:"Actions",cell:e=>{let{row:t}=e;return(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(s.Z,{size:"small",onClick:()=>{m(!c),E(t.original)},children:(0,i.jsx)("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),(0,i.jsx)(D.Z,{element:o.Z,elementProps:U((0,i.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:A.Z,dialogProps:{type:"deleteProductCategory"},dataId:t.original.id,setData:x,data:v})]})},enableSorting:!1})],[v]),R=(0,f.b7)({data:v,columns:M,filterFns:{fuzzy:F},state:{rowSelection:g,globalFilter:$},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:F,onRowSelectionChange:h,getCoreRowModel:(0,p.sC)(),onGlobalFilterChange:y,getFilteredRowModel:(0,p.vL)(),getSortedRowModel:(0,p.tj)(),getPaginationRowModel:(0,p.G_)(),getFacetedRowModel:(0,p.o6)(),getFacetedUniqueValues:(0,p.JG)(),getFacetedMinMaxValues:(0,p.HO)()});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[(0,i.jsx)(I,{value:null!=$?$:"",onChange:e=>y(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,i.jsx)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:(0,i.jsx)(o.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>d(!n),startIcon:(0,i.jsx)("i",{className:"ri-add-line"}),children:"Add Category"})})]}),(0,i.jsx)("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:Z().table,children:[(0,i.jsx)("thead",{children:R.getHeaderGroups().map(e=>(0,i.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,i.jsx)("th",{children:e.isPlaceholder?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:_()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,f.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,i.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,i.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===R.getFilteredRowModel().rows.length?(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:R.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,i.jsx)("tbody",{children:R.getRowModel().rows.slice(0,R.getState().pagination.pageSize).map(e=>(0,i.jsx)("tr",{className:_()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,i.jsx)("td",{children:(0,f.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,i.jsx)(u.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:R.getFilteredRowModel().rows.length,rowsPerPage:R.getState().pagination.pageSize,page:R.getState().pagination.pageIndex,onPageChange:(e,t)=>{R.setPageIndex(t)},onRowsPerPageChange:e=>R.setPageSize(Number(e.target.value))})]}),(0,i.jsx)(P,{open:n,categoryData:v,setData:x,loading:b,setLoading:j,handleClose:()=>d(!n)}),(0,i.jsx)(N,{open:c,categoryData:w,setData:x,loading:b,setLoading:j,handleClose:()=>m(!c)})]})}},67875:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[3307,6086,2599,6353,1378,8190,5266,5029,2597,6479,9276,9124,1166,3302,1711,559,5841,6772,526,4772,8363,3954,3047,1029,4170,6842,1744],function(){return e(e.s=42260)}),_N_E=e.O()}]);