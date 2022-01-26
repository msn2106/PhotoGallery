import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDII9iC9OiwE9li18T7GSsW_45f6HzJzOY",
  authDomain: "msn-firegram-825b3.firebaseapp.com",
  projectId: "msn-firegram-825b3",
  storageBucket: "msn-firegram-825b3.appspot.com",
  messagingSenderId: "875369971279",
  appId: "1:875369971279:web:6ff2519c224379ba4ff43a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const projectStorage = getStorage();
const db = getFirestore();

export {projectStorage, db};
