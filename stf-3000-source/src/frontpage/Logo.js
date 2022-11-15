/** Copyright (c) 2022, Cam Parker **/

import {
  Image, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

export default function Logo(){
  const ImageMode = useColorModeValue("../../logo_light_cropped.svg", "../../logo_dark_cropped.svg")

  return (
    <Image // TODO: put an actual header logo here
      src={ImageMode}
      object-fit='fill'
      alt="Strangetown Funk"
    />
  );
}