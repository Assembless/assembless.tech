// Deps scoped imports.
import React, { useEffect, useRef, useState } from "react";
import { makeStyles, Box, Hidden, Tooltip } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Contribution planet component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const ContributionPlanet = (props: ContributionPlanetProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    const ghData = useGithubData();
    console.log(ghData)

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Hidden smDown>
            <div>
                <Box width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.galaxy}>
                </Box>
                <Box width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.galaxyFade}>
                </Box>

                {/* <Box component="section" width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.orbit}>
                    <Box className={classes.satellite} style={{ left: "-9px", top: "50%", transform: "translateY(-50%)" }}>
                    </Box>
                    <Box className={classes.satellite} style={{ right: "-9px", top: "50%", transform: "translateY(-50%)" }}>
                    </Box>
                    <Box className={classes.satellite} style={{ left: "50%", top: "102%", transform: "translate(-50%, -100%)" }}>
                    </Box>

                </Box> */}

                <Box component="section" width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.orbitStroke}>
                </Box>

                {
                    ghData.map((commit: any, i) => {

                        return <Box key={commit?.sha} component="section" width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.orbit} style={{ animationDelay: `${getRandomArbitrary((i + 1) / 2, i * 2)}s` }}>
                            <Tooltip id={commit?.sha} arrow title={<span><h5>{ }</h5><p>{commit?.commit?.message ?? "Just a satellite"}</p></span>}>
                                <Box onClick={() => window.open(commit?.html_url, "_blank")} component="div" key={commit?.sha} className={classes.satellite}>
                                </Box>
                            </Tooltip>
                        </Box>;
                    })
                }

                <Box width="500px" height="500px" display="flex" alignItems="center" justifyContent="center" className={cx(classes.atmosphere, classes.atmosphereAnimation01)}>
                </Box>
                <Box width="500px" height="500px" display="flex" alignItems="center" justifyContent="center" className={cx(classes.atmosphere, classes.atmosphereAnimation02)}>
                </Box>
                <Box width="400px" height="400px" display="flex" alignItems="center" justifyContent="center" className={classes.planet}>
                    <img src="https://media4.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif?cid=ecf05e476yvh801dnv123fvcatmqyc9iqp9mee4zcv5pwfsr&rid=giphy.gif" style={{ width: "400px", height: "400px" }} />
                </Box>
            </div>
        </Hidden>
    </Box >
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ContributionPlanetProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default ContributionPlanet;


const projects = ["circles-web", "circles-server", "circles-express", "assembless.tech"];
const useGithubData = () => {
    const [commits, setCommits] = useState<Object[]>();

    const fetchData = async () => {
        const todayIso = new Date()
        todayIso.setHours(0, 0, 0, 0);

        const responses = await Promise.all(projects.map(p => fetch(`https://api.github.com/repos/Assembless/${p}/commits?since=${todayIso.toISOString()}`).then(resp => resp.json())));

        let freshData: Object[] = [];

        responses.forEach((response) => {
            freshData = [...freshData, ...response];
        });

        setCommits(freshData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return commits ?? []
}

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}