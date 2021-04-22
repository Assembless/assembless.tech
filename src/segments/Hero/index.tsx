// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import HeroTitle from './HeroTitle';
import HeroIllustration from './HeroIllustration';
import HeroExploreButton from './HeroExploreButton';
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Hero component.
 * @description This segment component displays the very top of the page.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Hero = ({ className, style }: HeroProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Container className={classes.container}>
        <Box className={classes.titleWrapper}>
          <HeroTitle />

          <HeroExploreButton />
        </Box>
        <HeroIllustration />
      </Container>
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
