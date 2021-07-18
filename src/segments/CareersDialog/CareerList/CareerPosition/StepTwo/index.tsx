// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import { useDynamicInputs } from '../../../../../utils/useDynamicInputs';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * StepTwo component.
 * @description This is the second step of stepper that should contain another form form and input to attach CV.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const StepTwo = ({ className, style }: StepTwoProps): JSX.Element => {
  const classes = useStyles();

  const { comps } = useDynamicInputs();

  const handleAttachCV = () => {
    /*  setCv(e.target.files[0]); */
  };

  return (
    <Box className={cx(classes.root, className)} style={style}>
      {comps}
      <input
        type="file"
        onClick={handleAttachCV}
        style={{ width: `fit-content` }}
      />
    </Box>
  );
};

// Props the component accepts.
type StepTwoProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
StepTwo.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default StepTwo;
