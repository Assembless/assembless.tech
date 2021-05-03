// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Container,
  IconButton,
  Button,
} from '@material-ui/core';
import { Facebook, GitHub, Twitter } from '@material-ui/icons';
import cx from 'classnames';

// Project scoped imports.
import Logotype from '@/components/Logotype';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from '@/assets/logo_square_transparent.svg';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactLitteraLogo from '@/assets/hand_with_phone_illustration.png';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GithubLogo from '@/assets/GitHub_Logo_White.png';

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
