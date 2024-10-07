import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemList from '../components/ItemList';
import { Box, Heading, Spinner } from '@chakra-ui/react';

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'products'), where('categoria', '==', categoryId));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

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
        {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
      </Heading>
      <ItemList products={products} />
    </Box>
  );
};

export default Category;
