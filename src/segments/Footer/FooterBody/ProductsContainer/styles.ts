import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(8),
    },

    title: {
      fontSize: `14px`,
      fontWeight: 600,
      letterSpacing: `1px`,
      marginBottom: `16px`,
      textTransform: `uppercase`,
    },

    btn: {
      border: `1px solid #f4f4f4`,
      borderRadius: `8px`,
      padding: `0 20px`,
      height: `40px`,
    },
  });

export default styles;
