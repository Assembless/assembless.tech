import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `flex-end`,

      [theme.breakpoints.down(`sm`)]: {
        padding: `${theme.spacing(45)}px 0`,
      },
    },

    imageContainer: {
      width: 450,
      height: 450,

      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,

      backgroundColor: theme.palette.background.patch.main,
      zIndex: 0,
      borderRadius: `100%`,
      overflow: `hidden`,

      [theme.breakpoints.down(`sm`)]: {
        width: 400,
        height: 400,
      },
    },

    imageMask: {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)`,
    },

    image: {
      height: 600,
      width: 600,

      zIndex: 3,

      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -60%)`,

      borderRadius: `50%`,
    },

    nameParagraph: {
      fontSize: 20,
      letterSpacing: 1,
      fontWeight: 600,
    },

    roleParagraph: {
      fontSize: 20,
      letterSpacing: 1,

      color: theme.palette.primary.main,

      opacity: 0.65,
    },

    imageTitleContainer: {
      paddingLeft: 90,
    },
  });

export default styles;
