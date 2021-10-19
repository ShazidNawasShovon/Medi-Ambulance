import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";
import { useHistory, useLocation } from "react-router";

// call back  InitializeFirebase
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // const googleProvider = new GoogleAuthProvider();
  // const signUsingGoogle = () => {
  //   return signInWithPopup(auth, googleProvider);
  // };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
    });
  }, [auth]);

  // Login Or Sign Up Using Email & Pass

  const handlePassword = (event) => {
    setPass(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // Registration Section

  const handleRegister = (event) => {
    event.preventDefault();
    if (pass.length < 6) {
      setError("Password Must be 6 character long");
      return;
    }
    registerNewUser(email, pass);
  };
  const handleLogin = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const registerNewUser = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        setUserName();
        setError("");

        console.log(user);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
    console.log(email, pass);
  };
  // Now We can set User Name
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  // Reset PassWord

  // Verify Email

  // Reset Password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return {
    user,
    signInWithGoogle,
    logOut,
    handlePassword,
    handleEmail,
    handleRegister,
    handleLogin,
    handleNameChange,
    handleResetPassword,
    setError,
    setUser,
    error,
    email,
    pass,
  };
};

export default useFirebase;
