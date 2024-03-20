import { ReactNode } from "react"
import {
    AnimatePresence, motion
} from 'framer-motion';


interface Props {
    children: ReactNode;
    initial?: object;
    animate?: object;
    transition?: object;
    keyValue?: string;
    className?: string;
}

export const AnimationWrapper = (
    { 
        children, 
        initial={ opacity: 0}, 
        animate={ opacity: 1},
        transition={ duration: 1},
        keyValue, className
    }: Props
) => {
  return (
    <AnimatePresence>
        <motion.div initial={initial}
                    animate={animate}
                    transition={transition}
                    key={keyValue}
                    className={className}
        >
            {children}
        </motion.div>
    </AnimatePresence>
  )
}