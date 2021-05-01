// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from 'react-littera';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * PersonImage component.
 * @description Component displaying a persons photo inside of a circle
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const PersonImage = ({ className, style }: PersonImageProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box position="relative" style={{ height: `500px`, width: `500px` }}>
        <StaticImage
          alt="Person"
          src="../../../assets/mike.png"
          height={250}
          width={200}
          className={cx(classes.imageMask, classes.image)}
        />
        <Box className={cx(classes.imageContainer)}>
          <StaticImage
            alt="Person"
            src="../../../assets/mike.png"
            height={250}
            width={200}
            className={cx(classes.image)}
          />
        </Box>
      </Box>
      <Box className={classes.imageTitleContainer}>
        <Typography color="primary" className={classes.nameParagraph}>
          {translated.name}
        </Typography>
        <Typography color="primary" className={classes.roleParagraph}>
          {translated.ceo}
        </Typography>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type PersonImageProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
PersonImage.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default PersonImage;
