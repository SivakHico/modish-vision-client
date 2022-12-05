import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home w3-container">
            <h2>Looking For a reliable Developer !?</h2>
            <h2>Looking For New Position !?</h2>
            <div className="btn-find">
                <Link to="/DevelopersList" className="just-btn">Find a Developer</Link>
                <Link to="/JobsList" className="just-btn">Find a Job</Link>
            </div>
        </div>
    );
};

export default Home;