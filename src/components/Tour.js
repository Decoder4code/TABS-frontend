import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import "../styles/Tour.css";


function Tour() {
    // const [tourName, setTourName] = useState("");
    // const [place, setPlace] = useState("");
    const [searchTour, setSearchTour] = useState("");
    const [tours, setTours] = useState([]);

    const searchTours = async (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams({ tourName: searchTour }).toString();
        const url = `http://localhost:4000/tour/tours/getTour?${queryParams}`;
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                setTours(res.data.tours);
                console.log("Tours found:", res.data.tours);
            } else {
                console.log("No tours found");
            }
        } catch (error) {
            console.log("Error fetching tours:", error.message);
        }
    };

    return (
        <Layout>
            <div id="tour-bkg">
                <h2>Tour and Travel Bookings</h2>

            <div id="tour-f2">
            <form onSubmit={searchTours}>
                <h2>Search Tours</h2>
                <input
                    type="text"
                    placeholder="Tour name"
                    onChange={(e) => setSearchTour(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {tours.length > 0 && (
                <div>
                    <h2>Tour Results</h2>
                    <ul>
                        {tours.map((tour, index) => (
                            <li key={index}>{`Name: ${tour.name}, Places: ${tour.places.join(', ')}`}</li>
                        ))}
                        <Link to="/Book">click here to book hotel</Link>

                    </ul>
                </div>
            )}
        </div>
        <br></br>
        </div>
        </Layout>
    );
}

export default Tour;