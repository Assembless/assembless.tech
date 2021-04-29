// Deps scoped imports.
import React from 'react';
import { makeStyles, Container, Box, Typography } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import ContactCard from './ContactCard';
import ContactMap from './ContactMap';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Contact segment.
 * @description This component displays the map and contact info segment.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Contact = ({ className, style }: ContactProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Container className={cx(classes.root, className)} style={style}>
      <Box style={{ width: `100%`, position: `relative` }} id="contact">
        <Box>
          <Typography className={classes.label}>{translated.label}</Typography>
          <Typography variant="h3" className={classes.title}>
            {translated.title}
          </Typography>
        </Box>

        <ContactCard />
        <ContactMap />
      </Box>
    </Container>
  );
};

// Props the component accepts.
type ContactProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Contact.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Contact;
