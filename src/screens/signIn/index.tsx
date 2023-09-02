// modules
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
// store
import AuthStore from "../../store/auth";
//styles
import styles from "./styles.module.css";

const SignIn = observer((props) => {
  const { navigate } = props;
  const { login } = AuthStore;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    login(email, password, navigate, setError);
  };

  useEffect(() => {
    const onKeypress = (e) => {
      if (e.key === "Enter") {
        console.log(email, password);
      }
    };

    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <p className={styles.text}>Sign In</p>
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
            type="password"
            placeholder={"password"}
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btnSubmit} onClick={handleLogin}>
            Submit
          </button>
        </div>
        {error && (
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default SignIn;
