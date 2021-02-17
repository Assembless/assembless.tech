// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import ProjectModel from "api/Project.model";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Project component.
 * @description Displays a single project.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Project = (props: ProjectProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Box display="flex" justifyContent="space-between" flexDirection="column" height="auto" style={{ minHeight: "194px" }}>
            <Box>
                <Typography variant="h5" className={classes.title} gutterBottom>{props.project.name}</Typography>
                <Typography className={classes.description} >{props.project.description}</Typography>
            </Box>

            <Box display="flex" justifyContent="flex-start" alignItems="center" style={{ marginTop: "22px" }}>
                <Button variant="contained" className={classes.projectBtn} href={props.project.url} size="medium" color='secondary' style={{ marginRight: "6px" }}>{translated.preview}</Button>
                {props.project.repo_url && <Button target="_blank" href={props.project.repo_url} variant="outlined">{translated.repo}</Button>}
            </Box>
        </Box>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ProjectProps = {
    className?: string;
    style?: React.CSSProperties;
    project: ProjectModel
}

// Time to export! 🚚
export default Project;