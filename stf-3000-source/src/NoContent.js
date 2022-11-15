import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function NoContent() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Text>Good things are coming soon...</Text>
                </VStack>
            </Grid>
        </Box>
    );
};