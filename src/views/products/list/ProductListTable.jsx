'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Component Imports
import TableFilters from './TableFilters'
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { GET_PRODUCTS } from '@/graphql/queries'
import Avatar from '@mui/material/Avatar'
import { DELETE_PRODUCT } from '@/graphql/mutations'
import { useApp } from '@/app/ApolloWrapper'
import Alert from '@/components/helper/Alert'
import { CSVLink } from 'react-csv'
const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Vars
const productCategoryObj = {
  Accessories: { icon: 'ri-headphone-line', color: 'error' },
  'Home Decor': { icon: 'ri-home-6-line', color: 'info' },
  Electronics: { icon: 'ri-computer-line', color: 'primary' },
  Shoes: { icon: 'ri-footprint-line', color: 'success' },
  Office: { icon: 'ri-briefcase-line', color: 'warning' },
  Games: { icon: 'ri-gamepad-line', color: 'secondary' }
}

const productStatusObj = {
  false: { title: 'Enabled', color: 'success' },
  true: { title: 'Disabled', color: 'error' }
}

// Column Definitions
const columnHelper = createColumnHelper()
const headers = [
  { label: 'Product Name', key: 'title' },
  { label: 'Product Brand', key: 'title' },
  { label: 'Product Category', key: 'title' },
  { label: 'Price', key: 'price' },
  { label: 'Serial Number', key: 'serial_number' },
  { label: 'Created At', key: 'created_at' },
  { label: 'Updated At', key: 'updated_at' }
]
const ProductListTable = () => {
  const { setGlobalMsg } = useApp()
  const { data: productData } = useSuspenseQuery(GET_PRODUCTS, { fetchPolicy: 'network-only' })
  const [deletProduct] = useMutation(DELETE_PRODUCT)
  // States
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[productData.products])
  const [filteredData, setFilteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang: locale } = useParams()

  const temp = filteredData.map(item => ({
    ...item,
    title: item.brand.title,
    title: item.product_category.title,
    created_at: new Date(item.created_at).toLocaleString(),
    updated_at: new Date(item.updated_at).toLocaleString()
  }))
  const handleDelete = async id => {
    try {
      await deletProduct({ variables: { id: id } })
      setGlobalMsg('✅ Delete Successful')
      setData(data?.filter(item => item.id !== id))
    } catch (e) {
      setGlobalMsg('❌ Delete Error')
      console.log('Delete Error', e)
    }
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Product',
        cell: ({ row }) => (
          <div className='flex items-center gap-4 '>
            <img
              src={row.original?.product_medias[0]?.media_url}
              width={38}
              height={38}
              className='rounded bg-actionHover'
            />

            <div className='flex flex-col w-60 text-wrap'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.title}
              </Typography>
              <Typography variant='body2'>{row.original.brand.title}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('product_category.title', {
        header: 'Category',

        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <Avatar src={row.original.product_category.image_url} />
            <Typography color='text.primary'>{row.original.product_category.title}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('serial_number', {
        header: 'Serial No.',
        cell: ({ row }) => <Typography>{row.original.serial_number ? row.original.serial_number : '-'}</Typography>
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        cell: ({ row }) => <Typography>{row.original.price.toLocaleString()}</Typography>
      }),
      columnHelper.accessor('created_at', {
        header: 'Date',
        cell: ({ row }) => <Typography>{row.original.created_at.substring(0, 10)}</Typography>
      }),
      columnHelper.accessor('disabled', {
        header: 'Status',
        cell: ({ row }) => (
          <Chip
            label={row.original.disabled === true ? 'Disabled' : 'Enabled'}
            variant='tonal'
            color={productStatusObj[row.original.disabled].color}
            size='small'
          />
        )
      }),
      columnHelper.accessor('actions', {
        header: 'Actions',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton size='small'>
              <Link href={getLocalizedUrl(`/products/edit/${row.original.id}`, locale)} className='flex'>
                <i className='ri-edit-box-line text-[22px] ' />
              </Link>
            </IconButton>
            <IconButton>
              <Link href={getLocalizedUrl(`/products/details/${row.original.id}`, locale)} className='flex'>
                <i className='ri-eye-line text-textSecondary' />
              </Link>
            </IconButton>

            {/* <OptionMenu
              iconButtonProps={{ size: 'medium' }}
              iconClassName='text-textSecondary text-[22px]'
              options={[
                { text: 'Download', icon: 'ri-download-line', menuItemProps: { className: 'gap-2' } },
                {
                  text: 'Delete',
                  icon: 'ri-delete-bin-7-line',
                  menuItemProps: {
                    className: 'gap-2',
                    onClick: () => setData(data?.filter(product => product.id !== row.original.id))
                  }
                },
                { text: 'Duplicate', icon: 'ri-stack-line', menuItemProps: { className: 'gap-2' } }
              ]}
            /> */}
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, filteredData]
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <>
      <Card>
        <CardHeader title='Filters' className='pbe-4' />
        <TableFilters setData={setFilteredData} productData={data} />
        <Divider />
        <div className='flex justify-between flex-col items-start sm:flex-row sm:items-center gap-y-4 p-5'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Product'
            className='max-sm:is-full'
          />
          <div className='flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto'>
            <Button
              color='secondary'
              variant='outlined'
              startIcon={<i className='ri-upload-2-line text-xl' />}
              className='max-sm:is-full'
            >
              <CSVLink
                className='exportBtn'
                data={temp}
                headers={headers}
                filename={`all-products-${new Date().toISOString()}.csv`}
              >
                Export
              </CSVLink>
            </Button>
            <Button
              variant='contained'
              component={Link}
              href={getLocalizedUrl('/products/add', locale)}
              startIcon={<i className='ri-add-line' />}
              className='max-sm:is-full is-auto'
            >
              Add Product
            </Button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            className={classnames({
                              'flex items-center': header.column.getIsSorted(),
                              'cursor-pointer select-none': header.column.getCanSort()
                            })}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: <i className='ri-arrow-up-s-line text-xl' />,
                              desc: <i className='ri-arrow-down-s-line text-xl' />
                            }[header.column.getIsSorted()] ?? null}
                          </div>
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {table.getFilteredRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    No data available
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, table.getState().pagination.pageSize)
                  .map(row => {
                    return (
                      <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                      </tr>
                    )
                  })}
              </tbody>
            )}
          </table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          className='border-bs'
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
          onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
        />
      </Card>
      <Alert />
    </>
  )
}

export default ProductListTable
