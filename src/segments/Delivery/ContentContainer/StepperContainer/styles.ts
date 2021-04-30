import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {},

    stepper: {
      backgroundColor: theme.palette.background.patch.main,
      paddingTop: theme.spacing(17),
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
      width: `23px`,
      height: `23px`,

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
        width: `3px`,
        height: `37px`,

        position: `absolute`,
        bottom: 0,
        right: `50%`,
        transform: `translate(50%,120%)`,

        backgroundColor: theme.palette.background.patch.dark,
        borderRadius: `200px`,
      },
    },

    connectorLine: {
      backgroundColor: theme.palette.background.patch.dark,
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
