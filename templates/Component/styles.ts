import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: Theme) => createStyles({
    root: {
        // Container styles...
    },
    title: {
        // Head text styles...
        fontFamily: "'PT Mono', monospace"
    }
}));

export default styles;