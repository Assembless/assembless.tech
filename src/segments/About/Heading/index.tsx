// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Heading component.
 * @description Component show the label and title on About us section. Also for some reason shows the content (paragraphs)...?
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Heading = ({ className, style }: HeadingProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(className)} style={style}>
      <Typography color="primary" className={classes.label} variant="h3">
        {translated.about_us}
      </Typography>
      <Typography className={classes.title} variant="h2">
        {translated.title}
      </Typography>

      <Typography className={cx(classes.paragraph)} paragraph color="primary">
        {translated.paragraph}
      </Typography>
      <Typography className={cx(classes.paragraph)} paragraph color="primary">
        {translated.paragraph2}
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type HeadingProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Heading.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Heading;
