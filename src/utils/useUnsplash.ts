// https://source.unsplash.com/random/?250x250
import { useRef, useState, useCallback } from 'react';

type TApi = {
    setSize: (size: number) => void;
    fetch: () => void;
    image: string;
};

// Fetch image
// Allow setting size (keep in state)
const useUnsplash = () => {
    const [size, setSize] = useState(250);
    const ref = useRef(null as unknown as TApi)

    const fetchImg = useCallback(async () => {
        const data = await fetch(`https://source.unsplash.com/random/?${size}x${size}`);
        const response = await data.blob();
        const url = URL.createObjectURL(response);
        ref.current.image = url;
    }, [size])

    if (ref.current === null) {

        ref.current = { fetch: fetchImg, setSize, image: "" };
    }
    ref.current.fetch = fetchImg;

    return ref.current
}

