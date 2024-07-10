import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import "../styles/Home.css";

function Home(){
    return(
        <div>
            <Layout>
            <div className="bg">
            <h2 style={{textAlign:"center"}}>Flight Booking, Hotels & Tours at One Go...</h2>
            <div className="home-center">
            <p>if you are a new user</p>
            <Link to="/Signup" style={{color:"black"}}>click here</Link>
            <p>if you are a existing user</p>
            <Link to="/Login" style={{color:"black"}}>click here</Link>
            </div>
            </div>
            </Layout>
        </div>
    )
}

export default Home;