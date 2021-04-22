import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      justifyContent: `center`,
      position: `relative`,
    },

    btn: {
      position: `absolute`,
      top: -13,
      left: `50%`,
      transform: `translate(-50%,0)`,
      padding: `10px 40px`,

      [theme.breakpoints.down(1062)]: {
        marginTop: `30px`,
      },
    },
  });

export default styles;
