import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: `35px`,
    },

    stepper: {
      backgroundColor: theme.palette.background.patch,
      paddingLeft: `0`,
      paddingRight: `0`,
    },

    active: {
      /*    '&::after': {
        content: `''`,
        width: `4px`,
        height: `100px`,
        position: `absolute`,
        left: 0,
        top: 0,
        backgroundColor: `red`,
      }, */
    },

    labelContainer: {
      position: `absolute`,
      top: -50,
      left: `50%`,
      margin: 0,
      display: `flex`,
    },

    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      title: {
        marginBottom: theme.spacing(2),
      },
    },
  });

export default styles;
