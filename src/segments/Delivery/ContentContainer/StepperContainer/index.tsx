// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepIconProps,
  StepConnector,
} from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import { ImportantDevices } from '@material-ui/icons';
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

const CircleIcon = (props: StepIconProps) => {
  const classes = useStyles();
  const { active } = props;
  return (
    <Box
      className={cx(classes.root, {
        [classes.active]: active,
      })}
    >
      <Box
        style={{
          width: `${active ? `11px` : `5px`}`,
          height: `${active ? `11px` : `5px`}`,
          backgroundColor: `#222`,
          borderRadius: `50%`,
        }}
      />
    </Box>
  );
};

const ProductIcon = (props: StepIconProps) => {
  const classes = useStyles();
  const { active } = props;
  return (
    <Box
      style={{
        position: `relative`,
      }}
    >
      <Box
        style={{
          width: `207px`,
          height: `207px`,
          backgroundColor: `#EBEBEB`,
          borderRadius: `50%`,
          zIndex: 10,
          position: `absolute`,
          top: 0,
          left: -30,
          transform: `translateY(-50%)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          border: `${active ? `6px solid #222` : `none`}`,
        }}
      >
        <ImportantDevices className={classes.productIcon} />
      </Box>
    </Box>
  );
};

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
        connector={
          <StepConnector
            classes={{
              line: classes.connectorLine,
            }}
          />
        }
      >
        {deliverySteps.map((step, index, deliverySteps) => (
          <Step onClick={handleStep(index)}>
            <StepLabel
              classes={{
                alternativeLabel: classes.alternativeLabel,
                iconContainer: classes.iconContainer,
                labelContainer: classes.labelContainer,
              }}
              StepIconComponent={
                !(index === deliverySteps.length - 1) ? CircleIcon : ProductIcon
              }
            >
              {translated[step.title]}
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
