const DeveloperForm = () => {
    return (
        <form className="w3-container" action="/action_page.php">
            <div className="w3-section">
                <input className="w3-radio w3-margin-bottom" type="radio" name="gender" value="miss" />
                <label>Miss</label>
                <input className="w3-radio w3-margin-bottom" type="radio" name="gender" value="mister" />
                <label>Mister</label>
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Specialist" name="specialist" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="How many years experience do you have!?" name="experience" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="First Name" name="firstname" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Last Name" name="lastname" required />
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Postcode" name="postcode" required />
                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="City" name="city" required />
                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Save</button>
            </div>
        </form>
    )
}

export default DeveloperForm;