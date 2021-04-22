// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * BackgroundNotch component.
 * @description This is background rounded element
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const BackgroundNotch = ({
  className,
  style,
}: BackgroundNotchProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box className={classes.innerBox}>
        <Box className={classes.layer}>
          <Box className={classes.innerLayer} />
        </Box>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type BackgroundNotchProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
BackgroundNotch.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default BackgroundNotch;
