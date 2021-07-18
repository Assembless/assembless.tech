import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      overflow: `hidden`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,

      height: `calc(100vh - 56px - 44px)`,
      [`${theme.breakpoints.up(`xs`)} and (orientation: landscape)`]: {
        height: `calc(100vh - 48px - 44px)`,
      },
      [theme.breakpoints.up(`sm`)]: {
        height: `calc(100vh - 64px - 44px)`,
      },
    },
    container: {
      display: `grid`,
      gridColumn: 2,
      gridAutoFlow: `column`,
      alignItems: `center`,
      justifyContent: `space-between`,
    },
    // HeroTitle
    titleWrapper: {
      width: `600px`,
      [theme.breakpoints.down(`xs`)]: {
        width: `100vw`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        justifyContent: `center`,
        margin: `0 1rem`,
      },
    },
    title: {
      fontWeight: 200,
      fontSize: 68,
      maxWidth: 550,
      textTransform: `uppercase`,
      whiteSpace: `pre-line`,
      display: `block`,
      [theme.breakpoints.down(`md`)]: {
        fontSize: 62,
      },
      [theme.breakpoints.down(`sm`)]: {
        fontSize: 52,
      },
      [theme.breakpoints.down(`xs`)]: {
        fontSize: 46,
      },
    },
    slogan: {
      fontWeight: 600,
      fontSize: 20,
      opacity: 0.65,
      letterSpacing: `0.3px`,
      marginTop: theme.spacing(3),
      [theme.breakpoints.down(`md`)]: {
        fontSize: 18,
      },
      [theme.breakpoints.down(`sm`)]: {
        fontSize: 15,
      },
    },
    // HeroExploreButton
    exploreButton: {
      position: `relative`,
      zIndex: 2,
      width: 227,
      height: 71,
      fontSize: 22,
      fontWeight: `bold`,
    },
    exploreButtonCircle: {
      width: 200,
      height: 200,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    exploreButtonWrapper: {
      [theme.breakpoints.down(`sm`)]: {
        alignSelf: `center`,
      },
    },

    // HeroIllustration
    illustration: {
      position: `absolute`,
      minWidth: 632,
      minHeight: 632,
      width: `100%`,
      height: `100%`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      zIndex: 1,
    },
    illustrationRoot: {
      minWidth: 632,
      minHeight: 632,

      [theme.breakpoints.down(`xs`)]: {
        display: `none`,
      },
    },
    illustrationCircle: {
      width: 507,
      height: 507,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
  });

export default styles;
