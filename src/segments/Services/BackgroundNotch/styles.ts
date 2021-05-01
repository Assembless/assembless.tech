import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: `30%`,
      height: 50,

      position: `absolute`,
      zIndex: -1,

      display: `flex`,

      [theme.breakpoints.down(`md`)]: {
        height: 35,
      },
    },

    innerBox: {
      position: `relative`,

      backgroundColor: theme.palette.background.patch.main,

      width: `100%`,

      borderRadius: `0 40px 0 0`,
    },

    layer: {
      position: `absolute`,
      bottom: 0,
      right: 0,

      backgroundColor: theme.palette.background.patch.main,

      width: 56,
      height: 40,

      transform: `translate(97%,0)`,
      zIndex: -2,

      [theme.breakpoints.down(`md`)]: {
        transform: `translate(90%,0)`,
      },
    },

    innerLayer: {
      width: `100%`,
      height: `100%`,

      backgroundColor: theme.palette.background.paper,
      borderRadius: `0 0 0 60%`,
    },
  });

export default styles;
