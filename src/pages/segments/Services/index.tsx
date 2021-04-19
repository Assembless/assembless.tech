// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Services component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Services = ({ className, style }: ServicesProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box display="flex" flexDirection='column' justifyContent='center' >
     <Typography className={classes.sectionName}>services</Typography>
    <Typography className={classes.sectionSubTitle}>See what we <br/> can do fror your business</Typography>
    </Box>
    <Box>cards</Box>
    </Box>
  );
};

// Props the component accepts.
type ServicesProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Services.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Services;
