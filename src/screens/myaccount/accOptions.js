import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AccountOptions({ cardTag, account }) {
  const API_URL = process.env.REACT_APP_API;

  const navigate = useNavigate();

  const profSetting = () => {
    navigate("/profile-settings");
  };
  const accSetting = () => {
    navigate("/account-settings");
  };
  //   const searchSimilar = () => {
  //     alert(cardTag);
  //     sessionStorage.setItem("Similar Item", cardTag);
  //     navigate("/search");
  //   };
  const shareProf = () => {
    alert("Share");
  };
  const about = () => {
    navigate("/about");
  };
  //   const deletePost = () => {
  //     let config = {
  //       method: "delete",
  //       maxBodyLength: Infinity,
  //       url: API_URL + "/users/" + account?.id,
  //       headers: {
  //         "Content-Type": "application/json"
  //         // 'authorization': `Bearer ${localStorage.getItem('token')}`
  //       }
  //     };

  //     axios
  //       .request(config)
  //       .then(response => {
  //         // console.log(JSON.stringify(response.data));
  //         // window.location.reload();
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   };
  const logOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "");
    localStorage.setItem("user", "");
    //window.location.reload()
    navigate("/login");
  };

  const optionList = [
    {
      icon: "ri-account-box-line",
      label: "Edit Profile ",
      function: profSetting,
      color: ["#FFFFFF", "#CDCDCD"],
      border: "block"
    },
    {
      icon: "ri-user-settings-line",
      label: "Account Settings",
      function: accSetting,
      color: ["#FFFFFF", "#CDCDCD"],
      border: "block"
    },
    {
      icon: "ri-share-forward-fill",
      label: "Share Profile",
      function: shareProf,
      color: ["#FFFFFF", "#CDCDCD"],
      border: "block"
    },
    {
      icon: "ri-information-line",
      label: "About Campkuns",
      function: about,
      color: ["#ed6d22", "#ed6d22"],
      border: "block"
    },
    {
      icon: "ri-logout-box-line",
      label: "Logout",
      function: logOut,
      color: ["#ED2615", "#ED2615"],
      border: "none"
    }
  ];

  return (
    <div
      style={{
        width: "93vw",
        // position: "absolute",
        maxWidth: "470px",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "-50px",
        marginLeft: "20px"
        // zIndex: "5",
        // top: "0",
        // right: "0"
      }}
    >
      <ul
        className="option"
        style={{
          margin: "0",
          padding: "15px",
          listStyle: "none",
          width: "215px",
          borderRadius: "15px",
          backgroundColor: "#232323",
          display: "flex",
          flexDirection: "column",
          height: "content-fit",
          justifyContent: "space-between",
          marginTop: "10px",
          marginRight: "10px",
          minHeight: "200px",
          boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.05)",
          border: "0.75px solid rgb(54, 54, 54)"
        }}
      >
        {optionList?.map(cardoption => {
          return (
            <li
              key={cardoption.label}
              onClick={cardoption.function}
              className="cardOption-wrapper"
              style={{
                cursor: "pointer",
                display: "flex",
                fontSize: "16px",
                fontFamily: "Hanken Grotesk",
                alignItems: "flex-start",
                userSelect: "none",
                flexDirection: "column"
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <i style={{ color: cardoption.color[0], fontSize: "22px" }} className={cardoption.icon} />
                <div
                  style={{
                    marginLeft: "10px",
                    height: "18px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    fontSize: "15px",
                    color: cardoption.color[1]
                  }}
                >
                  {cardoption.label}
                </div>
              </div>
              <hr style={{ width: "100%", border: "0.3px solid #2B2B2B", display: cardoption.border, margin: "10px 0" }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AccountOptions;
