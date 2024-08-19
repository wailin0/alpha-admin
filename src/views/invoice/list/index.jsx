// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import InvoiceListTable from './InvoiceListTable'
import InvoiceCard from './InvoiceCard'
import { useQuery, useSuspenseQuery } from '@apollo/client'
import { GET_ALL_INVOICES } from '@/graphql/queries'

const InvoiceList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <InvoiceCard />
      </Grid>
      <Grid item xs={12}>
        <InvoiceListTable />
      </Grid>
    </Grid>
  )
}

export default InvoiceList
