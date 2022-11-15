/** Copyright (c) 2022, Cam Parker **/

import React from "react";
import { Card, CardBody } from "@chakra-ui/card";
import { Text } from "@chakra-ui/react";

const testData = {
  title: "Hello World!",
  date: "1/1/70",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

//TODO: Props and actual data rather than placeholder.
export default function PostPreview() {
  
  return(
      <Card direction={"row"} px={"5%"}>
        <CardBody>
          <Text align={"left"}>{testData.body}</Text>
        </CardBody>
      </Card>
  );
}