import { createStyles } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = () =>
  createStyles({
    root: {
      marginTop: `50px`,
      marginBottom: `50px`,
      display: `flex`,
      justifyContent: `center`,
    },

    nameInputs: {
      marginBottom: `20px`,
      borderRadius: `4px`,
      width: `45%`,
    },
  });

export default styles;
