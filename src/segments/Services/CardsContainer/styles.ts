import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `flex-end`,

      [theme.breakpoints.down(`sm`)]: {
        flexWrap: `wrap`,
      },
    },
  });

export default styles;
