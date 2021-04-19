// Package scope imports.
import React from 'react';
import '@fontsource/lato';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LitteraProvider } from 'react-littera';
import { PageProps } from 'gatsby';

// Project scope imports.
import { preset } from '@/utils/translations';
import { theme } from '@/utils/theme';
import AppBar from '@/components/AppBar';

// Component scope imports.
import HeroSection from './segments/Hero';

const Home: React.FC<PageProps> = () => (
  <main>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <LitteraProvider
        preset={preset}
        locales={[`en_US`, `pl_PL`, `de_DE`]}
        detectLocale
      >
        <AppBar />
        <HeroSection />
      </LitteraProvider>
    </ThemeProvider>
  </main>
);

export default Home;
