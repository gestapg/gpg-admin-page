import React, { useContext } from 'react';
import { Box, IconButton, useTheme, InputBase } from '@mui/material';
import { ColorModeContext, tokens } from '../../themes';
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
  Search as SearchIcon,
} from '@mui/icons-material';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box maxWidth='100vw' display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box
        display='flex'
        backgroundColor={colors.primary[400]}
        borderRadius='3px'
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
