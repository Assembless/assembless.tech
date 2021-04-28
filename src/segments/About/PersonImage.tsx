// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Person image component.
 * @description This component displays the CEO photography.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const PersonImage = ({ className, style }: PersonImageProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      position="relative"
      className={cx(classes.root, className)}
      style={style}
    >
      <StaticImage
        alt="Person"
        src="../../assets/mike.png"
        height={250}
        width={200}
        className={cx(classes.ilustration)}
      />
      <Box className={cx(classes.illustrationCircle)}>
        <StaticImage
          alt="Person"
          src="../../assets/mike.png"
          height={250}
          width={200}
          className={cx(classes.ilustrationInsideCircle)}
        />
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
