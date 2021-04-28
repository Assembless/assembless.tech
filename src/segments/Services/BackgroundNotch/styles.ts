import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: `30%`,
      height: `50px`,
      position: `absolute`,
      display: `flex`,
      zIndex: -1,
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
      width: `56px`,
      height: `40px`,
      transform: `translate(97%,0)`,
      zIndex: -2,
    },

    innerLayer: {
      width: `100%`,
      height: `100%`,
      backgroundColor: theme.palette.background.paper,
      borderRadius: `0 0 0 60%`,
    },
  });

export default styles;
