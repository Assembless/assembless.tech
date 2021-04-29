import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {},

    link: {
      width: `fit-content`,
      marginBottom: theme.spacing(6),

      color: theme.palette.primary.contrastText,
      textDecoration: `none`,

      borderBottomColor: `transparent`,
      borderBottomWidth: 1,
      borderBottomStyle: `solid`,

      '&:hover': {
        textDecoration: `none`,
        borderBottomColor: theme.palette.primary.contrastText,
      },
    },

    /** Mobile view */
    [theme.breakpoints.down(`sm`)]: {},
  });

export default styles;
