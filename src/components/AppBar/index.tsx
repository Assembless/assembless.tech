// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Link,
  Typography,
  Toolbar,
  AppBar as MaterialAppBar,
} from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.

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
      position="static"
      className={cx(classes.root, className)}
      style={style}
    >
      <Toolbar>
        <Typography variant="h3">
          {translated.title}
        </Typography>

        <Box component="ul" display="flex">
          <Box component="li" marginLeft= "40px">
            <Link href="https://google.com/">{translated.services}</Link>
          </Box>
          <Box component="li" marginLeft= "40px">
            <Link href="https://google.com/">{translated.aboutUs}</Link>
          </Box>
          <Box component="li" marginLeft= "40px">
            <Link href="https://google.com/">{translated.deliver}</Link>
          </Box>
        </Box>
        button
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
