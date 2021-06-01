import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("blanket")) {
      //to not close modal enlarged image on click of image but on the click of backdrop only
      setSelectedImage(null);
    }
  };
  return (
    <div className="blanket" onClick={clickHandler}>
      <img src={selectedImage} alt="random" />
    </div>
  );
};
export default Modal;
