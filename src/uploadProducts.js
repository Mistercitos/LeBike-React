import { db } from './firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import { products } from './products'; // Asegúrate de que tu archivo de productos esté en el mismo formato

const uploadProductsToFirestore = async () => {
  const productsCollection = collection(db, 'products');
  for (let product of products) {
    const productDoc = doc(productsCollection, product.id); // Asegura que el ID sea el mismo que en el JSON
    await setDoc(productDoc, product);
    console.log(`Producto ${product.nombre} agregado correctamente`);
  }
};

uploadProductsToFirestore();
