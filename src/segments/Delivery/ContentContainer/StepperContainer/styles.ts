import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {},

    stepper: {
      backgroundColor: theme.palette.background.patch,
      paddingLeft: `0`,
      paddingRight: `0`,
      paddingTop: `68px`,
    },

    alternativeLabel: {
      fontSize: `18px`,
      cursor: `pointer`,
      letterSpacing: `1px`,
    },

    labelContainer: {
      position: `absolute`,
      top: -50,
      left: `50%`,
      margin: 0,
      display: `flex`,
    },

    iconContainer: {
      width: `23px`,
      height: `23px`,
      backgroundColor: `#c4c4c4`,
      borderRadius: `50%`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      cursor: `pointer`,
    },

    active: {
      '&::after': {
        content: `""`,
        width: `3px`,
        height: `37px`,
        position: `absolute`,
        bottom: 0,
        right: `50%`,
        backgroundColor: theme.palette.background.greyDivider,
        transform: `translate(50%,120%)`,
        borderRadius: `200px`,
      },
    },

    connectorLine: {
      backgroundColor: theme.palette.background.greyDivider,
      height: `3px`,
      border: `none`,
      borderRadius: `200px`,
    },

    productIcon: {
      fontSize: `99px`,
    },

    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      title: {},
    },
  });

export default styles;
