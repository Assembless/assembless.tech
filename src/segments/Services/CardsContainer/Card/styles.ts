import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      boxShadow: `0 9px 38px rgba(0,0,0, 0.07)`,

      padding: theme.spacing(15, 11.5),
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      borderRadius: theme.shape.borderRadius,
      margin: `0 ${theme.spacing(2.5)}px`,
      transition: `all 0.25s ease`,
      transformStyle: `preserve-3d`,

      '&:nth-child(2)': {
        marginBottom: theme.spacing(10),
      },

      [theme.breakpoints.down(1062)]: {
        marginBottom: theme.spacing(7.5),
        '&:nth-child(2)': {
          marginBottom: theme.spacing(7.5),
        },
      },
    },

    icon: {
      width: `86px`,
      height: `86px`,
      marginBottom: theme.spacing(16),
      pointerEvents: `none`,
    },

    title: {
      fontSize: `24px`,
      marginBottom: theme.spacing(4.5),
      whiteSpace: `pre-line`,
      textAlign: `center`,
      pointerEvents: `none`,
    },

    subtitle: {
      fontSize: `17px`,
      color: theme.palette.primary.main,
      opacity: 0.65,
      letterSpacing: `1px`,
      whiteSpace: `pre-line`,
      textAlign: `center`,
      pointerEvents: `none`,
    },
  });

export default styles;
