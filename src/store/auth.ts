// modules
import { action, configure, makeObservable, observable } from "mobx";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
// config
import { auth } from "../config/firebase";

configure({ enforceActions: "never" });

class AuthStore {
  account = [];

  user: any = null;
  sessionUser = JSON.parse(sessionStorage.getItem("user"));

  constructor() {
    makeObservable(this, {
      account: observable,
      sessionUser: observable,
      user: observable,
      setAccount: action,
      setUser: action,
      login: action,
      registration: action,
      setSessionUser: action,
      checkUser: action,
    });
  }
  setAccount = (user) => {
    this.account.push(user);
  };

  setUser = (user) => {
    this.user = user;
  };

  setSessionUser = (value) => {
    this.sessionUser = value;
  };

  login = (email, password, navigate, setError) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.setUser(user);
        this.setSessionUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  registration = (email, password, setSuccess, navigate, setError) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("user", JSON.stringify(user));
        this.setUser(user);
        this.setSessionUser(user);
        setSuccess("You successful registered!");
        setTimeout(() => navigate("/profile"), 1500);
      })
      .catch((error) => {
        console.warn(error.code, error.massage);
        setError(error.massage);
      });
  };

  checkUser = async () => {
    if (this.sessionUser) {
      this.setUser(this.sessionUser);
    } else {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth,
          (user) => {
            resolve(user);
          },
          reject
        );
      });
      if (this.user || this.sessionUser) {
        sessionStorage.setItem("user", JSON.stringify(user));
        this.setUser(user);
      } else {
        this.setUser(null);
      }
    }
  };
}
export default new AuthStore();
