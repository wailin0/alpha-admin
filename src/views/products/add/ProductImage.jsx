'use client'

// // React Imports
// import { useEffect, useState } from 'react'

// // MUI Imports
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import Typography from '@mui/material/Typography'
// import { styled } from '@mui/material/styles'
// import { uploadFile } from '@/utils/helper'

// // Third-party Imports
// import { useDropzone } from 'react-dropzone'

// // Component Imports
// import Link from '@components/Link'
// import CustomAvatar from '@core/components/mui/Avatar'

// // Styled Component Imports
// import AppReactDropzone from '@/libs/styles/AppReactDropzone'

// import { DELETE_PRODUCT_IMAGE, IMGAE_UPLOAD, PRODUCT_IMAGE_UPLOAD } from '@/graphql/mutations'
// import { useMutation } from '@apollo/client'
// import { useApp } from '@/app/ApolloWrapper'
// import { set } from 'js-cookie'

// // Styled Dropzone Component
// const Dropzone = styled(AppReactDropzone)(({ theme }) => ({
//   '& .dropzone': {
//     minHeight: 'unset',
//     padding: theme.spacing(12),
//     [theme.breakpoints.down('sm')]: {
//       paddingInline: theme.spacing(5)
//     },
//     '&+.MuiList-root .MuiListItem-root .file-name': {
//       fontWeight: theme.typography.body1.fontWeight
//     }
//   }
// }))

// const ProductImage = ({ productId, productData }) => {
//   const [files, setFiles] = useState([])
//   const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
//   const [uploadImage] = useMutation(PRODUCT_IMAGE_UPLOAD)
//   const [deleteProductImage] = useMutation(DELETE_PRODUCT_IMAGE)
//   const { setGlobalMsg, loading, setLoading } = useApp()
//   // Hooks

//   useEffect(() => {
//     setFiles(...[productData.product_medias])
//   }, [productId])

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: acceptedFiles => {
//       setFiles(prevFiles => [...prevFiles, ...acceptedFiles.map(file => Object.assign(file))])
//       handleUploadImage(acceptedFiles)
//     }
//   })

//   const handleUploadImage = async image => {
//     try {
//       setLoading(true)
//       const fileUploadUrl = await getFileUploadUrl({
//         variables: {
//           content_type: 'image',
//           folder: 'products'
//         }
//       })
//       const uploadedFileUrl = await uploadFile(image[0], fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image')
//       await uploadImage({
//         variables: {
//           data: {
//             product_id: productId,
//             media_type: 'image',
//             media_url: uploadedFileUrl
//           }
//         }
//       })
//       setLoading(false)
//       setGlobalMsg('✅ Image Upload Successful')
//     } catch (e) {
//       console.log('Image upload error', e)
//     }
//   }

//   const renderFilePreview = file => {
//     if (file?.type?.startsWith('image')) {
//       return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
//     } else {
//       // return <i className='ri-file-text-line' />
//       return <img width={38} height={38} alt={file.name} src={file.media_url} />
//     }
//   }

//   const handleRemoveFile = async file => {
//     await deleteProductImage({ variables: { id: file?.id } })
//     const uploadedFiles = files
//     const filtered = uploadedFiles.filter(i => i.name !== file.name)
//     setFiles([...filtered])
//     setGlobalMsg('✅ Delete Successful')
//   }

//   const fileList = files.map(file => (
//     <ListItem key={file.id} className='pis-4 plb-3'>
//       <div className='file-details'>
//         <div className='file-preview'>{renderFilePreview(file)}</div>
//         {/* <div>
//           <Typography className='file-name font-medium' color='text.primary'>
//             {file.name}
//           </Typography>
//           <Typography className='file-size' variant='body2'>
//             {Math.round(file.size / 100) / 10 > 1000
//               ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
//               : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
//           </Typography>
//         </div> */}
//       </div>
//       <IconButton onClick={() => handleRemoveFile(file)}>
//         <i className='ri-close-line text-xl' />
//       </IconButton>
//     </ListItem>
//   ))

//   const handleRemoveAllFiles = () => {
//     setFiles([])
//   }

//   return (
//     <Dropzone>
//       <Card>
//         <CardHeader
//           title='Product Image'
//           // action={
//           //   <Typography component={Link} color='primary' className='font-medium'>
//           //     Add media from URL
//           //   </Typography>
//           // }
//           sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
//         />
//         <CardContent>
//           <div {...getRootProps({ className: 'dropzone' })}>
//             <input {...getInputProps()} />
//             <div className='flex items-center flex-col gap-2 text-center'>
//               <CustomAvatar variant='rounded' skin='light' color='secondary'>
//                 <i className='ri-upload-2-line' />
//               </CustomAvatar>
//               <Typography variant='h4'>Drag and Drop Your Image Here.</Typography>
//               <Typography color='text.disabled'>or</Typography>
//               <Button variant='outlined' size='small' loading={loading}>
//                 Browse Image
//               </Button>
//             </div>
//           </div>
//           {files.length ? (
//             <>
//               <List>{fileList}</List>
//               {/* <div className='buttons'>
//                 <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
//                   Remove All
//                 </Button>
//                 <Button variant='contained'>Upload Files</Button>
//               </div> */}
//             </>
//           ) : null}
//         </CardContent>
//       </Card>
//     </Dropzone>
//   )
// }

// export default ProductImage

'use client'
// React Imports
import { useState } from 'react'

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
import { uploadFile } from '@/utils/helper'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
import AppReactDropzone from '@/libs/styles/AppReactDropzone'

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

const ProductImage = ({ files, setFiles }) => {
  const [productMedia, setProductMedia] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)
  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image'))
      if (imageFiles.length !== acceptedFiles.length) {
        setErrorMessage('Only image files are allowed.')
      } else {
        setErrorMessage('')
      }

      setFiles(imageFiles.map(file => Object.assign(file)))
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else {
      return <i className='ri-file-text-line' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map(file => (
    <ListItem key={file.name} className='pis-4 plb-3'>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name font-medium' color='text.primary'>
            {file.name}
          </Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <i className='ri-close-line text-xl' />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  const handleMultiFileChange = e => {
    const files = e.target.files
    const urls = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const url = URL.createObjectURL(file)
      urls.push({ file: url, type: file.type.split('/')[0] })
    }
    setProductMedia(urls)
  }

  return (
    <Dropzone>
      <Card>
        <CardHeader title='Product Image' sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }} />
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
          {errorMessage && (
            <Typography color='error' variant='body2'>
              {errorMessage}
            </Typography>
          )}
          {files.length ? (
            <>
              <List>{fileList}</List>
              <div className='buttons'>
                <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                  Remove All
                </Button>
                {/* <Button variant='contained'>Upload Files</Button> */}
              </div>
            </>
          ) : null}
        </CardContent>
      </Card>
    </Dropzone>
  )
}

export default ProductImage
