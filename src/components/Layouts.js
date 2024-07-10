import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layouts.css";
import Layout from"./Layout";
// import flimg from "./fligh3.jpeg"
// import hoimg from "./hotel1.jpg"
// import tourimg from "./tour1.jpg"
function Layouts(){
    return(
             <Layout>
                <div id="backimg">
            {/* <div className="signup">
                <Link to="/Signup" className="f1">signup</Link>
            </div> */}
            <div className="f2">
                <div className="flight bookcard">
                    <Link to="/Flight" className="f1">flight</Link>
                </div>
                <div className="hotel bookcard">
                    <Link to="/Hotels" className="f1">hotel</Link>
                </div>
                <div className="tour bookcard">
                    <Link to="/Tour" className="f1">tour</Link>
                </div>
            </div>
    
        <div className="modify">
        <Link to="/Signupupdate" className="mod">update account</Link><br/>
        <Link to="/Signupdelete" className="mod">delete account</Link>
        </div>
        <br></br><br></br><br></br>
        </div>

        </Layout>
    )
}

export default Layouts;