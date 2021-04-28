// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';
import { Facebook, GitHub, Twitter } from '@material-ui/icons';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import PersonImage from './PersonImage';
import TextArea from './Subheader';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * About component.
 * @description This component displays the about segment with CEO photo and a few words about the company.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const About = ({ className, style }: AboutProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box className={classes.subheader}>
        <TextArea />
        <Box className={classes.mediaWrapper}>
          <GitHub className={classes.icon} style={{ fontSize: `3rem` }} />
          <Facebook
            className={classes.icon}
            style={{ fontSize: `3rem`, borderRadius: `100px` }}
          />
          <Twitter className={classes.icon} style={{ fontSize: `3rem` }} />
        </Box>
      </Box>
      <Box className={cx(classes.imageSection)}>
        <PersonImage />
        <Typography variant="body2" component="p">
          {translated.name}
        </Typography>
        <Typography variant="body2" component="p">
          {translated.ceo}
        </Typography>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type AboutProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
About.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default About;
