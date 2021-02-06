import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: Theme) => createStyles({
    root: {
        // Container styles...
        "&:hover section": {
            animationPlayState: "paused"
        }
    },
    atmosphere: {
        borderRadius: "500px",
        backgroundColor: "rgba(255, 255, 255, .06)",
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
        animation: `$atmosphereBreathing02 12000ms linear`,
        animationIterationCount: "infinite",
        transform: "translate(-50%, -50%) scale(0.9)",
    },
    planet: {
        borderRadius: "400px", backgroundColor: "#212121", overflow: "hidden",
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
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "550px",
        opacity: 0.45
    },
    galaxyFade: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "550px",
        background: "radial-gradient(transparent 50%, black 66%)"
    },
    orbit: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(0deg)",
        animation: `$orbitRotation 15000ms linear`,
        animationIterationCount: "infinite",
        opacity: 0,
        transition: "all 155ms ease"
    },
    orbitStroke: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "550px",
        border: "1px solid #666666",
    },
    satellite: {
        width: "18px",
        height: "18px",
        backgroundColor: "#666666",
        borderRadius: "18px",
        position: "relative",
        cursor: "pointer",
        left: "-9px",
        zIndex: 999,
        top: "50%",
        transition: "all 155ms ease",
        "&:hover": {
            backgroundColor: "#999999"
        }
    },
    "@keyframes orbitRotation": {
        "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
            opacity: 0
        },
        "5%": {
            opacity: 1
        },
        "100%": {
            transform: "translate(-50%, -50%) rotate(359deg)",
            opacity: 1
        }
    },
    "@keyframes atmosphereBreathing01": {
        "0%": {
            transform: "translate(-50%, -50%) scale(0.88)"
        },
        "50%": {
            transform: "translate(-50%, -50%) scale(1.02)"
        },
        "100%": {
            transform: "translate(-50%, -50%) scale(0.88)"
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