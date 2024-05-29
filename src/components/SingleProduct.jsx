import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleProduct = ({ shoe }) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, brand, price, description, image_url } = shoe;
    return (
        <div className="card w-96 max-h-[500px] bg-base-100 shadow-xl ">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{title}</h2>
                <h3 className="text-lg font-semibold text-center">Brand: {brand}</h3>
                <h3 className="text-lg font-semibold text-center">Price: ${price}</h3>
                <p className="text-base text-center ">{description}</p>
                <div className="card-actions justify-center ">
                    <button className="btn btn-primary text-base">
                        <Link to={`/products/${id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;