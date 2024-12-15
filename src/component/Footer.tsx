import dayjs from "dayjs";

export default function Footer() {
    return (
        <footer className="my-20 max-w-7xl mx-auto px-3 lg:px-0">
            <div>&copy; {dayjs().format('YYYY')}</div>
        </footer>
    )
}