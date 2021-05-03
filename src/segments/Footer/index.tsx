// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';

import cx from 'classnames';

// Component scoped imports.
import LocaleSwitch from '@/components/LocaleSwitch';
import styles from './styles';
import FooterHead from './FooterHead';
import FooterBody from './FooterBody';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Footer component.
 * @description Component displayed at the bottom of page containing links etc.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Footer = ({ className, style }: FooterProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Container>
        <Box display="flex" flexDirection="column" height="100%">
          <FooterHead />
          <FooterBody />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.bottomBar}
          >
            <Typography style={{ fontSize: 14 }}>
              Copyright © 2021, Assembless
            </Typography>
            <LocaleSwitch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Props the component accepts.
type FooterProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Footer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Footer;
