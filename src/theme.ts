import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: `#121212`,
      main: `#222`,
    },
    background: {
      default: `#FFF`,
      paper: `#FFF`,
      patch: `#F4F4F4`,
    },
  },

  typography: {
    fontFamily: `Lato`,

    h3: {
      fontWeight: 400,
      fontSize: 36,
    },
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
        borderRadius: 6,
      },
      containedPrimary: {
        backgroundColor: `#222`,
        color: `#FFF`,
        boxShadow: `none`,
        '&:hover': {
          boxShadow: `none`,
        },
        borderRadius: 6,
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

export default theme;
