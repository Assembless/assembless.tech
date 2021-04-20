import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      padding: `140px 0`,
      position: `relative`,
    },

    backgroundBox: {
      width: `30%`,
      height: `50px`,
      position: `absolute`,
      top: 0,
      left: 0,
      transform: `translate(0,-100%)`,
      backgroundColor: theme.palette.secondary.main,
      display: 'flex'
    },

    innerBox: {
      position: 'relative',
      backgroundColor: 'blue',
      width: `100%`
    },

    circle: {

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
      fontWeight: 300, // not work yet
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
