// Deps scoped imports.
import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Dialog,
  Button,
  Container,
} from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import Logotype from '@/components/Logotype';
import styles from './styles';
import translations from './trans';
import CareerList from './CareerList';
import BenefitsSection from './BenefitsSection';
import OurTeamSection from './OurTeamSection';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * CareersDialog component.
 * @description This is the fullpage dialog for Assembless careers options.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const CareersDialog = ({
  className,
  style,
}: CareersDialogProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleOpenDialog}
        className={classes.menuItem}
        role="menuitem"
      >
        {translated.careers}
      </Button>
      <Dialog
        fullScreen
        open={open}
        className={cx(classes.root, className)}
        style={style}
        PaperProps={{ className: classes.paper }}
      >
        <Container>
          <Box className={classes.header}>
            <Logotype />
            <Button
              onClick={() => setOpen(false)}
              style={{ fontWeight: 400, letterSpacing: 1 }}
            >
              close
            </Button>
          </Box>

          <Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h2" className={classes.title}>
                {translated.title}
              </Typography>
              <Typography variant="h3" className={classes.subtitle}>
                {translated.subtitle}
              </Typography>
            </Box>
            <CareerList />
            <BenefitsSection />
          </Box>
        </Container>
        <OurTeamSection />
      </Dialog>
    </>
  );
};

// Props the component accepts.
type CareersDialogProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
CareersDialog.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default CareersDialog;
