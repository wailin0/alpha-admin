'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import OrderDetailHeader from './ProductDetailHeader'
import ProductDetailsCard from './ProductDetailsCard'
import ShippingActivity from './ShippingActivityCard'
import CustomerDetails from './CustomerDetailsCard'
import ShippingAddress from './ShippingAddressCard'

import BillingAddress from './BillingAddressCard'
import { useParams } from 'next/navigation'
import { ORDERS_BY_ID, PRODUCTS_BY_ID } from '@/graphql/queries'
import { useSuspenseQuery } from '@apollo/client'

const ProductDetails = () => {
  const { id } = useParams()
  const { data } = useSuspenseQuery(PRODUCTS_BY_ID, { variables: { id: id } })
  const productData = data?.products_by_pk

  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <OrderStatusAction productData={productData} />
      </Grid> */}
      {/* <Grid item xs={12}>
        <OrderDetailHeader productData={productData} />
      </Grid> */}
      <Grid item xs={12} md={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ProductDetailsCard productData={productData} />
          </Grid>
          {/* <Grid item xs={12}>
            <ShippingActivity productData={productData} />
          </Grid> */}
        </Grid>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomerDetails productData={productData} />
          </Grid>
          <Grid item xs={12}>
            <ShippingAddress productData={productData} />
          </Grid>
          <Grid item xs={12}>
            <BillingAddress />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  )
}

export default ProductDetails
