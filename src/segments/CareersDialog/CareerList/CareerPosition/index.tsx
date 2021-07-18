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
  TextField,
  Container,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import AttributeList from './AttributeList/index';
import styles from './styles';
import { useDynamicInputs } from './useDynamicInputs';

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

  const { comps } = useDynamicInputs();

  const steps = [
    `Select campaign settings`,
    `Create an ad group`,
    `Create an ad`,
  ];

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  /*  const [cv, setCv] = useState(); */

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

  const handleAttachCV = () => {
    /*  setCv(e.target.files[0]); */
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
            {activeStep === -1 && (
              <Box className={classes.dialogContent}>
                <Typography className={classes.dialogDescription}>
                  {position.description}
                </Typography>

                <AttributeList attribute={position.requirements} />
                <AttributeList attribute={position.responsibilities} />
                <AttributeList attribute={position.ourOffer} />
              </Box>
            )}
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
            {activeStep === 0 && (
              <Box
                marginTop="50px"
                marginBottom="50px"
                display="flex"
                justifyContent="center"
              >
                <Container maxWidth="sm">
                  <form
                    style={{
                      display: `flex`,
                      flexDirection: `column`,
                      marginBottom: `20px`,
                    }}
                  >
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" justifyContent="space-between">
                        <TextField
                          required
                          name="first_name"
                          autoComplete="off"
                          style={{
                            marginBottom: `20px`,
                            borderRadius: `4px`,
                            marginRight: `20px`,
                            width: `45%`,
                          }}
                          label="First Name"
                        />
                        <TextField
                          required
                          name="last_name"
                          autoComplete="off"
                          style={{
                            marginBottom: `20px`,
                            borderRadius: `4px`,
                            width: `45%`,
                          }}
                          label="Last Name"
                        />
                      </Box>
                      <TextField
                        required
                        name="email"
                        type="email"
                        style={{
                          marginBottom: `20px`,
                          borderRadius: `4px`,
                        }}
                        label="Email"
                      />
                      <TextField
                        required
                        name="phone_number"
                        style={{
                          marginBottom: `20px`,
                          borderRadius: `4px`,
                        }}
                        label="Phone number"
                      />
                    </Box>

                    <TextField
                      required
                      name="message"
                      autoComplete="off"
                      multiline
                      rows={6}
                      style={{
                        marginBottom: `10px`,
                        borderRadius: `4px`,
                      }}
                      label="Message"
                    />
                  </form>
                </Container>
              </Box>
            )}

            {activeStep === 1 && (
              <Box display="flex" flexDirection="column">
                {comps}
                <input
                  type="file"
                  onClick={handleAttachCV}
                  style={{ width: `fit-content` }}
                />
              </Box>
            )}
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
