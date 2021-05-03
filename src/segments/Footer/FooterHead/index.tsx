// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, IconButton } from '@material-ui/core';
import { useLittera } from 'react-littera';
import { Facebook, GitHub, Twitter } from '@material-ui/icons';
import cx from 'classnames';

// Project scoped imports.
import Logotype from '@/components/Logotype';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from '@/assets/logo_square_transparent.svg';

// Component scoped imports.
import styles from './styles';
import translations from './trans';
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
  const translated = useLittera(translations);
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
