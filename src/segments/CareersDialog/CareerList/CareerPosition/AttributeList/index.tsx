// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * AttributeList component.
 * @description This is the list with careers details.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const AttributeList = ({ attribute }: AttributeListProps) => (
  <Box style={{ marginBottom: 46 }}>
    <Typography
      variant="h6"
      style={{ fontSize: 24, fontWeight: 600, marginBottom: 30 }}
    >
      {attribute.title}
    </Typography>
    <ul>
      {attribute.list.map((el) => (
        <li>
          <Typography style={{ fontSize: 20 }}>{el}</Typography>
          <br />
        </li>
      ))}
    </ul>
  </Box>
);

type AttributeListProps = {
  attribute: {
    title: string;
    list: string[];
  };
};

export default AttributeList;
