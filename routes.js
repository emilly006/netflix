import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "./components/Catalogo";
import FilmePage from "./pages/FilmePage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalogo filmes={[]} />} />
        <Route path="/filme/:id" element={<FilmePage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
