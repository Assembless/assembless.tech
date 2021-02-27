import { useState, useCallback } from "react";

export const useSignal = () => {
    const [, updateState] = useState();
    // @ts-ignore
    return useCallback(() => updateState({}), []);
}