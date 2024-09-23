(()=>{var e={};e.id=6826,e.ids=[6826],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},5715:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>d.a,__next_app__:()=>_,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l}),i(87419),i(5114),i(32687),i(85133);var a=i(79193),s=i(71854),r=i(33997),d=i.n(r),n=i(73320),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);i.d(t,o);let l=["",{children:["[lang]",{children:["(dashboard)",{children:["quotations",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,87419)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\quotations\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5114)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,32687)),"D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,85133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,85529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\ALPHA PROJECT\\dashboard\\src\\app\\[lang]\\(dashboard)\\quotations\\page.jsx"],c="/[lang]/(dashboard)/quotations/page",_={require:i,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[lang]/(dashboard)/quotations/page",pathname:"/[lang]/quotations",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},77059:(e,t,i)=>{Promise.resolve().then(i.bind(i,82491))},93889:(e,t,i)=>{"use strict";i.d(t,{Pg:()=>n,c7:()=>s,sE:()=>d,uH:()=>a,zh:()=>r});let a={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},s={pending:"warning",completed:"success",accepted:"info",rejected:"error",negotiation:"primary"},r={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},d={paid:"secondary","partially paid":"info",rejected:"error",unpaid:"primary",pending:"warning"},n={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},66718:(e,t,i)=>{"use strict";i.d(t,{BM:()=>q,DR:()=>I,Ff:()=>c,HT:()=>$,Hd:()=>x,J2:()=>G,J9:()=>o,JB:()=>U,KN:()=>Z,Lh:()=>J,MP:()=>d,MZ:()=>R,O7:()=>M,Qm:()=>z,SB:()=>p,SZ:()=>f,Sf:()=>b,Si:()=>O,Zq:()=>N,aY:()=>_,bc:()=>L,dE:()=>h,dn:()=>H,en:()=>Q,hB:()=>s,he:()=>T,hq:()=>r,jN:()=>E,ju:()=>g,mU:()=>S,mt:()=>F,oe:()=>m,pE:()=>B,rV:()=>D,si:()=>V,tC:()=>C,tt:()=>P,tz:()=>y,u7:()=>u,uv:()=>l,vl:()=>A,wU:()=>j,yG:()=>k,yn:()=>v,z7:()=>w,zN:()=>n});var a=i(12738);let s=(0,a.Ps)`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`,r=(0,a.Ps)`
  mutation addCategory($data: product_categories_insert_input!) {
    insert_product_categories_one(object: $data) {
      id
      title
      image_url
      created_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`,d=(0,a.Ps)`
  mutation addCategory($data: brands_insert_input!) {
    insert_brands_one(object: $data) {
      id
      title
      image_url
      created_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`,n=(0,a.Ps)`
  mutation addProduct(
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
    $product_medias: product_medias_arr_rel_insert_input!
  ) {
    insert_products_one(
      object: {
        title: $title
        description_html: $description_html
        brand_id: $brand_id
        category_id: $category_id
        serial_number: $serial_number
        price: $price
        product_medias: $product_medias
      }
    ) {
      id
    }
  }
`,o=(0,a.Ps)`
  mutation editProduct(
    $id: uuid!
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        description_html: $description_html
        brand_id: $brand_id
        category_id: $category_id
        serial_number: $serial_number
        price: $price
      }
    ) {
      id
    }
  }
`,l=(0,a.Ps)`
  mutation addNews($data: news_insert_input!) {
    insert_news_one(object: $data) {
      id
      image_url
      body_html
      created_at
      news_category {
        title
        id
      }
      disabled
      news_category_id
      title
      updated_at
    }
  }
`,u=(0,a.Ps)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`,c=(0,a.Ps)`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`,_=(0,a.Ps)`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`,m=(0,a.Ps)`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`,p=(0,a.Ps)`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`,g=(0,a.Ps)`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;(0,a.Ps)`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;let $=(0,a.Ps)`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;(0,a.Ps)`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`,(0,a.Ps)`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;let x=(0,a.Ps)`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`,h=(0,a.Ps)`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      image_url
      body_html
      created_at
      news_category {
        title
        id
      }
      disabled
      news_category_id
      title
      updated_at
    }
  }
`,v=(0,a.Ps)`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`,b=(0,a.Ps)`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`,P=(0,a.Ps)`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`,j=(0,a.Ps)`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`,y=(0,a.Ps)`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`,S=(0,a.Ps)`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`,f=(0,a.Ps)`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`,w=(0,a.Ps)`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`,k=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!, $rejected_reason: String) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,N=(0,a.Ps)`
  mutation updateInvoiceStatus($invoice_id: uuid!, $status: String!, $rejected_reason: String) {
    updateInvoiceStatus(invoice_id: $invoice_id, status: $status, rejected_reason: $rejected_reason) {
      message
    }
  }
`,q=(0,a.Ps)`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`,C=(0,a.Ps)`
  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {
    addInvoicePayment(
      amount: $amount
      invoice_id: $invoice_id
      payment_date: $payment_date
      payment_method: $payment_method
    ) {
      message
    }
  }
`,Z=(0,a.Ps)`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`,A=(0,a.Ps)`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`,R=(0,a.Ps)`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`,I=(0,a.Ps)`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`,U=(0,a.Ps)`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`,D=(0,a.Ps)`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`,E=(0,a.Ps)`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`,M=(0,a.Ps)`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
      name
      phone
      address
      created_at
      updated_at
    }
  }
`,Q=(0,a.Ps)`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`,T=(0,a.Ps)`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`,z=(0,a.Ps)`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`,F=(0,a.Ps)`
  mutation orderComplete($id: uuid!, $completion_photo_url: String!, $remark: String!) {
    update_orders_by_pk(
      pk_columns: { id: $id }
      _set: { completion_photo_url: $completion_photo_url, remark: $remark }
    ) {
      id
      completion_photo_url
      remark
    }
  }
`,J=(0,a.Ps)`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
      min_order
      product_id
      discount_type
      discounted_value
      customer_type
      created_at
      updated_at
    }
  }
`,H=(0,a.Ps)`
  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {
    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      min_order
      discount_type
      customer_type
      discounted_value
      created_at
      updated_at
    }
  }
`,L=(0,a.Ps)`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,O=(0,a.Ps)`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`,G=(0,a.Ps)`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`,B=(0,a.Ps)`
  mutation imageUpload($data: product_medias_insert_input!) {
    insert_product_medias_one(object: $data) {
      id
      product_id
      media_url
      media_type
    }
  }
`,V=(0,a.Ps)`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`},26808:(e,t,i)=>{"use strict";i.d(t,{Q:()=>a});let a=e=>e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"")},82491:(e,t,i)=>{"use strict";i.d(t,{default:()=>T});var a=i(27486),s=i(61766),r=i(618),d=i(38165),n=i(46811),o=i(69121),l=i(51259),u=i(12964),c=i(72660),_=i(16561),m=i(9594),p=i(4081),g=i(44182),$=i(50822),x=i(95727),h=i(23467),v=i(2598),b=i(19396),P=i.n(b),j=i(61359),y=i(36514),S=i(57229);i(48398);var f=i(81636),w=i(93889);i(26808);var k=i(11158),N=i(31538),q=i.n(N),C=i(45882),Z=i(25009),A=i(86528);i(66718);var R=i(24458);let I=(e,t,i,a)=>{let s=(0,j.O4)(e.getValue(t),i);return a({itemRank:s}),s.passed},U=({value:e,onChange:t,debounce:i=500,...s})=>{let[d,n]=(0,r.useState)(e);return(0,r.useEffect)(()=>{n(e)},[e]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{t(d)},i);return()=>clearTimeout(e)},[d]),a.jsx(p.Z,{...s,value:d,onChange:e=>n(e.target.value),size:"small"})},D=(0,y.Cl)(),E=[{label:"Quotation Number",key:"quotation_number"},{label:"UserName",key:"name"},{label:"Status",key:"status"},{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}],M=()=>{let{data:e}=(0,C.kJ)(Z.kQ),{data:t}=(0,C.kJ)(Z.KH),[i,s]=(0,r.useState)(""),[p,b]=(0,r.useState)({}),[j,f]=(0,r.useState)(e.quotations),[N,M]=(0,r.useState)(j),[Q,T]=(0,r.useState)(""),{lang:z}=(0,n.useParams)(),F=N.map(e=>({...e,name:e.user.name,status:e.status,created_at:new Date(e.created_at).toLocaleString(),updated_at:new Date(e.updated_at).toLocaleString()})),J=(0,r.useMemo)(()=>[D.accessor("quotation_number",{header:"Quotation Number",cell:({row:e})=>a.jsx(c.Z,{component:d.default,href:(0,k.U)(`/quotation/preview${e.original.quotation_number}`,z),color:"primary",children:`${e.original.quotation_number}`})}),D.accessor("user.name",{header:"Client",cell:({row:e})=>(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[a.jsx(A.Z,{src:e.original.user.profile_picture_url,width:"100px",height:"100px"}),a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.user.name})})]})}),D.accessor("dealer_remark",{header:"Dealer Remark",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(c.Z,{className:"font-medium",color:"text.primary",children:e.original.dealer_remark})})})}),D.accessor("total_amount",{header:"Total",cell:({row:e})=>a.jsx(c.Z,{children:`${null!==e.original.total_amount?e.original.total_amount:"-"}`})}),D.accessor("created_at",{header:"Date",cell:({row:e})=>a.jsx(c.Z,{children:e.original.created_at.substring(0,10)})}),D.accessor("status",{header:"Status",cell:({row:e})=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex flex-col",children:a.jsx(_.Z,{label:e.original.status,color:w.c7[e.original.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})})})}),D.accessor("action",{header:"Action",cell:({row:e})=>a.jsx("div",{className:"flex items-center",children:a.jsx(m.Z,{children:a.jsx(d.default,{href:(0,k.U)(`/quotations/preview/${e.original.id}`,z),className:"flex",children:a.jsx("i",{className:"ri-eye-line text-textSecondary"})})})}),enableSorting:!1})],[j,N]),H=(0,S.b7)({data:N,columns:J,filterFns:{fuzzy:I},state:{rowSelection:p,globalFilter:Q},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:I,onRowSelectionChange:b,getCoreRowModel:(0,y.sC)(),onGlobalFilterChange:T,getFilteredRowModel:(0,y.vL)(),getSortedRowModel:(0,y.tj)(),getPaginationRowModel:(0,y.G_)(),getFacetedRowModel:(0,y.o6)(),getFacetedUniqueValues:(0,y.JG)(),getFacetedMinMaxValues:(0,y.HO)()});return(0,r.useEffect)(()=>{M(j?.filter(e=>!i||e?.status?.toLowerCase().replace(/\s+/g,"-")===i))},[i,j,M]),(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(l.Z,{className:"flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row max-sm:is-full items-center gap-4",children:[a.jsx(U,{value:Q??"",onChange:e=>T(String(e)),placeholder:"Search Quotation",className:"max-sm:is-full min-is-[200px]"}),(0,a.jsxs)(g.Z,{fullWidth:!0,size:"small",className:"min-is-[175px]",children:[a.jsx($.Z,{id:"status-select",children:"Quotation Status"}),(0,a.jsxs)(x.Z,{fullWidth:!0,id:"select-status",value:i,onChange:e=>s(e.target.value),label:"Invoice Status",labelId:"status-select",children:[a.jsx(h.Z,{value:"",children:"none"}),t.quotation_status?.map(e=>a.jsx(h.Z,{value:e.name,children:e.name},e.id))]})]})]}),a.jsx(u.Z,{color:"secondary",variant:"outlined",startIcon:a.jsx("i",{className:"ri-upload-2-line text-xl"}),className:"max-sm:is-full",children:a.jsx(R.CSVLink,{className:"exportBtn",data:F,headers:E,filename:`all-quotations-${new Date().toISOString()}.csv`,children:"Export"})})]}),a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:q().table,children:[a.jsx("thead",{children:H.getHeaderGroups().map(e=>a.jsx("tr",{children:e.headers.map(e=>a.jsx("th",{children:e.isPlaceholder?null:a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:P()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,S.ie)(e.column.columnDef.header,e.getContext()),{asc:a.jsx("i",{className:"ri-arrow-up-s-line text-xl"}),desc:a.jsx("i",{className:"ri-arrow-down-s-line text-xl"})}[e.column.getIsSorted()]??null]})})},e.id))},e.id))}),0===H.getFilteredRowModel().rows.length?a.jsx("tbody",{children:a.jsx("tr",{children:a.jsx("td",{colSpan:H.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):a.jsx("tbody",{children:H.getRowModel().rows.slice(0,H.getState().pagination.pageSize).map(e=>a.jsx("tr",{className:P()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>a.jsx("td",{children:(0,S.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),a.jsx(v.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:H.getFilteredRowModel().rows.length,rowsPerPage:H.getState().pagination.pageSize,page:H.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{H.setPageIndex(t)},onRowsPerPageChange:e=>H.setPageSize(Number(e.target.value))})]})},Q=({count:e,title:t})=>a.jsx("div",{children:a.jsx(o.Z,{children:(0,a.jsxs)(l.Z,{className:"flex justify-between gap-1 ",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 flex-grow",children:[a.jsx(c.Z,{color:"text.primary",variant:"h3",children:e}),a.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:a.jsx(c.Z,{variant:"h5",color:`${"Pending"===t?"orange":"User"===t?"green":"Reject"===t?"error":"Negotiation"===t?"primary":"grey"}`,children:t})})]}),a.jsx(f.default,{skin:"light",variant:"rounded",size:42,children:a.jsx("i",{class:`${"Pending"===t?"ri-pass-pending-fill":"User"===t?"ri-user-add-line":"Reject"===t?"ri-user-unfollow-fill ":"Negotiation"===t?"ri-check-double-fill":"grey"}`})})]})})}),T=()=>{let{data:e}=(0,C.kJ)(Z.aN),{data:t}=(0,C.kJ)(Z.$X);return(0,a.jsxs)(s.ZP,{container:!0,spacing:6,children:[a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(Q,{count:t.users_aggregate.aggregate.count,title:"User"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(Q,{count:e.pendingQuotation.aggregate.count,title:"Pending"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(Q,{count:e.rejectedQuotation.aggregate.count,title:"Reject"})}),a.jsx(s.ZP,{item:!0,md:3,xs:12,sm:6,children:a.jsx(Q,{count:e.negotiationQuotation.aggregate.count,title:"Negotiation"})}),a.jsx(s.ZP,{item:!0,xs:12,children:a.jsx(M,{})})]})}},31538:e=>{e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}},87419:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var a=i(79703),s=i(92334);let r=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\quotations\list\index.jsx`),{__esModule:d,$$typeof:n}=r;r.default;let o=(0,s.createProxy)(String.raw`D:\ALPHA PROJECT\dashboard\src\views\quotations\list\index.jsx#default`),l=async()=>a.jsx(o,{})}};var t=require("../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[9357,6491,1598,8743,8520,4081,168,195,8119,6514,3697,2598,5670,6532,6591],()=>i(5715));module.exports=a})();