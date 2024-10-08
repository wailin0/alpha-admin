'use client'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

// Component Imports
import EditUserInfo from '@components/dialogs/edit-user-info'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import CustomAvatar from '@core/components/mui/Avatar'
import { useParams } from 'next/navigation'
import { useSuspenseQuery } from '@apollo/client'
import { GET_USER_BY_ID } from '@/graphql/queries'

// Vars

const UserDetails = () => {
  const { userId } = useParams()

  const { data } = useSuspenseQuery(GET_USER_BY_ID, { variables: { userId } })

  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card>
        <CardContent className='flex flex-col pbs-12 gap-6'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center justify-center flex-col gap-4'>
              <div className='flex flex-col items-center gap-4'>
                <CustomAvatar alt='user-profile' src='/images/avatars/1.png' variant='rounded' size={120} />
                <Typography variant='h5'>{data?.users_by_pk?.name}</Typography>
              </div>
              <Chip
                label={data.users_by_pk?.role}
                color={`${data.users_by_pk?.role === 'consumer' ? 'warning' : 'info'}`}
                size='small'
                variant='tonal'
              />
            </div>
            {/* <div className='flex items-center justify-around flex-wrap gap-4'>
              <div className='flex items-center gap-4'>
                <CustomAvatar variant='rounded' color='primary' skin='light'>
                  <i className='ri-check-line' />
                </CustomAvatar>
                <div>
                  <Typography variant='h5'>1.23k</Typography>
                  <Typography>Task Done</Typography>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <CustomAvatar variant='rounded' color='primary' skin='light'>
                  <i className='ri-star-smile-line' />
                </CustomAvatar>
                <div>
                  <Typography variant='h5'>568</Typography>
                  <Typography>Project Done</Typography>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <Typography variant='h5'>Details</Typography>
              <Chip
                label={data.users_by_pk?.status}
                color={`${data.users_by_pk?.status === 'pending' ? 'primary' : data.users_by_pk?.status === 'verified' ? 'success' : 'error'}`}
                size='small'
                // variant='tonal'
              />
            </div>
            <Divider className='mlb-4' />
            <div className='flex flex-col gap-2'>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Username :
                </Typography>
                <Typography>{data.users_by_pk?.name}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Phone :
                </Typography>
                <Typography>{data.users_by_pk?.phone}</Typography>
              </div>

              <Typography className='text-primary mt-4'>Delivery Information</Typography>
              <Divider />
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Delivery Name:
                </Typography>
                <Typography color='text.primary'>{data.users_by_pk?.delivery_name}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Delivery Phone :
                </Typography>
                <Typography color='text.primary'>{data.users_by_pk?.delivery_phone}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography className='font-medium' color='text.primary'>
                  Delivery Address :
                </Typography>
                <Typography color='text.primary'>{data.users_by_pk?.delivery_address}</Typography>
              </div>

              {data.users_by_pk?.role === 'dealer' && (
                <>
                  <Typography className='text-primary mt-4'>Dealer Information</Typography>
                  <Divider />
                  <div className='flex items-center flex-wrap gap-x-1.5'>
                    <Typography className='font-medium' color='text.primary'>
                      Shop Name :
                    </Typography>
                    <Typography color='text.primary'>{data.users_by_pk.dealer?.name}</Typography>
                  </div>
                  <div className='flex items-center flex-wrap gap-x-1.5'>
                    <Typography className='font-medium' color='text.primary'>
                      Shop Phone :
                    </Typography>
                    <Typography color='text.primary'>{data.users_by_pk.dealer?.phone}</Typography>
                  </div>
                  <div className='flex items-center flex-wrap gap-x-1.5'>
                    <Typography className='font-medium' color='text.primary'>
                      Shop Address :
                    </Typography>
                    <Typography color='text.primary'>{data.users_by_pk.dealer?.address}</Typography>
                  </div>
                  <div className='flex items-center flex-wrap gap-x-1.5'>
                    <Typography className='font-medium' color='text.primary'>
                      Shop City Name :
                    </Typography>
                    <Typography color='text.primary'>{data.users_by_pk.dealer?.city_name}</Typography>
                  </div>
                  <div className='flex items-center flex-wrap gap-x-1.5'>
                    <Typography className='font-medium' color='text.primary'>
                      Shop Township Name :
                    </Typography>
                    <Typography color='text.primary'>{data.users_by_pk.dealer?.township_name}</Typography>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            {/* <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Edit', 'primary', 'contained')}
              dialog={EditUserInfo}
              dialogProps={{ data: data.users_by_pk }}
            /> */}
            {data.users_by_pk?.status !== 'disable' ? (
              <OpenDialogOnElementClick
                element={Button}
                elementProps={buttonProps(`Disable`, `error`, 'outlined')}
                dialog={ConfirmationDialog}
                dialogProps={{ type: 'disable-account' }}
                data={data?.users_by_pk}
              />
            ) : (
              <OpenDialogOnElementClick
                element={Button}
                elementProps={buttonProps(`Enable`, `success`, 'outlined')}
                dialog={ConfirmationDialog}
                dialogProps={{ type: 'enable-account' }}
                data={data?.users_by_pk}
              />
            )}
            {data.users_by_pk?.role === 'dealer' && (
              <OpenDialogOnElementClick
                element={Button}
                elementProps={buttonProps(
                  `${data.users_by_pk?.status === 'verified' ? 'Unverify' : 'Verify'}`,
                  `${data.users_by_pk?.status === 'verified' ? 'error' : 'success'}`,
                  'outlined'
                )}
                dialog={ConfirmationDialog}
                dialogProps={{
                  type: `${data.users_by_pk?.status === 'verified' ? 'unverified-account' : 'verified-account'}`
                }}
                userData={data?.users_by_pk}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default UserDetails
