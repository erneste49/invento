
import { ProductContext } from "../context/ProductContext"
import { useContext, useEffect } from "react"

const Header = () => {
    const { products } = useContext(ProductContext)

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products])

    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-4 sm:min-h-18 sm:px-6 lg:px-8">
                <a className="inline-flex items-center gap-3 text-lg font-bold tracking-tight text-slate-900 no-underline" href="/" aria-label="Invento home">
                    <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600" aria-hidden="true">
                        <svg className="size-5" viewBox="0 0 24 24" fill="none">
                            <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.1V21" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        </svg>
                    </span>
                    Invento
                </a>
                <span className="text-xs font-medium text-slate-500 sm:text-sm">Inventory management</span>
            </div>
            <div className="mx-auto w-full max-w-6xl px-4 pb-7 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8">
                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-sm font-semibold text-blue-600">OVERVIEW</p>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Inventory</h1>
                        <p className="mt-2 text-sm text-slate-500 sm:text-base">Manage your products and keep stock organized.</p>
                    </div>
                    <div className="flex min-w-44 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm" aria-label={`${products.length} products in inventory`}>
                        <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-lg font-semibold text-blue-600" aria-hidden="true">▦</span>
                        <span className="grid gap-0.5">
                            <strong className="text-xl leading-tight text-slate-900">{products.length}</strong>
                            <span className="text-xs text-slate-500">{products.length === 1 ? "product tracked" : "products tracked"}</span>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
