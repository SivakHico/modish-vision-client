import React, { useState, useEffect } from 'react'

export default function Home() {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("https://link-them-api.onrender.com/api/v1/products")
            .then(response => response.json())
            .then(result => setproducts(result.productList))
    }, [])

    return (
        <>
            <div className="home w3-container">
                <h1>Looking For a reliable Developer !?</h1>
                <h1>Looking For New Position !?</h1>
            </div>
            <div>
                <div><button class="w3-btn w3-border w3-xlarge">find a Job offers</button></div>
                <div><button class="w3-btn w3-border w3-xlarge">find a Developer</button></div>
            </div>
        </>
    )
}