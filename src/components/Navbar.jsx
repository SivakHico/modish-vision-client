import React, { useState, useEffect } from 'react'

export default function Navbar() {
  

    return (
        <div className="w3-bar w3-light-grey w3-border">
            <a href="#" className="w3-bar-item w3-button w3-mobile">Home</a>
            <a href="#" className="w3-bar-item w3-button w3-mobile">Login</a>
            <a href="#" className="w3-bar-item w3-button w3-mobile">Sign up</a>
            <input type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder="Search.." />
            <button className="w3-bar-item w3-button w3-green w3-mobile">Go</button>
            <a href="#" className="w3-bar-item w3-button w3-mobile">mOdish visiOn</a>
        </div>
    )
}