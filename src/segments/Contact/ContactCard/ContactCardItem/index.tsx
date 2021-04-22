// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * ContactCardItem component.
 * @description This component is used for displaying information like email, address etc.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const ContactCardItem = ({
  className,
  style,
  value,
  icon,
}: ContactCardItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      className={cx(classes.root, className)}
      style={style}
    >
      {icon}
      <Typography variant="h3" className={classes.title}>
        {value}
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type ContactCardItemProps = {
  className?: string;
  style?: React.CSSProperties;
  value: string;
  icon: any;
};

// Default props.
ContactCardItem.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ContactCardItem;
