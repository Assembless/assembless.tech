// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import { IPosition } from '..';
import AttributeList from '../AttributeList';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * StepOne component.
 * @description This is the first view in position dialog that contains job description and requirements.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const DialogFirstView = ({
  position,
  className,
  style,
}: DialogFirstViewProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Typography className={classes.positionDescription}>
        {position.description}
      </Typography>
      <AttributeList attribute={position.requirements} />
      <AttributeList attribute={position.responsibilities} />
      <AttributeList attribute={position.ourOffer} />
    </Box>
  );
};

// Props the component accepts.
type DialogFirstViewProps = {
  className?: string;
  style?: React.CSSProperties;
  position: IPosition;
};

// Default props.
DialogFirstView.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default DialogFirstView;
