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
 * Circle component.
 * @description This component displays a grey circles commonly used for background purposes.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Circle = ({ className, style }: CircleProps): JSX.Element => {
  const classes = useStyles();

  const altStyle = {
    borderRadius: style?.width || style?.height || undefined,
  };

  return (
    <Box
      className={cx(classes.root, className)}
      style={{ ...altStyle, ...style }}
    />
  );
};

// Props the component accepts.
type CircleProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Circle.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Circle;
