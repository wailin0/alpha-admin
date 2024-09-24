(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3513,1029],{78570:function(n,e,t){Promise.resolve().then(t.bind(t,11273))},83762:function(n,e,t){"use strict";t(59533),t(31229),t(96353)},42648:function(n,e,t){"use strict";t.d(e,{Pg:function(){return s},c7:function(){return i},sE:function(){return u},uH:function(){return r},zh:function(){return a}});let r={completed:"success",rejected:"error","received token":"info","picking up":"primary",processing:"warning",delivering:"secondary"},i={pending:"warning",completed:"success",accepted:"info",rejected:"error",negotiation:"primary"},a={delivering:"secondary",completed:"success",ordered:"info",preparing:"primary",refunded:"warning",canceled:"error"},u={paid:"secondary","partially paid":"info",rejected:"error",unpaid:"primary",pending:"warning"},s={verified:"success",pending:"warning",unverified:"primary",disable:"error"}},31029:function(n,e,t){"use strict";t.d(e,{kI:function(){return nQ},mq:function(){return nW},p:function(){return n3},RV:function(){return nE},yP:function(){return n7},FL:function(){return nx},Pg:function(){return nR},ef:function(){return n1},kQ:function(){return nk},TX:function(){return nN},_b:function(){return nS},Sg:function(){return nm},uA:function(){return nv},nX:function(){return nf},i2:function(){return nM},tT:function(){return nl},C9:function(){return nc},fo:function(){return nd},L5:function(){return no},RF:function(){return nY},xU:function(){return nq},Ux:function(){return nw},r6:function(){return nb},jX:function(){return nO},yf:function(){return ny},wC:function(){return nj},Ev:function(){return nh},Jv:function(){return nB},Nz:function(){return nT},w9:function(){return nU},DF:function(){return nA},sr:function(){return n2},yZ:function(){return n_},ld:function(){return nF},BD:function(){return ng},xH:function(){return np},XR:function(){return nP},aN:function(){return nG},_n:function(){return nI},KH:function(){return n$},TW:function(){return nZ},Ak:function(){return nH},Pr:function(){return n0},sv:function(){return nD},Pk:function(){return nC},wk:function(){return nX},R:function(){return nK},$X:function(){return nV},pR:function(){return nz},My:function(){return nJ},l_:function(){return nL}});var r=t(42541),i=t(14595);function a(){let n=(0,r._)(["\nfragment productBaseFields on products {\n  id\n  title\n  price\n  product_medias(order_by: {updated_at: desc}, limit: 1) {\n    id\n    media_url\n  }\n  product_discounts(limit: 1, order_by: {discounted_value: desc}) {\n    id\n    discount_type\n    discounted_value\n  }\n}\n"]);return a=function(){return n},n}function u(){let n=(0,r._)(["\n  query getUsers {\n    users {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      email\n      delivery_name\n      delivery_phone\n      delivery_address\n      created_at\n      updated_at\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return u=function(){return n},n}function s(){let n=(0,r._)(["\n  query getUsers($userId: uuid!) {\n    users_by_pk(id: $userId) {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      delivery_name\n      delivery_phone\n      delivery_address\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return s=function(){return n},n}function d(){let n=(0,r._)(["\n  query getProductCategories {\n    product_categories(order_by: { updated_at: desc }) {\n      id\n      title\n      image_url\n      created_at\n      updated_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return d=function(){return n},n}function o(){let n=(0,r._)(["\n  query getProducts {\n    products(order_by: { updated_at: desc }) {\n      id\n      title\n      created_at\n      updated_at\n      description_html\n      serial_number\n      product_medias(order_by: { updated_at: desc }, limit: 1) {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return o=function(){return n},n}function c(){let n=(0,r._)(["\n  query productById($id: uuid!) {\n    products_by_pk(id: $id) {\n      id\n      title\n      serial_number\n      brand_id\n      category_id\n      description_html\n      warranty_period\n      product_medias {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      product_discounts {\n        id\n        min_order\n        discounted_value\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return c=function(){return n},n}function l(){let n=(0,r._)(["\n  query productBrand {\n    brands {\n      id\n      title\n    }\n  }\n"]);return l=function(){return n},n}function _(){let n=(0,r._)(["\n  query productCat {\n    product_categories {\n      id\n      title\n    }\n  }\n"]);return _=function(){return n},n}function g(){let n=(0,r._)(["\n  query brands {\n    brands(order_by: { updated_at: desc }) {\n      id\n      title\n      image_url\n      created_at\n      updated_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return g=function(){return n},n}function p(){let n=(0,r._)(["\n  query newCategorys {\n    news_categories {\n      id\n      title\n      created_at\n      updated_at\n      news_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return p=function(){return n},n}function m(){let n=(0,r._)(["\n  query newCatById($id: uuid!) {\n    news_categories_by_pk(id: $id) {\n      id\n      title\n    }\n  }\n"]);return m=function(){return n},n}function f(){let n=(0,r._)(["\n  query news {\n    news(order_by: { updated_at: desc }) {\n      id\n      title\n      body_html\n      image_url\n      disabled\n      updated_at\n      created_at\n      news_category_id\n      news_category {\n        id\n        title\n      }\n    }\n  }\n"]);return f=function(){return n},n}function v(){let n=(0,r._)(["\n  query newId($id: uuid!) {\n    news_by_pk(id: $id) {\n      id\n      title\n      body_html\n      image_url\n      news_category {\n        id\n        title\n      }\n      news_related_products {\n        product {\n          id\n        }\n      }\n    }\n  }\n"]);return v=function(){return n},n}function h(){let n=(0,r._)(["\n  query newCats {\n    news_categories {\n      id\n      title\n    }\n  }\n"]);return h=function(){return n},n}function y(){let n=(0,r._)(["\n  query getAllInvoices {\n    invoices(order_by: { updated_at: desc }) {\n      id\n      invoice_number\n      status\n      balance\n      created_at\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n          id\n        }\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return y=function(){return n},n}function x(){let n=(0,r._)(["\n  query invoiceTabs($user_id: uuid!) {\n    invoices(where: { user_id: { _eq: $user_id } }) {\n      id\n      invoice_number\n      status\n      balance\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return x=function(){return n},n}function b(){let n=(0,r._)(['\n  query invoiceStatus {\n    invoice_status(where: { name: { _nin: ["partially paid", "canceled"] } }) {\n      id\n      name\n    }\n  }\n']);return b=function(){return n},n}function w(){let n=(0,r._)(["\n  query invoiceById($id: uuid!) {\n    invoices_by_pk(id: $id) {\n      id\n      balance\n      invoice_number\n      status\n      note\n      total\n      created_at\n      updated_at\n      user {\n        id\n        name\n        email\n        phone\n      }\n      order {\n        id\n        items_total\n        order_items {\n          product {\n            title\n            id\n            price\n            brand {\n              id\n              title\n            }\n          }\n\n          quantity\n          total\n        }\n        receiver_name\n        receiver_phone\n        receiver_address\n      }\n    }\n  }\n"]);return w=function(){return n},n}function q(){let n=(0,r._)(["\n  query payments($invoice_id: uuid!) {\n    payments(where: { invoice_id: { _eq: $invoice_id } }) {\n      id\n      amount\n      payment_date\n      payment_method\n      updated_at\n      created_at\n      invoice_id\n    }\n  }\n"]);return q=function(){return n},n}function j(){let n=(0,r._)(["\n  query newProduct($news_id: uuid!) {\n    news_related_products(where: { news_id: { _eq: $news_id } }) {\n      id\n      news_id\n      product_id\n    }\n  }\n"]);return j=function(){return n},n}function P(){let n=(0,r._)(["\n  query productSelect {\n    products {\n      id\n      title\n    }\n  }\n"]);return P=function(){return n},n}function k(){let n=(0,r._)(["\n  query getAllQuotations {\n    quotations(order_by: { updated_at: desc }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return k=function(){return n},n}function Z(){let n=(0,r._)(["\n  query quotationTabs($user_id: uuid!) {\n    quotations(where: { user_id: { _eq: $user_id } }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return Z=function(){return n},n}function N(){let n=(0,r._)(["\n  query serviceCenters {\n    service_centers(order_by: { updated_at: desc }) {\n      id\n      name\n      address\n      phone\n      created_at\n      updated_at\n    }\n  }\n"]);return N=function(){return n},n}function $(){let n=(0,r._)(['\n  query aa {\n    quotation_status(where: { name: { _neq: "canceled" } }) {\n      id\n      name\n    }\n  }\n']);return $=function(){return n},n}function I(){let n=(0,r._)(["\n  query quotationById($id: uuid!) {\n    quotations_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      dealer_remark\n      total_amount\n      quotation_number\n      status\n      user {\n        id\n        name\n        phone\n        orders {\n          receiver_address\n          receiver_name\n          receiver_phone\n        }\n      }\n      quotation_items {\n        id\n        quantity\n        product {\n          price\n          title\n\n          brand {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"]);return I=function(){return n},n}function S(){let n=(0,r._)(["\n  query getAllServiceTokens {\n    service_tokens(order_by: { updated_at: desc }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return S=function(){return n},n}function C(){let n=(0,r._)(["\n  query serviceTokenTabs($user_id: uuid!) {\n    service_tokens(where: { user_id: { _eq: $user_id } }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return C=function(){return n},n}function D(){let n=(0,r._)(["\n  query serviceTokensById($id: uuid!) {\n    service_tokens_by_pk(id: $id) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      received_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        phone\n        email\n      }\n    }\n  }\n"]);return D=function(){return n},n}function A(){let n=(0,r._)(['\n  query OrderStatus {\n    order_status(where: { name: { _neq: "refunded" } }) {\n      id\n      name\n    }\n  }\n']);return A=function(){return n},n}function R(){let n=(0,r._)(["\n  query getAllOrders {\n    orders(order_by: { updated_at: desc }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      order_items {\n        quantity\n        product {\n          price\n          title\n          brand {\n            title\n          }\n          product_category {\n            title\n          }\n        }\n      }\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return R=function(){return n},n}function U(){let n=(0,r._)(["\n  query orderTabs($user_id: uuid!) {\n    orders(where: { user_id: { _eq: $user_id } }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return U=function(){return n},n}function T(){let n=(0,r._)(["\n  query ordersById($id: uuid!) {\n    orders_by_pk(id: $id) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      receiver_name\n      receiver_phone\n      order_items {\n        id\n        quantity\n        total\n        unit_price\n        product {\n          id\n          title\n          brand {\n            id\n            title\n          }\n        }\n      }\n      user {\n        id\n        name\n        phone\n        email\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return T=function(){return n},n}function B(){let n=(0,r._)(['\n  query orderAggregate {\n    activeOrder: orders_aggregate(\n      where: {\n        _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }, { status: { _neq: "refunded" } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    completeOrder: orders_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    refundedOrder: orders_aggregate(where: { status: { _eq: "refunded" } }) {\n      aggregate {\n        count\n      }\n    }\n    canceledOrder: orders_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return B=function(){return n},n}function F(){let n=(0,r._)(["\n  query productAggregate {\n    brandProduct: products_aggregate(distinct_on: brand_id) {\n      aggregate {\n        count\n      }\n    }\n    categoryProduct: products_aggregate(distinct_on: category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableProduct: products_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeProduct: products_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return F=function(){return n},n}function O(){let n=(0,r._)(["\n  query productAggregate {\n    totalNews: news_aggregate {\n      aggregate {\n        count\n      }\n    }\n    categoryNews: news_aggregate(distinct_on: news_category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableNews: news_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeNews: news_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return O=function(){return n},n}function E(){let n=(0,r._)(["\n  query getAllDealers {\n    dealers {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return E=function(){return n},n}function z(){let n=(0,r._)(["\n  query admins {\n    admins(order_by: { updated_at: desc }) {\n      id\n      name\n      email\n      role\n      password\n      created_at\n      updated_at\n    }\n  }\n"]);return z=function(){return n},n}function M(){let n=(0,r._)(["\n  query userRoles {\n    user_roles {\n      id\n      role_name\n    }\n  }\n"]);return M=function(){return n},n}function Q(){let n=(0,r._)(["\n  query paymentMethods {\n    payment_methods {\n      id\n      name\n    }\n  }\n"]);return Q=function(){return n},n}function W(){let n=(0,r._)(["\n  query adminById($id: uuid!) {\n    admins_by_pk(id: $id) {\n      id\n      name\n    }\n  }\n"]);return W=function(){return n},n}function L(){let n=(0,r._)(["\n  query adminRoles {\n    admin_roles {\n      id\n      role_name\n    }\n  }\n"]);return L=function(){return n},n}function X(){let n=(0,r._)(['\n  query orderAggregate {\n    saleRole: admin_roles_aggregate(where: { role_name: { _eq: "sale" } }) {\n      aggregate {\n        count\n      }\n    }\n    financeRole: admin_roles_aggregate(where: { role_name: { _eq: "finance" } }) {\n      aggregate {\n        count\n      }\n    }\n    serviceRole: admin_roles_aggregate(where: { role_name: { _eq: "service" } }) {\n      aggregate {\n        count\n      }\n    }\n    adminRole: admin_roles_aggregate(where: { role_name: { _eq: "admin" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    managerRole: admin_roles_aggregate(where: { role_name: { _eq: "manager" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    deliveryRole: admin_roles_aggregate(where: { role_name: { _eq: "delivery" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return X=function(){return n},n}function H(){let n=(0,r._)(["\n  query dealerById($id: uuid!) {\n    dealers_by_pk(id: $id) {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return H=function(){return n},n}function J(){let n=(0,r._)(['\n  query userAggregate {\n    activeUser: users_aggregate(where: { status: { _eq: "active" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingUser: users_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    disabelUser: users_aggregate(where: { status: { _eq: "disabled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return J=function(){return n},n}function K(){let n=(0,r._)(['\n  query userAggregate {\n    consumerUser: users_aggregate(where: { role: { _eq: "consumer" } }) {\n      aggregate {\n        count\n      }\n    }\n    dealerUser: users_aggregate(where: { role: { _eq: "dealer" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return K=function(){return n},n}function V(){let n=(0,r._)(['\n  query userAggregate {\n    completedService: service_tokens_aggregate(where: { status: { _eq: "complete" } }) {\n      aggregate {\n        count\n      }\n    }\n    activeService: service_tokens_aggregate(\n      where: { _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }] }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    canceledService: service_tokens_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n    pickService: service_tokens_aggregate(where: { status: { _eq: "picking up" } }) {\n      aggregate {\n        count\n      }\n    }\n    receivedService: service_tokens_aggregate(where: { status: { _eq: "received token" } }) {\n      aggregate {\n        count\n      }\n    }\n    processingService: service_tokens_aggregate(where: { status: { _eq: "processing" } }) {\n      aggregate {\n        count\n      }\n    }\n    deliverService: service_tokens_aggregate(where: { status: { _eq: "delivering" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return V=function(){return n},n}function Y(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { service_tokens: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return Y=function(){return n},n}function G(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { invoices: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return G=function(){return n},n}function nn(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { quotations: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return nn=function(){return n},n}function ne(){let n=(0,r._)(['\n  query userAggregate {\n    paidInvoice: invoices_aggregate(where: { status: { _eq: "paid" } }) {\n      aggregate {\n        count\n      }\n    }\n    UnPaindInvoice: invoices_aggregate(where: { status: { _eq: "unpaid" } }) {\n      aggregate {\n        count\n      }\n    }\n    completeInvoice: invoices_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingInvoice: invoices_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    partiallPaidInvoice: invoices_aggregate(where: { status: { _eq: "partially paid" } }) {\n      aggregate {\n        count\n      }\n    }\n    rejectInvoice: invoices_aggregate(where: { status: { _eq: "rejected" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return ne=function(){return n},n}function nt(){let n=(0,r._)(['\n  query quotationAggregate {\n    pendingQuotation: quotations_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    acceptedQuotation: quotations_aggregate(where: { status: { _eq: "accepted" } }) {\n      aggregate {\n        count\n      }\n    }\n    rejectedQuotation: quotations_aggregate(where: { status: { _eq: "rejected" } }) {\n      aggregate {\n        count\n      }\n    }\n    negotiationQuotation: quotations_aggregate(where: { status: { _eq: "negotiation" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return nt=function(){return n},n}function nr(){let n=(0,r._)(["\n  query serviceStatus {\n    service_status {\n      id\n      name\n    }\n  }\n"]);return nr=function(){return n},n}function ni(){let n=(0,r._)(["\n  query produtDiscount($product_id: uuid!) {\n    product_discounts(order_by: { updated_at: desc }, where: { product_id: { _eq: $product_id } }) {\n      id\n      customer_type\n      product_id\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n      min_order\n      product {\n        title\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return ni=function(){return n},n}function na(){let n=(0,r._)(["\n  query productDiscountById($id: uuid!) {\n    product_discounts_by_pk(id: $id) {\n      id\n      customer_type\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n\n      min_order\n      user_role {\n        role_name\n      }\n      product {\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return na=function(){return n},n}function nu(){let n=(0,r._)(["\n  query allEwaranties {\n    ewarranties(order_by: { updated_at: desc }) {\n      id\n      created_at\n      updated_at\n      customer_name\n      customer_phone\n      ewarranty_number\n      model_number\n      registration_date\n      serial_number\n      receipt_image_url\n      shop_name\n      purchase_date\n      product_category_id\n      remark\n      warranty_end_date\n      warranty_period_month\n      user_id\n      user {\n        email\n        phone\n        name\n      }\n      warranty_start_date\n    }\n  }\n"]);return nu=function(){return n},n}function ns(){let n=(0,r._)(["\n  query ewarrantiesById($id: uuid!) {\n    ewarranties_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      customer_name\n      customer_phone\n      ewarranty_number\n      model_number\n      registration_date\n      serial_number\n      receipt_image_url\n      shop_name\n      purchase_date\n      product_category_id\n      remark\n      warranty_end_date\n      warranty_period_month\n      user_id\n      user {\n        email\n        phone\n        name\n      }\n      warranty_start_date\n      product_category {\n        title\n        id\n      }\n    }\n  }\n"]);return ns=function(){return n},n}(0,i.Ps)(a());let nd=(0,i.Ps)(u()),no=(0,i.Ps)(s()),nc=(0,i.Ps)(d()),nl=(0,i.Ps)(o()),n_=(0,i.Ps)(c()),ng=(0,i.Ps)(l()),np=(0,i.Ps)(_()),nm=(0,i.Ps)(g()),nf=(0,i.Ps)(p());(0,i.Ps)(m());let nv=(0,i.Ps)(f()),nh=(0,i.Ps)(v()),ny=(0,i.Ps)(h()),nx=(0,i.Ps)(y()),nb=(0,i.Ps)(x()),nw=(0,i.Ps)(b()),nq=(0,i.Ps)(w());(0,i.Ps)(q());let nj=(0,i.Ps)(j()),nP=(0,i.Ps)(P()),nk=(0,i.Ps)(k()),nZ=(0,i.Ps)(Z()),nN=(0,i.Ps)(N()),n$=(0,i.Ps)($()),nI=(0,i.Ps)(I()),nS=(0,i.Ps)(S()),nC=(0,i.Ps)(C()),nD=(0,i.Ps)(D()),nA=(0,i.Ps)(A()),nR=(0,i.Ps)(R()),nU=(0,i.Ps)(U()),nT=(0,i.Ps)(T()),nB=(0,i.Ps)(B()),nF=(0,i.Ps)(F()),nO=(0,i.Ps)(O());(0,i.Ps)(E());let nE=(0,i.Ps)(z()),nz=(0,i.Ps)(M()),nM=(0,i.Ps)(Q());(0,i.Ps)(W());let nQ=(0,i.Ps)(L()),nW=(0,i.Ps)(X());(0,i.Ps)(H());let nL=(0,i.Ps)(J()),nX=(0,i.Ps)(K()),nH=(0,i.Ps)(V()),nJ=(0,i.Ps)(Y()),nK=(0,i.Ps)(G()),nV=(0,i.Ps)(nn()),nY=(0,i.Ps)(ne()),nG=(0,i.Ps)(nt()),n0=(0,i.Ps)(nr()),n1=(0,i.Ps)(ni()),n2=(0,i.Ps)(na()),n7=(0,i.Ps)(nu()),n3=(0,i.Ps)(ns())},20397:function(n,e,t){"use strict";t.d(e,{Z:function(){return c},c:function(){return o}});let r=["/en/dashboards","/en/products","/en/user","/en/orders","/en/news","/en/services","/en/service_token","/en/invoice","/en/quotations","/en/admin","/en/service_center","/en/ewarranties"],i=["/en/dashboards","/en/products","/en/services","/en/service_center","/en/news"],a=["/en/dashboards","/en/orders","/en/invoice","/en/quotations"],u=["/en/dashboards","/en/services","/en/service_token","/en/invoice"],s=["/en/dashboards","/en/orders"],d=["/en/dashboards","/en/orders","/en/invoice"],o=async(n,e,t)=>{try{return(await fetch(e,{method:"PUT",headers:{"Content-Type":"".concat(t,"/*"),"x-amz-acl":"public-read"},body:n})).url.split("?")[0]}catch(n){throw alert(n),console.log(n),Error(n)}},c=(n,e)=>!!("admin"===n&&r.includes("/en/"+e)||"manager"===n&&i.includes("/en/"+e)||"service"===n&&u.includes("/en/"+e)||"sale"===n&&a.includes("/en/"+e))||!!("delivery"===n&&s.includes("/en/"+e))||!!("finance"===n&&d.includes("/en/"+e))},11273:function(n,e,t){"use strict";t.d(e,{default:function(){return B}});var r=t(59533),i=t(91771),a=t(31229);t(96353);var u=t(61250),s=t(76778),d=t(54323),o=t(29900),c=t(44223),l=t(12895),_=t(29349),g=t(20397),p=t(45641),m=t(20593),f=t(48111),v=t(88363),h=t(84448),y=t(61732),x=t(84323),b=t(20526),w=t(11114),q=n=>{let{open:e,handleClose:t,invoiceData:i}=n;console.log("----------------------");let[u,s]=(0,a.useState)(),[d]=(0,p.D)(_.Sf),[c]=(0,p.D)(_.vl),{setGlobalMsg:q,loading:j,setLoading:P}=(0,l.q)(),[k,Z]=(0,a.useState)(),N=(0,a.useRef)(null),{control:$,reset:I,handleSubmit:S,formState:{errors:C}}=(0,b.cI)({defaultValues:{file:""}});console.log("filew ---",u);let D=async n=>{try{if(!u||"application/pdf"!==u[0].type){Z("Please upload a PDF file.");return}P(!0);let n=await d({variables:{content_type:"pdf",folder:"invoices"}}),e=await (0,g.c)(u[0],n.data.getFileUploadUrl.fileUploadUrl,"image");await c({variables:{id:i.id,invoice_file_url:e}}),s(""),q("✅ Send Invoice file suceessful"),P(!1)}catch(n){q("❌ ".concat(n.message))}},A=()=>{s(""),t(),Z("")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(v.ZP,{open:e,anchor:"right",variant:"temporary",onClose:A,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(x.Z,{variant:"h5",children:"Send Invoice File"}),(0,r.jsx)(h.Z,{size:"small",onClick:()=>{t()},children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(f.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:S(n=>D(n)),className:"flex flex-col gap-5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(y.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:u?u[0].name:"",className:"flex-auto",InputProps:{readOnly:!0,endAdornment:u?(0,r.jsx)(m.Z,{position:"end",children:(0,r.jsx)(h.Z,{size:"small",edge:"end",onClick:()=>setFileName(""),children:(0,r.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,r.jsxs)(o.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,r.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:n=>{let{files:e}=n.target;e&&0!==e.length&&("application/pdf"!==e[0].type?(Z("Invalid file type. Please upload a PDF."),s(null)):(Z(""),s(e)))},ref:N})]})]}),console.log("errror msg ",k),k&&(0,r.jsx)(x.Z,{variant:"body2",color:"error",children:k}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(w.Z,{variant:"contained",type:"submit",children:"Add"}),(0,r.jsx)(o.Z,{variant:"outlined",color:"error",type:"reset",onClick:A,children:"Discard"})]})]})})]})})};t(84148);var j=t(40877),P=t(31029),k=n=>{let{id:e,onButtonClick:t,invoiceData:i}=n,[l,_]=(0,a.useState)(!1),[g,p]=(0,a.useState)(!1),{data:m}=(0,j.kJ)(P.i2),{lang:f}=(0,u.useParams)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(d.Z,{className:"flex flex-col gap-4",children:(0,r.jsx)(o.Z,{fullWidth:!0,variant:"contained",className:"capitalize",startIcon:(0,r.jsx)("i",{className:"ri-send-plane-line"}),onClick:()=>p(!0),children:"Send Invoice File"})})}),(0,r.jsx)(c.Z,{open:l,handleClose:()=>_(!1),invoiceData:i,paymentMethods:m}),(0,r.jsx)(q,{open:g,handleClose:()=>p(!1),invoiceData:i})]})},Z=t(72126),N=t(67875),$=t.n(N);t(97534);var I=t(21467),S=t(83354),C=t(34755),D=t(8957),A=t(5443);t(72860);var R=t(65841);t(83762),(0,R.Cl)();var U=t(42648),T=n=>{var e;let{invoiceData:t}=n,[u,c]=(0,a.useState)(!1),g=null==t?void 0:t.invoices_by_pk,{setGlobalMsg:m}=(0,l.q)(),[v]=(0,p.D)(_.Zq,{refetchQueries:[P.xU]}),h=async(n,e)=>{try{await v({variables:{invoice_id:n,status:e}}),m("✅ Change Invoice Status")}catch(n){console.log("Change Status Error ",n)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{className:"previewCard",children:(0,r.jsx)(d.Z,{className:"sm:!p-12",children:(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,r.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,r.jsx)(o.Z,{variant:"outlined",color:"success",onClick:()=>{var n;return h(null==t?void 0:null===(n=t.invoices_by_pk)||void 0===n?void 0:n.id,"paid")},children:"Paid"}),(0,r.jsx)(o.Z,{variant:"outlined",color:"primary",onClick:()=>{var n;return h(null==t?void 0:null===(n=t.invoices_by_pk)||void 0===n?void 0:n.id,"unpaid")},children:"UnPaid"}),(0,r.jsx)(o.Z,{variant:"outlined",className:"text-error",onClick:()=>{c(!0)},children:"Reject"})]}),(0,r.jsx)("div",{className:"p-6 bg-actionHover rounded",children:(0,r.jsxs)("div",{className:"flex justify-between gap-y-4 flex-col sm:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(Z.Z,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Z,{color:"text.primary",children:"No. 297, Marlar Myaing Street,"}),(0,r.jsx)(x.Z,{color:"text.primary",children:"Tharkayta Industrial Zone,"}),(0,r.jsx)(x.Z,{color:"text.primary",children:"Yangon, Myanmar"}),(0,r.jsx)(x.Z,{color:"text.primary",children:"09- 428 694 996 09- 762 509 157"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)(x.Z,{variant:"h5",children:"Invoice "}),(0,r.jsx)(I.Z,{label:null==g?void 0:g.status,color:U.sE[null==g?void 0:g.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsxs)(x.Z,{color:"text.primary",children:["Invoice Number : ",g.invoice_number]}),(0,r.jsxs)(x.Z,{color:"text.primary",children:["Issued Date : ",new Date(null==g?void 0:g.created_at).toLocaleDateString()]}),(0,r.jsxs)(x.Z,{color:"text.primary",children:["Due Date : ",new Date(null==g?void 0:g.updated_at).toLocaleDateString()]})]})]})]})})]}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(i.ZP,{container:!0,spacing:6,children:(0,r.jsx)(i.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)(x.Z,{className:"font-medium",color:"text.primary",children:"Delivery Address To:"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Z,{children:g.order.receiver_name}),(0,r.jsx)(x.Z,{className:"my-1",children:null==g?void 0:g.order.receiver_phone}),(0,r.jsx)(x.Z,{children:null==g?void 0:g.order.receiver_address})]})]})})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"overflow-x-auto border rounded",children:(0,r.jsxs)("table",{className:$().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-be",children:[(0,r.jsx)("th",{className:"!bg-transparent",children:"Product"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Brand"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Price"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Qty"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Total"})]})}),(0,r.jsxs)("tbody",{children:["`",null==g?void 0:null===(e=g.order)||void 0===e?void 0:e.order_items.map((n,e)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"w-70 text-wrap",children:(0,r.jsx)(x.Z,{color:"text.primary",children:n.product.title})}),(0,r.jsx)("td",{children:(0,r.jsx)(x.Z,{color:"text.primary",children:n.product.brand.title})}),(0,r.jsx)("td",{children:(0,r.jsx)(x.Z,{color:"text.primary",children:n.product.price})}),(0,r.jsx)("td",{children:(0,r.jsx)(x.Z,{color:"text.primary",children:n.quantity})}),(0,r.jsx)("td",{children:(0,r.jsx)(x.Z,{color:"text.primary",children:n.total})})]},e))]})]})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"flex justify-end flex-col gap-y-4 sm:flex-row"})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(f.Z,{className:"border-dashed"})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsxs)(x.Z,{children:[(0,r.jsxs)(x.Z,{component:"span",className:"font-medium",color:"text.primary",children:["Note :"," "]}),null==g?void 0:g.note]})})]})})}),(0,r.jsx)("div",{children:(0,r.jsxs)(S.Z,{fullWidth:"md",open:u,onClose:()=>c(!1),PaperProps:{component:"form",onSubmit:async n=>{var e;n.preventDefault();let r=Object.fromEntries(new FormData(n.currentTarget).entries()).rejected_reason;await v({variables:{invoice_id:null==t?void 0:null===(e=t.invoices_by_pk)||void 0===e?void 0:e.id,status:"rejected",rejected_reason:r}}),m("✅ Reject reason send successfull"),c(!1)}},children:[(0,r.jsx)(C.Z,{children:"Reject Reason"}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(y.Z,{multiline:!0,autoFocus:!0,margin:"dense",id:"rejected_reason",name:"rejected_reason",label:"Reason",fullWidth:!0,variant:"standard"})}),(0,r.jsxs)(A.Z,{children:[(0,r.jsx)(o.Z,{color:"error",onClick:()=>c(!1),children:"Cancel"}),(0,r.jsx)(o.Z,{color:"success",type:"submit",children:"OK"})]})]})})]})},B=()=>{let{id:n}=(0,u.useParams)(),{data:e}=(0,j.kJ)(P.xU,{variables:{id:n}});return(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:9,children:(0,r.jsx)(T,{invoiceData:e})}),"paid"!==e.invoices_by_pk.status&&(0,r.jsx)(i.ZP,{item:!0,xs:12,md:3,children:(0,r.jsx)(k,{onButtonClick:()=>{window.print()},invoiceData:null==e?void 0:e.invoices_by_pk})})]})}},97534:function(){},67875:function(n){n.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(n){n.O(0,[709,3307,7163,6777,6086,5278,6353,1378,8190,5266,1802,1732,6479,9276,9124,1166,1771,1711,9295,6772,1467,526,8363,3047,8197,2392,8942,1066,6935,4170,6842,1744],function(){return n(n.s=78570)}),_N_E=n.O()}]);