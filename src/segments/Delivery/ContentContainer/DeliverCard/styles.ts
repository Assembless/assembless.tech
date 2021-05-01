import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: `relative`,

      width: `90%`,

      padding: `${theme.spacing(12)}px ${theme.spacing(13.5)}px`,
      marginLeft: `auto`,

      backgroundColor: theme.palette.background.default,

      borderRadius: theme.shape.borderRadius,
      boxShadow: `0 8px 64px rgba(0,0,0,0.09)`,

      zIndex: 10,

      '&::after': {
        content: `''`,

        height: `100%`,
        width: `7px`,

        position: `absolute`,
        top: 0,
        left: 0,

        backgroundColor: theme.palette.primary.main,
        borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
      },
    },

    title: {
      marginBottom: theme.spacing(4),
    },

    subTitle: {
      width: `80%`,
    },

    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {
      title: {
        marginBottom: theme.spacing(2),
      },
    },
  });

export default styles;
