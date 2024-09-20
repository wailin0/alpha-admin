// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const NewsAddHeader = ({ handleDiscardProduct, handleEditNews }) => {
  return (
    <div className='flex flex-wrap sm:items-center justify-between max-sm:flex-col gap-6'>
      <div>
        <Typography variant='h4' className='mbe-1'>
          Edit a new Post
        </Typography>
        {/* <Typography>Orders placed across your store</Typography> */}
      </div>
      <div className='flex flex-wrap max-sm:flex-col gap-4'>
        <Button variant='outlined' color='error' onClick={handleDiscardProduct}>
          Cancel
        </Button>

        <Button variant='contained' onClick={handleEditNews}>
          Update
        </Button>
      </div>
    </div>
  )
}

export default NewsAddHeader
