import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layouts.css";
import Layout from"../components/Layout";
function Layoutsdev(){
    return(
        <Layout>
            <div id="backimg">
            <h2> This is developer Layout</h2>
            <div className="f2">
            
            
            
            <div className="flight bookcard">
            <Link to="/Flightdev" className="f1"><button>Add Flight Details</button></Link><br/>
            </div>

            <div className="hotel bookcard">
            <Link to="/Hoteldev" className="f1"><button>Add Hotel Details</button></Link><br/>
            </div>

            <div className="tour bookcard">
            <Link to="/Tourdev" className="f1"><button>Add Tour Details</button></Link><br/>
            </div>
            
            <div className="test bookcard">
            <Link to="/Layouts" className="f1"><button>Testing</button></Link>
            </div>
            </div>
            <br></br><br></br><br></br>
            </div>
            
        </Layout>
    )
}
export default Layoutsdev;