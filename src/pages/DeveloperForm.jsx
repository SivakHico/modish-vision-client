import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const DeveloperForm = () => {
    const { user, setUser } = useContext(AppContext)

    function handleSubmit() {
        console.log('developer from')
    }

    return (
        <form className="w3-container" onSubmit={handleSubmit}>
            <div className="w3-section">
                <input className="w3-radio w3-margin-bottom" type="radio" name="gender" value="miss" required />
                <label>Miss</label>
                <input className="w3-radio w3-margin-bottom" type="radio" name="gender" value="mister" required />
                <label>Mister</label>
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Email" name="email" defaultValue={user.email} required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Specialist" name="specialist" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="How many years experience do you have!?" name="experience" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="First Name" name="firstname" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Last Name" name="lastname" required />
                <label htmlFor="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" />
                <input type="tel" id="phone" name="phone" placeholder="Phone Number Format +49 171 1234567" pattern="[0-9]{3}-[0-9]{7}" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Phone Number" name="phone" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Linkedin Profile" name="linkedin" />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="GitHub" name="github" />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Postcode" name="postcode" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="City" name="city" required />
                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Save</button>
            </div>
        </form>
    )
}

export default DeveloperForm;