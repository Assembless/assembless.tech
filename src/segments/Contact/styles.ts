import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: `relative`,

      height: `100vh`,

      backgroundColor: theme.palette.background.default,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    },
    title: {
      fontSize: 36,

      marginBottom: 44,

      whiteSpace: `pre-wrap`,
    },
    label: {
      fontSize: 27,
      fontWeight: 300,
      textTransform: `lowercase`,

      letterSpacing: 1,

      opacity: 0.6,

      marginBottom: 14,
    },
  });

export default styles;
