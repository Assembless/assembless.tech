import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      // Container styles...
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      height: `calc(100vh - ${theme.variables.appBarHeight}px)`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
    },
    title: {
      // Head text styles...
    },
  });

export default styles;
