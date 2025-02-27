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
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { to: "home-section", label: "Home" },
    { to: "about-section", label: "About" },
    { to: "admission-section", label: "Admission-Form" },
    // { to: "contact-section", label: "Contact" },
  ];

  const submenuLinks = [
    { to: "bvoc-section", label: "Diploma" },
    { to: "programmes-section", label: "UG & PG" },
  ];

  const handleSubMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#001F3F", zIndex: theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#E8C27D" }}>
              Skill2Bridge
            </Typography>
            {isMobile ? (
              <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ color: "#FFD700" }}>
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <>
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    smooth={true}
                    duration={1000}
                    style={{ cursor: "pointer", color: "#E8C27D", marginRight: 20 }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Typography
                  onClick={handleSubMenuOpen}
                  style={{ cursor: "pointer", color: "#E8C27D", display: "inline-flex", alignItems: "center" }}
                >
                  Programmes <ArrowDropDownIcon />
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleSubMenuClose}
                  MenuListProps={{ style: { backgroundColor: "#001F3F", color: "#E8C27D" } }}
                >
                  {submenuLinks.map((link, index) => (
                    <MenuItem key={index} onClick={handleSubMenuClose} sx={{ color: "#E8C27D" }}>
                      <Link to={link.to} smooth={true} duration={1000} style={{ color: "#E8C27D" }}>
                        {link.label}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#0B1F3B", width: 250 } }}
      >
        <List>
          {navLinks.map((link, index) => (
            <ListItem button key={index} onClick={() => setDrawerOpen(false)}>
              <ListItemText>
                <Link to={link.to} smooth={true} duration={1000} style={{ color: "#FFD700" }}>
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
