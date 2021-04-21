// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import ContactCardItem from './ContactCardItem';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/** Creates a contact object. */
const makeContactData = (value: string, icon: JSX.Element) => ({
  value,
  icon,
});

/**
 * List containing all the contact info.
 */
const CONTACT_LIST = Object.freeze([
  makeContactData(`contact@assembless.tech`, <MailIcon />),
  makeContactData(`+48 450 010 420`, <PhoneIcon />),
  makeContactData(`Śmidowicz 24/25, Września`, <PlaceIcon />),
]);

/**
 * ContactCard component.
 * @description This component is used for displaying information and links in order to contact Assembless.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const ContactCard = ({ className, style }: ContactCardProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.wrapper}
      >
        {CONTACT_LIST.map((item) => (
          <ContactCardItem {...item} />
        ))}
        <Button
          variant="contained"
          color="primary"
          className={classes.scheduleButton}
        >
          {translated.schedule}
        </Button>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type ContactCardProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
ContactCard.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ContactCard;
