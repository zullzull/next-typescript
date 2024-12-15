import Link from "next/link";
import Burger from "./Burger";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-30 max-w-[2560px] m-auto">
            <div className="flex justify-between items-center relative">
                <Link href="/" className="uppercase font-roboto font-black p-3 text-xl">
                    ZULL
                </Link>
            </div>
        </header>
    )
}