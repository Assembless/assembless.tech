// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import cx from 'classnames';
import { navigate } from 'gatsby';

// Project scoped imports.

// Component scoped imports.
import { SEGMENTS_LIST } from '@/utils/segements';
import HeroTitle from './HeroTitle';
import HeroIllustration from './HeroIllustration';
import HeroExploreButton from './HeroExploreButton';
import styles from './styles';

// Creates a hk for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Hero component.
 * @description This segment component displays the very top of the page.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Hero = ({
  className,
  style,
  scrollToSection,
}: HeroProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Container className={classes.container}>
        <Box className={classes.titleWrapper}>
          <HeroTitle />

          <HeroExploreButton scrollToSection={scrollToSection} />
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
  scrollToSection?: () => void;
};

// Default props.
Hero.defaultProps = {
  className: ``,
  style: {},
  scrollToSection: () => {
    navigate(`#${SEGMENTS_LIST[1]}`);
  },
};

// Time to export! 🚚
export default Hero;
