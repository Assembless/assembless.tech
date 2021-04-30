import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    mediaWrapper: {
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,

      width: 230,
      height: 60,

      padding: 3.5,
      marginTop: theme.spacing(12.5),

      backgroundColor: theme.palette.background.patch.main,

      borderRadius: `200px`,

      /*     [theme.breakpoints.down(`sm`)]: {
        margin: `50px auto`,
      }, */
    },
    icon: {
      backgroundColor: `#fff`,

      borderRadius: `50%`,

      padding: theme.spacing(2.25),
    },

    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      title: {
        marginBottom: theme.spacing(2),
      },
    },
  });

export default styles;
