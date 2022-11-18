/** Copyright (c) 2022, Cam Parker **/

import {
    Center,
    Grid,
    GridItem,
    SimpleGrid,
} from '@chakra-ui/react';
import PostPreview from './PostPreview';
import Logo from './Logo';
import React from "react";

const PREVIEW_PER_PAGE = 9;
const PREVIEW_PER_ROW = {
    sm: 1,
    md: 2,
    xl: 3,
};

//this represents a queue of truncated post content
//will be grabbed via query. DON'T QUERY THE WHOLE POST WE'RE GONNA TRUNCATE IT ANYWAY
const testDataQueue = [1, 2, 3, 4 , 5, 6, 8, 9, 10,];

export default function FrontPage() {
    const previews = () => {
        const postPreviews= [];
        while(testDataQueue.length > 0){
            postPreviews.push(<GridItem><PostPreview/></GridItem>);
        }
        return postPreviews;
    }
    
    return (
        <Center>
            <Grid 
                templateAreas={`"logo"
                                "posts"`}
                w={{sm: "80%", md: "60%"}}
                gap={20}
                pb={"80px"}
            >
                <GridItem area={"logo"} pb={"30px"}>
                    <Logo />
                </GridItem>
                <GridItem area={"posts"}>
                    <SimpleGrid columns={PREVIEW_PER_ROW} gap={4}>
                        {/* TODO: pass data from post to preview element */}
                        {testDataQueue.map(postInfo => <PostPreview/>)}
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Center>
    );
}