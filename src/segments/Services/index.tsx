// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import { navigate } from 'gatsby';
import cx from 'classnames';

// Project scoped imports.
import { SEGMENTS_LIST } from '@/utils/segements';

// Component scoped imports.
import SectionHead from '@/components/SectionHead';
import styles from './styles';
import translations from './trans';
import BackgroundNotch from './BackgroundNotch';
import CardsContainer from './CardsContainer';
import ButtonContainer from './ButtonContainer';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Services component.
 * @description This is the services section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Services = ({
  className,
  style,
  scrollToSection,
}: ServicesProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <BackgroundNotch className={classes.backgroundBox} />
      <Container>
        <SectionHead
          title={translated.services}
          subTitle={translated.subTitle}
          id="services"
        />
        <CardsContainer />
        <ButtonContainer scrollToSection={scrollToSection} />
      </Container>
      <BackgroundNotch className={classes.backgroundBox2} />
    </Box>
  );
};

// Props the component accepts.
type ServicesProps = {
  className?: string;
  style?: React.CSSProperties;
  scrollToSection?: () => void;
};

// Default props.
Services.defaultProps = {
  className: ``,
  style: {},
  scrollToSection: () => {
    navigate(`#${SEGMENTS_LIST[4]}`);
  },
};

// Time to export! 🚚
export default Services;
