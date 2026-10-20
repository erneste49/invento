
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Create = () => {
    const { products, setProducts } = useContext(ProductContext)
    const [name, setName] = useState("")
    const [qty, setQty] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        setProducts([...products, { name: name.trim(), qty, id: Date.now() }])
        setName("")
        setQty("")
    }

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" aria-labelledby="add-product-heading">
            <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                <h2 id="add-product-heading" className="text-lg font-semibold tracking-tight text-slate-900">Add a product</h2>
                <p className="mt-1 text-sm text-slate-500">Enter the product details to add it to your inventory.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_180px_auto] sm:items-end sm:gap-4 sm:px-6 sm:pb-6 sm:pt-5">
                <div className="grid gap-2">
                    <label htmlFor="product-name" className="text-sm font-medium text-slate-700">Product name</label>
                    <input
                        id="product-name"
                        name="productName"
                        type="text"
                        placeholder="e.g. Packing boxes"
                        autoComplete="off"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        maxLength={100}
                        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="product-quantity" className="text-sm font-medium text-slate-700">Quantity</label>
                    <input
                        id="product-quantity"
                        name="quantity"
                        type="number"
                        placeholder="e.g. 24"
                        value={qty}
                        onChange={(event) => setQty(event.target.value)}
                        min="0"
                        step="1"
                        required
                        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 active:bg-blue-800 sm:w-auto" type="submit">
                    <svg className="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    Add product
                </button>
            </form>
        </section>
    )
}
export default Create