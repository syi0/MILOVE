import './Register.css'
import Logo from '../!images/LOGO.png'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase";
import CWG from "../ContinueWith/continueWithGoogle"
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();


    const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((authUser) => {
            signInWithEmailAndPassword(auth, email, password).then((authh)=> {
             console.log(authh.user.uid);
             
              console.log(auth.currentUser);
              updateProfile(auth.currentUser, {
                displayName: username,
                photoURL: "https://static.wikia.nocookie.net/silly-cat/images/7/78/Melon_Cat_Species_2.png",
              });
              /*setDoc(doc(db, "userdata",authh.user.uid), {   
                age: null,
                desc: "testt"
              });*/
          });
            navigate("/social");
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
                <button onClick={handleSignUp}>Sign up</button> <br /> <br />
                <CWG />
            </form>
        </div>
    );
}