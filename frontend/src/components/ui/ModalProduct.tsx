
import axios, { AxiosResponse } from 'axios';
import { Product } from '../../types/Product';
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";

interface props {
    product: Product;
    setShowModal: Function;
    getProducts: Function;
}

export default function ModalProduct({
    product,
    setShowModal,
    getProducts,
}: props) {
    const [actualProduct, setActualProduct] = useState<Product>(
        product
            ? { ...product }
            : {
                id: "",
                title: "",
                description: "",
                price: 0,
                category: "",
                image: "",
            }
    );

    const handleChangeFiled = (field: string, value: string | number) => {
        setActualProduct({ ...actualProduct, [field]: value });
    };

    const handleChangeImage = (event) => {
        setActualProduct({ ...actualProduct, image: event.target.files[0] }); 
    }

    const validateForm = () => {
        const { title, description, price, category } = actualProduct;

        if (!product) {
            return !!(actualProduct.id && title && description && price && category);
        }

        return !!(title && description && price && category);
    };

    const handleUpdate = () => {
        if (validateForm()) {
            axios
                .patch(
                    `http://localhost:8080/api/hardwarestore/product/${product.id}`,
                    actualProduct
                )
                .then(() => {
                    setShowModal(false);
                    toast.success("Product has been updated!");

                    getProducts();
                })
                .catch(() => toast.error("Somethig wrong happend! Try again"));
        } else {
            toast.error("Complete all the fields!");
        }
    };

    const handleSave = () => {
        console.log(actualProduct)
        if (validateForm()) {
            axios.post('https://api.example.com/data', product)
                .then(() =>
                    toast.success("Product has been updated!")
                )
                .catch(() =>
                    toast.error("Something went wrong!!")
            );

        }
        else{
            toast.error("Complete all fields!!")
        }
    };

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-10/12 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h2 className="text-4xl font-semibold">Product Information</h2>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-gray-900 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    <i className="bx bx-x-circle"></i>
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <form className="w-full bg-white shadow-md p-6">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Title</label>
                                    <input onChange={(e) => handleChangeFiled("title", e.target.value)} value={actualProduct.title ? actualProduct.title : ""} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type="text" name="name" placeholder="Category Name" required />
                                </div>
                                <div className="w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Description</label>
                                    <textarea onChange={(e) => handleChangeFiled("description", e.target.value)} value={actualProduct.description ? actualProduct.description : ""} rows={4} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" name="description" required > </textarea>
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Category</label>
                                    <input onChange={(e) => handleChangeFiled("category", e.target.value)} value={actualProduct.category ? actualProduct.category : ""} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type="text" name="name" placeholder="Category Name" required />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Price</label>
                                    <input onChange={(e) => handleChangeFiled("price", e.target.value)} value={actualProduct.price ? actualProduct.price : ""} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type="text" name="name" placeholder="Category Name" required />
                                </div>

                                {/* <div className="w-full md:w-full px-3 mb-6">
                                    <button className="appearance-none block w-full bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500"
                                    >Add Category</button>
                                </div> */}

                                <div className="w-full px-3 mb-8">
                                    <label className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center" htmlFor="dropzone-file">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>

                                        <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Product image</h2>

                                        <p className="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF. </p>

                                        <input id="dropzone-file" onChange={handleChangeImage} type="file" className="hidden" name="category_image" accept="image/png, image/jpeg, image/webp" />
                                    </label>
                                </div>

                            </div>
                        </form>
                        {/* <div className="mx-auto block w-10/12 rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
                            <div className="mb-5">
                                <label
                                    htmlFor="title"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Title
                                </label>
                                <input
                                    value={actualProduct.title ? actualProduct.title : ""}
                                    type="text"
                                    id="title"
                                    onChange={(e) => handleChangeFiled("title", e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <input
                                    type="text"
                                    value={
                                        actualProduct.description ? actualProduct.description : ""
                                    }
                                    onChange={(e) =>
                                        handleChangeFiled("description", e.target.value)
                                    }
                                    placeholder="Description"
                                    id="decription"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </label>
                                <input
                                    type="text"
                                    value={actualProduct.price ? actualProduct.price : ""}
                                    onChange={(e) => handleChangeFiled("price", e.target.value)}
                                    placeholder="Price"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category
                                </label>
                                <input
                                    placeholder="Category"
                                    value={actualProduct.category ? actualProduct.category : ""}
                                    onChange={(e) =>
                                        handleChangeFiled("category", e.target.value)
                                    }
                                    type="text"
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor="user_avatar"
                                >
                                    Image
                                </label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="user_avatar_help"
                                    id="user_avatar"
                                    type="file"
                                />
                                <div
                                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                    id="user_avatar_help"
                                >
                                    A picture for represent the component
                                </div>
                            </div> */}
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
                                onClick={product ? handleSave : handleUpdate}
                            >
                                {actualProduct.id ?
                                    "Update Product"
                                    :
                                    "Create Product"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    );
}
