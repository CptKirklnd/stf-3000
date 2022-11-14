import { Flex, Spacer } from '@chakra-ui/react';
import React from "react";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HamburgerPanel } from './HamburgerPanel';

/* Contains day/night mode switcher. Shouldn't render on mobile screens. */
/* TODO: Render based on window width. */
function UniversalHeader() {
    return (
        <Flex pt={2}>
            <HamburgerPanel mx={2} justifySelf="flex-start" />
            <Spacer />
            <ColorModeSwitcher mx={2} justifySelf="flex-end" />
        </Flex>
    )
}
export default UniversalHeader;