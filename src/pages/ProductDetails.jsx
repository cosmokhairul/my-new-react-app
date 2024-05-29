import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();
    const { brand, description, image_url, price, title } = shoe;
    return (
        <div>

            <h1 className="text-5xl text-center font-bold my-5">Product Details</h1>

            <div className="mt-5 mb-20">
                <img className="h-[400px] mx-auto" src={image_url} alt="product image" />
                <h1 className="text-4xl text-center font-bold mt-5 pb-3">Name:  {title}</h1>

                <h3 className="text-2xl font-semibold text-center pb-2">Brand: {brand}</h3>
                <h3 className="text-2xl font-semibold text-center pb-2">Price: {price} $$</h3>
                <p className="text-lg font-normal text-center ">Description: {description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;