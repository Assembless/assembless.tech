import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    menuItem: {
      fontSize: `15px`,
      textTransform: `capitalize`,
      letterSpacing: `0.8px`,

      margin: `0 12px`,
      opacity: 0.9,
    },

    root: {
      backgroundColor: theme.palette.background.patch.main,
    },

    paper: {
      backgroundColor: theme.palette.background.patch.main,
    },

    header: {
      display: `flex`,
      justifyContent: `space-between`,

      paddingTop: 70,
    },

    title: {
      marginTop: 230,

      fontSize: 96,
      fontWeight: 600,
    },

    subtitle: {
      marginTop: 71,

      fontSize: 24,
      whiteSpace: `pre-line`,
    },
  });

export default styles;
