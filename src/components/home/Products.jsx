import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
    // console.log(data);
    return (
        <div>
            <h1 className="my-8 text-4xl font-bold text-center ">Our Shoes </h1>

            <div className="flex flex-wrap gap-4 px-6 justify-center items-center mb-10">
                {
                    // eslint-disable-next-line react/prop-types
                    data.slice(0, 4).map((shoe) => (
                        <SingleProduct key={shoe.id} shoe={shoe} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;