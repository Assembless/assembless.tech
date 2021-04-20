import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      height: `100%`,
      overflow: `hidden`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: `200px`,
    },
    container: {
      display: `grid`,
      gridColumn: 2,
      gridAutoFlow: `column`,
      alignItems: `center`,
      justifyContent: `space-between`,
    },
    // HeroTitle
    title: {
      fontWeight: 200,
      fontSize: 68,
      maxWidth: 390,
      textTransform: `uppercase`,
      whiteSpace: `pre-line`,
      display: `block`,
    },
    slogan: {
      fontWeight: 600,
      fontSize: 20,
      opacity: 0.35,
      marginTop: 12,
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

      [theme.breakpoints.down(`xs`)]: {
        display: `none`,
      },
    },
    illustrationRoot: {
      minWidth: 632,
      minHeight: 632,
    },
    illustrationCircle: {
      width: 507,
      height: 507,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,

      [theme.breakpoints.down(`xs`)]: {
        display: `none`,
      },
    },
  });

export default styles;
