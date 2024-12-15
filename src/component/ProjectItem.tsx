import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

type ProjectItemProps = {
    data: {
        title: string,
        year: string,
        slug: string,
        web_url: string,
        thumbail: string,
        media: Array<string>
        description: string
    },
    handleClick: () => void
}

export default function ProjectItem({ data, handleClick = () => {}}: ProjectItemProps) {
    const [ showTitle, setShowTitle ] = useState(false)

    const handleShowTitle = (e: any) => {
        setShowTitle(e.type === "mouseenter")
    }

    return (
        <div
            onMouseEnter={handleShowTitle}
            onMouseLeave={handleShowTitle}
            className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md border"
            onClick={handleClick}
        >
            {
                <figure className="relative aspect-video">
                    <Image
                        src={data.thumbail}
                        alt={data.title}
                        sizes="320 640 720"
                        fill
                        style={{ objectFit: "cover"}}
                    />
                </figure>
            }
            <motion.div
                initial="hide"
                animate={showTitle ? "show" : "hide"}
                variants={{
                    show: {
                        translateY: '0%'
                    },
                    hide: {
                        translateY: '100%'
                    }
                }}
                transition={{
                    duration: 0.4
                }}
                className="absolute max-lg:!translate-y-0 bottom-0 left-0 right-0 px-4 py-3 font-semibold bg-gradient-to-t from-black/25 to-transparent text-white rounded-b-lg"
            >
                {data.title}
            </motion.div>
        </div>
    )
}