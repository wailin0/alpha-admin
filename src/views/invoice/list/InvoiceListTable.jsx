'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import TablePagination from '@mui/material/TablePagination'

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
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { useSuspenseQuery } from '@apollo/client'
import { GET_ALL_INVOICES, INVOICE_STATUS } from '@/graphql/queries'
import { Avatar } from '@mui/material'
import { CHANGE_INVOICE_STATUS } from '@/graphql/mutations'
import { invoiceStatusColor } from '@components/helper/StatusColor'
import { CSVLink } from 'react-csv'
import { orderStatusColor } from '@components/helper/StatusColor'
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

// Column Definitions
const columnHelper = createColumnHelper()
const headers = [
  { label: 'Invoice Number', key: 'invoice_number' },
  { label: 'UserName', key: 'name' },
  { label: 'Balance', key: 'balance' },
  { label: 'Total', key: 'total' },
  { label: 'Status', key: 'status' },
  { label: 'Created At', key: 'created_at' },
  { label: 'Updated At', key: 'updated_at' }
]
const InvoiceListTable = () => {
  const { data: invoiceDatas } = useSuspenseQuery(GET_ALL_INVOICES)
  const { data: invoiceStatus } = useSuspenseQuery(INVOICE_STATUS)

  // // States
  const [status, setStatus] = useState('')
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[invoiceDatas.invoices])
  const [filteredData, setFilteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang: locale } = useParams()

  const temp = filteredData.map(item => ({
    ...item,
    username: item.user.name,
    created_at: new Date(item.created_at).toLocaleString(),
    updated_at: new Date(item.updated_at).toLocaleString()
  }))

  const columns = useMemo(
    () => [
      // {
      //   id: 'select',
      //   header: ({ table }) => (
      //     <Checkbox
      //       {...{
      //         checked: table.getIsAllRowsSelected(),
      //         indeterminate: table.getIsSomeRowsSelected(),
      //         onChange: table.getToggleAllRowsSelectedHandler()
      //       }}
      //     />
      //   ),
      //   cell: ({ row }) => (
      //     <Checkbox
      //       {...{
      //         checked: row.getIsSelected(),
      //         disabled: !row.getCanSelect(),
      //         indeterminate: row.getIsSomeSelected(),
      //         onChange: row.getToggleSelectedHandler()
      //       }}
      //     />
      //   )
      // },
      columnHelper.accessor('invoice_number', {
        header: 'Invoice Number',
        cell: ({ row }) => (
          <Typography
            component={Link}
            href={getLocalizedUrl(`/invoice/preview/${row.original.id}`, locale)}
            color='primary'
          >{`${row.original.invoice_number}`}</Typography>
        )
      }),

      columnHelper.accessor('user.name', {
        header: 'Client',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <Avatar src={row.original.user.profile_picture_url} width='100px' height='100px' />
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.user.name}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('user.user_role.role_name', {
        header: 'User Role',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.user?.user_role?.role_name}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('balance', {
        header: 'Balance',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.balance.toLocaleString()}
              </Typography>
            </div>
          </div>
        )
      }),
      // columnHelper.accessor('discount ', {
      //   header: 'Discount Amt',
      //   cell: ({ row }) => (
      //     <div className='flex items-center gap-3'>
      //       {console.log('discount amt ', row.original.discount)}
      //       <div className='flex flex-col'>
      //         <Typography className='font-medium' color='text.primary'>
      //           {row.original.discount.toLocaleString()}
      //         </Typography>
      //       </div>
      //     </div>
      //   )
      // }),
      columnHelper.accessor('total', {
        header: 'Total',
        cell: ({ row }) => <Typography>{`${row.original.total.toLocaleString()}`}</Typography>
      }),
      columnHelper.accessor('created_at', {
        header: 'Date',
        cell: ({ row }) => <Typography>{row.original.created_at.substring(0, 10)}</Typography>
      }),
      columnHelper.accessor('status', {
        header: 'Payment Status',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Chip
                label={row.original.status}
                color={invoiceStatusColor[row.original.status]}
                style={{ textTransform: 'capitalize' }}
                variant='tonal'
                size='small'
              />
            </div>
          </div>
        )
      }),
      columnHelper.accessor('order.order_status.name', {
        header: 'Delivery Status',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Chip
                label={row.original?.order?.order_status?.name}
                color={orderStatusColor[row.original.order?.order_status?.name]}
                style={{ textTransform: 'capitalize' }}
                variant='tonal'
                size='small'
              />
            </div>
          </div>
        )
      }),

      columnHelper.accessor('action', {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex items-center'>
            {/* <IconButton onClick={() => setData(data?.filter(invoice => invoice.id !== row.original.id))}>
              <i className='ri-delete-bin-7-line text-textSecondary' />
            </IconButton> */}
            <IconButton>
              <Link href={getLocalizedUrl(`/invoice/preview/${row.original.id}`, locale)} className='flex'>
                <i className='ri-eye-line text-textSecondary' />
              </Link>
            </IconButton>
            {/* <OptionMenu
              iconButtonProps={{ size: 'medium' }}
              iconClassName='text-textSecondary'
              options={[
                {
                  text: 'Download',
                  icon: 'ri-download-line',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                },
                {
                  text: 'Edit',
                  icon: 'ri-pencil-line',
                  href: getLocalizedUrl(`/invoice/edit/${row.original.id}`, locale),
                  linkProps: {
                    className: 'flex items-center is-full plb-2 pli-4 gap-2 text-textSecondary'
                  }
                },
                {
                  text: 'Duplicate',
                  icon: 'ri-file-copy-line',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                }
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

  const getAvatar = params => {
    const { avatar, name } = params

    if (avatar) {
      return <CustomAvatar src={avatar} skin='light' size={34} />
    } else {
      return (
        <CustomAvatar skin='light' size={34}>
          {getInitials(name)}
        </CustomAvatar>
      )
    }
  }

  useEffect(() => {
    const filteredData = data?.filter(invoice => {
      if (status && invoice.status.toLowerCase().replace(/\s+/g, '-') !== status) return false

      return true
    })

    setFilteredData(filteredData)
  }, [status, data, setFilteredData])

  return (
    <Card>
      <CardContent className='flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center'>
        <div className='flex flex-col sm:flex-row max-sm:is-full items-center gap-4'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Invoice'
            className='max-sm:is-full min-is-[200px]'
          />
          <FormControl fullWidth size='small' className='min-is-[175px]'>
            <InputLabel id='status-select'>Invoice Status</InputLabel>
            <Select
              fullWidth
              id='select-status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              label='Invoice Status'
              labelId='status-select'
            >
              <MenuItem value=''>none</MenuItem>
              {invoiceStatus.invoice_status.map(s => (
                <MenuItem value={s.name} key={s.id}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
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
            filename={`all-invoices-${new Date().toISOString()}.csv`}
          >
            Export
          </CSVLink>
        </Button>
      </CardContent>
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
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' }
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default InvoiceListTable
