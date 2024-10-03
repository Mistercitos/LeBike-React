// src/components/CartPage.jsx
import React from 'react';
import { Box, List, ListItem, Button, Text, IconButton, Stack } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa'; // Correcto
import { useCart, useDispatchCart } from '../contexts/CartContext';

const CartPage = () => {
  const cart = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Tu Carrito</Text>
      <List spacing={3}>
        {cart.map(item => (
          <ListItem key={item.id} d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="bold">{item.name}</Text>
            <Stack direction="row" alignItems="center">
              <Text>Cantidad: {item.quantity}</Text>
              <IconButton
                icon={<FaTrash />}
                onClick={() => handleRemove(item.id)}
                aria-label="Remove item"
              />
            </Stack>
          </ListItem>
        ))}
      </List>
      {cart.length === 0 && <Text>Tu carrito está vacío.</Text>}
    </Box>
  );
};

export default CartPage;
