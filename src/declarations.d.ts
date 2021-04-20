/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { TypeBackground } from '@material-ui/core/styles/createPalette';

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

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    patch: string;
  }
}
