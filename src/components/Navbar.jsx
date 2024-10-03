// src/components/Navbar.jsx
import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <Flex as="nav" bg="gray.100" p="4" align="center">
      <Link as={RouterLink} to="/" p="2">Home</Link>
      <Link as={RouterLink} to="/products" p="2">Products</Link>
      <Spacer />
      <Link as={RouterLink} to="/cart" p="2">
        <CartWidget />
      </Link>
    </Flex>
  );
};

export default Navbar;
