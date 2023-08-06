import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Moments = () => {
  const [mmntTgl, setMmntTgl] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [img, setImg] = useState(user.profile_Img);

  const mmntSwitch = () => {
    setMmntTgl(!mmntTgl);
  };

  const [momentsList, setMomentsList] = useState([
    {
      user: {
        username: "jeffkoons",
        name: "jeff",
        profile_imageURL: "https://f4.bcbits.com/img/0029532954_10.jpg"
      },
      content_banner: "https://i.pinimg.com/564x/3b/1f/33/3b1f33ac496be068a477361ab18dcbe8.jpg",
      moment_content: [""],
      moment_engaged: "",
      date: "",
      moment_interactive: {
        location: "",
        exhibition: "",
        link: ""
      }
    },
    {
      user: {
        username: "jadep27",
        name: "Jade P",
        profile_imageURL: "https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/"
      },
      content_banner: "https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA",
      moment_content: [""],
      moment_engaged: "",
      date: "",
      moment_interactive: {
        location: "",
        exhibition: "",
        link: ""
      }
    },
    {
      user: {
        username: "eddie",
        name: "Eddie",
        profile_imageURL: "https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/"
      },
      content_banner: "https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA",
      moment_content: [""],
      moment_engaged: "",
      date: "",
      moment_interactive: {
        location: "",
        exhibition: "",
        link: ""
      }
    },
    {
      user: {
        username: "eddie",
        name: "Eddie",
        profile_imageURL: "https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/"
      },
      content_banner: "https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA",
      moment_content: [""],
      moment_engaged: "",
      date: "",
      moment_interactive: {
        location: "",
        exhibition: "",
        link: ""
      }
    },
    {
      user: {
        username: "eddie",
        name: "Eddie",
        profile_imageURL: "https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/"
      },
      content_banner: "https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA",
      moment_content: [""],
      moment_engaged: "",
      date: "",
      moment_interactive: {
        location: "",
        exhibition: "",
        link: ""
      }
    }
  ]);

  return (
    <div
      style={{
        padding: "10px 15px",
        width: "100vw",
        maxWidth: "470px",
        margin: "0 auto",
        borderBottom: "0.3px solid #333333",
        marginTop: "10px",
        overflow: "clip",
        flexWrap: "wrap"
      }}
    >
      <MomentScreen mmntSwtch={mmntSwitch} mmntTgl={mmntTgl} />
      <div
        style={{
          fontFamily: "Hanken Grotesk",
          fontWeight: "500",
          display: "flex",
          color: "#FFE7D9",
          margin: "10px 0",
          marginBottom: "20px"
        }}
      >
        <i className="ri-sparkling-fill" style={{ marginRight: "10px" }} />
        <div>What's Happening</div>
        {/* Exchange with artists of the week(circular radius for border) and put to open space */}
      </div>
      <div
        className="moment-wrap"
        style={{
          width: "99%",
          maxWidth: "470px",
          margin: "10px auto",
          overflowY: "scroll",
          marginTop: "10px",
          display: "flex",
          gap: "15px"
        }}
      >
        <div>
          <div
            style={{
              height: "140px",
              width: "140px",
              border: "1px solid #685c55",
              borderRadius: "15px",
              // background: "linear-gradient(180deg, #202020 10%, rgba(30, 30, 30, 0) 100%)",
              backdropFilter: "grayscale(70%)"
            }}
          >
            <div
              className="userMoment-wrap-overlay"
              style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "10px" }}
            >
              <img
                src={img === "" ? "https://ucarecdn.com/3cfda29f-3620-4ce6-b488-7f0757853c6d/" : img}
                alt="mimg"
                style={{
                  height: "70px",
                  width: "139.5px",
                  background: "gray",
                  position: "absolute",
                  marginTop: "49.5px",
                  marginLeft: "-10px",
                  borderRadius: "9px 9px 0px 0px",
                  objectFit: "cover",
                  filter: "saturate(0)"
                  // borderRadius: "100px"
                }}
              />
              {/* <div
                style={{
                  fontFamily: "Archivo Narrow",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#FFE7D9",
                  marginLeft: "5px"
                }}
              >
                {localStorage.getItem("username")}
              </div> */}
            </div>
          </div>
          <div style={{ marginTop: "-127.5px" }}>
            <div
              style={{
                height: "134px",
                width: "134px",
                margin: "3px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontFamily: "Hanken Grotesk",
                fontSize: "14px",
                fontWeight: "500"
              }}
            >
              <i
                style={{
                  fontSize: "24px",
                  zIndex: "1",
                  color: "#ed6d22",
                  background: "#100f0e",
                  padding: "5px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9px",
                  border: "1px solid #363331"
                }}
                class="ri-add-line"
              />
              <br />
              <div style={{ color: "#ed6d22", marginTop: "-6px", zIndex: "1" }}>Your moments</div>
            </div>
          </div>
        </div>
        {momentsList.map(moment => {
          return (
            <div onClick={mmntSwitch} style={{ cursor: "pointer" }}>
              <div
                style={{
                  height: "140px",
                  width: "140px",
                  border: "2px solid #ed6d22",
                  strokeDashArray: "15%25%2c 13%25",
                  borderRadius: "9px",
                  background: "linear-gradient(180deg, #202020 10%, rgba(30, 30, 30, 0) 100%)",
                  backdropFilter: "grayscale(70%)"
                }}
              >
                <div
                  className="userMoment-wrap-overlay"
                  key={moment.user.name}
                  style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "10px" }}
                >
                  <img
                    src={moment.user.profile_imageURL}
                    alt="mimg"
                    style={{ height: "20px", width: "20px", background: "gray", borderRadius: "100px" }}
                  />
                  <div
                    style={{
                      fontFamily: "Archivo Narrow",
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#FFE7D9",
                      marginLeft: "5px"
                    }}
                  >
                    {moment.user.username}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "-140px" }}>
                <img
                  src={moment.content_banner}
                  alt="moment"
                  style={{ height: "134px", width: "134px", margin: "3px", objectFit: "cover", borderRadius: "6px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MomentScreen = ({ mmntSwtch, mmntTgl }) => {
  const [ldrAnime, setLdrAnime] = useState(0);

  const [dsplTgl, setDsplTgl] = useState(false);
  useLayoutEffect(
    () => {
      if (mmntTgl) {
        setTimeout(() => {
          mmntTgl && mmntSwtch();
          !mmntTgl && setLdrAnime(0);
        }, 15000);
      }

      setTimeout(() => {
        if (ldrAnime <= 90) {
          setLdrAnime(ldrAnime + 10);
        }
      }, 10);
    },
    [dsplTgl, mmntTgl, ldrAnime]
  );

  useLayoutEffect(
    () => {
      if (ldrAnime === 100 || mmntTgl === true) {
        setLdrAnime(0);
      }
    },
    [ldrAnime]
  );

  return (
    <div
      style={{
        display: mmntTgl ? "block" : "none",
        height: mmntTgl ? "100vh" : "0vh",
        width: "100vw",
        zIndex: "101",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "#272727",
        transition: "all 6s linear"
      }}
    >
      <div className="mmntWrap">
        <div
          className="mmntTop-wrap"
          style={{
            background: "linear-gradient(180deg, #1E1C1A 0%, rgba(30, 28, 26, 0) 100%)",
            position: "fixed",
            zIndex: "2",
            width: "100%",
            padding: "20px 20px"
          }}
        >
          <div style={{ width: "100%", maxWidth: "470px", margin: "0 auto" }}>
            <div
              className="mmnt-topLoader-wrap"
              style={{ height: "4px", borderRadius: "3px", width: "100%", background: "#333333", marginBottom: "15px" }}
            >
              <div
                className="mmnt-topLoader-percent"
                style={{
                  height: "4px",
                  borderRadius: "4px",
                  width: ldrAnime + "%",
                  background: "white",
                  transition: "width 0.1s linear"
                }}
              />
            </div>
            <div
              className="mmnt-topInteract"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <div className="mmnt-topInteract-left" style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="ri-arrow-left-line"
                  style={{ color: "#FFE7D9", fontSize: "20px", cursor: "pointer" }}
                  onClick={mmntSwtch}
                />
                <div className="mmnt-topInteract-left-user" style={{}}>
                  <Link
                    to="/account"
                    style={{ display: "flex", alignItems: "center", marginLeft: "20px", textDecoration: "none" }}
                  >
                    <img
                      className="mmnt-content"
                      style={{ objectFit: "cover", height: "26px", width: "26px", borderRadius: "30px" }}
                      src="https://f4.bcbits.com/img/0029532954_10.jpg"
                      alt=""
                    />
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#FFE7D9",
                        marginLeft: "7.5px"
                      }}
                    >
                      Eddie
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mmnt-topInteract-left">
                <i class="ri-more-fill" style={{ color: "#FFE7D9", fontSize: "20px" }} />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            width: "100%",
            height: "100%"
          }}
        >
          <img
            className="mmnt-content"
            style={{ objectFit: "contain", width: "100%", height: "fit-content", borderRadius: "0px" }}
            src="https://i.pinimg.com/564x/3b/1f/33/3b1f33ac496be068a477361ab18dcbe8.jpg"
            alt=""
          />
        </div>

        <div
          className="mmntBtm-wrap"
          style={{
            position: "fixed",
            bottom: "0",
            background: "linear-gradient(180deg, rgba(30, 28, 26, 0) 0%, #1E1C1A 100%)",
            width: "100%"
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              padding: "40px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              maxWidth: "470px"
            }}
          >
            <div className="mmnt-Btm-left" style={{ width: "90%" }}>
              <div
                className="mmnt-Btm-left-Top"
                style={{
                  fontSize: "14px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "#FFE7D9",
                  textAlign: "center",
                  padding: "0 20px"
                }}
              >
                Where we're at right now!
              </div>
              <hr style={{ border: "0.5px solid #303030", margin: "10px auto", width: "70%" }} />
              <div className="mmnt-Btm-left-Btm" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                  className="mmnt-Btm-left-Btm-ViewsWrap"
                  style={{ display: "flex", alignItems: "center", color: "#FFE7D9", opacity: "0.5" }}
                >
                  <i className="ri-eye-line" />
                  <div style={{ marginLeft: "10px", fontFamily: "neue-haas-grotesk-text", fontSize: "12px" }}>100 views</div>
                </div>

                <div
                  className="mmnt-Btm-left-Btm-LikesWrap"
                  style={{ display: "flex", alignItems: "center", color: "#FFE7D9", opacity: "0.5" }}
                >
                  <i className="ri-thumb-up-line" />
                  <div style={{ marginLeft: "10px", fontFamily: "neue-haas-grotesk-text", fontSize: "12px" }}>100 likes</div>
                </div>
              </div>
            </div>
            <div
              className="mmnt-BtmInteract-Right"
              style={{ marginLeft: "20px", display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div
                style={{
                  height: "36px",
                  width: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#292929",
                  fontSize: "20px",
                  borderRadius: "9px"
                }}
              >
                <i className="ri-map-pin-2-line" style={{ color: "#FFE7D9" }} />
              </div>
              <div
                style={{
                  height: "36px",
                  width: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#292929",
                  fontSize: "20px",
                  borderRadius: "9px"
                }}
              >
                <i className="ri-link" style={{ color: "#FFE7D9" }} />
              </div>
              <div
                style={{
                  height: "36px",
                  width: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#292929",
                  fontSize: "20px",
                  borderRadius: "9px"
                }}
              >
                {" "}
                <i className="ri-thumb-up-line" style={{ color: "#FFE7D9" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
