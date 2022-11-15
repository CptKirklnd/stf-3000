/** Copyright (c) 2022, Cam Parker **/

import {
  ChakraProvider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import FrontPage from './frontpage/FrontPage';
import NoContent from './NoContent';
import UniversalHeader from './UniversalHeader';
import theme from './theme';

export default function App() {
  const displayContent = true; //TODO: should be an environment variable

  return (
    <ChakraProvider theme={theme}>
      <Grid templateAreas={`"header header"
                            "content content"
                            "footer footer"`}>
        <GridItem area={"header"}>
          <UniversalHeader />
        </GridItem>
        <GridItem area={"content"}>
          {displayContent
            ? (<FrontPage />)
            : (<NoContent />)
          }
        </GridItem>
        <GridItem area={"footer"}></GridItem>
      </Grid>
    </ChakraProvider>
  );
}
