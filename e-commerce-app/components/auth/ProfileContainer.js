import styles from "../../styles/ProfileContainer.module.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Input from "../common/CommonInput";
import ButtonSubmitHalf from "../common/CommonButtonSubmitHalf";
import DividerSmall from "../common/DividerSmall";

const ProfileContainer = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");

  // GET customer data for profile
  const getCustomer = async () => {
    let token = localStorage.getItem("token");

    fetch(process.env.HOST_URL + "/api/profile", {
      method: "GET",
      headers: new Headers({
        authorization: "Bearer " + token,
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.data.email);
      });
  };

  useEffect(() => {
    getCustomer();
  }, []);

  // GET customer data for profile
  const updateProfile = async () => {
    if (email == "") {
      if (email == "") {
        setEmailMsg("E-Mail required");
      }
    } else {
      setEmailMsg("");

      const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
      const goodEmail = regexEmail.exec(email);

      if (!goodEmail) {
        setEmailMsg("Invalid E-Mail");
      } else {
        fetch(process.env.HOST_URL + "/api/customers", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({
            email: email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            router.push({
              pathname: "/",
            });
          });
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    router.push({
      pathname: "/",
    });
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileTile}>
        <h1>Profile</h1>
        <DividerSmall />
        <div className={styles.profileTileInput}>
          <Input
            label={"E-Mail"}
            placeholder={"Type in your e-mail"}
            msg={emailMsg}
            setvalue={setEmail}
            value={email}
            type={"text"}
          />
        </div>
        <div className={styles.profileTileFooter}>
          <ButtonSubmitHalf label={"Log out"} func={logout} />
          <ButtonSubmitHalf label={"Save"} func={updateProfile} />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
