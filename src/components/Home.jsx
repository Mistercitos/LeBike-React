// src/components/Home.jsx
import { Box, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box p={5} textAlign="center" h="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="2xl" fontWeight="bold">Bienvenido a LeBike Shop</Text>
      <Text fontSize="xl" my={3}>Encuentra las mejores bicicletas y accesorios a los mejores precios.</Text>
      <Button colorScheme="teal" as={RouterLink} to="/products">
        Ver Productos
      </Button>
    </Box>
  );
};

export default Home;
