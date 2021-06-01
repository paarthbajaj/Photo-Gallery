import { useState, useEffect } from "react";
import { projectFirestore } from "./firebaseConfig";

// this custom hook to listen the collection from our website to get all url in realtime added into project
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //this fires a callback fn everytime a change occurs inside the collection
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id }); //cycle through documents in databse
        });
        setDocs(documents);
      });
    return () => unsub(); //at the moment wehen we don't want to listening to collection to retrive the document, we invoke this unsub which is a cleanup function
  }, [collection]);

  return { docs };
};

export default useFirestore;
