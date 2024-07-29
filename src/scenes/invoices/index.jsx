import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../themes';
import { mockDataInvoices } from '../../data/mockData';
import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'cost',
      cellClassName: 'cost-column--cell',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  return (
    <Box m='20px'>
      <Header title='INVOICES' subtitle='List of Invoices Balances' />
      <Box
        m='30px 0 0 20px'
        height='75vh'
        // display='flex'
        maxWidth='96%'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderTop: 'none !important',
            borderBottom: 'none !important',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .cost-column--cell': {
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScrollerContent': {
            backgroundColor: colors.primary[400],
            borderBottom: 'none',
            borderTop: 'none',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
