import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { ImMenu } from 'react-icons/im';

/* Expanding side-panel and display button. */
/* TODO: Implement side panel and onClick to display. */
export const HamburgerPanel = props => {
    const HamburgerButton = ImMenu;

    return (
        <IconButton
            size="lg"
            icon={<HamburgerButton />}
            variant="ghost"
            color="current"
            onClick={() => { alert('TODO: Implement Me!') }}
            {...props}
        />
    );
}