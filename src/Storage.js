import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "./firebaseConfig";

//just a function responsible for file upload and return useful value, like upload progress, image url, errors, etc

function useStore(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name); //refrence to file in firebase storage

    const collectionRef = projectFirestore.collection("images");
    // collectionref comes from projectfirestore from firebaseConfig

    // this uploads the file to refernce and it is async
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        //adding a new object with url and createdAt property
        setUrl(url);
      }
    );
  }, [file]); //everytime we have new file, this useEffect will fire

  return { progress, url, error };
}
export default useStore;
