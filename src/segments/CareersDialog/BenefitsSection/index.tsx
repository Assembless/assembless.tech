// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import HouseIcon from '@material-ui/icons/House';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DevicesIcon from '@material-ui/icons/Devices';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import Card from '@/segments/Services/CardsContainer/Card';
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * BenefitsSection component.
 * @description This is the section that should display potential benefits for our candidates.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const BenefitsSection = ({
  className,
  style,
}: BenefitsSectionProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <Typography
        variant="h3"
        style={{
          textAlign: `center`,
          fontWeight: 600,
          fontSize: 64,
        }}
      >
        {translated.benefits}
      </Typography>

      <Box className={classes.cardsContainer}>
        <Card
          title={translated.card1Title}
          subtitle={translated.card1Subtitle}
          icon={HouseIcon}
          style={{ flex: 1, paddingTop: 120, paddingBottom: 60 }}
        />
        <Card
          title={translated.card2Title}
          subtitle={translated.card2Subtitle}
          icon={WatchLaterIcon}
          style={{
            flex: 1,
            height: `100%`,
            margin: `0 10px`,
            paddingTop: 120,
            paddingBottom: 60,
          }}
        />
        <Card
          title={translated.card3Title}
          subtitle={translated.card3Subtitle}
          icon={DevicesIcon}
          style={{ flex: 1, paddingTop: 120, paddingBottom: 60 }}
        />
      </Box>
    </Box>
  );
};

// Props the component accepts.
type BenefitsSectionProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
BenefitsSection.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default BenefitsSection;
