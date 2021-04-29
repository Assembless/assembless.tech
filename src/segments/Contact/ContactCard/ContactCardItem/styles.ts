import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      borderRadius: 6,
      borderStyle: `solid`,
      padding: `16px 24px`,
      width: `100%`,
      margin: `${theme.spacing(2)}px 0`,
    },
    title: {
      fontSize: 16,
      fontWeight: `bold`,
      marginLeft: theme.spacing(4),
    },
  });

export default styles;
