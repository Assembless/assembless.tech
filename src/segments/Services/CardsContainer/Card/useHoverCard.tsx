/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react';

export const useHoverCard = (): ((r: HTMLDivElement) => void) => {
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const card = (e.target as unknown) as HTMLDivElement;

    const percentX = (
      ((e as any).offsetX - card.offsetWidth / 2) /
      10 /
      3
    ).toFixed(2);
    const percentY = (
      -((e as any).offsetY - card.offsetHeight / 2) /
      11 /
      3
    ).toFixed(2);

    card.style.transform = `perspective(400px) rotateY(${percentX}deg) rotateX(${percentY}deg)`;
  }, []);
  const onMouseLeave = useCallback((e: React.MouseEvent) => {
    // const card = (e.target as unknown) as HTMLDivElement;

    (e.target as any).style!.transform = `perspective(400px) rotateY(0deg) rotateX(0deg)`;
  }, []);

  const setRef = useCallback((r: HTMLDivElement) => {
    if (r instanceof HTMLDivElement) {
      // @ts-ignore
      r.onmouseleave = onMouseLeave;
      // @ts-ignore
      r.onmousemove = onMouseMove;
    }
  }, []);

  return setRef;
};
