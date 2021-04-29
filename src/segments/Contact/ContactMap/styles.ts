import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      // Container styles...
      backgroundColor: `transparent`,
      borderRadius: theme.shape.borderRadius * 3,

      width: `60%`,
      height: 460,

      overflow: `hidden`,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `flex-start`,

      position: `absolute`,

      right: `1.2%`,
      bottom: 49,

      [theme.breakpoints.down(`sm`)]: {
        display: `none`,
      },
    },
  });

export default styles;
