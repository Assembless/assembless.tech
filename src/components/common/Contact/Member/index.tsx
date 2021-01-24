// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Avatar, Icon, Tooltip } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import { IMember } from "../types";
import { iconsMap, MemberItem } from "../list";
import styles from "./styles";
import translations from "./trans";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Member = ({ member, ...props }: MemberProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
        <Avatar className={classes.avatar} src={member.details.photo_url} alt={`${member.name}`}>{member.initials}</Avatar>
        <Typography variant="h6" className={classes.title}>{member.name}</Typography>
        <Typography className={classes.role}>{member.details.role}</Typography>
        <Typography className={classes.role}>{member.details.project ?? "--"}</Typography>
        <MemberContactIcons contact={member.contact} className={classes.contactIcon} />
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type MemberProps = {
    className?: string;
    style?: React.CSSProperties;
    member: MemberItem;
}

// Time to export! 🚚
export default Member;

type MemberContactIconsProps = {
    className?: string;
} & Pick<IMember, "contact">

const MemberContactIcons = (props: MemberContactIconsProps) => {

    const handleNavigation = (path: string) => () => {
        window.open(path, "_blank")
    }

    return <Box flex="display" alignItems="center" justifyContent="space-evenly" flexWrap="wrap" marginTop="12px">
        {
            props.contact.map(ct => <Tooltip title={ct.name} aria-label={ct.label}>
                <Icon onClick={handleNavigation(ct.value)} className={cx(iconsMap[ct.label], props.className)} />
            </Tooltip>)
        }
    </Box>
}