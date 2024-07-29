import React, { useState } from 'react';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from 'react-pro-sidebar';
import { Box, IconButton, useTheme, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../themes';
import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
  GraphicEqOutlined,
  ViewKanbanOutlined,
  NoteAltOutlined,
} from '@mui/icons-material';
import { mockKanbanData } from '../../data/mockData';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={<Link to={to} />}
      active={selected === title}
      icon={icon}
      color={colors.grey[100]}
      onClick={() => setSelected(title)}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      // display='flex'
      // height='100%'
      sx={{
        [`.${sidebarClasses.root}`]: {
          borderRightWidth: '0px !important',
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        backgroundColor={`${colors.primary[400]}`}
        transitionDuration={500}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            minHeight: '100vh',
          },
        }}
      >
        <Menu
          // menuItemStyles={{
          //   button: ({ active, level, disabled, isSubmenu, open }) => {
          //     if (open) {
          //       return {
          //         backgroundColor: `${colors.primary[500]}`,
          //       };
          //     }
          //   },
          // }}
          rootStyles={{
            [`.${menuClasses.button}:hover`]: {
              color: '#868dfb',
              backgroundColor: `${colors.primary[400]}`,
            },
          }}
        >
          {/* LOGO and MENU ICON */}
          <MenuItem
            icon={
              isCollapsed ? (
                <MenuOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
              ) : undefined
            }
            style={{
              margin: '10px 0px 20px 0px',
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                <MenuItem>
                  <Typography variant='h3'>ADMIN</Typography>
                </MenuItem>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USERS */}
          {!isCollapsed && (
            <Box
              mb='25px'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Box>
                <img
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src={`../../assets/user.png`}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{
                    m: '10x 0 0 0',
                  }}
                >
                  GESTA PG
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* Menu ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10'}>
            <Item
              title='Dashboard'
              to='/gpg-admin-page'
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: `15px 0 5px ${isCollapsed ? '23px' : '30px'}` }}
            >
              Data
            </Typography>
            <Item
              title='Manage Team'
              to='/gpg-admin-page/team'
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Contacts Information'
              to='/gpg-admin-page/contacts'
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Invoices Balances'
              to='/gpg-admin-page/invoices'
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: `15px 0 5px ${isCollapsed ? '22px' : '30px'}` }}
            >
              Pages
            </Typography>
            <Item
              title='Profile Form'
              to='/gpg-admin-page/form'
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title='Kanban'
              to='/kanban'
              icon={<ViewKanbanOutlined />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <SubMenu
              rootStyles={{
                ['.' + menuClasses.subMenuContent]: {
                  backgroundColor: `${colors.primary[400]}`,
                },
              }}
              icon={<ViewKanbanOutlined />}
              label='Kanban'
            >
              {mockKanbanData.boards.map((board, idx) => (
                <Item
                  key={idx}
                  title={board.name}
                  to={`/gpg-admin-page/kanban/${board.name
                    .split(' ')
                    .join('_')
                    .toLowerCase()}`}
                  selected={selected}
                  setSelected={setSelected}
                  icon={<NoteAltOutlined />}
                />
              ))}
            </SubMenu>

            <Item
              title='Calendar'
              to='/gpg-admin-page/calendar'
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='FAQ Page'
              to='/gpg-admin-page/faq'
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: `15px 0 5px ${isCollapsed ? '20px' : '30px'}` }}
            >
              Charts
            </Typography> */}
            <SubMenu
              rootStyles={{
                ['.' + menuClasses.subMenuContent]: {
                  backgroundColor: `${colors.primary[400]}`,
                },
              }}
              icon={<GraphicEqOutlined />}
              label='Charts'
            >
              <Item
                title='Bar chart'
                to='/gpg-admin-page/bar'
                selected={selected}
                setSelected={setSelected}
                icon={<BarChartOutlined />}
              />
              <Item
                title='Pie chart'
                to='/gpg-admin-page/pie'
                selected={selected}
                setSelected={setSelected}
                icon={<PieChartOutlineOutlined />}
              />
              <Item
                title='Line chart'
                to='/gpg-admin-page/line'
                selected={selected}
                setSelected={setSelected}
                icon={<TimelineOutlined />}
              />
              <Item
                title='Geography chart'
                to='/gpg-admin-page/geography'
                selected={selected}
                setSelected={setSelected}
                icon={<MapOutlined />}
              />
            </SubMenu>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
