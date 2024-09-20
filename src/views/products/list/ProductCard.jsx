'use client'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const ProductCard = ({ count, title }) => {
  // Hooks
  const isBelowMdScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    // <Card>
    //   <CardContent>
    //     <Grid container spacing={6}>
    //       {data.map((item, index) => (
    //         <Grid
    //           item
    //           xs={12}
    //           sm={6}
    //           md={3}
    //           key={index}
    //           className={classnames({
    //             '[&:nth-of-type(odd)>div]:pie-6 [&:nth-of-type(odd)>div]:border-ie': isBelowMdScreen && !isSmallScreen,
    //             '[&:not(:last-child)>div]:pie-6 [&:not(:last-child)>div]:border-ie': !isBelowMdScreen
    //           })}
    //         >
    //           <div className='flex flex-col gap-1'>
    //             <div className='flex justify-between'>
    //               <div className='flex flex-col gap-1'>
    //                 <Typography>{item.title}</Typography>
    //                 <Typography variant='h4'>{item.value}</Typography>
    //               </div>
    //               <CustomAvatar variant='rounded' size={44}>
    //                 <i className={classnames(item.icon, 'text-[28px]')} />
    //               </CustomAvatar>
    //             </div>
    //             {item.change ? (
    //               <div className='flex items-center gap-2'>
    //                 <Typography>{`${item.desc} orders`}</Typography>
    //                 <Chip
    //                   variant='tonal'
    //                   label={`${item.change}%`}
    //                   size='small'
    //                   color={item.change > 0 ? 'success' : 'error'}
    //                 />
    //               </div>
    //             ) : (
    //               <Typography>{`${item.desc} orders`}</Typography>
    //             )}
    //           </div>
    //           {isBelowMdScreen && !isSmallScreen && index < data.length - 2 && (
    //             <Divider
    //               className={classnames('mbs-6', {
    //                 'mie-6': index % 2 === 0
    //               })}
    //             />
    //           )}
    //           {isSmallScreen && index < data.length - 1 && <Divider className='mbs-6' />}
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </CardContent>
    // </Card>
    <Card>
      <CardContent className='flex justify-between gap-1 '>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography color='text.primary' variant='h3'>
            {count}
          </Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography
              variant='h5'
              color={`${title === 'Active' ? 'green' : title === 'Brand' ? 'yellow' : title === 'Category' ? 'orange' : 'red'}`}
            >
              {title}
            </Typography>
          </div>
          {/* <Typography variant='body2'>subtitle</Typography> */}
        </div>
        <CustomAvatar skin='light' variant='rounded' size={42}>
          <i
            className={`${title === 'Active' ? 'ri-check-double-fill' : title === 'Brand' ? 'ri-store-3-fill' : title === 'Category' ? 'ri-discount-percent-fill' : 'ri-close-circle-fill'}`}
          />
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default ProductCard
