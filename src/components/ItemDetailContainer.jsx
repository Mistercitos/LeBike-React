import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID de la URL
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Box, Text, Image, Spinner } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtenemos el ID de la URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'products', id); // Se referencia el documento por ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() }); // Guardamos el producto en el estado
        } else {
          console.error('No se encontró el producto.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]); // Ejecuta el efecto cuando cambia el ID

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (!item) {
    return <Text>No se encontró el producto.</Text>;
  }

  return (
    <Box>
      {/* Detalles del producto */}
      <Image src={item.imagen} alt={item.nombre} boxSize="300px" />
      <Text fontSize="2xl">{item.nombre}</Text>
      <Text>Marca: {item.marca}</Text>
      <Text>Kilómetros: {item.kms}</Text>
      <Text>Cilindrada (cc): {item.cc}</Text>
      <Text>Descripción: {item.descripcion}</Text>
      <Text>Precio: USD {item.precio.toLocaleString()}</Text>
    </Box>
  );
};

export default ItemDetailContainer;
