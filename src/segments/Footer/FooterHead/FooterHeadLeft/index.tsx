// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, IconButton } from '@material-ui/core';
import { Facebook, GitHub, Twitter } from '@material-ui/icons';
import cx from 'classnames';

// Project scoped imports.
import Logotype from '@/components/Logotype';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from '@/assets/logo_square_transparent.svg';

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * FooterHeadLeft component.
 * @description This is the left part of footer head
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const FooterHeadLeft = ({
  className,
  style,
}: FooterHeadLeftProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box display="flex" alignItems="center" marginBottom="25px">
        <img
          src={Logo}
          alt="Assembless logo"
          width={100}
          height={100}
          className={classes.logo}
        />
        <Logotype style={{ color: `#FFF`, fontSize: `17px` }} />
      </Box>
      <Box className={classes.iconsContainer}>
        <IconButton
          href="https://github.com/Assembless"
          size="small"
          color="primary"
          aria-label="GitHub"
        >
          <GitHub className={classes.icon} style={{ fontSize: `3rem` }} />
        </IconButton>
        <IconButton
          href="https://facebook.com/Assembless"
          size="small"
          color="primary"
          aria-label="Facebook"
        >
          <Facebook className={classes.icon} style={{ fontSize: `3rem` }} />
        </IconButton>
        <IconButton
          href="https://twitter.com/Assembless"
          size="small"
          color="primary"
          aria-label="Twitter"
        >
          <Twitter className={classes.icon} style={{ fontSize: `3rem` }} />
        </IconButton>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type FooterHeadLeftProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
FooterHeadLeft.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default FooterHeadLeft;
