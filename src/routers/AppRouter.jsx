import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";
import NavBar from "../components/NavBar";
import BlogPage from "../pages/BlogPage";
import UcamperPage from "../pages/UcamperPage";
import AlumnoPage from "../pages/AlumnoPage";
import AlumnosPage from "../pages/AlumnosPage";
import EstadosPage from "../pages/EstadosPage";
import PostsPage from "../pages/PostsPage";
import EffectosPage from "../pages/EffectosPage";
import PostPage from "../pages/PostPage";

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

          <Route path="/estados" element={<EstadosPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:idPost" element={<PostPage />} />

          <Route path="/efectos" element={<EffectosPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
