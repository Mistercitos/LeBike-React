import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Asegúrate de que Firebase está correctamente configurado
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products')); // Obtenemos la colección 'products'
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() // Obtenemos los datos del documento
        }));
        setItems(products); // Establecemos los productos en el estado
        setLoading(false); // Cambiamos el estado de loading una vez obtenidos los productos
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Nuestros Productos</h1>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />} {/* Mostramos productos si no está cargando */}
    </div>
  );
};

export default ItemListContainer;
