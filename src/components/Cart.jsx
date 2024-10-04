import React, { useContext } from 'react';
import { Box, Image, Text, Flex, Button, HStack, Input } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useContext(CartContext);

  // Calcular el total
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <Box p="6">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Tu Carrito de Compras</Text>
      
      {cartItems.map((item) => (
        <Flex key={item.id} borderWidth="1px" borderRadius="lg" p="4" mb="4" alignItems="center">
          {/* Imagen del producto */}
          <Image 
            src={item.imagen} 
            alt={item.nombre} 
            objectFit="cover" 
            width="100px" 
            height="100px" 
            borderRadius="lg" 
            mr={4}
          />

          {/* Información del producto */}
          <Box flex="1">
            <Text fontWeight="bold" fontSize="lg">{item.nombre}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio Unitario: USD {item.precio.toLocaleString()}</Text>
            <Text>Subtotal: USD {(item.precio * item.quantity).toLocaleString()}</Text>
          </Box>

          {/* Controles de cantidad */}
          <HStack>
            <Button onClick={() => decrementQuantity(item.id)}>-</Button>
            <Input value={item.quantity} readOnly textAlign="center" width="50px" />
            <Button onClick={() => incrementQuantity(item.id)}>+</Button>
          </HStack>

          {/* Botón de eliminar */}
          <Button ml={4} colorScheme="red" onClick={() => removeFromCart(item.id)}>
            Eliminar
          </Button>
        </Flex>
      ))}

      {/* Mostrar el total */}
      <Text fontSize="2xl" fontWeight="bold">Total: USD {total.toLocaleString()}</Text>

      {/* Botones para vaciar carrito y seguir comprando */}
      <Flex mt={4}>
        <Button colorScheme="red" mr={4} onClick={clearCart}>
          Vaciar Carrito
        </Button>
        <Button colorScheme="blue">
          Seguir Comprando
        </Button>
      </Flex>
    </Box>
  );
};

export default Cart;
