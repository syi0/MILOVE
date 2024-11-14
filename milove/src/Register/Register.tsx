import './Register.css'
import Logo from '../!images/LOGO.png'
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((authUser) => {
            signInWithEmailAndPassword(auth, email, password).then(
              updateProfile(auth.currentUser, {
                displayName: username,
              })
            );
          })
          .catch((err) => {
            alert(err);
        });
      };
    return (
        <div>
            <form action="" className='Register'>
                <img src={Logo} alt="LOGO" /> <br />
                <label htmlFor="username">Username: </label><br /><input type="text" name="username" id="username" placeholder='Nickname' value={username} onChange={(e) => setUsername(e.target.value)}/> <br /> <br />
                <label htmlFor="email">Email: </label><br /><input type="email" name="email" id="email" placeholder='name@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} /><br /> <br />
                <label htmlFor="password">Password: </label><br /><input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br /> <br />
                <button onClick={handleSignUp}>Sign up</button> <br />
                <p>You have account? <a href="/login"><b>Login!</b></a></p> <br />
                <a href="/"><b><i className="fa-solid fa-arrow-left"></i> Home</b></a>
            </form>
        </div>
    );
}