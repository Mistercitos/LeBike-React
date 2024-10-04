import React from 'react';
import { Flex, Box, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <Flex bg="black" color="white" p="4" justifyContent="space-between" alignItems="center" boxShadow="lg">
      <Box>
        <Link as={RouterLink} to="/">
          <Image src="/logo.png" alt="LeBike Shop Logo" boxSize="100px" objectFit="contain" />
        </Link>
      </Box>

      <Flex alignItems="center">
        {/* Asegúrate de usar "Box" para contener texto si es necesario */}
        <Box fontWeight="bold" fontSize="lg" mr="6" _hover={{ color: "red.500" }}>
          <Link as={RouterLink} to="/">Home</Link>
        </Box>
        <Box fontWeight="bold" fontSize="lg" _hover={{ color: "red.500" }}>
          <Link as={RouterLink} to="/cart">
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
