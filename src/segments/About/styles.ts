import { createStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexWrap: `wrap`,
      margin: `120px 5vw 247px 5vw`,

      [theme.breakpoints.up(`md`)]: {
        flexWrap: `nowrap`,
      },
    },
    subheader: {
      width: `100%`,

      [theme.breakpoints.up(`md`)]: {
        width: `45%`,
      },
    },
    title: {
      color: `rgba(0, 0, 0, 0.6)`,
      margin: `50px 0`,
      textAlign: `left`,

      [theme.breakpoints.down(`sm`)]: {
        textAlign: `center`,
      },
    },
    title_2: {
      fontWeight: `bold`,
    },
    mediaWrapper: {
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      margin: `50px 0`,

      width: `203px`,
      padding: `5px`,
      backgroundColor: `#F4F4F4`,
      borderRadius: `25px`,

      [theme.breakpoints.down(`sm`)]: {
        margin: `50px auto`,
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
      margin: `150px auto`,
      alignSelf: `center`,
    },
    illustrationCircle: {
      width: 450,
      height: 450,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      position: `absolute`,
      backgroundColor: theme.palette.background.patch,
      zIndex: 0,
      borderRadius: `100%`,
      overflow: `hidden`,

      [theme.breakpoints.down(`xs`)]: {
        display: `none`,
      },
    },
    ilustration: {
      height: `600px`,
      width: `600px`,
      zIndex: 3,
      position: `absolute`,
      top: `40%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      borderRadius: `50%`,
      clipPath: `polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)`,
    },
    ilustrationInsideCircle: {
      height: `600px`,
      width: `600px`,
      zIndex: 3,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      borderRadius: `50%`,
    },
  });

export default styles;
