import { createStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: `flex`,
      flexWrap: `wrap`,
      margin: `120px 5vw 247px 5vw`,

      [theme.breakpoints.up(`md`)]: {
        flexWrap: `nowrap`,
      },
    },
    grayText: {
      color: `rgba(0, 0, 0, 0.65)`,
    },
    subheader: {
      width: `100%`,

      [theme.breakpoints.up(`md`)]: {
        width: `45%`,
      },
    },
  });

export default styles;
