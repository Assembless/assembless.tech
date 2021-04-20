import { createStyles } from '@material-ui/core/styles';
import { TTheme } from '@/utils/theme';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: TTheme) =>
  createStyles({
    root: {
      position: `relative`,

      marginTop: `10%`,
      marginBottom: `10%`,

      backgroundColor: theme.palette.background.default,
    },
    title: {
      fontSize: 36,

      whiteSpace: `pre-wrap`,
    },
    label: {
      fontSize: 22,

      opacity: 0.6,

      textTransform: `lowercase`,
    },
  });

export default styles;
