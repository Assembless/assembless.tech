import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      // Container styles...
      position: `absolute`,
      backgroundColor: theme.palette.background.patch.dark,
      zIndex: 0,
      borderRadius: `100%`,
    },
  });

export default styles;
