import React from "react";
import useStore from "./Storage";
import { useEffect } from "react";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStore(file);

  //if file has a url that means file is fully uploaded and setFile is null to remove the progress bar after file is fully uploaded. In form.js if file is present, then only progress bar will show, so setFile = null
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]); // when url changes

  return <div className="progress" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
