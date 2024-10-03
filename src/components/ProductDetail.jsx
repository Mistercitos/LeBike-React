// src/components/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <Text>Cargando...</Text>;
  }

  return (
    <Flex direction="column" align="center" maxW="600px" margin="auto">
      <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
      <Box p={5}>
        <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
        <Text fontSize="lg">{product.description}</Text>
        <Text fontSize="xl" color="tomato" my={2}>${product.price}</Text>
        <Button colorScheme="teal">Agregar al Carrito</Button>
      </Box>
    </Flex>
  );
};

export default ProductDetail;
