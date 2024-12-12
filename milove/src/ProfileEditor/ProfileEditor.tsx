import { doc, setDoc } from 'firebase/firestore';
import './ProfileEditor.css'
import { db } from '../firebase';
import { useRef } from 'react';

export default function ProfileEditor(props) {
  const username=useRef(null);
  const age=useRef(null);
  const desc=useRef(null);

  function save() {
    console.log(desc.current.value);
    console.log(age.current.value);
    console.log(username.current.value);
 
  props.datapss({age: age.current.value,desc:desc.current.value,disp: username.current.value});
}
  return (
    <div style={{visibility: props.vis ? "visible" : "hidden"}}>
        <label htmlFor="username">Username: </label><input ref={username} defaultValue={props.disp} type="text" name="username" id="username" /><br />
        <label htmlFor="age">Age: </label><input ref={age} defaultValue={props.age} type="number" name="age" id="age" /><br />
        <label htmlFor="descritption">Description: </label><textarea ref={desc} defaultValue={props.desc} name="description" id="description"></textarea><br />
        <button onClick={save} type='button'>Save</button>
    </div>
  );
}

