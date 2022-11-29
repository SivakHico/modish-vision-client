import { useState, useEffect, useReducer } from "react"
import axios from "axios"

const DevelopersList = () => {

  const [developers, setDevelopers] = useState([])
  const [selectedCandidateIndex, setSelectedCandidateIndex] = useState(-1)

  useEffect(() => {
    //iife
    (async () => {
      const res = await axios.get("http://localhost:3000/api/v1/developers");
      console.log(res)
      setDevelopers(res.data.developerList);
    })()
  }, []);

  function handelContact(index) {
    setSelectedCandidateIndex(index)
  }

  function closeModal() {
    setSelectedCandidateIndex(-1)
  }
  const user = { paidAccount: true, type: "company" }
  return (
    <>
      {selectedCandidateIndex > -1 &&
        <div id="login-modal">
          <div className="w3-modal-content w3-card-4 w3-animate-zoom max-w">
            <div className="w3-center"><br />
              <span onClick={closeModal} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
            </div>
            <form className="w3-container" onSubmit={handelContact}>
              <h4>{developers[selectedCandidateIndex].name}</h4>
              <div className="w3-section">
                {/* REMINDER: only show phone, email, linkedIn if user.paidAccount && user.type === "company" */}
                <p>{user.paidAccount && user.type === "company" ? developers[selectedCandidateIndex].phone : "Please pay for contact details"}</p>
                <p>{user.paidAccount && user.type === "company" ? developers[selectedCandidateIndex].email : "Please pay for contact details"}</p>
                <p>{user.paidAccount && user.type === "company" ? developers[selectedCandidateIndex].linkedIn : "Please pay for contact details"}</p>
                {!user.paidAccount && user.type === "company" ? "" : <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Contact {developers[selectedCandidateIndex].name} now for $5</button>}

              </div>
            </form>
            <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
              <button onClick={closeModal} type="button" className="w3-button w3-red">Cancel</button>
              <span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">Password?</a></span>
            </div>
          </div>
        </div>
      }
      {
        developers.map((dev, i) => (
          <div onClick={() => handelContact(i)} className="w3-row w3-margin">
            <div className="w3-third">
              <img src="" alt="55" />
            </div>
            <div className="w3-twothird w3-container">
              <h2>{dev.firstname}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        ))}
    </>
  )
}

export default DevelopersList;