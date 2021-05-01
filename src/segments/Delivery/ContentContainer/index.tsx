// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import StepperContainer from './StepperContainer';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * ContentContainer component.
 * @description This is the content of how we deliver section
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */

const ContentContainer = ({
  className,
  style,
  activeStep,
  setActiveStep,
}: ContentContainerProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={cx(classes.root, className)}
      style={style}
    >
      <Container>
        <Box position="relative">
          <StepperContainer
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Box>
      </Container>
    </Box>
  );
};

// Props the component accepts.
type ContentContainerProps = {
  className?: string;
  style?: React.CSSProperties;
  activeStep: number;
  setActiveStep: (value: number) => void;
};

// Default props.
ContentContainer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ContentContainer;
