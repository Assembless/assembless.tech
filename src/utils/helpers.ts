import { useReducer } from 'react';

/**
 * Waits N amount of milliseconds.
 * @param timeout Milliseconds
 * @returns {Promise} when the time is passed.
 */
export function wait(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

// export const useSignal = () => useReducer((state) => state + 1, 0)[0];

// const [, f] = useReducer((c) => c + 1, 0);
export const useSignal = () => {
  const [, f] = useReducer((c) => c + 1, 0);

  return f;
};
