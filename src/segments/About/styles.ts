import { createStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(12.5),

      minHeight: `100vh`,
    },

    contentContainer: {
      display: `flex`,
      justifyContent: `space-between`,
      flexWrap: `wrap`,

      [theme.breakpoints.down(`md`)]: {
        justifyContent: `center`,
      },
    },

    subheader: {
      width: `100%`,

      [theme.breakpoints.up(`md`)]: {
        width: `45%`,
      },
    },
  });

export default styles;
