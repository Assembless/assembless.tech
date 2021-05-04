// Deps scoped imports.
import React from 'react';
import { Box, MenuItem, TextField } from '@material-ui/core';
import { useLittera, useLitteraMethods } from '@assembless/react-littera';

// Project scoped imports.
import PLFlag from '@/assets/flags/Flag_of_Poland.svg';
import DEFlag from '@/assets/flags/Flag_of_Germany.svg';
import ENFlag from '@/assets/flags/Flag_of_the_United_States.svg';

// Component scoped imports.
import translations from './trans';

const LOCALE_FLAG_MAP = {
  en_US: ENFlag,
  pl_PL: PLFlag,
  de_DE: DEFlag,
};

/**
 * LocaleSwitch component.
 * @description Component for switching languages
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const LocaleSwitch = ({ className, style }: LocaleSwitchProps): JSX.Element => {
  const translated = useLittera(translations);
  const { locale, locales, setLocale } = useLitteraMethods();

  const handleChange = (event) => {
    setLocale(event.target.value);
  };

  return (
    <TextField
      className={className}
      style={{ ...style, width: 160 }}
      variant="filled"
      label={translated.locale}
      value={locale}
      color="secondary"
      onChange={handleChange}
      select
    >
      {locales.map((l) => (
        <MenuItem key={l} value={l}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <img
              height={12}
              style={{ marginRight: 8 }}
              alt="locale flag"
              src={LOCALE_FLAG_MAP[l]}
            />
            {` `}
            {translated[l]}
          </Box>
        </MenuItem>
      ))}
    </TextField>
  );
};

// Props the component accepts.
type LocaleSwitchProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
LocaleSwitch.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default LocaleSwitch;
