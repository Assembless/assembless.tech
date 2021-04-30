import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    title: {
      textAlign: `left`,
      fontSize: 27,
      letterSpacing: 1,
      fontWeight: 300,

      /* minWidth: 240, */

      marginBottom: theme.spacing(5),

      color: theme.palette.primary.main,

      opacity: 0.6,
    },

    grayText: {
      fontSize: 23,

      color: theme.palette.primary.main,

      opacity: 0.65,
    },

    title_2: {
      fontSize: 64,
      fontWeight: 400,
    },

    text: {
      marginTop: `50px`,
    },
  });

export default styles;
