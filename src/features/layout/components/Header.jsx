import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export const Header = () => {

  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { text: "Inicio", path: "/" },
    { text: "Artículos", path: "/Articles" },
    { text: "Ofertas", path: "/Offers" },
    { text: "Favoritos", path: "/Myfavorities" },
    { text: "Myaccount", path: "/Myaccount" },
    { text: "Carrito", path: "/Carrito" }
  ];

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)"
      }}
    >
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          MIRA SHOP
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box sx={{ width: 250 }}>
                <List>
                  {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton
                        component={NavLink}
                        to={item.path}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          menuItems.map((item) => (
            <Button
              key={item.text}
              component={NavLink}
              to={item.path}
              sx={{
                color: "white",
                "&.active": { borderBottom: "2px solid #00c6ff" }
              }}
            >
              {item.text}
            </Button>
          ))
        )}

      </Toolbar>
    </AppBar>
  );
};