import React, { useState, useContext } from 'react';
import { Box, Button, Image, Text, Input, HStack } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad

  // Función para incrementar la cantidad
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Función para decrementar la cantidad
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // Agregar al carrito
  };

  return (
    <Box>
      <Image src={product.imagen} alt={product.nombre} />
      <Text fontWeight="bold" fontSize="2xl">{product.nombre}</Text>
      <Text>Marca: {product.marca}</Text>
      <Text>Tipo: {product.tipo}</Text>
      <Text>Stock: {product.stock}</Text>
      <Text>{product.descripcion}</Text>
      <Text fontSize="xl">${product.precio}</Text>

      <Box mt="4">
        <Text mb="2">Cantidad:</Text>
        <HStack maxW="200px" mb="4">
          <Button onClick={decrementQuantity} disabled={quantity === 1}>-</Button>
          <Input
            type="number"
            value={quantity}
            readOnly
            textAlign="center"
          />
          <Button onClick={incrementQuantity}>+</Button>
        </HStack>
      </Box>

      <Button colorScheme="red" mt="4" onClick={handleAddToCart}>
        Agregar al Carrito
      </Button>
    </Box>
  );
};

export default ItemDetail;
