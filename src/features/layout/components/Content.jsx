import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Paper,
  Avatar
} from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LaunchIcon from '@mui/icons-material/Launch';

export const Content = () => {
  const productos = [
    { id: 1, nombre: "Nike Air Max 95", precio: "$450.000", imagen: "/img/95.jpeg" },
    { id: 2, nombre: "Tn lisboa", precio: "$380.000", imagen: "/img/tn.jpg" },
    { id: 3, nombre: "Airmax fire", precio: "$720.000", imagen: "/img/fire.jpeg" },
  ];

  return (
    <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh', width: '100%' }}>
      
      <Box
        sx={{
          height: "60vh",
          backgroundImage: "url('/img/hero.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          mb: 4
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.7)", p: 6, borderRadius: 6, maxWidth: '600px', mx: 2 }}>
          <Typography variant="h3" fontWeight="900">COLECCIÓN 2026</Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>Lo mejor de la cultura sneaker en un solo lugar.</Typography>
          <Button
            component={Link}
            to="/Articles"
            variant="contained"
            size="large"
            sx={{ background: "linear-gradient(90deg, #00c6ff, #0072ff)", fontWeight: "bold", borderRadius: '50px', px: 4 }}
          >
            Comprar Ahora
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* SECCIÓN PRODUCTOS - CENTRADOS */}
        <Paper elevation={0} sx={{ p: 5, borderRadius: 6, mb: 4, bgcolor: 'white', textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="800" mb={4} color="#003366">
            LO MÁS <span style={{ color: '#007bff' }}>DESTACADO</span>
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {productos.map((producto) => (
              <Grid item xs={12} sm={4} key={producto.id}>
                <Card sx={{ 
                  borderRadius: 5, 
                  boxShadow: 'none', 
                  border: '1px solid #f0f0f0',
                  '&:hover': { transform: 'scale(1.02)', transition: '0.3s' }
                }}>
                  <CardMedia component="img" height="200" image={producto.imagen} />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold">{producto.nombre}</Typography>
                    <Typography variant="h6" color="#007bff" fontWeight="900">{producto.precio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* SECCIÓN INFO - ITEMS CENTRADOS INTERNAMENTE */}
        <Grid container spacing={3} sx={{ mb: 10 }} justifyContent="center">
          {[
            { title: "Quiénes Somos", text: "Expertos en cultura urbana y sneakers auténticos.", icon: <GroupsIcon /> },
            { title: "Qué Vendemos", text: "Drops exclusivos y siluetas limitadas de Nike.", icon: <ShoppingBagIcon /> },
            { title: "Historia", text: "Referentes del mercado desde el año 2020.", icon: <HistoryEduIcon /> }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  display: 'flex', 
                  flexDirection: 'column', // Centrado vertical/columna
                  alignItems: 'center',    // Centrado horizontal de items
                  textAlign: 'center',     // Centrado de texto
                  borderRadius: 6,
                  border: '1px solid #e0e6ed',
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0 10px 20px rgba(0,0,0,0.05)', borderColor: '#007bff' }
                }}
              >
                <Avatar sx={{ bgcolor: '#e3f2fd', width: 65, height: 65, mb: 2 }}>
                  {React.cloneElement(item.icon, { sx: { fontSize: 35, color: '#007bff' } })}
                </Avatar>
                <Typography variant="h5" fontWeight="bold" color="#003366" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
     <section>
{/* SECCIÓN FINAL CON LINK */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Paper 
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 6, // Consistente con tus otros Paper
            textAlign: 'center',
            background: 'linear-gradient(135deg, #003366 0%, #007bff 100%)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 2 }}>
GITPAGE          </Typography>

          <Button
            component={Link}
            to="https://github.com/juanjomira12/vercel"
            variant="contained"
            endIcon={<LaunchIcon />}
            sx={{
              bgcolor: 'white',
              color: '#003366',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              borderRadius: '50px',
              '&:hover': {
                bgcolor: '#f0f0f0',
                transform: 'translateY(-3px)',
                transition: '0.3s'
              }
            }}
          >
Ve y mira el repositorio          </Button>
        </Paper>
      </Container>
     </section>

    </Box>
  );
};