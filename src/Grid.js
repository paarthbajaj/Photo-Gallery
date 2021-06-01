import React from "react";
import useFirestore from "./useFirestore";

// this will cycle through documents and output each image
const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images"); //this is going to listen to the collection in database and return all the docs we have

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
