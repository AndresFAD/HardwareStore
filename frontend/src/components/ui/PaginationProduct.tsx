import { useState } from "react";
import { Product } from "../../types/Product";

interface props{
    products: Product[]
}

const PaginatedList = ({products}: props) => {
    // Ejemplo de datos: lista de números del 1 al 50
  
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
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);  // Elementos a mostrar
  
    // Calcular el número total de páginas
    const totalPages = Math.ceil(products.length / itemsPerPage);
  
    return (
      <div>
        {/* Botones de paginación */}
        <div>
          <button 
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
              style={{ margin: "0 5px", backgroundColor: currentPage === index + 1 ? "#ddd" : "" }}
            >
              {index + 1}
            </button>
          ))}
  
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    );
  };
  
  export default PaginatedList;