import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
    },

    positionDescription: {
      fontSize: 20,
      whiteSpace: `pre-line`,

      marginTop: 40,
      marginBottom: 86,
    },
  });

export default styles;
