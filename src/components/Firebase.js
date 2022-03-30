import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUNM6MnXrzFDMkiCgcj67QCegPuhSE6VA",
    authDomain: "ecommerce-cargnelutti.firebaseapp.com",
    projectId: "ecommerce-cargnelutti",
    storageBucket: "ecommerce-cargnelutti.appspot.com",
    messagingSenderId: "731740136798",
    appId: "1:731740136798:web:f6971ed6b470e98a8a5bcf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);