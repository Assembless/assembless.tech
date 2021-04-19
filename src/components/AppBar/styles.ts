import { createStyles } from '@material-ui/core/styles';
import { TTheme } from '@/utils/theme';
// Here we define styles for the component.

const styles = (theme: TTheme) =>
  createStyles({
    root: {
      // Container styles...
      backgroundColor: theme.palette.background.default,
    },

  });

export default styles;
