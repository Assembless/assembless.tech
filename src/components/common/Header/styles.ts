import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: Theme) => createStyles({
    root: {
        // Container styles...
        height: "calc(100vh - 64px)"
    },
    title: {
        whiteSpace: "pre-line",
        textTransform: "uppercase",
        fontFamily: "'PT Mono', monospace",
        [theme.breakpoints.down("md")]: {
            fontSize: "50px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "44px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "38px"
        },
    },
    slogan: {
        marginTop: "1rem",
        opacity: 0.45
    },

    earthContainer: {
        width: "400px",
        height: "400px",
        borderRadius: "400px",
        backgroundColor: "rgba(255, 255, 255, .06)",
        cursor: "grab",
        "&:active": {
            cursor: "grabbing"
        }
    },
    side: {
        position: "relative",
        width: "50%",
        // height: "100vh",
        [theme.breakpoints.down('sm')]: {
            width: "80%"
        },
        zIndex: 5
    },
    featuredButton: {
        boxShadow: `0 1px 2px rgba(33, 150, 243, 0.2), 
                    0 2px 4px rgba(33, 150, 243, 0.2), 
                    0 4px 8px rgba(33, 150, 243, 0.2), 
                    0 8px 16px rgba(33, 150, 243, 0.2),
                    0 16px 32px rgba(33, 150, 243, 0.2), 
                    0 32px 64px rgba(33, 150, 243, 0.2)`,

        "&:hover": {
            boxShadow: `0 1px 2px rgba(33, 150, 243, 0.2), 
                        0 2px 4px rgba(33, 150, 243, 0.2), 
                        0 4px 8px rgba(33, 150, 243, 0.2)`,

        }

    },
    atmosphere: {
        borderRadius: "500px",
        backgroundColor: "rgba(33, 150, 243, .1)",
        position: "absolute",
        top: "50%",
        left: "50%",
    },
    atmosphereAnimation01: {
        animation: `$atmosphereBreathing01 16000ms linear`,
        animationIterationCount: "infinite",
        transform: "translate(-50%, -50%) scale(1)",
    },
    atmosphereAnimation02: {
        animation: `$atmosphereBreathing02 14000ms linear`,
        animationIterationCount: "infinite",
        transform: "translate(-50%, -50%) scale(0.9)",
    },
    planet: {
        borderRadius: "400px",
        //backgroundColor: "#212121", 
        overflow: "hidden",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 20px 10px rgb(0 0 0 / 15%)",
    },
    galaxy: {
        background: "url(https://unblast.com/wp-content/uploads/2018/10/Sky-Stars-Pattern-0.jpg)",
        position: "absolute",
        top: "50%",
        right: "-12%",
        transform: "translateY(-50%)",
        borderRadius: "1000px 0 0 1000px",
        opacity: 0.25,
        zIndex: 0
    },
    galaxyFade: {
        position: "absolute",
        top: "50%",
        right: "-12%",
        transform: "translateY(-50%)",
        borderRadius: "1000px 0 0 1000px",
        background: "radial-gradient(transparent 50%, black 66%)",
        zIndex: 0
    },
    orbit: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(0deg)",
        borderRadius: "550px", border: "1px solid rgba(255, 255, 255, 0.4)",
        animation: `$orbitRotation 15000ms linear`,
        animationIterationCount: "infinite",
        "&:after": {
            content: "''",
            width: "18px",
            height: "18px",
            background: 'linear-gradient(90deg, #ccc, #000 110%)',
            borderRadius: "18px",
            position: "absolute",
            left: "-9px",
            top: "50%",
            transform: "translateY(-50%)"
        }
    },
    "@keyframes orbitRotation": {
        "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)"
        },
        "100%": {
            transform: "translate(-50%, -50%) rotate(359deg)"
        }
    },
    "@keyframes atmosphereBreathing01": {
        "0%": {
            transform: "translate(-50%, -50%) scale(0.96)"
        },
        "50%": {
            transform: "translate(-50%, -50%) scale(1.06)"
        },
        "100%": {
            transform: "translate(-50%, -50%) scale(0.96)"
        },
    },
    "@keyframes atmosphereBreathing02": {
        "0%": {
            transform: "translate(-50%, -50%) scale(0.84)"
        },
        "50%": {
            transform: "translate(-50%, -50%) scale(0.96)"
        },
        "100%": {
            transform: "translate(-50%, -50%) scale(0.84)"
        },
    },
}));

export default styles;