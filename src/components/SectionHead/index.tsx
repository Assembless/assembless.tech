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
 * ServicesHead component.
 * @description This is head of services section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const SectionHead = ({
  className,
  style,
  title,
  subTitle,
}: SectionHeadProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Typography className={classes.sectionTitle}>{title}</Typography>
      <Typography className={classes.sectionSubTitle}>{subTitle}</Typography>
    </Box>
  );
};

// Props the component accepts.
type SectionHeadProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  subTitle: string;
};

// Default props.
SectionHead.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default SectionHead;
