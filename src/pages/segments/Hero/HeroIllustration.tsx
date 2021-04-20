// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import cx from 'classnames';

// Project scoped imports.r
import Circle from '@/components/Circle';

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Hero illustration component.
 * @description This component handles displaying the illustration on Hero segment.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const HeroIllustration = ({
  className,
  style,
}: HeroIllustrationProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      position="relative"
      className={cx(classes.illustrationRoot, className)}
      style={style}
    >
      <StaticImage
        src="../../../assets/phone_hand_illustration.png"
        alt="Phone hand illustration"
        height={632}
        className={classes.illustration}
      />
      <Circle className={classes.illustrationCircle} />
    </Box>
  );
};

// Props the component accepts.
type HeroIllustrationProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
HeroIllustration.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default HeroIllustration;
