import React from 'react';
import { Box, Heading, Button, Stack, Text, Image } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <Box p={5} w="100%" minH="100vh" bg="gray.900">
      <Heading as="h2" size="lg" color="white" mb={5}>Tu Carrito</Heading>
      {cart.length === 0 ? (
        <Text color="white">No hay productos en el carrito.</Text>
      ) : (
        <Stack spacing={4}>
          {cart.map(item => (
            <Box key={item.id} bg="gray.800" p={4} borderRadius="md" display="flex" justifyContent="space-between" alignItems="center">
              <Image src={item.imagen} alt={item.nombre} boxSize="50px" objectFit="cover" />
              <Text color="white">{item.nombre} - {item.quantity} x USD {item.precio.toLocaleString()}</Text>
              <Stack direction="row" spacing={2}>
                <Button colorScheme="red" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
              </Stack>
            </Box>
          ))}
          <Text color="white" fontWeight="bold">Total: USD {total.toLocaleString()}</Text>
          <Button 
            colorScheme="green" 
            onClick={() => navigate('/checkout')}
          >
            Proceder al Pago
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
