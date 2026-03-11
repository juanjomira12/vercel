import { HashRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Header } from "./features/layout/components/Header";
import { Footer } from "./features/layout/components/Footer";

import { Content } from "./features/layout/components/Content";
import { Myaccount } from "./features/Auth/components/Myaccount";
import { Mybuys } from "./features/Auth/components/Mybuys";
import { Myfavorities } from "./features/Auth/components/Myfavorities";
import { Offers } from "./features/Articles/components/Offers";
import { Article } from "./features/Articles/components/Article";
import { Carrito} from "./features/Articles/components/Carrito";

function App() {
  return (
    <HashRouter>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >

        <Header />

        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Articles" element={<Article />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/MyAccount" element={<Myaccount />} />
            <Route path="/MyBuys" element={<Mybuys />} />
            <Route path="/MyFavorities" element={<Myfavorities />} />
            <Route path="/Carrito" element={<Carrito/>} />
          </Routes>
        </Box>

        <Footer />

      </Box>
    </HashRouter>
  );
}

export default App;