import React from "react";
import { useParams } from "react-router-dom";

const AlumnoPage = () => {
  const { id_alumno } = useParams();
  return <div>{id_alumno}</div>;
};

export default AlumnoPage;
