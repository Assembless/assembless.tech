import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      boxShadow: `0 9px 38px rgba(0,0,0, 0.07)`,
      padding: `61px 46px`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      borderRadius: `8px`,
      margin: `0 10px`,
      transition: `all 0.25s ease`,
      transformStyle: "preserve-3d",

      '&:nth-child(2)': {
        marginBottom: `40px`,
      },

      [theme.breakpoints.down(1062)]: {
        marginBottom: `30px`,
        '&:nth-child(2)': {
          marginBottom: `30px`,
        },
      },
    },

    icon: {
      width: `86px`,
      height: `86px`,
      marginBottom: `65px`,
      pointerEvents: 'none',
    },

    title: {
      fontSize: `24px`,
      marginBottom: `18px`,
      whiteSpace: `pre-line`,
      textAlign: `center`,
      pointerEvents: 'none',
    },

    subtitle: {
      fontSize: `17px`,
      color: theme.palette.primary.main,
      opacity: 0.6,
      letterSpacing: `1px`,
      whiteSpace: `pre-line`,
      textAlign: `center`,
      pointerEvents: 'none',
    },
  });

export default styles;
