import React from 'react';
import FrontPage from './frontpage/FrontPage';
import UniversalHeader from './UniversalHeader';

import {
  ChakraProvider,
  Container,
  theme,
} from '@chakra-ui/react';

function App() {
  const displayContent = true;

  return (
    <ChakraProvider theme={theme}>
      <UniversalHeader/>
      {!displayContent 
        ? (<Container>Good things are coming soon...</Container>)
        : (<FrontPage/>)  
      }  
    </ChakraProvider>
  );
}

export default App;
