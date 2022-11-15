/** Copyright (c) 2022, Cam Parker **/

import {
    Center,
    Grid,
    GridItem,
    VStack,
} from '@chakra-ui/react';
import PostPreview from './PostPreview';
import Logo from './Logo';
import React from "react";

const POSTS_PER_PAGE = 5;

export default function FrontPage() { //TODO: create n PostPreviews, not just the one.

    return (
        <Center>
            <Grid 
                templateAreas={`"logo"
                                "posts"`}
                maxW={"60%"}
                minW={"60%"}
                gap={10}
                pb={"80px"}
            >
                <GridItem area={"logo"} pb={"30px"}>
                    <Logo />
                </GridItem>
                <GridItem area={"posts"}>
                    <VStack gap={"40px"}>
                        {/* TODO: change this to a forEach once we're actually pulling post data. */}
                        {Array.from({length: POSTS_PER_PAGE}, () => <PostPreview />)}
                    </VStack>
                </GridItem>
            </Grid>
        </Center>
    );
}