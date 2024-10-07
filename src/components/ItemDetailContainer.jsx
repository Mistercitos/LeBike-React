import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemDetail from './ItemDetail';
import { Box, Spinner, Heading } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No se encontró el producto en Firestore');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <Box p={5} w="100%" minH="100vh" bg="gray.900" display="flex" justifyContent="center" alignItems="center">
        <Spinner size="xl" color="white" />
      </Box>
    );
  }

  if (!item) {
    return (
      <Box p={5} w="100%" minH="100vh" bg="gray.900" display="flex" justifyContent="center" alignItems="center">
        <Heading as="h2" size="xl" color="white">
          No se encontró el producto.
        </Heading>
      </Box>
    );
  }

  return (
    <Box p={5} w="100%" minH="100vh" bg="gray.900">
      <ItemDetail item={item} />
    </Box>
  );
};

export default ItemDetailContainer;
