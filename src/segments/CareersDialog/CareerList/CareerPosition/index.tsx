// Deps scoped imports.
import React, { useRef, useState } from 'react';
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
  TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cx from 'classnames';
import { useLittera } from '@assembless/react-littera';

// Project scoped imports.

// Component scoped imports.
import AttributeList from './AttributeList/index';
import styles from './styles';
import translations from './trans';

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
  const translated = useLittera(translations);

  const steps = [
    `Select campaign settings`,
    `Create an ad group`,
    `Create an ad`,
  ];

  const subscribe = useRef();

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      handleClose();
      setActiveStep(0);
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
        <Box>
          <Box className={classes.dialogHead}>
            <h3 className={classes.dialogTitle}>{position.name}</h3>
            <IconButton style={{ marginTop: 36 }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box style={{ padding: `20px 60px 38px 60px` }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === 0 && (
              <Box className={classes.dialogContent}>
                <Typography className={classes.dialogDescription}>
                  {position.description}
                </Typography>

                <AttributeList attribute={position.requirements} />
                <AttributeList attribute={position.responsibilities} />
                <AttributeList attribute={position.ourOffer} />
              </Box>
            )}

            {activeStep === 1 && (
              <Box>
                <form style={{ display: `flex`, flexDirection: `column` }}>
                  <TextField
                    required
                    name="first_name"
                    autoComplete="off"
                    style={{
                      marginBottom: `10px`,
                      borderRadius: `4px`,
                    }}
                    label={translated.title}
                  />
                  <TextField
                    inputRef={subscribe}
                    name="last_name"
                    autoComplete="off"
                    style={{
                      marginBottom: `10px`,
                      borderRadius: `4px`,
                    }}
                    label={translated.title}
                  />
                  <TextField
                    inputRef={subscribe}
                    required
                    name="email"
                    type="email"
                    autoComplete="off"
                    style={{
                      marginBottom: `10px`,
                      borderRadius: `4px`,
                    }}
                    label={translated.title}
                  />
                  <TextField
                    inputRef={subscribe}
                    required
                    name="experience"
                    type="number"
                    autoComplete="off"
                    style={{
                      marginBottom: `10px`,
                      borderRadius: `4px`,
                    }}
                    label={translated.title}
                  />
                  <TextField
                    inputRef={subscribe}
                    required
                    name="time_available"
                    type="string"
                    autoComplete="off"
                    style={{
                      marginBottom: `10px`,
                      borderRadius: `4px`,
                    }}
                    label={translated.title}
                  />
                </form>
              </Box>
            )}

            {activeStep === 2 && <Box>complete</Box>}
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

interface IPosition {
  name: string;
  type: string;
  description: string;
  requirements: TPositionDetails;
  responsibilities: TPositionDetails;
  ourOffer: TPositionDetails;
}
