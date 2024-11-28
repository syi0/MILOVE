import React, { useEffect, useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut, } from "firebase/auth";
import { logoutUser } from "../Features/userSlice";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import MiloveLogo from "../!images/LOGO.png"
import SearchPopup from "../SearchPopup/SearchPopup";
import { collection, getDocs } from "firebase/firestore";

export default function Sidenav() {
  const navigate=useNavigate();
  const [user, setUser] = useState(0);
  const [userdata,setUserdata] = useState(null);
  const [age,setAge] = useState(null);
  const [desc,setDesc] = useState(null);
  const [img,setImg]=useState(null);
  useEffect( () => {  
    async function docs() {
     await getDocs(collection(db, "userdata"))
     .then((querySnapshot)=>{               
         const newData = querySnapshot.docs
             .map((doc) => ({...doc.data(), id:doc.id }));
         //setTodos(newData);                
        setUserdata(newData);
       
     });
    }
    docs();
   },[]);

    useEffect( () => {  
        
       try {
      
         userdata.forEach(element => {
           if(element.id==user.uid) {
               setAge(element.age);
               setDesc(element.desc);
               setImg(element.img);
           }
         });} catch {
           return;
         }
       }
         ,[userdata,user]);
  useEffect(() => {
     async function test() {
         
    
     await onAuthStateChanged(auth, (userr) => {
      
         if (userr != null) {
           // User is signed in, see docs for a list of available properties
           // https://firebase.google.com/docs/reference/js/auth.user
            setUser(userr);
         
           // ...
         } else {
           navigate("/auth");
         }
       });
       
     }
     test();

    
 });
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src={MiloveLogo}
        alt="Instagram Logo"
      />

      <div className="sidenav__buttons">
        <a href="/">
          <button className="sidenav__button">
            <HomeIcon />
            <span>Home</span>
          </button>
        </a>
        <SearchPopup></SearchPopup>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create post!</span>
        </button>
        <button className="sidenav__button">
          <div onClick={
            () => {
            
              navigate("/profile");
            }
          }>
<Avatar>
  {user.displayName ? user.displayName.charAt(0).toUpperCase() : "A"}
  <img src={img} height="100px" width="100px" alt="" />
</Avatar>

</div>
<span>
  {user.displayName}{" "}
  <button onClick={handelLogout} className="logout__button">
    Logout
  </button>
</span>
</button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}
