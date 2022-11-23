import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
    const [getShow, setShow] = useState(false)

    function handelDisplay() {
        setShow(!getShow)
    }

    return (
        <>
            <nav className="w3-bar w3-light-grey w3-border">
                <Link to="/" className="w3-bar-item w3-button w3-mobile">Home</Link>
                <Link to="/" className="w3-bar-item w3-button w3-mobile" onClick={handelDisplay}>Login</Link>
                <Link to="/" className="w3-bar-item w3-button w3-mobile">Sign up</Link>
                <input type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder="Search..." />
                <button className="w3-bar-item w3-button w3-green w3-mobile">Go</button>
                <Link to="/" className="w3-bar-item w3-button w3-mobile">mOdish visiOn</Link>
            </nav>
            {getShow &&
                <div id="login-modal">
                    <div className="w3-modal-content w3-card-4 w3-animate-zoom max-w">
                        <div className="w3-center"><br />
                            <span onClick={handelDisplay} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                        </div>
                        <form className="w3-container" action="">
                            <div className="w3-section">
                                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required />
                                <input className="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required />
                                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
                                <input className="w3-check w3-margin-top" type="checkbox" /> Remember me
                            </div>
                        </form>
                        <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                            <button onClick={handelDisplay} type="button" className="w3-button w3-red">Cancel</button>
                            <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
                        </div>
                    </div>
                </div>
            }
            <Outlet />
        </>
    )
};

export default Layout;