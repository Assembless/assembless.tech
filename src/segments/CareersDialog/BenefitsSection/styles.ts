import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.patch.main,

      position: `relative`,
      paddingBottom: 510, // to remove
    },

    cardsContainer: {
      display: `flex`,
      width: `100%`,

      position: `absolute`,
      left: `50%`,
      bottom: -80,
      transform: `translate(-50%,0)`,
    },
  });

export default styles;
