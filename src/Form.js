import React, { useState } from "react";
import ProgressBar from "./Progressbar";

function Form() {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    // so that i can see the file in console and use its properties and below is checking if file is selected or not

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(""); //when we rechoose a file, the error should be gone
    } else {
      setFile(null);
      setError("Please select an image of jpeg or png type only.");
    }
  };
  return (
    <form>
      <label>
        {/* changehandler is required to react to changes on file choose click */}
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default Form;
