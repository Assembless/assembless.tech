// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container, Typography } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
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
}: ContentContainerProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Container>
        <StepperContainer />
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
