// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';

// Project scoped imports.
import TypingCarousel from '@/components/TypingCarousel';

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Hero title component.
 * @description This component handles displaying the title and slogan on Hero segment.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const HeroTitle = ({ className, style }: HeroTitleProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={className} style={style}>
      <Typography className={classes.title}>
        {translated.title}
        {` `}
        <TypingCarousel
          style={{ fontWeight: 800 }}
          values={translated.typings}
        />
      </Typography>
      <Typography className={classes.slogan}>{translated.slogan}</Typography>
    </Box>
  );
};

// Props the component accepts.
type HeroTitleProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
HeroTitle.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default HeroTitle;
