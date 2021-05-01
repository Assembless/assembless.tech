import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      minHeight: `100vh`,

      [theme.breakpoints.down(`md`)]: {
        padding: theme.spacing(25, 0),
      },
    },
  });

export default styles;
