import {useState,useEffect}  from 'react';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageIcon from '@mui/icons-material/Language';

// ROUTER
import {Link} from "react-scroll";
// translate
import { useTranslation } from 'react-i18next';



const pages = ['Home','About', 'Skills',"Certificates", 'Projects','Contact'];
const settings = ['Arabic', 'English'];

function Navbar1() {

  const { t, i18n } = useTranslation();
  const isAr = i18n.language ==="ar";



    useEffect(()=>{
      const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
      document.documentElement.lang = i18n.language;
    },[i18n.language])

   

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const decoration = "<.../>"

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

   const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleChangeLanguage=(setting)=>{
    const langCode = setting === 'Arabic' ? 'ar' : 'en';
              localStorage.setItem('myApp_language', langCode);
              i18n.changeLanguage(langCode);
                   
                    
    handleCloseUserMenu()
  }

  
  

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl" >
        <Toolbar disableGutters > 
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mx: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
             
          >
            {decoration}
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
                {/* side menu  */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link className=" text-black hover:text-[#6366F1] font-semibold"offset={-80} to={page.toLowerCase()} smooth={true} duration={500}>{t(`navbar.${page}`)}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
           
          >
            LOGO
          </Typography>

          {/* navebar items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="justify-center items-center">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,mr:2, color: 'white', display: 'block',fontSize:isAr?"large":"12px" }}
              >
                <Link  className="hover:text-gray-100 text-gray-300 font-bold"  offset={-80} to={page.toLowerCase()} smooth={true} duration={500}>{t(`navbar.${page}`)}</Link>
                
              </Button>
            ))}
          </Box>
          {/* ==== navebar items ====*/}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Languages">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LanguageIcon sx={{fontSize: 30 , color:theme=>theme.palette.secondary.light}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>{handleChangeLanguage(setting)}}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar1;
