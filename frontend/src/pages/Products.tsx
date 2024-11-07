import { useState } from "react";
import CardProduct from "../components/ui/CardProduct"
import { Product } from "../types/Product";
import ModalProduct from "../components/ui/ModalProduct";

export default function ProductsPage() {

  const [showModal, setShowModal] = useState(false);
  const product:Product = {id:"", title:"", description:"", price:0, category:"", image:""}

  const closeModal = () => {
    setShowModal(false)
  }

  const products: Product[] = [
    {
      "id": "672a66e10a3e7effb9610dc8",
      "title": "ullamco",
      "description": "Magna exercitation aliquip amet ullamco ullamco commodo duis ut laboris.",
      "price": 893,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e14efdab6f5a55066b",
      "title": "sit",
      "description": "Consequat magna quis voluptate labore laborum adipisicing proident velit fugiat culpa.",
      "price": 471,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1f488ace1d0914307",
      "title": "sit",
      "description": "Pariatur pariatur ea Lorem et non.",
      "price": 703,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1835ae902092def8b",
      "title": "in",
      "description": "Ipsum ad aliquip consequat amet nulla commodo.",
      "price": 732,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1048869dc8574158b",
      "title": "anim",
      "description": "Eu duis veniam duis id commodo enim labore est.",
      "price": 949,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e17e1a4415ef2518a8",
      "title": "in",
      "description": "Occaecat et fugiat ut aute veniam fugiat aliqua duis exercitation ipsum do excepteur sunt pariatur.",
      "price": 874,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1174e8d9f3570f070",
      "title": "aute",
      "description": "Eiusmod cupidatat in nostrud laboris aliquip adipisicing eiusmod deserunt tempor ullamco ipsum laboris commodo.",
      "price": 154,
      "category": "Motherboard",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e17a2ffcb55eb0c239",
      "title": "quis",
      "description": "Sit commodo ea laborum tempor nisi elit veniam duis.",
      "price": 676,
      "category": "Motherboard",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e118eef74b9cab6792",
      "title": "ipsum",
      "description": "Consequat id dolor est ipsum nulla pariatur nisi sunt sit irure enim.",
      "price": 126,
      "category": "CPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e19e4ec033b2cd72fd",
      "title": "do",
      "description": "Laborum Lorem consequat pariatur do incididunt ex amet sint dolor ea eiusmod non enim quis.",
      "price": 139,
      "category": "Motherboard",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1803bbe4c3e79ddc2",
      "title": "commodo",
      "description": "Do reprehenderit ullamco consectetur do voluptate enim enim dolore.",
      "price": 639,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e118b94a4be5b847a1",
      "title": "deserunt",
      "description": "Consequat enim sint nulla officia duis tempor laborum officia ipsum aute tempor tempor pariatur incididunt.",
      "price": 100,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e16c9e60fb11a1e938",
      "title": "esse",
      "description": "Ea commodo deserunt dolore do sunt.",
      "price": 101,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e19fed3b592153a739",
      "title": "amet",
      "description": "Reprehenderit dolore est do nulla excepteur adipisicing.",
      "price": 617,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1324953f869a2dbde",
      "title": "minim",
      "description": "Tempor amet in ipsum deserunt duis excepteur commodo elit id.",
      "price": 865,
      "category": "CPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1e205568da815f638",
      "title": "eu",
      "description": "Deserunt dolor fugiat nisi fugiat nulla.",
      "price": 339,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1938e307a466b2bfd",
      "title": "et",
      "description": "Laborum qui id excepteur id exercitation voluptate culpa et sint sint sint id nostrud aliquip.",
      "price": 476,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e14cb59a0f4364cc52",
      "title": "nostrud",
      "description": "Proident elit laboris Lorem incididunt consectetur sint aute ipsum mollit.",
      "price": 333,
      "category": "CPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1710703de5bfdfacf",
      "title": "deserunt",
      "description": "Exercitation ullamco laboris cillum quis amet minim aliquip irure non.",
      "price": 780,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1c4b016a672489414",
      "title": "ullamco",
      "description": "Cillum aute laboris eiusmod veniam magna nostrud fugiat Lorem cillum minim proident ad.",
      "price": 455,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e134d7a195ae555fdc",
      "title": "non",
      "description": "Fugiat magna enim aute occaecat ad.",
      "price": 621,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1a0780e91d850987f",
      "title": "ex",
      "description": "Qui non ex pariatur irure.",
      "price": 234,
      "category": "Motherboard",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e17f4d87f7913c4a0e",
      "title": "incididunt",
      "description": "Duis enim pariatur mollit do.",
      "price": 340,
      "category": "RAM",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1faf13d13b6d65a1c",
      "title": "esse",
      "description": "Cupidatat ad ut incididunt officia aliquip aliquip ea consequat esse voluptate reprehenderit.",
      "price": 181,
      "category": "Motherboard",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    },
    {
      "id": "672a66e1b556f672472368b9",
      "title": "do",
      "description": "Eu velit velit Lorem eiusmod amet quis.",
      "price": 591,
      "category": "GPU",
      "image": "https://faithtechnologycr.com/wp-content/uploads/2024/04/MSI-GEFORCE-RTX-4090-GAMING-TRIO-24G.jpg"
    }
  ]

  // Número de elementos por página
  const itemsPerPage = 9;

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Función para cambiar la página
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calcular los elementos a mostrar para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;  // Índice del último elemento
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;  // Índice del primer elemento
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);  // Elementos a mostrar

  // Calcular el número total de páginas
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (

    <>
      <div className="flex justify-between m-4">
        <h1 className="text-2xl font-semibold">List of Page</h1>
        <button onClick={() => setShowModal(true)} className="px-3 py-2 m-3 bg-green-500 rounded text-white font-semibold hover:bg-green-700"><i className='bx bx-message-alt-add'></i> New Product</button>
      </div>
      <div className="mx-10 my-7">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 m-10">

          {currentProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
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
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
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
      {showModal && (<ModalProduct product={product} setShowModal={closeModal} />)}
    </>
  );
}
