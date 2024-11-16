import './Login.css'
import Logo from '../!images/LOGO.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import CWG from "../ContinueWith/continueWithGoogle"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
      };
    
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password);
    };
    return (
        <div className='Login'>
            <form method='post' onSubmit={onSubmit}>
                <img src={Logo} alt="LOGO" /> <br />
                <label htmlFor="email">Email: </label><br /><input type="email" name="email" id="email" placeholder='name@domain.com' onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <label htmlFor="password">Password: </label><br /><input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                <button onClick={handleLogin}>Log in</button> <br /> <br />
                <CWG />
            </form>
        </div>
    );
}