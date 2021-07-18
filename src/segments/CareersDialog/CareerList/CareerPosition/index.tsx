// Deps scoped imports.
import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Dialog,
  IconButton,
  Button,
  SvgIcon,
  Stepper,
  StepLabel,
  Step,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.

import styles from './styles';
import DialogFirstView from './DialogFirstView';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * CareerPosition component.
 * @description This is available singel career position component.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const CareerPosition = ({
  className,
  style,
  position,
}: CareerPositionProps): JSX.Element => {
  const classes = useStyles();

  const steps = [
    `Select campaign settings`,
    `Create an ad group`,
    `Create an ad`,
  ];

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveStep(-1);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      handleClose();
    }
  };

  return (
    <>
      <Box
        className={cx(classes.root, className)}
        style={style}
        onClick={handleOpen}
      >
        <Box>
          <Typography className={classes.nameText} variant="h4">
            {position.name}
          </Typography>
          <Typography className={classes.typeText} variant="h5">
            {position.type}
          </Typography>
        </Box>
        <SvgIcon className={classes.icon} component={ArrowForwardIosIcon} />
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        scroll="body"
        classes={{ paperWidthLg: classes.dialog }}
      >
        <Box display="flex" flexDirection="column">
          <Box className={classes.dialogHead}>
            <h3 className={classes.dialogTitle}>{position.name}</h3>
            <IconButton style={{ marginTop: 36 }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{ padding: `20px 60px 38px 60px` }}
          >
            {activeStep === -1 && <DialogFirstView position={position} />}
            {activeStep >= 0 && (
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                style={{ marginTop: 30 }}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            )}
            {activeStep === 0 && <StepOne />}
            {activeStep === 1 && <StepTwo />}

            <Box className={classes.btn}>
              <Button
                color="primary"
                variant="contained"
                style={{ width: 186, height: 72, fontSize: 24 }}
                onClick={handleNext}
              >
                apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

type CareerPositionProps = {
  className?: string;
  style?: React.CSSProperties;
  position: IPosition;
};

CareerPosition.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default CareerPosition;

type TPositionDetails = {
  title: string;
  list: string[];
};

export interface IPosition {
  name: string;
  type: string;
  description: string;
  requirements: TPositionDetails;
  responsibilities: TPositionDetails;
  ourOffer: TPositionDetails;
}
