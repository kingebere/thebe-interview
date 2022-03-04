import React from "react";
import "./list.css";
const List = ({image}) => {
  return (
    <>
      <div className="hero-column hero-column-50 ">
        <img
          src={image && image.urls.regular}
          alt={image && image.alt_description}
        />
      </div>
    </>
  );
};

export default List;
