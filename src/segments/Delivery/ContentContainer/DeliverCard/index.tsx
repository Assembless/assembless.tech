// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * DeliverCard component.
 * @description This is the card with how we deliver details
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */

const cardData = [
  { title: `stepperTitle0`, content: `content0` },
  { title: `stepperTitle1`, content: `content1` },
  { title: `stepperTitle2`, content: `content2` },
  { title: `stepperTitle3`, content: `content3` },
  { title: `stepperTitle4`, content: `content4` },
];

const DeliverCard = ({
  className,
  style,
  activeStep,
}: DeliverCardProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Typography variant="h3" className={classes.title}>
        {translated[cardData[activeStep].title]}
      </Typography>
      <Typography className={classes.subTitle}>
        {translated[cardData[activeStep].content]}
      </Typography>
    </Box>
  );
};

// Props the component accepts.
type DeliverCardProps = {
  className?: string;
  style?: React.CSSProperties;
  activeStep: number;
};

// Default props.
DeliverCard.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default DeliverCard;
