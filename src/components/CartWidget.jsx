// src/components/CartWidget.jsx
import React from 'react';
import { Icon, Badge, Box } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';

const CartWidget = () => {
  const cart = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box display="flex" alignItems="center">
      <Icon as={FaShoppingCart} w={6} h={6} />
      {itemCount > 0 && (
        <Badge ml={1} colorScheme="red">
          {itemCount}
        </Badge>
      )}
    </Box>
  );
};

export default CartWidget;
