/* eslint-disable jsx-a11y/iframe-has-title */
// Deps scoped imports.
import React from 'react';
import { makeStyles, Card } from '@material-ui/core';
// import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * ContactMap component.
 * @description This component displays a map.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const ContactMap = ({ className, style }: ContactMapProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={cx(classes.root, className)} style={style}>
      <iframe
        style={{ border: 0, width: `100%`, height: `100%` }}
        loading="eager"
        title="Google Maps"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_KG3mG-3-FLrqnSKJEXkYQzTMxaAJ77k&q=Space+Needle,Seattle+WA"
      />
    </Card>
  );
};

// Props the component accepts.
type ContactMapProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
ContactMap.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ContactMap;
