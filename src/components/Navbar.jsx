import React from 'react';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

const Navbar = ({ setCategory }) => {
  const categories = ['Motos', 'Accesorios', 'Indumentaria'];

  return (
    <Flex p={4} bg="black" color="white">
      <Box fontWeight="bold" fontSize="2xl">
        LeBike
      </Box>
      <Spacer />
      <Box>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setCategory(cat.toLowerCase())}
            m={2}
            bg="transparent"
            _hover={{ bg: 'red.500' }}
          >
            {cat}
          </Button>
        ))}
      </Box>
      <Box>
        <Button bg="red.500" _hover={{ bg: 'red.700' }}>
          Carrito
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
