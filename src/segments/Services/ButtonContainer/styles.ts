import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      justifyContent: `center`,
      position: `relative`,

      [theme.breakpoints.down(1062)]: {
        marginBottom: theme.spacing(10),
        marginTop: theme.spacing(4),
      },
    },

    btn: {
      position: `absolute`,
      top: -13,
      left: `50%`,
      transform: `translate(-50%,0)`,

      padding: `${theme.spacing(2.5)}px ${theme.spacing(10)}px`,
    },
  });

export default styles;
