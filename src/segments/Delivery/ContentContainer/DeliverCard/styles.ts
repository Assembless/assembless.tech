import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: `absolute`,
      top: 150,
      left: `50%`,
      width: `100%`,
      height: `329px`,
      transform: `translate(-50%,0)`,
      backgroundColor: theme.palette.background.default,
      borderRadius: `8px`,
      padding: `51px`,
      zIndex: 10,
      boxShadow: `0 8px 64px rgba(0,0,0,0.09)`,

      '&::after': {
        content: `''`,
        height: `100%`,
        width: `7px`,
        position: `absolute`,
        top: 0,
        left: 0,
        backgroundColor: theme.palette.primary.main,
        borderRadius: `8px 0 0 8px`,
      },
    },
    title: {
      marginBottom: theme.spacing(4),
    },

    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      title: {
        marginBottom: theme.spacing(2),
      },
    },
  });

export default styles;
