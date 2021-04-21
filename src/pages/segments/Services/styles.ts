import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.patch,
      padding: `140px 0`,
      position: `relative`,
    },

    backgroundBox: {
      width: `30%`,
      height: `50px`,
      position: `absolute`,
      top: 0,
      left: 0,
      transform: `translate(0,-99%)`,
      display: `flex`,
      zIndex: -1,
    },

    backgroundBox2: {
      width: `30%`,
      height: `50px`,
      position: `absolute`,
      bottom: 0,
      right: 0,
      transform: `translate(0,99%) rotate(180deg)`,
      display: `flex`,
      zIndex: -1,
    },

    innerBox: {
      position: `relative`,
      backgroundColor: theme.palette.background.patch,
      width: `100%`,
      borderRadius: `0 40px 0 0`,
    },

    layer: {
      position: `absolute`,
      bottom: 0,
      right: 0,
      backgroundColor: theme.palette.background.patch,
      width: `56px`,
      height: `40px`,
      transform: `translate(97%,0)`,
      zIndex: -2,
    },

    innerLayer: {
      width: `100%`,
      height: `100%`,
      backgroundColor: theme.palette.background.paper,
      borderRadius: `0 0 0 60%`,
    },

    head: {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      marginBottom: `100px`,
    },

    sectionTitle: {
      fontSize: `27px`,
      color: theme.palette.primary.main,
      opacity: 0.6,
      letterSpacing: `1px`,
      fontWeight: 300,
    },

    sectionSubTitle: {
      fontSize: `36px`,
      textAlign: `center`,
    },

    cardsContainer: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `center`,
      alignItems: `flex-end`,
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
