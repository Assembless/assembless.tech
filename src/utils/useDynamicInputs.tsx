import { useSignal } from '@/utils/helpers';
import { TextField } from '@material-ui/core';
import React, { useRef, useCallback } from 'react';

type THookApi = {
  comps: JSX.Element[];
  values: string[];
  onValueChange: (value: string, index: number) => void;
};

const MAX_NUMBER_OF_INPUTS = 10;

const mapToComp = (onChange: (v: string, i: number) => void) => (
  value: string,
  index: number,
) => (
  <TextField
    name={`${index}`}
    style={{
      marginBottom: `20px`,
      borderRadius: `4px`,
    }}
    value={value}
    onChange={(e) => onChange(e.target.value, index)}
  />
);

export const useDynamicInputs = () => {
  const signal = useSignal();

  // The main api propagated to the parent component.
  const apiRef = useRef((null as unknown) as THookApi);
  // Memoized values array.
  const valuesRef = useRef([``]);

  const handleValueChange = useCallback((nextValue: string, index: number) => {
    const prevValue = valuesRef.current[index];

    if (prevValue === `` && nextValue !== `` && index < +MAX_NUMBER_OF_INPUTS) {
      // Append new element.
      valuesRef.current.push(``);
      valuesRef.current[index] = nextValue;
    } else if (
      (prevValue !== `` && nextValue !== ``) ||
      index === +MAX_NUMBER_OF_INPUTS
    ) {
      valuesRef.current[index] = nextValue;
    } else if (
      prevValue !== `` &&
      nextValue === `` &&
      index !== valuesRef.current.length - 1
    ) {
      // pop element
      valuesRef.current.splice(index, 1);
    }

    signal();
  }, []);

  if (apiRef.current === null) {
    apiRef.current = {
      values: [``],
      onValueChange: handleValueChange,
      comps: [],
    };
  }
  apiRef.current.values = valuesRef.current;
  apiRef.current.comps = valuesRef.current.map(
    mapToComp(apiRef.current.onValueChange),
  );

  return apiRef.current;
};
