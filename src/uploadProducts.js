import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { products } from './products'; // Importa tu JSON de productos

const uploadProducts = async () => {
  try {
    const productsCollection = collection(db, 'products'); // Conexión a la colección "products"
    
    for (let product of products) {
      // Verificar si el producto ya existe en Firestore
      const q = query(productsCollection, where("nombre", "==", product.nombre));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Si no existe, agregar el producto
        await addDoc(productsCollection, product);
        console.log(`Producto ${product.nombre} agregado correctamente.`);
      } else {
        console.log(`Producto ${product.nombre} ya existe.`);
      }
    }

    console.log('Todos los productos se han verificado y agregado correctamente.');
  } catch (error) {
    console.error('Error al agregar productos: ', error);
  }
};

export default uploadProducts;
