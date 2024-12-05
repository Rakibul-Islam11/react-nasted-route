
import { Link } from 'react-router-dom';

const Product = ({ produsc }) => {
    
    const { firstname, website, phone, id } = produsc;
    
    
    
    return (
        <div>
            <p>{firstname}</p>
            <p>{website}</p>
            <p>{phone}</p>
            <Link to={`/services/${id}`}>
                <button>more....</button>
            </Link>
        </div>
    );
};

export default Product;