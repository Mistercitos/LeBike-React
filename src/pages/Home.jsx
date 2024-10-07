import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemList from '../components/ItemList';
import { Box, Spinner, Heading } from '@chakra-ui/react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box p={5} display="flex" justifyContent="center" alignItems="center" minH="100vh" bg="gray.900">
        <Spinner size="xl" color="white" />
      </Box>
    );
  }

  return (
    <Box p={5} bg="gray.900" minH="100vh">
      <Heading as="h2" size="xl" color="white" mb={5} textAlign="center">
        Todos Los Productos
      </Heading>
      <ItemList products={products} />
    </Box>
  );
};

export default Home;
