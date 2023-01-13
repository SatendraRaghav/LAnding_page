import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { actions, DataContext } from '../Reducer';
import { useContext } from 'react';
import { Avatar, Icon } from '@mui/material';
import logo from "./Image/ImpaktApps4.jpg"



export default function Header() {
  const { dispatch, state } = useContext(DataContext);
  const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor:"white",
  color:"black",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(state.drawerBoolean && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
  const handleDrawerOpen = () => {
     dispatch({type:actions.isDrawerOpen})
  };


  return (
    <Box sx={{ display: 'flex',height:"100px" }}>
       
      <CssBaseline />
      <AppBar position="fixed" open={state.drawerBoolean}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              fontWeight:"bolder",
              ...(state.drawerBoolean && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src = {logo} alt="impakt_logo" width={120} height={40}/>
          <Box component={"div"} sx={{flexGrow:1}}></Box>
          <Typography >Raghav</Typography>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              > 
                <AccountCircle >
                </AccountCircle>
              </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}