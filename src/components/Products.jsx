import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
    const { products, setProducts } = useContext(ProductContext)

    function handleDelete(id) {
        setProducts(products.filter((product) => product.id !== id))
    }

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" aria-labelledby="products-heading">
            <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                <h2 id="products-heading" className="text-lg font-semibold tracking-tight text-slate-900">Available products</h2>
                <p className="mt-1 text-sm text-slate-500">{products.length === 1 ? "1 item" : `${products.length} items`} in your inventory</p>
            </div>
            {products.length > 0 ? (
                <div className="overflow-x-auto px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <table className="w-full min-w-130 border-collapse text-left">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <tr className="[&>th:first-child]:rounded-l-lg [&>th:last-child]:rounded-r-lg">
                                <th scope="col" className="px-4 py-3 font-semibold">No.</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Product name</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Quantity</th>
                                <th scope="col" className="px-4 py-3 text-right font-semibold"><span className="sr-only">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {products.map((product, index) => (
                                <tr key={product.id} className="transition-colors hover:bg-slate-50/70">
                                    <td className="px-4 py-4 tabular-nums text-slate-400">{String(index + 1).padStart(2, "0")}</td>
                                    <td className="px-4 py-4 font-medium text-slate-900">{product.name}</td>
                                    <td className="px-4 py-4">
                                        <span className="inline-flex min-w-9 justify-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{product.qty}</span>
                                    </td>
                                    <td className="px-4 py-4 text-right">
                                        <button
                                            className="rounded-md px-2.5 py-1.5 text-sm font-medium text-rose-600 transition hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-100"
                                            type="button"
                                            onClick={() => handleDelete(product.id)}
                                            aria-label={`Delete ${product.name}`}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="grid min-h-52 justify-items-center content-center px-6 py-8 text-center">
                    <span className="mb-3 grid size-12 place-items-center rounded-xl bg-slate-100 text-xl text-slate-500" aria-hidden="true">▦</span>
                    <strong className="text-sm font-semibold text-slate-800">No products yet</strong>
                    <p className="mt-1 text-sm text-slate-500">Add your first product using the form above.</p>
                </div>
            )}
        </section>
    )
}
export default Products