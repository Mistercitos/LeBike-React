import { db } from '../firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { collection, addDoc } from 'firebase/firestore';
import products from './products.json'; // Importa el archivo JSON

const uploadProducts = async () => {
  const productsCollection = collection(db, 'products'); // Asegúrate de que la colección en Firestore sea correcta

  try {
    // Itera sobre los productos y súbelos a Firestore
    for (const product of products) {
      const { nombre, descripcion, imagen, precio, stock, cc, kms, talla, categoria, marca, subcategoria, tipo } = product;

      // Sube cada producto a Firestore
      await addDoc(productsCollection, {
        nombre,
        descripcion,
        imagen,
        precio,
        stock,
        cc,
        kms,
        talla,
        categoria,
        marca,
        subcategoria,
        tipo,
      });
    }
    console.log('Productos subidos exitosamente.');
  } catch (error) {
    console.error('Error al subir productos: ', error);
  }
};

uploadProducts();
