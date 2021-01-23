import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        // Container styles...
        border: `1px solid ${theme.palette.background.paper}`,
        padding: "16px 18px",
        margin: "10px 0",
        borderRadius: theme.shape.borderRadius
    },
    h4: {
        // Head text styles...
    }
}));