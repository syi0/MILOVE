import { useSelector } from 'react-redux';
import './Homepage.css'
import SideNav from './SideNav';
import SidenavSmall from './SideNavSmall';
import TimeLine from './TimeLine';
import { browserSessionPersistence, onAuthStateChanged, setPersistence, User,} from "firebase/auth";
import { auth, db } from "../firebase";
import { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
export default function Homepage() {
    const [user, setUser] = useState(null);
    const [userdata,setUserdata] = useState(null);
   /* useEffect( () => {  
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
            if(element.uid==user.uid) {
                console.log(element.age);
            }
          });} catch {
            return;
          }
        }
          ,[userdata,user]);*/
 useEffect(() => {
    async function test() {
        
   
    await onAuthStateChanged(auth, (userr) => {
     
        if (userr != null) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
           setUser(userr);
        
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
    }
    test();
   console.log("user");
   
});

    return(
        <div className='homepage'>
            <SidenavSmall/>
            <div className='homepage_nav'><SideNav/></div>
            <div className="homepage_timeline"><TimeLine/></div>
        </div>
    );
}
