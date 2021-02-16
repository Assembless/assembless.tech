// Deps scoped imports.
import React from "react";
import { makeStyles, Toolbar, Container, AppBar as Navbar, Box } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";
import { Link, useHistory } from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// Project scoped imports.
import newLogo from 'assets/newLogo.png';

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Appbar = (props: AppbarProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();
    const history = useHistory();

    const handleNavigation = (path: string) => () => {
        history.push(path);
    }

    const scrollTriger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <Navbar position="sticky" className={cx(classes.root, props.className)} style={props.style} >
            <Container>
                <Toolbar style={{ padding: 0, minHeight: `${scrollTriger ? '64px' : '114px'}`, transition: '0.2s ease-out' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" >
                        <Box onClick={handleNavigation("/")} style={{ display: 'flex', padding: '5px 0', cursor: "pointer" }}>
                            <img alt="logo" src={newLogo} style={{ height: "38px" }} />
                        </Box>
                        <Box display="flex" justifyContent="flex-end" alignItems="center">
                            <Link className={classes.link} to="/">{translated.home}</Link>
                            <Link className={classes.link} to="/career/">{translated.career}</Link>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </Navbar >
    )
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type AppbarProps = {
    className?: string;
    style?: React.CSSProperties
}


// Time to export! 🚚
export default Appbar;