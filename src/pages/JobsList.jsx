import { Link } from "react-router-dom";

const JobsList = () => {
    return (
        <>
            <div className="hero-image">
                <h1>Find Your Dream job Quick and easy: create a profile and apply today!</h1>
                <Link to="/DeveloperForm" className="w3-btn w3-border w3-large">Start Now</Link>
            </div>
            <div className="w3-row w3-margin">
                <div className="w3-third">
                    <img src="" alt="55" />
                </div>
                <div className="w3-twothird w3-container">
                    <h2>Corniglia</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </>
    )
}

export default JobsList;