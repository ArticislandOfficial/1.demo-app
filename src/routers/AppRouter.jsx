// Aqui se crean las rutas para todos los enlaces que tengas en tu componente NavBarbar
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";
import NavBar from "../components/NavBar";
import BlogPage from "../pages/BlogPage";
import UcamperPage from "../pages/UcamperPage";
import AlumnosPage from "../pages/AlumnosPage";
import AlumnoPage from "../pages/AlumnoPage";
import EstadoPage from "../pages/EstadoPage";
import PostPage from "../pages/PostPage";
import EffectosPages from "../pages/EffectosPages";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/ucamper/:id/:nombre" element={<UcamperPage />} />

          <Route path="/alumnos" element={<AlumnosPage />} />
          <Route path="/alumno/:id_alumno" element={<AlumnoPage />} />

          <Route
            path="/blog"
            element={
              <BlogPage
                articulos={["Articulo 1", "Articulo 2", "Articulo 3"]}
                nombre="Jesus"
              />
            }
          />
          <Route path="/estados" element={<EstadoPage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/efectos" element={<EffectosPages />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
