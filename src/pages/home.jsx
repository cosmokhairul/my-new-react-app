import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner />
            <Products data={data} />
            <Accordian />
        </div>
    );
};

export default home;