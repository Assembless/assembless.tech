import { createStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {},

    contentContainer: {
      display: `flex`,
      justifyContent: `space-between`,
    },

    subheader: {
      width: `100%`,

      [theme.breakpoints.up(`md`)]: {
        width: `45%`,
      },
    },
  });

export default styles;
