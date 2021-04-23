// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
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
  activeStep,
  setActiveStep,
}: StepperContainerProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  const handleStep = (index: number) => () => {
    setActiveStep(index);
  };

  const deliverySteps = [
    { title: `stepperTitle0` },
    { title: `stepperTitle1` },
    { title: `stepperTitle2` },
    { title: `stepperTitle3` },
    { title: `stepperTitle4` },
  ];

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        classes={{
          root: classes.stepper,
        }}
      >
        {deliverySteps.map((step, index) => (
          <Step onClick={handleStep(index)}>
            <StepLabel
              /* StepIconComponent={ } */
              classes={{
                alternativeLabel: classes.alternativeLabel,
                iconContainer: classes.iconContainer,
                labelContainer: classes.labelContainer,
                active: classes.active,
              }}
            >
              <Typography>{translated[step.title]}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

// Props the component accepts.
type StepperContainerProps = {
  className?: string;
  style?: React.CSSProperties;
  activeStep: number;
  setActiveStep: (arg: number) => void;
};

// Default props.
StepperContainer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default StepperContainer;
