// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Layout from "./Layout";
// import "../styles/Login.css";
// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate(); 

//     const submit = async (event) => {
//         event.preventDefault();
//         const data = { email, password };
//         try {
//             const res = await axios.post("http://localhost:4000/users/loginuser", data);
//             if (res.status === 200) {
//                 navigate("/layouts"); 
//             } else {
//                 alert("Invalid credentials");
//             }
//         } catch (error) {
//             console.log("Error logging in:", error.message);
//             alert("Error logging in");
//         }
//     };

//     return (
//       <Layout>
//           <div id="login-outer">
//             <div id="login-bkg">
//             <form onSubmit={submit}>
//                 <input
//                     type="email"
//                     placeholder="Enter email"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Enter password"
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//             </div>
//         </div>
//       </Layout>
//     );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (event) => {
        event.preventDefault();
        const data = { email, password };
        try {
            const res = await axios.post("http://localhost:4000/users/loginuser", data);
            if (res.status === 200) {
                const specialUsers = [
                    { email: "1931@gmail.com", password: "12345" },
                    { email: "1777@gmail.com", password: "12345" },
                    { email: "5049@gmail.com", password: "5049" }
                ];

                const isSpecialUser = specialUsers.some(
                    user =>
                        user.email === email &&
                        user.password === password
                );

                if (isSpecialUser) {
                    navigate("/Layoutsdev");
                } else {
                    navigate("/Layouts");
                }

            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.log("Error logging in:", error.message);
            alert("Error logging in");
        }
    };

    return (
        <Layout>
            <div id="login-outer">
                <div id="login-bkg">
            <form onSubmit={submit}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            </div>

        </div>
        </Layout>
    );
}

export default Login;