import { Outlet, Link } from "react-router-dom"
import Home from "./Home";
import axios from "axios"
import DevelopersList from "./DevelopersList";
import JobsList from "./JobsList";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const types = {
    Company: "Company",
    Developer: "Developer",
}

const Layout = () => {
    const { user, setUser, handleLogout } = useContext(AppContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [type, setType] = useState(null)
    const navigate = useNavigate();

    function goToDeveloperForm() {
        navigate('/DevelopersList')
    }

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
            const res = await axios.post("https://link-them-api.onrender.com/api/v1/users/login", { email, password });
            setUser(res.data.user);
            localStorage.setItem('token', JSON.stringify(res.data.token))
            handelShowLogin()
        } catch (err) {
            console.log('fucking error', err);
        }
    };
    const handleRegSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://link-them-api.onrender.com/api/v1/users/register", { email, password, type });
            setUser(res.data.user);
            localStorage.setItem('email', res.data.user.email)
            localStorage.setItem('type', res.data.user.type)
            handelShowSignup()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <nav className="w3-bar w3-light-grey dotted-border">
                <Link to="/" className="w3-bar-item w3-mobile"><span className="rainbow rainbow_text_animated">LinkThem.de</span></Link>
                <input type="text" className="material-icons w3-bar-item w3-input w3-mobile search" placeholder="Search..." />
                <button className="w3-bar-item w3-button w3-green w3-mobile">Go</button>
                <Link to="/" className="float-right w3-bar-item w3-button w3-mobile" onClick={user ? handleLogout : handelShowLogin}>{user ? "Logout" : "Login"}</Link>
                <div className="float-right w3-dropdown-hover">
                    <button className="w3-button w3-mobile">Sign up</button>
                    <div className="w3-dropdown-content w3-bar-block">
                        <Link to="/" className="w3-bar-item w3-button w3-mobile" onClick={() => handelShowSignup("Company")}>as a Company</Link>
                        <Link to="/" className="w3-bar-item w3-button w3-mobile" onClick={() => handelShowSignup("Developer")}>as a Developer</Link>
                    </div>
                </div>
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
                            <h4>Join Our Space as a {types[type]}!</h4>
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
                <div className="w3-container">
                    <div className="w3-panel w3-pale-blue w3-leftbar w3-border-blue">Welcome to Our Platform {user.email} You're Registerd as a {user.type} <span onClick={goToDeveloperForm}><b>Go To Developers List</b></span> </div> {user.type === "Company" ? <DevelopersList /> : <JobsList />}
                </div> : ''}
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;