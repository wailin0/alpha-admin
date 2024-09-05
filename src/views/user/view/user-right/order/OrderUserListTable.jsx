'use client'

// React Imports
import { useState, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
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
import { orderStatusColor } from '@/components/helper/StatusColor'
import { orderStausIcon } from '@/components/helper/StatusIcon'
// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import { useSuspenseQuery } from '@apollo/client'
import { GET_ALL_INVOICES, GET_USER_BY_ID, ORDERS_TABS } from '@/graphql/queries'
import tableStyles from '@core/styles/table.module.css'
import { Chip } from '@mui/material'

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

// Column Definitions
const columnHelper = createColumnHelper()

const OrderUserListTable = () => {
  const { userId } = useParams()

  const { data: userIds } = useSuspenseQuery(GET_USER_BY_ID, {
    variables: { userId: userId }
  })

  const { data: orderTabs } = useSuspenseQuery(ORDERS_TABS, { variables: { user_id: userIds?.users_by_pk?.id } })

  // States
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[orderTabs.orders])
  const [globalFilter, setGlobalFilter] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)

  // Vars
  const open = Boolean(anchorEl)

  // Hooks
  const { lang: locale } = useParams()

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'Order Number',
        cell: ({ row }) => (
          <Typography
            component={Link}
            href={getLocalizedUrl(`/orders/details/${row.original.id}`, locale)}
            color='primary'
          >{`${row.original.order_number}`}</Typography>
        )
      }),

      columnHelper.accessor('total', {
        header: 'Total',
        cell: ({ row }) => <Typography>{`${row.original.total.toLocaleString()}`}</Typography>
      }),

      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ row }) => (
          // <Tooltip
          //   title={
          //     <div>
          //       <Typography variant='body2' component='span' className='text-inherit'>
          //         {row.original.status}
          //       </Typography>
          //       <br />
          //       <Typography variant='body2' component='span' className='text-inherit'>
          //         Receiver Name:
          //       </Typography>
          //       {row.original.receiver_name}
          //       <br />
          //       <Typography variant='body2' component='span' className='text-inherit'>
          //         Due Date:
          //       </Typography>
          //       {row.original.created_at.substring(0, 10)}
          //     </div>
          //   }
          // >
          //   <CustomAvatar skin='light' color={orderStatusColor[row.original.status]} size={28}>
          //     <i className={classnames('text-base', orderStausIcon[row.original.status])} />
          //   </CustomAvatar>
          // </Tooltip>
          <div className='flex items-center gap-3'>
            <Chip
              variant='tonal'
              label={row.original.status}
              size='small'
              color={orderStatusColor[row.original.status]}
              className='capitalize'
            />
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
              <Link href={getLocalizedUrl(`/orders/details/${row.original.id}`, locale)} className='flex'>
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
                    className: classnames('flex items-center bs-[40px] plb-2 pli-4 is-full gap-2 text-textSecondary')
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
    []
  )

  const table = useReactTable({
    data: data,
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

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <CardHeader
        title='Order List'
        sx={{ '& .MuiCardHeader-action': { m: 0 } }}
        // action={
        //   <>
        //     <Button
        //       variant='contained'
        //       aria-haspopup='true'
        //       onClick={handleClick}
        //       aria-expanded={open ? 'true' : undefined}
        //       endIcon={<i className='ri-arrow-down-s-line' />}
        //       aria-controls={open ? 'user-view-overview-export' : undefined}
        //     >
        //       Export
        //     </Button>
        //     <Menu open={open} anchorEl={anchorEl} onClose={handleClose} id='user-view-overview-export'>
        //       <MenuItem onClick={handleClose} className='uppercase'>
        //         pdf
        //       </MenuItem>
        //       <MenuItem onClick={handleClose} className='uppercase'>
        //         xlsx
        //       </MenuItem>
        //       <MenuItem onClick={handleClose} className='uppercase'>
        //         csv
        //       </MenuItem>
        //     </Menu>
        //   </>
        // }
      />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} {...(header.id === 'action' && { className: 'is-24' })}>
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
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, table.getState().pagination.pageSize)
              .map(row => {
                return (
                  <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} {...(cell.id.includes('action') && { className: 'is-24' })}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
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

export default OrderUserListTable
