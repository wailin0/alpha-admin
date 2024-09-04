(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6926,1029],{37765:function(n,e,t){Promise.resolve().then(t.bind(t,62216))},31029:function(n,e,t){"use strict";t.d(e,{kI:function(){return nM},mq:function(){return nE},RV:function(){return nF},FL:function(){return nx},Pg:function(){return nD},ef:function(){return n0},kQ:function(){return nP},TX:function(){return nZ},_b:function(){return n$},Sg:function(){return ng},uA:function(){return np},nX:function(){return nm},i2:function(){return nO},tT:function(){return nd},C9:function(){return no},fo:function(){return ns},L5:function(){return nu},RF:function(){return nK},xU:function(){return nq},Ux:function(){return nv},r6:function(){return ny},jX:function(){return nQ},yf:function(){return nh},wC:function(){return nb},Ev:function(){return nf},Jv:function(){return nR},Nz:function(){return nB},w9:function(){return nT},DF:function(){return nA},jh:function(){return nj},sr:function(){return n2},yZ:function(){return nc},ld:function(){return nU},BD:function(){return nl},xH:function(){return n_},XR:function(){return nw},aN:function(){return nG},_n:function(){return nS},KH:function(){return nN},TW:function(){return nk},Ak:function(){return nL},Pr:function(){return nY},sv:function(){return nI},Pk:function(){return nC},wk:function(){return nX},R:function(){return nV},$X:function(){return nJ},pR:function(){return nz},My:function(){return nH},l_:function(){return nW}});var r=t(42541),i=t(14595);function a(){let n=(0,r._)(["\nfragment productBaseFields on products {\n  id\n  title\n  price\n  product_medias(order_by: {updated_at: desc}, limit: 1) {\n    id\n    media_url\n  }\n  product_discounts(limit: 1, order_by: {discounted_value: desc}) {\n    id\n    discount_type\n    discounted_value\n  }\n}\n"]);return a=function(){return n},n}function s(){let n=(0,r._)(["\n  query getUsers {\n    users {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      delivery_name\n      delivery_phone\n      delivery_address\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return s=function(){return n},n}function u(){let n=(0,r._)(["\n  query getUsers($userId: uuid!) {\n    users_by_pk(id: $userId) {\n      id\n      name\n      phone\n      profile_picture_url\n      role\n      status\n      delivery_name\n      delivery_phone\n      delivery_address\n      dealer {\n        id\n        name\n        phone\n        address\n        city_name\n        township_name\n      }\n    }\n  }\n"]);return u=function(){return n},n}function o(){let n=(0,r._)(["\n  query getProductCategories {\n    product_categories {\n      id\n      title\n      image_url\n      created_at\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return o=function(){return n},n}function d(){let n=(0,r._)(["\n  query getProducts {\n    products(order_by: { updated_at: desc }) {\n      id\n      title\n      description_html\n      serial_number\n      product_medias(order_by: { updated_at: desc }, limit: 1) {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return d=function(){return n},n}function c(){let n=(0,r._)(["\n  query productById($id: uuid!) {\n    products_by_pk(id: $id) {\n      id\n      title\n      serial_number\n      description_html\n      product_medias(order_by: { updated_at: desc }, limit: 1) {\n        id\n        media_url\n      }\n      product_category {\n        id\n        title\n        image_url\n      }\n      product_discounts {\n        id\n        min_order\n        discounted_value\n      }\n      brand {\n        id\n        title\n        image_url\n      }\n      price\n      sku\n      disabled\n    }\n  }\n"]);return c=function(){return n},n}function l(){let n=(0,r._)(["\n  query productBrand {\n    brands {\n      id\n      title\n    }\n  }\n"]);return l=function(){return n},n}function _(){let n=(0,r._)(["\n  query productCat {\n    product_categories {\n      id\n      title\n    }\n  }\n"]);return _=function(){return n},n}function g(){let n=(0,r._)(["\n  query brands {\n    brands(order_by: { updated_at: desc }) {\n      id\n      title\n      image_url\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return g=function(){return n},n}function m(){let n=(0,r._)(["\n  query newCategorys {\n    news_categories {\n      id\n      title\n      news_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);return m=function(){return n},n}function p(){let n=(0,r._)(["\n  query newCatById($id: uuid!) {\n    news_categories_by_pk(id: $id) {\n      id\n      title\n    }\n  }\n"]);return p=function(){return n},n}function f(){let n=(0,r._)(["\n  query news {\n    news(order_by: { updated_at: desc }) {\n      id\n      title\n      body_html\n      image_url\n      disabled\n      news_category_id\n      news_category {\n        id\n        title\n      }\n    }\n  }\n"]);return f=function(){return n},n}function h(){let n=(0,r._)(["\n  query newId($id: uuid!) {\n    news_by_pk(id: $id) {\n      id\n      title\n      image_url\n      news_category {\n        id\n        title\n      }\n      news_related_products {\n        product {\n          id\n        }\n      }\n    }\n  }\n"]);return h=function(){return n},n}function x(){let n=(0,r._)(["\n  query newCats {\n    news_categories {\n      id\n      title\n    }\n  }\n"]);return x=function(){return n},n}function y(){let n=(0,r._)(["\n  query getAllInvoices {\n    invoices(order_by: { updated_at: desc }) {\n      id\n      invoice_number\n      status\n      balance\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return y=function(){return n},n}function v(){let n=(0,r._)(["\n  query invoiceTabs($user_id: uuid!) {\n    invoices(where: { user_id: { _eq: $user_id } }) {\n      id\n      invoice_number\n      status\n      balance\n      total\n      discount\n      invoice_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      created_at\n      updated_at\n\n      invoice_file_url\n    }\n  }\n"]);return v=function(){return n},n}function q(){let n=(0,r._)(["\n  query invoiceStatus {\n    invoice_status {\n      id\n      name\n    }\n  }\n"]);return q=function(){return n},n}function j(){let n=(0,r._)(["\n  query invoiceById($id: uuid!) {\n    invoices_by_pk(id: $id) {\n      id\n      balance\n      invoice_number\n      status\n      note\n      total\n      created_at\n      updated_at\n      user {\n        id\n        name\n        email\n        phone\n      }\n      order {\n        id\n        items_total\n        order_items {\n          product {\n            title\n            id\n            price\n            brand {\n              id\n              title\n            }\n          }\n\n          quantity\n          total\n        }\n      }\n    }\n  }\n"]);return j=function(){return n},n}function b(){let n=(0,r._)(["\n  query payments($invoice_id: uuid!) {\n    payments(where: { invoice_id: { _eq: $invoice_id } }) {\n      id\n      amount\n      payment_date\n      payment_method\n      updated_at\n      created_at\n      invoice_id\n    }\n  }\n"]);return b=function(){return n},n}function w(){let n=(0,r._)(["\n  query newProduct($news_id: uuid!) {\n    news_related_products(where: { news_id: { _eq: $news_id } }) {\n      id\n      news_id\n      product_id\n    }\n  }\n"]);return w=function(){return n},n}function P(){let n=(0,r._)(["\n  query productSelect {\n    products {\n      id\n      title\n    }\n  }\n"]);return P=function(){return n},n}function k(){let n=(0,r._)(["\n  query getAllQuotations {\n    quotations(order_by: { updated_at: desc }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return k=function(){return n},n}function Z(){let n=(0,r._)(["\n  query quotationTabs($user_id: uuid!) {\n    quotations(where: { user_id: { _eq: $user_id } }) {\n      id\n      dealer_remark\n      created_at\n      updated_at\n      status\n      quotation_status {\n        id\n        name\n      }\n      user {\n        id\n        name\n        profile_picture_url\n      }\n      quotation_file_url\n      quotation_number\n      total_amount\n    }\n  }\n"]);return Z=function(){return n},n}function N(){let n=(0,r._)(["\n  query serviceCenters {\n    service_centers(order_by: { updated_at: desc }) {\n      id\n      name\n      address\n      phone\n      created_at\n      updated_at\n    }\n  }\n"]);return N=function(){return n},n}function S(){let n=(0,r._)(["\n  query aa {\n    quotation_status {\n      id\n      name\n    }\n  }\n"]);return S=function(){return n},n}function $(){let n=(0,r._)(["\n  query quotationById($id: uuid!) {\n    quotations_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      dealer_remark\n      total_amount\n      quotation_number\n      status\n      user {\n        id\n        name\n        phone\n      }\n      quotation_items {\n        id\n        quantity\n        product {\n          price\n          title\n\n          brand {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"]);return $=function(){return n},n}function C(){let n=(0,r._)(["\n  query getAllServiceTokens {\n    service_tokens(order_by: { updated_at: desc }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return C=function(){return n},n}function I(){let n=(0,r._)(["\n  query serviceTokenTabs($user_id: uuid!) {\n    service_tokens(where: { user_id: { _eq: $user_id } }) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        profile_picture_url\n      }\n    }\n  }\n"]);return I=function(){return n},n}function A(){let n=(0,r._)(["\n  query serviceTokensById($id: uuid!) {\n    service_tokens_by_pk(id: $id) {\n      id\n      completed_at\n      created_at\n      description\n      delivering_at\n      document_photo_url\n      is_warranty_valid\n      issue_media_type\n      issue_media_url\n      picking_up_at\n      product\n      processing_at\n      service_fee\n      service_status {\n        name\n      }\n      status\n      token_number\n      updated_at\n      user {\n        name\n        id\n        phone\n        email\n      }\n    }\n  }\n"]);return A=function(){return n},n}function D(){let n=(0,r._)(["\n  query OrderStatus {\n    order_status {\n      id\n      name\n    }\n  }\n"]);return D=function(){return n},n}function T(){let n=(0,r._)(["\n  query getAllOrders {\n    orders(order_by: { updated_at: desc }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return T=function(){return n},n}function B(){let n=(0,r._)(["\n  query orderTabs($user_id: uuid!) {\n    orders(where: { user_id: { _eq: $user_id } }) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      user {\n        id\n        name\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return B=function(){return n},n}function R(){let n=(0,r._)(["\n  query ordersById($id: uuid!) {\n    orders_by_pk(id: $id) {\n      id\n      order_number\n      completion_photo_url\n      completed_at\n      created_at\n      delivering_at\n      delivery_fee\n      discount\n      items_total\n      order_status {\n        name\n        id\n      }\n      ordered_at\n      preparing_at\n      receiver_address\n      receiver_name\n      receiver_phone\n      remark\n      status\n      total\n      updated_at\n      receiver_name\n      receiver_phone\n      order_items {\n        id\n        quantity\n        total\n        unit_price\n        product {\n          id\n          title\n          brand {\n            id\n            title\n          }\n        }\n      }\n      user {\n        id\n        name\n        phone\n        email\n        profile_picture_url\n        user_role {\n          role_name\n        }\n      }\n      user_id\n    }\n  }\n"]);return R=function(){return n},n}function U(){let n=(0,r._)(['\n  query orderAggregate {\n    activeOrder: orders_aggregate(\n      where: {\n        _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }, { status: { _neq: "refunded" } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    completeOrder: orders_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    refundedOrder: orders_aggregate(where: { status: { _eq: "refunded" } }) {\n      aggregate {\n        count\n      }\n    }\n    canceledOrder: orders_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return U=function(){return n},n}function Q(){let n=(0,r._)(["\n  query productAggregate {\n    brandProduct: products_aggregate(distinct_on: brand_id) {\n      aggregate {\n        count\n      }\n    }\n    categoryProduct: products_aggregate(distinct_on: category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableProduct: products_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeProduct: products_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return Q=function(){return n},n}function F(){let n=(0,r._)(["\n  query productAggregate {\n    totalNews: news_aggregate {\n      aggregate {\n        count\n      }\n    }\n    categoryNews: news_aggregate(distinct_on: news_category_id) {\n      aggregate {\n        count\n      }\n    }\n    disableNews: news_aggregate(where: { disabled: { _eq: true } }) {\n      aggregate {\n        count\n      }\n    }\n    activeNews: news_aggregate(where: { disabled: { _eq: false } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return F=function(){return n},n}function z(){let n=(0,r._)(["\n  query getAllDealers {\n    dealers {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return z=function(){return n},n}function O(){let n=(0,r._)(["\n  query admins {\n    admins(order_by: { updated_at: desc }) {\n      id\n      name\n      email\n      role\n      password\n      created_at\n      updated_at\n    }\n  }\n"]);return O=function(){return n},n}function M(){let n=(0,r._)(["\n  query userRoles {\n    user_roles {\n      id\n      role_name\n    }\n  }\n"]);return M=function(){return n},n}function E(){let n=(0,r._)(["\n  query paymentMethods {\n    payment_methods {\n      id\n      name\n    }\n  }\n"]);return E=function(){return n},n}function W(){let n=(0,r._)(["\n  query adminById($id: uuid!) {\n    admins_by_pk(id: $id) {\n      id\n      name\n    }\n  }\n"]);return W=function(){return n},n}function X(){let n=(0,r._)(["\n  query adminRoles {\n    admin_roles {\n      id\n      role_name\n    }\n  }\n"]);return X=function(){return n},n}function L(){let n=(0,r._)(['\n  query orderAggregate {\n    saleRole: admin_roles_aggregate(where: { role_name: { _eq: "sale" } }) {\n      aggregate {\n        count\n      }\n    }\n    financeRole: admin_roles_aggregate(where: { role_name: { _eq: "finance" } }) {\n      aggregate {\n        count\n      }\n    }\n    serviceRole: admin_roles_aggregate(where: { role_name: { _eq: "service" } }) {\n      aggregate {\n        count\n      }\n    }\n    adminRole: admin_roles_aggregate(where: { role_name: { _eq: "admin" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    managerRole: admin_roles_aggregate(where: { role_name: { _eq: "manager" } }) {\n      aggregate {\n        count\n      }\n    }\n\n    deliveryRole: admin_roles_aggregate(where: { role_name: { _eq: "delivery" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return L=function(){return n},n}function H(){let n=(0,r._)(["\n  query dealerById($id: uuid!) {\n    dealers_by_pk(id: $id) {\n      id\n      address\n      city_name\n      name\n      phone\n      township_name\n      user {\n        id\n        name\n      }\n    }\n  }\n"]);return H=function(){return n},n}function V(){let n=(0,r._)(['\n  query userAggregate {\n    activeUser: users_aggregate(where: { status: { _eq: "active" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingUser: users_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    disabelUser: users_aggregate(where: { status: { _eq: "disabled" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return V=function(){return n},n}function J(){let n=(0,r._)(['\n  query userAggregate {\n    consumerUser: users_aggregate(where: { role: { _eq: "consumer" } }) {\n      aggregate {\n        count\n      }\n    }\n    dealerUser: users_aggregate(where: { role: { _eq: "dealer" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return J=function(){return n},n}function K(){let n=(0,r._)(['\n  query userAggregate {\n    completedService: service_tokens_aggregate(where: { status: { _eq: "complete" } }) {\n      aggregate {\n        count\n      }\n    }\n    activeService: service_tokens_aggregate(\n      where: { _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }] }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    canceledService: service_tokens_aggregate(where: { status: { _eq: "canceled" } }) {\n      aggregate {\n        count\n      }\n    }\n    pickService: service_tokens_aggregate(where: { status: { _eq: "picking up" } }) {\n      aggregate {\n        count\n      }\n    }\n    receivedService: service_tokens_aggregate(where: { status: { _eq: "received token" } }) {\n      aggregate {\n        count\n      }\n    }\n    processingService: service_tokens_aggregate(where: { status: { _eq: "processing" } }) {\n      aggregate {\n        count\n      }\n    }\n    deliverService: service_tokens_aggregate(where: { status: { _eq: "delivering" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return K=function(){return n},n}function G(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { service_tokens: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return G=function(){return n},n}function Y(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { invoices: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return Y=function(){return n},n}function nn(){let n=(0,r._)(["\n  query userServiceAggregate {\n    users_aggregate(where: { quotations: { id: { _is_null: false } } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return nn=function(){return n},n}function ne(){let n=(0,r._)(['\n  query userAggregate {\n    paidInvoice: invoices_aggregate(where: { status: { _eq: "paid" } }) {\n      aggregate {\n        count\n      }\n    }\n    UnPaindInvoice: users_aggregate(where: { status: { _eq: "unpaid" } }) {\n      aggregate {\n        count\n      }\n    }\n    completeInvoice: users_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n    pendingInvoice: users_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    partiallPaidInvoice: users_aggregate(where: { status: { _eq: "partially paid" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return ne=function(){return n},n}function nt(){let n=(0,r._)(['\n  query quotationAggregate {\n    pendingQuotation: quotations_aggregate(where: { status: { _eq: "pending" } }) {\n      aggregate {\n        count\n      }\n    }\n    acceptedQuotation: quotations_aggregate(where: { status: { _eq: "accepted" } }) {\n      aggregate {\n        count\n      }\n    }\n    rejectedQuotation: quotations_aggregate(where: { status: { _eq: "rejected" } }) {\n      aggregate {\n        count\n      }\n    }\n    completedQuotation: quotations_aggregate(where: { status: { _eq: "completed" } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n']);return nt=function(){return n},n}function nr(){let n=(0,r._)(["\n  query serviceStatus {\n    service_status {\n      id\n      name\n    }\n  }\n"]);return nr=function(){return n},n}function ni(){let n=(0,r._)(["\n  query produtDiscount($product_id: uuid!) {\n    product_discounts(order_by: { updated_at: desc }, where: { product_id: { _eq: $product_id } }) {\n      id\n      customer_type\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n      min_order\n      product {\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return ni=function(){return n},n}function na(){let n=(0,r._)(["\n  query productDiscountById($id: uuid!) {\n    product_discounts_by_pk(id: $id) {\n      id\n      customer_type\n      discount_type\n      created_at\n      updated_at\n      discounted_value\n      min_order\n      product {\n        brand {\n          id\n          title\n        }\n      }\n    }\n  }\n"]);return na=function(){return n},n}(0,i.Ps)(a());let ns=(0,i.Ps)(s()),nu=(0,i.Ps)(u()),no=(0,i.Ps)(o()),nd=(0,i.Ps)(d()),nc=(0,i.Ps)(c()),nl=(0,i.Ps)(l()),n_=(0,i.Ps)(_()),ng=(0,i.Ps)(g()),nm=(0,i.Ps)(m());(0,i.Ps)(p());let np=(0,i.Ps)(f()),nf=(0,i.Ps)(h()),nh=(0,i.Ps)(x()),nx=(0,i.Ps)(y()),ny=(0,i.Ps)(v()),nv=(0,i.Ps)(q()),nq=(0,i.Ps)(j()),nj=(0,i.Ps)(b()),nb=(0,i.Ps)(w()),nw=(0,i.Ps)(P()),nP=(0,i.Ps)(k()),nk=(0,i.Ps)(Z()),nZ=(0,i.Ps)(N()),nN=(0,i.Ps)(S()),nS=(0,i.Ps)($()),n$=(0,i.Ps)(C()),nC=(0,i.Ps)(I()),nI=(0,i.Ps)(A()),nA=(0,i.Ps)(D()),nD=(0,i.Ps)(T()),nT=(0,i.Ps)(B()),nB=(0,i.Ps)(R()),nR=(0,i.Ps)(U()),nU=(0,i.Ps)(Q()),nQ=(0,i.Ps)(F());(0,i.Ps)(z());let nF=(0,i.Ps)(O()),nz=(0,i.Ps)(M()),nO=(0,i.Ps)(E());(0,i.Ps)(W());let nM=(0,i.Ps)(X()),nE=(0,i.Ps)(L());(0,i.Ps)(H());let nW=(0,i.Ps)(V()),nX=(0,i.Ps)(J()),nL=(0,i.Ps)(K()),nH=(0,i.Ps)(G()),nV=(0,i.Ps)(Y()),nJ=(0,i.Ps)(nn()),nK=(0,i.Ps)(ne()),nG=(0,i.Ps)(nt()),nY=(0,i.Ps)(nr()),n0=(0,i.Ps)(ni()),n2=(0,i.Ps)(na())},72718:function(n,e,t){"use strict";t.d(e,{c:function(){return r}});let r=async(n,e,t)=>{try{return(await fetch(e,{method:"PUT",headers:{"Content-Type":"".concat(t,"/*"),"x-amz-acl":"public-read"},body:n})).url.split("?")[0]}catch(n){throw alert(n),console.log(n),Error(n)}}},62216:function(n,e,t){"use strict";t.d(e,{default:function(){return D}});var r=t(59533),i=t(95094),a=t(31229);t(96353);var s=t(61250),u=t(26175),o=t(33386),d=t(47867);t(44223);var c=t(5870),l=t(89749),_=t(28095),g=t(66431),m=t(45336),p=t(20526),f=t(76399),h=t(29349),x=t(72718),y=t(12895),v=t(81770),q=t(76422),j=n=>{let{open:e,handleClose:t,quotationData:i}=n,[s,u]=(0,a.useState)(),[o]=(0,f.D)(h.Sf),[q]=(0,f.D)(h.BM),{setGlobalMsg:j}=(0,y.q)(),b=(0,a.useRef)(null),{control:w,reset:P,handleSubmit:k,formState:{errors:Z}}=(0,p.cI)({defaultValues:{title:"",description:""}}),N=async n=>{try{let n=await o({variables:{content_type:"pdf",folder:"quotations"}}),e=await (0,x.c)(s[0],n.data.getFileUploadUrl.fileUploadUrl,"image"),t=await q({variables:{quotation_id:i.id,quotation_file_url:e}});console.log("res ",t),u(""),j("✅ Send Quotation file suceessful")}catch(n){j("❌ Send file error")}},S=()=>{u("")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.ZP,{open:e,anchor:"right",variant:"temporary",onClose:S,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(_.Z,{variant:"h5",children:"Send Quotation File"}),(0,r.jsx)(l.Z,{size:"small",onClick:()=>{t()},children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(m.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:k(n=>N(n)),className:"flex flex-col gap-5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(g.Z,{size:"small",placeholder:"No file chosen",variant:"outlined",value:s,className:"flex-auto",InputProps:{readOnly:!0,endAdornment:s?(0,r.jsx)(v.Z,{position:"end",children:(0,r.jsx)(l.Z,{size:"small",edge:"end",onClick:()=>setFileName(""),children:(0,r.jsx)("i",{className:"ri-close-line"})})}):null}}),(0,r.jsxs)(d.Z,{component:"label",variant:"outlined",htmlFor:"contained-button-file",className:"min-is-fit",children:["Choose",(0,r.jsx)("input",{hidden:!0,id:"contained-button-file",type:"file",onChange:n=>{let{files:e}=n.target;e&&0!==e.length&&u(e)},ref:b})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(d.Z,{variant:"contained",type:"submit",children:"Add"}),(0,r.jsx)(d.Z,{variant:"outlined",color:"error",type:"reset",onClick:S,children:"Discard"})]})]})})]})})},b=n=>{let{open:e,handleClose:t,quotationData:i}=n,[s,u]=(0,a.useState)(),[o]=(0,f.D)(h.Sf),[x]=(0,f.D)(h.KN),{setGlobalMsg:v}=(0,y.q)();(0,a.useRef)(null);let{control:j,reset:b,handleSubmit:w,formState:{errors:P}}=(0,p.cI)({defaultValues:{title:"",description:""}}),k=async n=>{try{await x({variables:{quotation_id:i.id,discounted_amount:n.price}}),v("✅ Send Quotation Invoice file suceessful")}catch(n){v("❌ Send file error")}},Z=()=>{b({price:""})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.ZP,{open:e,anchor:"right",variant:"temporary",onClose:Z,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-4",children:[(0,r.jsx)(_.Z,{variant:"h5",children:"Send Invoice File"}),(0,r.jsx)(l.Z,{size:"small",onClick:()=>{t()},children:(0,r.jsx)("i",{className:"ri-close-line text-2xl"})})]}),(0,r.jsx)(m.Z,{}),(0,r.jsx)("div",{className:"p-5",children:(0,r.jsxs)("form",{onSubmit:w(n=>k(n)),className:"flex flex-col gap-5",children:[(0,r.jsx)(p.Qr,{name:"price",control:j,rules:{required:!0},render:n=>{let{field:e}=n;return(0,r.jsx)(g.Z,{...e,fullWidth:!0,type:"number",label:"Price",placeholder:"",...P.price&&{error:!0,helperText:"This field is required."}})}}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(d.Z,{variant:"contained",type:"submit",children:"Add"}),(0,r.jsx)(d.Z,{variant:"outlined",color:"error",type:"reset",onClick:Z,children:"Discard"})]})]})})]}),(0,r.jsx)(q.Z,{})]})};t(84148);var w=t(31029),P=n=>{let{quotationData:e}=n,{setGlobalMsg:t}=(0,y.q)(),[i]=(0,f.D)(h.yG,{refetchQueries:[w._n]}),a=async(n,e)=>{try{await i({variables:{quotation_id:n,status:e}}),t("✅ Change Quotation Status")}catch(n){console.log("Change Status Error ",n)}};return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"flex gap-4 justify-end",children:[(0,r.jsx)(d.Z,{variant:"outlined",color:"info",size:"large",onClick:()=>a(null==e?void 0:e.id,"accepted"),children:"Accepted"}),(0,r.jsx)(d.Z,{variant:"outlined",color:"error",size:"large",onClick:()=>a(null==e?void 0:e.id,"rejected"),children:"Reject"})]})})},k=n=>{let{id:e,onButtonClick:t,quotationData:i}=n,[c,l]=(0,a.useState)(!1),[_,g]=(0,a.useState)(!1),[m,p]=(0,a.useState)(!1),{lang:f}=(0,s.useParams)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(o.Z,{className:"flex flex-col gap-4",children:[(0,r.jsx)(d.Z,{fullWidth:!0,color:"success",variant:"contained",className:"capitalize",startIcon:(0,r.jsx)("i",{className:"ri-send-plane-line"}),onClick:()=>g(!0),children:"Send Quotation File"}),(0,r.jsx)(d.Z,{fullWidth:!0,variant:"contained",className:"capitalize",startIcon:(0,r.jsx)("i",{className:"ri-send-plane-line"}),onClick:()=>p(!0),children:"Send Invoice"})]})}),(0,r.jsx)(j,{open:_,handleClose:()=>g(!1),quotationData:i}),(0,r.jsx)(b,{open:m,handleClose:()=>p(!1),quotationData:i})]})},Z=t(8480),N=t(67875),S=t.n(N);t(23825);var $=t(3443);let C={pending:"warning",completed:"success",accepted:"info",rejected:"error"};var I=n=>{var e,t;let{quotationData:a}=n;return(0,r.jsx)(u.Z,{className:"previewCard",children:(0,r.jsx)(o.Z,{className:"sm:!p-12",children:(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"p-6 bg-actionHover rounded",children:(0,r.jsxs)("div",{className:"flex justify-between gap-y-4 flex-col sm:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(Z.Z,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(_.Z,{color:"text.primary",children:"Office 149, 450 South Brand Brooklyn"}),(0,r.jsx)(_.Z,{color:"text.primary",children:"San Diego County, CA 91905, USA"}),(0,r.jsx)(_.Z,{color:"text.primary",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)(_.Z,{variant:"h5",children:"Invoice #"}),(0,r.jsx)($.Z,{label:null==a?void 0:a.status,color:C[a.status],style:{textTransform:"capitalize"},variant:"tonal",size:"small"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsxs)(_.Z,{color:"text.primary",children:["Quotation Number : ",null==a?void 0:a.quotation_number]}),(0,r.jsxs)(_.Z,{color:"text.primary",children:["Date Due : ",new Date(null==a?void 0:a.updated_at).toLocaleDateString()]})]})]})]})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(i.ZP,{container:!0,spacing:6,children:(0,r.jsx)(i.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)(_.Z,{className:"font-medium",color:"text.primary",children:"Invoice To:"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(_.Z,{children:null==a?void 0:a.user.name}),(0,r.jsx)(_.Z,{children:null==a?void 0:a.company}),(0,r.jsx)(_.Z,{children:null==a?void 0:a.address}),(0,r.jsx)(_.Z,{children:null==a?void 0:a.user.phone}),(0,r.jsx)(_.Z,{children:null==a?void 0:a.user.email})]})]})})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"overflow-x-auto border rounded",children:(0,r.jsxs)("table",{className:S().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-be",children:[(0,r.jsx)("th",{className:"!bg-transparent",children:"Product"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Brand"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Price"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Qty"}),(0,r.jsx)("th",{className:"!bg-transparent",children:"Total"})]})}),(0,r.jsx)("tbody",{children:null==a?void 0:a.quotation_items.map((n,e)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(_.Z,{color:"text.primary",children:n.product.title})}),(0,r.jsx)("td",{children:(0,r.jsx)(_.Z,{color:"text.primary",children:n.product.brand.title})}),(0,r.jsx)("td",{children:(0,r.jsx)(_.Z,{color:"text.primary",children:n.product.price})}),(0,r.jsx)("td",{children:(0,r.jsx)(_.Z,{color:"text.primary",children:n.quantity})}),(0,r.jsx)("td",{children:(0,r.jsx)(_.Z,{color:"text.primary",children:n.total})})]},e))})]})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)("div",{className:"flex justify-end flex-col gap-y-4 sm:flex-row",children:(0,r.jsxs)("div",{className:"min-is-[200px]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(_.Z,{children:"Subtotal:"}),(0,r.jsx)(_.Z,{className:"font-medium",color:"text.primary",children:null==a?void 0:null===(e=a.order)||void 0===e?void 0:e.items_total})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(_.Z,{children:"Discount:"}),(0,r.jsx)(_.Z,{className:"font-medium",color:"text.primary",children:null==a?void 0:null===(t=a.order)||void 0===t?void 0:t.discount})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(_.Z,{children:"Tax:"}),(0,r.jsx)(_.Z,{className:"font-medium",color:"text.primary",children:"21%"})]}),(0,r.jsx)(m.Z,{className:"mlb-2"}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(_.Z,{children:"Total:"}),(0,r.jsx)(_.Z,{className:"font-medium",color:"text.primary",children:null==a?void 0:a.total})]})]})})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(m.Z,{className:"border-dashed"})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsxs)(_.Z,{children:[(0,r.jsxs)(_.Z,{component:"span",className:"font-medium",color:"text.primary",children:["Dealer Remark :"," "]}),a.dealer_remark?a.dealer_remark:" - "]})})]})})})},A=t(17848),D=()=>{let{id:n}=(0,s.useParams)(),{data:e}=(0,A.kJ)(w._n,{variables:{id:n}});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:9,children:(0,r.jsx)(I,{quotationData:e.quotations_by_pk})}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,md:3,className:"flex flex-col gap-5",children:[(0,r.jsx)(P,{quotationData:e.quotations_by_pk}),"accepted"===e.quotations_by_pk.status&&(0,r.jsx)(k,{onButtonClick:()=>{window.print()},quotationData:e.quotations_by_pk})]})]})})}},23825:function(){},67875:function(n){n.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(n){n.O(0,[709,3307,9323,6777,8869,1055,4214,9253,4637,313,6431,7814,9276,7020,4284,2163,7957,3443,2173,526,5870,8754,6136,3503,1178,4170,6842,1744],function(){return n(n.s=37765)}),_N_E=n.O()}]);