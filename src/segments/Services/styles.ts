import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.patch.main,

      padding: `${theme.spacing(10)}px 0`,

      minHeight: `100vh`,

      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,

      [theme.breakpoints.down(`sm`)]: {
        position: `relative`,
      },
    },

    backgroundBox: {
      top: 0,
      left: 0,
      transform: `translate(0,-99%)`,
    },

    backgroundBox2: {
      bottom: 0,
      right: 0,
      transform: `translate(0,99%) rotate(180deg)`,
    },
  });

export default styles;
