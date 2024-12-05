import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-row w-2/4 mx-auto bg-red-500 py-5 justify-around">
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/services'}>Service</Link>
                <Link to={'/conacttt'}>Conact</Link>
            </nav>
        </div>
    );
};

export default Navbar;