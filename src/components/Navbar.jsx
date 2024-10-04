import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Box, Flex, Button, Image, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  // Función para capitalizar la primera letra
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => doc.data());

        // Obtener categorías únicas y capitalizar la primera letra
        const uniqueCategories = [...new Set(productList.map(product => product.categoria))].map(capitalizeFirstLetter);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Box bg="black" p={4} color="white" boxShadow="lg" position="sticky" top="0" zIndex="10">
      <Flex justifyContent="space-between" alignItems="center" maxW="1200px" mx="auto">
        {/* Logo más pequeño con enlace al home */}
        <Link to="/">
          <Image src="/logo.png" alt="LeBike Shop" h="40px" w="auto" objectFit="contain" />
        </Link>

        {/* Categorías */}
        <Flex alignItems="center">
          {categories.map((category) => (
            <Link key={category} to={`/category/${category.toLowerCase()}`}> {/* Cambiamos para que coincida con el path */}
              <Button 
                variant="link" 
                colorScheme="white" 
                mx={4} 
                _hover={{ color: "red.500" }} // Efecto hover en rojo
                fontSize="lg"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {category}
              </Button>
            </Link>
          ))}
        </Flex>

        {/* Carrito de compras (rojo con icono blanco) */}
        <Link to="/cart">
          <IconButton
            icon={<FaShoppingCart color="white" />} // Cambiamos el color del icono
            bg="red.500" // Fondo rojo
            size="lg"
            aria-label="Carrito de compras"
            _hover={{ bg: "red.600" }} // Efecto hover para el carrito
            borderRadius="full"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
