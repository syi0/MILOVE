import { useEffect, useState } from 'react';
import './SearchBar.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [user,setUser]=useState(null);
  const [userdata,setUserdata] = useState(null);
  const [age,setAge] = useState(null);
  const [disp,setDisp] = useState(null);
  const [imgdisp,setImgDisp] = useState(null);
  const [desc,setDesc] = useState(null);
  const [img,setImg]=useState(null);
  const navigate=useNavigate();
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
    function search(e) {
      if(e.code=="Enter") {
        e.target.value
        try {
   
          userdata.forEach(element => {
            if(element.displayName==e.target.value) {
              console.log(element.id);
              navigate("/profile?uid="+element.id);
            }
          });} catch {
            return;
          }
      }

    }
  return (
    <div className='serchbar_window'>
      
            <input type="text" name="searchbar_input" id="searchbar_input" onKeyDown={search}/>
            <button type='button' className='searchbar_buton'><i className="fa-solid fa-magnifying-glass"></i></button>
       
    </div>
  )
}
