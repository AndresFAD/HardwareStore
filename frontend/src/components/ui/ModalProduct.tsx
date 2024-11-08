
import axios, { AxiosResponse } from 'axios';
import { Product } from '../../types/Product';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface props {
    product: Product,
    setShowModal: Function
}

export default function ModalProduct({ product, setShowModal }: props) {

    const [actualProduct, setActualProduct] = useState<Product>(product ? { ...product } : { id: "", title: "", description: "", price: 0, category: "", image: "" })

    const handleChangeFiled = (field: string, value: string | number) => {
        setActualProduct({ ...actualProduct, [field]: value })
    }

    const validateForm = () => {
        const { title, description, price, category } = actualProduct;

        if (!product) {
            return !!(
                actualProduct.id &&
                title &&
                description &&
                price &&
                category
            );
        }

        return !!(
            title &&
            description &&
            price &&
            category
        );
    }

    const handleSave = () => {
        console.log("enter to handleSave")
        console.log(actualProduct)
        setShowModal(false)
        toast.success("Employee has been updated!", {
            position: "top-right",
            autoClose: 2000,
        });
        if (validateForm()) {
            axios.post('https://api.example.com/data', product)
                .then(() =>
                    toast.success("Product has been updated!", {
                        position: "bottom-right",
                        autoClose: 2000,

                    })
                )
                .catch(

            );

        }



    }

    return (
        <>

            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-10/12 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <button
                                className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-gray-900 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    <i className='bx bx-x-circle'></i>
                                </span>
                            </button>
                        </div>
                        {/*body*/}

                        <div className="mx-auto block w-10/12 rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
                            <div className="mb-5">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input value={actualProduct.title ? actualProduct.title : ""} type="text" id="title" onChange={(e) => handleChangeFiled("title", e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input type="text" value={actualProduct.description ? actualProduct.description : ""} onChange={(e) => handleChangeFiled("description", e.target.value)} placeholder="Description" id="decription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="text" value={actualProduct.price ? actualProduct.price : ""} onChange={(e) => handleChangeFiled("price", e.target.value)} placeholder="Price" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <input placeholder="Category" value={actualProduct.category ? actualProduct.category : ""} onChange={(e) => handleChangeFiled("category", e.target.value)} type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Image</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A picture for represent the component</div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={handleSave} >
                                    {actualProduct.id ? (<i className='bx bx-edit'>Update Product</i>) : (<i className='bx bx-message-alt-add'>Create Product</i>)}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

            <ToastContainer position='bottom-right' autoClose={2000} />
        </>
    );
}