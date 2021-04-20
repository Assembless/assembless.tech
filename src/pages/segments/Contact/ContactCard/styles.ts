import { createStyles } from '@material-ui/core/styles';
import { TTheme } from '@/utils/theme';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: TTheme) =>
  createStyles({
    root: {
      // Container styles...
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 12,

      width: `90%`,
      height: 422,

      padding: 14,
      marginTop: 20,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `flex-start`,
    },
    wrapper: {
      width: `42.5%`,
      [theme.breakpoints.down(`sm`)]: {
        width: `100%`,
      },
    },
    scheduleButton: {
      padding: `14px 20px`,
      margin: `8px 0`,

      width: `100%`,

      fontSize: `17px`,
    },
  });

export default styles;
