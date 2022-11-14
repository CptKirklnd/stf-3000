import {
  ChakraProvider,
  Grid,
  GridItem,
  theme
} from '@chakra-ui/react';
import React from 'react';
import FrontPage from './frontpage/FrontPage';
import NoContent from './NoContent';
import UniversalHeader from './UniversalHeader';

function App() {
  const displayContent = true;

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

export default App;
