import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: `600px`,
      height: `600px`,
      margin: `150px auto`,
      alignSelf: `center`,
      [theme.breakpoints.down(`xs`)]: {
        display: `none`,
      },
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    imageContainer: {
      width: 450,
      height: 450,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      position: `absolute`,
      backgroundColor: theme.palette.background.patch.main,
      zIndex: 0,
      borderRadius: `100%`,
      overflow: `hidden`,
    },
    imageMask: {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)`,
    },
    image: {
      height: `600px`,
      width: `600px`,
      zIndex: 3,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      borderRadius: `50%`,
    },
    nameParagraph: {
      textAlign: `left`,
    },
    imageTitleContainer: {
      width: `150px`,
      margin: `0 auto`,
    },
  });

export default styles;
