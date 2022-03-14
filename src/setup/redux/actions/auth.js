import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "setup/redux/configFirebase";
import { login } from "setup/redux/reducers/authReducer.js";
//Mini-Config Auth-Provider de Firabase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login({ uid: 5345345, displayName: "Alejandro" }));
    }, 3000);
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        console.log(user);
        dispatch(login({ uid: user["uid"], displayName: user["displayName"] }));
      })
      .catch((error) => console.log(error));
  };
};

export const startLoginGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider).then(({ user }) => {
      console.log(user);
      dispatch(login({ uid: user["uid"], displayName: user["displayName"] }));
    });
  };
};
