
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyAT7t_Jg_8fn3jyDP6fxPXKKCW4gUjT5T0",
  authDomain: "eshop-731c9.firebaseapp.com",
  projectId: "eshop-731c9",
  storageBucket: "eshop-731c9.appspot.com",
  messagingSenderId: "182238856850",
  appId: "1:182238856850:web:2ed90ddc9bc85dbbc4084b"
};


  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app