// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * subheader component.
 * @description subheader
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Subheader = ({ className, style }: SubheaderProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(className)} style={style}>
      <Typography className={classes.title} variant="h3" component="h3">
        {translated.about_us}
      </Typography>
      <Typography className={classes.title_2} variant="h2" component="h2">
        {translated.title_1}
      </Typography>
      <Typography className={classes.title_2} variant="h2" component="h2">
        {translated.title_2}
      </Typography>
      <Typography
        className={cx(classes.text, classes.grayText)}
        variant="body1"
        component="p"
      >
        {translated.paragraph}
      </Typography>
      <Typography
        className={cx(classes.text, classes.grayText)}
        variant="body1"
        component="p"
      >
        {translated.paragraph2}
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type SubheaderProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Subheader.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Subheader;
