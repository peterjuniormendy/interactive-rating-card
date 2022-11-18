import React from "react";

const Image = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
