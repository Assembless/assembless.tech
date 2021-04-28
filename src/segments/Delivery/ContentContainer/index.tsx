// Deps scoped imports.
import React, { useState } from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import StepperContainer from './StepperContainer';
import DeliverCard from './DeliverCard';

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
}: ContentContainerProps): JSX.Element => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Container>
        <Box position="relative">
          <StepperContainer
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <DeliverCard activeStep={activeStep} />
        </Box>
      </Container>
    </Box>
  );
};

// Props the component accepts.
type ContentContainerProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
ContentContainer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ContentContainer;
