// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * ButtonContainer component.
 * @description This is a bottom container for the button
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const ButtonContainer = ({
  className,
  style,
  scrollToSection,
}: ButtonContainerProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        size="large"
        onClick={scrollToSection}
      >
        {translated.contact}
      </Button>
    </Box>
  );
};

// Props the component accepts.
type ButtonContainerProps = {
  className?: string;
  style?: React.CSSProperties;
  scrollToSection?: () => void;
};

// Default props.
ButtonContainer.defaultProps = {
  className: ``,
  style: {},
  scrollToSection: () => undefined,
};

// Time to export! 🚚
export default ButtonContainer;
