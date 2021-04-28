import { createStyles } from '@material-ui/core/styles';
// Here we define styles for the component.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const styles = () =>
  createStyles({
    root: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `center`,
      alignItems: `flex-end`,
    },
  });

export default styles;
