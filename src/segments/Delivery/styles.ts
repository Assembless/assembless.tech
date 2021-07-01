import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
      width: `100%`,

      minHeight: `100vh`,
      transition: `height 355ms ease`,

      [theme.breakpoints.down(`sm`)]: {
        padding: theme.spacing(25, 0),
      },
    },
    card: {
      width: `60%`,
      maxWidth: `60%`,
      transition: `all 155ms ease`,
      position: `absolute`,
      left: `50%`,
      transform: `translateX(-50%)`,
      top: `0`,
    },
    stepperWrapper: {
      width: `100%`,
      paddingBottom: `128px`,
      backgroundColor: theme.palette.background.patch.main,

      [theme.breakpoints.down(`sm`)]: {
        backgroundColor: `transparent`,
        paddingBottom: 0,
      },
    },
  });

export default styles;
