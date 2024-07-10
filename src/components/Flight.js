import React, { useState } from "react";
import "../styles/Flight.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from"./Layout";

function Flight() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [flights, setFlights] = useState([]);

    const searchFlights = async (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams({ from, to, date }).toString();
        const url = `http://localhost:4000/flight/flights/getFlights?${queryParams}`;

        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                setFlights(res.data.flights);
                console.log("Flights found:", res.data.flights);
            } else {
                console.log("No flights found");
            }
        } catch (error) {
            console.log("Error fetching flights:", error.message);
        }
    };

    return (
        <Layout>
            <div id="flight-bkg">
            <h1>Hey, this is the flights page</h1>
                <div id="flight-f2">
                <form onSubmit={searchFlights}>
                    <h2>Search for flights</h2>
                    <input type="text" placeholder="From" onChange={(e) => setFrom(e.target.value)} />
                    <input type="text" placeholder="To" onChange={(e) => setTo(e.target.value)} />
                    <input type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} /><br/>
                    <input type="submit" value="Search Flights" />
                </form>
                {flights.length > 0 && (
                    <div>
                        <h2>Flight Results</h2>
                        <ul>
                            {flights.map((flight, index) => (
                                <li key={index}>{`From: ${flight.from}, To: ${flight.to}, Date: ${flight.date} ,name:${flight.name}`}</li>
                            ))}
                            <li><Link to="/Book">click here to book tickets</Link></li>
                        </ul>
                    </div>
                )}
            </div>
            <br></br><br></br><br></br>
        </div>
        
        </Layout>
    );
}
export default Flight;