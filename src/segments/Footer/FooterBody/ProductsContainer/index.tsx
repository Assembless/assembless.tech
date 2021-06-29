// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import { StaticImage } from 'gatsby-plugin-image';
import cx from 'classnames';

// Project scoped imports.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactLitteraLogo from '@/assets/hand_with_phone_illustration.png';

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
      <Typography paragraph style={{ fontSize: 14, whiteSpace: `pre-wrap` }}>
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
            <Button
              href="https://github.com/Assembless/react-littera"
              className={classes.btn}
            >
              <StaticImage
                src="../../../../assets/GitHub_Logo_White.png"
                alt="Github logo"
                height={28}
              />
            </Button>
            <Button
              href="https://npmjs.com/package/@assembless/react-littera"
              className={classes.btn}
            >
              <StaticImage
                src="../../../../assets/800px-Npm-logo.svg.png"
                alt="NPM logo"
                height={20}
              />
            </Button>
          </Box>
        </Box>
        <Typography className={classes.productNameText}>
          react-littera
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
