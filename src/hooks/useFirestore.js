import { useState, useEffect } from "react";
import {db} from '../firebase/config';
import { collection, onSnapshot } from "firebase/firestore";

const useFirestore = async(container) => {
  const [docs, setDocs] = useState([]);

  useEffect(()=>{
    const unsub = onSnapshot(
      collection(db,container), 
      (docs)=>{
        // console.log(docs);
        let documents = [];
        docs.docs.forEach(doc=>{
          documents.push({...doc.data(),id:doc.id});
        });
        console.log('documents inside useFirestore useEffect:',documents);
        setDocs(documents);
      },
      (error)=>{
        console.log(error);
      });

    return () => unsub();
  },[container]);
  return docs;
};

export default useFirestore;


