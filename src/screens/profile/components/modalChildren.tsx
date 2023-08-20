import React, { Dispatch, SetStateAction } from "react";
import styles from "../styles.module.css";
import SuccessIcon from "../../../assets/svg/successIcon";
import Visible from "../../../assets/svg/visible";
import CloseIcon from "../../../assets/svg/closeIcon";

interface ChildrenProps {
  showPass: number;
  passChanged: boolean;
  currentPassError: boolean;
  currentPass: string;
  setCurrentPass: Dispatch<SetStateAction<string>>;
  matchPass: boolean;
  newPass: string;
  setNewPass: Dispatch<SetStateAction<string>>;
  setShowPass: Dispatch<SetStateAction<number>>;
  confirmPass: string;
  setConfirmPass: Dispatch<SetStateAction<string>>;
  handleChangePass: () => void;
  handleCloseModal: () => void;
}

const ModalChildren = (props: ChildrenProps) => {
  const {
    showPass,
    passChanged,
    currentPassError,
    currentPass,
    setCurrentPass,
    setShowPass,
    matchPass,
    newPass,
    setNewPass,
    confirmPass,
    setConfirmPass,
    handleChangePass,
    handleCloseModal,
  } = props;

  return (
    <div className={styles.modalContainer}>
      {passChanged ? (
        <>
          <span className={styles.successText}>
            Password Successful changed!
          </span>
          <div className={styles.iconContainer}>
            <SuccessIcon />
          </div>
        </>
      ) : (
        <>
          <span className={styles.modalTitle}>Change Password</span>
          <div className={styles.inputContainer}>
            <input
              type={showPass === 1 ? "text" : "password"}
              placeholder={"current Password"}
              className={
                currentPassError ? styles.modalInputErr : styles.modalInput
              }
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
            />
            <Visible className={styles.icon} onclick={() => setShowPass(1)} />
          </div>
          <div className={styles.inputContainer}>
            <input
              type={showPass === 2 ? "text" : "password"}
              placeholder={"new Password"}
              className={!matchPass ? styles.modalInputErr : styles.modalInput}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <Visible className={styles.icon} onclick={() => setShowPass(2)} />
          </div>
          <div>
            <div className={styles.inputContainer}>
              <input
                type={showPass === 3 ? "text" : "password"}
                placeholder={"repeat Password"}
                className={
                  !matchPass ? styles.modalInputErr : styles.modalInput
                }
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <Visible className={styles.icon} onclick={() => setShowPass(3)} />
            </div>
            <div className={styles.btnModalContainer}>
              <button className={styles.modalBtn} onClick={handleChangePass}>
                Confirm
              </button>
            </div>
          </div>
        </>
      )}
      <div className={styles.closeBtn}>
        <CloseIcon onclick={handleCloseModal} />
      </div>
    </div>
  );
};

export default ModalChildren;
