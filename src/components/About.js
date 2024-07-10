import React from "react";
import Layout from "./Layout";

function About(){
    return(
        <div>
        <Layout>
           <h3 style={{textAlign:"center"}}>SMYL Bookings</h3>
           <p style={{textAlign:"center"}}>All your bookings at One go...</p>
           <h5>About</h5>
           <p>  Launced in 2024, SMYL Bookings is a Booking website which allows you to book flight tickets, hotel tickets.</p>
           <p>By investing in the technology that helps take the friction out of travel, SMYL Booking.seamlessly connects millions of travellers with memorable experiences, a range of transport options and incredible places to stay - from homes to hotels and much more. As one of the worlds largest travel marketplaces for both established brands and entrepreneurs of all sizes, Booking.com enables properties all over the world to reach a global audience and grow their businesses.</p>
           <p>SMYL Booking is available in only one language and offers more than 28 million total reported accommodation listings, including over 6.6 million listings alone of homes, apartments and other unique places to stay during tourists tours and travels. No matter where you want to go or what you want to do, SMYL Booking makes it easy and backs it all up with 24/7 customer support.</p>
           <hr></hr>
            <h5>Customer Care</h5>
            <p>If your have any queries regarding bookings or want to seek out any information feel free to contact us</p>
            <p>Mobile:+91 9876543210</p>
            <p>E-mail:smylbookings@gmail.com</p>
            <hr></hr>
            <h5>Rate us</h5>
            <button onclick={function(){prompt("Enter a rating out of 5")}}>Leave a Rating</button>
            <hr></hr>
            <h5>Our Social Platforms</h5>
            <p>Twitter:smylbookings.twitter.com</p>
            <p>LinkedIn:Smylbookings</p>
            <br></br>
            <br></br>
            <br></br>
        </Layout>
        </div>
    )
}

export default About;