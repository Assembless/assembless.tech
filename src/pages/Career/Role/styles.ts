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
    dialogPaper: {
        width: "40vw",
        padding: '40px',
        transition: "all 255ms ease",
        [theme.breakpoints.down("md")]: {
            width: "50vw"
        },
        [theme.breakpoints.down("sm")]: {
            width: "80vw"
        },
        [theme.breakpoints.down("xs")]: {
            width: "90vw"
        },
    },
    h4: {
        // Head text styles...
    }
}));