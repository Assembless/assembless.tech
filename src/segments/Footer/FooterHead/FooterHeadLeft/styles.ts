import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {},

    logo: {
      width: 35,
      height: 35,
      marginRight: theme.spacing(3),
    },

    iconsContainer: {
      width: 100,

      display: `flex`,
      justifyContent: `space-between`,

      transition: `all 255ms ease 0.2s`,

      [theme.breakpoints.down(758)]: {
        width: 110,
        margin: `0 auto`,
      },
    },

    icon: {
      color: theme.palette.background.default,

      fontSize: 19,
    },
  });

export default styles;
