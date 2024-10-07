import React, { useState } from 'react';
import { Box, Heading, Image, Text, Stack, Button, HStack } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const { addToCart, cart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const isInCart = cart.find(cartItem => cartItem.id === item.id);

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Box p={5} w="100%" maxW="900px" m="auto" bg="gray.800" borderRadius="lg" boxShadow="lg">
      <Image 
        src={item.imagen} 
        alt={item.nombre} 
        borderRadius="md"
        w="100%"
        maxH="400px"
        objectFit="cover"
        mb={5}
      />
      <Stack spacing={3}>
        <Heading as="h2" size="lg" color="white">
          {item.nombre}
        </Heading>
        <Text color="white">Marca: {item.marca}</Text>
        <Text color="white">Tipo: {item.tipo}</Text>
        <Text color="white">Cilindrada (CC): {item.cc}</Text>
        <Text color="white">Kilómetros: {item.kms} kms</Text>
        <Text color="white">Precio: USD {item.precio.toLocaleString()}</Text>
        <Text color="white">Descripción: {item.descripcion}</Text>
        
        {isInCart ? (
          <HStack width="full" justifyContent="space-between">
            <Button onClick={decrementQuantity} colorScheme="red" disabled={quantity <= 1}>-</Button>
            <Text color="white">{quantity}</Text>
            <Button onClick={incrementQuantity} colorScheme="green">+</Button>
          </HStack>
        ) : (
          <Button colorScheme="red" width="full" onClick={handleAddToCart}>
            Agregar al Carrito
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default ItemDetail;
