import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#222`,
    },
    secondary: {
      main: `rgba(196, 196, 196, 0.18)`,
    },
    background: {
      default: `#FFF`,
    },
  },

  typography: {
    fontFamily: `Lato`,
  },
});

export type TTheme = typeof theme;
