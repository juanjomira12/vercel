import React from 'react'
import  { Favorite} from '../hooks/UseState'
import {OnlineStatus} from '../hooks/onlineStatus'
import {Contador} from '../hooks/contador'
import Reloj from '../hooks/reloj'
import {ContadorCara} from '../hooks/caracteres'


import { Container, Grid, Card, CardContent } from "@mui/material";

export const Offers = () => {
  return (
<Container sx={{ py: 3, mt: 3 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ p: 2, textAlign: "centesr", boxShadow: 4 }}>
            <CardContent>
              <OnlineStatus />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ p: 2, textAlign: "center", boxShadow: 4 }}>
            <CardContent>
              <Favorite />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ p: 2, textAlign: "center", boxShadow: 4 }}>
            <CardContent>
              <Contador />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ p: 2, textAlign: "center", boxShadow: 4 }}>
            <CardContent>
              <Reloj />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ p: 2, textAlign: "center", boxShadow: 4 }}>
            <CardContent>
              <ContadorCara />
            </CardContent>
          </Card>
        </Grid>

      </Container>
    
  );
};