/* eslint-disable jsx-a11y/iframe-has-title */
// Deps scoped imports.
import React from 'react';
import { makeStyles, Card } from '@material-ui/core';
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
    <Card id="map" className={cx(classes.root, className)} style={style} />
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
