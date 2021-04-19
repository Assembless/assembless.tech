// This file holds ambient type declarations.
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    variables: {
      appBarHeight: number;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    variables?: {
      appBarHeight?: number;
    };
  }
}
