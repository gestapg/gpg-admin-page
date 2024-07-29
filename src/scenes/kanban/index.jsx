import React from 'react';
import Header from '../../components/Header';
import { Box, useTheme, Button } from '@mui/material';
import { PlusOne } from '@mui/icons-material';
import { tokens } from '../../themes';
import { useParams } from 'react-router-dom';

const Kanban = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const param = useParams();
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header
          title={`${param.boardName.split('_').join(' ').toUpperCase()}`}
          subtitle='Create your to do list'
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <PlusOne
              sx={{
                marginRight: '10px',
              }}
            />
            Add a New Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Kanban;
