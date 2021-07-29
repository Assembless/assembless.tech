import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

export default (theme: Theme) =>
  createStyles({
    root: {
      // Container styles...
    },
    title: {
      // Head text styles...
      fontFamily: `'PT Mono', monospace`,
    },
    container: {
      [theme.breakpoints.down(`sm`)]: {
        alignItems: `center`,
      },
    },
  });
