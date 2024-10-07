import React from "react";
import Item from "./Item";
import { SimpleGrid } from "@chakra-ui/react";

const ItemList = ({ products }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="20px">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ItemList;
