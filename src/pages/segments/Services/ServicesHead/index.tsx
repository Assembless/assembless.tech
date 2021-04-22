// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * ServicesHead component.
 * @description This is head of services section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const ServicesHead = ({ className, style }: ServicesHeadProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Typography className={classes.sectionTitle}>
        {translated.services}
      </Typography>
      <Typography className={classes.sectionSubTitle}>
        {translated.subTitleLine1}
      </Typography>
      <Typography className={classes.sectionSubTitle}>
        {translated.subTitleLine2}
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type ServicesHeadProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
ServicesHead.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ServicesHead;
