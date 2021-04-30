import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      justifyContent: `center`,
      position: `relative`,
      height: 37,
    },

    btn: {
      position: `absolute`,
      top: -13,
      left: `50%`,
      transform: `translate(-50%,0)`,
      padding: `${theme.spacing(2.5)}px ${theme.spacing(10)}px`,

      [theme.breakpoints.down(1062)]: {
        marginTop: theme.spacing(7.5),
      },
    },
  });

export default styles;
