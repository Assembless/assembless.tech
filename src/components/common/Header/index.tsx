// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Hidden,
  Container,
} from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

export const EarthCanvasComp = React.lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import(`./EarthCanvas`)), 3000);
    }),
);

/**
 * Header component.
 * @description This is the first thing that you see.
 * @version 2.0.0
 * @author Assembless <support@assembless.tech>
 */
const Header = (props: ComponentProps) => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Container>
      <Box
        className={cx(classes.root, props.className)}
        style={props.style}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box className={classes.side}>
          <Typography component="h1" variant="h2" className={classes.title}>
            {translated.title}
          </Typography>
          <Typography component="h2" variant="h5" className={classes.slogan}>
            {translated.slogan}
          </Typography>
          <Typography component="h2" variant="h5" className={classes.subSlogan}>
            {translated.subSlogan}
          </Typography>
          <br />
          <br />
          <br />
          <Button
            href="https://github.com/Assembless"
            variant="contained"
            color="secondary"
            size="large"
            classes={{ root: classes.featuredButton }}
          >
            {translated.findSpace}
          </Button>
        </Box>

        <Hidden smDown>
          <Box
            style={{ position: `relative`, width: `100%`, overflow: `hidden` }}
          >
            <Box
              width="1000px"
              height="1000px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.galaxy}
            />
            <Box
              width="1000px"
              height="1000px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.galaxyFade}
            />
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              className={cx(classes.side)}
              style={{ height: `100vh`, margin: `0 auto` }}
            >
              <div>
                <Box
                  width="550px"
                  height="550px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.orbit}
                />
                <Box
                  width="500px"
                  height="500px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={cx(
                    classes.atmosphere,
                    classes.atmosphereAnimation01,
                  )}
                />
                <Box
                  width="500px"
                  height="500px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={cx(
                    classes.atmosphere,
                    classes.atmosphereAnimation02,
                  )}
                />
                <Box
                  width="400px"
                  height="400px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={cx(classes.planet, classes.earthContainer)}
                >
                  <EarthCanvasComp />
                </Box>
              </div>
            </Box>
          </Box>
        </Hidden>

        {/* <Box className={classes.earthContainer}>
                <Canvas style={{ width: "353px", height: "353px", borderRadius: "353px" }}>
                    <Earth />
                </Canvas>
            </Box> */}
      </Box>
    </Container>
  );
};

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Time to export! 🚚
export default Header;
