import {gql} from "@apollo/client";
import {PRODUCT_BASE_FIELDS} from "./fragments";


export const GET_USERS = gql`
query getUsers {
  users{
    id
    name
    phone
    profile_picture_url
    role
    status
    delivery_name
    delivery_phone
    delivery_address
    disabled
    dealer {
      id
      name
      phone
      address
      city_name
      township_name
    }
  }
}
`;


export const GET_USER_BY_ID = gql`
query getUsers($userId: uuid!) {
  users_by_pk(id: $userId) {
    id
    name
    phone
    profile_picture_url
    role
    status
    delivery_name
    delivery_phone
    delivery_address
    disabled
    dealer {
      id
      name
      phone
      address
      city_name
      township_name
    }
  }
}
`;

export const GET_PRODUCT_CATEGORIES = gql`
query getProductCategories {
  product_categories {
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

export const GET_PRODUCTS = gql`
query getProducts {
  products {
    id
    title
    serial_number
    product_medias(order_by: {updated_at: desc}, limit: 1) {
      id
      media_url
    }
    product_category {
      id
      title
      image_url
    }
    brand {
      id
      title
      image_url
    }
    price
    sku
    disabled
  }
}

`
