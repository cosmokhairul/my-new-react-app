
const Banner = () => {
    return (
        <div className="hero h-[600px] bannerBg" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="mx-auto">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Shoe Land, where every step is a statement.</h1>
                    <p className="text-lg mb-5">Step into the world of Shoe Land, your ultimate destination for premium brand footwear online. From sneakers to stilettos, we curate a diverse collection of top-notch shoes to elevate every step of your journey. Explore our virtual shelves, where style meets comfort, and find the perfect pair to complement your unique stride.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;