import React from "react";
import { useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import "../styles/Signupmodify.css";

function Signupdelete(){
    const [userid,setid] = useState("");
    const deleteUser = async (event) => {
        event.preventDefault();
        let url = "https://tabs-backend-1.onrender.com/users/deleteUser/${userid}";

        try {
            const res = await axios.delete(url);
            if (res.status === 200) {
                alert("User deleted successfully");
            } else {
                console.log("Error in user deletion");
            }
        } catch (error) {
            console.log("Error deleting user:", error.message);
        }
    };
    return(
       <Layout>
         <div id="mod-f1">
            <h2 style={{textAlign:"center"}}>Delete User</h2>
            <div id="mod-f2">
            <form onSubmit={deleteUser}>
                <input
                    type="text"
                    placeholder="Enter user ID to delete"
                    value={userid}
                    onChange={(e) => setid(e.target.value)}
                />
                <button type="submit">Delete User</button>
            </form>
            </div>
        </div>
       </Layout>
        
    )
}

export default Signupdelete;