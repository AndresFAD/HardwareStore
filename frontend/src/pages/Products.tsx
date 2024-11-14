import { useEffect, useState } from "react";
import CardProduct from "../components/ui/CardProduct"
import { Product } from "../types/Product";
import ModalProduct from "../components/ui/ModalProduct";
import axios from "axios";


export default function ProductsPage() {

  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const product: Product = { id: "", title: "", description: "", price: 0, category: "", image: "" }

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get("http://localhost:8080/api/hardwarestore/products").then(data => setProducts(data.data)).catch(() => console.log("Error"))
  }

  const handleSearchTitle = (title: string) => {
    axios.get(`http://localhost:8080/api/hardwarestore/product/search?query=${title}`).then(data => setProducts(data.data)).catch(() => console.log("Error"))
  }

  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (

    <>
      <div className="flex justify-between m-4">
        <h1 className="text-2xl font-semibold">List of Page</h1>
        <input className="w-7/12 h-14 rounded-lg border px-4 border-black" placeholder="Title of the product" type="text" onChange={(e) => handleSearchTitle(e.target.value)} />
        <button onClick={() => setShowModal(true)} className="px-3 py-2 m-3 bg-green-500 rounded text-white font-semibold hover:bg-green-700"><i className='bx bx-message-alt-add'></i> New Product</button>
      </div>
      <div className="mx-10 my-7">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 m-10">

          {currentProducts.map((product) => (
            <CardProduct key={product.id} product={product} getProducts={getProducts} />
          ))}

        </div>

        <div className="flex justify-center items-center mt-8 gap-3">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          {/* Mostrar número de páginas */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === index + 1
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
      {showModal && (<ModalProduct product={product} setShowModal={closeModal} getProducts={getProducts} />)}
    </>
  );
}
