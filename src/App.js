import "./App.css";
import Form from "./Form";
import ImageGrid from "./Grid";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null); //why null? because on first page load selected image will be none
  return (
    <div className="App">
      <h1>Fotogram</h1>
      <h2>Add pictures here by clicking on + button.</h2>
      <Form />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
