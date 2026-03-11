import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Card, 
  CardMedia, Button, Divider, Stack, Grid,
  IconButton, Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export function Carrito() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('MyCart')) || [];
    setCart(savedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('MyCart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
  };

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const handleFinalize = () => {
    alert("🚀 ¡Pedido realizado con éxito! Un asesor se pondrá en contacto contigo.");
    localStorage.removeItem('MyCart');
    setCart([]);
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  return (
    <Box sx={{ 
      bgcolor: '#f8f9fa', // Fondo gris muy claro casi blanco
      minHeight: '100vh', 
      pt: { xs: 10, md: 15 }, 
      pb: 10, 
      color: '#1a1a1a' 
    }}>
      <Container maxWidth="lg">
        
        {/* Encabezado */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: '#003366' }}>
            MI <span style={{ color: '#007bff' }}>CARRITO</span>
          </Typography>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={() => navigate('/articles')}
            sx={{ color: '#007bff', textTransform: 'none', fontWeight: 'bold' }}
          >
            Volver al catálogo
          </Button>
        </Box>

        {cart.length === 0 ? (
          <Box sx={{ 
            textAlign: 'center', py: 10, bgcolor: 'white', 
            borderRadius: 6, border: '1px solid #e0e0e0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}>
            <RemoveShoppingCartIcon sx={{ fontSize: 80, color: '#dee2e6', mb: 2 }} />
            <Typography variant="h5" sx={{ color: '#6c757d', mb: 4 }}>
              Tu garaje está vacío por ahora.
            </Typography>
            <Button 
              variant="contained" 
              onClick={() => navigate('/articles')}
              sx={{ bgcolor: '#007bff', color: 'white', fontWeight: 'bold', px: 4, borderRadius: 2 }}
            >
              VER VEHÍCULOS
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {/* LISTA DE PRODUCTOS */}
            <Grid item xs={12} md={8}>
              <Stack spacing={2}>
                {cart.map((item) => (
                  <Card key={item.id} sx={{ 
                    display: 'flex', bgcolor: 'white', color: '#333', 
                    borderRadius: 3, border: '1px solid #eee',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    overflow: 'hidden',
                    transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }
                  }}>
                    <CardMedia
                      component="img"
                      sx={{ width: { xs: 120, sm: 220 }, objectFit: 'cover' }}
                      image={item.img}
                      alt={item.nombre}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#003366' }}>{item.nombre}</Typography>
                          <Typography variant="body2" sx={{ color: '#007bff', fontWeight: 600 }}>{item.hp}</Typography>
                        </Box>
                        <IconButton onClick={() => removeItem(item.id)} sx={{ color: '#dc3545', '&:hover': { bgcolor: '#fff5f5' } }}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Box>
                      <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a' }}>
                          ${item.precio.toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Stack>
            </Grid>

            {/* RESUMEN DE PAGO */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ 
                p: 4, bgcolor: 'white', borderRadius: 4, 
                border: '2px solid #007bff', position: 'sticky', top: 120 
              }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 800, color: '#003366' }}>RESUMEN</Typography>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#6c757d' }}>Vehículos ({cart.length})</Typography>
                    <Typography sx={{ fontWeight: 600 }}>${total.toLocaleString()}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#6c757d' }}>Gastos de gestión</Typography>
                    <Typography sx={{ color: '#28a745', fontWeight: 600 }}>Bonificado</Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>TOTAL</Typography>
                    <Typography variant="h5" sx={{ color: '#007bff', fontWeight: 900 }}>
                      ${total.toLocaleString()}
                    </Typography>
                  </Box>
                  
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    startIcon={<ShoppingCartCheckoutIcon />}
                    onClick={handleFinalize}
                    sx={{ 
                      bgcolor: '#007bff', color: 'white', fontWeight: 'bold', py: 2, mt: 2,
                      borderRadius: 2,
                      '&:hover': { bgcolor: '#0056b3' },
                      boxShadow: '0 4px 14px 0 rgba(0,123,255,0.39)',
                    }}
                  >
                    CONFIRMAR PEDIDO
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}