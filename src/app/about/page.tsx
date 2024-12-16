import Showcase from "@/component/Showcase";
import dayjs from "dayjs";
import type { Metadata } from "next";

type BubleItemProps = {
    name : string
}

export const metadata: Metadata = {
    title: "About Us",
    description: "contact me",
};

export default function About() {
    const tech = ["React", "Next.js", "Nuxt.js", "Wordpress", "Woocommerce", "Strapi CMS", "GraphQL", "htmlcss3", "Tailwind CSS", "Framer Motion"]

    return(
        <main className="relative">
            <Showcase slug="about" menu="about" />
            <section className="max-w-4xl w-full m-auto px-3 lg:px-0">
                <div className="flex flex-col gap-8 my-12">
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
                        <article className="prose flex-1">
                            <h2>Biography</h2>
                            <p>Hello 👋 I&apos;m Zull, available to work on your web, app &amp; plugin woocommerce project!</p>
                            <p>I work as a freelance web, app &amp; plugin woocommerce with a big weakness for digital 💖</p>
                        </article>
                        <div className="">
                            <div className="flex flex-col space-y-2 bg-slate-50 rounded-md p-4">    
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" className="icon icon-16">
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span>
                                        Tangerang Selatan, Banten
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" className="icon icon-16">
                                        <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span>
                                        { dayjs().diff(dayjs("1996/05/18"), 'years') } <span>yo</span>
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                    </svg>
                                    <span>
                                        +62 85865150162
                                    </span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="prose">
                            <h3>Tech</h3>
                            <div className="flex flex-wrap gap-2 [&_button]:mr-3">
                                {
                                    tech.map((item, i) => <BubleItem key={i} name={item} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <article className="prose">
                            <h3>Top Specialties</h3>
                            <ul>
                                <li>Frontend Developer</li>
                                <li>Theme/Plugin Maker Wordpress</li>
                                <li>Strapi Plugin</li>
                            </ul>
                        </article>
                    </div>
                    <div>
                        <article className="prose">
                            <h3>Seeking</h3>
                            <ul>
                                <li>Freelance or contract opportunities</li>
                                <li> Full-time opportunities</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}

const BubleItem = ({ name }: BubleItemProps) => {
    return (
        <button className="px-2 py-1 rounded-md bg-slate-50 text-sm hover:bg-orange-600/80 hover:transition-colors hover:text-slate-50 hover:duration-300">
            { name }
        </button>
    )
}