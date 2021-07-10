// Deps scoped imports.
import React from 'react';
import {
  Box,
  Typography,
  Button,
  StepContent,
  CardHeader,
  CardContent,
  CardActions,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';

// Component scoped imports.
import { TDeliveryStep } from './types';
import translations from './trans';

type MobileDeliveryCardProps = {
  selectedStep: TDeliveryStep;
  activeStep: number;
  onPrev: () => void;
  onNext: () => void;
  isMaxIndex: boolean;
};

/**
 * This is the delivery card component that displays only on mobile. (is actually not a card tho :| )
 */
export const MobileDeliveryCard = ({
  selectedStep,
  activeStep,
  onPrev,
  onNext,
  isMaxIndex,
}: MobileDeliveryCardProps) => {
  const translated = useLittera(translations);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(`sm`));

  // Wont be displayed on desktop.
  if (!isMobile) return null;

  return (
    <Box>
      <CardHeader
        title={selectedStep.title}
        subheader={selectedStep.subheader}
      />
      <CardContent>
        <Typography paragraph>{selectedStep.content}</Typography>
      </CardContent>
      <CardActions>
        <Button disabled={activeStep === 0} onClick={onPrev}>
          {translated.back}
        </Button>

        <Button variant="contained" color="primary" onClick={onNext}>
          {isMaxIndex ? translated.bigButton : translated.next}
        </Button>
      </CardActions>
    </Box>
  );
};
