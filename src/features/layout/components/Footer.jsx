import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        py: 5
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Logo / descripción */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              MIRA SHOP
            </Typography>

            <Typography variant="body2">
              Tu tienda online moderna con las mejores ofertas y productos exclusivos.
            </Typography>
          </Grid>

          {/* Enlaces */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Enlaces
            </Typography>

            <Link href="/" color="inherit" underline="hover" display="block">
              Inicio
            </Link>

            <Link href="/article" color="inherit" underline="hover" display="block">
              Artículos
            </Link>

            <Link href="/offers" color="inherit" underline="hover" display="block">
              Ofertas
            </Link>
          </Grid>

          {/* Redes sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Síguenos
            </Typography>

            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>

            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>

            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
          </Grid>

        </Grid>

        {/* Copyright */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} MIRA SHOP - Todos los derechos reservados
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};