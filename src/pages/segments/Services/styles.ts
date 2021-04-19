import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = (theme: Theme) =>
  createStyles({

    root: {
     backgroundColor: theme.palette.secondary.main
    },

    sectionName:{
      fontSize: '27px',
      color:theme.palette.primary.main,
      opacity:0.6,
    },

    sectionSubTitle:{

    },
  });

export default styles;
