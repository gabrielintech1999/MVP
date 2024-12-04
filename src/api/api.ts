// import axios from "axios";

// const BASE_URL = "http://localhost:4000";

// export const getProducts = async () => {
//   const { data } = await axios.get(`${BASE_URL}/products`);
//   return data;
// };

// export const getProduct = async (id: string) => {
//   const { data } = await axios.get(`${BASE_URL}/products/${id}`);
//   return data;
// };

import { collection, getDocs, doc, getDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";

export const getProducts = async () => {
  const productCollection = collection(db, "products");


  console.log(productCollection);



  const snapshot = await getDocs(productCollection);



  const products = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

 
  return products;
};


export const getProduct = async (id: string) => {
  const productDoc = doc(db, "products", id);
  const snapshot = await getDoc(productDoc);

  if (!snapshot.exists()) {
    throw new Error("Produto não encontrado");
  }

  return { id: snapshot.id, ...snapshot.data() };
};
