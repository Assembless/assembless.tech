import { createMuiTheme } from '@material-ui/core/styles';

const themeObj = Object.freeze({
  palette: {
    primary: {
      main: `#222`,
    },
    secondary: {
      main: `rgba(196, 196, 196, 0.18)`,
    },
    background: {
      default: `#FFF`,
      paper: `#FFF`,
    },
  },

  typography: {
    fontFamily: `Lato`,
  },

  variables: {
    appBarHeight: 112,
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          minHeight: `100vh`,
          backgroundColor: `#FFF`,
          fontFamily: `Lato`,
        },
      },
    },
    MuiButton: {
      text: {
        color: `#222`,
        fontWeight: 600,
      },
      containedPrimary: {
        backgroundColor: `#222`,
        color: `#FFF`,
        boxShadow: `none`,
        '&:hover': {
          boxShadow: `none`,
        },
      },
      outlinedPrimary: {
        borderWidth: 2,
        borderRadius: 6,
        borderColor: `#222`,
        backgroundColor: `#FFF`,

        fontWeight: `bold`,

        padding: `12px 16px`,

        fontFamily: `Lato`,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fontWeight: 600,

        color: `#222`,

        '&:hover': {
          borderWidth: 2,
          borderColor: `#222`,

          backgroundColor: `#222`,

          color: `#FFF`,
        },
      },
    },
  },
});

export const theme = createMuiTheme(themeObj);
export type TTheme = typeof theme;
