// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * StepperContainer component.
 * @description This is the StepperContainer component
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const StepperContainer = ({
  className,
  style,
}: StepperContainerProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Stepper>
        <Step>
          <StepLabel>xxx</StepLabel>
        </Step>
      </Stepper>
      <Stepper>
        <Step>
          <StepLabel>xxx</StepLabel>
        </Step>
      </Stepper>
      <Stepper>
        <Step>
          <StepLabel>xxx</StepLabel>
        </Step>
      </Stepper>
      <Typography variant="h3" className={classes.title}>
        stepper
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type StepperContainerProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
StepperContainer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default StepperContainer;
