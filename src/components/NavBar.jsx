import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deepPurple } from "@mui/material/colors";
import { Stack } from "@mui/material";

// const pages = ['Dashboard', 'New Blog', 'About'];

function NavBar() {
  const { currentUser, setCurrentUser } = React.useContext(AuthContext);
  const pages = [
    ["Dashboard", "/"],
    ["New Blog", "/new-blog"],
    ["About", "/about"],
  ];
  const settings = [
    currentUser?.user?.id ? ["My Blogs", "my-blog"] : "",
    currentUser?.user?.id ? ["Profile", "profile"] : "",
    currentUser?.user?.id ? ["Logout", "auth"] : "",
    currentUser?.user?.id ? "" : ["Login", "auth"],
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log(currentUser);

  return (
    <AppBar position="relative">
      {/* <AppBar position="sticky"> */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{ backgroundColor: currentUser?.page == page[0] ? "red" : "" }}
                  key={page[0]}
                  onClick={() => {
                    handleCloseNavMenu();
                    setCurrentUser({
                      ...currentUser,
                      "page": page[0],
                    });
                  }}
                >
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Link to={page[1]}>{page[0]}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page[0]}
                onClick={() => {
                  handleCloseNavMenu();
                  setCurrentUser({
                    ...currentUser,
                    "page": page[0],
                  });
                }}
                sx={{ my: 2, backgroundColor:currentUser?.page == page[0] ? "red" : "", color: "white", display: "block",marginLeft:1 }}
              >
                <Link to={page[1]}>{page[0]}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={`Open settings for ${currentUser?.user?.username}`}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}

                <Stack direction="row" marginRight={2} sx={{}}>
                  {/* <Tooltip title={currentUser?.user?.username} arrow> */}
                  <div style={{ cursor: "pointer" }}>
                    <Avatar
                      sx={{
                        bgcolor: deepPurple[500],
                        transition: "ease 700ms",
                        "&:hover": {
                          color: "gray",
                          bgcolor: deepPurple[100],
                        },
                      }}
                    >
                      {currentUser?.user?.username
                        ? currentUser?.user?.username[0].toUpperCase()
                        : "Who"}
                    </Avatar>
                  </div>
                  {/* </Tooltip> */}
                </Stack>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) =>
                setting === "" ? (
                  ""
                ) : (
                  // currentUser?.user?.id && setting[0] == 'Login' ?
                  <MenuItem 
                  sx={{ backgroundColor: currentUser?.page == setting[0] ? "red" : "" }}
                  key={i} onClick={() => {
                    handleCloseNavMenu();
                    setCurrentUser({
                      ...currentUser,
                      "page": setting[0],
                    });
                  }}>
                    {/* <Typography textAlign="center">{setting}</Typography> */}
                    <Link to={setting[1]}>{setting[0]}</Link>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
