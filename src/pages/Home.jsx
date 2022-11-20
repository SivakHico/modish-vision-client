import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home w3-container">
            <h1>Looking For a reliable Developer !?</h1>
            <h1>Looking For New Position !?</h1>
            <div>
                <Link to="/DevelopersList" className="w3-btn w3-border w3-large">find a Developer</Link>
                <Link to="/JobsList" className="w3-btn w3-border w3-large">find a Job</Link>
            </div>
        </div>
    );
};

export default Home;