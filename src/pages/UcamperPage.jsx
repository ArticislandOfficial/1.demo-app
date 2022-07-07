import React from "react";
import { useParams } from "react-router-dom";

const UcamperPage = () => {
  const { id, nombre } = useParams();

  return (
    <>
      <div>{id}</div>
      <div>{nombre}</div>
    </>
  );
};

export default UcamperPage;
