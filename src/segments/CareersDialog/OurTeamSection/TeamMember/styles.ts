import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,

      marginBottom: 70,
    },

    image: {
      borderRadius: `50%`,

      marginRight: 113,
    },

    nameText: {
      fontSize: 36,
      fontWeight: 600,
    },

    positionText: {
      fontSize: 24,
    },
  });

export default styles;
