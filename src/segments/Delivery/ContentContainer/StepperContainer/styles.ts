import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {},

    stepper: {
      backgroundColor: theme.palette.background.patch.main,
      paddingTop: theme.spacing(17),
      transition: `all 1s ease`,
      minWidth: 4000,
    },

    alternativeLabel: {
      fontSize: `18px`,
      letterSpacing: `1px`,
      color: theme.palette.primary.dark,
    },

    labelContainer: {
      position: `absolute`,
      top: -50,
      left: `50%`,

      margin: 0,
      display: `flex`,
      cursor: `pointer`,
    },

    iconContainer: {
      width: 23,
      height: 23,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,

      backgroundColor: theme.palette.background.patch.dark,
      borderRadius: `50%`,
      cursor: `pointer`,
    },

    active: {
      '&::after': {
        content: `""`,
        width: 3,
        height: 37,

        position: `absolute`,
        bottom: 0,
        right: `50%`,
        transform: `translate(50%,120%)`,

        backgroundColor: theme.palette.background.patch.dark,
        borderRadius: 200,
      },
    },

    connectorLine: {
      backgroundColor: theme.palette.background.patch.dark,
      height: 3,
      border: `none`,
      borderRadius: 200,
    },

    productIcon: {
      fontSize: 99,
    },

    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      stepper: {},
    },
  });

export default styles;
