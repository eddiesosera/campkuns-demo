import React, { useEffect } from "react";
import AccountOptions from "./accOptions";
import { useState } from "react";
import axios from "axios";

function AccountTopSection({ account }) {
  const API_URL = process.env.REACT_APP_API;
  const user = JSON.parse(localStorage.getItem("user"));
  const [img, setImg] = useState(user.profile_Img);
  const [optTgl, setOptTgl] = useState(false);
  const body = document.querySelector("body");
  console.log(localStorage.getItem("username"));

  const scrollPos = document.body.scrollTop;
  useEffect(
    () => {
      scrollPos !== 0 && setOptTgl(false);
      console.log("pos = " + scrollPos);

      body.addEventListener("scroll", () => {
        setOptTgl(false);
      });
    },
    [optTgl, scrollPos, body]
  );

  useEffect(
    () => {
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: API_URL + "/users/" + user.id,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: data
      };

      axios
        .request(config)
        .then(response => {
          const user = response.data;
          console.log(user);
          setImg(user.profile_Img);
        })
        .catch(error => {
          console.log(error);
        });
    },
    [img, API_URL, user]
  );

  return (
    <div className="userAccNav-wrap" onScroll={e => setOptTgl(false)}>
      <div
        className="userAccTop-navInfo"
        style={{
          zIndex: "2",
          display: "flex",
          height: "60px",
          width: "100vw",
          maxWidth: "470px",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#100f0e",
          backdropFilter: "blur(6px)",
          position: "fixed",
          top: "0",
          padding: "0 20px"
        }}
      >
        <i className="ri-arrow-left-line" onClick={e => window.history.back()} style={{ fontSize: "24px", color: "#e8b297" }} />
        <div className="userAcc" style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#ffe7d9",
              WebkitBackgroundClip: "text",
              marginRight: "5px",
              backgroundClip: "text",
              fontFamily: "Archivo",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            @{localStorage.getItem("username").toLocaleLowerCase()}
          </div>
          {account[0]?.user?.name.isUserVerified ? (
            <svg
              style={{ color: "#2294d7", background: "#fef3ec", borderRadius: "100px" }}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.86937 0.468323C5.4938 -0.156108 6.5062 -0.156108 7.13063 0.468323L7.6001 0.937795C7.825 1.16269 8.13003 1.28904 8.44808 1.28904H9.11201C9.99509 1.28904 10.711 2.00491 10.711 2.88799V3.55192C10.711 3.86997 10.8373 4.175 11.0622 4.3999L11.5317 4.86937C12.1561 5.4938 12.1561 6.5062 11.5317 7.13063L11.0622 7.6001C10.8373 7.825 10.711 8.13003 10.711 8.44808V9.11201C10.711 9.99509 9.99509 10.711 9.11201 10.711H8.44808C8.13003 10.711 7.825 10.8373 7.6001 11.0622L7.13063 11.5317C6.5062 12.1561 5.4938 12.1561 4.86937 11.5317L4.3999 11.0622C4.175 10.8373 3.86998 10.711 3.55192 10.711H2.88799C2.00491 10.711 1.28903 9.99509 1.28903 9.11201V8.44807C1.28903 8.13002 1.16269 7.825 0.937792 7.6001L0.468323 7.13063C-0.156108 6.5062 -0.156108 5.4938 0.468323 4.86937L0.937793 4.3999C1.16269 4.175 1.28903 3.86998 1.28903 3.55193V2.88799C1.28903 2.00491 2.00491 1.28904 2.88799 1.28904H3.55192C3.86998 1.28904 4.175 1.16269 4.3999 0.937795L4.86937 0.468323ZM8.38379 4.00131L5.32179 7.06364L3.67287 5.41471L3.20184 5.88574L5.32179 8.00569L8.85515 4.47233L8.38379 4.00131Z"
                fill="#ed6d22"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
        <i
          className="ri-more-fill"
          onClick={e => setOptTgl(true)}
          style={{ fontSize: "24px", color: "#e8b297", cursor: "pointer" }}
        />
      </div>
      <div
        className="acc_optionwrap"
        id="optionwrap"
        onClick={e => setOptTgl(false)}
        onScroll={e => setOptTgl(!optTgl)}
        style={{
          display: optTgl ? "block" : "none",
          position: "absolute",
          paddingTop: "3px",
          zIndex: "5",
          width: "100%",
          height: "100%",
          maxWidth: "470px",
          margin: "0 auto"
        }}
      >
        <AccountOptions />
      </div>

      <div className="accContent" style={{ marginTop: "60px", background: "#100f0e", borderRadius: "0px 0px 0px 0px" }}>
        <div
          className="userAccInfo"
          style={{
            display: "flex",
            padding: "0 20px",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
            alt="profile"
            src={img === "" ? "https://ucarecdn.com/3cfda29f-3620-4ce6-b488-7f0757853c6d/" : img}
            style={{
              width: "90px",
              height: "90px",
              objectFit: "cover",
              borderRadius: "100px",
              //   marginRight: "20px",
              border: "solid 0.5px #3E3E3E"
            }}
          />
          <div
            className="userInfo-wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "8px"
            }}
          >
            <div style={{ color: "#fef3ec", fontFamily: "Archivo", fontSize: "32px", fontWeight: "600" }}>
              {localStorage.getItem("username")}
            </div>
            <div
              style={{
                color: "#ffe7d9",
                fontFamily: "Hanken Grotesk",
                fontSize: "14px",
                fontWeight: "500",
                // background: "none",
                padding: "6px 12px",
                border: "",
                borderRadius: "9px",
                width: "fit-content",
                margin: "6px 0",
                background: "#272727"
              }}
            >
              Artist
            </div>
            {/* <div style={{ color: '#848484', fontFamily: 'Montserrat', fontSize: '12px', fontWeight: '500', marginTop: '10px' }}>NOW Gallery, Open Window</div> */}
          </div>
        </div>

        <div className="userInteractionAndBio-wrap" style={{ marginTop: "25px", padding: "0 20px" }}>
          <div
            className="user-stats"
            style={{
              display: "flex",
              marginBottom: "30px",
              width: "100%",
              maxWidth: "470px",
              gap: "30px",
              justifyContent: "center"
            }}
          >
            <div className="artworks statVal" style={{ display: "flex", alignItems: "center" }}>
              <div
                className="stats-label"
                style={{ color: "#fef3ec", fontFamily: "Montserrat", fontSize: "18px", fontWeight: "400", marginRight: "5px" }}
              >
                <i className="ri-layout-grid-line" />
              </div>
              <div
                className="stats-val"
                style={{ fontFamily: "Hanken Grotesk", color: "#fef3ec", fontSize: "15px", fontWeight: "400" }}
              >
                {account?.length}
              </div>
            </div>
            <div className="followers statVal" style={{ display: "flex", alignItems: "center" }}>
              <div
                className="stats-label"
                style={{ color: "#fef3ec", fontFamily: "Montserrat", fontSize: "18px", fontWeight: "400", marginRight: "5px" }}
              >
                <i className="ri-user-received-line" />
              </div>
              <div
                className="stats-val"
                style={{
                  fontFamily: "Hanken Grotesk",
                  color: "#fef3ec",
                  fontSize: "15px",
                  fontWeight: "400",
                  userSelect: "none"
                }}
              >
                {account?.length * 5}
              </div>
            </div>
            <div className="followers statVal" style={{ display: "flex", alignItems: "center" }}>
              <div
                className="stats-label"
                style={{
                  color: "#fef3ec",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "400",
                  marginRight: "5px",
                  userSelect: "none"
                }}
              >
                <i className="ri-user-shared-line" />
              </div>
              <div
                className="stats-val"
                style={{
                  fontFamily: "Hanken Grotesk",
                  color: "#fef3ec",
                  fontSize: "15px",
                  fontWeight: "400",
                  userSelect: "none"
                }}
              >
                {account?.length * 2}
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
            {/* <button style={{ width: '65%', height: '45px', border: 'none', borderRadius: '12px', background: '#F3761C', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', color: '#FFE7D9', marginRight: '10px' }}>Following</button> */}
            <div
              style={{
                height: "45px",
                // width: "45px",
                width: "fit-content",
                // background: "#272727",
                borderRadius: "12px",
                border: "1px solid #efe8e8",
                color: "#EFE8E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                marginRight: "10px",
                padding: "0 15px",
                cursor: "pointer",
                userSelect: "none",
                display: "none"
              }}
            >
              <i style={{ marginRight: "10px" }} class="ri-user-add-line" />
              <div style={{ fontSize: "15px", fontFamily: "Hanken Grotesk", fontWeight: "500" }}>Follow</div>
            </div>
            <div
              style={{
                height: "45px",
                width: "fit-content",
                // background: "#272727",
                border: "1px solid #efe8e8",
                borderRadius: "60px",
                color: "#EFE8E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                padding: "0 20px",
                cursor: "pointer",
                userSelect: "none"
              }}
            >
              <i style={{ marginRight: "10px" }} class="ri-mail-line" />
              <div style={{ fontSize: "15px", fontFamily: "Hanken Grotesk", fontWeight: "500" }}>Contact Me</div>
            </div>
          </div>

          <div
            className="userInteractive-bio"
            style={{
              paddingBottom: "30px",
              paddingTop: "10px",
              display: "flex",
              justifyContent: "center",
              color: "#ffe7d9",
              fontFamily: "Hanken Grotesk",
              fontSize: "14px",
              fontWeight: "400"
            }}
          >
            Hi I'm {localStorage.getItem("username")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountTopSection;
