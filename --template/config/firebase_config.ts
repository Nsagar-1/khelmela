import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import{getAuth , GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCe0pOXlqe35N0o-X-d58WsMl1YuQ_npyY",
  authDomain: "sample9898-65fa4.firebaseapp.com",
  projectId: "sample9898-65fa4",
  storageBucket: "sample9898-65fa4.firebasestorage.app",
  messagingSenderId: "849073472067",
  appId: "1:849073472067:web:3d636a6f6e592d20344af6"
};
 


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
