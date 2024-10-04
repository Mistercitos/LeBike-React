import React, { useContext } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box position="relative" display="inline-block">
      <Icon as={FaShoppingCart} color="red.500" w={8} h={8} />
      {itemCount > 0 && (
        <Box // Cambiamos "Text" por "Box" ya que "Box" no tiene restricciones de anidación
          as="span"
          position="absolute"
          right="-1"
          top="-1"
          px="2"
          py="1"
          fontSize="xs"
          fontWeight="bold"
          lineHeight="none"
          color="white"
          bg="red.500"
          borderRadius="full"
        >
          {itemCount}
        </Box>
      )}
    </Box>
  );
};

export default CartWidget;
