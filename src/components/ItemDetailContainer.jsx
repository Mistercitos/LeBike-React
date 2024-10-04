import React, { useEffect, useState, useContext } from 'react';
import { Box, Image, Text, Flex, Button, Icon, HStack, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Asegúrate de tener configurado Firebase
import { CartContext } from '../context/CartContext'; // Importar el contexto del carrito

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Control de la cantidad

  const { addToCart } = useContext(CartContext); // Usamos el contexto del carrito

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  // Función para incrementar la cantidad
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Función para disminuir la cantidad
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Mínimo 1
  };

  // Función para agregar al carrito
  const handleAddToCart = () => {
    addToCart(item, quantity); // Añadir el producto con la cantidad seleccionada
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (!item) {
    return <Text>Error al cargar el producto</Text>;
  }

  return (
    <Flex p="6" justifyContent="center" alignItems="center" wrap="wrap" direction={['column', 'row']}>
      
      {/* Imagen del producto */}
      <Box flex="1" maxW="600px" mb={4}>
        <Image 
          src={item.imagen} 
          alt={item.nombre} 
          objectFit="cover" 
          width="100%" 
          height="auto"
          borderRadius="lg"
        />
      </Box>

      {/* Información del producto */}
      <Box flex="1" ml={[0, 8]} maxW="500px" textAlign={["center", "left"]}>
        <Text fontSize="2xl" fontWeight="bold" mb={2}>{item.marca}</Text>
        
        <Text fontSize="4xl" fontWeight="bold" mb={4}>{item.nombre}</Text>

        {/* Tipo y Marca en lugar de Reseñas */}
        <Text fontSize="lg" fontWeight="bold" color="gray.500" mb={2}>
          Tipo: {item.tipo}
        </Text>

        <Text fontSize="lg" fontWeight="bold" color="gray.500" mb={4}>
          Marca: {item.marca}
        </Text>

        {/* Precio */}
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          USD {item.precio.toLocaleString()}
        </Text>

        {/* Descripción del producto */}
        <Text fontSize="lg" color="gray.300" mb={6}>
          {item.descripcion}
        </Text>

        {/* Control de cantidad */}
        <HStack spacing={4} mb={6}>
          <Button onClick={decrementQuantity} disabled={quantity <= 1}>-</Button>
          <Input value={quantity} readOnly textAlign="center" width="50px" />
          <Button onClick={incrementQuantity}>+</Button>
        </HStack>

        {/* Botón de agregar al carrito */}
        <Button colorScheme="red" size="lg" width="100%" mb={4} onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </Box>
    </Flex>
  );
};

export default ItemDetailContainer;
