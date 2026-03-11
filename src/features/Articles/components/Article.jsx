import * as React from 'react';
import {
  Container, Grid, Card, CardContent, CardMedia, 
  Typography, Button, Chip, Stack 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradeIcon from '@mui/icons-material/Grade';

export const Article = () => {
  const tenis = [
    {
      id: 1,
      nombre: 'Air max 95 neon',
      precio: 450000,
      stock: true,
      imagen: './img/95.jpeg',
      descripcion: 'modelo iconico de la silueta airmax 95.',
      hp: 'Original Edition' // Agregué esto para que coincida con lo que espera tu carrito
    },
    {
      id: 2,
      nombre: 'Nike dunk low pro sb',
      precio: 200000,
      stock: true,
      imagen: './img/dunk.jpeg',
      descripcion: 'Zapatilla icónica de la marca Nike.',
      hp: 'SB Pro'
    },
    {
      id: 3,
      nombre: 'Airmax Fire',
      precio: 720000,
      stock: false,
      imagen: './img/fire.jpeg',
      descripcion: 'Par futurista,silueta airmax claisca de nike.',
      hp: 'Futuristic'
    },
     {
      id: 3,
      nombre: 'Airmax Fire',
      precio: 720000,
      stock: false,
      imagen: './img/fire.jpeg',
      descripcion: 'Par futurista,silueta airmax claisca de nike.',
      hp: 'Futuristic'
    },
     {
      id: 3,
      nombre: 'Airmax Fire',
      precio: 720000,
      stock: false,
      imagen: './img/fire.jpeg',
      descripcion: 'Par futurista,silueta airmax claisca de nike.',
      hp: 'Futuristic'
    },
     {
      id: 3,
      nombre: 'Airmax Fire',
      precio: 720000,
      stock: false,
      imagen: './img/fire.jpeg',
      descripcion: 'Par futurista,silueta airmax claisca de nike.',
      hp: 'Futuristic'
    },
     {
      id: 3,
      nombre: 'Airmax Fire',
      precio: 720000,
      stock: false,
      imagen: './img/fire.jpeg',
      descripcion: 'Par futurista,silueta airmax claisca de nike.',
      hp: 'Futuristic'
    },
     {
      id: 3,
      nombre: 'Airmax Fire',
      precio: 720000,
      stock: false,
      imagen: './img/fire.jpeg',
      descripcion: 'Par futurista,silueta airmax claisca de nike.',
      hp: 'Futuristic'
    },
     {
      id: 3,
      nombre: 'Airmax Fire',
      precio: 720000,
      stock: false,
      imagen: './img/fire.jpeg',
      descripcion: 'Par futurista,silueta airmax claisca de nike.',
      hp: 'Futuristic'
    }
  ];

  // --- LÓGICA DEL CARRITO ---
  const agregarCarrito = (producto) => {
    // 1. Obtener lo que ya hay en el carrito (o un array vacío)
    const carrito = JSON.parse(localStorage.getItem("MyCart")) || [];

    // 2. Revisar si ya existe para no duplicar (opcional)
    const existe = carrito.find(item => item.id === producto.id);

    if (!existe) {
      // 3. Importante: Mapeamos 'imagen' a 'img' para que tu componente Carrito lo lea bien
      const productoParaCarrito = {
        ...producto,
        img: producto.imagen 
      };
      
      carrito.push(productoParaCarrito);
      localStorage.setItem("MyCart", JSON.stringify(carrito));
      
      // 4. Disparar evento para que el Header/Navbar se entere del cambio
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
      favoritos.push(producto);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Añadido a favoritos ⭐");
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 10 }}>
      <Typography variant="h3" fontWeight="900" sx={{ color: '#003366', mb: 4 }}>
        SNEAKERS <span style={{ color: '#007bff' }}>SHOP</span>
      </Typography>

      <Grid container spacing={3}>
        {tenis.map((sneaker) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={sneaker.id}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <CardMedia
                component="img"
                height="250"
                image={sneaker.imagen}
                alt={sneaker.nombre}
                sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1a1a1a' }}>
                  {sneaker.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '40px' }}>
                  {sneaker.descripcion}
                </Typography>
                <Typography variant="h5" sx={{ color: '#007bff', fontWeight: 800 }}>
                  ${sneaker.precio.toLocaleString()}
                </Typography>
                <Chip
                  label={sneaker.stock ? 'En Stock' : 'Agotado'}
                  color={sneaker.stock ? 'success' : 'error'}
                  variant="outlined"
                  size="small"
                  sx={{ mt: 1, fontWeight: 'bold' }}
                />
              </CardContent>

              <Stack spacing={1} sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={!sneaker.stock}
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => agregarCarrito(sneaker)}
                  sx={{ 
                    bgcolor: '#007bff', 
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#0056b3' }
                  }}
                >
                  Agregar
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  startIcon={<GradeIcon />}
                  onClick={() => agregarFavorito(sneaker)}
                  sx={{ fontWeight: 'bold' }}
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