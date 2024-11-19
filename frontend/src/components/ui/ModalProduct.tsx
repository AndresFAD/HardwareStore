
import axios, { AxiosResponse } from 'axios';
import { Product } from '../../types/Product';
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useForm } from 'react-hook-form';

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


    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<Product>()

    const onSubmit = handleSubmit((data) => {

        const formData = new FormData();

        // Añadir otros campos al FormData
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('price', data.price.toString()); // Convertir a string si es necesario

        // Si se selecciona una imagen, añadirla
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0]); // `data.image` es un FileList
        }

        axios.post('http://localhost:8080/api/hardwarestore/product', formData)
            .then(() => {
                toast.success("Product has been updated!")
                setShowModal(false)
                getProducts()
            }
            )
            .catch(() =>
                toast.error("Something went wrong!!")
            );
    })

    // const validateForm = () => {
    //     const { title, description, price, category } = actualProduct;

    //     if (!product) {
    //         return !!(actualProduct.id && title && description && price && category);
    //     }

    //     return !!(title && description && price && category);
    // };

    // const handleUpdate = () => {
    //     if (validateForm()) {
    //         axios
    //             .patch(
    //                 `http://localhost:8080/api/hardwarestore/product/${product.id}`,
    //                 actualProduct
    //             )
    //             .then(() => {
    //                 setShowModal(false);
    //                 toast.success("Product has been updated!");

    //                 getProducts();
    //             })
    //             .catch(() => toast.error("Somethig wrong happend! Try again"));
    //     } else {
    //         toast.error("Complete all the fields!");
    //     }
    // };

    // const handleSave = () => {
    //     console.log(actualProduct)
    //     if (validateForm()) {
    //         axios.post('https://api.example.com/data', product)
    //             .then(() =>
    //                 toast.success("Product has been updated!")
    //             )
    //             .catch(() =>
    //                 toast.error("Something went wrong!!")
    //             );

    //     }
    //     else {
    //         toast.error("Complete all fields!!")
    //     }
    // };

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
                        <form onSubmit={onSubmit} className="w-full bg-white shadow-md p-6">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Title</label>
                                    <input {...register("title")} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type="text" name="title" placeholder="Title" />
                                </div>
                                <div className="w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Description</label>
                                    <textarea {...register("description")} rows={4} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" placeholder="Description" name="description"  ></textarea>
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Category</label>
                                    <input {...register("category")} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type="text" name="category" placeholder="Category" />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">Price</label>
                                    <input {...register("price")} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type="text" name="price" placeholder="Price" />
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

                                        <input id="dropzone-file" {...register("image")} type="file" className="hidden" name="image" accept="image/png, image/jpeg, image/webp" />
                                    </label>
                                </div>

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

                                >
                                    {product.id ?
                                        "Update Product"
                                        :
                                        "Create Product"
                                    }
                                </button>
                            </div>
                        </form>
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
