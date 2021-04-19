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
 * Hero component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Hero = ({ className, style }: HeroProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Typography variant="h3" className={classes.title}>
        {translated.title}
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type HeroProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Hero.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Hero;
