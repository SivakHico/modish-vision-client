import { Outlet, Link } from "react-router-dom";
import { useState } from "react"
import axios from "axios";

const Layout = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [getShow, setShow] = useState(false)

    function handelDisplay() {
        setShow(!getShow)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/v1/users/login", { email, password });
            setUser(res.data.user);
            handelDisplay()
        } catch (err) {
            console.log(err);
        }
    };

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
                        <form className="w3-container" onSubmit={handleSubmit}>
                            <div className="w3-section">
                                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email" required />
                                <input className="w3-input w3-border" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" required />
                                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
                                <input className="w3-check w3-margin-top" type="checkbox" /> Remember me
                            </div>
                        </form>
                        <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                            <button onClick={handelDisplay} type="button" className="w3-button w3-red">Cancel</button>
                            <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">Password?</a></span>
                        </div>
                    </div>
                </div>
            }
            { user ?
                <span>
                    Welcome to the <b>{user.isAdmin ? "admin" : "user"}</b>
                    <b>{user.email}</b>
                </span> : 'Fcuk'}
            <Outlet />
        </>
    )
};

export default Layout;