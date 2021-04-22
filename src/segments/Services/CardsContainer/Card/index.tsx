// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, SvgIcon } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import { useHoverCard } from './useHoverCard';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Card component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Card = ({
  className,
  style,
  title,
  subtitle,
  icon,
}: CardProps): JSX.Element => {
  const classes = useStyles();
  const hoverCardRef = useHoverCard();

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      ref={hoverCardRef}
    >
      <SvgIcon className={classes.icon} component={icon} />
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.subtitle}>{subtitle}</Typography>
    </Box>
  );
};

// Props the component accepts.
type CardProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  subtitle: string;
  icon: any;
};

// Default props.
Card.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Card;
