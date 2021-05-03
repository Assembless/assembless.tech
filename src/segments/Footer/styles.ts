import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      minHeight: `100vh`,
      display: `flex`,
    },

    bottomBar: {
      padding: theme.spacing(4, 0),
    },
  });

export default styles;
