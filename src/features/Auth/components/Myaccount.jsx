import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

export const Myaccount = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (nombre && password) {
      navigate("/");
    }
  };

  return (
    <section 
      style={{ 
        backgroundColor: "transparent", 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 4,
          // El truco del Glassmorphism:
          backgroundColor: "rgba(255, 255, 255, 0.1)", 
          backdropFilter: "blur(10px)", 
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "350px",
        }}
      >
        <Typography variant="h5" sx={{ color: "black", textAlign: "center", fontWeight: "bold" }}>
          Mi Cuenta
        </Typography>

        <TextField
          label="Nombre"
          variant="filled" // "filled" suele verse mejor en fondos transparentes
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)", borderRadius: 1 }}
        />

        <TextField
          label="Contraseña"
          type="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)", borderRadius: 1 }}
        />

        <Button 
          variant="contained" 
          onClick={handleLogin}
          sx={{ 
            marginTop: 1,
            backgroundColor: "#1976d2",
            '&:hover': { backgroundColor: "#115293" } 
          }}
        >
          Entrar
        </Button>
      </Box>
    </section>
  );
};