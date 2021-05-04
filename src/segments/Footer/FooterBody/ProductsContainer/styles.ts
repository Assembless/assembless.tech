import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(8),
    },

    title: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 1,
      marginBottom: theme.spacing(4),
      textTransform: `uppercase`,
    },

    imgContainer: {
      backgroundColor: `yellow`,
      borderRadius: theme.shape.borderRadius,
    },

    productNameText: {
      marginTop: theme.spacing(2.5),
      fontSize: 14,
    },

    btn: {
      border: `1px solid #f4f4f4`,
      borderRadius: theme.shape.borderRadius,
      padding: `0 ${theme.spacing(5)}`,
      height: 40,
    },
  });

export default styles;
