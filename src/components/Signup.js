import React, { useState } from "react";
import "../styles/Signup.css";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Signup() {
    const [userid, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const submit = async (event) => {
        event.preventDefault();
        const inputobj = { userid, email, password };
        console.log(inputobj);

        let url = "https://tabs-backend-1.onrender.com/users/createUser";

        try {
            const res = await axios.post(url, inputobj);
            if (res.status === 201) { 
                alert("User created successfully");
                navigate("/layouts");
            } else {
                console.log("Error in user creation");
            }
        } catch (error) {
            console.log("Error creating user:", error.message);
        }
    };

    return (
        <Layout>
            <div className="outer">
            <h1 style={{textAlign:"center",marginBottom:"4rem"}}>User Management</h1>

            <div className="bkg">
            <h2 style={{textAlign:"center",}}>Create User</h2>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Enter user id"
                    value={userid}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Create User</button>
            </form>
            </div>
            {/* <Link to="/Layouts" className="link">Book here</Link> */}
        </div>
        </Layout>
    );
}

export default Signup;