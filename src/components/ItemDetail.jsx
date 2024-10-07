import React from 'react';
import { Box, Heading, Image, Text, Stack } from '@chakra-ui/react';

const ItemDetail = ({ item }) => {
  return (
    <Box p={5} w="100%" maxW="900px" m="auto" bg="gray.800" borderRadius="lg" boxShadow="lg">
      <Image 
        src={item.imagen} 
        alt={item.nombre} 
        borderRadius="md"
        maxH="400px"
        objectFit="contain"
        mb={5}
      />
      <Stack spacing={3}>
        <Heading as="h2" size="lg" color="white">
          {item.nombre}
        </Heading>
        <Text color="white">Marca: {item.marca}</Text>
        <Text color="white">Tipo: {item.tipo}</Text>
        <Text color="white">Cilindrada (CC): {item.cc}</Text>
        <Text color="white">Kilómetros: {item.kms} kms</Text>
        <Text color="white">Precio: USD {item.precio.toLocaleString()}</Text>
        <Text color="white">Descripción: {item.descripcion}</Text>
      </Stack>
    </Box>
  );
};

export default ItemDetail;
