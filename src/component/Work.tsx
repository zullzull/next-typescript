"use client"

import dayjs from "dayjs"
import Image from "next/image"
import markdown from "@/lib/markdown"
type WorkProps = {
    data: {
        title: string,
        year: string,
        slug: string,
        web_url: string,
        thumbail: string,
        categories: Array<string>,
        media: Array<string>,
        description: string
    },
}

export default function Work({ data }: WorkProps) {
    
    return (
        <section className="max-w-xl w-full m-auto px-4 lg:px-6">
            <article className="prose relative mt-8">
                <h1 className="sticky top-0 z-50 bg-white">{data.title}</h1>
                <div className="flex flex-col items-center text-xs font-bold">
                    {
                        data.year &&
                        <div>{dayjs(data.year).format('YYYY')}</div>
                    }
                    <div className="flex flex-wrap">
                        {
                            (data.categories.length > 0) &&
                            data.categories.map((cat, c) => (
                                <p className="relative before:content-[','] before:first:content-none before:mr-1" key={c}>{cat}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-8">
                    {
                        data?.description &&
                        <article className="prose prose-sm" dangerouslySetInnerHTML={{__html: markdown(data?.description)}} />
                    }
                </div>
            </article>
        </section>
    )
}