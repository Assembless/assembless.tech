import { createStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexWrap: `wrap`,
      margin: `120px 5vw`,

      [theme.breakpoints.up(`md`)]: {
        flexWrap: `nowrap`,
      },
    },
    textArea: {
      width: `100%`,

      [theme.breakpoints.up(`md`)]: {
        width: `45%`,
      },
    },
    aboutUs: {
      color: `rgba(0, 0, 0, 0.6)`,
      margin: `50px 0`,
      textAlign: `center`,

      [theme.breakpoints.up(`md`)]: {
        margin: `50px 0`,
        textAlign: `left`,
      },
    },
    title: {
      fontWeight: `bold`,
    },
    mediaWrapper: {
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      margin: `50px auto`,

      width: `250px`,
      padding: `5px`,
      backgroundColor: `#F4F4F4`,
      borderRadius: `25px`,

      [theme.breakpoints.up(`md`)]: {
        margin: `50px 0`,
      },
    },
    icon: {
      backgroundColor: `#fff`,
      borderRadius: `50%`,
      padding: `10px`,
    },
    text: {
      color: `rgba(0, 0, 0, 0.6)`,
      marginTop: `50px`,
    },
    imageSection: {
      margin: `50px auto`,
    },
    illustrationCircle: {
      width: 200,
      height: 200,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      position: `absolute`,
      backgroundColor: theme.palette.background.patch.main,
      zIndex: 0,
      borderRadius: `100%`,
      overflow: `hidden`,

      [theme.breakpoints.down(`xs`)]: {
        display: `none`,
      },
    },
    ilustration: {
      height: `250px`,
      width: `200px`,
      zIndex: 3,
      position: `absolute`,
      top: `40%`,
      left: `50%`,
      transform: `translate(-50%, -60%)`,
      borderRadius: `50%`,
    },
    ilustrationInsideCircle: {
      height: `250px`,
      width: `200px`,
      zIndex: 3,
      position: `absolute`,
      top: `40%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      borderRadius: `50%`,
    },
  });

export default styles;
