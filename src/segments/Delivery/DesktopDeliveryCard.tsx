// Deps scoped imports.
import React, { useRef } from 'react';
import {
  Container,
  Typography,
  Grow,
  Button,
  Card,
  CardHeader,
  CardContent,
  useTheme,
  useMediaQuery,
  IconButton,
  Slide,
} from '@material-ui/core';
import { ArrowForward, Replay } from '@material-ui/icons';
import { useLittera } from '@assembless/react-littera';

// Component scoped imports.
import { TDeliveryStep } from './types';
import translations from './trans';
import { useStyles } from './index';

type DesktopDeliveryCardProps = {
  selectedStep: TDeliveryStep;
  activeStep: number;
  onNext: () => void;
  isCardIn: boolean;
  scrollToSection: () => void;
};

/**
 * This is the delivery card component that is displayed only on desktop.
 */
export const DesktopDeliveryCard = ({
  selectedStep,
  activeStep,
  onNext,
  isCardIn,
  scrollToSection,
}: DesktopDeliveryCardProps) => {
  const translated = useLittera(translations);
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(`sm`));

  // We use a ref here to get the clientHeight of the card (position: absolute) and set the container height correctly.
  const cardElementRef = useRef((null as unknown) as HTMLElement);

  // Wont be displayed on mobile.
  if (isMobile) return null;

  const handleScrollToSection = () => {
    if (scrollToSection) scrollToSection();
  };

  return (
    <>
      <Grow in={isCardIn && !!selectedStep} mountOnEnter>
        <Container
          style={{
            marginTop: `-110px`,
            position: `relative`,
            minHeight: cardElementRef.current?.clientHeight ?? `200px`,
          }}
        >
          <Card className={classes.card} ref={cardElementRef}>
            <CardHeader
              title={selectedStep.title}
              subheader={selectedStep.subheader}
              action={
                <IconButton onClick={onNext}>
                  {activeStep < 4 ? <ArrowForward /> : <Replay />}
                </IconButton>
              }
            />
            <CardContent>
              <Typography paragraph>{selectedStep.content}</Typography>
            </CardContent>
          </Card>
        </Container>
      </Grow>

      {/* Button displayed at the end step. */}
      <Slide direction="up" in={activeStep === 4}>
        <Button
          color="primary"
          style={{ marginTop: `25px`, padding: `14px 20px` }}
          variant="contained"
          size="large"
          onClick={handleScrollToSection}
        >
          {translated.bigButton}
        </Button>
      </Slide>
    </>
  );
};
