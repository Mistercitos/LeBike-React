import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Badge,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from '../context/CartContext';

const Navbar = ({ setCategory }) => {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const categories = ["Motos", "Accesorios", "Indumentaria"];

  return (
    <Flex p={4} bg="black" color="white" align="center">
      <Box>
        <RouterLink to="/" onClick={() => setCategory("")}>
          <Image src="/logo.png" alt="LeBike Logo" width="150px" objectFit="contain" />
        </RouterLink>
      </Box>

      <Spacer />
      <Box>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setCategory(cat.toLowerCase())}
            m={2}
            bg="transparent"
            _hover={{ bg: "red.500" }}
            transition="background-color 0.3s ease"
            as={RouterLink}
            to={`/category/${cat.toLowerCase()}`}
          >
            {cat}
          </Button>
        ))}
      </Box>
      <Box position="relative">
        <RouterLink to="/cart">
          <IconButton
            icon={<FaShoppingCart />}
            bg="red.500"
            color="white"
            _hover={{ bg: "red.700" }}
            size="lg"
          />
          {cartCount > 0 && (
            <Badge
              colorScheme="green"
              borderRadius="full"
              position="absolute"
              top="-1"
              right="-1"
              fontSize="0.8em"
              p="0.2em 0.5em"
            >
              {cartCount}
            </Badge>
          )}
        </RouterLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
