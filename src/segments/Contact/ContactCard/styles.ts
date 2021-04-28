import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.patch.main,
      borderRadius: theme.shape.borderRadius * 3,

      width: `90%`,
      height: 382,

      padding: `0 3%`,
      marginTop: theme.spacing(4),

      display: `flex`,
      alignItems: `center`,
      justifyContent: `flex-start`,
      position: `relative`,
    },
    wrapper: {
      width: `38%`,
    },
    scheduleButton: {
      padding: `14px 20px`,
      margin: `8px 0`,

      width: `100%`,

      fontSize: `17px`,
    },
    calendlyDialog: {
      width: `90vw`,
      maxWidth: theme.breakpoints.values.sm,
    },
    calendlyPopup: {
      width: `100%`,
      height: `690px`,
      maxHeight: `100vh`,
      '& iframe': {
        height: `99.2%`,
      },
    },

    // Mobile view
    [theme.breakpoints.down(`sm`)]: {
      root: {
        width: `100%`,
        height: `auto`,

        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
      },
      wrapper: {
        width: `100%`,
      },
    },
  });

export default styles;
