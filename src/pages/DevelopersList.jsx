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

  function handelPayment(e) {
    e.preventDefault()
    fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 1 },
        ]
      })
    })
      .then(async (res) => {
        if (res.ok) return res.json()
        const json = await res.json()
        return await Promise.reject(json)
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch((e) => {
        console.error(e.error)
      })
  }

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
            <form className="w3-container" onSubmit={handelPayment}>
              <h3>Good choice!</h3>
              <div className="w3-section">
                <p>For a small one-off fee, you can then contact the Developers of your choice directly.</p>
                <p><b>Monthly 20.00 Euro</b></p>
                <p>Subscription can be canceled at any time.</p>
                {!user.paidAccount && user.type === "company" ? "" : <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Pay</button>}
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
              <li key={i} className="w3-bar">
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