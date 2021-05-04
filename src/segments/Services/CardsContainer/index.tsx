// Deps scoped imports.
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';
import DevicesIcon from '@material-ui/icons/Devices';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import CodeIcon from '@material-ui/icons/Code';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import Card from './Card';
// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * CardsContainer component.
 * @description This is a cards container
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */

const services = Object.freeze([
  {
    title: `cardTitle0`,
    subtitle: `cardSubTitle0`,
    icon: DevicesIcon,
  },
  {
    title: `cardTitle1`,
    subtitle: `cardSubTitle1`,
    icon: SmartphoneIcon,
  },
  {
    title: `cardTitle2`,
    subtitle: `cardSubTitle2`,
    icon: CodeIcon,
  },
]);

const CardsContainer = ({
  className,
  style,
}: CardsContainerProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      {services.map((el) => (
        <Card
          key={el.title + el.subtitle}
          title={translated[el.title]}
          subtitle={translated[el.subtitle]}
          icon={el.icon}
        />
      ))}
    </Box>
  );
};

// Props the component accepts.
type CardsContainerProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
CardsContainer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default CardsContainer;
