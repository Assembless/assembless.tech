import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    mediaWrapper: {
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      margin: `50px 0`,

      width: `203px`,
      padding: `5px`,
      backgroundColor: `#F4F4F4`,
      borderRadius: `25px`,

      [theme.breakpoints.down(`sm`)]: {
        margin: `50px auto`,
      },
    },
    icon: {
      backgroundColor: `#fff`,
      borderRadius: `50%`,
      padding: `10px`,
    },
    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      title: {
        marginBottom: theme.spacing(2),
      },
    },
  });

export default styles;
