// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.

import styles from './styles';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * TeamMember component.
 * @description This is the component that contains one member of our team.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const TeamMember = ({
  name,
  position,
  style,
  className,
}: TeamMemberProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      className={cx(classes.root, className)}
      alignItems="center"
      style={style}
    >
      <StaticImage
        alt="Person"
        src="../../../assets/mike.png"
        height={262}
        width={262}
        className={classes.image}
      />

      <Box>
        <Typography variant="h6" className={classes.nameText}>
          {name}
        </Typography>
        <Typography className={classes.positionText}>{position}</Typography>
      </Box>
    </Box>
  );
};

type TeamMemberProps = {
  className?: string;
  style?: React.CSSProperties;
  name: string;
  position: string;
};

TeamMember.defaultProps = {
  className: ``,
  style: {},
};

export default TeamMember;
