


import Header from "./components/Header"
import Create from "./components/Create"
import Products from "./components/Products"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <Create />
          <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App