// Deps scoped imports.
import React, { useState } from "react";
import { makeStyles, Box, Typography, IconButton, Icon, Avatar, DialogContent, Dialog, DialogActions, Button, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useLittera } from "react-littera";
import cx from "classnames";
// @ts-ignore


// Project scoped imports.
import { ICareerRole, IRoleRequirements } from "api/CareerRole.model";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Career role component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const CareerRole = (props: CareerRoleProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();
    const theme: Theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleNavigation = (path: string) => () => {
        window.open(path, "_blank");
    }

    return <>
        <Box className={cx(classes.root, props.className)} style={props.style} display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
                <Avatar style={{ marginRight: "18px", backgroundColor: "#FFF" }} variant="circular">
                    <Icon style={{ color: "#000" }}>{props.role.icon}</Icon>
                </Avatar>

                <Box>
                    <Typography variant="h5" style={{ fontFamily: "'PT Mono', monospace", }}>{props.role.role}</Typography>
                    {props.role.project && <Typography style={{ cursor: "pointer", opacity: 0.65 }} onClick={handleNavigation(props.role.project.name ?? "")}>{props.role.project.name}</Typography>}
                </Box>
            </Box>

            <IconButton color="primary" onClick={handleOpen} ><Icon color="primary">launch</Icon></IconButton>
        </Box>
        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { width: "40vw", padding: '25px' } }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '35px' }}>
                <Box >
                    <Typography variant="h5" style={{ fontFamily: "'PT Mono', monospace", marginBottom: '4px', fontSize: '32px' }}>{props.role.role}</Typography>
                    {props.role.project && <Typography variant="h6" style={{ opacity: 0.6, fontSize: '18px' }}>{props.role.project.name}</Typography>}
                </Box>
                <DialogActions style={{ padding: '0', alignItems: 'flex-start' }}>
                    <Button variant="text" onClick={handleClose}><Icon>close</Icon></Button>
                </DialogActions>
            </Box>
            <Box>
                <Typography style={{ fontSize: '22px', marginBottom: '5px' }}>Tech Stack</Typography>
                <Box style={{ height: '2px', background: '#fff', opacity: '0.1' }}></Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '20px' }}>
                    {props.role.requirements && props.role.requirements.map(MapRequriements(props.role.requirements))}
                </Box>
            </Box>
            <Box style={{ height: '2px', background: '#fff', opacity: '0.1', marginBottom: '25px' }}></Box>
            <DialogContent style={{ padding: '0' }}>
                <Typography style={{ opacity: '0.7', }}>{props.role.description}</Typography>
            </DialogContent>
            <DialogActions style={{ padding: '0', alignItems: 'flex-end', marginTop: '25px' }}>
                <Button style={{ backgroundColor: '#2196f3', color: '#fff' }} variant="contained" onClick={handleClose}>apply</Button>
            </DialogActions>
        </Dialog>
    </>
}

const MapRequriements = (requirements: IRoleRequirements[]) => (requirement: IRoleRequirements) => (
    <Box style={{ margin: '0 35px 20px 0', }}>
        {[...Array(4)].map((el, index) => <Icon style={{ color: `${index < requirement.level ? '#2196f3' : 'primary'}`, fontSize: '16px', marginRight: '3px' }} >fiber_manual_record</Icon>)
        }
        <Typography style={{ fontSize: '18px', letterSpacing: '1px' }}>{requirement.label}</Typography>
    </Box >
)

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type CareerRoleProps = {
    className?: string;
    style?: React.CSSProperties;
    role: ICareerRole;
}

// Time to export! 🚚
export default CareerRole;

const stripHash = (val: string) => val.split("#")[1];