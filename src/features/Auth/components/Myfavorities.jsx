import * as React from "react";
import { useState, useEffect } from "react";

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";

export const Myfavorities = () => {

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(data);
  }, []);


  const quitarFavorito = (id) => {

    const nuevosFavoritos = favoritos.filter(
      (item) => item.id !== id
    );

    setFavoritos(nuevosFavoritos);

    localStorage.setItem(
      "favoritos",
      JSON.stringify(nuevosFavoritos)
    );
  };

  return (
    <Container sx={{ mt: 4 }}>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Mis Favoritos
      </Typography>

      <Grid container spacing={3}>

        {favoritos.map((sneaker) => (

          <Grid item xs={12} sm={6} md={4} key={sneaker.id}>

            <Card>

              <CardMedia
                component="img"
                height="250"
                image={sneaker.imagen}
                alt={sneaker.nombre}
              />

              <CardContent>

                <Typography variant="h6" fontWeight="bold">
                  {sneaker.nombre}
                </Typography>

                <Typography color="primary" sx={{ mb: 2 }}>
                  ${sneaker.precio.toLocaleString()}
                </Typography>

                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => quitarFavorito(sneaker.id)}
                >
                  Quitar de favoritos
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  );
};