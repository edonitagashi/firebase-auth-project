import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5KuxoWo-v9_p8XPtKXa4bW3II6sRoy_M",
  authDomain: "authbonusproject.firebaseapp.com",
  projectId: "authbonusproject",
  storageBucket: "authbonusproject.appspot.com",
  messagingSenderId: "262923602114",
  appId: "1:262923602114:web:6a6ec7e8252822bdf4135b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
