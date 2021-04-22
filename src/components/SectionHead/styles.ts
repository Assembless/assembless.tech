import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
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
      whiteSpace: `pre-line`,
    },
  });

export default styles;
