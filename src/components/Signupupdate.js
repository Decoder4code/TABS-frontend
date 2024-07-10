import React, { useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import "../styles/Signupmodify.css";

function Signupupdate() {
    const [userid, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateUser = async (event) => {
        event.preventDefault();
        const data = { email, password };
        console.log(data);
        let url = "https://tabs-backend-1.onrender.com/users/updateUser/${userid}";
        try {
            const res = await axios.put(url, data); 
            if (res.status === 200) {
                alert("User updated successfully");
            } else {
                console.log("Error in user update");
            }
        } catch (error) {
            console.log("Error updating user:", error.message);
            console.log(error)
        }
    };

    return (
       <Layout>
         <div id="mod-f1">
            <h2 style={{textAlign:"center"}}>Update User</h2>
            <div id="mod-f2">
            <form onSubmit={updateUser}>
                <input
                    type="text"
                    placeholder="Enter user ID to update"
                    value={userid}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter new email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Update User</button>
            </form>
            </div>
        </div>
       </Layout>
    );
}

export default Signupupdate;