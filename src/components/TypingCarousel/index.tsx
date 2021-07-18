// Deps scoped imports.
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import { BlankCharacterSpan } from './BlankCharacterSpan';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * TypingCarousel component.
 * @description This component creates a typing animation for text.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const TypingCarousel = ({
  className,
  style,
  values,
  period,
  hideCaret,
}: TypingCarouselProps): JSX.Element => {
  const classes = useStyles();
  const activeValue = useRef(values[0]);
  const [value, setValue] = useState(activeValue.current);
  const isDeleting = useRef(false);

  const handleTick = useCallback(() => {
    let delta = 300 - Math.random() * 100;

    setValue((v) => {
      const subStrEnd = isDeleting.current ? v.length - 1 : v.length + 1;
      const newV = activeValue.current.substring(0, subStrEnd);

      if (isDeleting.current) {
        delta /= 2;
      }

      if (!isDeleting.current && newV === activeValue.current) {
        delta = period;
        isDeleting.current = true;
      } else if (isDeleting.current && newV === ``) {
        isDeleting.current = false;
        activeValue.current =
          values[values.indexOf(activeValue.current) + 1] ?? values[0];
        delta = 500;
      }

      return newV;
    });

    const timeout = setTimeout(handleTick, delta);
    return () => clearTimeout(timeout);
  }, [value]);

  useEffect(() => {
    handleTick();
  }, []);

  return (
    <span
      data-test-id="typingcarousel"
      className={cx(classes.root, className)}
      style={style}
    >
      <span>
        <BlankCharacterSpan />
        {value}
      </span>
      {!hideCaret && <span className={classes.caret}>|</span>}
    </span>
  );
};

// Props the component accepts.
type TypingCarouselProps = {
  className?: string;
  style?: React.CSSProperties;
  values: string[];
  period?: number;
  hideCaret?: boolean;
};

// Default props.
TypingCarousel.defaultProps = {
  className: ``,
  style: {},
  period: 2000,
  hideCaret: false,
};

// Time to export! 🚚
export default TypingCarousel;
