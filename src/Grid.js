import React from "react";
import useFirestore from "./useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="imageGrid">
      {docs &&
        docs.map((doc) => (
          <div
            className="imageWrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
