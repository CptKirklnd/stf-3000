import {
    Box,
    Grid, Text, VStack
} from '@chakra-ui/react';
import React from "react";

function FrontPage() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Text>Hello World!</Text>
                </VStack>
            </Grid>
        </Box>
    );
}

export default FrontPage;