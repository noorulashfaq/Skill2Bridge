import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [{ to: "/", label: "Home" }];

  // const handleSubMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleSubMenuClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#001F3F", zIndex: theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#E8C27D" }}
            >
              Skill2Bridge
            </Typography>
            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ color: "#FFD700" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <>
                {navLinks.map((link, index) => (
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={1000}
                    onClick={() => setDrawerOpen(false)} // Ensures closing on click
                    style={{ color: "#FFD700", cursor: "pointer", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* <Typography
                  onClick={handleSubMenuOpen}
                  style={{ cursor: "pointer", color: "#E8C27D", display: "inline-flex", alignItems: "center" }}
                >
                  Programmes <ArrowDropDownIcon />
                </Typography> */}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#0B1F3B", width: 250 },
        }}
      >
        <List>
          {navLinks.map((link, index) => (
            <ListItem button key={index} onClick={() => setDrawerOpen(false)}>
              <ListItemText>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={1000}
                  style={{ color: "#FFD700" }}
                >
                  {link.label}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
    </>
  );
}

export default Navigation;
