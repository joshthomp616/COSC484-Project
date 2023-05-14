import { AppBar, Toolbar, Typography, Container, Box, IconButton, 
  Menu, MenuList, MenuItem, Popper, Paper, Button, Tooltip, Avatar, TextField, ClickAwayListener } from '@mui/material';
import * as React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { color } from '@mui/system';

const pages = [
  ['Services', 'services'], 
  ['Make Appointment', 'appointment'], 
  ['About Us', 'about'],['Contact Us','contact']
];
const settings = ['Account', 'Logout'];



//ResponsiveAppBar Template taken and modified from Material UI App Bar example
//https://mui.com/material-ui/react-app-bar/
function ResponsiveAppBar() {
const navigate = useNavigate();
// const history = useHistory();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const loginRef = React.useRef(null);
  const [signedIn, processLogin] = React.useState(false);
  const [showLogin, showLoginFunction] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if(page[0] !== undefined) {
      navigate("/"+page[1]);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //TODO: TEMPORARY
  const handleSignUpClick = () => {
    navigate("/login");
  }

  const handleOpenLogin = () => {
  //   if (signedIn) {
  //     // if already signed in, navigate to account settings page
  //     history.push('/account');
  //   } else {
  //     // if not signed in, navigate to login page
  //     history.push('/login');
  //   }
    showLoginFunction((prev) => !prev);
    if(showLogin) {
      processLogin((prev) => !prev);
    }
  }
  

  const handleCloseLogin = (event) => {
    showLoginFunction((prev) => !prev);
    
  }

  const handleLogout = (event) => {
    setAnchorElUser(null);
    processLogin((prev) => !prev)
  }

  return (
    <>
    <AppBar ref={loginRef} position="static" sx={{bgcolor: 'primary.main', color: 'black.main'}}>
        <Container maxWidth="x1">
            <Toolbar disableGutters>
              {/* Company name for full display */}
              <DriveEtaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'black.main',
                  textDecoration: 'none',
                }}
              >
      
               AUTO SPA
              </Typography>
              {/*Drop down menu for samll display*/}
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
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {
                    pages.map(
                      (page) => 
                      (<MenuItem key={page[0]} onClick={() => handleCloseNavMenu(page)}>
                        <Typography textAlign="center">{page[0]}</Typography>
                      </MenuItem>)
                    )
                  }
                </Menu>
              </Box>
              <DriveEtaIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              {/*Company name for small display */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 0,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                AUTO SPA 
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {
                  pages.map((page) => (
                    <Button
                      key={page[0]}
                      onClick={() => handleCloseNavMenu(page)}
                      sx={{ my: 2, color: 'black.main', display: 'block' }}
                    >
                      {page[0]}
                    </Button>))
                }
              </Box>
              {/*Login / profile components */}
              <Box sx={{ flexGrow: 0 }}>
                {signedIn ?
                <Tooltip title="Open settings"> 
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp"/>
                  </IconButton>
                </Tooltip>
                 : !showLogin 
                 ?<Box sx={{ display: 'flex', flexDirection: 'row', ml: 0}}>
                  <Button
                    variant='contained'
                    onClick={handleSignUpClick}
                    sx = {{
                      my: 2,
                      bgcolor: 'primary.darker',
                      color: 'white.main',
                      frontWeight: 'bold', 
                      display: 'block',
                      mr: 2
                    }}
                  >
                    SignUp
                  </Button>
                  <Button 
                    variant="contained"
                    onClick={handleOpenLogin}
                    sx={{
                    my: 2,
                    bgcolor: 'primary.darker',
                    color:'white.main',
                    fontWeight: 'bold', 
                    display: 'block'
                    }}
                  >
                  Login
                  </Button> 
                  </Box>
                  :
                  <Box>
                    <Button
                    variant="contained"
                    onClick={handleOpenLogin}
                    sx={{
                    my: 2,
                    bgcolor: 'primary.darker',
                    color:'white.main',
                    fontWeight: 'bold', 
                    display: 'block'
                    }}
                    >
                    Submit
                    </Button>
                    <Popper
                      open={showLogin}
                      anchorEl={loginRef.current}
                      placement='bottom-end'
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleCloseLogin}>
                          <MenuList>
                            <MenuItem>
                              <TextField required label="Username"/>
                            </MenuItem>
                            <MenuItem>
                              <TextField required label="Passowrd"/>
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Popper>
                  </Box>
                  } 
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
                <MenuItem onClick={() => navigate("/account")}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
            </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;