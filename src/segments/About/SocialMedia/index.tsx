// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
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
      <GitHub className={classes.icon} style={{ fontSize: `3rem` }} />
      <Facebook
        className={classes.icon}
        style={{ fontSize: `3rem`, borderRadius: `100px` }}
      />
      <Twitter className={classes.icon} style={{ fontSize: `3rem` }} />
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
