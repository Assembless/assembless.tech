// Deps scoped imports.
import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { useLittera, useLitteraMethods } from '@assembless/react-littera';

// Project scoped imports.

// Component scoped imports.
import translations from './trans';

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
      style={style}
      variant="outlined"
      label={translated.locale}
      value={locale}
      color="secondary"
      onChange={handleChange}
      select
    >
      {locales.map((l) => (
        <MenuItem value={l}>{translated[l]}</MenuItem>
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
