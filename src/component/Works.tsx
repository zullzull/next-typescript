"use client"

import { useState } from "react"
import ProjectItem from "./ProjectItem"
import Sheet from "./Sheet"
import Work from "./Work"

type WorksProps = {
    posts: Array<{
        title: string,
        year: string,
        slug: string,
        web_url: string,
        thumbail: string,
        status: string,
        categories: Array<string>,
        media: Array<string>,
        description: string
    }>
}

export default function Works({posts = []}: WorksProps) {
    const [open, setOpen] = useState(false)
    const [selectedWork, setSelectedWork] = useState({
        title: "",
        year: "",
        slug: "",
        web_url: "",
        thumbail: "",
        categories: [],
        media: [],
        description: ""
    })

    const handleOpenBottomSheet = (item: any) => {
        setOpen(!open)
        setSelectedWork(item)
    }
    
    return(
        <>
            <div className="max-w-7xl m-auto my-8 px-4 lg:px-6">
                <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-3">
                    {
                        (posts.length > 0) &&
                        posts.map((item, i) => (
                            <ProjectItem key={i} data={item} handleClick={()=> handleOpenBottomSheet(item)} />
                        ))
                    }
                </div>
            </div>
            <Sheet open={open} handleClick={handleOpenBottomSheet}>
                <Work data={selectedWork} />
            </Sheet>
        </>
    )
}