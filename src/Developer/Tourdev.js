import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/Tour.css";


function Tour() {
    const [tourName, setTourName] = useState("");
    const [place, setPlace] = useState("");
    // const [searchTour, setSearchTour] = useState("");
    // const [tours, setTours] = useState([]);

    const addTour = async (event) => {
        event.preventDefault();
        const data = { tourName, place };
        let url = "http://localhost:4000/tour/tours/addTour";
        try {
            const res = await axios.post(url, data);
            if (res.status === 201) {
                alert("Tour added successfully");
            } else {
                console.log("Error in tour addition");
            }
        } catch (error) {
            console.log("Error adding tour:", error.message);
        }
    };

    return (
        <Layout>
            <div id="tour-bkg">
            <div id="tour-f1">
            <form onSubmit={addTour}>
                <h2>Add Tour</h2>
                <input
                    type="text"
                    placeholder="Tour type"
                    onChange={(e) => setTourName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Place"
                    onChange={(e) => setPlace(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
            </div>
        </Layout>
    );
}

export default Tour;