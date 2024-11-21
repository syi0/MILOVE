import { useEffect, useState } from 'react';
import './Profile.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";
export default function Profile() {
    const [user,setUser]=useState(null);
    const [userdata,setUserdata] = useState(null);
    const [age,setAge] = useState(null);
    const [desc,setDesc] = useState(null);
    const [img,setImg]=useState(null);
    const storage = getStorage();
  /*  function handleChange(e) {
        console.log(e.target.files);
        setImg(URL.createObjectURL(e.target.files[0]));
    
        const storageRef = ref(storage, user.uid);

        uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });
    }*/
   function ageChange(e){

    if(e.code=="Enter") {
        console.log(e.target.value);
        setDoc(doc(db, "userdata",user.uid), {   
            age: e.target.value,
            desc: desc
          });
    }
   }
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
              // User is signed out
              // ...
            }
          });
          
        }
        test();

       
    });
    console.log(user);
    if(user!=null) {
    return(
        <div className='profile'>
            <div className="profile_data">
                <div className='profile_icon'>{user.photoURL==null ? "brak zdjecia" : <img src={user.photoURL}></img>} <input type="file" /></div>
                <div className="profile_info">{user.displayName} + {age==null ? <input onKeyDownCapture={ageChange}></input> : age}. If age is null, you need to click button to enter that shit</div>
                <div className="profile_description">{desc==null ? "brak opisu" : desc}Description of the profile, user must say anything about yourself</div>
                <div className="profile_message_button">Button that user must click to chat with that person</div>
                <div className="profile_posts">Post that user posted</div>
            </div>
        </div>
    );
}
}

