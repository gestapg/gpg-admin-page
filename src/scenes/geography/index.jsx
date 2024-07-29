import React from 'react';
import { Box, colors, useTheme } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { tokens } from '../../themes';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width='96%' m='20px'>
      <Header title='Geography Chart' subtitle='Simple Geography Chart' />
      <Box
        height='75vh'
        border={`1px solid ${colors.grey[100]}`}
        borderRadius='4px'
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
