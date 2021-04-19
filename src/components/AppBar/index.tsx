// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Link,
  Typography,
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
 * @description This is an example component including translations and theming.
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
        >
          <Logotype />
          <Box component="ul" display="flex" alignItems="center">
            <Button href="https://google.com/" style={{ margin: `0 6px` }}>
              {translated.services}
            </Button>

            <Button href="https://google.com/" style={{ margin: `0 6px` }}>
              {translated.aboutUs}
            </Button>

            <Button href="https://google.com/" style={{ margin: `0 6px` }}>
              {translated.deliver}
            </Button>

            <Button
              className={classes.btn}
              color="primary"
              variant="contained"
              size="small"
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
