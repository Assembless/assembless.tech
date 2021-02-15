import React, { useState, useEffect } from 'react';
import { LitteraProvider } from 'react-littera';
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider, useMediaQuery, CssBaseline, Box } from '@material-ui/core';

import { LOCALES } from "utils/language";
import { LIGHT_THEME, DARK_THEME } from "utils/theme";
import Routes from "./Routes";

import Loading from "pages/Loading";
import Appbar from 'components/common/Appbar'
import Footer from 'components/common/Footer'

function App() {
  const [displayLoader, setDisplayLoader] = useState(true);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      !prefersDarkMode ? LIGHT_THEME : DARK_THEME,
    [prefersDarkMode],
  );

  // Hide loading view after 2 sec.
  useEffect(() => {
    // TODO: Hide loader based on page loading state instead of timeout.
    const tm = setTimeout(() => { setDisplayLoader(false); }, 3000);
    return () => clearTimeout(tm);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LitteraProvider initialLocale="en_US" locales={LOCALES}>
          <Loading open={displayLoader} />
          <Box style={{ flex: 1, opacity: displayLoader ? 0 : 1 }}>
            <Router>
              <Appbar />
              <Routes />
              <Footer />
            </Router>
          </Box>
        </LitteraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
