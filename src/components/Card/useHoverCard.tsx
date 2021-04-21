/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
import React, { useCallback } from 'react';

export const useHoverCard = () => {
    const onMouseMove = useCallback((e: React.MouseEvent) => {
        const card = e.target as unknown as HTMLDivElement;

        const percentX = ((e.offsetX - card.offsetWidth / 2) / 10 / 3).toFixed(2);
        const percentY = (-(e.offsetY - card.offsetHeight / 2) / 11 / 3).toFixed(2);

        card.style.transform = `perspective(400px) rotateY(${percentX}deg) rotateX(${percentY}deg)`;
    }, []);
    const onMouseLeave = useCallback((e: React.MouseEvent) => {
        const card = e.target as unknown as HTMLDivElement;

        e.target.style!.transform = `perspective(400px) rotateY(0deg) rotateX(0deg)`;
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
