// Deps scoped imports.
import { makeStyles } from '@material-ui/core';
import React from 'react';

// Project scoped imports.
import { FOOTER_LINKS } from '../../variables';

// Component scoped imports.
import { mapLinkColToComponent } from './methods';
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * FooterLinks component.
 * @description Component represents the section with links
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const FooterLinks = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      {FOOTER_LINKS.map(mapLinkColToComponent({}, { className: classes.link }))}
    </>
  );
};

// Default props.
FooterLinks.defaultProps = {};

// Time to export! 🚚
export default FooterLinks;
