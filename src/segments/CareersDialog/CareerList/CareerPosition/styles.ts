import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,

      backgroundColor: theme.palette.background.default,

      borderBottom: `1px solid ${theme.palette.background.patch.dark}`,

      padding: `0 80px`,

      cursor: `pointer`,

      transition: `0.2s ease`,

      '&:hover': {
        backgroundColor: theme.palette.background.patch.dark,
      },
    },

    nameText: {
      marginTop: 36,

      fontWeight: 600,
      fontSize: 40,
    },

    typeText: {
      marginTop: 10,
      marginBottom: 24,

      fontSize: 24,
    },

    icon: {
      fontSize: 38,
    },

    dialog: {
      minWidth: `80vw`,
    },

    dialogHead: {
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `flex-start`,

      padding: `24px 60px 6px 60px`,

      backgroundColor: theme.palette.background.patch.main,
    },

    dialogTitle: {
      fontSize: 36,
      fontWeight: 600,
    },

    btn: {
      display: `flex`,
      justifyContent: `flex-end`,
      marginTop: 20,
    },
  });

export default styles;
