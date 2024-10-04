// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambio aquí
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { CartProvider } from './context/CartContext';

const root = document.getElementById('app');  // Asegúrate de que el ID coincida con tu index.html
if (root) {
    const rootElement = ReactDOM.createRoot(root);  // Uso correcto de createRoot
    rootElement.render(
        <ChakraProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ChakraProvider>
    );
} else {
    console.error('Failed to find the root element');
}
