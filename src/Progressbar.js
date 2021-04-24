import React from "react";
import useStore from "./Storage";
import { useEffect } from "react";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStore(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
