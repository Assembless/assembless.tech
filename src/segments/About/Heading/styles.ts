import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    label: {
      textAlign: `left`,
      fontSize: 27,
      letterSpacing: 1,
      fontWeight: 300,

      marginBottom: theme.spacing(5),

      opacity: 0.6,
    },

    title: {
      fontSize: 64,
      fontWeight: 400,
      whiteSpace: `pre`,

      [theme.breakpoints.down(`md`)]: {
        fontSize: 60,
      },
      [theme.breakpoints.down(`sm`)]: {
        fontSize: 58,
      },
      [theme.breakpoints.down(`xs`)]: {
        fontSize: 52,
      },
    },

    paragraph: {
      marginTop: theme.spacing(4),

      opacity: 0.65,
    },
  });

export default styles;
