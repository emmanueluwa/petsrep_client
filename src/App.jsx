import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

//images & styles
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
