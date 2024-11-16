import './continueWithGoogle.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase'
import {toast} from 'react-toastify'

export default function continueWithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async(result)=>{
      console.log(result);
      if(result.user) {
        toast.success("User logged successfully", {
          position: "top-center",
        })
        window.location.href = "/social"
      }
    })
  }

  return (
    <div onClick={googleLogin}>
        <button><i className="fa-brands fa-google"></i></button>
    </div>
  );
}