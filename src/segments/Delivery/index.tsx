// Deps scoped imports.
import React, { useState } from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import SectionHead from '@/components/SectionHead';
import styles from './styles';
import translations from './trans';
import ContentContainer from './ContentContainer';
import DeliverCard from './ContentContainer/DeliverCard';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Delivery component.
 * @description This is the delivery section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Delivery = ({ className, style }: DeliveryProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <Box style={{ width: `100%`, marginBottom: -192 }}>
        <SectionHead
          title={translated.deliver}
          subTitle={translated.subTitle}
          id="deliver"
        />
        <ContentContainer
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <Container style={{ position: `relative`, top: -192 }}>
          <DeliverCard activeStep={activeStep} />
        </Container>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type DeliveryProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Delivery.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Delivery;
