/** Copyright (c) 2022, Cam Parker **/

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const config = {
  initialColorMde: 'dark',
  useSystemColorMode: true,
}

//TODO: make logo slightly larger on phone screens. slightly uncomfortable amount of whitespace there
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'gray.900')(props),
      }
    })
  }
});

export default theme;