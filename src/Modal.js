import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("blanket")) {
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
