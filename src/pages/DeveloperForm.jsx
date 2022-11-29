import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios"

const DeveloperForm = () => {
    const { user, setUser } = useContext(AppContext)
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState(null)
    const [specialist, setSpecialist] = useState(null)
    const [experience, setExperience] = useState(null)
    const [firstname, setFirstName] = useState(null)
    const [lastname, setLastName] = useState(null)
    const [birthday, setBirthday] = useState(null)
    const [phone, setPhone] = useState(null)
    const [linkedin, setLinkedin] = useState(null)
    const [github, setGitHub] = useState(null)
    const [city, setCity] = useState(null)
    
    const handleDeveloperForm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/v1/developers", {gender, email, specialist, experience, firstname, lastname, birthday, phone, linkedin, github, city });
            console.log(res);
        } catch (err) {
            console.log('fucking error',err);
        }
    };

    return (
        <form className="w3-container" onSubmit={handleDeveloperForm}>
            <div className="w3-section">
                <input className="w3-radio w3-margin-bottom" onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="miss" required />
                <label>Miss</label>
                <input className="w3-radio w3-margin-bottom" onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="mister" required />
                <label>Mister</label>
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email" defaultValue={user.email} required />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setSpecialist(e.target.value)} type="text" placeholder="Specialist" name="specialist" required />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setExperience(e.target.value)} type="text" placeholder="How many years experience do you have!?" name="experience" required />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" name="firstname" required />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" name="lastname" required />
                <label htmlFor="birthday">Birthday</label>
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setBirthday(e.target.value)} type="date" id="birthday" name="birthday" />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" name="phone" placeholder="Phone Number Format +49 171 1234567" pattern="^\+\d+$" required />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setLinkedin(e.target.value)} type="text" placeholder="Linkedin Profile" name="linkedin" />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setGitHub(e.target.value)} type="text" placeholder="GitHub" name="github" />
                <input className="w3-input w3-border w3-margin-bottom" onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" name="city" required />
                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Save</button>
            </div>
        </form>
    )
}

export default DeveloperForm;