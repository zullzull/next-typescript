"use client"

import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import IconHeaert from "./IconHeart";
import Link from "next/link";

type ShowcaseProps = {
    slug: string,
    menu: string
}

export default function Showcase({ slug = "index", menu ="work" }: ShowcaseProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation();
    const [container, setContainer] = useState({
        width: 0,
        height: 0
    })
    const objectSize = 200;

    const handleCursor = (e: any) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Get the mouse coordinates relative to the container
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate the new position of the object, centering the object on the mouse
        let newX = mouseX - objectSize / 2;
        let newY = mouseY - objectSize / 2;

        // Constrain the object to stay within the bounds of the container
        newX = Math.max(0, Math.min(newX, container.width - objectSize));
        newY = Math.max(0, Math.min(newY, container.height - objectSize));

        // Animate the object to the new position
        controls.start({ left: newX, top: newY });
    }

    const updateContainer = () => {
        if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainer({ width, height });
        }
    };

    useEffect(() => {
        updateContainer();

        // Update the size on window resize
        window.addEventListener("resize", updateContainer);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener("resize", updateContainer);
        };
    }, []);

    return (
        <div ref={containerRef} onMouseMove={handleCursor} className="h-screen max-w-[2560px] w-full m-auto flex items-center justify-center relative">
            <article className="font-black text-6xl tracking-wide uppercase p-4">
                <p className="flex space-x-8 items-start">Creative <IconHeaert/></p>
                <p>Build Web App</p>
            </article>
            <motion.div
                className="absolute -z-10 right-3 top-3"
                animate={controls}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <div className="flex space-x-2 items-center">
                    <div className="w-4 h-4 bg-black"></div>
                    <div>I&apos;M ZULL</div>
                </div>
                <div className="overflow-hidden w-48">
                    <motion.figure
                        animate={{
                            scale: [1, 2.2]
                            }}
                            transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            times: [0.2, 2],
                            repeat: Infinity,
                            repeatDelay: 0.2
                        }}
                    >
                        <Image 
                            src="/hello.webp"
                            alt="hello"
                            width={200}
                            height={200}
                            sizes="320 640 720"
                        />
                    </motion.figure>
                </div>
            </motion.div>
            <div className="absolute right-3 bottom-3">
                <div className="flex max-w-[200px] flex-col">
                    <div className="flex flex-col text-3xl [&_div]:tracking-widest font-bold divide-y border-y [&_div]:py-2 uppercase">
                        <div>Front End</div>
                        <div>Developer</div>
                    </div>
                    <div className="my-8">
                        <article className="prose">
                            <p>I&apos;m web or app developer, a focused on creating tailor-made websites.</p>
                        </article>
                    </div>
                </div>
            </div>
            <div className="absolute left-3 bottom-3">
                <nav className="flex space-x-3 items-end">
                    <Link href="/" className={menu == "work" ? "font-bold uppercase" : "italic text-sm"}>
                        Work
                    </Link>
                    <Link href="/about" className={menu == "about" ? "font-bold uppercase" : "italic text-sm"}>
                        About Us
                    </Link>
                </nav>
            </div>
        </div>
    )
}