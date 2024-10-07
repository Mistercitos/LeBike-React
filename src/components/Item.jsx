import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Box p={5} w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.imagen} alt={product.nombre} />
      <Text mt={2} fontWeight="bold" fontSize="xl">
        {product.nombre}
      </Text>
      <Text>Marca: {product.marca}</Text>
      <Text>Precio: USD {product.precio.toLocaleString()}</Text>
      <Link to={`/item/${product.id}`}>
        <Button colorScheme="red" mt={3} w="100%">
          Ver Detalles
        </Button>
      </Link>
    </Box>
  );
};

export default Item;
