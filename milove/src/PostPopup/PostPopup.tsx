import { addDoc, collection } from 'firebase/firestore';
import './PostPopup.css'
import { db } from '../firebase';
import { useState } from 'react';

export default function PostPopup({vis,uid}) {
  const [img,setImg]=useState(null);
function  uplBase64(file) {
  file=file.target.files[0];
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        console.log(baseURL);
        //resolve(baseURL);
        setImg(baseURL);
       
 
        
      }
  });
}
  function post() {
    const today = new Date();
    console.log(img);
    addDoc(collection(db, "posts"), {
      user: uid,
      likes: 0,
      timestamp: today.toJSON(),
      postImg: img
    });
  }
  return (
    <div style={{visibility: vis ? "visible" : "hidden"}}>
        <input type="file" name="post_image" id="post_image" onChange={uplBase64}/>
        <button onClick={post} type="button">Create Post!</button>
    </div>
  )
}

