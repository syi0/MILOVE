import { doc, setDoc } from 'firebase/firestore';
import './ProfileEditor.css'
import { db } from '../firebase';

export default function ProfileEditor(props) {
  function save() {
  setDoc(doc(db, "userdata",props.uid), {   
    age: props.age,
    desc: props.desc,
    img: props.img,
    displayName: props.disp
  });
}
  return (
    <div style={{visibility: props.vis ? "visible" : "hidden"}}>
        <label htmlFor="username">Username: </label><input value={props.disp} type="text" name="username" id="username" /><br />
        <label htmlFor="age">Age: </label><input value={props.age} type="number" name="age" id="age" /><br />
        <label htmlFor="name_and_surname">Name and Surname: </label><input type="text" name="name_and_surname" id="name_and_surname" /> <br />
        <label htmlFor="descritption">Description: </label><textarea value={props.desc} name="description" id="description"></textarea><br />
        <button onClick={save} type='button'>Save</button>
    </div>
  );
}

