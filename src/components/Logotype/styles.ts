import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      // Head text styles...
      fontFamily: `'Roboto Mono', monospace`,
      color: theme.palette.primary.main,
      fontSize: 22,
      fontWeight: 600,
    },
  });

export default styles;
