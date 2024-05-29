import Swal from "sweetalert2";

const AddProducts = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id, title, brand, price, description, image_url };

        const result = await Swal.fire({
            title: 'Confirm Product Addition',
            text: "Are you sure you want to add this product?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            await fetch("http://localhost:3000/shoes", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    form.reset();
                });

            Swal.fire(
                'Added!',
                'Your product has been added.',
                'success'
            );
        }
    };





    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Add Produts</h1>

            <div className="my-16 w-4/5 mx-auto">
                <form onSubmit={handleSubmit} >
                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="title"
                            placeholder="Title"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="brand"
                            placeholder="Brand"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="number"
                            name="price"
                            placeholder="Price"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="description"
                            placeholder="Description"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="image_url"
                            placeholder="Image URL"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-50 p-3 w-full border border-gray-400 rounded-lg"
                            type="text"
                            name="id"
                            placeholder="ID"
                        />
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <input

                            className="btn btn-accent mt-4 w-max text-base"
                            type="submit"
                            value="Add Product"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;