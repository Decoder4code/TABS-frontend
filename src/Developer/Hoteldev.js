import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/Hotels.css";

function Hotels() {
    const [city, setCity] = useState("");
    const [hotelName, setHotelName] = useState("");
    // const [hotels, setHotels] = useState([]);


    const addHotel = async (event) => {
        event.preventDefault();
        const data = { name: hotelName, city };
        console.log(data);

        let url = "http://localhost:4000/hotel/hotels/addHotel";
        try {
            const res = await axios.post(url, data);
            if (res.status === 201) {
                alert("Hotel added successfully");
            } else {
                console.log("Error in hotel addition");
            }
        } catch (error) {
            console.log("Error adding hotel:", error.message);
        }
    };


    return (
        <Layout>
            <div id="hot-bkg">
            <div id="hot-f2">

<form onSubmit={addHotel}>
    <h2>Add Hotel</h2>
    <input
        type="text"
        placeholder="Hotel name"
        onChange={(e) => setHotelName(e.target.value)}
    />
    <input
        type="text"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
    />
    <input type="submit" value="Add" />
</form>
</div>
</div>
        </Layout>
    );
}

export default Hotels;