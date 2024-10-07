import React, { useState } from 'react';
import { Box, Button, Text, Input, Stack, useToast } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, setCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate();
  const toast = useToast();

  const handleCheckout = () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas proceder con la compra?');
    
    if (isConfirmed) {
      console.log('Realizando el pago para:', { name, email });
      setCart([]);
      setSuccess(true);
      
      toast({
        title: "Compra Exitosa",
        description: "Tu compra se ha realizado con éxito, gracias por comprar en LeBike Shop.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate('/');
    }
  };

  return (
    <Box p={5} bg="gray.900" color="white">
      {success ? (
        <Text fontSize="2xl">¡Gracias por tu compra!</Text>
      ) : (
        <>
          <Text fontSize="2xl">Total a Pagar: USD {total.toLocaleString()}</Text>
          <Stack spacing={4} mt={4}>
            <Input 
              placeholder="Nombre" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              color="white"
              bg="gray.800"
            />
            <Input 
              placeholder="Email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              color="white"
              bg="gray.800"
            />
            <Button colorScheme="green" onClick={handleCheckout}>Pagar</Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Checkout;
