import React from 'react';
import { SimpleGrid, Box, Image, Text, Flex, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={5} p={5}> {/* Ajustamos las columnas y el espaciado */}
      {items.map((item) => (
        <Box 
          key={item.id} 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden" 
          bg="#2D3748"  // Restauramos el color de la tarjeta (oscuro)
          shadow="md"
          _hover={{ boxShadow: 'lg' }} // Añadimos un efecto hover para que se destaque
        >
          {/* Imagen ocupa todo el ancho */}
          <Image 
            src={item.imagen} 
            alt={item.nombre} 
            objectFit="cover" 
            width="100%" // Imagen ocupa todo el ancho de la tarjeta
            height="250px" // Aumentamos la altura de la imagen
          />

          <Box p="4" textAlign="center">
            {/* Marca y Nombre */}
            <Text fontSize="sm" color="gray.500" fontWeight="bold">
              {item.marca}
            </Text>

            <Text 
              fontWeight="bold" 
              fontSize="md" 
              noOfLines={1} // Limita a una línea y añade "..."
              mb="2"
              color="white"
            >
              {item.nombre}
            </Text>

            {/* Precio en formato compacto */}
            <Text fontWeight="bold" fontSize="lg" color="white">
              USD {item.precio.toLocaleString()}
            </Text>

            {/* Botón con tamaño reducido */}
            <Flex justifyContent="center" mt="4">
              <Button
                as={RouterLink}
                to={`/item/${item.id}`}
                colorScheme="red"
                _hover={{ bg: "red.400" }}
                width="60%" // Reducimos el tamaño del botón
              >
                Ver Detalle
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ItemList;
