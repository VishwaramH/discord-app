import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ",authUser);
      if(authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            photo: authUser.photoURL,
            displayName: authUser.displayName
          })
        );
      } else {

      }
    });
  }, [dispatch]);
  return (
    // BEM naming convention
    <div className="app">
      {user ? (
        <div>
          <Sidebar />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
