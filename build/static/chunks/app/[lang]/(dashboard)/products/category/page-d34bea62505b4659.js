(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8583],{83410:function(e,t,n){Promise.resolve().then(n.bind(n,75582))},79505:function(e,t,n){"use strict";n.r(t);var i=n(59533),r=n(31229),a=n(96353),o=n(75510),s=n(51115),l=n(88478),u=n(30034),d=n(13638),c=n(62168),m=n(49744),_=n(13935),p=n(89749),f=n(45336),g=n(72860),h=n.n(g),x=n(59787);let y=e=>{let{tooltipProps:t,children:n}=e;return(null==t?void 0:t.title)?(0,i.jsx)(o.Z,{...t,children:n}):n},v=e=>{let{children:t,option:n}=e;return n.href?(0,i.jsx)(s.Z,{component:a.default,href:n.href,...n.linkProps,children:t}):(0,i.jsx)(i.Fragment,{children:t})};t.default=e=>{let{tooltipProps:t,icon:n,iconClassName:a,options:o,leftAlignMenu:s,iconButtonProps:g}=e,[$,b]=(0,r.useState)(!1),j=(0,r.useRef)(null),{settings:C}=(0,x.r)(),P=e=>{j.current&&j.current.contains(e.target)||b(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{tooltipProps:t,children:(0,i.jsx)(p.Z,{ref:j,size:"small",onClick:()=>{b(e=>!e)},...g,children:"string"==typeof n?(0,i.jsx)("i",{className:h()(n,a)}):n||(0,i.jsx)("i",{className:h()("ri-more-2-line",a)})})}),(0,i.jsx)(l.Z,{open:$,anchorEl:j.current,placement:s?"bottom-start":"bottom-end",transition:!0,disablePortal:!0,sx:{zIndex:1},children:e=>{let{TransitionProps:t}=e;return(0,i.jsx)(m.Z,{...t,children:(0,i.jsx)(_.Z,{className:"bordered"===C.skin?"border shadow-none":"shadow-lg",children:(0,i.jsx)(c.d,{onClickAway:P,children:(0,i.jsx)(d.Z,{autoFocusItem:$,children:o.map((e,t)=>"string"==typeof e?(0,i.jsx)(u.Z,{onClick:P,children:e},t):"divider"in e?e.divider&&(0,i.jsx)(f.Z,{...e.dividerProps},t):(0,i.jsx)(u.Z,{...e.menuItemProps,...e.href&&{className:"p-0"},onClick:t=>{P(t),e.menuItemProps&&e.menuItemProps.onClick&&e.menuItemProps.onClick(t)},children:(0,i.jsxs)(v,{option:e,children:[("string"==typeof e.icon?(0,i.jsx)("i",{className:e.icon}):e.icon)||null,e.text]})},t))})})})})}})]})}},64825:function(e,t,n){"use strict";n.d(t,{J:function(){return u},SettingsProvider:function(){return d}});var i=n(59533),r=n(31229),a=n(23310),o=n(13231),s=n(75443);let l=(e,t)=>{let[n,i]=(0,s.Z)(e);return[(0,r.useMemo)(()=>n?JSON.parse(n):t,[n]),e=>{i(JSON.stringify(e))}]},u=(0,r.createContext)(null),d=e=>{let t={mode:a.Z.mode,skin:a.Z.skin,semiDark:a.Z.semiDark,layout:a.Z.layout,navbarContentWidth:a.Z.navbar.contentWidth,contentWidth:a.Z.contentWidth,footerContentWidth:a.Z.footer.contentWidth,primaryColor:o.Z[0].main},n={...t,mode:e.mode||a.Z.mode},[s,d]=l(a.Z.settingsCookieName,"{}"!==JSON.stringify(e.settingsCookie)?e.settingsCookie:n),[c,m]=(0,r.useState)("{}"!==JSON.stringify(s)?s:n),_=(e,t)=>{let{updateCookie:n=!0}=t||{};m(t=>{let i={...t,...e};return n&&d(i),i})},p=(0,r.useMemo)(()=>JSON.stringify(t)!==JSON.stringify(c),[c]);return(0,i.jsx)(u.Provider,{value:{settings:c,updateSettings:_,isSettingsChanged:p,resetSettings:()=>{_(t)},updatePageSettings:e=>(_(e,{updateCookie:!1}),()=>_(s,{updateCookie:!1}))},children:e.children})}},59787:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var i=n(31229),r=n(64825);let a=()=>{let e=(0,i.useContext)(r.J);if(!e)throw Error("useSettingsContext must be used within a SettingsProvider");return e}},12895:function(e,t,n){"use strict";n.d(t,{ApolloWrapper:function(){return _},q:function(){return m}});var i=n(59533),r=n(81866),a=n(63876),o=n(49464),s=n(50069),l=n(31229);let u=(0,l.createContext)();function d(){let e=new a.u({uri:"https://alpha.axra.app/v1/graphql",fetchOptions:{cache:"no-store"}}),t=(0,s.v)(async(e,t)=>{let{headers:n}=t;try{return{headers:{...n,"x-hasura-admin-secret":"alphapassword"}}}catch(e){return{headers:n}}});return new o.fe({cache:new o.h4,link:c.concat(t).concat(e)})}let c=(0,r.q)(e=>{let{graphQLErrors:t,networkError:n}=e;t&&(console.log("graphql",t),t.forEach(e=>{let{extensions:t}=e;("invalid-headers"===t.code||"invalid-jwt"===t.code)&&(localStorage.clear(),window.location.assign("".concat(window.location.origin,"/login")))})),n&&(console.log("[Network error]: ".concat(n)),alert("network connection problem"))}),m=()=>(0,l.useContext)(u);function _(e){let{children:t}=e,[n,r]=(0,l.useState)(null),[a,s]=(0,l.useState)(!1);return(0,i.jsx)(o.e$,{makeClient:d,children:(0,i.jsx)(u.Provider,{value:{globalMsg:n,setGlobalMsg:r,loading:a,setLoading:s},children:t})})}},66967:function(e,t,n){"use strict";var i=n(59533),r=n(31229);t.default=e=>{let{element:t,dialog:n,elementProps:a,dialogProps:o,dataId:s,setData:l,data:u}=e,[d,c]=(0,r.useState)(!1),{onClick:m,..._}=a;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{onClick:e=>{m&&m(e),c(!0)},..._}),(0,i.jsx)(n,{open:d,setOpen:c,...o,dataId:s,setData:l,data:u})]})}},83338:function(e,t,n){"use strict";var i=n(59533),r=n(31229),a=n(64429),o=n(56527),s=n(97122),l=n(28095),u=n(47867),d=n(72860),c=n.n(d),m=n(76399),_=n(29349),p=n(61250),f=n(31029);t.Z=e=>{let{open:t,setOpen:n,type:d,dataId:g,data:h,setData:x}=e,{userId:y}=(0,p.useParams)(),[v]=(0,m.D)(_.HT),[$]=(0,m.D)(_.SZ,{refetchQueries:[f.L5]}),[b]=(0,m.D)(_.z7,{refetchQueries:[f.L5]}),[j]=(0,m.D)(_.aY),[C]=(0,m.D)(_.Ff),[P]=(0,m.D)(_.ju),[w]=(0,m.D)(_.oe),[S,k]=(0,r.useState)(!1),[N,Z]=(0,r.useState)(!1),D="disable-account"===d?"div":r.Fragment,F=()=>{k(!1),n(!1)},U=async e=>{if(!0===e)try{"disable-account"===d&&await $({variables:{id:y,data:{status:"disable"}}}),"verified-account"===d&&await b({variables:{user_id:y,is_verified:!0}}),"unverified-account"===d&&await b({variables:{user_id:y,is_verified:!1}}),"deleteProductCategory"===d&&(await j({variables:{id:g}}),x(h.filter(e=>e.id!==g))),"deleteProductBrand"===d&&(await C({variables:{id:g}}),x(h.filter(e=>e.id!==g))),"deletePost"===d&&(await P({variables:{id:g}}),x(h.filter(e=>e.id!==g))),"deleteNewCategory"===d&&(await w({variables:{id:g}}),x(h.filter(e=>e.id!==g))),Z(e),n(!1)}catch(e){console.log("Error",e)}else n(!1);Z(e),k(!0),n(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{fullWidth:!0,maxWidth:"xs",open:t,onClose:()=>n(!1),children:[(0,i.jsxs)(o.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,i.jsx)("i",{className:"ri-error-warning-line text-[88px] mbe-6 text-warning"}),(0,i.jsxs)(D,{..."disable-account"===d&&{className:"flex flex-col items-center gap-2"},children:[(0,i.jsxs)(l.Z,{variant:"h4",children:["unsubscribe"===d&&"Are you sure to cancel your subscription?","disable-account"===d&&"Are you sure?","delete-order"===d&&"Are you sure?","delete-customer"===d&&"Are you sure?"]}),"verified-account"===d&&(0,i.jsx)(l.Z,{color:"text.primary",children:"Are you sure you want to activate your account?"}),"unverified-account"===d&&(0,i.jsx)(l.Z,{color:"text.primary",children:"Are you sure you want to unactivate your account?"}),"disable-account"===d&&(0,i.jsx)(l.Z,{color:"text.primary",children:"You won't be able to revert user!"}),"deleteProductCategory"===d&&(0,i.jsx)(l.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteProductBrand"===d&&(0,i.jsx)(l.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deletePost"===d&&(0,i.jsx)(l.Z,{color:"text.primary",children:"Are you sure you want to delete?"}),"deleteNewCategory"===d&&(0,i.jsx)(l.Z,{color:"text.primary",children:"Are you sure you want to delete?"})]})]}),(0,i.jsxs)(s.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:[(0,i.jsx)(u.Z,{variant:"contained",onClick:()=>U(!0),children:"disable-account"===d?"Yes, Suspend User!":"deleteProductCategory"===d?"Yes, Delete Category!":"deleteProductBrand"===d?"Yes, Delete Brand":"delete-customer"===d?"Yes, Delete Customer!":"verified-account"===d?"Yes , User activate":"unverified-account"===d?"Yes, User Unactivate":"deletePost"===d?"Yes, Delete Post":"deleteNewCategory"===d?"Yes, Delete Category":"Yes"}),(0,i.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:()=>{U(!1)},children:"Cancel"})]})]}),(0,i.jsxs)(a.Z,{open:S,onClose:F,children:[(0,i.jsxs)(o.Z,{className:"flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16",children:[(0,i.jsx)("i",{className:c()("text-[88px] mbe-6",{"ri-checkbox-circle-line":N,"text-success":N,"ri-close-circle-line":!N,"text-error":!N})}),(0,i.jsx)(l.Z,{variant:"h4",className:"mbe-2",children:N?"".concat("disable-account"===d?"User Disabled":"verified-account"===d?"User Activate":"deleteProductCategory"===d?"Delete Category":"unverified"===d?"User Unactivate":"deleteProductBrand"===d?"Delete Brand":"deletePost"===d?"Delete Post":"deleteNewCategory"===d?"Delete New Category":"yes"):"Cancelled"}),(0,i.jsx)(l.Z,{color:"text.primary",children:N?(0,i.jsxs)(i.Fragment,{children:["verified-account"===d&&"Your account has been activated successfully.","unverified-account"===d&&"Your account has been unactivated successfully.","disable-account"===d&&"User has been disabled.","deleteProductCategory"===d&&"Your Category has been deleted successfully.","deleteNewCategory"===d&&"Your New Category has been deleted successfully.","deleteProductBrand"===d&&"Your Category has been deleted successfully.","deletePost"===d&&"Your Post has been deleted successfully.","delete-customer"===d&&"Your customer removed successfully."]}):(0,i.jsxs)(i.Fragment,{children:[console.log("use input ",N),"verified-account"===d&&"User activation Cancelled!","unverified-account"===d&&"User inactivation Cancelled!","disable-account"===d&&"Cancelled Disabled :)","deleteProductCategory"===d&&"Category Deletion Cancelled","deleteNewCategory"===d&&"New Category Deletion Cancelled","deleteProductBrand"===d&&"Brand Deletion Cancelled","deletePost"===d&&"Post Deletion Cancelled!","delete-customer"===d&&"Customer Deletion Cancelled"]})})]}),(0,i.jsx)(s.Z,{className:"justify-center pbs-0 sm:pbe-16 sm:pli-16",children:(0,i.jsx)(u.Z,{variant:"contained",color:"success",onClick:F,children:"Ok"})})]})]})}},76422:function(e,t,n){"use strict";var i=n(59533);n(31229);var r=n(12173),a=n(12895);t.Z=()=>{let{globalMsg:e,setGlobalMsg:t}=(0,a.q)();return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!e,autoHideDuration:3e3,onClose:()=>t(null),message:e})})}},13231:function(e,t){"use strict";t.Z=[{name:"primary-1",light:"#A379FF",main:"#8C57FF",dark:"#7E4EE6"},{name:"primary-2",light:"#4EB0B1",main:"#0D9394",dark:"#096B6C"},{name:"primary-3",light:"#F0718D",main:"#EB3D63",dark:"#AC2D48"},{name:"primary-4",light:"#FFC25A",main:"#FFAB1D",dark:"#BA7D15"},{name:"primary-5",light:"#5CAFF1",main:"#2092EC",dark:"#176BAC"}]},23310:function(e,t){"use strict";t.Z={templateName:"ALPHA",homePageUrl:"/dashboards/crm",settingsCookieName:"materio-mui-next-demo-1",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1,toastPosition:"top-right"}},29349:function(e,t,n){"use strict";n.d(t,{BM:function(){return eg},DR:function(){return e$},Ff:function(){return ee},HT:function(){return ea},Hd:function(){return eo},J2:function(){return eD},J9:function(){return G},JB:function(){return eb},KN:function(){return ex},Lh:function(){return ek},MP:function(){return H},MZ:function(){return ev},O7:function(){return eC},Qm:function(){return eS},SB:function(){return ei},SZ:function(){return em},Sf:function(){return eu},Si:function(){return eZ},Zq:function(){return ef},aY:function(){return et},bc:function(){return eN},dE:function(){return es},en:function(){return eP},hB:function(){return L},he:function(){return ew},hq:function(){return Q},jN:function(){return ej},ju:function(){return er},oe:function(){return en},tC:function(){return eh},tt:function(){return ed},u7:function(){return X},uv:function(){return K},vl:function(){return ey},wU:function(){return ec},yG:function(){return ep},yn:function(){return el},z7:function(){return e_},zN:function(){return V}});var i=n(42541),r=n(14595);function a(){let e=(0,i._)(["\n  mutation adminSignIn($email: String!, $password: String!) {\n    AdminSignIn(email: $email, password: $password) {\n      token\n      message\n    }\n  }\n"]);return a=function(){return e},e}function o(){let e=(0,i._)(["\n  mutation addCategory($data: product_categories_insert_input!) {\n    insert_product_categories_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}function s(){let e=(0,i._)(["\n  mutation addCategory($data: brands_insert_input!) {\n    insert_brands_one(object: $data) {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,i._)(["\n  mutation addProduct(\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n    $product_medias: product_medias_arr_rel_insert_input!\n  ) {\n    insert_products_one(\n      object: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n        product_medias: $product_medias\n      }\n    ) {\n      id\n    }\n  }\n"]);return l=function(){return e},e}function u(){let e=(0,i._)(["\n  mutation editProduct(\n    $id: uuid!\n    $title: String!\n    $description_html: String!\n    $brand_id: uuid!\n    $category_id: uuid!\n    $serial_number: String!\n    $price: numeric!\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        title: $title\n        description_html: $description_html\n        brand_id: $brand_id\n        category_id: $category_id\n        serial_number: $serial_number\n        price: $price\n      }\n    ) {\n      id\n    }\n  }\n"]);return u=function(){return e},e}function d(){let e=(0,i._)(["\n  mutation addNews($data: news_insert_input!) {\n    insert_news_one(object: $data) {\n      id\n    }\n  }\n"]);return d=function(){return e},e}function c(){let e=(0,i._)(["\n  mutation deleteProduct($id: uuid!) {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function m(){let e=(0,i._)(["\n  mutation deleteBrand($id: uuid!) {\n    delete_brands_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function _(){let e=(0,i._)(["\n  mutation deleteProductCat($id: uuid!) {\n    delete_product_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return _=function(){return e},e}function p(){let e=(0,i._)(["\n  mutation deleteNewCat($id: uuid!) {\n    delete_news_categories_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function f(){let e=(0,i._)(["\n  mutation addNewCat($title: String!) {\n    insert_news_categories_one(object: { title: $title }) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function g(){let e=(0,i._)(["\n  mutation deleteNews($id: uuid!) {\n    delete_news_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return g=function(){return e},e}function h(){let e=(0,i._)(["\n  mutation deleteInvoice($id: uuid!) {\n    delete_invoices_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return h=function(){return e},e}function x(){let e=(0,i._)(["\n  mutation aa($id: uuid!) {\n    delete_orders_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return x=function(){return e},e}function y(){let e=(0,i._)(["\n  mutation deleteDealer($id: uuid!) {\n    delete_dealers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return y=function(){return e},e}function v(){let e=(0,i._)(["\n  mutation addDealer($data: dealers_insert_input!) {\n    insert_dealers_one(object: $data) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function $(){let e=(0,i._)(["\n  mutation addNewProducts($data: news_related_products_insert_input!) {\n    insert_news_related_products_one(object: $data) {\n      id\n    }\n  }\n"]);return $=function(){return e},e}function b(){let e=(0,i._)(["\n  mutation editNewProducts($id: uuid!, $data: news_set_input!) {\n    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n    }\n  }\n"]);return b=function(){return e},e}function j(){let e=(0,i._)(["\n  mutation aa($news_id: uuid!) {\n    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return j=function(){return e},e}function C(){let e=(0,i._)(["\n  mutation aa($content_type: String!, $folder: String!) {\n    getFileUploadUrl(content_type: $content_type, folder: $folder) {\n      error\n      message\n      fileName\n      fileUploadUrl\n    }\n  }\n"]);return C=function(){return e},e}function P(){let e=(0,i._)(["\n  mutation orderStatus($order_id: uuid!, $status: String!) {\n    updateOrderStatus(order_id: $order_id, status: $status) {\n      message\n    }\n  }\n"]);return P=function(){return e},e}function w(){let e=(0,i._)(["\n  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {\n    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      status\n    }\n  }\n"]);return w=function(){return e},e}function S(){let e=(0,i._)(["\n  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      role\n      status\n    }\n  }\n"]);return S=function(){return e},e}function k(){let e=(0,i._)(["\n  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {\n    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {\n      message\n    }\n  }\n"]);return k=function(){return e},e}function N(){let e=(0,i._)(["\n  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {\n    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {\n      message\n    }\n  }\n"]);return N=function(){return e},e}function Z(){let e=(0,i._)(["\n  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {\n    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      status\n    }\n  }\n"]);return Z=function(){return e},e}function D(){let e=(0,i._)(["\n  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {\n    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return D=function(){return e},e}function F(){let e=(0,i._)(["\n  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {\n    addInvoicePayment(\n      amount: $amount\n      invoice_id: $invoice_id\n      payment_date: $payment_date\n      payment_method: $payment_method\n    ) {\n      message\n    }\n  }\n"]);return F=function(){return e},e}function U(){let e=(0,i._)(["\n  mutation sendQInvoice($discounted_amount: numeric!, $quotation_id: uuid!) {\n    sendInvoice(discounted_amount: $discounted_amount, quotation_id: $quotation_id) {\n      message\n    }\n  }\n"]);return U=function(){return e},e}function A(){let e=(0,i._)(["\n  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {\n    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {\n      id\n    }\n  }\n"]);return A=function(){return e},e}function q(){let e=(0,i._)(["\n  mutation deleteAdmin($id: uuid!) {\n    delete_admins_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return q=function(){return e},e}function I(){let e=(0,i._)(["\n  mutation deleteServiceCenter($id: uuid!) {\n    delete_service_centers_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return I=function(){return e},e}function B(){let e=(0,i._)(["\n  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {\n    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {\n      message\n      token\n    }\n  }\n"]);return B=function(){return e},e}function E(){let e=(0,i._)(["\n  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {\n    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {\n      message\n      token\n    }\n  }\n"]);return E=function(){return e},e}function M(){let e=(0,i._)(["\n  mutation addSeriveCenter($data: service_centers_insert_input!) {\n    insert_service_centers_one(object: $data) {\n      id\n    }\n  }\n"]);return M=function(){return e},e}function O(){let e=(0,i._)(["\n  mutation editService($id: uuid!, $data: service_tokens_set_input!) {\n    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n      service_fee\n    }\n  }\n"]);return O=function(){return e},e}function z(){let e=(0,i._)(["\n  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {\n    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n    }\n  }\n"]);return z=function(){return e},e}function R(){let e=(0,i._)(["\n  mutation deleteProductDiscount($id: uuid!) {\n    delete_product_discounts_by_pk(id: $id) {\n      id\n    }\n  }\n"]);return R=function(){return e},e}function Y(){let e=(0,i._)(["\n  mutation addDiscount($data: product_discounts_insert_input!) {\n    insert_product_discounts_one(object: $data) {\n      id\n    }\n  }\n"]);return Y=function(){return e},e}function W(){let e=(0,i._)(["\n  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {\n    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n    }\n  }\n"]);return W=function(){return e},e}function T(){let e=(0,i._)(["\n  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {\n    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {\n      id\n    }\n  }\n"]);return T=function(){return e},e}function J(){let e=(0,i._)(["\n  mutation editNewCat($id: uuid!, $title: String!) {\n    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      id\n    }\n  }\n"]);return J=function(){return e},e}let L=(0,r.Ps)(a()),Q=(0,r.Ps)(o()),H=(0,r.Ps)(s()),V=(0,r.Ps)(l()),G=(0,r.Ps)(u()),K=(0,r.Ps)(d()),X=(0,r.Ps)(c()),ee=(0,r.Ps)(m()),et=(0,r.Ps)(_()),en=(0,r.Ps)(p()),ei=(0,r.Ps)(f()),er=(0,r.Ps)(g());(0,r.Ps)(h());let ea=(0,r.Ps)(x());(0,r.Ps)(y()),(0,r.Ps)(v());let eo=(0,r.Ps)($()),es=(0,r.Ps)(b()),el=(0,r.Ps)(j()),eu=(0,r.Ps)(C()),ed=(0,r.Ps)(P()),ec=(0,r.Ps)(w()),em=(0,r.Ps)(S()),e_=(0,r.Ps)(k()),ep=(0,r.Ps)(N()),ef=(0,r.Ps)(Z()),eg=(0,r.Ps)(D()),eh=(0,r.Ps)(F()),ex=(0,r.Ps)(U()),ey=(0,r.Ps)(A()),ev=(0,r.Ps)(q()),e$=(0,r.Ps)(I()),eb=(0,r.Ps)(B()),ej=(0,r.Ps)(E()),eC=(0,r.Ps)(M()),eP=(0,r.Ps)(O()),ew=(0,r.Ps)(z()),eS=(0,r.Ps)(R()),ek=(0,r.Ps)(Y()),eN=(0,r.Ps)(W()),eZ=(0,r.Ps)(T()),eD=(0,r.Ps)(J())},72718:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});let i=async(e,t,n)=>{try{return(await fetch(t,{method:"PUT",headers:{"Content-Type":"".concat(n,"/*"),"x-amz-acl":"public-read"},body:e})).url.split("?")[0]}catch(e){throw alert(e),console.log(e),Error(e)}}},75582:function(e,t,n){"use strict";n.d(t,{default:function(){return I}});var i=n(59533),r=n(31229),a=n(26175),o=n(47867),s=n(89749),l=n(23524),u=n(66431),d=n(28095),c=n(72860),m=n.n(c),_=n(19880),p=n(65841),f=n(51480),g=n(5870),h=n(45336),x=n(81770),y=n(72718),v=n(20526),$=n(76399),b=n(29349),j=n(76422),C=n(12895),P=e=>{let{setGlobalMsg:t}=(0,C.q)(),{open:n,handleClose:a,categoryData:l,setData:c,loading:m,setLoading:_}=e,[p]=(0,$.D)(b.hq),[f]=(0,$.D)(b.Sf),[P,w]=(0,r.useState)(""),S=(0,r.useRef)(null),{control:k,reset:N,handleSubmit:Z,formState:{errors:D}}=(0,v.cI)({defaultValues:{title:"",description:""}}),F=async e=>{try{_(!0);let n=await f({variables:{content_type:"image",folder:"quotations"}}),i=await (0,y.c)(P[0],n.data.getFileUploadUrl.fileUploadUrl,"image"),r=await p({variables:{data:{title:e.title,image_url:i}}});_(!1),c([...l,r.data.insert_product_categories_one]),U(),t("➕ Added New Category")}catch(e){console.log("Error ",e)}},U=()=>{a(),N({title:"",description:""}),w("")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.ZP,{open:n,anchor:"right",variant:"temporary",onClose:U,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,i.jsx)(d.Z,{variant:"h5",children:"Add Category"}),(0,i.jsx)(s.Z,{size:"small",onClick:U,children:(0,i.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:Z(e=>F(e)),className:"flex flex-col gap-5",children:[(0,i.jsx)(v.Qr,{name:"title",control:k,rules:{required:!0},render:e=>{let{field:t}=e;return(0,i.jsx)(u.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...D.title&&{error:!0,helperText:"This field is required."}})}}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(u.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:P,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:P?(0,i.jsx)(x.Z,{position:"end",children:(0,i.jsx)(s.Z,{size:"small",edge:"end",onClick:()=>w(""),children:(0,i.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,i.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,i.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:e=>{let{files:t}=e.target;t&&0!==t.length&&w(t)},ref:S})]})]}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(o.Z,{variant:"contained",type:"submit",loading:m,children:"Add"}),(0,i.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:U,children:"Discard"})]})]})})]}),(0,i.jsx)(j.Z,{})]})};n(79505);var w=n(67875),S=n.n(w),k=n(17848),N=n(31029),Z=e=>{let{setGlobalMsg:t}=(0,C.q)(),{open:n,handleClose:a,categoryData:l,setData:c,loading:m,setLoading:_}=e,[p]=(0,$.D)(b.bc),[f]=(0,$.D)(b.Sf),[x,P]=(0,r.useState)(),[w,S]=(0,r.useState)(),k=(0,r.useRef)(null),{control:N,reset:Z,handleSubmit:D,formState:{errors:F}}=(0,v.cI)({defaultValues:{title:""}}),U=async e=>{try{_(!0);let n=l.image_url;if(x&&x!==(null==l?void 0:l.image_url)){let{data:e}=await f({variables:{content_type:"image",folder:"products"}});n=await (0,y.c)(x,e.getFileUploadUrl.fileUploadUrl,"image")}let i=await p({variables:{id:null==l?void 0:l.id,data:{title:e.title,image_url:n}}});c(e=>e.map(e=>e.id===(null==l?void 0:l.id)?{...e,...i.data.update_product_categories_by_pk}:e)),A(),t("➕ Category has been updated")}catch(e){console.log("Error ",e)}};(0,r.useEffect)(()=>{l&&(S(null==l?void 0:l.image_url),Z({title:l.title}),P(l.image_url||""))},[l,Z]);let A=()=>{a(),Z({title:"",description:""}),P("")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.ZP,{open:n,anchor:"right",variant:"temporary",onClose:A,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,i.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,i.jsx)(d.Z,{variant:"h5",children:"Edit Category"}),(0,i.jsx)(s.Z,{size:"small",onClick:A,children:(0,i.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"p-5",children:(0,i.jsxs)("form",{onSubmit:D(e=>U(e)),className:"flex flex-col gap-5",children:[(0,i.jsx)(v.Qr,{name:"title",control:N,rules:{required:!0},render:e=>{let{field:t}=e;return(0,i.jsx)(u.Z,{...t,fullWidth:!0,label:"Title",placeholder:"",...F.title&&{error:!0,helperText:"This field is required."}})}}),(0,i.jsx)("div",{className:"flex items-center gap-4",children:(0,i.jsx)("input",{type:"file",id:"contained-button-file",onChange:e=>{let{files:t}=e.target;if(t&&t.length>0){let e=t[0];P(e),S(URL.createObjectURL(e))}},ref:k})}),w&&(0,i.jsx)("div",{className:"mt-4",children:(0,i.jsx)("img",{src:w,alt:"Preview",style:{width:"100%",borderRadius:"4px"}})}),(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(o.Z,{variant:"contained",type:"submit",loading:m,children:"Edit"}),(0,i.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:A,children:"Discard"})]})]})})]}),(0,i.jsx)(j.Z,{})]})},D=n(66967),F=n(83338);let U=(e,t,n,i)=>{let r=(0,_.O4)(e.getValue(t),n);return i({itemRank:r}),r.passed},A=e=>{let{value:t,onChange:n,debounce:a=500,...o}=e,[s,l]=(0,r.useState)(t);return(0,r.useEffect)(()=>{l(t)},[t]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{n(s)},a);return()=>clearTimeout(e)},[s]),(0,i.jsx)(u.Z,{...o,value:s,onChange:e=>l(e.target.value),size:"small"})},q=(0,p.Cl)();var I=()=>{let{setGlobalMsg:e}=(0,C.q)(),{data:t}=(0,k.kJ)(N.C9),[n,u]=(0,r.useState)(!1),[c,_]=(0,r.useState)(!1),[g,h]=(0,r.useState)({}),[x,y]=(0,r.useState)(t.product_categories),[v,$]=(0,r.useState)(""),[b,j]=(0,r.useState)(!1),[w,I]=(0,r.useState)(),B=(e,t,n)=>({children:e,color:t,variant:n}),E=(0,r.useMemo)(()=>[q.accessor("title",{header:"Categories",cell:e=>{let{row:t}=e;return(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("img",{src:t.original.image_url,width:38,height:38,className:"rounded bg-actionHover"}),(0,i.jsxs)("div",{className:"flex flex-col items-start",children:[(0,i.jsx)(d.Z,{className:"font-medium",color:"text.primary",children:t.original.title}),(0,i.jsx)(d.Z,{variant:"body2",children:t.original.description})]})]})}}),q.accessor("products_aggregate.aggregate.count",{header:"Total Products",cell:e=>{var t,n,r,a;let{row:o}=e;return(0,i.jsx)(d.Z,{children:null==o?void 0:null===(a=o.original)||void 0===a?void 0:null===(r=a.products_aggregate)||void 0===r?void 0:null===(n=r.aggregate)||void 0===n?void 0:null===(t=n.count)||void 0===t?void 0:t.toLocaleString()})}}),q.accessor("actions",{header:"Actions",cell:e=>{let{row:t}=e;return(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(s.Z,{size:"small",onClick:()=>{_(!c),I(t.original)},children:(0,i.jsx)("i",{className:"ri-edit-box-line text-[22px] text-textSecondary"})}),(0,i.jsx)(D.default,{element:o.Z,elementProps:B((0,i.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-red-500"}),"error",""),dialog:F.Z,dialogProps:{type:"deleteProductCategory"},dataId:t.original.id,setData:y,data:x})]})},enableSorting:!1})],[x]),M=(0,f.b7)({data:x,columns:E,filterFns:{fuzzy:U},state:{rowSelection:g,globalFilter:v},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:U,onRowSelectionChange:h,getCoreRowModel:(0,p.sC)(),onGlobalFilterChange:$,getFilteredRowModel:(0,p.vL)(),getSortedRowModel:(0,p.tj)(),getPaginationRowModel:(0,p.G_)(),getFacetedRowModel:(0,p.o6)(),getFacetedUniqueValues:(0,p.JG)(),getFacetedMinMaxValues:(0,p.HO)()});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)("div",{className:"flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5",children:[(0,i.jsx)(A,{value:null!=v?v:"",onChange:e=>$(String(e)),placeholder:"Search",className:"max-sm:is-full"}),(0,i.jsxs)("div",{className:"flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto",children:[(0,i.jsx)(o.Z,{color:"secondary",fullWidth:!0,variant:"outlined",className:"max-sm:is-full is-auto",startIcon:(0,i.jsx)("i",{className:"ri-upload-2-line"}),children:"Export"}),(0,i.jsx)(o.Z,{variant:"contained",className:"max-sm:is-full is-auto",onClick:()=>u(!n),startIcon:(0,i.jsx)("i",{className:"ri-add-line"}),children:"Add Category"})]})]}),(0,i.jsx)("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:S().table,children:[(0,i.jsx)("thead",{children:M.getHeaderGroups().map(e=>(0,i.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,i.jsx)("th",{children:e.isPlaceholder?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,f.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,i.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,i.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===M.getFilteredRowModel().rows.length?(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:M.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,i.jsx)("tbody",{children:M.getRowModel().rows.slice(0,M.getState().pagination.pageSize).map(e=>(0,i.jsx)("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,i.jsx)("td",{children:(0,f.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,i.jsx)(l.Z,{rowsPerPageOptions:[10,15,25],component:"div",className:"border-bs",count:M.getFilteredRowModel().rows.length,rowsPerPage:M.getState().pagination.pageSize,page:M.getState().pagination.pageIndex,onPageChange:(e,t)=>{M.setPageIndex(t)},onRowsPerPageChange:e=>M.setPageSize(Number(e.target.value))})]}),(0,i.jsx)(P,{open:n,categoryData:x,setData:y,loading:b,setLoading:j,handleClose:()=>u(!n)}),(0,i.jsx)(Z,{open:c,categoryData:w,setData:y,loading:b,setLoading:j,handleClose:()=>_(!c)})]})}},67875:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[3307,8869,1055,4214,9253,4637,313,6431,7814,9276,9415,7020,2163,1559,7957,5841,7952,2173,526,4076,5870,1325,3057,1029,4170,6842,1744],function(){return e(e.s=83410)}),_N_E=e.O()}]);