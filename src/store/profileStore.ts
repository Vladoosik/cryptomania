// modules
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, EmailAuthProvider, storage } from "../config/firebase";
import { action, configure, makeAutoObservable, observable } from "mobx";
import {
  reauthenticateWithCredential,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
// store
import AuthStore from "./auth";

configure({ enforceActions: "never" });

class ProfileStore {
  newPass: string = "";
  currentPass: string = "";
  confirmPass: string = "";
  loadingImage: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      newPass: observable,
      currentPass: observable,
      confirmPass: observable,
      loadingImage: observable,
      fileChange: action,
      changePassword: action,
      setNewPass: action,
      setCurrentPass: action,
      setConfirmPass: action,
      logout: action,
    });
  }

  setNewPass = (value: string) => {
    this.newPass = value;
  };
  setCurrentPass = (value: string) => {
    this.currentPass = value;
  };
  setConfirmPass = (value: string) => {
    this.confirmPass = value;
  };

  fileChange = (event, setUser) => {
    this.loadingImage = true;
    let file = event.target?.files[0];
    const storageRef = ref(storage, "avatars/" + file?.name);

    uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("URL файла:", downloadURL);
          updateProfile(auth.currentUser, { photoURL: downloadURL })
            .then(() => {
              if (file) {
                const updatedUser = {
                  ...AuthStore.user,
                  photoURL: downloadURL,
                };
                setUser(updatedUser);
                sessionStorage.setItem("user", JSON.stringify(updatedUser));
              }
              file = null;
            })
            .catch((error) => {
              console.log("Ошибка изменения профиля", error);
            });
        });
      })
      .finally(() => (this.loadingImage = false))
      .catch((error) => {
        console.log("Ошибка загрузки фото", error);
      });
  };

  changePassword = (setPassChanged, setCurrentPassError, setMatchPass) => {
    const user = auth.currentUser;

    const credential = EmailAuthProvider.credential(
      user.email,
      this.currentPass
    );
    if (this.newPass === this.confirmPass) {
      reauthenticateWithCredential(user, credential)
        .then(() => {
          updatePassword(user, this.newPass)
            .then(() => {
              setPassChanged(true);
              this.currentPass = "";
              this.newPass = "";
              this.confirmPass = "";
            })
            .catch((error) => {
              console.log("Error change password", error);
            });
        })
        .catch((error) => {
          setCurrentPassError(true);
          console.log("error sign in:", error);
        });
    } else {
      setMatchPass(false);
    }
  };

  logout = (navigate: (path: string) => void) => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
        AuthStore.setUser(null);
        AuthStore.setSessionUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log("error logout", error);
      });
  };
}

export default new ProfileStore();
