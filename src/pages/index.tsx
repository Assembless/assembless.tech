/* eslint-disable import/no-unresolved */
// Package scope imports.
import React from 'react';
import '@fontsource/lato';
import '@fontsource/lato/300.css';
import '@fontsource/lato/700.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LitteraProvider } from 'react-littera';
import { PageProps } from 'gatsby';

// Project scope imports.
import { preset } from '@/utils/translations';
import theme from '@/theme';
import AppBar from '@/components/AppBar';

// Component scope imports.
import HeroSegment from './segments/Hero';
import ServicesSegment from './segments/Services';
import AboutSegment from './segments/About';
import ContactSegment from './segments/Contact';

const Home: React.FC<PageProps> = () => (
  <main>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LitteraProvider
        preset={preset}
        locales={[`en_US`, `de_DE`, `pl_PL`]}
        detectLocale
      >
        <AppBar />
        <HeroSegment />
        <ServicesSegment />
        <AboutSegment />
        <ContactSegment />
      </LitteraProvider>
    </ThemeProvider>
  </main>
);

export default Home;
