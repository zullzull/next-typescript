"use client"

import React, { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SheetProps = {
    children: ReactNode;
    open: boolean,
    handleClick: (item: object) => void
}

export default function Sheet({ children , open = false, handleClick = ()=> {}} : SheetProps) {
    useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [open]);

    return(
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClick}
                >
                    <motion.div
                        className="w-full  bg-white rounded-t-lg shadow-lg"
                        style={{ height: '90vh' }}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 50 }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(event, info) => {
                          if (info.offset.y > 100) {
                            handleClick({});
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col h-full">    
                            <header className="flex justify-center items-center py-2">
                                <div className="w-4 h-0.5 bg-black rounded-lg"></div>
                            </header>
                            <main className="flex-grow overflow-y-auto">
                                {children}
                            </main>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}