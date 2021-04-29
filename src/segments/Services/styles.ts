import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.patch.main,
      padding: `${theme.spacing(35)}px 0`,
      position: `relative`,
      marginTop: theme.spacing(25),
      marginBottom: theme.spacing(25),
    },

    backgroundBox: {
      top: 0,
      left: 0,
      transform: `translate(0,-99%)`,
    },

    backgroundBox2: {
      bottom: 0,
      right: 0,
      transform: `translate(0,99%) rotate(180deg)`,
    },
  });

export default styles;
