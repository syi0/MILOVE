import { useSelector } from 'react-redux';
import './Homepage.css'
import SideNav from './SideNav';
import TimeLine from './TimeLine';
import { browserSessionPersistence, onAuthStateChanged, setPersistence, User,} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from 'react';
export default function Homepage() {
    const [user, setUser] = useState(null);
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
    console.log(user);
   
});

    return(
        <div className='homepage'>
            <div className='homepage_nav'><SideNav/></div>
            <div className="homepage_timeline"><TimeLine/></div>

            
            <a href="/">Home</a>
        </div>
    );
}
