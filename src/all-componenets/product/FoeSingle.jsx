import { useLoaderData } from "react-router-dom";


const FoeSingle = () => {
    const foesingledata = useLoaderData();
    
    const { firstname, lastname, website, id } = foesingledata;
    
    return (
        <div>
            <p>{firstname} - {lastname}</p>
            <p>{website}</p>
            <p>{ id }</p>
        </div>
    );
};

export default FoeSingle;