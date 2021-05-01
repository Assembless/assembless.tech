// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import PersonImage from './PersonImage/index';
import Heading from './Heading';
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={cx(classes.root, className)}
      style={style}
      id="aboutUs"
    >
      <Container>
        <Box className={classes.contentContainer}>
          <Box className={classes.subheader}>
            <Heading />
            <Media />
          </Box>
          <PersonImage />
        </Box>
      </Container>
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
