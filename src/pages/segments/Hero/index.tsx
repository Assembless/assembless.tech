// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Container,
} from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

// Project scoped imports.r

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
    <Container className={cx(classes.root, className)} style={style}>
      <Box flexBasis="50%">
        <Typography variant="h3" className={classes.title}>
          {translated.title}
        </Typography>

        <Button variant="outlined" color="primary">
          explore
        </Button>
      </Box>
      <Box flexBasis="50%">
        <StaticImage
          src="../../../assets/phone_hand_illustration.png"
          alt="Phone hand illustration"
          height={300}
        />
      </Box>
    </Container>
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
