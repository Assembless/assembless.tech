import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      paddingTop: theme.spacing(26),
      marginTop: theme.spacing(22),
    },

    linkBox: {
      gridTemplateColumns: `repeat(4, 25%)`,

      justifyContent: `center`,

      gap: theme.spacing(15, 0),

      [theme.breakpoints.down(`md`)]: {
        gridTemplateColumns: `repeat(2, 35%)`,
      },
      [theme.breakpoints.down(`sm`)]: {
        gridTemplateColumns: `repeat(1, 60%)`,
      },
    },

    logo: {
      marginBottom: theme.spacing(2),
      width: 100,
      height: 100,
    },

    bottomBar: {
      padding: theme.spacing(4, 0),
      marginTop: theme.spacing(20),
    },
  });

export default styles;
