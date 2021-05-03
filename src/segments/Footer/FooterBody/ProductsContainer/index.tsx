// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';

// Project scoped imports.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactLitteraLogo from '@/assets/hand_with_phone_illustration.png';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GithubLogo from '@/assets/GitHub_Logo_White.png';

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * ProductsContainer component.
 * @description This is the container with our products examples
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const ProductsContainer = ({
  className,
  style,
}: ProductsContainerProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Typography variant="h5" className={classes.title}>
        {translated.title}
      </Typography>
      <Typography paragraph style={{ fontSize: 14 }}>
        {translated.subtitle}
      </Typography>
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <Box className={classes.imgContainer}>
            <img
              src={ReactLitteraLogo}
              alt="React-Literra logo"
              width={85}
              height={85}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Button href="#services" className={classes.btn}>
              <img src={GithubLogo} alt="Github logo" height={32} />
            </Button>
            <Button href="#services" className={classes.btn}>
              Npmjs
            </Button>
          </Box>
        </Box>
        <Typography className={classes.productNameText}>
          React-Littera
        </Typography>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type ProductsContainerProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
ProductsContainer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ProductsContainer;
