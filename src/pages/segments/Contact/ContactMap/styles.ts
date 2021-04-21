import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      // Container styles...
      backgroundColor: `transparent`,
      borderRadius: 12,

      width: `60%`,
      height: 480,

      overflow: `hidden`,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `flex-start`,

      position: `absolute`,

      right: 0,
      top: 0,

      boxShadow: `-10px 10px 50px 0 rgb(0 0 0 / 7%)`,

      [theme.breakpoints.down(`sm`)]: {
        display: `none`,
      },
    },
    overlayGradient: {
      position: `absolute`,

      top: 0,
      left: 0,

      width: `100%`,
      height: `100%`,

      background: `linear-gradient(to bottom left, white 2%, transparent 90%)`,
    },
  });

export default styles;
