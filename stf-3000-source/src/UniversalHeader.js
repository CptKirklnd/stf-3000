import React from "react";

import { ColorModeSwitcher } from './ColorModeSwitcher';

/* Contains day/night mode switcher. Shouldn't render on mobile screens. */
/* TODO: Render based on window width. */
function UniversalHeader() {
  return (
    <ColorModeSwitcher justifySelf="flex-end" />
  )
}
export default UniversalHeader;