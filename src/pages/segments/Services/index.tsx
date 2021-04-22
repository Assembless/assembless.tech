// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import BackgroundNotch from './BackgroundNotch';
import ServicesHead from './ServicesHead';
import CardsContainer from './CardsContainer';
import ButtonContainer from './ButtonContainer';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Services component.
 * @description This is the services section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Services = ({ className, style }: ServicesProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <BackgroundNotch className={classes.backgroundBox} />
      <Container>
        <ServicesHead />
        <CardsContainer />
        <ButtonContainer />
      </Container>
      <BackgroundNotch className={classes.backgroundBox2} />
    </Box>
  );
};

// Props the component accepts.
type ServicesProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Services.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Services;
