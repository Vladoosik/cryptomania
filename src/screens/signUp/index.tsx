// modules
import React, { useState } from "react";
import { observer } from "mobx-react";
// store
import AuthStore from "../../store/auth";
//styles
import styles from "../signIn/styles.module.css";

const SignUp = observer((props) => {
  const { navigate } = props;
  const { registration } = AuthStore;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleRegistration = () => {
    registration(email, password, setSuccess, navigate, setError);
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <p className={styles.text}>Please sign Up</p>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder={"email"}
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={"password"}
            className={styles.input}
          />
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btnSubmit} onClick={handleRegistration}>
            Submit
          </button>
        </div>
        {error && (
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>{error}</p>
          </div>
        )}
        {success && (
          <div className={styles.errorContainer}>
            <p className={styles.successText}>{success}</p>
          </div>
        )}
        {!success && !error && (
          <div className={styles.textContainer}>
            <span className={styles.singInText}>already have account ?</span>
            <div className={styles.btnContainer}>
              <span
                onClick={() => navigate("/signIn")}
                className={styles.singInBtn}
              >
                sign in
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default SignUp;
