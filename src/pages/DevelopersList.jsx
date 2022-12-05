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
            </div>
          </div>
        </div>
      }
      {
        developers.map((dev, i) => (
          <div onClick={() => handelContact(i)} className="w3-row dev-click">
            <ul className="w3-ul w3-card-4">
              <li className="w3-bar">
                <img src={dev.image} className="w3-bar-item w3-circle w3-hide-small" />
                <div className="w3-bar-item">
                  <span className="w3-large upper"><h2>{dev.firstname} {dev.lastname}</h2></span>
                  <span className="capitz"><h4><b>{dev.specialist}</b><small> Has {dev.experience} Years Experience living in {dev.city}</small></h4></span>
                </div>
              </li>
            </ul>
          </div>
        ))}
    </>
  )
}

export default DevelopersList;