import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: `relative`,

      minHeight: `100vh`,

      backgroundColor: theme.palette.background.default,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,

      paddingTop: `240px`,
    },
    title: {
      fontSize: 36,

      whiteSpace: `pre-wrap`,
    },
    label: {
      fontSize: 22,

      opacity: 0.6,

      textTransform: `lowercase`,
    },
  });

export default styles;
