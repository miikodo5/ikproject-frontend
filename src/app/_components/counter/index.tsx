import { animate, useInView, motion } from "framer-motion";
import {useRef, useEffect} from "react";

type ICounter = {
    from: number,
    to: number,
    className: string
}
function Counter({ from, to, className } : ICounter){
    const nodeRef = useRef<HTMLParagraphElement | null>(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {

        if(isInView){
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: 2,
                delay: 0.5,
                onUpdate(value) {
                    node!.textContent = value.toFixed(0);
                },
            });
            return () => controls.stop();
        }
    }, [from, isInView, to]);

    return <motion.p
        ref={nodeRef}
        className={className}

    />;
}

export default Counter;