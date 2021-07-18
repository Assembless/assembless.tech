import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({
    root: {
      userSelect: `none`,
      whiteSpace: `nowrap`,

      display: `inline-flex`,
      alignItems: `center`,
    },
    caret: {
      marginTop: `-7.5px`,
      lineHeight: `0px`,
      fontSize: `52px`,
      fontWeight: 400,
      paddingLeft: `5px`,
      opacity: 1,
      animation: `$blinkAnimation 1s infinite`,
    },
    '@keyframes blinkAnimation': {
      '50%': { opacity: 0 },
    },
  });

export default styles;
