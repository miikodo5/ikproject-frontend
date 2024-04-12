import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<{
        width: number,
        height: number
    }>({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const handleResize = ()=> {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        if (typeof window !== 'undefined') {
            handleResize();

            window.addEventListener('onload', handleResize);
            window.addEventListener('resize', handleResize);
        }
        // handleResize() // <-- invoke this on component mount

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('onload', handleResize);
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return windowDimensions;
}