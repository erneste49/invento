
const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-6xl px-4 py-5 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
                &copy; {new Date().getFullYear()} Invento. Keep your stock in order. developed by nstech
            </div>
        </footer>
    )
}
export default Footer