(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3513,1029],{16934:function(n,e,t){Promise.resolve().then(t.bind(t,11273))},83762:function(n,e,t){"use strict";var r=t(59533),i=t(31229),a=t(96353);e.default=(0,i.forwardRef)((n,e)=>{let{href:t,onClick:i,...s}=n;return(0,r.jsx)(a.default,{ref:e,...s,href:t||"/",onClick:i?n=>i(n):t?void 0:n=>n.preventDefault()})})},31029:function(n,e,t){"use strict";t.d(e,{kI:function(){return nL},mq:function(){return nQ},RV:function(){return nM},FL:function(){return nx},Pg:function(){return nA},ef:function(){return n0},kQ:function(){return nP},TX:function(){return nk},_b:function(){return nC},Sg:function(){return ng},uA:function(){return np},nX:function(){return nm},i2:function(){return nO},tT:function(){return no},C9:function(){return nd},fo:function(){return ns},L5:function(){return nu},RF:function(){return nG},xU:function(){return nj},Ux:function(){return ny},r6:function(){return nv},jX:function(){return nB},yf:function(){return nh},wC:function(){return nw},Ev:function(){return nf},Jv:function(){return nT},Nz:function(){return nF},w9:function(){return nR},DF:function(){return nD},jh:function(){return nb},sr:function(){return n1},yZ:function(){return nc},ld:function(){return nU},BD:function(){return nl},xH:function(){return n_},XR:function(){return nq},aN:function(){return nK},_n:function(){return nS},KH:function(){return nZ},TW:function(){return nN},Ak:function(){return nE},Pr:function(){return nY},sv:function(){return nI},Pk:function(){return n$},wk:function(){return nH},R:function(){return nW},$X:function(){return nX},pR:function(){return nz},My:function(){return nJ},l_:function(){return nV}});var r=t(42541),i=t(14595);function a(){let n=(0,r._)(["\nfragment productBaseFields on products {\n  id\n  title\n  price\n  product_medias(order_by: {updated_at: desc}, limit: 1) {\n    id\n    media_url\n  }\n  product_discounts(limit: 1, order_by: {discounted_value: desc}) {\n    id\n    discount_type\n    discounted_value\n  }\n}\n"]);return a=function(){return n},n}function s(){let n=(0,r._)(["\n  query getUsers {\n    users {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      delivery_name\n      delivery_phone\n      delivery_address\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return s=function(){return n},n}function u(){let n=(0,r._)(["\n  query getUsers($userId: uuid!) {\n    users_by_pk(id: $userId) {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      delivery_name\n      delivery_phone\n      delivery_address\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return u=function(){return n},n}function d(){let n=(0,r._)(["\n  query getProductCategories {\n    product_categories {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return d=function(){return n},n}function o(){let n=(0,r._)(["\n  query getProducts {\n    products(order_by: { updated_at: desc }) {\n      id\n      title\n      description_html\n      serial_number\n      product_medias(order_by: { updated_at: desc }, limit: 1) {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return o=function(){return n},n}function c(){let n=(0,r._)(["\n  query productById($id: uuid!) {\n    products_by_pk(id: $id) {\n      id\n      title\n      serial_number\n      description_html\n      product_medias(order_by: { updated_at: desc }, limit: 1) {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      product_discounts {\n        id\n        min_order\n        discounted_value\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return c=function(){return n},n}function l(){let n=(0,r._)(["\n  query productBrand {\n    brands {\n      id\n      title\n    }\n  }\n"]);return l=function(){return n},n}function _(){let n=(0,r._)(["\n  query productCat {\n    product_categories {\n      id\n      title\n    }\n  }\n"]);return _=function(){return n},n}function g(){let n=(0,r._)(["\n  query brands {\n    brands(order_by: { updated_at: desc }) {\n      id\n      title\n      image_url\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return g=function(){return n},n}function m(){let n=(0,r._)(["\n  query newCategorys {\n    news_categories {\n      id\n      title\n      news_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return m=function(){return n},n}function p(){let n=(0,r._)(["\n  query newCatById($id: uuid!) {\n    news_categories_by_pk(id: $id) {\n      id\n      title\n    }\n  }\n"]);return p=function(){return n},n}function f(){let n=(0,r._)(["\n  query news {\n    news(order_by: { updated_at: desc }) {\n      id\n      title\n      body_html\n      image_url\n      disabled\n      news_category_id\n      news_category {\n        id\n        title\n      }\n    }\n  }\n"]);return f=function(){return n},n}function h(){let n=(0,r._)(["\n  query newId($id: uuid!) {\n    news_by_pk(id: $id) {\n      id\n      title\n      image_url\n      news_category {\n        id\n        title\n      }\n      news_related_products {\n        product {\n          id\n        }\n      }\n    }\n  }\n"]);return h=function(){return n},n}function x(){let n=(0,r._)(["\n  query newCats {\n    news_categories {\n      id\n      title\n    }\n  }\n"]);return x=function(){return n},n}function v(){let n=(0,r._)(["\n  query getAllInvoices {\n    invoices(order_by: { updated_at: desc }) {\n      id\n      invoice_number\n      status\n      balance\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return v=function(){return n},n}function y(){let n=(0,r._)(["\n  query invoiceTabs($user_id: uuid!) {\n    invoices(where: { user_id: { _eq: $user_id } }) {\n      id\n      invoice_number\n      status\n      balance\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return y=function(){return n},n}function j(){let n=(0,r._)(["\n  query invoiceStatus {\n    invoice_status {\n      id\n      name\n    }\n  }\n"]);return j=function(){return n},n}function b(){let n=(0,r._)(["\n  query invoiceById($id: uuid!) {\n    invoices_by_pk(id: $id) {\n      id\n      balance\n      invoice_number\n      status\n      note\n      total\n      created_at\n      updated_at\n      user {\n        id\n        name\n        email\n        phone\n      }\n      order {\n        id\n        items_total\n        order_items {\n          product {\n            title\n            id\n            price\n            brand {\n              id\n              title\n            }\n          }\n\n          quantity\n          total\n        }\n      }\n    }\n  }\n"]);return b=function(){return n},n}function w(){let n=(0,r._)(["\n  query payments($invoice_id: uuid!) {\n    payments(where: { invoice_id: { _eq: $invoice_id } }) {\n      id\n      amount\n      payment_date\n      payment_method\n      updated_at\n      created_at\n      invoice_id\n    }\n  }\n"]);return w=function(){return n},n}function q(){let n=(0,r._)(["\n  query newProduct($news_id: uuid!) {\n    news_related_products(where: { news_id: { _eq: $news_id } }) {\n      id\n      news_id\n      product_id\n    }\n  }\n"]);return q=function(){return n},n}function P(){let n=(0,r._)(["\n  query productSelect {\n    products {\n      id\n      title\n    }\n  }\n"]);return P=function(){return n},n}function N(){let n=(0,r._)(["\n  query getAllQuotations {\n    quotations(order_by: { updated_at: desc }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return N=function(){return n},n}function k(){let n=(0,r._)(["\n  query quotationTabs($user_id: uuid!) {\n    quotations(where: { user_id: { _eq: $user_id } }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return k=function(){return n},n}function Z(){let n=(0,r._)(["\n  query serviceCenters {\n    service_centers(order_by: { updated_at: desc }) {\n      id\n      name\n      address\n      phone\n      created_at\n      updated_at\n    }\n  }\n"]);return Z=function(){return n},n}function S(){let n=(0,r._)(["\n  query aa {\n    quotation_status {\n      id\n      name\n    }\n  }\n"]);return S=function(){return n},n}function C(){let n=(0,r._)(["\n  query quotationById($id: uuid!) {\n    quotations_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      dealer_remark\n      total_amount\n      quotation_number\n      status\n      user {\n        id\n        name\n        phone\n      }\n      quotation_items {\n        id\n        quantity\n        product {\n          price\n          title\n\n          brand {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"]);return C=function(){return n},n}function $(){let n=(0,r._)(["\n  query getAllServiceTokens {\n    service_tokens(order_by: { updated_at: desc }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return $=function(){return n},n}function I(){let n=(0,r._)(["\n  query serviceTokenTabs($user_id: uuid!) {\n    service_tokens(where: { user_id: { _eq: $user_id } }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return I=function(){return n},n}function D(){let n=(0,r._)(["\n  query serviceTokensById($id: uuid!) {\n    service_tokens_by_pk(id: $id) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        phone\n        email\n      }\n    }\n  }\n"]);return D=function(){return n},n}function A(){let n=(0,r._)(["\n  query OrderStatus {\n    order_status {\n      id\n      name\n    }\n  }\n"]);return A=function(){return n},n}function R(){let n=(0,r._)(["\n  query getAllOrders {\n    orders(order_by: { updated_at: desc }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return R=function(){return n},n}function F(){let n=(0,r._)(["\n  query orderTabs($user_id: uuid!) {\n    orders(where: { user_id: { _eq: $user_id } }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return F=function(){return n},n}function T(){let n=(0,r._)(["\n  query ordersById($id: uuid!) {\n    orders_by_pk(id: $id) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      receiver_name\n      receiver_phone\n      order_items {\n        id\n        quantity\n        total\n        unit_price\n        product {\n          id\n          title\n          brand {\n            id\n            title\n          }\n        }\n      }\n      user {\n        id\n        name\n        phone\n        email\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return T=function(){return n},n}function U(){let n=(0,r._)(['\n  query orderAggregate {\n    activeOrder: orders_aggregate(\n      where: {\n        _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }, { status: { _neq: "refunded" } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    completeOrder: orders_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    refundedOrder: orders_aggregate(where: { status: { _eq: "refunded" } }) {\n      aggregate {\n        count\n      }\n    }\n    canceledOrder: orders_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return U=function(){return n},n}function B(){let n=(0,r._)(["\n  query productAggregate {\n    brandProduct: products_aggregate(distinct_on: brand_id) {\n      aggregate {\n        count\n      }\n    }\n    categoryProduct: products_aggregate(distinct_on: category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableProduct: products_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeProduct: products_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return B=function(){return n},n}function M(){let n=(0,r._)(["\n  query productAggregate {\n    totalNews: news_aggregate {\n      aggregate {\n        count\n      }\n    }\n    categoryNews: news_aggregate(distinct_on: news_category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableNews: news_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeNews: news_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return M=function(){return n},n}function z(){let n=(0,r._)(["\n  query getAllDealers {\n    dealers {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return z=function(){return n},n}function O(){let n=(0,r._)(["\n  query admins {\n    admins(order_by: { updated_at: desc }) {\n      id\n      name\n      email\n      role\n      password\n      created_at\n      updated_at\n    }\n  }\n"]);return O=function(){return n},n}function L(){let n=(0,r._)(["\n  query userRoles {\n    user_roles {\n      id\n      role_name\n    }\n  }\n"]);return L=function(){return n},n}function Q(){let n=(0,r._)(["\n  query paymentMethods {\n    payment_methods {\n      id\n      name\n    }\n  }\n"]);return Q=function(){return n},n}function V(){let n=(0,r._)(["\n  query adminById($id: uuid!) {\n    admins_by_pk(id: $id) {\n      id\n      name\n    }\n  }\n"]);return V=function(){return n},n}function H(){let n=(0,r._)(["\n  query adminRoles {\n    admin_roles {\n      id\n      role_name\n    }\n  }\n"]);return H=function(){return n},n}function E(){let n=(0,r._)(['\n  query orderAggregate {\n    saleRole: admin_roles_aggregate(where: { role_name: { _eq: "sale" } }) {\n      aggregate {\n        count\n      }\n    }\n    financeRole: admin_roles_aggregate(where: { role_name: { _eq: "finance" } }) {\n      aggregate {\n        count\n      }\n    }\n    serviceRole: admin_roles_aggregate(where: { role_name: { _eq: "service" } }) {\n      aggregate {\n        count\n      }\n    }\n    adminRole: admin_roles_aggregate(where: { role_name: { _eq: "admin" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    managerRole: admin_roles_aggregate(where: { role_name: { _eq: "manager" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    deliveryRole: admin_roles_aggregate(where: { role_name: { _eq: "delivery" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return E=function(){return n},n}function J(){let n=(0,r._)(["\n  query dealerById($id: uuid!) {\n    dealers_by_pk(id: $id) {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return J=function(){return n},n}function W(){let n=(0,r._)(['\n  query userAggregate {\n    activeUser: users_aggregate(where: { status: { _eq: "active" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingUser: users_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    disabelUser: users_aggregate(where: { status: { _eq: "disabled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return W=function(){return n},n}function X(){let n=(0,r._)(['\n  query userAggregate {\n    consumerUser: users_aggregate(where: { role: { _eq: "consumer" } }) {\n      aggregate {\n        count\n      }\n    }\n    dealerUser: users_aggregate(where: { role: { _eq: "dealer" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return X=function(){return n},n}function G(){let n=(0,r._)(['\n  query userAggregate {\n    completedService: service_tokens_aggregate(where: { status: { _eq: "complete" } }) {\n      aggregate {\n        count\n      }\n    }\n    activeService: service_tokens_aggregate(\n      where: { _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }] }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    canceledService: service_tokens_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n    pickService: service_tokens_aggregate(where: { status: { _eq: "picking up" } }) {\n      aggregate {\n        count\n      }\n    }\n    receivedService: service_tokens_aggregate(where: { status: { _eq: "received token" } }) {\n      aggregate {\n        count\n      }\n    }\n    processingService: service_tokens_aggregate(where: { status: { _eq: "processing" } }) {\n      aggregate {\n        count\n      }\n    }\n    deliverService: service_tokens_aggregate(where: { status: { _eq: "delivering" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return G=function(){return n},n}function K(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { service_tokens: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return K=function(){return n},n}function Y(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { invoices: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return Y=function(){return n},n}function nn(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { quotations: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return nn=function(){return n},n}function ne(){let n=(0,r._)(['\n  query userAggregate {\n    paidInvoice: invoices_aggregate(where: { status: { _eq: "paid" } }) {\n      aggregate {\n        count\n      }\n    }\n    UnPaindInvoice: users_aggregate(where: { status: { _eq: "unpaid" } }) {\n      aggregate {\n        count\n      }\n    }\n    completeInvoice: users_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingInvoice: users_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    partiallPaidInvoice: users_aggregate(where: { status: { _eq: "partially paid" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return ne=function(){return n},n}function nt(){let n=(0,r._)(['\n  query quotationAggregate {\n    pendingQuotation: quotations_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    acceptedQuotation: quotations_aggregate(where: { status: { _eq: "accepted" } }) {\n      aggregate {\n        count\n      }\n    }\n    rejectedQuotation: quotations_aggregate(where: { status: { _eq: "rejected" } }) {\n      aggregate {\n        count\n      }\n    }\n    completedQuotation: quotations_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return nt=function(){return n},n}function nr(){let n=(0,r._)(["\n  query serviceStatus {\n    service_status {\n      id\n      name\n    }\n  }\n"]);return nr=function(){return n},n}function ni(){let n=(0,r._)(["\n  query produtDiscount($product_id: uuid!) {\n    product_discounts(order_by: { updated_at: desc }, where: { product_id: { _eq: $product_id } }) {\n      id\n      customer_type\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n      min_order\n      product {\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return ni=function(){return n},n}function na(){let n=(0,r._)(["\n  query productDiscountById($id: uuid!) {\n    product_discounts_by_pk(id: $id) {\n      id\n      customer_type\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n      min_order\n      product {\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return na=function(){return n},n}(0,i.Ps)(a());let ns=(0,i.Ps)(s()),nu=(0,i.Ps)(u()),nd=(0,i.Ps)(d()),no=(0,i.Ps)(o()),nc=(0,i.Ps)(c()),nl=(0,i.Ps)(l()),n_=(0,i.Ps)(_()),ng=(0,i.Ps)(g()),nm=(0,i.Ps)(m());(0,i.Ps)(p());let np=(0,i.Ps)(f()),nf=(0,i.Ps)(h()),nh=(0,i.Ps)(x()),nx=(0,i.Ps)(v()),nv=(0,i.Ps)(y()),ny=(0,i.Ps)(j()),nj=(0,i.Ps)(b()),nb=(0,i.Ps)(w()),nw=(0,i.Ps)(q()),nq=(0,i.Ps)(P()),nP=(0,i.Ps)(N()),nN=(0,i.Ps)(k()),nk=(0,i.Ps)(Z()),nZ=(0,i.Ps)(S()),nS=(0,i.Ps)(C()),nC=(0,i.Ps)($()),n$=(0,i.Ps)(I()),nI=(0,i.Ps)(D()),nD=(0,i.Ps)(A()),nA=(0,i.Ps)(R()),nR=(0,i.Ps)(F()),nF=(0,i.Ps)(T()),nT=(0,i.Ps)(U()),nU=(0,i.Ps)(B()),nB=(0,i.Ps)(M());(0,i.Ps)(z());let nM=(0,i.Ps)(O()),nz=(0,i.Ps)(L()),nO=(0,i.Ps)(Q());(0,i.Ps)(V());let nL=(0,i.Ps)(H()),nQ=(0,i.Ps)(E());(0,i.Ps)(J());let nV=(0,i.Ps)(W()),nH=(0,i.Ps)(X()),nE=(0,i.Ps)(G()),nJ=(0,i.Ps)(K()),nW=(0,i.Ps)(Y()),nX=(0,i.Ps)(nn()),nG=(0,i.Ps)(ne()),nK=(0,i.Ps)(nt()),nY=(0,i.Ps)(nr()),n0=(0,i.Ps)(ni()),n1=(0,i.Ps)(na())},72718:function(n,e,t){"use strict";t.d(e,{c:function(){return r}});let r=async(n,e,t)=>{try{return(await fetch(e,{method:"PUT",headers:{"Content-Type":"".concat(t,"/*"),"x-amz-acl":"public-read"},body:n})).url.split("?")[0]}catch(n){throw alert(n),console.log(n),Error(n)}}},11273:function(n,e,t){"use strict";t.d(e,{default:function(){return M}});var r=t(59533),i=t(95094),a=t(31229);t(96353);var s=t(61250),u=t(26175),d=t(33386),o=t(47867),c=t(44223),l=t(5870),_=t(89749),g=t(28095),m=t(66431),p=t(45336),f=t(20526),h=t(76399),x=t(29349),v=t(72718),y=t(12895),j=t(81770),b=n=>{let{open:e,handleClose:t,invoiceData:i}=n,[s,u]=(0,a.useState)(),[d]=(0,h.D)(x.Sf),[c]=(0,h.D)(x.vl),{setGlobalMsg:b}=(0,y.q)(),w=(0,a.useRef)(null),{control:q,reset:P,handleSubmit:N,formState:{errors:k}}=(0,f.cI)({defaultValues:{title:"",description:""}}),Z=async n=>{try{let n=await d({variables:{content_type:"pdf",folder:"quotations"}}),e=await (0,v.c)(s[0],n.data.getFileUploadUrl.fileUploadUrl,"image");await c({variables:{id:i.id,invoice_file_url:e}}),u(""),b("➕ Send Invoice file suceessful")}catch(n){b("❌ Send file error")}},S=()=>{u(""),t()};return(0,r.jsxs)(l.ZP,{open:e,anchor:"right",variant:"temporary",onClose:S,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(g.Z,{variant:"h5",children:"Send Invoice File"}),(0,r.jsx)(_.Z,{size:"small",onClick:S,children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(p.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:N(n=>Z(n)),className:"flex flex-col gap-5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(m.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:s,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:s?(0,r.jsx)(j.Z,{position:"end",children:(0,r.jsx)(_.Z,{size:"small",edge:"end",onClick:()=>u(""),children:(0,r.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,r.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,r.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:n=>{let{files:e}=n.target;e&&0!==e.length&&u(e)},ref:w})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(o.Z,{variant:"contained",type:"submit",children:"Add"}),(0,r.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:S,children:"Discard"})]})]})})]})};t(84148);var w=t(17848),q=t(31029),P=n=>{let{id:e,onButtonClick:t,invoiceData:i}=n,[l,_]=(0,a.useState)(!1),[g,m]=(0,a.useState)(!1),{data:p}=(0,w.kJ)(q.i2),{lang:f}=(0,s.useParams)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(d.Z,{className:"flex flex-col gap-4",children:[(0,r.jsx)(o.Z,{fullWidth:!0,variant:"contained",className:"capitalize",startIcon:(0,r.jsx)("i",{className:"ri-send-plane-line"}),onClick:()=>m(!0),children:"Send Invoice File"}),(0,r.jsx)(o.Z,{fullWidth:!0,color:"success",variant:"contained",className:"capitalize",onClick:()=>_(!0),startIcon:(0,r.jsx)("i",{className:"ri-money-dollar-circle-line"}),children:"Add Payment"})]})}),(0,r.jsx)(c.Z,{open:l,handleClose:()=>_(!1),invoiceData:i,paymentMethods:p}),(0,r.jsx)(b,{open:g,handleClose:()=>m(!1),invoiceData:i})]})},N=t(8480),k=t(67875),Z=t.n(k);t(97534);var S=t(3443),C=t(72860),$=t.n(C),I=t(19880),D=t(65841),A=t(51480);t(83762);let R=(n,e,t,r)=>{let i=(0,I.O4)(n.getValue(e),t);return r({itemRank:i}),i.passed},F=(0,D.Cl)();var T=n=>{var e;let{invoiceData:t}=n,{data:i}=(0,w.kJ)(q.jh,{variables:{invoice_id:t.invoices_by_pk.id}}),[s,u]=(0,a.useState)({}),[d,o]=(0,a.useState)(i.payments),[c,l]=(0,a.useState)(""),_=(0,a.useMemo)(()=>[F.accessor("#",{header:"#",cell:n=>{let{row:e}=n;return(0,r.jsx)("div",{className:"flex items-center gap-3 text-wrap",children:(0,r.jsx)("div",{className:"flex flex-col items-start  ",children:(0,r.jsx)(g.Z,{color:"text.primary",className:"font-medium ",children:e.index+1})})})}}),F.accessor("amount",{header:"Amount",cell:n=>{let{row:e}=n;return(0,r.jsx)("div",{className:"flex items-center gap-3 text-wrap",children:(0,r.jsx)("div",{className:"flex flex-col items-start  ",children:(0,r.jsx)(g.Z,{color:"text.primary",className:"font-medium ",children:e.original.amount})})})}}),F.accessor("payment_method",{header:"Payment Method",cell:n=>{let{row:e}=n;return(0,r.jsxs)(g.Z,{children:["".concat(e.original.payment_method)," Ks"]})}}),F.accessor("payment_date",{header:"Payment Date",cell:n=>{let{row:e}=n;return(0,r.jsx)(g.Z,{children:"".concat(new Date(e.original.payment_date).toLocaleDateString())})}})],[]),m=(0,A.b7)({data:d,columns:_,filterFns:{fuzzy:R},state:{rowSelection:s,globalFilter:c},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:R,onRowSelectionChange:u,getCoreRowModel:(0,D.sC)(),onGlobalFilterChange:l,getFilteredRowModel:(0,D.vL)(),getSortedRowModel:(0,D.tj)(),getPaginationRowModel:(0,D.G_)(),getFacetedRowModel:(0,D.o6)(),getFacetedUniqueValues:(0,D.JG)(),getFacetedMinMaxValues:(0,D.HO)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{className:"my-4",children:"Payment Table"}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:Z().table,children:[(0,r.jsx)("thead",{children:m.getHeaderGroups().map(n=>(0,r.jsx)("tr",{children:n.headers.map(n=>{var e;return(0,r.jsx)("th",{children:n.isPlaceholder?null:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:$()({"flex items-center":n.column.getIsSorted(),"cursor-pointer select-none":n.column.getCanSort()}),onClick:n.column.getToggleSortingHandler(),children:[(0,A.ie)(n.column.columnDef.header,n.getContext()),null!==(e=({asc:(0,r.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,r.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[n.column.getIsSorted()])&&void 0!==e?e:null]})})},n.id)})},n.id))}),(null===(e=m.getFilteredRowModel().rows)||void 0===e?void 0:e.length)===0?(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:m.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,r.jsx)("tbody",{className:"border-be",children:m.getRowModel().rows.slice(0,m.getState().pagination.pageSize).map(n=>(0,r.jsx)("tr",{className:$()({selected:n.getIsSelected()}),children:n.getVisibleCells().map(n=>(0,r.jsx)("td",{className:"first:is-14",children:(0,A.ie)(n.column.columnDef.cell,n.getContext())},n.id))},n.id))})]})})]})};let U={paid:"secondary","partially paid":"info",completed:"success",unpaid:"error",pending:"primary"};var B=n=>{var e,t,a;let{invoiceData:s}=n,o=null==s?void 0:s.invoices_by_pk,{setGlobalMsg:c}=(0,y.q)(),[l]=(0,h.D)(x.Zq);return(0,r.jsx)(u.Z,{className:"previewCard",children:(0,r.jsx)(d.Z,{className:"sm:!p-12",children:(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"p-6 bg-actionHover rounded",children:(0,r.jsxs)("div",{className:"flex justify-between gap-y-4 flex-col sm:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(N.Z,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(g.Z,{color:"text.primary",children:"Office 149, 450 South Brand Brooklyn"}),(0,r.jsx)(g.Z,{color:"text.primary",children:"San Diego County, CA 91905, USA"}),(0,r.jsx)(g.Z,{color:"text.primary",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)(g.Z,{variant:"h5",children:"Invoice #"}),(0,r.jsx)(S.Z,{label:null==o?void 0:o.status,color:U[null==o?void 0:o.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsxs)(g.Z,{color:"text.primary",children:["Invoice Number : ",o.invoice_number]}),(0,r.jsxs)(g.Z,{color:"text.primary",children:["Date Issued : ",new Date(null==o?void 0:o.created_at).toLocaleDateString()]}),(0,r.jsxs)(g.Z,{color:"text.primary",children:["Date Due : ",new Date(null==o?void 0:o.updated_at).toLocaleDateString()]})]})]})]})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(i.ZP,{container:!0,spacing:6,children:(0,r.jsx)(i.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)(g.Z,{className:"font-medium",color:"text.primary",children:"Invoice To:"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(g.Z,{children:null==o?void 0:o.user.name}),(0,r.jsx)(g.Z,{children:null==o?void 0:o.company}),(0,r.jsx)(g.Z,{children:null==o?void 0:o.address}),(0,r.jsx)(g.Z,{children:null==o?void 0:o.user.phone}),(0,r.jsx)(g.Z,{children:null==o?void 0:o.user.email})]})]})})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"overflow-x-auto border rounded",children:(0,r.jsxs)("table",{className:Z().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-be",children:[(0,r.jsx)("th",{className:"!bg-transparent",children:"Product"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Brand"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Price"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Qty"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Total"})]})}),(0,r.jsxs)("tbody",{children:["`",null==o?void 0:null===(e=o.order)||void 0===e?void 0:e.order_items.map((n,e)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"w-70 text-wrap",children:(0,r.jsx)(g.Z,{color:"text.primary",children:n.product.title})}),(0,r.jsx)("td",{children:(0,r.jsx)(g.Z,{color:"text.primary",children:n.product.brand.title})}),(0,r.jsx)("td",{children:(0,r.jsx)(g.Z,{color:"text.primary",children:n.product.price})}),(0,r.jsx)("td",{children:(0,r.jsx)(g.Z,{color:"text.primary",children:n.quantity})}),(0,r.jsx)("td",{children:(0,r.jsx)(g.Z,{color:"text.primary",children:n.total})})]},e))]})]})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"flex justify-end flex-col gap-y-4 sm:flex-row",children:(0,r.jsxs)("div",{className:"min-is-[200px]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(g.Z,{children:"Subtotal:"}),(0,r.jsx)(g.Z,{className:"font-medium",color:"text.primary",children:null==o?void 0:null===(t=o.order)||void 0===t?void 0:t.items_total})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(g.Z,{children:"Discount:"}),(0,r.jsx)(g.Z,{className:"font-medium",color:"text.primary",children:null==o?void 0:null===(a=o.order)||void 0===a?void 0:a.discount})]}),(0,r.jsx)(p.Z,{className:"mlb-2"}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(g.Z,{children:"Total:"}),(0,r.jsx)(g.Z,{className:"font-medium",color:"text.primary",children:null==o?void 0:o.total})]})]})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(p.Z,{className:"border-dashed"})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsxs)(g.Z,{children:[(0,r.jsxs)(g.Z,{component:"span",className:"font-medium",color:"text.primary",children:["Note :"," "]}),null==o?void 0:o.note]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(T,{invoiceData:s})})]})})})},M=()=>{let{id:n}=(0,s.useParams)(),{data:e}=(0,w.kJ)(q.xU,{variables:{id:n}});return(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:9,children:(0,r.jsx)(B,{invoiceData:e})}),"paid"!==e.invoices_by_pk.status&&(0,r.jsx)(i.ZP,{item:!0,xs:12,md:3,children:(0,r.jsx)(P,{onButtonClick:()=>{window.print()},invoiceData:null==e?void 0:e.invoices_by_pk})})]})}},97534:function(){},67875:function(n){n.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(n){n.O(0,[709,3307,7163,6777,8869,1055,4214,9253,4637,313,6431,7814,9276,7020,4284,2163,7957,5841,3443,2173,526,5870,8754,6136,5610,1178,4170,6842,1744],function(){return n(n.s=16934)}),_N_E=n.O()}]);