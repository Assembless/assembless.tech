import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        border: `1px solid ${theme.palette.background.paper}`,
        padding: "16px",
        margin: "10px 0",
        marginRight: "15px",
        width: "45%",
        borderRadius: theme.shape.borderRadius,
        minWidth: "200px",
        transition: `all 255ms ${theme.transitions.easing.easeOut}`,
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        "&:hover": {
            borderColor: theme.palette.secondary.main,
            boxShadow: `0 1px 2px rgba(33, 150, 243, 0.2), 
                    0 2px 4px rgba(33, 150, 243, 0.2), 
                    0 4px 8px rgba(33, 150, 243, 0.2), 
                    0 8px 16px rgba(33, 150, 243, 0.2),
                    0 16px 32px rgba(33, 150, 243, 0.2), 
                    0 32px 64px rgba(33, 150, 243, 0.2)`,
        }
    },
    title: {

        fontFamily: "'PT Mono', monospace"
    },
    description: {
        opacity: 0.45
    }
}));