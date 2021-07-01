// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import { memberList } from './memberList';
import TeamMember from './TeamMember/index';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * OurTeamSection component.
 * @description This is the section that should display people from our team.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const OurTeamSection = ({
  className,
  style,
}: OurTeamSectionProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      style={style}
    >
      <Container>
        <Typography
          variant="h3"
          style={{
            textAlign: `center`,
            fontWeight: 600,
            fontSize: 64,
            marginBottom: 223,
          }}
        >
          {translated.title}
        </Typography>
        {memberList.map((member) => (
          <TeamMember name={member.name} position={member.position} />
        ))}
      </Container>
    </Box>
  );
};

// Props the component accepts.
type OurTeamSectionProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
OurTeamSection.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default OurTeamSection;
