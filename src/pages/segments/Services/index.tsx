// Deps scoped imports.
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Container,
} from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.
import { useLittera } from 'react-littera';
import DevicesIcon from '@material-ui/icons/Devices';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import CodeIcon from '@material-ui/icons/Code';
import Card from '../../../components/Card';

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);
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

/**
 * Services component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Services = ({ className, style }: ServicesProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <div className={classes.backgroundBox}>
        <div className={classes.innerBox}>
          <div className={classes.layer}>
            <div className={classes.innerLayer} />
          </div>
        </div>
      </div>
      <div className={classes.backgroundBox2}>
        <div className={classes.innerBox}>
          <div className={classes.layer}>
            <div className={classes.innerLayer} />
          </div>
        </div>
      </div>
      <Container>
        <Box
          className={classes.head}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography className={classes.sectionTitle}>
            {translated.services}
          </Typography>
          <Typography className={classes.sectionSubTitle}>
            {translated.subTitleLine1}
          </Typography>
          <Typography className={classes.sectionSubTitle}>
            {translated.subTitleLine2}
          </Typography>
        </Box>
        <Box className={classes.cardsContainer} display="flex">
          {services.map((el) => (
            <Card
              title={translated[el.title]}
              subtitle={translated[el.subtitle]}
              icon={el.icon}
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="center" position="relative">
          <Button
            className={classes.btn}
            variant="outlined"
            color="primary"
            size="large"
          >
            Contact
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// Props the component accepts.
type ServicesProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Services.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Services;
