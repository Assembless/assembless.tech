// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Toolbar,
  AppBar as MaterialAppBar,
  Button,
  Container,
} from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';
import { navigate } from 'gatsby';

// Project scoped imports.
import Logotype from '@/components/Logotype';

// Component scoped imports.
import { SEGMENTS_LIST } from '@/utils/segements';
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * AppBar component.
 * @description This component displays the app bar on top.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const AppBar = ({
  className,
  style,
  scrollToSection,
}: AppBarProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  const handleScrollTo = (index: number) => () => {
    scrollToSection(index);
  };

  return (
    <MaterialAppBar
      elevation={0}
      position="static"
      className={cx(classes.root, className)}
      style={style}
    >
      <Toolbar>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            className={classes.wrapper}
          >
            <Logotype />

            <Box
              component="ul"
              display="flex"
              alignItems="center"
              className={classes.menuBar}
              role="menu"
            >
              <Button
                onClick={handleScrollTo(2)}
                className={classes.menuItem}
                role="menuitem"
              >
                {translated.services}
              </Button>

              <Button
                onClick={handleScrollTo(3)}
                className={classes.menuItem}
                role="menuitem"
              >
                {translated.aboutUs}
              </Button>

              <Button
                onClick={handleScrollTo(4)}
                className={classes.menuItem}
                role="menuitem"
              >
                {translated.deliver}
              </Button>

              <Button
                onClick={handleScrollTo(5)}
                className={classes.contactUsButton}
                color="primary"
                variant="contained"
                size="small"
                role="menuitem"
              >
                {translated.contactUs}
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </MaterialAppBar>
  );
};

// Props the component accepts.
type AppBarProps = {
  className?: string;
  style?: React.CSSProperties;
  scrollToSection?: (index: number) => void;
};

// Default props.
AppBar.defaultProps = {
  className: ``,
  style: {},
  scrollToSection: (num: number) => {
    navigate(`#${SEGMENTS_LIST[num - 1]}`);
  },
};

// Time to export! 🚚
export default AppBar;
