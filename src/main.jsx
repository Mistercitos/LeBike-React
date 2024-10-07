import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import { CartProvider } from "./context/CartContext";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ChakraProvider theme={theme}>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>
);
