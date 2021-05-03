import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `flex-end`,

      [theme.breakpoints.down(758)]: {
        alignItems: `center`,

        animation: `$fadein 1s forwards`,
      },
    },

    contactDetailsTitle: {
      marginBottom: theme.spacing(2),

      fontSize: 24,
      letterSpacing: 1,
      fontWeight: 600,
    },

    contactDetailsText: {
      opacity: 0.8,
      margin: `${theme.spacing(4)}px 0 0 0`,
    },

    '@keyframes fadein': {
      '0%': {
        marginTop: 0,
        opacity: 0,
      },

      '10%': {
        marginTop: theme.spacing(4),
        opacity: 0,
      },

      '100%': {
        marginTop: theme.spacing(12),
        opacity: 1,
      },
    },
  });

export default styles;
