import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // Container styles...
      backgroundColor: theme.palette.background.default,
      paddingTop: 24,
      paddingBottom: 24,
    },

    wrapper: {
      [theme.breakpoints.down(`sm`)]: {
        justifyContent: `center`,
      },
    },

    menuBar: {
      [theme.breakpoints.down(`sm`)]: {
        display: `none`,
      },
    },

    contactUsButton: {
      backgroundColor: theme.palette.primary.main,
      marginLeft: 30,
      padding: `7px 19px`,
    },
  });

export default styles;
