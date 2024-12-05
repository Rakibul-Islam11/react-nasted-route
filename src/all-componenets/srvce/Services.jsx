import { useLoaderData } from "react-router-dom";
import Product from "../product/Product";


const Services = () => {
    const useApiData = useLoaderData()
    console.log(useApiData);
    
    return (
        <div>
            <p>servic....</p>

            {
                useApiData.map(produsc => <Product
                    key={produsc.id}
                    produsc={produsc}
                ></Product>)
            }
        </div>
    );
};

export default Services;