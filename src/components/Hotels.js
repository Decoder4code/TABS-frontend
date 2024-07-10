import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import "../styles/Hotels.css";

function Hotels() {
    const [city, setCity] = useState("");
    const [hotels, setHotels] = useState([]);

    const searchHotels = async (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams({ city }).toString();
        const url = `https://tabs-backend-1.onrender.com/hotel/hotels/getHotels?${queryParams}`;

        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                setHotels(res.data.hotels);
                console.log("Hotels found:", res.data.hotels);
            } else {
                console.log("No hotels found");
            }
        } catch (error) {
            console.log("Error fetching hotels:", error.message);
        }
    };

    return (
        <Layout>
           <div id="hot-bkg">
           
            <h1>Hey, this is the hotels page</h1>
            <div id="hot-f1">
            <form onSubmit={searchHotels}>
                <h2>Search Hotels</h2>
                <input
                    type="text"
                    placeholder="Enter city"
                    onChange={(e) => setCity(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
            
            {hotels.length > 0 && (
                <div>
                    <h2>Hotel Results</h2>
                    <ul>
                        {hotels.map((hotel, index) => (
                            <li key={index}>{`Name: ${hotel.name}, City: ${hotel.city}`}</li>
                        ))}
                        <Link to="/Book">click here to book hotel</Link>
                    </ul>
                </div>
            )}
            </div>
            
        <br></br><br></br><br></br>
           </div>
        </Layout>
    );
}

export default Hotels;