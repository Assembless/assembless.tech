// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Fade } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import loader from "assets/loader.svg";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Loading component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Loading = (props: LoadingProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Fade in={props.open}>
        <Box className={cx(classes.root, props.className)} style={props.style} display="flex" alignItems="center" justifyContent="center">
            <img src={loader} alt="Loader Animation" className={classes.loader} />
        </Box>
    </Fade>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type LoadingProps = {
    className?: string;
    style?: React.CSSProperties;
    open: boolean;
}

// Time to export! 🚚
export default Loading;