import styles from "../../styles/SigninContainer.module.css";

import { useState } from "react";
import { useRouter } from "next/router";

import Input from "../common/CommonInput";
import ButtonSubmit from "../common/CommonButtonSubmit";
import DividerSmall from "../common/DividerSmall";

const SigninContainer = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  const [signUpView, setSignUpView] = useState(false);

  let token;

  try {
    token = localStorage.getItem("token");
  } catch {}

  if (token) {
    router.push({
      pathname: "/profile",
    });
  }

  // create customer
  const signUp = async () => {
    if (email == "" || password == "") {
      if (email == "") {
        setEmailMsg("E-Mail required");
      } else if (password == "") {
        setEmailMsg("");
        setPasswordMsg("Password required");
      }
    } else {
      setEmailMsg("");
      setPasswordMsg("");

      const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
      const goodEmail = regexEmail.exec(email);

      if (!goodEmail) {
        setEmailMsg("Invalid E-Mail");
      } else {
        fetch("/api/customers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success == true) {
              router.push({
                pathname: "/",
              });
            }
          });
      }
    }
  };

  // signin customer
  const signIn = async () => {
    if (email == "" || password == "") {
      if (email == "") {
        setEmailMsg("E-Mail required");
      } else if (password == "") {
        setEmailMsg("");
        setPasswordMsg("Password required");
      }
    } else {
      setEmailMsg("");
      setPasswordMsg("");

      const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
      const goodEmail = regexEmail.exec(email);

      if (!goodEmail) {
        setEmailMsg("Invalid E-Mail");
      } else {
        setEmailMsg("");
        fetch("/api/signin", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.email == true && data.password == true) {
              localStorage.setItem("token", data.token);

              router.push({
                pathname: "/",
              });
            } else if (data.email == false) {
              setEmailMsg("No user with this E-Mail found");
            } else if (data.email == true && data.password == false) {
              setPasswordMsg("Incorrect password");
            }
          });
      }
    }
  };

  return (
    <div className={styles.signInContainer}>
      {signUpView == false ? (
        <div className={styles.signInTile}>
          <h1>Sign in</h1>
          <DividerSmall />
          <div className={styles.signInTileInput}>
            <Input
              label={"E-Mail"}
              placeholder={"Type in your e-mail"}
              msg={emailMsg}
              setvalue={setEmail}
              type={"text"}
            />
            <Input
              label={"Password"}
              placeholder={"Type in your password"}
              msg={passwordMsg}
              setvalue={setPassword}
              type={"password"}
            />
            <ButtonSubmit label={"Submit"} func={signIn} />
          </div>
          <div
            className={styles.signInTileLink}
            onClick={() => setSignUpView(true)}
          >
            No Account? Sign up
          </div>
        </div>
      ) : (
        <div className={styles.signInTile}>
          <h1>Sign up</h1>
          <DividerSmall />
          <div className={styles.signInTileInput}>
            <Input
              label={"E-Mail"}
              placeholder={"Type in your e-mail"}
              msg={emailMsg}
              setvalue={setEmail}
              type={"text"}
            />
            <Input
              label={"Password"}
              placeholder={"Type in your password"}
              msg={passwordMsg}
              setvalue={setPassword}
              type={"password"}
            />
            <ButtonSubmit label={"Create account"} func={signUp} />
          </div>
          <div
            className={styles.signInTileLink}
            onClick={() => setSignUpView(false)}
          >
            Back to sign in
          </div>
        </div>
      )}
    </div>
  );
};

export default SigninContainer;
