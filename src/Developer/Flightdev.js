import React, { useState } from "react";
import "../styles/Flight.css";
import axios from "axios";
import '../styles/Flight.css';
import Layout from"../components/Layout";
// import { Link } from "react-router-dom";

function Flight() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [name,setname] = useState("");
    // const [flights, setFlights] = useState([]);

    const submit = async (event) => {
        event.preventDefault();
        const data = { from, to, date , name };
        console.log(data);

        let url = "http://localhost:4000/flight/flights/createFlight";
        try {
            const res = await axios.post(url, data);
            if (res.status === 201) { 
                alert("Flight created successfully");
            } else {
                console.log("Error in flight creation");
            }
        } catch (error) {
            console.log("Error creating flight:", error.message);
        }
    };

    return (
        <Layout>
            <div id="flight-bkg">
            <h1>Hey, this is the flights page</h1>
            <div id="flight-f1">
                <form onSubmit={submit}>
                    <h2>Enter your flight details to create</h2>
                    <input type="text" placeholder="From" onChange={(e) => setFrom(e.target.value)} />
                    <input type="text" placeholder="To" onChange={(e) => setTo(e.target.value)} />
                    <input type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
                    <input type="text" placeholder="name" onChange={(e) => setname(e.target.value)} />
                    <br/>
                    <input type="submit" value="Create Flight" />
                </form>
                
            </div>
            </div>
            </Layout>
    );
}
export default Flight;