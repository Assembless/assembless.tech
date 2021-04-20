import { createStyles } from '@material-ui/core/styles';
import { TTheme } from '@/utils/theme';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: TTheme) =>
  createStyles({
    root: {
      // Container styles...
      position: `absolute`,
      backgroundColor: theme.palette.secondary.main,
      zIndex: 0,
      borderRadius: `100%`,
    },
  });

export default styles;
