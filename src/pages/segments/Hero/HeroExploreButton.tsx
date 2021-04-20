// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { useLittera } from 'react-littera';

// Project scoped imports.r
import Circle from '@/components/Circle';

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Hero explore button component.
 * @description This component handles displaying the explore button on Hero segment.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const HeroExploreButton = ({
  className,
  style,
}: HeroExploreButtonProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="227px"
      className={className}
      style={{ marginTop: 120, ...style }}
    >
      <Button
        variant="outlined"
        className={classes.exploreButton}
        color="primary"
      >
        {translated.explore}
      </Button>
      <Circle className={classes.exploreButtonCircle} />
    </Box>
  );
};

// Props the component accepts.
type HeroExploreButtonProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
HeroExploreButton.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default HeroExploreButton;
