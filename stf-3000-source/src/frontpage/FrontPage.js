import {
    Box,
    Grid,
    VStack,
} from '@chakra-ui/react';
import Logo from './Logo';
import React from "react";

function FrontPage() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Logo />
                </VStack>
            </Grid>
        </Box>
    );
}

export default FrontPage;