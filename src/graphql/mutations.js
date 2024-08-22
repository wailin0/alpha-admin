import { gql } from '@apollo/client'

export const ADMIN_SIGN_IN = gql`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`
export const ADD_CATEGORY = gql`
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
`
export const ADD_BRAND = gql`
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
`
export const ADD_PRODUCT = gql`
  mutation addProduct($data: products_insert_input!) {
    insert_products_one(object: $data) {
      id
    }
  }
`

export const ADD_NEWS = gql`
  mutation addNews($data: news_insert_input!) {
    insert_news_one(object: $data) {
      id
    }
  }
`

// delete
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_PRODUCT_BRAND = gql`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_PRODUCT_CAT = gql`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_NEW_CAT = gql`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`

export const ADD_NEWS_CAT = gql`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`
export const DELETE_NEWS = gql`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`
export const DELETE_INVOICE = gql`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`
export const DELETE_ORDERS = gql`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`
export const DELETE_DEALER = gql`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`
export const ADD_DEALERS = gql`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`
export const ADD_NEWS_PRODUCTS = gql`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`
export const IMGAE_UPLOAD = gql`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`

export const CHANGE_ORDER_STATUS = gql`
  mutation changeOrderStatus($id: uuid!, $data: orders_set_input!) {
    update_orders_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`
export const CHANGE_SERVICE_STATUS = gql`
  mutation changeOrderStatus($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`

export const CHANGE_USER_STATUS = gql`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`
export const CHANGE_QUOTATION_STATUS = gql`
  mutation changeQuotationStatus($id: uuid!, $data: quotations_set_input!) {
    update_quotations_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`
export const CHANGE_INVOICE_STATUS = gql`
  mutation changeInvoiceStatus($id: uuid!, $data: invoices_set_input!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      status
    }
  }
`
export const SEND_QUOTATION_FILE = gql`
  mutation sendQuotationPdf($id: uuid!, $quotation_file_url: String!) {
    update_quotations_by_pk(pk_columns: { id: $id }, _set: { quotation_file_url: $quotation_file_url }) {
      id
    }
  }
`
export const SEND_INVOICE_FILE = gql`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`

export const DELETE_ADMIN = gql`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`
