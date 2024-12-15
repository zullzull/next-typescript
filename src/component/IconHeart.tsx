"use client"

import { motion } from "framer-motion";

export default function IconHeaert() {
    return (
        <motion.svg
            className="max-w-4" 
            data-name="Calque 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 99.81 93.24"
            initial="small"
            animate={{
                scale: [1, 0.6, 0.8, 0.7, 1]
            }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
                times: [0.2, 0.5, 0.7, 0.2, 0.5],
                repeat: Infinity,
                repeatDelay: 0.2
            }}
        >
            <path d="M.1,60.51V13.56H11.26V3.38h22V13.69H44.48V29.18H55.57V13.69H66.74V3.38h22V13.56H99.9V60.51H88.77V70.75h-11V81.16H61.16V96.62H38.84V81H22.23V70.69H11.17V60.51Z" transform="translate(-0.1 -3.38)"></path>
        </motion.svg>
    )
}