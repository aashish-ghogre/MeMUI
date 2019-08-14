import React from "react";
import "./image.component.css";
const ImageComponent = ({ image, altText }) => {
  return <img className="box" src={image} alt={altText} />;
};

export default ImageComponent;
