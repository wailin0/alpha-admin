'use client'

// React Imports
import { Fragment, useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'
import { useMutation } from '@apollo/client'
import {
  CHANGE_USER_ACTIVATE,
  CHANGE_USER_STATUS,
  DELETE_NEW_CAT,
  DELETE_NEWS,
  DELETE_ORDERS,
  DELETE_PRODUCT_BRAND,
  DELETE_PRODUCT_CAT
} from '@/graphql/mutations'
import { useParams } from 'next/navigation'
import { GET_USER_BY_ID, PRODUCT_BRANDs, PRODUCT_CATS } from '@/graphql/queries'

const ConfirmationDialog = ({ open, setOpen, type, dataId, data, setData }) => {
  const { userId } = useParams()
  const [deletOrder] = useMutation(DELETE_ORDERS)
  const [changeUserStatus] = useMutation(CHANGE_USER_STATUS, { refetchQueries: [GET_USER_BY_ID] })
  const [changeUserActivate] = useMutation(CHANGE_USER_ACTIVATE, { refetchQueries: [GET_USER_BY_ID] })
  const [deleteCat] = useMutation(DELETE_PRODUCT_CAT)
  const [deleteBrand] = useMutation(DELETE_PRODUCT_BRAND)
  const [deletNew] = useMutation(DELETE_NEWS)
  const [deleteNewCat] = useMutation(DELETE_NEW_CAT)
  // States
  const [secondDialog, setSecondDialog] = useState(false)
  const [userInput, setUserInput] = useState(false)

  // Vars
  const Wrapper = type === 'disable-account' ? 'div' : Fragment

  const handleSecondDialogClose = () => {
    setSecondDialog(false)
    setOpen(false)
  }

  const handleConfirmation = async value => {
    // if (value === true) {
    //   try {
    //     if (type === 'disable-account') {
    //       const reslt = await changeUserStatus({
    //         variables: {
    //           id: userId,
    //           data: {
    //             status: 'disable'
    //           }
    //         }
    //       })
    //     }
    //     if (type === 'verified-account') {
    //       await changeUserActivate({ variables: { user_id: userId, is_verified: true } })
    //     }
    //     if (type === 'unverified-account') {
    //       await changeUserActivate({ variables: { user_id: userId, is_verified: false } })
    //     }
    //     if (type === 'deleteProductCategory') {
    //       await deleteCat({ variables: { id: dataId } })
    //       setData(data.filter(item => item.id !== dataId))
    //     }
    //     if (type === 'deleteProductBrand') {
    //       await deleteBrand({ variables: { id: dataId } })
    //       setData(data.filter(item => item.id !== dataId))
    //     }
    //     if (type === 'deletePost') {
    //       await deletNew({ variables: { id: dataId } })
    //       setData(data.filter(item => item.id !== dataId))
    //     }
    //     if (type === 'deleteNewCategory') {
    //       await deleteNewCat({ variables: { id: dataId } })
    //       setData(data.filter(item => item.id !== dataId))
    //     }

    //     setUserInput(value)
    //     setOpen(false)
    //   } catch (e) {
    //     console.log('Error', e)
    //   }
    // } else {
    //   setOpen(false)
    // }

    await deletNew({ variables: { id: dataId } })
    setData(data.filter(item => item.id !== dataId))
    setUserInput(value)
    setSecondDialog(true)
    setOpen(false)
  }

  return (
    <>
      <Dialog fullWidth maxWidth='xs' open={open} onClose={() => setOpen(false)}>
        <DialogContent className='flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'>
          <i className='ri-error-warning-line text-[88px] mbe-6 text-warning' />
          <Wrapper
            {...(type === 'disable-account' && {
              className: 'flex flex-col items-center gap-2'
            })}
          >
            <Typography variant='h4'>
              {/* {type === 'verified-account' && 'Are you sure you want to activate your account?'} */}
              {type === 'unsubscribe' && 'Are you sure to cancel your subscription?'}
              {type === 'disable-account' && 'Are you sure?'}
              {type === 'delete-order' && 'Are you sure?'}
              {type === 'delete-customer' && 'Are you sure?'}
            </Typography>
            {type === 'verified-account' && (
              <Typography color='text.primary'>Are you sure you want to activate your account?</Typography>
            )}
            {type === 'unverified-account' && (
              <Typography color='text.primary'>Are you sure you want to unactivate your account?</Typography>
            )}
            {type === 'disable-account' && (
              <Typography color='text.primary'>You won&#39;t be able to revert user!</Typography>
            )}

            {type === 'deleteProductCategory' && (
              <Typography color='text.primary'>Are you sure you want to delete?</Typography>
            )}
            {type === 'deleteProductBrand' && (
              <Typography color='text.primary'>Are you sure you want to delete?</Typography>
            )}
            {type === 'deletePost' && <Typography color='text.primary'>Are you sure you want to delete?</Typography>}
            {type === 'deleteNewCategory' && (
              <Typography color='text.primary'>Are you sure you want to delete?</Typography>
            )}
          </Wrapper>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={() => handleConfirmation(true)}>
            {type === 'disable-account'
              ? 'Yes, Suspend User!'
              : type === 'deleteProductCategory'
                ? 'Yes, Delete Category!'
                : type === 'deleteProductBrand'
                  ? 'Yes, Delete Brand'
                  : type === 'delete-customer'
                    ? 'Yes, Delete Customer!'
                    : type === 'verified-account'
                      ? 'Yes , User activate'
                      : type === 'unverified-account'
                        ? 'Yes, User Unactivate'
                        : type === 'deletePost'
                          ? 'Yes, Delete Post'
                          : type === 'deleteNewCategory'
                            ? 'Yes, Delete Category'
                            : 'Yes'}
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              handleConfirmation(false)
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={secondDialog} onClose={handleSecondDialogClose}>
        <DialogContent className='flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'>
          <i
            className={classnames('text-[88px] mbe-6', {
              'ri-checkbox-circle-line': userInput,
              'text-success': userInput,
              'ri-close-circle-line': !userInput,
              'text-error': !userInput
            })}
          />
          <Typography variant='h4' className='mbe-2'>
            {userInput
              ? `${type === 'disable-account' ? 'User Disabled' : type === 'verified-account' ? 'User Activate' : type === 'deleteProductCategory' ? 'Delete Category' : type === 'unverified' ? 'User Unactivate' : type === 'deleteProductBrand' ? 'Delete Brand' : type === 'deletePost' ? 'Delete Post' : type === 'deleteNewCategory' ? 'Delete New Category' : 'yes'}`
              : 'Cancelled'}
          </Typography>
          <Typography color='text.primary'>
            {userInput ? (
              <>
                {type === 'verified-account' && 'Your account has been activated successfully.'}
                {type === 'unverified-account' && 'Your account has been unactivated successfully.'}
                {type === 'disable-account' && 'User has been disabled.'}
                {type === 'deleteProductCategory' && 'Your Category has been deleted successfully.'}
                {type === 'deleteNewCategory' && 'Your New Category has been deleted successfully.'}
                {type === 'deleteProductBrand' && 'Your Category has been deleted successfully.'}
                {type === 'deletePost' && 'Your Post has been deleted successfully.'}
                {type === 'delete-customer' && 'Your customer removed successfully.'}
              </>
            ) : (
              <>
                {console.log('use input ', userInput)}
                {type === 'verified-account' && 'User activation Cancelled!'}
                {type === 'unverified-account' && 'User inactivation Cancelled!'}
                {type === 'disable-account' && 'Cancelled Disabled :)'}
                {type === 'deleteProductCategory' && 'Category Deletion Cancelled'}
                {type === 'deleteNewCategory' && 'New Category Deletion Cancelled'}
                {type === 'deleteProductBrand' && 'Brand Deletion Cancelled'}
                {type === 'deletePost' && 'Post Deletion Cancelled!'}

                {type === 'delete-customer' && 'Customer Deletion Cancelled'}
              </>
            )}
          </Typography>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ConfirmationDialog
