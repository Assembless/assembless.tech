/* eslint-disable react/destructuring-assignment */
import React, { JSXElementConstructor } from 'react';
import { Box, Link } from '@material-ui/core';

const mapLinkToComponent = (
  props: React.ComponentProps<JSXElementConstructor<any>>,
) => (link: { title: string; href: string }) => (
  <Link key={link.href} {...link} {...props}>
    {link.title}
  </Link>
);

export const mapLinkColToComponent = (
  props: React.ComponentProps<JSXElementConstructor<any>>,
  linkProps: React.ComponentProps<JSXElementConstructor<any>>,
) => (col: { title: string; href: string }[]) => (
  <Box
    key={JSON.stringify(col)}
    display="flex"
    flexDirection="column"
    {...props}
  >
    {col.map(mapLinkToComponent(linkProps))}
  </Box>
);
