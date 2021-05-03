import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flex: 1,
      justifyContent: `space-between`,

      [theme.breakpoints.down(758)]: {
        flexDirection: `column`,
        alignItems: `flex-start`,
      },
    },
  });

export default styles;
