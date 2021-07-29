// Deps scoped imports.
import React from 'react';

// Project scoped imports.
import Header from 'components/common/Header';
import About from 'components/common/About';
import Projects from 'components/common/Projects';
import Contact from 'components/common/Contact';

// Component scoped imports.

/**
 * Home component
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Home = () => (
  <>
    <Header />
    <About />
    <Projects />
    <Contact />
  </>
);

// Time to export! 🚚
export default Home;
