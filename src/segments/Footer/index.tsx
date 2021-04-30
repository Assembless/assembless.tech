// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.
import Logotype from '@/components/Logotype';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from '@/assets/logo_square_transparent.svg';

// Component scoped imports.
import LocaleSwitch from '@/components/LocaleSwitch';
import FooterLinks from './FooterLinks';
import styles from './styles';

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
        <Box display="grid" className={classes.linkBox}>
          <FooterLinks />

          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src={Logo}
                alt="Assembless logo"
                width={100}
                height={100}
                className={classes.logo}
              />
              <Logotype style={{ color: `#FFF` }} />
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.bottomBar}
        >
          <Typography>Copyright © 2021, Assembless</Typography>
          <LocaleSwitch />
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
