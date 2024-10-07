import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  accent: {
    100: '#fffae6',
    200: '#e2e2e2',
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: '0px',
    },
    variants: {
      solid: (props) => ({
        bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.500',
        color: 'white',
      }),
    },
  },
};

const theme = extendTheme({ colors, components });
export default theme;
