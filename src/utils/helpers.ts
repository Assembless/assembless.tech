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
