'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'
import { useSuspenseQuery } from '@apollo/client'
import { PRODUCT_BRANDs, PRODUCT_CATS } from '@/graphql/queries'
import { Checkbox, FormHelperText } from '@mui/material'

const ProductOrganize = ({ status, setStatus, brandId, setBrandId, catId, setCatId, errors, productData }) => {
  const { data: brands } = useSuspenseQuery(PRODUCT_BRANDs)
  const { data: cats } = useSuspenseQuery(PRODUCT_CATS)
  useEffect(() => {
    if (productData) {
      setBrandId(productData.brand.id)
      const selectedCategory = cats?.product_categories.find(cat => cat.id === productData.product_category.id)
      setCatId(selectedCategory.id || null)
    }
  }, [productData, cats])

  return (
    <Card>
      <CardHeader title='Organize' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          {brandId && (
            <FormControl fullWidth>
              <InputLabel>Select Product Brand</InputLabel>
              <Select
                label='Select Vendor'
                value={brandId}
                onChange={e => setBrandId(e.target.value)}
                error={errors?.brandId ? true : false}
                helperText={errors?.brandId}
              >
                {brands?.brands?.map((brand, index) => (
                  <MenuItem value={brand?.id} key={index}>
                    {brand?.title}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: 'red' }}>{errors?.brandId}</FormHelperText>
            </FormControl>
          )}
          {/* <FormControl fullWidth>
            <InputLabel>Select Status</InputLabel>
            <Select
              label='Select Vendor'
              value={status}
              onChange={e => setStatus(e.target.value)}
              error={errors?.stauts ? true : false}
              helperText={errors?.stauts}
            >
              <MenuItem value='true'>Enable</MenuItem>
              <MenuItem value='false'>Disable</MenuItem>
            </Select>
            <FormHelperText sx={{ color: 'red' }}>{errors?.stauts}</FormHelperText>
          </FormControl> */}

          {/* <div className='flex items-center gap-4'> */}

          <Autocomplete
            // multiple
            value={catId}
            onChange={(event, newValue) => {
              setCatId(newValue.id)
            }}
            // inputValue={inputValue}
            // onInputChange={(event, newInputValue) => {
            //   setInputValue(newInputValue)
            // }}
            className='overflow-y-auto h-[40vh]'
            id='checkboxes-tags-demo'
            options={cats?.product_categories || []}
            disableCloseOnSelect
            getOptionLabel={options => options?.title || ''}
            renderOption={(props, option, { selected }) => (
              <li {...props} key={option.id}>
                {/* <Checkbox style={{ marginRight: 8 }} checked={selected} /> */}
                {option.title}
              </li>
            )}
            renderInput={params => <TextField {...params} label='Category' placeholder='select category' />}
          />

          {/* <FormControl fullWidth>
              <InputLabel>Select Product Category</InputLabel>
              <Select
                label='Select Category'
                value={catId}
                onChange={e => setCatId(e.target.value)}
                error={errors?.catId ? true : false}
              >
                {cats?.product_categories?.map((cat, index) => (
                  <MenuItem value={cat?.id} key={index}>
                    {cat?.title}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: 'red' }}>{errors?.catId}</FormHelperText>
            </FormControl> */}

          {/* <CustomIconButton size='large' variant='outlined' color='primary' className='min-is-fit'>
              <i className='ri-add-line' />
            </CustomIconButton> */}

          {/* <FormControl fullWidth>
            <InputLabel>Select Collection</InputLabel>
            <Select label='Select Collection' value={collection} onChange={e => setCollection(e.target.value)}>
              <MenuItem value={`Men's Clothing`}>Men&apos;s Clothing</MenuItem>
              <MenuItem value={`Women's Clothing`}>Women&apos;s Clothing</MenuItem>
              <MenuItem value={`Kid's Clothing`}>Kid&apos;s Clothing</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Select Status</InputLabel>
            <Select label='Select Status' value={status} onChange={e => setStatus(e.target.value)}>
              <MenuItem value='Published'>Published</MenuItem>
              <MenuItem value='Inactive'>Inactive</MenuItem>
              <MenuItem value='Scheduled'>Scheduled</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth label='Enter Tags' placeholder='Fashion, Trending, Summer' /> */}
        </form>
      </CardContent>
    </Card>
  )
}

export default ProductOrganize
