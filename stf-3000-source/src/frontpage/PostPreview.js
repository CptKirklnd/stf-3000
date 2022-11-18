/** Copyright (c) 2022, Cam Parker **/

import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/card";
import { Box, Button, Heading, Image, Text, Stack, AspectRatio } from "@chakra-ui/react";

const BODY_MAX_LENGTH = 256; //truncate post previews at 256 characters

const testData = {
  title: "Lorem Ipsum is simply dummy text",
  date: "1/1/70",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

/*TODO: props: {
  title: string
  date: datetime? look up what type this is in typescript
  ...this is not even typescript
  truncatedBody: string?
},*/
export default function PostPreview() {
  
  return(
    <Card maxW='lg'>
      <CardBody>
        <AspectRatio ratio={16/10}>
          <Image
            src='../../jean.png'
            alt='Green double couch with wooden legs'
            fit='fill'
            borderRadius='lg'
          />
        </AspectRatio>
        <Stack mt='3' spacing='2'>
          <Heading size='md'>{testData.title}</Heading>
          <Text>
            {testData.body.substring(0, BODY_MAX_LENGTH-1)}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text as='b' color='pink.600'>
              Read More
        </Text>
      </CardFooter>
    </Card>
  );
}