import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
/* import { initializeApp } from "firebase/app"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
/* import { getFirestore } from "firebase/firestore"; */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMB5sS5Oqndcb5UodKKERGRabEJTkpFQw",
  authDomain: "admin-weedgreen.firebaseapp.com",
  projectId: "admin-weedgreen",
  storageBucket: "admin-weedgreen.appspot.com",
  messagingSenderId: "75922358372",
  appId: "1:75922358372:web:c349adafdfa3f3435c5f71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("firebase inicio");

// Initialize Cloud Firestore and get a reference to the service

/* const db = getFirestore(app); */

console.log("firebase firestore");

export async function addProduct(genero, material, producto, tipo_prenda) {
  try {
    const docRef = await addDoc(collection(db, "Botanica"), {
      genero: genero,
      material: material,
      producto: producto,
      tipo_prenda: tipo_prenda,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAllproducts() {
  const querySnapshot = await getDocs(collection(db, "Botanica"));
  const mappedArray = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    mappedArray.push(doc.data());
  });

  return mappedArray;
}

console.log("hola FIrebase final");
