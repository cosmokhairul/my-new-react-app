import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const EditProducts = () => {

    const shoe = useLoaderData();

    const [title, setTitle] = useState(shoe.title);
    const [price, setPrice] = useState(shoe.price);
    const [brand, setBrand] = useState(shoe.brand);
    const [id, setId] = useState(shoe.id);
    const [description, setDescription] = useState(shoe.description);
    const [image_url, setImageURL] = useState(shoe.image_url);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const data = { id, title, brand, price, description, image_url };

        const result = await Swal.fire({
            title: 'Confirm Edit',
            text: "Are you sure you want to edit this product?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, edit it!',
            cancelButtonText: 'Cancel'

        });

        if (result.isConfirmed) {
            await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));


            Swal.fire(
                'Edited!',
                'Product information has been updated.',
                'success'
            );
        }

    };


    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Edit Product Information</h1>
            <div className="my-16">
                <form onSubmit={handleSubmit}>

                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="brand"
                            placeholder="Brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>


                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="image_url"
                            placeholder="Image URL"
                            value={image_url}
                            onChange={(e) => setImageURL(e.target.value)}
                        />
                    </div>

                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>


                    <input type="hidden" name="id" value={id} />

                    <div className="mt-2 flex justify-center items-center">
                        <input
                            className="btn btn-accent mt-4 w-max text-base"
                            type="submit"
                            value="Edit Product"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProducts;
