import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      userSelect: `none`,
    },
    caret: {
      borderRight: `0.04em solid ${theme.palette.primary.main}`,
      paddingRight: theme.spacing(1) / 2,
    },
  });

export default styles;
