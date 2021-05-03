// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import FooterLinks from './FooterLinks';
import ProductsContainer from './ProductsContainer';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * FooterBody component.
 * @description This is the body of footer segment
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const FooterBody = ({ className, style }: FooterBodyProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <FooterLinks />
      <ProductsContainer />
    </Box>
  );
};

// Props the component accepts.
type FooterBodyProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
FooterBody.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default FooterBody;
