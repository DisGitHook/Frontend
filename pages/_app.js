import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";

import "@fontsource-variable/inter";

const proTheme = extendTheme(theme);
const extenstion = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
};
const myTheme = extendTheme(extenstion, proTheme);

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <ColorModeScript initialColorMode={"dark"} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
