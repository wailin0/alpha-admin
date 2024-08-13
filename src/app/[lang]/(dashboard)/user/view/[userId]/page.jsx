// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import UserLeftOverview from '@views/user/view/user-left-overview'
import UserRight from '@views/user/view/user-right'

// Data Imports
import {getClient} from "@/app/ApolloClient";
import {GET_USER_BY_ID} from "@/graphql/queries";

const OverViewTab = dynamic(() => import('@views/user/view/user-right/overview'))
const SecurityTab = dynamic(() => import('@views/user/view/user-right/security'))
const NotificationsTab = dynamic(() => import('@views/user/view/user-right/notifications'))

// Vars
const tabContentList = data => ({
  overview: <OverViewTab/>,
  security: <SecurityTab/>,
  notifications: <NotificationsTab/>,
})

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/pricing` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} */
const UserViewTab = async ({params}) => {
  const {data} = await getClient().query({query: GET_USER_BY_ID, variables: {userId: params.userId}});

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={4} md={5}>
        <UserLeftOverview userData={data.users_by_pk}/>
      </Grid>
      <Grid item xs={12} lg={8} md={7}>
        <UserRight tabContentList={tabContentList(data)}/>
      </Grid>
    </Grid>
  )
}

export default UserViewTab
