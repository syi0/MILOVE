import './App.css'
import Body from './MainBody/MainBody'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./Features/userSlice";
import Authenticator from "./Login/Authentication.tsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <Body /> : <Authenticator />}</>
      )}
    </div>
  );
}

export default App
