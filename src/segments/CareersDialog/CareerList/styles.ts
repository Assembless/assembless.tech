import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,

      marginBottom: 147,
      marginTop: 206,

      borderRadius: 20,

      overflow: `hidden`,

      '&nth:child(3)': {
        backgroundColor: `red`,
      },
    },
  });

export default styles;
