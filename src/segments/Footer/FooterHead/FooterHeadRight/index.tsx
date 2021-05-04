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
 * FooterHeadRight component.
 * @description This is the right part of footer head
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const FooterHeadRight = ({
  className,
  style,
}: FooterHeadRightProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Typography className={classes.contactDetailsTitle} variant="h4">
        {translated.title}
      </Typography>
      <Typography className={classes.contactDetailsText} paragraph>
        {translated.line1}
      </Typography>
      <Typography className={classes.contactDetailsText} paragraph>
        {translated.line2}
      </Typography>
      <Typography className={classes.contactDetailsText} paragraph>
        {translated.line3}
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type FooterHeadRightProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
FooterHeadRight.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default FooterHeadRight;
