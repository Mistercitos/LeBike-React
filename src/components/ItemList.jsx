import React from 'react';
import Item from './Item';
import { Box, SimpleGrid } from '@chakra-ui/react';

const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <Box>No hay productos disponibles.</Box>;
  }

  return (
    <SimpleGrid columns={[2, null, 4]} spacing="20px">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ItemList;
