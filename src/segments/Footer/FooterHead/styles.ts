import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      justifyContent: `space-between`,
      flexWrap: `wrap`,

      padding: `${theme.spacing(12)}px 0`,

      borderBottom: `2px solid ${theme.palette.background.paper}`,

      marginBottom: theme.spacing(8),

      [theme.breakpoints.down(758)]: {
        flexDirection: `column`,
        alignItems: `center`,
      },
    },
  });

export default styles;
