import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-[#081229] text-white flex justify-around py-4">
            <Link to={'/'} className="hover:text-white text-slate-400">
                Home
            </Link>
            <Link to={'/provider'} className="hover:text-white text-slate-400">
                RAW Providers
            </Link>
            <Link to={'/manufacturer'} className="hover:text-white text-slate-400">
                Laboratory
            </Link>
            <Link to={'/consumer'} className="hover:text-white text-slate-400">
                Customer Page
            </Link>
        </div>
    );
};

export default Navbar;
