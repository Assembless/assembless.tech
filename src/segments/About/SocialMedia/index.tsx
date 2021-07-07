// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, IconButton } from '@material-ui/core';
import cx from 'classnames';
import { Facebook, GitHub, Twitter } from '@material-ui/icons';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Media component.
 * @description Media
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const SocialMedia = ({ className, style }: SocialMediaProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.mediaWrapper, className)} style={style}>
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
  );
};

// Props the component accepts.
type SocialMediaProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
SocialMedia.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default SocialMedia;
