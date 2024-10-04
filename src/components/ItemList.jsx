import React from "react";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <Flex wrap="wrap" justifyContent="center" maxW="1400px" mx="auto">
      {products.map((product) => (
        <Box
          key={product.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          m={2}
          w="18%" // Ancho ajustado para 5 productos por fila
          h="380px" // Alto ajustado para mantener el mismo tamaño
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Image
            src={product.imagen}
            alt={product.nombre}
            objectFit="cover"
            h="150px"
            w="100%"
            borderRadius="lg"
          />
          <Box p={2}>
            <Text fontWeight="bold" noOfLines={1}>
              {product.nombre}
            </Text>
            <Text>Marca: {product.marca}</Text>
            <Text>Kilómetros: {product.kms || "N/A"} kms</Text>
            <Text>Categoría: {product.categoria}</Text>
            <Text>Precio: USD {product.precio.toLocaleString()}</Text>
          </Box>
          {/* Botón para ver detalles */}
          <Link to={`/item/${product.id}`}>
            <Button colorScheme="blue" mt={3}>
              Ver Detalles
            </Button>
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default ItemList;
