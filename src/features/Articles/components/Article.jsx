import * as React from 'react';
import {
  Container, Grid, Card, CardContent, CardMedia, 
  Typography, Button, Chip, Stack, Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradeIcon from '@mui/icons-material/Grade';

export const Article = () => {
  const tenis = [
    { id: 1, nombre: 'Air max 95 neon', precio: 450000, stock: true, imagen: './img/95.jpeg', descripcion: 'modelo iconico de la silueta airmax 95.', hp: 'Original Edition' },
    { id: 2, nombre: 'Nike dunk low pro sb', precio: 200000, stock: true, imagen: './img/dunk.jpeg', descripcion: 'Zapatilla icónica de la marca Nike.', hp: 'SB Pro' },
    { id: 3, nombre: 'Airmax Fire', precio: 720000, stock: false, imagen: './img/fire.jpeg', descripcion: 'Par futurista, silueta airmax clásica de nike.', hp: 'Futuristic' },
    { id: 4, nombre: 'Jordan 11 gamma blue', precio: 800000, stock: true, imagen: './img/jordan11.webp', descripcion: 'Zapatilla icónica de la marca Jordan.', hp: 'Futuristic' },
    { id: 5, nombre: 'Jordan 3', precio: 950000, stock: false, imagen: './img/jordan3webp.webp', descripcion: 'Zapatilla icónica creada para jugar baloncesto.', hp: 'Futuristic' },
    { id: 6, nombre: 'Jordan 8', precio: 550000, stock: false, imagen: './img/jordan8.webp', descripcion: 'Look innovador, con un diseño único y audaz.', hp: 'Futuristic' },
    { id: 7, nombre: 'Nike DN8', precio: 1085000, stock: true, imagen: './img/dn8.jfif', descripcion: 'Silueta de nike bastante futurista.', hp: 'Futuristic' },
    { id: 8, nombre: 'Jordan 5', precio: 1250000, stock: true, imagen: './img/jordannegros.jpg', descripcion: 'Zapatilla que innovó en la comodidad.', hp: 'Futuristic' },
    { id: 9, nombre: 'Nike nocta drake', precio: 3000000, stock: false, imagen: './img/nocta.jfif', descripcion: 'Par único, colaboración con drake.', hp: 'Futuristic' }
  ];

  // --- LÓGICA DEL CARRITO ---
  const agregarCarrito = (producto) => {
    const carrito = JSON.parse(localStorage.getItem("MyCart")) || [];
    const existe = carrito.find(item => item.id === producto.id);

    if (!existe) {
      const productoParaCarrito = { ...producto, img: producto.imagen };
      carrito.push(productoParaCarrito);
      localStorage.setItem("MyCart", JSON.stringify(carrito));
      window.dispatchEvent(new Event('storage'));
      alert(`${producto.nombre} añadido al carrito 🛒`);
    } else {
      alert("Este producto ya está en tu carrito");
    }
  };

  const agregarFavorito = (producto) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.find(item => item.id === producto.id);
    if (!existe) {
      const productoFav = { ...producto, img: producto.imagen };
      favoritos.push(productoFav);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Añadido a favoritos ⭐");
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 10, maxWidth: 'lg' }}>
      <Typography variant="h3" fontWeight="900" sx={{ color: '#003366', mb: 6, textAlign: 'center' }}>
        SNEAKERS <span style={{ color: '#007bff' }}>SHOP</span>
      </Typography>

      {/* Grid configurado para centrar y mostrar 3 columnas en escritorio (md=4) */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {tenis.map((sneaker) => (
          <Grid item xs={12} sm={6} md={4} key={sneaker.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: '100%',
              maxWidth: 360, // Mantiene un tamaño elegante
              borderRadius: 4,
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': { 
                transform: 'translateY(-10px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
              }
            }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={sneaker.imagen}
                  alt={sneaker.nombre}
                  sx={{ objectFit: 'cover' }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1a1a1a', minHeight: '60px', lineHeight: 1.2, mb: 1 }}>
                  {sneaker.nombre}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {sneaker.descripcion}
                </Typography>

                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h5" sx={{ color: '#007bff', fontWeight: 800 }}>
                      ${sneaker.precio.toLocaleString()}
                    </Typography>
                    <Chip
                      label={sneaker.stock ? 'En Stock' : 'Agotado'}
                      color={sneaker.stock ? 'success' : 'error'}
                      variant="filled"
                      size="small"
                      sx={{ fontWeight: 'bold', mt: 0.5 }}
                    />
                  </Box>
                </Box>
              </CardContent>

              <Stack spacing={1.5} sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={!sneaker.stock}
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => agregarCarrito(sneaker)}
                  sx={{ 
                    bgcolor: '#007bff', 
                    fontWeight: 'bold',
                    py: 1.2,
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#0056b3' }
                  }}
                >
                  Agregar al carrito
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  startIcon={<GradeIcon />}
                  onClick={() => agregarFavorito(sneaker)}
                  sx={{ 
                    fontWeight: 'bold', 
                    py: 1.2,
                    borderRadius: 2,
                    textTransform: 'none'
                  }}
                >
                  Favoritos
                </Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};