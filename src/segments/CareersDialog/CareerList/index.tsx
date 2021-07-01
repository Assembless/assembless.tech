// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import CareerPosition from './CareerPosition';
import { vacancyList } from './vacancyList';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * CareerList component.
 * @description This is the list of available free vacancies in our company.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const CareerList = ({ className, style }: CareerListProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      {vacancyList.map((vacancy, index, positionList) => (
        <CareerPosition
          position={vacancy}
          style={
            // eslint-disable-next-line no-nested-ternary
            index === 0
              ? { paddingTop: 24 }
              : index === positionList.length - 1
              ? { paddingBottom: 28 }
              : null
          }
        />
      ))}
    </Box>
  );
};

// Props the component accepts.
type CareerListProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
CareerList.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default CareerList;
