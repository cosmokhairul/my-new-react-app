
const Accordian = () => {
    return (
        <div className="py-10 bg-[#EBC400]">
            <h1 className=" py-5 text-2xl font-bold text-center ">FAQS </h1>

            <div className="w-3/5 mx-auto">
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How can I order shoes?
                    </div>
                    <div className="collapse-content">
                        <p>Its very simple. Just click on the Buy Now button.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200  mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you accept pay on delivery?
                    </div>
                    <div className="collapse-content">
                        <p>Of course! Why not?</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What if I get the wrong product or damaged product?
                    </div>
                    <div className="collapse-content">
                        <p>With all due respect we are with you at every problem you face regarding the delivery. Do not worry at all.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;