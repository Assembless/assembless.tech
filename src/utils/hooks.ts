import { useState } from "react";

export const useSignal = () => {
    const [, updateState] = useState();
    // @ts-ignore
    return useCallback(() => updateState({}), []);
}