import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

import { useLittera } from 'react-littera';
import styles from './styles';
import translations from './trans';

const useStyles = makeStyles(styles);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Subheader = () => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.title} variant="h3" component="h3">
        {translated.about_us}
      </Typography>
      <Typography className={classes.title_2} variant="h2" component="h2">
        {translated.title_1}
      </Typography>
      <Typography className={classes.title_2} variant="h2" component="h2">
        {translated.title_2}
      </Typography>
      <Typography className={classes.text} variant="body1" component="p">
        {translated.paragraph}
      </Typography>
      <Typography className={classes.text} variant="body1" component="p">
        {translated.paragraph2}
      </Typography>
    </Box>
  );
};

export default Subheader;
