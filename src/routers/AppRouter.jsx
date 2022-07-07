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
import AlumnoPage from "../pages/AlumnoPage";
import AlumnosPage from "../pages/AlumnosPage";



const AppRouter = () => {
  return (
    <Router>
      <NavBar />
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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
