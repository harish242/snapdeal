import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom'
import { CartState } from './Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../firebase';
import { useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState} from 'react'
// import {CartState} from '../component/Home'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const getUserName=()=>{
  const userData = localStorage.getItem('user1');
  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      return parsedData;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
    }
  }
  return [];
}

export default function Navbar() {
  const{setUser,user,setSelectProducts,setTotalSelected}=CartState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
const {totalSelected,filterdata,setFilterData,value,setInput,navigate}=CartState()
const [user1,setUser1]=useState(()=>getUserName());
const userNamed = user
if(userNamed){
localStorage.setItem('user1',JSON.stringify(userNamed))
 
}





const handleChangeInput=(e)=>{
  setInput(e.target.value)
  setSelectProducts('')

}


  // const navigate=useNavigate()
  const SignOutq=()=>{ 
   
    auth.signOut().then(()=>{
      console.log('successfully signedout')
    }).catch((error)=>{
      console.log('error signout',error)
    })  
}
// console.log("line 84 Navbar",value)



  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogout=()=>{
    SignOutq()
    setUser('')
    setTotalSelected('')
    localStorage.setItem('cart','')
localStorage.setItem('user1','')

      }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // const user1="harish"

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><span>{user}</span></MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={totalSelected} color="error">
          <Link to='/cart' style={{color:''}}>
            <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={()=>setUser(prev=>'')}
        >
              {/* <Link to='/'> */}

          <AccountCircle />
          {/* </Link> */}
        </IconButton>
        {/* <p>Logout</p> */}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#e40046',paddingTop:'18px', position: 'fixed',zIndex:'2' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Link to='/home'> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },cursor:'pointer' }}
            onClick={()=>{navigate('/')}}
          >
            {/* SnapDeal */}
            <div style={{overflowClipMargin:'content-box',overflow: 'clip',height:'38px',width:'200px',objectFit: 'cover',position:'relative',top:'0px'}}>
            <img src='https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_logotype.png' style={{width:'150px',verticalAlign: 'middle'}} />
            </div>
          </Typography>
          {/* </Link> */}
          
          <Search style={{color:'white'}} >
            <SearchIconWrapper >
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChangeInput}
              style={{backgroundColor:'ButtonShadow',height:'30px',borderRadius:'5px',color:'black'}}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={totalSelected} color="error">
                <Link to='/cart' style={{color:'white'}}>
                <ShoppingCartIcon/>
                </Link>
                
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <Link to='/'> */}
              <AccountCircle style={{color:'white'}}/>
              {/* </Link> */}
              
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}