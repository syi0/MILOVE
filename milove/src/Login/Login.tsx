import './Login.css'
import Logo from '../!images/LOGO.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password);
    };
    return (
        <div className='Login'>
            <form action="">
                <img src={Logo} alt="LOGO" /> <br />
                <label htmlFor="email">Username: </label><br /><input type="email" name="email" id="email" placeholder='name@domain.com' onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <label htmlFor="password">Password: </label><br /><input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                <button onClick={handleLogin}>Log in</button> <br />
                <p>You don't have an account? <a href="/register"><b>Register!</b></a></p> <br />
                <a href="/"><b><i className="fa-solid fa-arrow-left"></i> Home</b></a>
            </form>
        </div>
    );
}