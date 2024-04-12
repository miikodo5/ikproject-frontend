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

        // handleResize() // <-- invoke this on component mount

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}