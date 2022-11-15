import {
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react';
import Logo from './Logo';
import React from "react";

function FrontPage() {
    return (
            <Grid 
                
            >
                <GridItem>
                    <Logo />
                </GridItem>
                <GridItem>
                    <Text>Placeholder.</Text>
                </GridItem>
            </Grid>
    );
}

export default FrontPage;