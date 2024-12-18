import { useEffect, useState } from "react";
import ModalProduct from "./ModalProduct";
import { Product } from "../../types/Product";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface props {
    product: Product,
    getProducts: Function
}

export default function CardProduct({product, getProducts}: props) {

    const [showModal, setShowModal] = useState(false);
    const [actualProduct, setActualProduct] = useState<Product | null>(null);

    const closeModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        const actualProduct = product;
        if (actualProduct.image) {
            // Asumimos que actualProduct.image es una cadena Base64
            const imageUrl = `data:image/jpeg;base64,${actualProduct.image}`;
            actualProduct.image = imageUrl;
        }
        setActualProduct(actualProduct);
    }, [product]);
    
    const handleDeleteProduct = () => {
        console.log("entro a la mica")
        axios.delete(`http://localhost:8080/api/hardwarestore/product/${product.id}`).then(() => { getProducts(); toast.success('Product Deleted!') }).catch(err => console.log(err))
    }

    return (
        <>


            <div>
                <div className="card h-auto max-w-full p-3 bg-gray-200 relative overflow-visible shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                    <button onClick={() => setShowModal(true)} className="card-img h-2/5 w-full rounded-lg  flex justify-center">
                        {actualProduct?.image ? (
                            <img className="max-w-full max-h-80 rounded-lg text-center" src={actualProduct.image} alt={product.title} />
                        ) : (
                            <p>No image available</p>
                        )}
                    </button>
                    <div className="card-info pt-4">
                        <button onClick={() => setShowModal(true)}>
                            <p className="text-2xl font-semibold leading-tight">
                                {product.title}
                            </p>

                        </button>
                        <p className="text-body text-lg pb-2.5">
                            {product.description}
                        </p>
                    </div>
                    <div className="card-footer flex justify-end items-center pt-2.5 border-t border-gray-300">
                        {/* <span className="text-title font-semibold text-xl">${product.price}</span>
                        <div className="card-button flex border border-gray-800 p-1 cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:border-red-200 hover:bg-red-200">
                            <svg className="svg-icon w-5 h-5" viewBox="0 0 20 20">
                                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                            </svg>
                        </div> */}

                        <button onClick={() => setShowModal(true)} className="py-2 px-3 mx-3 bg-yellow-500 rounded-lg hover:bg-yellow-600 font-semibold"><i className='bx bx-edit'></i> Edit</button>
                        <button onClick={handleDeleteProduct} className="py-2 px-3 mx-3 bg-red-500 text-white rounded-lg hover:bg-red-700 font-semibold"><i className='bx bx-trash'></i> Delete</button>
                    </div>
                </div>

            </div>

            <Toaster position="bottom-right"
                reverseOrder={false} />
            {showModal && (<ModalProduct product={product} setShowModal={closeModal} getProducts={getProducts} />)}
        </>
    )
}