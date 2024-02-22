import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.original} alt="" />
      </div>
      <p>Photographer : {data.photographer}</p>
      <a target="_blank" href={data.src.original}>
        Download Image
      </a>
    </div>
  );
};

export default Picture;
