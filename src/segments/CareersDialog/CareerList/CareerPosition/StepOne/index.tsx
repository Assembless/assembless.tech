// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container, TextField } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * StepOne component.
 * @description This is the first step of stepper that cointains customer form to fill.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const StepOne = ({ className, style }: StepOneProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
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
                className={classes.nameInputs}
                style={{
                  marginRight: `20px`,
                }}
                label="First Name"
              />
              <TextField
                required
                name="last_name"
                autoComplete="off"
                className={classes.nameInputs}
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
  );
};

// Props the component accepts.
type StepOneProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
StepOne.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default StepOne;
