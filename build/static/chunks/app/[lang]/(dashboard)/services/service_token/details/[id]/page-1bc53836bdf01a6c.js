(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4399,1029],{81967:function(n,e,t){Promise.resolve().then(t.bind(t,6960))},76422:function(n,e,t){"use strict";var r=t(59533);t(31229);var i=t(12173),a=t(12895);e.Z=()=>{let{globalMsg:n,setGlobalMsg:e}=(0,a.q)();return(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:!!n,autoHideDuration:3e3,onClose:()=>e(null),message:n})})}},42648:function(n,e,t){"use strict";t.d(e,{Pg:function(){return u},c7:function(){return i},sE:function(){return s},uH:function(){return r},zh:function(){return a}});let r={completed:"success",canceled:"error","received token":"info","picking up":"primary",processing:"warning"},i={pending:"warning",completed:"success",accepted:"info",rejected:"error"},a={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},s={paid:"primary","partially paid":"info",completed:"success",unpaid:"error",pending:"warning"},u={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},31029:function(n,e,t){"use strict";t.d(e,{kI:function(){return nE},mq:function(){return nL},RV:function(){return nU},FL:function(){return nv},Pg:function(){return nT},ef:function(){return n0},kQ:function(){return nZ},TX:function(){return nk},_b:function(){return n$},Sg:function(){return ng},uA:function(){return np},nX:function(){return nm},i2:function(){return nO},tT:function(){return nd},C9:function(){return nc},fo:function(){return ns},L5:function(){return nu},RF:function(){return nY},xU:function(){return nj},Ux:function(){return ny},r6:function(){return nx},jX:function(){return nQ},yf:function(){return nh},wC:function(){return nq},Ev:function(){return nf},Jv:function(){return nB},Nz:function(){return nR},w9:function(){return nA},DF:function(){return nI},jh:function(){return nw},sr:function(){return n2},yZ:function(){return no},ld:function(){return nF},BD:function(){return nl},xH:function(){return n_},XR:function(){return nb},aN:function(){return nK},_n:function(){return nN},KH:function(){return nS},TW:function(){return nP},Ak:function(){return nz},Pr:function(){return nG},sv:function(){return nD},Pk:function(){return nC},wk:function(){return nH},R:function(){return nX},$X:function(){return nJ},pR:function(){return nM},My:function(){return nV},l_:function(){return nW}});var r=t(42541),i=t(14595);function a(){let n=(0,r._)(["\nfragment productBaseFields on products {\n  id\n  title\n  price\n  product_medias(order_by: {updated_at: desc}, limit: 1) {\n    id\n    media_url\n  }\n  product_discounts(limit: 1, order_by: {discounted_value: desc}) {\n    id\n    discount_type\n    discounted_value\n  }\n}\n"]);return a=function(){return n},n}function s(){let n=(0,r._)(["\n  query getUsers {\n    users {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      delivery_name\n      delivery_phone\n      delivery_address\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return s=function(){return n},n}function u(){let n=(0,r._)(["\n  query getUsers($userId: uuid!) {\n    users_by_pk(id: $userId) {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      delivery_name\n      delivery_phone\n      delivery_address\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return u=function(){return n},n}function c(){let n=(0,r._)(["\n  query getProductCategories {\n    product_categories {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return c=function(){return n},n}function d(){let n=(0,r._)(["\n  query getProducts {\n    products(order_by: { updated_at: desc }) {\n      id\n      title\n      description_html\n      serial_number\n      product_medias(order_by: { updated_at: desc }, limit: 1) {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return d=function(){return n},n}function o(){let n=(0,r._)(["\n  query productById($id: uuid!) {\n    products_by_pk(id: $id) {\n      id\n      title\n      serial_number\n      description_html\n      product_medias(order_by: { updated_at: desc }, limit: 1) {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      product_discounts {\n        id\n        min_order\n        discounted_value\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return o=function(){return n},n}function l(){let n=(0,r._)(["\n  query productBrand {\n    brands {\n      id\n      title\n    }\n  }\n"]);return l=function(){return n},n}function _(){let n=(0,r._)(["\n  query productCat {\n    product_categories {\n      id\n      title\n    }\n  }\n"]);return _=function(){return n},n}function g(){let n=(0,r._)(["\n  query brands {\n    brands(order_by: { updated_at: desc }) {\n      id\n      title\n      image_url\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return g=function(){return n},n}function m(){let n=(0,r._)(["\n  query newCategorys {\n    news_categories {\n      id\n      title\n      news_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return m=function(){return n},n}function p(){let n=(0,r._)(["\n  query newCatById($id: uuid!) {\n    news_categories_by_pk(id: $id) {\n      id\n      title\n    }\n  }\n"]);return p=function(){return n},n}function f(){let n=(0,r._)(["\n  query news {\n    news(order_by: { updated_at: desc }) {\n      id\n      title\n      body_html\n      image_url\n      disabled\n      news_category_id\n      news_category {\n        id\n        title\n      }\n    }\n  }\n"]);return f=function(){return n},n}function h(){let n=(0,r._)(["\n  query newId($id: uuid!) {\n    news_by_pk(id: $id) {\n      id\n      title\n      image_url\n      news_category {\n        id\n        title\n      }\n      news_related_products {\n        product {\n          id\n        }\n      }\n    }\n  }\n"]);return h=function(){return n},n}function v(){let n=(0,r._)(["\n  query newCats {\n    news_categories {\n      id\n      title\n    }\n  }\n"]);return v=function(){return n},n}function x(){let n=(0,r._)(["\n  query getAllInvoices {\n    invoices(order_by: { updated_at: desc }) {\n      id\n      invoice_number\n      status\n      balance\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return x=function(){return n},n}function y(){let n=(0,r._)(["\n  query invoiceTabs($user_id: uuid!) {\n    invoices(where: { user_id: { _eq: $user_id } }) {\n      id\n      invoice_number\n      status\n      balance\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return y=function(){return n},n}function j(){let n=(0,r._)(["\n  query invoiceStatus {\n    invoice_status {\n      id\n      name\n    }\n  }\n"]);return j=function(){return n},n}function w(){let n=(0,r._)(["\n  query invoiceById($id: uuid!) {\n    invoices_by_pk(id: $id) {\n      id\n      balance\n      invoice_number\n      status\n      note\n      total\n      created_at\n      updated_at\n      user {\n        id\n        name\n        email\n        phone\n      }\n      order {\n        id\n        items_total\n        order_items {\n          product {\n            title\n            id\n            price\n            brand {\n              id\n              title\n            }\n          }\n\n          quantity\n          total\n        }\n      }\n    }\n  }\n"]);return w=function(){return n},n}function q(){let n=(0,r._)(["\n  query payments($invoice_id: uuid!) {\n    payments(where: { invoice_id: { _eq: $invoice_id } }) {\n      id\n      amount\n      payment_date\n      payment_method\n      updated_at\n      created_at\n      invoice_id\n    }\n  }\n"]);return q=function(){return n},n}function b(){let n=(0,r._)(["\n  query newProduct($news_id: uuid!) {\n    news_related_products(where: { news_id: { _eq: $news_id } }) {\n      id\n      news_id\n      product_id\n    }\n  }\n"]);return b=function(){return n},n}function Z(){let n=(0,r._)(["\n  query productSelect {\n    products {\n      id\n      title\n    }\n  }\n"]);return Z=function(){return n},n}function P(){let n=(0,r._)(["\n  query getAllQuotations {\n    quotations(order_by: { updated_at: desc }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return P=function(){return n},n}function k(){let n=(0,r._)(["\n  query quotationTabs($user_id: uuid!) {\n    quotations(where: { user_id: { _eq: $user_id } }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return k=function(){return n},n}function S(){let n=(0,r._)(["\n  query serviceCenters {\n    service_centers(order_by: { updated_at: desc }) {\n      id\n      name\n      address\n      phone\n      created_at\n      updated_at\n    }\n  }\n"]);return S=function(){return n},n}function N(){let n=(0,r._)(["\n  query aa {\n    quotation_status {\n      id\n      name\n    }\n  }\n"]);return N=function(){return n},n}function $(){let n=(0,r._)(["\n  query quotationById($id: uuid!) {\n    quotations_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      dealer_remark\n      total_amount\n      quotation_number\n      status\n      user {\n        id\n        name\n        phone\n      }\n      quotation_items {\n        id\n        quantity\n        product {\n          price\n          title\n\n          brand {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"]);return $=function(){return n},n}function C(){let n=(0,r._)(["\n  query getAllServiceTokens {\n    service_tokens(order_by: { updated_at: desc }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return C=function(){return n},n}function D(){let n=(0,r._)(["\n  query serviceTokenTabs($user_id: uuid!) {\n    service_tokens(where: { user_id: { _eq: $user_id } }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return D=function(){return n},n}function I(){let n=(0,r._)(["\n  query serviceTokensById($id: uuid!) {\n    service_tokens_by_pk(id: $id) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        phone\n        email\n      }\n    }\n  }\n"]);return I=function(){return n},n}function T(){let n=(0,r._)(["\n  query OrderStatus {\n    order_status {\n      id\n      name\n    }\n  }\n"]);return T=function(){return n},n}function A(){let n=(0,r._)(["\n  query getAllOrders {\n    orders(order_by: { updated_at: desc }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return A=function(){return n},n}function R(){let n=(0,r._)(["\n  query orderTabs($user_id: uuid!) {\n    orders(where: { user_id: { _eq: $user_id } }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return R=function(){return n},n}function B(){let n=(0,r._)(["\n  query ordersById($id: uuid!) {\n    orders_by_pk(id: $id) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      receiver_name\n      receiver_phone\n      order_items {\n        id\n        quantity\n        total\n        unit_price\n        product {\n          id\n          title\n          brand {\n            id\n            title\n          }\n        }\n      }\n      user {\n        id\n        name\n        phone\n        email\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return B=function(){return n},n}function F(){let n=(0,r._)(['\n  query orderAggregate {\n    activeOrder: orders_aggregate(\n      where: {\n        _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }, { status: { _neq: "refunded" } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    completeOrder: orders_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    refundedOrder: orders_aggregate(where: { status: { _eq: "refunded" } }) {\n      aggregate {\n        count\n      }\n    }\n    canceledOrder: orders_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return F=function(){return n},n}function Q(){let n=(0,r._)(["\n  query productAggregate {\n    brandProduct: products_aggregate(distinct_on: brand_id) {\n      aggregate {\n        count\n      }\n    }\n    categoryProduct: products_aggregate(distinct_on: category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableProduct: products_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeProduct: products_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return Q=function(){return n},n}function U(){let n=(0,r._)(["\n  query productAggregate {\n    totalNews: news_aggregate {\n      aggregate {\n        count\n      }\n    }\n    categoryNews: news_aggregate(distinct_on: news_category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableNews: news_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeNews: news_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return U=function(){return n},n}function M(){let n=(0,r._)(["\n  query getAllDealers {\n    dealers {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return M=function(){return n},n}function O(){let n=(0,r._)(["\n  query admins {\n    admins(order_by: { updated_at: desc }) {\n      id\n      name\n      email\n      role\n      password\n      created_at\n      updated_at\n    }\n  }\n"]);return O=function(){return n},n}function E(){let n=(0,r._)(["\n  query userRoles {\n    user_roles {\n      id\n      role_name\n    }\n  }\n"]);return E=function(){return n},n}function L(){let n=(0,r._)(["\n  query paymentMethods {\n    payment_methods {\n      id\n      name\n    }\n  }\n"]);return L=function(){return n},n}function W(){let n=(0,r._)(["\n  query adminById($id: uuid!) {\n    admins_by_pk(id: $id) {\n      id\n      name\n    }\n  }\n"]);return W=function(){return n},n}function H(){let n=(0,r._)(["\n  query adminRoles {\n    admin_roles {\n      id\n      role_name\n    }\n  }\n"]);return H=function(){return n},n}function z(){let n=(0,r._)(['\n  query orderAggregate {\n    saleRole: admin_roles_aggregate(where: { role_name: { _eq: "sale" } }) {\n      aggregate {\n        count\n      }\n    }\n    financeRole: admin_roles_aggregate(where: { role_name: { _eq: "finance" } }) {\n      aggregate {\n        count\n      }\n    }\n    serviceRole: admin_roles_aggregate(where: { role_name: { _eq: "service" } }) {\n      aggregate {\n        count\n      }\n    }\n    adminRole: admin_roles_aggregate(where: { role_name: { _eq: "admin" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    managerRole: admin_roles_aggregate(where: { role_name: { _eq: "manager" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    deliveryRole: admin_roles_aggregate(where: { role_name: { _eq: "delivery" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return z=function(){return n},n}function V(){let n=(0,r._)(["\n  query dealerById($id: uuid!) {\n    dealers_by_pk(id: $id) {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return V=function(){return n},n}function X(){let n=(0,r._)(['\n  query userAggregate {\n    activeUser: users_aggregate(where: { status: { _eq: "active" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingUser: users_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    disabelUser: users_aggregate(where: { status: { _eq: "disabled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return X=function(){return n},n}function J(){let n=(0,r._)(['\n  query userAggregate {\n    consumerUser: users_aggregate(where: { role: { _eq: "consumer" } }) {\n      aggregate {\n        count\n      }\n    }\n    dealerUser: users_aggregate(where: { role: { _eq: "dealer" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return J=function(){return n},n}function Y(){let n=(0,r._)(['\n  query userAggregate {\n    completedService: service_tokens_aggregate(where: { status: { _eq: "complete" } }) {\n      aggregate {\n        count\n      }\n    }\n    activeService: service_tokens_aggregate(\n      where: { _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }] }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    canceledService: service_tokens_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n    pickService: service_tokens_aggregate(where: { status: { _eq: "picking up" } }) {\n      aggregate {\n        count\n      }\n    }\n    receivedService: service_tokens_aggregate(where: { status: { _eq: "received token" } }) {\n      aggregate {\n        count\n      }\n    }\n    processingService: service_tokens_aggregate(where: { status: { _eq: "processing" } }) {\n      aggregate {\n        count\n      }\n    }\n    deliverService: service_tokens_aggregate(where: { status: { _eq: "delivering" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return Y=function(){return n},n}function K(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { service_tokens: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return K=function(){return n},n}function G(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { invoices: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return G=function(){return n},n}function nn(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { quotations: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return nn=function(){return n},n}function ne(){let n=(0,r._)(['\n  query userAggregate {\n    paidInvoice: invoices_aggregate(where: { status: { _eq: "paid" } }) {\n      aggregate {\n        count\n      }\n    }\n    UnPaindInvoice: users_aggregate(where: { status: { _eq: "unpaid" } }) {\n      aggregate {\n        count\n      }\n    }\n    completeInvoice: users_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingInvoice: users_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    partiallPaidInvoice: users_aggregate(where: { status: { _eq: "partially paid" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return ne=function(){return n},n}function nt(){let n=(0,r._)(['\n  query quotationAggregate {\n    pendingQuotation: quotations_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    acceptedQuotation: quotations_aggregate(where: { status: { _eq: "accepted" } }) {\n      aggregate {\n        count\n      }\n    }\n    rejectedQuotation: quotations_aggregate(where: { status: { _eq: "rejected" } }) {\n      aggregate {\n        count\n      }\n    }\n    completedQuotation: quotations_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return nt=function(){return n},n}function nr(){let n=(0,r._)(["\n  query serviceStatus {\n    service_status {\n      id\n      name\n    }\n  }\n"]);return nr=function(){return n},n}function ni(){let n=(0,r._)(["\n  query produtDiscount($product_id: uuid!) {\n    product_discounts(order_by: { updated_at: desc }, where: { product_id: { _eq: $product_id } }) {\n      id\n      customer_type\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n      min_order\n      product {\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return ni=function(){return n},n}function na(){let n=(0,r._)(["\n  query productDiscountById($id: uuid!) {\n    product_discounts_by_pk(id: $id) {\n      id\n      customer_type\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n      min_order\n      product {\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return na=function(){return n},n}(0,i.Ps)(a());let ns=(0,i.Ps)(s()),nu=(0,i.Ps)(u()),nc=(0,i.Ps)(c()),nd=(0,i.Ps)(d()),no=(0,i.Ps)(o()),nl=(0,i.Ps)(l()),n_=(0,i.Ps)(_()),ng=(0,i.Ps)(g()),nm=(0,i.Ps)(m());(0,i.Ps)(p());let np=(0,i.Ps)(f()),nf=(0,i.Ps)(h()),nh=(0,i.Ps)(v()),nv=(0,i.Ps)(x()),nx=(0,i.Ps)(y()),ny=(0,i.Ps)(j()),nj=(0,i.Ps)(w()),nw=(0,i.Ps)(q()),nq=(0,i.Ps)(b()),nb=(0,i.Ps)(Z()),nZ=(0,i.Ps)(P()),nP=(0,i.Ps)(k()),nk=(0,i.Ps)(S()),nS=(0,i.Ps)(N()),nN=(0,i.Ps)($()),n$=(0,i.Ps)(C()),nC=(0,i.Ps)(D()),nD=(0,i.Ps)(I()),nI=(0,i.Ps)(T()),nT=(0,i.Ps)(A()),nA=(0,i.Ps)(R()),nR=(0,i.Ps)(B()),nB=(0,i.Ps)(F()),nF=(0,i.Ps)(Q()),nQ=(0,i.Ps)(U());(0,i.Ps)(M());let nU=(0,i.Ps)(O()),nM=(0,i.Ps)(E()),nO=(0,i.Ps)(L());(0,i.Ps)(W());let nE=(0,i.Ps)(H()),nL=(0,i.Ps)(z());(0,i.Ps)(V());let nW=(0,i.Ps)(X()),nH=(0,i.Ps)(J()),nz=(0,i.Ps)(Y()),nV=(0,i.Ps)(K()),nX=(0,i.Ps)(G()),nJ=(0,i.Ps)(nn()),nY=(0,i.Ps)(ne()),nK=(0,i.Ps)(nt()),nG=(0,i.Ps)(nr()),n0=(0,i.Ps)(ni()),n2=(0,i.Ps)(na())},348:function(n,e,t){"use strict";t.d(e,{Q:function(){return r}});let r=n=>n.split(/\s/).reduce((n,e)=>n+=e.slice(0,1),"")},6960:function(n,e,t){"use strict";t.d(e,{default:function(){return G}});var r=t(59533),i=t(95094),a=t(47867),s=t(3443),u=t(28095),c=t(42648);t(83338),t(66967);var d=t(76399),o=t(17848),l=t(31029),_=t(29349),g=t(31229),m=t(12895),p=t(5870),f=t(82498),h=t(89749),v=t(78911),x=t(30034),y=t(46162),j=t(66431),w=t(1026),q=t(45336),b=t(55740),Z=t(59242),P=t(842),k=t(20526);let S={company:"",country:"",contact:""};var N=n=>{let{open:e,handleClose:t,serviceData:i,serivceStatus:s}=n,[c]=(0,d.D)(_.en),[o,m]=(0,g.useState)(S),[N,$]=(0,g.useState)(!0),[C,D]=(0,g.useState)(),{control:I,reset:T,handleSubmit:A,formState:{errors:R}}=(0,k.cI)({defaultValues:{}}),B=async n=>{await c({variables:{id:i.id,data:{service_fee:n.service_fee,status:n.status,is_warranty_valid:n.is_warranty_valid}},refetchQueries:[l.sv]}),t(),m(S),T({})},F=()=>{t(),m(S)};return(0,r.jsxs)(p.ZP,{open:e,anchor:"right",variant:"temporary",onClose:F,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(u.Z,{variant:"h5",children:"Edit Service Data"}),(0,r.jsx)(h.Z,{size:"small",onClick:F,children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(q.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:A(n=>B(n)),className:"flex flex-col gap-5",children:[(0,r.jsxs)(f.Z,{component:"fieldset",children:[(0,r.jsx)(u.Z,{component:"legend",children:"Is Warranty Validity"}),(0,r.jsx)(k.Qr,{name:"is_warranty_valid",control:I,rules:{required:!0},render:n=>{let{field:e}=n;return(0,r.jsxs)(b.Z,{...e,row:!0,children:[(0,r.jsx)(Z.Z,{value:"true",control:(0,r.jsx)(P.Z,{}),label:"Yes"}),(0,r.jsx)(Z.Z,{value:"false",control:(0,r.jsx)(P.Z,{}),label:"No"})]})}}),R.is_warranty_valid&&(0,r.jsx)(w.Z,{error:!0,children:"This field is required."})]}),(0,r.jsx)(k.Qr,{name:"service_fee",control:I,rules:{required:!0},render:n=>{let{field:e}=n;return(0,r.jsx)(j.Z,{...e,fullWidth:!0,label:"Service Fee",placeholder:"Enter Service Fee",...R.service_fee&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsxs)(f.Z,{fullWidth:!0,children:[(0,r.jsx)(v.Z,{id:"country",error:!!R.status,children:"Select Service Status"}),(0,r.jsx)(k.Qr,{name:"status",control:I,rules:{required:!0},render:n=>{let{field:e}=n;return(0,r.jsx)(y.Z,{label:"Select Service Status",...e,error:!!R.status,children:s.service_status.map(n=>(0,r.jsx)(x.Z,{value:n.name,children:n.name},n.name))})}}),R.status&&(0,r.jsx)(w.Z,{error:!0,children:"This field is required."})]}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(a.Z,{variant:"contained",type:"submit",children:"Submit"}),(0,r.jsx)(a.Z,{variant:"outlined",color:"error",type:"reset",onClick:()=>F(),children:"Cancel"})]})]})})]})},$=n=>{let{serviceData:e}=n,{setGlobalMsg:t}=(0,m.q)(),[i,p]=(0,g.useState)(!1),[f]=(0,d.D)(_.HT),[h]=(0,d.D)(_.wU),{data:v}=(0,o.kJ)(l.Pr);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap justify-between sm:items-center max-sm:flex-col gap-y-4",children:[(0,r.jsx)("div",{className:"flex flex-col items-start gap-1",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(u.Z,{variant:"h5",children:"Service Token - ".concat(null==e?void 0:e.token_number)}),(0,r.jsx)(s.Z,{variant:"tonal",label:null==e?void 0:e.status,color:c.uH[(null==e?void 0:e.status)||""],size:"small"})]})}),(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>p(!i),className:"max-sm:is-full",children:"Edit Service"})]}),(0,r.jsx)(N,{open:i,handleClose:()=>p(!i),serviceData:e,serivceStatus:v})]})},C=t(26175),D=t(32870),I=t(33386);t(72860);var T=t(65841);t(83762),t(67875);var A=t(64429),R=t(56527),B=t(76422);(0,T.Cl)();var F=n=>{let{serviceData:e}=n,{setGlobalMsg:t}=(0,m.q)(),[i,a]=(0,g.useState)(!!e.is_warranty_valid),[s,c]=(0,g.useState)(),[o,l]=(0,g.useState)(),[p,f]=(0,g.useState)(!1),[h,v]=(0,g.useState)(""),[x,y]=(0,g.useState)(!1),[j,w]=(0,g.useState)(""),[q]=(0,d.D)(_.en),b=n=>{v(n),f(!0)},Z=n=>{w(n),y(!0)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(D.Z,{title:"Service Details"}),(0,r.jsxs)(I.Z,{className:"flex  flex-col",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center gap-12",children:[(0,r.jsx)(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Description:"}),(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:e.description})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex items-center gap-12",children:[(0,r.jsx)(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Warranty Valid:"}),(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:e.is_warranty_valid?"Yes":"No"})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex items-center gap-12",children:[(0,r.jsx)(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Service Fee:"}),(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:e.service_fee})]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex justify-center  flex-col gap-x-12",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:e.document_photo_url,alt:"image",width:50,height:"auto",onClick:()=>Z(e.document_photo_url)}),(0,r.jsx)(u.Z,{color:"text.primary",className:" min-is-[100px]",children:"Document Photo"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:"image"===e.issue_media_type?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:e.issue_media_url,alt:"image",width:50,height:"auto",onClick:()=>b(e.issue_media_url)}),(0,r.jsx)(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Issue Image"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("video",{src:e.issue_media_url,alt:"image",width:50,height:"auto"}),(0,r.jsx)(u.Z,{color:"text.primary",className:"min-is-[100px]",children:"Issue Video"})]})})]}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{})]})]}),(0,r.jsx)(A.Z,{open:p,onClose:()=>{f(!1),v("")},maxWidth:"md",children:(0,r.jsx)(R.Z,{children:(0,r.jsx)("img",{src:h,alt:"Full Screen",style:{width:"100%",height:"auto",overfow:"hidden"}})})}),(0,r.jsx)(A.Z,{open:x,onClose:()=>{y(!1),w("")},maxWidth:"md",children:(0,r.jsx)(R.Z,{children:(0,r.jsx)("img",{src:j,alt:"Full Screen",style:{width:"100%",height:"auto",overfow:"hidden"}})})}),(0,r.jsx)(B.Z,{})]})},Q=t(72540),U=t(33135),M=t(34607),O=t(34051),E=t(84407),L=t(66030),W=t(15217);let H=(0,L.ZP)(W.Z)({paddingLeft:0,paddingRight:0,"& .MuiTimelineItem-root":{width:"100%","&:before":{display:"none"},"& .MuiTimelineContent-root:last-child":{paddingBottom:0},"&:nth-last-child(2) .MuiTimelineConnector-root":{backgroundColor:"transparent",borderInlineStart:"1px dashed var(--mui-palette-divider)"},"& .MuiTimelineConnector-root":{backgroundColor:"var(--mui-palette-primary-main)"}}});var z=n=>{let{serviceData:e}=n;return(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(D.Z,{title:"Shipping Activity"}),(0,r.jsx)(I.Z,{children:(0,r.jsxs)(H,{children:[(0,r.jsxs)(U.Z,{children:[(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(Q.Z,{color:"primary"}),(0,r.jsx)(E.Z,{})]}),(0,r.jsxs)(M.Z,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,r.jsxs)(u.Z,{color:"text.primary",className:"font-medium",children:["Service was placed (Token number: #",e.token_number,")"]}),(0,r.jsx)(u.Z,{variant:"caption",children:new Date(e.received_at).toLocaleString()})]}),(0,r.jsx)(u.Z,{className:"mbe-2",children:"Order has been placed successfully"})]})]}),"dealer"===e.user.role&&(0,r.jsxs)(U.Z,{children:[(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(Q.Z,{variant:null===e.picking_up_at?"outlined":"contained",color:null===e.picking_up_at?"grey":"primary"}),(0,r.jsx)(E.Z,{})]}),(0,r.jsxs)(M.Z,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:"Picking Up"}),null!==e.picking_up_at&&(0,r.jsx)(u.Z,{variant:"caption",children:new Date(null==e?void 0:e.picking_up_at).toLocaleString()})]}),(0,r.jsx)(u.Z,{className:"mbe-2",children:"Service is picking "})]})]}),(0,r.jsxs)(U.Z,{children:[(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(Q.Z,{variant:null===e.processing_at?"outlined":"contained",color:null===e.processing_at?"grey":"primary"}),(0,r.jsx)(E.Z,{})]}),(0,r.jsxs)(M.Z,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:"Processing"}),null!==e.processing_at&&(0,r.jsx)(u.Z,{variant:"caption",children:new Date(null==e?void 0:e.processing_at).toLocaleString()})]}),(0,r.jsx)(u.Z,{className:"mbe-2",children:"Service is processing "})]})]}),(0,r.jsxs)(U.Z,{children:[(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(Q.Z,{variant:null===e.delivering_at?"outlined":"contained",color:null===e.delivering_at?"grey":"primary"}),(0,r.jsx)(E.Z,{})]}),(0,r.jsxs)(M.Z,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:"Delivering"}),null!==e.delivering_at&&(0,r.jsx)(u.Z,{variant:"caption",children:new Date(null==e?void 0:e.delivering_at).toLocaleString()})]}),(0,r.jsx)(u.Z,{className:"mbe-2",children:"Service is Delivering "})]})]}),(0,r.jsxs)(U.Z,{children:[(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(Q.Z,{variant:null===e.completed_at?"outlined":"contained",color:null===e.completed_at?"grey":"primary"}),(0,r.jsx)(E.Z,{})]}),(0,r.jsxs)(M.Z,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-x-2 mbe-2.5",children:[(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:"Completed"}),null!==e.completed_at&&(0,r.jsx)(u.Z,{variant:"caption",children:new Date(null==e?void 0:e.completed_at).toLocaleString()})]}),(0,r.jsx)(u.Z,{className:"mbe-2",children:"Service has been completed "})]})]})]})})]})};t(82471);var V=t(36663);t(6083),t(42801);var X=t(348);let J=n=>{let{avatar:e,customer:t}=n;return e?(0,r.jsx)(V.Z,{src:e}):(0,r.jsx)(V.Z,{children:(0,X.Q)(t)})};var Y=n=>{var e,t;let{serviceData:i}=n;return(0,r.jsx)(C.Z,{children:(0,r.jsxs)(I.Z,{className:"flex flex-col gap-6",children:[(0,r.jsx)(u.Z,{variant:"h5",children:"Customer details"}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[J({avatar:null!==(e=null==i?void 0:i.avatar)&&void 0!==e?e:"",customer:null!==(t=null==i?void 0:i.user.profile_picture_url)&&void 0!==t?t:""}),(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:null==i?void 0:i.user.name})})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("div",{className:"flex justify-between items-center",children:(0,r.jsx)(u.Z,{color:"text.primary",className:"font-medium",children:"Contact info"})}),(0,r.jsxs)(u.Z,{children:["Mobile : ",i.user.phone]})]})]})})},K=t(61250),G=()=>{let{id:n}=(0,K.useParams)(),{data:e}=(0,o.kJ)(l.sv,{variables:{id:n},fetchPolicy:"network-only"}),t=null==e?void 0:e.service_tokens_by_pk;return(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)($,{serviceData:t})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(F,{serviceData:t})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(z,{serviceData:t})})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(i.ZP,{container:!0,spacing:6,children:(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(Y,{serviceData:t})})})})]})}}},function(n){n.O(0,[3307,8869,1055,4214,9253,4637,313,6431,7814,9276,7020,4284,2163,9993,7957,5841,3443,2173,3532,526,5870,1325,9242,9650,7581,497,4170,6842,1744],function(){return n(n.s=81967)}),_N_E=n.O()}]);