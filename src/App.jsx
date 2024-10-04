import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; // Importa el componente del carrito
import uploadProducts from './uploadProducts'; // Importa la función para subir productos

function App() {
  useEffect(() => {
    uploadProducts(); // Llama a la función para subir productos al montar la aplicación
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {/* Ruta para la página del carrito */}
      </Routes>
    </Router>
  );
}

export default App;
