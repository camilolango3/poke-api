import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Inicio from "./assets/components/inicio";
import Coleccion from "./assets/components/coleccion";
import Favoritos from "./assets/components/favoritos";
import Info from "./assets/components/info";
import Usuario from "./assets/components/usuario";
import Pokemon from "./assets/components/pokemon";

function App() {

    return (
        <>
            <Router>

                <nav className="c-menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/coleccion">Coleccion</Link>
                    <Link to="/favorito">Favorito</Link>
                    <Link to="/info">Info</Link>
                    <Link to="/usuario">Usuario</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/coleccion" element={<Coleccion />} />
                    <Route path="/favorito" element={<Favoritos />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/usuario" element={<Usuario />} />
                     <Route path="/pokemon/:name" element={<Pokemon />} />
                </Routes>

            </Router>
        </>
    );
}

export default App;