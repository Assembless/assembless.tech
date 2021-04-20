// Deps scoped imports.
import React from 'react';
import '@fontsource/roboto-mono';
import { makeStyles, Typography } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Logotype component.
 * @description This component displays the Assembless logotype.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Logotype = ({ className, style }: LogotypeProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Typography
      component="h1"
      className={cx(classes.root, className)}
      style={style}
    >
      Assembless
    </Typography>
  );
};

// Props the component accepts.
type LogotypeProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Logotype.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Logotype;
