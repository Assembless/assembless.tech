import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,

      marginBottom: theme.spacing(20),

      [theme.breakpoints.down(`md`)]: {
        marginBottom: theme.spacing(12.5),
      },
    },

    sectionTitle: {
      fontSize: 27,
      letterSpacing: `1px`,
      fontWeight: 300,

      color: theme.palette.primary.main,
      opacity: 0.6,

      marginBottom: 14,
    },

    sectionSubTitle: {
      fontSize: 36,
      textAlign: `center`,
      whiteSpace: `pre-line`,
    },
  });

export default styles;
