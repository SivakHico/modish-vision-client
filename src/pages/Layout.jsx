import { Outlet, Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const types = {
    COMP: "Company",
    CAND: "Candidate",
}

const Layout = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [type, setType] = useState(null)

    function handelShowLogin() {
        setShowLogin(!showLogin)
    }

    function handelShowSignup(type) {
        setType(type)
        setShowSignup(!showSignup)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/v1/users/login", { email, password });
            setUser(res.data.user);
            handelShowLogin()
        } catch (err) {
            console.log(err);
        }
    };
    const handleRegSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/v1/users/register", { email, password, type });
            setUser(res.data.user);
            handelShowSignup()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <nav className="w3-bar w3-light-grey w3-border">
                <Link to="/" className="w3-bar-item w3-button w3-mobile">Home</Link>
                <Link to="/" className="w3-bar-item w3-button w3-mobile" onClick={handelShowLogin}>Login</Link>
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-mobile">Sign up</button>
                    <div className="w3-dropdown-content w3-bar-block w3-border">
                        <Link to="/" className="w3-bar-item w3-button w3-mobile" onClick={() => handelShowSignup("COMP")}>as a Company</Link>
                        <Link to="/" className="w3-bar-item w3-button w3-mobile" onClick={() => handelShowSignup("CAND")}>as a Developer</Link>
                    </div>
                </div>
                <input type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder="Search..." />
                <button className="w3-bar-item w3-button w3-green w3-mobile">Go</button>
                <Link to="/" className="w3-bar-item w3-button w3-mobile">mOdish visiOn</Link>
            </nav>
            {showLogin &&
                <div id="login-modal">
                    <div className="w3-modal-content w3-card-4 w3-animate-zoom max-w">
                        <div className="w3-center"><br />
                            <span onClick={handelShowLogin} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                        </div>
                        <form className="w3-container" onSubmit={handleSubmit}>
                            <h4>WelcomeBack to Our Space!</h4>
                            <div className="w3-section">
                                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email" required />
                                <input className="w3-input w3-border" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" required />
                                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
                                <input className="w3-check w3-margin-top" type="checkbox" /> Remember me
                            </div>
                        </form>
                        <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                            <button onClick={handelShowLogin} type="button" className="w3-button w3-red">Cancel</button>
                            <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">Password?</a></span>
                        </div>
                    </div>
                </div>
            }
            {showSignup &&
                <div id="login-modal">
                    <div className="w3-modal-content w3-card-4 w3-animate-zoom max-w">
                        <div className="w3-center"><br />
                            <span onClick={handelShowSignup} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                        </div>
                        <form className="w3-container" onSubmit={handleRegSubmit}>
                            <h4>SignUp to Our Space as {types[type]}!</h4>
                            <div className="w3-section">
                                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email" required />
                                <input className="w3-input w3-border" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" required />
                                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Sign Up</button>
                                <input className="w3-check w3-margin-top" type="checkbox" /> Remember me
                            </div>
                        </form>
                        <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                            <button onClick={handelShowSignup} type="button" className="w3-button w3-red">Cancel</button>
                            <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">Password?</a></span>
                        </div>
                    </div>
                </div>
            }
            {user ?
                <span>
                    Welcome to the <b>{user.isAdmin ? "admin" : "user"}</b>
                    <b>{user.email}</b>
                </span> : 'Fcuk'}
            <Outlet />
        </>
    )
};

export default Layout;