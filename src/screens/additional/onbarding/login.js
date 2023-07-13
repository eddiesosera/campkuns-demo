import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
//import campkunsLogo from '../data/static/assets/campkuns-logo-draft1.svg'
import campkunsLogo from "../../../data/static/assets/campkuns-logo-draft1.svg";
import { LoaderTrans } from "../components/loader";
// import axios from 'a?xios';

function LogIn() {
  const API_URL = process.env.REACT_APP_API;

  const [formData, setFormData] = useState({});
  const [iconDisplay, setIconDisplay] = useState("block");
  const [colorIcon, setColorIcon] = useState("#33302E");
  const [colorMain, setColorMain] = useState("#33302E");
  const [colorBg, setColorBg] = useState("none");
  const [rememberTgl, setRememberTgl] = useState(false);
  const [submitTgl, setSubmitTgl] = useState(false);
  const navigate = useNavigate();
  const [btnOpacity, setBtnOpacity] = useState(0.5);
  const [psswdRef, setPsswdRef] = useState("");
  const usernmRef = useRef();
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(
    () => {
      console.log("");
      if (rememberTgl) {
        setColorBg("#FFE7D9");
        setColorMain("#FFE7D9");
        setIconDisplay("flex");
      } else {
        setColorBg("none");
        setColorMain("#33302E");
        setIconDisplay("none");
      }

      psswdRef === "" && setSubmitTgl(false);
      psswdRef === "" ? setBtnOpacity(0.5) : setBtnOpacity(1);

      if (submitTgl === false) {
        setSubmitTgl(false);
      } else {
        setSubmitTgl(true);
      }
    },
    [colorIcon, colorBg, colorMain, rememberTgl, formData.password, submitTgl, psswdRef, loginStatus]
  );

  const accessLogin = () => {
    let data = JSON.stringify({
      email: formData.email,
      password: formData.password
      //"password": "12345678l"
    });

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: API_URL + "/auth/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    axios
      .request(config)
      .then(response => {
        const token = response.data.tokens.access.token;
        const user = response.data.user;
        const username = response.data.user.name;

        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("username", username);

        window.location.reload();
        navigate("/");

        setSubmitTgl(true);
        setLoginStatus("");
      })
      .catch(error => {
        console.log(error);
        if (error?.response?.data?.message) {
          setLoginStatus(error.response?.data?.message + ". Kindly try again!");
        } else {
          setLoginStatus(error?.message + ". Kindly try again!");
        }
        console.log("login status: " + loginStatus);
      });
  };

  // const logInUser = () => {
  //     axios.get('http://10.0.0.106:5000/v1/users')
  //         .then((user) => {
  //             console.log(user.data.results)

  //             let users = user.data.results

  //             for (let i = 0; users.length > 0; i++) {
  //                 users[i].email === formData.email ? nav() : alert('wrong')
  //             }
  //         })
  // }

  return (
    <div style={{ margin: "auto 0" }}>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          width: "100vw",
          maxWidth: "470px",
          margin: "0 auto",
          height: "90vh"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={campkunsLogo} alt="logo" style={{ margin: "auto", position: "absolute", top: "40px" }} />

          <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
            <div
              style={{
                background: "#171717",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "20px",
                padding: "35px 10px",
                marginTop: "-20px"
              }}
            >
              <h1
                style={{
                  color: "#FFE7D9",
                  fontWeight: "600",
                  fontFamily: "Hanken Grotesk",
                  fontSize: "24px",
                  marginBottom: "35px",
                  userSelect: "none"
                }}
              >
                Welcome back
              </h1>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  padding: "0 20px"
                }}
              >
                <div
                  className="error_Status"
                  style={{
                    color: "#ff3422",
                    background: "#201d1d",
                    padding: loginStatus === "" ? 0 : "10px 15px",
                    borderRadius: "9px",
                    marginBottom: loginStatus === "" ? "0" : "35px",
                    fontSize: "15px",
                    fontWeight: "300",
                    fontFamily: "Archivo Narrow",
                    // display: loginStatus === "" ? "none" : "block",
                    opacity: loginStatus === "" ? 0 : 1,
                    width: loginStatus === "" ? "0px" : "100%",
                    height: loginStatus === "" ? "0px" : "fit-content",
                    transition: "opacity width 0.4s linear"
                  }}
                >
                  {loginStatus}
                </div>
                <div>
                  <input
                    required
                    style={{
                      height: "40px",
                      width: "100%",
                      borderRadius: "12px",
                      border: "1px solid #33302E",
                      background: "none",
                      color: "#fef3ec",
                      fontFamily: "Hanken Grotesk",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "15px",
                      outline: "none",
                      marginBottom: "15px"
                    }}
                    type="email"
                    placeholder="Username or email"
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    required
                    style={{
                      height: "40px",
                      width: "100%",
                      borderRadius: "12px",
                      border: "1px solid #33302E",
                      background: "none",
                      color: "#fef3ec",
                      fontFamily: "Hanken Grotesk",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "15px",
                      outline: "none"
                    }}
                    type="password"
                    placeholder="Password"
                    onChange={e => {
                      setFormData({ ...formData, password: e.target.value });
                      setPsswdRef(e.target.value);
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    margin: "20px 5px",
                    alignItems: "center",
                    width: "fit-content",
                    userSelect: "none",
                    cursor: "pointer"
                  }}
                  onClick={e => {
                    setRememberTgl(!rememberTgl);
                  }}
                >
                  <div
                    style={{
                      height: "16px",
                      width: "16px",
                      border: "1px solid ",
                      background: colorBg,
                      borderColor: colorMain,
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all 0.15s cubic-bezier(0.2, 0.55, 0.90, 0.35)"
                    }}
                  >
                    <i
                      className="ri-check-fill"
                      style={{ color: colorIcon, fontWeight: "600", display: iconDisplay, fontSize: "13px" }}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      fontFamily: "Poppins",
                      color: colorMain,
                      fontSize: "13px",
                      fontWeight: "400",
                      transition: "all 0.15s cubic-bezier(0.2, 0.55, 0.90, 0.35)"
                    }}
                  >
                    Remember me
                  </div>
                </div>

                <button
                  onClick={
                    e => {
                      if (psswdRef !== "") {
                        accessLogin();
                        e.preventDefault();
                        console.log(formData);
                        // logInUser()
                        setSubmitTgl(true);
                        setTimeout(() => {
                          setSubmitTgl(false);
                        }, 500);
                      } else if (loginStatus === "") {
                        // return null;
                        // e.preventDefault();
                        setSubmitTgl(false);
                      }
                    }

                    // #83624a }}}}} #F3761C
                  }
                  style={{
                    background: "#F3761C",
                    opacity: btnOpacity,
                    color: "#333333",
                    height: "40px",
                    width: "100%",
                    border: "none",
                    borderRadius: "12px",
                    fontFamily: "Hanken Grotesk",
                    fontWeight: "600",
                    fontSize: "16px",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "all 0.4s linear"
                  }}
                >
                  <div style={{ display: submitTgl ? "none" : "block" }}>Log in</div>
                  <div style={{ display: submitTgl ? "block" : "none" }}>
                    <LoaderTrans />
                  </div>
                </button>

                <div style={{ opacity: "0.7" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "30px 0" }}>
                    <hr style={{ width: "110%", border: "0.5px solid #2b2927" }} />
                    <div
                      style={{
                        width: "30%",
                        display: "flex",
                        justifyContent: "center",
                        color: "#55514c",
                        fontFamily: "Hanken Grotesk",
                        fontWeight: "600",
                        fontSize: "14px"
                      }}
                    >
                      Or
                    </div>
                    <hr style={{ width: "100%", border: "0.5px solid #2b2927" }} />
                  </div>
                  <div className="or_btn_wrap" style={{ display: "flex" }}>
                    <button
                      style={{
                        border: "none",
                        background: "#33302E",
                        borderRadius: "12px",
                        height: "40px",
                        width: "100%",
                        color: "#FFE7D9",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Hanken Grotesk",
                        fontSize: "13px",
                        fontWeight: "500"
                      }}
                    >
                      <i className="ri-google-line" style={{ marginRight: "10px", fontWeight: "600" }} />
                      Log in with Google
                    </button>
                    <Link
                      style={{
                        color: "#FFE7D9",
                        textDecoration: "none",
                        fontWeight: "500",
                        fontFamily: "Hanken Grotesk",
                        width: "100%"
                      }}
                      to="/create"
                    >
                      <button
                        style={{
                          border: "none",
                          background: "#33302E",
                          borderRadius: "12px",
                          height: "40px",
                          width: "100%",
                          color: "#FFE7D9",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontFamily: "Hanken Grotesk",
                          fontSize: "13px",
                          fontWeight: "500",
                          marginLeft: "10px"
                        }}
                      >
                        Join Campkuns
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "0px",
              // borderTop: "solid 0.5px #343434",
              width: "100vw",
              maxWidth: "470px",
              padding: "40px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "15px"
            }}
          >
            {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px', width: '100%' }}>

                            <Link style={{ color: '#FFE7D9', textDecoration: 'none', fontWeight: '500', fontFamily: 'Poppins', width: '100%' }} to="/create">
                                <button style={{ border: "none", borderRadius: '12px', height: '45px', width: '100%', color: '#FFE7D9', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '600', background: '#33302E' }}>Join Campkuns</button>
                            </Link>
                        </div> */}
            <div style={{ opacity: "0.7" }}>
              <Link
                style={{ color: "#FFE7D9", textDecoration: "none", fontWeight: "500", fontFamily: "Hanken Grotesk" }}
                to="/forgotPassword"
              >
                I forgot my password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
