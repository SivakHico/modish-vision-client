import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="w3-bar w3-light-grey w3-border">
                <Link to="/" className="w3-bar-item w3-button w3-mobile">Home</Link>
                <Link to="/" className="w3-bar-item w3-button w3-mobile">Login</Link>
                <Link to="/" className="w3-bar-item w3-button w3-mobile">Sign up</Link>
                <input type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder="Search.." />
                <button className="w3-bar-item w3-button w3-green w3-mobile">Go</button>
                <Link to="/" className="w3-bar-item w3-button w3-mobile">mOdish visiOn</Link>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;