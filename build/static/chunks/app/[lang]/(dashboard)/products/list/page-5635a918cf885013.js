(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6804,9349],{14260:function(e,n,t){Promise.resolve().then(t.bind(t,1808))},6083:function(e,n,t){"use strict";t.r(n);var i=t(59533),r=t(31229),a=t(30253),o=t(73815),u=t(91975);let d=(0,o.ZP)(a.Z)(e=>{let{skin:n,color:t,size:i,theme:r}=e;return{...t&&"light"===n&&{backgroundColor:"var(--mui-palette-".concat(t,"-lightOpacity)"),color:"var(--mui-palette-".concat(t,"-main)")},...t&&"light-static"===n&&{backgroundColor:(0,u.$n)(r.palette[t].main,.84),color:"var(--mui-palette-".concat(t,"-main)")},...t&&"filled"===n&&{backgroundColor:"var(--mui-palette-".concat(t,"-main)"),color:"var(--mui-palette-".concat(t,"-contrastText)")},...i&&{height:i,width:i}}}),s=(0,r.forwardRef)((e,n)=>{let{color:t,skin:r="filled",...a}=e;return(0,i.jsx)(d,{color:t,skin:r,ref:n,...a})});n.default=s},79505:function(e,n,t){"use strict";t.r(n);var i=t(59533),r=t(31229),a=t(96353),o=t(10358),u=t(66873),d=t(51442),s=t(6532),l=t(50529),c=t(93730),_=t(72315),m=t(46355),p=t(84448),f=t(48111),g=t(72860),h=t.n(g),$=t(59787);let v=e=>{let{tooltipProps:n,children:t}=e;return(null==n?void 0:n.title)?(0,i.jsx)(o.Z,{...n,children:t}):t},x=e=>{let{children:n,option:t}=e;return t.href?(0,i.jsx)(u.Z,{component:a.default,href:t.href,...t.linkProps,children:n}):(0,i.jsx)(i.Fragment,{children:n})};n.default=e=>{let{tooltipProps:n,icon:t,iconClassName:a,options:o,leftAlignMenu:u,iconButtonProps:g}=e,[y,j]=(0,r.useState)(!1),b=(0,r.useRef)(null),{settings:S}=(0,$.r)(),k=e=>{b.current&&b.current.contains(e.target)||j(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{tooltipProps:n,children:(0,i.jsx)(p.Z,{ref:b,size:"small",onClick:()=>{j(e=>!e)},...g,children:"string"==typeof t?(0,i.jsx)("i",{className:h()(t,a)}):t||(0,i.jsx)("i",{className:h()("ri-more-2-line",a)})})}),(0,i.jsx)(d.Z,{open:y,anchorEl:b.current,placement:u?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:n}=e;return(0,i.jsx)(_.Z,{...n,children:(0,i.jsx)(m.Z,{className:"bordered"===S.skin?"border shadow-none":"shadow-lg",children:(0,i.jsx)(c.d,{onClickAway:k,children:(0,i.jsx)(l.Z,{autoFocusItem:y,children:o.map((e,n)=>"string"==typeof e?(0,i.jsx)(s.Z,{onClick:k,children:e},n):"divider"in e?e.divider&&(0,i.jsx)(f.Z,{...e.dividerProps},n):(0,i.jsx)(s.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:n=>{k(n),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(n)},children:(0,i.jsxs)(x,{option:e,children:[("string"==typeof e.icon?(0,i.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},n))})})})})}})]})}},64825:function(e,n,t){"use strict";t.d(n,{J:function(){return s},SettingsProvider:function(){return l}});var i=t(59533),r=t(31229),a=t(23310),o=t(13231),u=t(75443);let d=(e,n)=>{let[t,i]=(0,u.Z)(e);return[(0,r.useMemo)(()=>t?JSON.parse(t):n,[t]),e=>{i(JSON.stringify(e))}]},s=(0,r.createContext)(null),l=e=>{let n={mode:a.Z.mode,skin:a.Z.skin,semiDark:a.Z.semiDark,layout:a.Z.layout,navbarContentWidth:a.Z.navbar.contentWidth,contentWidth:a.Z.contentWidth,footerContentWidth:a.Z.footer.contentWidth,primaryColor:o.Z[0].main},t={...n,mode:e.mode||a.Z.mode},[u,l]=d(a.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:t),[c,_]=(0,r.useState)("{}"!==JSON.stringify(u)?u:t),m=(e,n)=>{let{updateCookie:t=!0}=n||{};_(n=>{let i={...n,...e};return t&&l(i),i})},p=(0,r.useMemo)(()=>JSON.stringify(n)!==JSON.stringify(c),[c]);return(0,i.jsx)(s.Provider,{value:{settings:c,updateSettings:m,isSettingsChanged:p,resetSettings:()=>{m(n)},updatePageSettings:e=>(m(e,{updateCookie:!1}),()=>m(u,{updateCookie:!1}))},children:e.children})}},59787:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var i=t(31229),r=t(64825);let a=()=>{let e=(0,i.useContext)(r.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},12895:function(e,n,t){"use strict";t.d(n,{ApolloWrapper:function(){return m},q:function(){return _}});var i=t(59533),r=t(50421),a=t(73079),o=t(41502),u=t(17856),d=t(31229);let s=(0,d.createContext)();function l(){let e=new a.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),n=(0,u.v)(async(e,n)=>{let{headers:t}=n;try{return{headers:{...t,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:t}}});return new o.fe({cache:new o.h4,link:c.concat(n).concat(e)})}let c=(0,r.q)(e=>{let{graphQLErrors:n,networkError:t}=e;n&&(console.log("graphql",n),n.forEach(e=>{let{extensions:n}=e;("invalid-headers"===n.code||"invalid-jwt"===n.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),t&&(console.log("[Network error]: ".concat(t)),alert("network connection problem"))}),_=()=>(0,d.useContext)(s);function m(e){let{children:n}=e,[t,r]=(0,d.useState)(null),[a,u]=(0,d.useState)(!1);return(0,i.jsx)(o.e$,{makeClient:l,children:(0,i.jsx)(s.Provider,{value:{globalMsg:t,setGlobalMsg:r,loading:a,setLoading:u},children:n})})}},76422:function(e,n,t){"use strict";var i=t(59533);t(31229);var r=t(36772),a=t(12895);n.Z=()=>{let{globalMsg:e,setGlobalMsg:n}=(0,a.q)();return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>n(null),message:e})})}},99954:function(e,n,t){"use strict";t.d(n,{a:function(){return i}});let i={defaultLocale:"en",locales:["en","fr","ar"],langDirection:{en:"ltr",fr:"ltr",ar:"rtl"}}},13231:function(e,n){"use strict";n.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,n){"use strict";n.Z={templateName:"ALPHA",homePageUrl:"/user/list",settingsCookieName:"Alpha",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},29349:function(e,n,t){"use strict";t.d(n,{BM:function(){return ek},DR:function(){return eZ},Ff:function(){return eu},HT:function(){return e_},Hd:function(){return em},J2:function(){return ez},J9:function(){return er},JB:function(){return eF},KN:function(){return ew},Lh:function(){return eO},MP:function(){return et},MZ:function(){return eN},O7:function(){return eA},Qm:function(){return eU},SB:function(){return el},SZ:function(){return ey},Sf:function(){return eg},Si:function(){return eR},Zq:function(){return eS},aY:function(){return ed},bc:function(){return eM},dE:function(){return ep},dn:function(){return eW},en:function(){return eq},hB:function(){return ee},he:function(){return eB},hq:function(){return en},jN:function(){return eD},ju:function(){return ec},mU:function(){return ex},mt:function(){return eE},oe:function(){return es},pE:function(){return eJ},rV:function(){return eI},si:function(){return eL},tC:function(){return eP},tt:function(){return eh},tz:function(){return ev},u7:function(){return eo},uv:function(){return ea},vl:function(){return eC},wU:function(){return e$},yG:function(){return eb},yn:function(){return ef},z7:function(){return ej},zN:function(){return ei}});var i=t(42541),r=t(14595);function a(){let e=(0,i._)(["\n  mutation adminSignIn($email: String!, $password: String!) {\n    AdminSignIn(email: $email, password: $password) {\n      token\n      message\n    }\n  }\n"]);return a=function(){return e},e}function o(){let e=(0,i._)(["\n  mutation addCategory($data: product_categories_insert_input!) {\n    insert_product_categories_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}function u(){let e=(0,i._)(["\n  mutation addCategory($data: brands_insert_input!) {\n    insert_brands_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return u=function(){return e},e}function d(){let e=(0,i._)(["\n  mutation addProduct(\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n    $product_medias: product_medias_arr_rel_insert_input!\n  ) {\n    insert_products_one(\n      object: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n        product_medias: $product_medias\n      }\n    ) {\n      id\n    }\n  }\n"]);return d=function(){return e},e}function s(){let e=(0,i._)(["\n  mutation editProduct(\n    $id: uuid!\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n      }\n    ) {\n      id\n    }\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,i._)(["\n  mutation addNews($data: news_insert_input!) {\n    insert_news_one(object: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i._)(["\n  mutation deleteProduct($id: uuid!) {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function _(){let e=(0,i._)(["\n  mutation deleteBrand($id: uuid!) {\n    delete_brands_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return _=function(){return e},e}function m(){let e=(0,i._)(["\n  mutation deleteProductCat($id: uuid!) {\n    delete_product_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function p(){let e=(0,i._)(["\n  mutation deleteNewCat($id: uuid!) {\n    delete_news_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function f(){let e=(0,i._)(["\n  mutation addNewCat($title: String!) {\n    insert_news_categories_one(object: { title: $title }) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function g(){let e=(0,i._)(["\n  mutation deleteNews($id: uuid!) {\n    delete_news_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return g=function(){return e},e}function h(){let e=(0,i._)(["\n  mutation deleteInvoice($id: uuid!) {\n    delete_invoices_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return h=function(){return e},e}function $(){let e=(0,i._)(["\n  mutation aa($id: uuid!) {\n    delete_orders_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return $=function(){return e},e}function v(){let e=(0,i._)(["\n  mutation deleteDealer($id: uuid!) {\n    delete_dealers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function x(){let e=(0,i._)(["\n  mutation addDealer($data: dealers_insert_input!) {\n    insert_dealers_one(object: $data) {\n      id\n    }\n  }\n"]);return x=function(){return e},e}function y(){let e=(0,i._)(["\n  mutation addNewProducts($data: news_related_products_insert_input!) {\n    insert_news_related_products_one(object: $data) {\n      id\n    }\n  }\n"]);return y=function(){return e},e}function j(){let e=(0,i._)(["\n  mutation editNewProducts($id: uuid!, $data: news_set_input!) {\n    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      image_url\n      body_html\n      created_at\n      news_category {\n        title\n        id\n      }\n      disabled\n      news_category_id\n      title\n      updated_at\n    }\n  }\n"]);return j=function(){return e},e}function b(){let e=(0,i._)(["\n  mutation aa($news_id: uuid!) {\n    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return b=function(){return e},e}function S(){let e=(0,i._)(["\n  mutation aa($content_type: String!, $folder: String!) {\n    getFileUploadUrl(content_type: $content_type, folder: $folder) {\n      error\n      message\n      fileName\n      fileUploadUrl\n    }\n  }\n"]);return S=function(){return e},e}function k(){let e=(0,i._)(["\n  mutation orderStatus($order_id: uuid!, $status: String!) {\n    updateOrderStatus(order_id: $order_id, status: $status) {\n      message\n    }\n  }\n"]);return k=function(){return e},e}function P(){let e=(0,i._)(["\n  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {\n    updateServiceStatus(service_token_id: $service_token_id, status: $status) {\n      message\n    }\n  }\n"]);return P=function(){return e},e}function w(){let e=(0,i._)(["\n  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {\n    acceptServiceToken(\n      is_warranty_valid: $is_warranty_valid\n      service_fee: $service_fee\n      service_token_id: $service_token_id\n    ) {\n      message\n    }\n  }\n"]);return w=function(){return e},e}function C(){let e=(0,i._)(["\n  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {\n    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {\n      message\n    }\n  }\n"]);return C=function(){return e},e}function N(){let e=(0,i._)(["\n  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      role\n      status\n    }\n  }\n"]);return N=function(){return e},e}function Z(){let e=(0,i._)(["\n  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {\n    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {\n      message\n    }\n  }\n"]);return Z=function(){return e},e}function F(){let e=(0,i._)(["\n  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {\n    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {\n      message\n    }\n  }\n"]);return F=function(){return e},e}function I(){let e=(0,i._)(["\n  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {\n    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {\n      message\n    }\n  }\n"]);return I=function(){return e},e}function D(){let e=(0,i._)(["\n  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {\n    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return D=function(){return e},e}function A(){let e=(0,i._)(["\n  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {\n    addInvoicePayment(\n      amount: $amount\n      invoice_id: $invoice_id\n      payment_date: $payment_date\n      payment_method: $payment_method\n    ) {\n      message\n    }\n  }\n"]);return A=function(){return e},e}function q(){let e=(0,i._)(["\n  mutation sendQInvoice($quotation_id: uuid!) {\n    sendInvoice(quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return q=function(){return e},e}function B(){let e=(0,i._)(["\n  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {\n    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {\n      id\n    }\n  }\n"]);return B=function(){return e},e}function U(){let e=(0,i._)(["\n  mutation deleteAdmin($id: uuid!) {\n    delete_admins_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return U=function(){return e},e}function E(){let e=(0,i._)(["\n  mutation deleteServiceCenter($id: uuid!) {\n    delete_service_centers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return E=function(){return e},e}function O(){let e=(0,i._)(["\n  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {\n    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {\n      message\n      token\n    }\n  }\n"]);return O=function(){return e},e}function W(){let e=(0,i._)(["\n  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {\n    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      email\n      role\n    }\n  }\n"]);return W=function(){return e},e}function M(){let e=(0,i._)(["\n  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {\n    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {\n      message\n      token\n    }\n  }\n"]);return M=function(){return e},e}function R(){let e=(0,i._)(["\n  mutation addSeriveCenter($data: service_centers_insert_input!) {\n    insert_service_centers_one(object: $data) {\n      id\n      name\n      phone\n      address\n      created_at\n      updated_at\n    }\n  }\n"]);return R=function(){return e},e}function z(){let e=(0,i._)(["\n  mutation editService($id: uuid!, $data: service_tokens_set_input!) {\n    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      service_fee\n    }\n  }\n"]);return z=function(){return e},e}function J(){let e=(0,i._)(["\n  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {\n    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      name\n      phone\n      address\n    }\n  }\n"]);return J=function(){return e},e}function L(){let e=(0,i._)(["\n  mutation deleteProductDiscount($id: uuid!) {\n    delete_product_discounts_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return L=function(){return e},e}function H(){let e=(0,i._)(["\n  mutation orderComplete($id: uuid!, $completion_photo_url: String!, $remark: String!) {\n    update_orders_by_pk(\n      pk_columns: { id: $id }\n      _set: { completion_photo_url: $completion_photo_url, remark: $remark }\n    ) {\n      id\n      completion_photo_url\n      remark\n    }\n  }\n"]);return H=function(){return e},e}function T(){let e=(0,i._)(["\n  mutation addDiscount($data: product_discounts_insert_input!) {\n    insert_product_discounts_one(object: $data) {\n      id\n      min_order\n      product_id\n      discount_type\n      discounted_value\n      customer_type\n      created_at\n      updated_at\n    }\n  }\n"]);return T=function(){return e},e}function Q(){let e=(0,i._)(["\n  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {\n    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      min_order\n      discount_type\n      customer_type\n      discounted_value\n      created_at\n      updated_at\n    }\n  }\n"]);return Q=function(){return e},e}function V(){let e=(0,i._)(["\n  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {\n    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return V=function(){return e},e}function G(){let e=(0,i._)(["\n  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {\n    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      title\n      image_url\n    }\n  }\n"]);return G=function(){return e},e}function K(){let e=(0,i._)(["\n  mutation editNewCat($id: uuid!, $title: String!) {\n    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      id\n      title\n    }\n  }\n"]);return K=function(){return e},e}function Y(){let e=(0,i._)(["\n  mutation imageUpload($data: product_medias_insert_input!) {\n    insert_product_medias_one(object: $data) {\n      id\n      product_id\n      media_url\n      media_type\n    }\n  }\n"]);return Y=function(){return e},e}function X(){let e=(0,i._)(["\n  mutation deleteProductImage($id: uuid!) {\n    delete_product_medias_by_pk(id: $id) {\n      id\n      media_url\n      media_type\n    }\n  }\n"]);return X=function(){return e},e}let ee=(0,r.Ps)(a()),en=(0,r.Ps)(o()),et=(0,r.Ps)(u()),ei=(0,r.Ps)(d()),er=(0,r.Ps)(s()),ea=(0,r.Ps)(l()),eo=(0,r.Ps)(c()),eu=(0,r.Ps)(_()),ed=(0,r.Ps)(m()),es=(0,r.Ps)(p()),el=(0,r.Ps)(f()),ec=(0,r.Ps)(g());(0,r.Ps)(h());let e_=(0,r.Ps)($());(0,r.Ps)(v()),(0,r.Ps)(x());let em=(0,r.Ps)(y()),ep=(0,r.Ps)(j()),ef=(0,r.Ps)(b()),eg=(0,r.Ps)(S()),eh=(0,r.Ps)(k()),e$=(0,r.Ps)(P()),ev=(0,r.Ps)(w()),ex=(0,r.Ps)(C()),ey=(0,r.Ps)(N()),ej=(0,r.Ps)(Z()),eb=(0,r.Ps)(F()),eS=(0,r.Ps)(I()),ek=(0,r.Ps)(D()),eP=(0,r.Ps)(A()),ew=(0,r.Ps)(q()),eC=(0,r.Ps)(B()),eN=(0,r.Ps)(U()),eZ=(0,r.Ps)(E()),eF=(0,r.Ps)(O()),eI=(0,r.Ps)(W()),eD=(0,r.Ps)(M()),eA=(0,r.Ps)(R()),eq=(0,r.Ps)(z()),eB=(0,r.Ps)(J()),eU=(0,r.Ps)(L()),eE=(0,r.Ps)(H()),eO=(0,r.Ps)(T()),eW=(0,r.Ps)(Q()),eM=(0,r.Ps)(V()),eR=(0,r.Ps)(G()),ez=(0,r.Ps)(K()),eJ=(0,r.Ps)(Y()),eL=(0,r.Ps)(X())},84148:function(e,n,t){"use strict";t.d(n,{U:function(){return o}});var i=t(99954);let r=(e,n)=>e.startsWith(n)?e:"".concat(n).concat(e),a=e=>i.a.locales.every(n=>!(e.startsWith("/".concat(n,"/"))||e==="/".concat(n))),o=(e,n)=>{if(!e||!n)throw Error("URL or Language Code can't be empty");return a(e)?"/".concat(n).concat(r(e,"/")):e}},1808:function(e,n,t){"use strict";t.d(n,{default:function(){return T}});var i=t(59533),r=t(31029),a=t(40877),o=t(91771),u=t(31229),d=t(76778),s=t(54323),l=t(84323),c=t(64332),_=t(72860),m=t.n(_),p=t(6083),f=e=>{let{count:n,title:t}=e;return(0,c.Z)(e=>e.breakpoints.down("md")),(0,c.Z)(e=>e.breakpoints.down("sm")),(0,i.jsx)(d.Z,{children:(0,i.jsxs)(s.Z,{className:"flex justify-between gap-1 ",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[(0,i.jsx)(l.Z,{color:"text.primary",variant:"h3",children:n}),(0,i.jsx)("div",{className:"flex items-center gap-2 flex-wrap",children:(0,i.jsx)(l.Z,{variant:"h5",color:"".concat("Active"===t?"green":"Brand"===t?"yellow":"Category"===t?"orange":"red"),children:t})})]}),(0,i.jsx)(p.default,{skin:"light",variant:"rounded",size:42,children:(0,i.jsx)("i",{className:"".concat("Active"===t?"ri-check-double-fill":"Brand"===t?"ri-store-3-fill":"Category"===t?"ri-discount-percent-fill":"ri-close-circle-fill")})})]})})},g=t(96353),h=t(61250),$=t(11124),v=t(29900),x=t(48111),y=t(84448),j=t(13954),b=t(82597),S=t(19880),k=t(65841),P=t(51480),w=t(83379),C=t(60753),N=t(6532),Z=t(37911);let F={"In Stock":!0,"Out of Stock":!1};var I=e=>{var n;let{setData:t,productData:d}=e,[l,c]=(0,u.useState)(""),[_,m]=(0,u.useState)(""),[p,f]=(0,u.useState)(""),{data:g}=(0,a.kJ)(r.xH);return(0,u.useEffect)(()=>{let e=null==d?void 0:d.filter(e=>{var n;return(!l||(null==e?void 0:null===(n=e.product_category)||void 0===n?void 0:n.title)===l)&&(!_||e.stock===F[_])&&(""===p||(null==e?void 0:e.disabled)===("false"===p))});t(null!=e?e:[])},[l,_,p,d]),(0,i.jsx)(s.Z,{children:(0,i.jsx)(o.ZP,{container:!0,spacing:6,children:(0,i.jsx)(o.ZP,{item:!0,xs:12,sm:4,children:(0,i.jsxs)(w.Z,{fullWidth:!0,children:[(0,i.jsx)(C.Z,{id:"category-select",children:"Category"}),(0,i.jsxs)(Z.Z,{fullWidth:!0,id:"select-category",value:l,onChange:e=>c(e.target.value),label:"Category",labelId:"category-select",children:[(0,i.jsx)(N.Z,{value:"",children:"Select Category"}),null==g?void 0:null===(n=g.product_categories)||void 0===n?void 0:n.map(e=>(0,i.jsx)(N.Z,{value:null==e?void 0:e.title,children:null==e?void 0:e.title},e.id))]})]})})})})};t(79505);var D=t(84148),A=t(67875),q=t.n(A),B=t(45641),U=t(30253),E=t(29349),O=t(12895),W=t(76422),M=t(3050);let R=(e,n,t,i)=>{let r=(0,S.O4)(e.getValue(n),t);return i({itemRank:r}),r.passed},z=e=>{let{value:n,onChange:t,debounce:r=500,...a}=e,[o,d]=(0,u.useState)(n);return(0,u.useEffect)(()=>{d(n)},[n]),(0,u.useEffect)(()=>{let e=setTimeout(()=>{t(o)},r);return()=>clearTimeout(e)},[o]),(0,i.jsx)(b.Z,{...a,value:o,onChange:e=>d(e.target.value),size:"small"})},J=(0,k.Cl)(),L=[{label:"Product Name",key:"title"},{label:"Product Brand",key:"title"},{label:"Product Category",key:"title"},{label:"Price",key:"price"},{label:"Serial Number",key:"serial_number"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}];var H=()=>{let{setGlobalMsg:e}=(0,O.q)(),{data:n}=(0,a.kJ)(r.tT,{fetchPolicy:"network-only"}),[t]=(0,B.D)(E.u7),[o,s]=(0,u.useState)({}),[c,_]=(0,u.useState)(n.products),[p,f]=(0,u.useState)(c),[b,S]=(0,u.useState)(""),{lang:w}=(0,h.useParams)(),C=p.map(e=>{var n,t;return{...e,title:null==e?void 0:null===(n=e.brand)||void 0===n?void 0:n.title,title:null==e?void 0:null===(t=e.product_category)||void 0===t?void 0:t.title,created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()}}),N=(0,u.useMemo)(()=>[J.accessor("title",{header:"Product",cell:e=>{var n,t,r,a,o;let{row:u}=e;return(0,i.jsxs)("div",{className:"flex items-center gap-4 ",children:[(0,i.jsx)("img",{src:null===(t=u.original)||void 0===t?void 0:null===(n=t.product_medias[0])||void 0===n?void 0:n.media_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,i.jsxs)("div",{className:"flex flex-col w-60 text-wrap",children:[(0,i.jsx)(l.Z,{className:"font-medium",color:"text.primary",children:null===(r=u.original)||void 0===r?void 0:r.title}),(0,i.jsx)(l.Z,{variant:"body2",children:null===(o=u.original)||void 0===o?void 0:null===(a=o.brand)||void 0===a?void 0:a.title})]})]})}}),J.accessor("product_category.title",{header:"Category",cell:e=>{var n,t,r,a;let{row:o}=e;return(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(U.Z,{src:null===(t=o.original)||void 0===t?void 0:null===(n=t.product_category)||void 0===n?void 0:n.image_url}),(0,i.jsx)(l.Z,{color:"text.primary",children:null===(a=o.original)||void 0===a?void 0:null===(r=a.product_category)||void 0===r?void 0:r.title})]})}}),J.accessor("serial_number",{header:"Serial No.",cell:e=>{var n,t;let{row:r}=e;return(0,i.jsx)(l.Z,{children:(null===(n=r.original)||void 0===n?void 0:n.serial_number)?null===(t=r.original)||void 0===t?void 0:t.serial_number:"-"})}}),J.accessor("price",{header:"Price",cell:e=>{var n;let{row:t}=e;return(0,i.jsx)(l.Z,{children:null===(n=t.original)||void 0===n?void 0:n.price.toLocaleString()})}}),J.accessor("created_at",{header:"Date",cell:e=>{var n,t;let{row:r}=e;return(0,i.jsx)(l.Z,{children:null===(t=r.original)||void 0===t?void 0:null===(n=t.created_at)||void 0===n?void 0:n.substring(0,10)})}}),J.accessor("actions",{header:"Actions",cell:e=>{let{row:n}=e;return(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(y.Z,{size:"small",children:(0,i.jsx)(g.default,{href:(0,D.U)("/products/edit/".concat(n.original.id),w),className:"flex",children:(0,i.jsx)("i",{className:"ri-edit-box-line text-[22px] "})})}),(0,i.jsx)(y.Z,{children:(0,i.jsx)(g.default,{href:(0,D.U)("/products/details/".concat(n.original.id),w),className:"flex",children:(0,i.jsx)("i",{className:"ri-eye-line text-textSecondary"})})})]})},enableSorting:!1})],[c,p]),Z=(0,P.b7)({data:p,columns:N,filterFns:{fuzzy:R},state:{rowSelection:o,globalFilter:b},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:R,onRowSelectionChange:s,getCoreRowModel:(0,k.sC)(),onGlobalFilterChange:S,getFilteredRowModel:(0,k.vL)(),getSortedRowModel:(0,k.tj)(),getPaginationRowModel:(0,k.G_)(),getFacetedRowModel:(0,k.o6)(),getFacetedUniqueValues:(0,k.JG)(),getFacetedMinMaxValues:(0,k.HO)()});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{children:[(0,i.jsx)($.Z,{title:"Filters",className:"pbe-4"}),(0,i.jsx)(I,{setData:f,productData:c}),(0,i.jsx)(x.Z,{}),(0,i.jsxs)("div",{className:"flex justify-between flex-col items-start sm:flex-row sm:items-center gap-y-4 p-5",children:[(0,i.jsx)(z,{value:null!=b?b:"",onChange:e=>S(String(e)),placeholder:"Search Product",className:"max-sm:is-full"}),(0,i.jsxs)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:[(0,i.jsx)(v.Z,{color:"secondary",variant:"outlined",startIcon:(0,i.jsx)("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:(0,i.jsx)(M.CSVLink,{className:"exportBtn",data:C,headers:L,filename:"all-products-".concat(new Date().toISOString(),".csv"),children:"Export"})}),(0,i.jsx)(v.Z,{variant:"contained",component:g.default,href:(0,D.U)("/products/add",w),startIcon:(0,i.jsx)("i",{className:"ri-add-line"}),className:"max-sm:is-full is-auto",children:"Add Product"})]})]}),(0,i.jsx)("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:q().table,children:[(0,i.jsx)("thead",{children:Z.getHeaderGroups().map(e=>(0,i.jsx)("tr",{children:e.headers.map(e=>{var n;return(0,i.jsx)("th",{children:e.isPlaceholder?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,P.ie)(e.column.columnDef.header,e.getContext()),null!==(n=({asc:(0,i.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,i.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==n?n:null]})})},e.id)})},e.id))}),0===Z.getFilteredRowModel().rows.length?(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:Z.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,i.jsx)("tbody",{children:Z.getRowModel().rows.slice(0,Z.getState().pagination.pageSize).map(e=>(0,i.jsx)("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,i.jsx)("td",{children:(0,P.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,i.jsx)(j.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:Z.getFilteredRowModel().rows.length,rowsPerPage:Z.getState().pagination.pageSize,page:Z.getState().pagination.pageIndex,onPageChange:(e,n)=>{Z.setPageIndex(n)},onRowsPerPageChange:e=>Z.setPageSize(Number(e.target.value))})]}),(0,i.jsx)(W.Z,{})]})},T=()=>{let{data:e}=(0,a.kJ)(r.ld);return(0,i.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,md:3,sm:6,children:(0,i.jsx)(f,{count:e.activeProduct.aggregate.count,title:"Active"})}),(0,i.jsx)(o.ZP,{item:!0,xs:12,md:3,sm:6,children:(0,i.jsx)(f,{count:e.brandProduct.aggregate.count,title:"Brand"})}),(0,i.jsx)(o.ZP,{item:!0,xs:12,md:3,sm:6,children:(0,i.jsx)(f,{count:e.categoryProduct.aggregate.count,title:"Category"})}),(0,i.jsx)(o.ZP,{item:!0,xs:12,children:(0,i.jsx)(H,{})})]})}},67875:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[3307,6086,2599,6353,1378,8190,5266,5029,2597,6479,9276,9124,717,1166,3302,3347,1711,559,5841,6772,4772,3954,9731,1029,4170,6842,1744],function(){return e(e.s=14260)}),_N_E=e.O()}]);