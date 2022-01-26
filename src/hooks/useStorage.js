import { useState, useEffect } from "react";
import { projectStorage, db } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create reference
    // const storageRef = projectStorage.ref(file.name); //obsolete
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const collectionRef = collection(db,'images');

    uploadTask.on('state_changed', (snap)=>{
      let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
      setProgress(percentage);
    }, (err) =>{
      setError(err);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
        setUrl(url);
        const createdAt = Date();
        addDoc(collectionRef, {url, createdAt});
      });
    })
  }, [file]);

  return {progress, error, url};
}

export default useStorage;