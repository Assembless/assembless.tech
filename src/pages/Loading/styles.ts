import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: Theme) => createStyles({
    root: {
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: theme.palette.background.default,
        position: "fixed",
        top: 0,
        left: 0
    },
    title: {
        // Head text styles...
        fontFamily: "'PT Mono', monospace"
    },
    loader: {
        width: "200px",
        height: "auto"
    }
}));

export default styles;