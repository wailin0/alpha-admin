'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
import AppReactDropzone from '@/libs/styles/AppReactDropzone'
import { useMutation } from '@apollo/client'
import { IMGAE_UPLOAD } from '@/graphql/mutations'

// Styled Dropzone Component
const Dropzone = styled(AppReactDropzone)(({ theme }) => ({
  '& .dropzone': {
    minHeight: 'unset',
    padding: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      paddingInline: theme.spacing(5)
    },
    '&+.MuiList-root .MuiListItem-root .file-name': {
      fontWeight: theme.typography.body1.fontWeight
    }
  }
}))

const NewsImage = ({ files, setFiles, newData, isImageChange, setIsImageChange }) => {
  const [errorMessage, setErrorMessage] = useState('')
  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: acceptedFiles => {
      setIsImageChange(true)
      const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image'))

      if (imageFiles.length !== acceptedFiles.length) {
        setErrorMessage('Only image files are allowed.')
      } else {
        setErrorMessage('') // Clear error if only images are dropped
      }
      setFiles(imageFiles.map(file => Object.assign(file)))
    }
  })

  // Render File Preview
  const renderFilePreview = file => {
    if (isImageChange && file instanceof File) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else if (newData?.image_url) {
      return <img width={38} height={38} alt='image' src={newData.image_url} />
    } else {
      return <Typography>No image available</Typography>
    }
  }

  const handleRemoveFile = () => {
    setFiles([])
    setIsImageChange(false)
  }

  const handleRemoveAllFiles = () => {
    setFiles([])
    setIsImageChange(false)
  }

  return (
    <Dropzone>
      <Card>
        <CardHeader
          title='Product Image'
          // action={
          //   <Typography component={Link} color='primary' className='font-medium'>
          //     Add media from URL
          //   </Typography>
          // }
          sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
        />
        <CardContent>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div className='flex items-center flex-col gap-2 text-center'>
              <CustomAvatar variant='rounded' skin='light' color='secondary'>
                <i className='ri-upload-2-line' />
              </CustomAvatar>
              <Typography variant='h4'>Drag and Drop Your Image Here.</Typography>
              <Typography color='text.disabled'>or</Typography>
              <Button variant='outlined' size='small'>
                Browse Image
              </Button>
            </div>
          </div>

          {/* Show error message if there is one */}
          {errorMessage && (
            <Typography color='error' variant='body2'>
              {errorMessage}
            </Typography>
          )}

          <List>
            <ListItem className='pis-4 plb-3'>
              <div className='file-details'>
                {/* Render file preview */}
                <div className='file-preview'>
                  {files.length > 0 ? renderFilePreview(files[0]) : renderFilePreview(null)}
                </div>
                {/* {files.length > 0 && (
                  <div>
                    <Typography className='file-name font-medium' color='text.primary'>
                      {files[0]?.name}
                    </Typography>
                    <Typography className='file-size' variant='body2'>
                      {Math.round(files[0].size / 100) / 10 > 1000
                        ? `${(Math.round(files[0].size / 100) / 10000).toFixed(1)} mb`
                        : `${(Math.round(files[0].size / 100) / 10).toFixed(1)} kb`}
                    </Typography>
                  </div>
                )} */}
              </div>
              {files.length > 0 && (
                <IconButton onClick={() => handleRemoveFile(files[0])}>
                  <i className='ri-close-line text-xl' />
                </IconButton>
              )}
            </ListItem>
          </List>
          <div className='buttons'>
            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
              Remove All
            </Button>
          </div>
        </CardContent>
      </Card>
    </Dropzone>
  )
}

export default NewsImage
