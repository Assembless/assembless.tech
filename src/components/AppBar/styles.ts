import { createStyles } from '@material-ui/core/styles';
import { TTheme } from '@/utils/theme';
// Here we define styles for the component.

const styles = (theme: TTheme) =>
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
