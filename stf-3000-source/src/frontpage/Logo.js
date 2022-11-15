/** Copyright (c) 2022, Cam Parker **/

import {
  Image, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

function Logo(){
  const ImageMode = useColorModeValue("../../logo_light.svg", "../../logo_dark.svg")

  return (<Image // TODO: put an actual header logo here
    src={ImageMode}
    object-fit='fill'
    alt="Strangetown Funk"
  />)
}

export default Logo;