"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Burger() {
    const [ open, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div onClick={handleOpen} className="grid gap-1 items-center relative">
            <motion.div
                initial="hide"
                animate={open ? 'show' : 'hide'}
                variants={{
                    show: {
                        rotate: '45deg',
                        translateY: '50%'
                    },
                    hide: {
                        rotate: '0deg',
                        translateY: '0'
                    }
                }}
                className="w-4 h-0.5 bg-black"
            ></motion.div>
            <motion.div
                initial="hide"
                animate={open ? 'show' : 'hide'}
                variants={{
                    show: {
                        width: 0,
                        height: 0
                    },
                    hide: {
                        width: 16,
                        height: 2
                    }
                }}
                className="w-4 h-0.5 bg-black"
            ></motion.div>
            <motion.div
                initial="hide"
                animate={open ? 'show' : 'hide'}
                variants={{
                    show: {
                        rotate: '-45deg'
                    },
                    hide: {
                        rotate: '0deg'
                    }
                }}
                className="w-4 h-0.5 bg-black"
            ></motion.div>
        </div>
    )
}