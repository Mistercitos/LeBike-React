import React from "react";
import { Box, Heading, Text, Image, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

const Item = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.800"
      color="white"
      p={5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={product.imagen} alt={product.nombre} maxH="200px" objectFit="cover" />
      <Stack spacing={3} mt={3}>
        <Heading as="h4" size="md">{product.nombre}</Heading>
        <Text>Kilometraje: {product.kms} km</Text>
        <Text>Cilindrada: {product.cc} cc</Text>
        <Text>USD {product.precio.toLocaleString()}</Text>
      </Stack>
      <Stack spacing={3} mt={4}>
        <Link to={`/item/${product.id}`}>
          <Button colorScheme="pink" variant="outline" width="full">Ver Detalles</Button>
        </Link>
        <Button colorScheme="red" width="full" onClick={handleAddToCart}>Agregar al Carrito</Button>
      </Stack>
    </Box>
  );
};

export default Item;
