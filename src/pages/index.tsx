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
import Helmet from 'react-helmet';

// Project scope imports.
import { preset } from '@/utils/translations';
import theme from '@/theme';
import AppBar from '@/components/AppBar';

// Component scope imports.
import HeroSegment from '../segments/Hero';
import ContactSegment from '../segments/Contact';
import ServicesSegment from '../segments/Services';
import Delivery from '../segments/Delivery';
import About from '../segments/About';

const Home: React.FC<PageProps> = () => (
  <>
    <Helmet>
      <script
        title="Google Maps API Script"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GMAPS_KEY}&callback=initMap&map_ids=b0895fcec40baecd`}
        async
        defer
      />
      <script
        title="Calendly Widget Script"
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </Helmet>
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LitteraProvider
          preset={preset}
          locales={[`en_US`, `pl_PL`, `de_DE`]}
          detectLocale
        >
          <AppBar />
          <HeroSegment />
          <ServicesSegment />
          <About />
          <Delivery />
          <ContactSegment />
        </LitteraProvider>
      </ThemeProvider>
    </main>
  </>
);

export default Home;

/**
 * This initializes the google maps widget.
 * Code ugly as hell... TODO: CALL GHOST BUSTERS!
 */
if (typeof window !== `undefined`) {
  // eslint-disable-next-line func-names
  (window as any).initMap = function () {
    const el = document.getElementById(`map`);

    if (el) {
      // eslint-disable-next-line no-new
      new (window as any).google.maps.Map(document.getElementById(`map`), {
        center: { lat: 52.3287766, lng: 17.5881233 },
        zoom: 6,
        mapId: `b0895fcec40baecd`,
      });
    } else {
      (window as any).initMap();
    }
  };
}
