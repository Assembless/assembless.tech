// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import SectionHead from '@/components/SectionHead';
import styles from './styles';
import translations from './trans';
import ContentContainer from './ContentContainer';

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

  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <SectionHead
        title={translated.deliver}
        subTitle={translated.subTitle}
        id="deliver"
      />
      <ContentContainer />
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
