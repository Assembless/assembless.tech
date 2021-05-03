// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import cx from 'classnames';

// Component scoped imports.
import styles from './styles';
import FooterHeadLeft from './FooterHeadLeft';
import FooterHeadRight from './FooterHeadRight';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * FooterHead component.
 * @description This is the head of footer segment
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const FooterHead = ({ className, style }: FooterHeadProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <FooterHeadLeft />
      <FooterHeadRight />
    </Box>
  );
};

// Props the component accepts.
type FooterHeadProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
FooterHead.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default FooterHead;
