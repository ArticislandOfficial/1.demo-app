import React from "react";

const BlogPage = (props) => {
  return (
    <>
      <ul>
        {props.articulos.map((articulo, index) => (
          <li key={index}>{articulo}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
