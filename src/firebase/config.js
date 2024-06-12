import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLq9bNJvbMcnmLOiZLjPDZ3oDxk0c7BBc",
  authDomain: "tienda-57765.firebaseapp.com",
  projectId: "tienda-57765",
  storageBucket: "tienda-57765.appspot.com",
  messagingSenderId: "1047093883811",
  appId: "1:1047093883811:web:c1b1010597240407b1a016"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);