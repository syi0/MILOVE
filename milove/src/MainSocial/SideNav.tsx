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
import PostPopup from "../PostPopup/PostPopup";
export default function Sidenav() {
  const navigate=useNavigate();
  const [user, setUser] = useState(0);
  const [userdata,setUserdata] = useState(null);
  const [age,setAge] = useState(null);
  const [desc,setDesc] = useState(null);
  const [vis,setVis] = useState(false);
  const [img,setImg]=useState(null);
  const [disp,setDisp]=useState(null);
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
               setDisp(element.displayName);
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
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button" onClick={()=>setVis(!vis)}>
          <AddCircleOutlineIcon />
          <span>Create post!</span>
        </button>
        <PostPopup uid={user.uid} vis={vis}/>
        <button className="sidenav__button">
          <div onClick={
            () => {
            
              navigate("/profile");
            }
          }>
<Avatar>
  {disp ? disp.charAt(0).toUpperCase() : "A"}
  <img src={img} height="100px" width="100px" alt="" />
</Avatar>

</div>
<span>
  {disp}{" "}
  <button onClick={handelLogout} className="logout__button">
    Logout
  </button>
</span>
</button>
      </div>
      
    </div>
  );
}
