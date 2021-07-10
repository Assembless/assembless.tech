// Deps scoped imports.
import React, { useState, useRef, useMemo } from 'react';
import {
  makeStyles,
  Box,
  Container,
  Stepper,
  Step,
  StepButton,
  StepContent,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { useLittera, useLitteraMethods } from '@assembless/react-littera';
import cx from 'classnames';
import { navigate } from 'gatsby';

// Project scoped imports.
import SectionHead from '@/components/SectionHead';
import { SEGMENTS_LIST } from '@/utils/segements';

// Component scoped imports.
import { DELIVERY_STEPS_KEYS } from './constants';
import { TDeliveryStep } from './types';
import styles from './styles';
import translations, { deliveryTranslations } from './trans';

import { DesktopDeliveryCard } from './DesktopDeliveryCard';
import { MobileDeliveryCard } from './MobileDeliveryCard';

// Creates a hook for generating classnames.
export const useStyles = makeStyles(styles);

/**
 * Delivery component.
 * @description Section component representing Delivery section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Delivery = ({
  className,
  style,
  scrollToSection,
}: DeliveryProps): JSX.Element => {
  const translated = useLittera(translations);
  const { locale } = useLitteraMethods();
  const deliveryTranslated = useLittera(deliveryTranslations);
  const classes = useStyles();

  const steps = useMemo<TDeliveryStep[]>(() => {
    const stps = [] as TDeliveryStep[];

    DELIVERY_STEPS_KEYS.forEach((key: string) => {
      stps.push({
        title: deliveryTranslated[key][0],
        subheader: deliveryTranslated[key][1],
        content: deliveryTranslated[key][2],
      });
    });

    return [...stps];
  }, [locale]);

  // Theme is used to get the breakpoints which then are used for the media query to tell if the user views on mobile.
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(`sm`));

  const [activeStep, setActiveStep] = useState(0);
  // This tells if the card is in or out, for the animation.
  const [isCardIn, setIsCardIn] = useState(true);
  // Wait for a few seconds before the card comes out again.
  const timeoutRef = useRef((null as unknown) as NodeJS.Timeout);

  const handleStep = (index: number) => () => {
    // Clear timeout to have no leaks.
    clearTimeout(timeoutRef.current);

    setIsCardIn(false);

    const tmFn = () => {
      setActiveStep(index);
      setIsCardIn(true);
    };

    timeoutRef.current = setTimeout(tmFn, 355);
  };

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handlePrev = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // The currently enabled step.
  const selectedStep = steps[activeStep] ?? null;
  const stepperOrientation = isMobile ? `vertical` : `horizontal`;

  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <Container>
        <SectionHead
          title={translated.deliver}
          subTitle={translated.subTitle}
          id="deliver"
        />
      </Container>

      <Box className={classes.stepperWrapper}>
        <Container style={{ marginTop: isMobile ? 0 : `-36px` }}>
          <Stepper
            style={{ backgroundColor: `transparent` }}
            activeStep={activeStep}
            nonLinear
            alternativeLabel={!isMobile}
            orientation={stepperOrientation}
          >
            {steps.map((step, index) => (
              <Step key={step.title} completed={index < activeStep}>
                <StepButton onClick={handleStep(index)}>
                  {step.title}
                </StepButton>

                {/* View for mobile! */}
                <StepContent>
                  <MobileDeliveryCard
                    activeStep={activeStep}
                    selectedStep={selectedStep}
                    onNext={
                      activeStep >= DELIVERY_STEPS_KEYS.length - 1
                        ? scrollToSection
                        : handleNext
                    }
                    onPrev={handlePrev}
                    isMaxIndex={activeStep >= DELIVERY_STEPS_KEYS.length - 1}
                  />
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Box>

      {/* View for desktop! */}
      <DesktopDeliveryCard
        selectedStep={selectedStep}
        activeStep={activeStep}
        onNext={handleStep(activeStep < 4 ? activeStep + 1 : 0)}
        isCardIn={isCardIn}
        scrollToSection={scrollToSection}
      />
    </Box>
  );
};

// Props the component accepts.
type DeliveryProps = {
  className?: string;
  style?: React.CSSProperties;
  scrollToSection?: () => void;
};

// Default props.
Delivery.defaultProps = {
  className: ``,
  style: {},
  scrollToSection: () => {
    navigate(`#${SEGMENTS_LIST[4]}`);
  },
};

// Time to export! 🚚
export default Delivery;
