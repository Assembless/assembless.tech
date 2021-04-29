import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    title: {
      margin: `50px 0 20px 0`,
      textAlign: `left`,
      letterSpacing: `1px`,
      fontWeight: `300`,

      [theme.breakpoints.down(`sm`)]: {
        textAlign: `center`,
      },
    },
    grayText: {
      color: `rgba(0, 0, 0, 0.65)`,
    },
    title_2: {
      fontWeight: `bold`,
    },
    text: {
      marginTop: `50px`,
    },
    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      title: {
        marginBottom: theme.spacing(2),
      },
    },
  });

export default styles;
