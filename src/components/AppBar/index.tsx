// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Toolbar,
  AppBar as MaterialAppBar,
  Button,
} from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.
import Logotype from '@/components/Logotype';

// Component scoped imports.
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
const AppBar = ({ className, style }: AppBarProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <MaterialAppBar
      elevation={0}
      position="static"
      className={cx(classes.root, className)}
      style={style}
    >
      <Toolbar>
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
              component="li"
              href="https://google.com/"
              style={{ margin: `0 6px` }}
              role="menuitem"
            >
              {translated.services}
            </Button>

            <Button
              component="li"
              href="https://google.com/"
              style={{ margin: `0 6px` }}
              role="menuitem"
            >
              {translated.aboutUs}
            </Button>

            <Button
              component="li"
              href="https://google.com/"
              style={{ margin: `0 6px` }}
              role="menuitem"
            >
              {translated.deliver}
            </Button>

            <Button
              component="li"
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
      </Toolbar>
    </MaterialAppBar>
  );
};

// Props the component accepts.
type AppBarProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
AppBar.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default AppBar;
