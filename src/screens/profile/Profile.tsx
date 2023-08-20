// modules
import React, { useState } from "react";
import { observer } from "mobx-react";
import styles from "./styles.module.css";
// components
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modal/Modal";
import ModalChildren from "./components/modalChildren";
import Button from "../../components/button";
// store
import AuthStore from "../../store/auth";
import ProfileStore from "../../store/profileStore";

const Profile = observer(({ navigate }) => {
  const { setUser } = AuthStore;
  const {
    fileChange,
    newPass,
    setNewPass,
    currentPass,
    setCurrentPass,
    setConfirmPass,
    changePassword,
    logout,
    loadingImage,
    confirmPass,
  } = ProfileStore;
  const [modal, setModal] = useState<boolean>(false);
  const [currentPassError, setCurrentPassError] = useState<boolean>(false);
  const [matchPass, setMatchPass] = useState<boolean>(true);
  const [passChanged, setPassChanged] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<number>(-1);

  const handleLogout = () => {
    logout(navigate);
  };

  const login = AuthStore?.user?.email.split("@").slice(0, 1).join("");

  const handleFileChange = (file) => {
    fileChange(file, setUser);
  };

  const handleChangePass = () => {
    changePassword(setPassChanged, setCurrentPassError, setMatchPass);
  };

  if (!AuthStore.user) {
    return (
      <div
        className={styles.mainContainer}
        style={{ justifyContent: "center" }}
      >
        <Loader />
      </div>
    );
  }

  const handleCloseModal = () => {
    setModal(false);
    setPassChanged(false);
    setCurrentPassError(false);
    setMatchPass(true);
  };

  return (
    <div className={styles.mainContainer}>
      <span className={styles.ProfileTitle}>Profile</span>
      <div className={styles.profileInfo}>
        <div className={styles.avatarBLock}>
          <label htmlFor="file-input" className={styles.inputAvatar}>
            {loadingImage ? (
              <div className={styles.loaderContainer}>
                <Loader />
              </div>
            ) : (
              <input
                id={"file-input"}
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            )}
            {AuthStore.user.photoURL && !loadingImage && (
              <img
                src={AuthStore.user.photoURL}
                alt="avatar"
                className={styles.avatar}
              />
            )}
          </label>
          <div className={styles.loginContainer}>
            <span className={styles.loginText}>{login}</span>
          </div>
        </div>
        <div style={{ marginTop: 25 }}>
          <div className={styles.informContainer}>
            <span className={styles.informText}>Email</span>
            <span className={styles.informText}>
              {AuthStore?.user.email ? AuthStore.user.email : "empty"}
            </span>
          </div>
          <div className={styles.informContainer}>
            <span className={styles.informText}>Nickname</span>
            <span className={styles.informText}>{login}</span>
          </div>
          <div className={styles.informContainer}>
            <span className={styles.informText}>Phone number</span>
            <span className={styles.informText}>
              {AuthStore?.user.phone_number
                ? AuthStore?.user.phone_number
                : "empty"}
            </span>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.editBtn}>Edit</button>
          </div>
        </div>
      </div>
      <div className={styles.changeAccContainer}>
        <Button onClick={() => setModal(true)} text={"Change password"} />
        <Button onClick={handleLogout} text={"log out"} orange />
      </div>
      <Modal active={modal} setActive={setModal}>
        <ModalChildren
          handleCloseModal={handleCloseModal}
          showPass={showPass}
          passChanged={passChanged}
          currentPassError={currentPassError}
          currentPass={currentPass}
          setCurrentPass={setCurrentPass}
          matchPass={matchPass}
          newPass={newPass}
          setNewPass={setNewPass}
          setShowPass={setShowPass}
          confirmPass={confirmPass}
          setConfirmPass={setConfirmPass}
          handleChangePass={handleChangePass}
        />
      </Modal>
    </div>
  );
});

export default Profile;
