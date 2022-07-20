import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCixBkoTxAijDi2LLZ060C6J7Er3b675tA",
  authDomain: "clone-eaf6c.firebaseapp.com",
  projectId: "clone-eaf6c",
  storageBucket: "clone-eaf6c.appspot.com",
  messagingSenderId: "266842276864",
  appId: "1:266842276864:web:83b7a777686af41f4dc4e5",
  measurementId: "G-95RT81JCL8",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };


// VERSÃO 8 (ANTIGA) FIREBASE:

//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
//const auth = firebase.auth();
