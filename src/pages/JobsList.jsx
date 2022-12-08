import { Link } from "react-router-dom";

const JobsList = () => {
    return (
        <>
            <div className="hero-text">
                <h3>Find Your Dream job Quick and easy</h3>
                <h3>Create a profile and apply today!</h3>
                <Link to="/DeveloperForm" className="w3-btn w3-border w3-large">Start Now</Link>
            </div>
            <div className="w3-row w3-margin">
                <div className="w3-third">
                    <img src="/img/klim.jpg" alt="55" />
                </div>
                <div className="w3-twothird w3-container">
                    <h3 className="bold-font">Mid/Senior Javascript Software Engineer (Berlin/Remote EU) @ VC-Backed Impact Startup</h3>
                    <h5>About the job</h5>
                    <p>
                        We are Klim, a Berlin-based impact startup on the mission to scale up carbon farming as
                        fast as possible across Europe and beyond. With an ambitious and mission-driven team,
                        strong VC-backing, and great B2B partnerships we are ready to grow. We believe that Carbon
                        Farming is the key to the future of agriculture and our planet.
                        Don’t believe us? Watch Kiss the Ground to change your mind.
                    </p>
                </div>
            </div>
            <div className="w3-row w3-margin">
                <div className="w3-third">
                    <img src="/img/klim.jpg" alt="55" />
                </div>
                <div className="w3-twothird w3-container">
                    <h3 className="bold-font">Senior Backend Developer (PHP/Node.js)</h3>
                    <h5>About the job</h5>
                    <p>
                        At ROMEO, you will be part of a platform that connects 3 million queer people around the world for Dates, Friends and Love. We are about 55 people from all over the world with big plan
                        We are looking for you as a Backend Developer to structure, modernize and maintain the Backend systems for the ROMEO platforms. You will be working in a team of 6 people. This full-time position is based in Berlin at erasys.
                    </p>
                </div>
            </div>
        </>
    )
}

export default JobsList;