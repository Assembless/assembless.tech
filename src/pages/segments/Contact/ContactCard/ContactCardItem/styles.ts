import { createStyles } from '@material-ui/core/styles';
import { TTheme } from '@/utils/theme';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: TTheme) =>
  createStyles({
    root: {
      // Container styles...
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
      borderRadius: 6,
      borderStyle: `solid`,
      padding: `16px 24px`,
      width: `100%`,
      margin: `8px 0`,
    },
    title: {
      fontSize: 16,
      fontWeight: `bold`,
    },
  });

export default styles;
