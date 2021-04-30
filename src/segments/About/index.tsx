// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import PersonImage from './PersonImage/index';
import Subheader from './Subheader';
import Media from './SocialMedia';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * About component.
 * @description This component displays the about segment with CEO photo and a few words about the company.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const About = ({ className, style }: AboutProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Container id="aboutUs">
      <Box className={cx(classes.root, className)} style={style}>
        <Box className={classes.contentContainer}>
          <Box className={classes.subheader}>
            <Subheader />
            <Media />
          </Box>
          <PersonImage />
        </Box>
      </Box>
    </Container>
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
